import { PopoverPlacement } from '@andrejground/lab';
import BrowserOnly from '@docusaurus/BrowserOnly';
import SitePopover from '@site/src/components/lab/SitePopover/SitePopover';
import React from 'react';

const PLACEMENTS: PopoverPlacement[] = [
  'top-start',
  'top-center',
  'top-end',

  'bottom-start',
  'bottom-center',
  'bottom-end',

  'right-start',
  'right-center',
  'right-end',

  'left-start',
  'left-center',
  'left-end',
];

function PopoverPlacementsContent() {
  return (
    <div className="placement-grid">
      {PLACEMENTS.map((placement) => (
        <SitePopover key={placement} placement={placement}>
          <SitePopover.Trigger>
            <button className="button button--secondary button--block">
              {placement}
            </button>
          </SitePopover.Trigger>
          <SitePopover.Content>
            <div>
              <code>{placement}</code>
            </div>
            <small>This is the popover content</small>
          </SitePopover.Content>
        </SitePopover>
      ))}
    </div>
  );
}

function PopoverPlacements() {
  return (
    <BrowserOnly fallback={<PopoverPlacementsContent />}>
      {() => <PopoverPlacementsContent />}
    </BrowserOnly>
  );
}
export default PopoverPlacements;
