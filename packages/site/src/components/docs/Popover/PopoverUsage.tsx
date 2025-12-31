import BrowserOnly from '@docusaurus/BrowserOnly';
import SitePopover from '@site/src/components/lab/SitePopover/SitePopover';
import React from 'react';

function PopoverUsageContent() {
  return (
    <SitePopover>
      <SitePopover.Trigger>
        <button className="button button--secondary button--outline">Open Popover</button>
      </SitePopover.Trigger>
      <SitePopover.Content>
        <div>Popover Content</div>
        <small>This is the popover content</small>
      </SitePopover.Content>
    </SitePopover>
  );
}

function PopoverUsage() {
  return (
    <BrowserOnly fallback={<PopoverUsageContent />}>
      {() => <PopoverUsageContent />}
    </BrowserOnly>
  );
}
export default PopoverUsage;
