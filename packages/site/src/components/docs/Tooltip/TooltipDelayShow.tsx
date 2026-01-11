import BrowserOnly from '@docusaurus/BrowserOnly';
import SiteTooltip from '@site/src/components/lab/SiteTooltip/SiteTooltip';
import React from 'react';

const DELAYS = [0, 300, 500, 1000];

function TooltipDelayShowContent() {
  return (
    <div className="flex-wrap">
      {DELAYS.map((delay) => (
        <SiteTooltip
          key={delay}
          content={`Delay: ${delay}ms`}
          delayShow={delay}
        >
          <button className="button button--secondary button--outline">
            {delay}ms delay
          </button>
        </SiteTooltip>
      ))}
    </div>
  );
}

function TooltipDelayShow() {
  return (
    <BrowserOnly fallback={<TooltipDelayShowContent />}>
      {() => <TooltipDelayShowContent />}
    </BrowserOnly>
  );
}
export default TooltipDelayShow;
