import { Backdrop } from '@andrejground/lab';
import BrowserOnly from '@docusaurus/BrowserOnly';
import SitePopover from '@site/src/components/lab/SitePopover/SitePopover';
import React from 'react';

const BACKDROPS: Backdrop[] = ['none', 'transparent', 'opaque', 'blur'];

function PopoverBackdropContent() {
  return (
    <div className="flex-wrap">
      {BACKDROPS.map((backdrop) => (
        <SitePopover
          key={backdrop}
          backdrop={backdrop}
          placement="bottom-center"
        >
          <SitePopover.Trigger>
            <button className="button button--secondary button--outline">
              {backdrop}
            </button>
          </SitePopover.Trigger>
          <SitePopover.Content>
            <div>
              <code>backdrop: {backdrop}</code>
            </div>
            <small>This is the popover content</small>
          </SitePopover.Content>
        </SitePopover>
      ))}
    </div>
  );
}

function PopoverBackdrop() {
  return (
    <BrowserOnly fallback={<PopoverBackdropContent />}>
      {() => <PopoverBackdropContent />}
    </BrowserOnly>
  );
}
export default PopoverBackdrop;
