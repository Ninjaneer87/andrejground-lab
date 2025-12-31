import BrowserOnly from '@docusaurus/BrowserOnly';
import SitePopover from '@site/src/components/lab/SitePopover/SitePopover';
import React from 'react';

const OFFSETS = [0, 8, 16, 24];

function PopoverOffsetContent() {
  return (
    <div className="flex flex-wrap gap-4">
      {OFFSETS.map((offset) => (
        <SitePopover key={offset} offset={offset} placement="bottom-center">
          <SitePopover.Trigger>
            <button className="button button--secondary button--outline">
              offset: {offset}
            </button>
          </SitePopover.Trigger>
          <SitePopover.Content>
            <div>
              <code>offset: {offset}</code>
            </div>
            <small>This is the popover content</small>
          </SitePopover.Content>
        </SitePopover>
      ))}
    </div>
  );
}

function PopoverOffset() {
  return (
    <BrowserOnly fallback={<PopoverOffsetContent />}>
      {() => <PopoverOffsetContent />}
    </BrowserOnly>
  );
}
export default PopoverOffset;
