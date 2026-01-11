import BrowserOnly from '@docusaurus/BrowserOnly';
import SiteTooltip from '@site/src/components/lab/SiteTooltip/SiteTooltip';
import React, { useState } from 'react';

function TooltipControlledContent() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='flex-wrap flex-wrap--column'>
      <SiteTooltip
        content="Controlled tooltip"
        isOpen={isOpen}
        // onClose={() => setIsOpen(false)}
        // onOpen={() => setIsOpen(true)}
        onOpenChange={setIsOpen}
      >
        <button className="button button--secondary button--outline">
          Hover me
        </button>
      </SiteTooltip>

      <div>
        Open: <code>{`${isOpen}`}</code>
      </div>
    </div>
  );
}

function TooltipControlled() {
  return (
    <BrowserOnly fallback={<TooltipControlledContent />}>
      {() => <TooltipControlledContent />}
    </BrowserOnly>
  );
}
export default TooltipControlled;
