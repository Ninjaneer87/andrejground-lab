'use client';

import { forwardRef, useState } from 'react';
import { TooltipProps } from '../../types';
import Popover from '../Popover/Popover';
import { cn } from '../../utils/common';

const Tooltip = forwardRef<HTMLDivElement, TooltipProps>(
  (
    {
      children,
      content,
      shouldFlip = true,
      shouldCloseOnBlur = true,
      shouldCloseOnEsc = true,
      isDisabled,
      isOpen: controlledIsOpen,
      onOpen,
      onClose,
      onBlur,
      onOpenChange,
      placement = 'top-center',
      offset = 8,
      showArrow = true,
      delayShow = 100,
      hoverableContent = false,
      delayHide = hoverableContent ? 200 : 0,
      classNames,
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

    const contentClassName = cn(
      'px-2 py-1 text-sm bg-gray-900 text-white rounded shadow-md',
      classNames?.content,
    );

    return (
      <div className="contents" ref={ref} {...rest}>
        <Popover
          openOnHover
          shouldFlip={shouldFlip}
          shouldBlockScroll={false}
          shouldCloseOnScroll={false}
          shouldCloseOnBlur={shouldCloseOnBlur}
          shouldCloseOnEsc={shouldCloseOnEsc}
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
          onBlur={() => {
            if (onBlur) onBlur();
          }}
          onOpenChange={(isOpen) => {
            setIsOpen(isOpen);
            if (onOpenChange) onOpenChange(isOpen);
          }}
        >
          <Popover.Trigger>
            <div className="contents">{children}</div>
          </Popover.Trigger>
          <Popover.Content>{content}</Popover.Content>
        </Popover>
      </div>
    );
  },
);

export default Tooltip;
