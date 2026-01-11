import BrowserOnly from '@docusaurus/BrowserOnly';
import SitePopover from '@site/src/components/lab/SitePopover/SitePopover';
import React from 'react';

function PopoverControlledContent() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="flex-wrap flex-wrap--column">
      <SitePopover
        isOpen={isOpen}
        onOpenChange={setIsOpen}
        placement="top-center"
      >
        <SitePopover.Trigger>
          <button className="button button--secondary button--outline">
            Open Popover
          </button>
        </SitePopover.Trigger>
        <SitePopover.Content>
          <div>Popover Content</div>
          <small>This is the popover content</small>
        </SitePopover.Content>
      </SitePopover>

      <div>
        Open: <code>{`${isOpen}`}</code>
      </div>
    </div>
  );
}

function PopoverControlled() {
  return (
    <BrowserOnly fallback={<PopoverControlledContent />}>
      {() => <PopoverControlledContent />}
    </BrowserOnly>
  );
}
export default PopoverControlled;
