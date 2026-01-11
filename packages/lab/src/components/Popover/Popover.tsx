'use client';

/* eslint-disable react-hooks/refs */
import React, {
  forwardRef,
  ReactNode,
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
} from 'react';
import { PopoverContext } from '../../context/PopoverContext';
import PopoverTrigger from './PopoverTrigger';
import { PopoverComposition, PopoverProps } from '../../types';
import { useDelayUnmount } from '../../hooks/useDelayUnmount';
import PopoverContent from './PopoverContent';
import {
  createPositionFromPlacement,
  Coords,
  buildPlacement,
  growContentPosition,
  cn,
} from '../../utils/common';
import ClientPortal from '../utility/ClientPortal';
import { useWindowResize } from '../../hooks/useWindowResize';
import { useFocusTrap } from '../../hooks/useFocusTrap';
import PopoverFocusTrapper from './PopoverFocusTrapper';
import {
  PopoverRootContext,
  usePopoverRootContext,
} from '../../context/PopoverRootContext';
import { usePreventBodyScroll } from '../../hooks/usePreventBodyScroll';
import { useResizeObserver } from '../../hooks/useResizeObserver';
import { usePositionObserver } from '../../hooks/usePositionObserver';
import { Slot } from '@/components/utility/Slot';
import { usePrevValue } from '@/hooks';

const PopoverBase = forwardRef<
  HTMLDivElement,
  PopoverProps & PopoverComposition
