import BrowserOnly from '@docusaurus/BrowserOnly';
import SiteDropdown from '@site/src/components/site-lab/SiteDropdown/SiteDropdown';
import React from 'react';

function DropdownUsageContent() {
  return (
    <SiteDropdown>
      <SiteDropdown.Trigger>
        <button className="button button--secondary button--outline">
          Open Menu
        </button>
      </SiteDropdown.Trigger>
      <SiteDropdown.Menu>
        <SiteDropdown.Item onClick={() => alert('New file')}>
          New file
        </SiteDropdown.Item>
        <SiteDropdown.Item onClick={() => alert('Copy link')}>
          Copy link
        </SiteDropdown.Item>
        <SiteDropdown.Item onClick={() => alert('Edit')}>
          Edit
        </SiteDropdown.Item>
      </SiteDropdown.Menu>
    </SiteDropdown>
  );
}

function DropdownUsage() {
  return (
    <BrowserOnly fallback={<DropdownUsageContent />}>
      {() => <DropdownUsageContent />}
    </BrowserOnly>
  );
}
export default DropdownUsage;
