'use client';

import { forwardRef, useRef, useState } from 'react';
import { TooltipProps } from '../../types';
import Popover from '../Popover/Popover';
import { cn } from '../../utils/common';
import { Slot } from '@/components/utility/Slot';

const Tooltip = forwardRef<HTMLElement, TooltipProps>(
  (
    {
      children,
      content,
      shouldFlip = true,
      shouldCloseOnClickOutside = true,
      shouldCloseOnEsc = true,
      isDisabled,
      isOpen: controlledIsOpen,
      onOpen,
      onClose,
      onTriggerFocus,
      onTriggerBlur,
      onClickOutside,
      onOpenChange,
      placement = 'top-center',
      offset = 8,
      showArrow = true,
      delayShow = 0,
      hoverableContent = false,
      delayHide = hoverableContent ? 200 : 0,
      classNames,
      triggerWrapper = false,
      fullWidthTriggerWrapper = false,
      openOnFocus = true,
      size = 'small',
      ...rest
    },
    ref,
  ) => {
    const [isOpen, setIsOpen] = useState(false);

    const open = controlledIsOpen ?? isOpen;

    if (!children) {
      throw new Error('Tooltip component requires a child element as trigger');
    }

    if (!content) {
      throw new Error('Tooltip component requires a content prop');
    }

    const wrapperRef = useRef<HTMLElement>(null);

    const handleWrapperKeyDown = (e: React.KeyboardEvent) => {
      if (e.key === 'Enter' && wrapperRef.current && !isDisabled) {
        const child = wrapperRef.current
          .firstElementChild as HTMLElement | null;
        child?.click();
      }
    };

    const triggerWrapperClassName = cn(
      'inline-block',
      fullWidthTriggerWrapper ? 'w-full' : 'w-fit',
      classNames?.triggerWrapper,
    );

    const contentClassName = cn(
      'px-2 py-1 text-[0.875rem] bg-gray-900 text-white rounded shadow-md',
      classNames?.content,
    );

    return (
      <Popover
        size={size}
        openOnHover
        openOnFocus={openOnFocus}
        shouldFlip={shouldFlip}
        shouldBlockScroll={false}
        shouldCloseOnScroll={false}
        shouldCloseOnClickOutside={shouldCloseOnClickOutside}
        shouldCloseOnEsc={shouldCloseOnEsc}
        shouldCloseOnTriggerBlur
        backdrop="none"
        focusTriggerOnClose={false}
        placement={placement}
        offset={offset}
        isDisabled={isDisabled}
        isOpen={open}
        delayShow={delayShow}
        delayHide={delayHide}
        showArrow={showArrow}
        hoverableContent={hoverableContent}
        classNames={{
          ...classNames,
          content: contentClassName,
        }}
        onTriggerFocus={onTriggerFocus}
        onTriggerBlur={onTriggerBlur}
        focusTrapProps={{
          autoFocus: false,
          trapFocus: false,
        }}
        onOpen={() => {
          setIsOpen(true);
          if (onOpen) onOpen();
        }}
        onClose={() => {
          setIsOpen(false);
          if (onClose) onClose();
        }}
        onClickOutside={() => {
          setIsOpen(false);
          if (onClickOutside) onClickOutside();
        }}
        onOpenChange={(isOpen) => {
          setIsOpen(isOpen);
          if (onOpenChange) onOpenChange(isOpen);
        }}
      >
        <Popover.Trigger data-tooltip-trigger {...rest} ref={ref}>
          {triggerWrapper ? (
            <span
              ref={wrapperRef}
              className={triggerWrapperClassName}
              onKeyDown={handleWrapperKeyDown}
            >
              <Slot tabIndex={!isDisabled ? -1 : undefined}>{children}</Slot>
            </span>
          ) : (
            children
          )}
        </Popover.Trigger>
        <Popover.Content data-tooltip-content>{content}</Popover.Content>
      </Popover>
    );
  },
);

export default Tooltip;