>(
  (
    {
      children,
      trigger,
      content,
      shouldFlip = true,
      shouldBlockScroll = true,
      shouldCloseOnScroll = !shouldBlockScroll,
      shouldCloseOnBlur = true,
      shouldCloseOnEsc = true,
      backdrop = 'none',
      isNested = false,
      placement = 'bottom-center',
      offset = 8,
      // showArrow = false,
      isDisabled,
      isOpen: controlledIsOpen,
      onOpen,
      onClose,
      onBlur,
      onOpenChange,
      openOnHover,
      fullWidth = false,
      focusTriggerOnClose = true,
      delayShow = 0,
      delayHide = 0,
      hoverableContent = true,
      growContent = false,
      classNames,
      focusTrapProps = {
        autoFocus: true,
        trapFocus: true,
      },
      ...rest
    },
    ref,
  ) => {
    const prevControlledIsOpen = usePrevValue(controlledIsOpen);
    const { autoFocus, trapFocus } = focusTrapProps;
    const popoverContentRef = useRef<HTMLDivElement>(null);
    const popoverTriggerRef = useRef<HTMLDivElement>(null);
    const showDelayRef = useRef<NodeJS.Timeout | null>(null);
    const hideDelayRef = useRef<NodeJS.Timeout | null>(null);

    const onOpenRef = useRef(onOpen);
    const onCloseRef = useRef(onClose);
    const onBlurRef = useRef(onBlur);
    const onOpenChangeRef = useRef(onOpenChange);

    const popoverRootContext = usePopoverRootContext();
    const { isRootOpen, rootPopoverId } = popoverRootContext || {};
    const isRootPopover = !popoverRootContext;
    const popoverId = useId();

    const [isOpen, setIsOpen] = useState(false);
    const [isHoverOpen, setIsHoverOpen] = useState(false);
    const [popoverContentCoords, setPopoverContentCoords] = useState<Coords>(
      {},
    );
    const open = controlledIsOpen ?? isOpen;
    const isExpanded = open || isHoverOpen;

    const isMounted = useDelayUnmount(isExpanded, 150);

    const isRootExpanded = isExpanded && (isRootPopover || !!isRootOpen);

    let popoverTrigger: ReactNode | null = trigger ?? null;
    let popoverContent: ReactNode | null = content ?? null;

    const { firstFocusableItemRef, focusContainerRef, lastFocusableItemRef } =
      useFocusTrap(open && !!trapFocus, !!autoFocus);

    // Validate children
    React.Children.forEach(children, (child) => {
      if (!React.isValidElement(child)) return;

      switch (child.type) {
        case PopoverTrigger: {
          if (popoverTrigger) {
            throw new Error(
              'Popover component can have only one PopoverTrigger or a "trigger" prop, not both',
            );
          }

          popoverTrigger = child;
          break;
        }

        case PopoverContent: {
          if (popoverContent) {
            throw new Error(
              'Popover component can have only one PopoverContent or a "content" prop, not both',
            );
          }

          popoverContent = child;
          break;
        }

        default: {
          throw new Error(
            `Popover component only accepts PopoverTrigger and PopoverContent components as children`,
          );
        }
      }
    });

    if (!popoverTrigger) {
      throw new Error(
        'Popover component requires a PopoverTrigger or a "trigger" prop',
      );
    }

    if (!popoverContent) {
      throw new Error('Popover component requires a PopoverContent');
    }

    const setContentCoords = useCallback(() => {
      if (
        !isExpanded ||
        !popoverTriggerRef.current ||
        !popoverContentRef.current
      )
        return;

      const triggerRect = popoverTriggerRef.current.getBoundingClientRect();
      const popoverRect = popoverContentRef.current.getBoundingClientRect();

      if (growContent) {
        const coords = growContentPosition(placement, offset, triggerRect);
        setPopoverContentCoords(coords);

        return;
      }

      const fitPlacement = shouldFlip
        ? buildPlacement(placement, offset, triggerRect, popoverRect)
        : placement;
      const coords = createPositionFromPlacement(
        fitPlacement,
        offset,
        triggerRect,
        popoverContentRef.current,
      );

      setPopoverContentCoords(coords);
    }, [placement, offset, shouldFlip, growContent, isExpanded]);

    // Handle onClose
    const handleClose = useCallback(
      (focusTrigger = focusTriggerOnClose) => {
        if (isDisabled) return;

        if (onCloseRef.current) {
          onCloseRef.current();
        }

        setIsOpen(false);
        setIsHoverOpen(false);
        onOpenChangeRef.current?.(false);

        if (focusTrigger) {
          // Delay focus to prevent the current keydown event from firing on the trigger
          requestAnimationFrame(() => {
            popoverTriggerRef.current?.focus();
          });
        }
      },
      [isDisabled, focusTriggerOnClose],
    );

    const handleOpen = useCallback(() => {
      if (isDisabled || open) return;

      if (onOpenChangeRef.current) onOpenChangeRef.current(true);
      if (onOpenRef.current) onOpenRef.current();
      setIsOpen(true);
    }, [isDisabled, open]);

    // Handle onOpenChange
    const handleToggle = useCallback(() => {
      if (isDisabled || (openOnHover && !isNested)) return;

      if (open) {
        handleClose();
        return;
      }

      handleOpen();
    }, [isDisabled, open, handleClose, openOnHover, isNested, handleOpen]);

    const handleBackdropClick = useCallback(() => {
      if (shouldCloseOnBlur) {
        handleClose();
      }
    }, [handleClose, shouldCloseOnBlur]);

    const onTriggerKeyDown = useCallback(
      (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === 'Enter') {
          // Only toggle if the event originated from the trigger itself
          if (event.target !== event.currentTarget) return;

          event.preventDefault();
          event.stopPropagation();
          handleToggle();
        }
      },
      [handleToggle],
    );

    const handleMouseEnter = useCallback(() => {
      if (isDisabled) return;

      if (showDelayRef.current) clearTimeout(showDelayRef.current);
      if (hideDelayRef.current) clearTimeout(hideDelayRef.current);

      showDelayRef.current = setTimeout(() => {
        setIsHoverOpen(true);

        if (isRootPopover && openOnHover) {
          onOpenChangeRef.current?.(true);
          onOpenRef.current?.();
        }
      }, delayShow);
    }, [isDisabled, isRootPopover, openOnHover, delayShow]);

    const handleMouseLeave = useCallback(() => {
      if (isDisabled) return;

      if (showDelayRef.current) clearTimeout(showDelayRef.current);
      if (hideDelayRef.current) clearTimeout(hideDelayRef.current);

      hideDelayRef.current = setTimeout(() => {
        setIsHoverOpen(false);

        if (isRootPopover && openOnHover) {
          onOpenChangeRef.current?.(false);
          onCloseRef.current?.();
        }
      }, delayHide);
    }, [isDisabled, isRootPopover, openOnHover, delayHide]);

    useEffect(() => {
      const shouldFocusTriggerOnControlledClose =
        prevControlledIsOpen && !controlledIsOpen && focusTriggerOnClose;

      if (shouldFocusTriggerOnControlledClose) {
        popoverTriggerRef.current?.focus();
      }
    }, [controlledIsOpen, prevControlledIsOpen, focusTriggerOnClose]);

    useWindowResize(setContentCoords);
    usePreventBodyScroll(isRootExpanded && isRootPopover && shouldBlockScroll);
    useResizeObserver({
      element: popoverTriggerRef.current,
      onResize: setContentCoords,
    });
    usePositionObserver({
      element: popoverTriggerRef.current,
      callback: setContentCoords,
      isActive: isRootExpanded,
    });

    useEffect(() => {
      onOpenRef.current = onOpen;
      onCloseRef.current = onClose;
      onBlurRef.current = onBlur;
      onOpenChangeRef.current = onOpenChange;
    }, [onOpen, onClose, onBlur, onOpenChange]);

    // Handle onBlur
    useEffect(() => {
      if (isDisabled || !isExpanded) return;

      function handleClickOutside(event: MouseEvent) {
        const rootId = rootPopoverId || popoverId;
        const clickedTarget = event.target as Element;

        const popoverIdFromClosestTrigger = clickedTarget
          .closest(`[data-popover-trigger-root-id]`)
          ?.getAttribute('data-popover-trigger-root-id');
        const popoverIdFromClosestContent = clickedTarget
          .closest(`[data-popover-content-root-id]`)
          ?.getAttribute('data-popover-content-root-id');
        const clickedRootId =
          popoverIdFromClosestTrigger || popoverIdFromClosestContent;

        if (clickedRootId && clickedRootId !== rootId && isNested) {
          return;
        }

        const isPopoverTrigger = clickedTarget.closest(
          `[data-popover-trigger-root-id="${rootId}"]`,
        );
        const isPopoverContent = clickedTarget.closest(
          `[data-popover-content-root-id="${rootId}"]`,
        );

        if (isPopoverTrigger || isPopoverContent) {
          return;
        }

        if (onBlurRef.current) onBlurRef.current();
        if (shouldCloseOnBlur) handleClose();
      }

      document.addEventListener('mousedown', handleClickOutside);

      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [
      shouldCloseOnBlur,
      isExpanded,
      isDisabled,
      handleClose,
      popoverId,
      isNested,
      rootPopoverId,
    ]);

    // Handle position and scroll
    useEffect(() => {
      if (isExpanded) {
        setContentCoords();
      }
    }, [isExpanded, setContentCoords]);

    useEffect(() => {
      if (!isExpanded) return;

      function handleScroll() {
        if (shouldCloseOnScroll) {
          handleClose();
        }
        setContentCoords();
      }

      document.addEventListener('scroll', handleScroll);

      return () => {
        document.removeEventListener('scroll', handleScroll);
      };
    }, [isExpanded, shouldCloseOnScroll, handleClose, setContentCoords]);

    useEffect(() => {
      if (!isExpanded) {
        return;
      }

      function onPopoverKeyDown(event: KeyboardEvent) {
        if (event.key === 'Escape' && shouldCloseOnEsc) {
          const openPopovers = [
            ...document.querySelectorAll(`[data-popover-content-current-id]`),
          ];
          const lastOpenedPopover = openPopovers[openPopovers.length - 1] as
            | HTMLDivElement
            | undefined;
          const currentPopoverId = lastOpenedPopover?.getAttribute(
            `data-popover-content-current-id`,
          );

          if (currentPopoverId && currentPopoverId !== popoverId) return;
          handleClose();
        }
      }
      document.addEventListener('keydown', onPopoverKeyDown);

      return () => {
        document.removeEventListener('keydown', onPopoverKeyDown);
      };
    }, [shouldCloseOnEsc, isExpanded, handleClose, popoverId]);

    const baseClassName = cn('relative', fullWidth ? 'w-full' : 'w-fit');
    const triggerClassName = cn(
      'flex items-center gap-2',
      !isDisabled ? 'cursor-pointer' : '',
      'grow w-full',
    );
    const contentClassName = cn(
      'fixed z-1010',
      isRootExpanded || (isExpanded && !isNested) ? 'scale-in' : 'scale-out',
      'transition-opacity p-2 bg-white text-gray-800 rounded-lg shadow-md',
    );
    const backdropClassName = cn(
      'fixed z-1000 inset-0',
      backdrop !== 'transparent' ? 'bg-black/30' : '',
      backdrop === 'blur' ? 'backdrop-blur-xs' : '',
      isRootExpanded ? 'fade-in' : 'fade-out',
    );

    const popoverJSX = (
      <PopoverContext.Provider
        value={{ isOpen: isExpanded, handleClose, popoverId, handleOpen }}
      >
        <>
          {isMounted && !!backdrop && backdrop !== 'none' && (
            <ClientPortal>
              <div
                className={cn(backdropClassName, classNames?.backdrop)}
                onClick={(e) => {
                  e.stopPropagation();
                  handleBackdropClick();
                }}
              />
            </ClientPortal>
          )}

          <div
            ref={ref}
            {...rest}
            className={cn(baseClassName, classNames?.base)}
            onScroll={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
            {...(openOnHover &&
              hoverableContent && {
                onMouseEnter: handleMouseEnter,
                onMouseLeave: handleMouseLeave,
              })}
          >
            <Slot
              onClick={(e: React.MouseEvent) => {
                if (!openOnHover) {
                  e?.stopPropagation();
                }
                handleToggle();
              }}
              data-popover-trigger
              data-popover-trigger-root-id={rootPopoverId ?? popoverId}
              data-popover-trigger-current-id={popoverId}
              onKeyDown={onTriggerKeyDown}
              tabIndex={0}
              className={cn(triggerClassName, classNames?.trigger)}
              ref={popoverTriggerRef}
              {...(openOnHover &&
                !hoverableContent && {
                  onMouseEnter: handleMouseEnter,
                  onMouseLeave: handleMouseLeave,
                })}
            >
              {popoverTrigger}
            </Slot>

            {(isMounted || isExpanded) && (
              <ClientPortal>
                <div
                  data-popover-content
                  data-popover-content-root-id={rootPopoverId ?? popoverId}
                  data-popover-content-current-id={popoverId}
                  className={cn(contentClassName, classNames?.content)}
                  style={popoverContentCoords}
                  onClick={(e) => e.stopPropagation()}
                  ref={(node) => {
                    if (!node) return;

                    popoverContentRef.current = node;
                    focusContainerRef.current = node;
                  }}
                >
                  <PopoverFocusTrapper ref={firstFocusableItemRef} />
                  {popoverContent}
                  <PopoverFocusTrapper ref={lastFocusableItemRef} />
                </div>
              </ClientPortal>
            )}
          </div>
        </>
      </PopoverContext.Provider>
    );

    if (isNested) {
      return popoverJSX;
    }

    return (
      <PopoverRootContext.Provider
        value={{
          isRootOpen: isExpanded,
          handleCloseRoot: handleClose,
          rootPopoverId: popoverId,
        }}
      >
        {popoverJSX}
      </PopoverRootContext.Provider>
    );
  },
);

type PopoverType = typeof PopoverBase & {
  Content: typeof PopoverContent;
  Trigger: typeof PopoverTrigger;
};

(PopoverBase as PopoverType).Content = PopoverContent;
(PopoverBase as PopoverType).Trigger = PopoverTrigger;

const Popover = PopoverBase as PopoverType;

export default Popover;
