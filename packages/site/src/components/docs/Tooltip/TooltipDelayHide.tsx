import BrowserOnly from '@docusaurus/BrowserOnly';
import SiteTooltip from '@site/src/components/lab/SiteTooltip/SiteTooltip';
import React from 'react';

const DELAYS = [0, 300, 500, 1000];

function TooltipDelayHideContent() {
  return (
    <div className="flex-wrap">
      {DELAYS.map((delay) => (
        <SiteTooltip
          key={delay}
          content={`Delay: ${delay}ms`}
          delayHide={delay}
        >
          <button className="button button--secondary button--outline">
            {delay}ms delay
          </button>
        </SiteTooltip>
      ))}
    </div>
  );
}

function TooltipDelayHide() {
  return (
    <BrowserOnly fallback={<TooltipDelayHideContent />}>
      {() => <TooltipDelayHideContent />}
    </BrowserOnly>
  );
}
export default TooltipDelayHide;
