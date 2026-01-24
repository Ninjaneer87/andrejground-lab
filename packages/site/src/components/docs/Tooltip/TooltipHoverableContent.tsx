import BrowserOnly from '@docusaurus/BrowserOnly';
import SiteTooltip from '@site/src/components/lab/SiteTooltip/SiteTooltip';
import React from 'react';

function TooltipHoverableContentContent() {
  return (
    <SiteTooltip
      content={
        <span>
          Hover over me! I stay visible while you interact with this content.
        </span>
      }
      hoverableContent
    >
      <button className="button button--secondary button--outline">
        Hover me
      </button>
    </SiteTooltip>
  );
}

function TooltipHoverableContent() {
  return (
    <BrowserOnly fallback={<TooltipHoverableContentContent />}>
      {() => <TooltipHoverableContentContent />}
    </BrowserOnly>
  );
}
export default TooltipHoverableContent;
