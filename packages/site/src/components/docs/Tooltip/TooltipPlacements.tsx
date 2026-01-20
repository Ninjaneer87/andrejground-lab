import BrowserOnly from '@docusaurus/BrowserOnly';
import SiteTooltip from '@site/src/components/lab/SiteTooltip/SiteTooltip';
import { TooltipPlacement } from '@andrejground/lab';
import React from 'react';

const PLACEMENTS: TooltipPlacement[] = [
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

function TooltipPlacementsContent() {
  return (
    <div className="placement-grid">
      {PLACEMENTS.map((placement) => (
        <SiteTooltip
          key={placement}
          content={placement}
          placement={placement}
          // triggerWrapper
          // isDisabled
          // fullWidthTriggerWrapper
        >
          <button
            // disabled
            className="button button--fullwidth button--secondary button--outline"
          >
            {placement}
          </button>
        </SiteTooltip>
      ))}
    </div>
  );
}

function TooltipPlacements() {
  return (
    <BrowserOnly fallback={<TooltipPlacementsContent />}>
      {() => <TooltipPlacementsContent />}
    </BrowserOnly>
  );
}
export default TooltipPlacements;
