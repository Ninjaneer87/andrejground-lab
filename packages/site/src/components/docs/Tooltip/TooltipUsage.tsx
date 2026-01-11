import BrowserOnly from '@docusaurus/BrowserOnly';
import SiteTooltip from '@site/src/components/lab/SiteTooltip/SiteTooltip';
import React from 'react';

function TooltipUsageContent() {
  return (
    <SiteTooltip content="This is a tooltip">
      <button className="button button--secondary button--outline">
        Hover me
      </button>
    </SiteTooltip>
  );
}

function TooltipUsage() {
  return (
    <BrowserOnly fallback={<TooltipUsageContent />}>
      {() => <TooltipUsageContent />}
    </BrowserOnly>
  );
}
export default TooltipUsage;
