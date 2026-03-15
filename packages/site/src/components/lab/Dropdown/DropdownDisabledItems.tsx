import BrowserOnly from '@docusaurus/BrowserOnly';
import SiteDropdown from '@site/src/components/site-lab/SiteDropdown/SiteDropdown';
import React from 'react';

function DropdownDisabledItemsContent() {
  return (
    <SiteDropdown>
      <SiteDropdown.Trigger>
        <button className="button button--secondary button--outline">
          Open Menu
        </button>
      </SiteDropdown.Trigger>
      <SiteDropdown.Menu>
        <SiteDropdown.Item>New file</SiteDropdown.Item>
        <SiteDropdown.Item disabled>Copy link (disabled)</SiteDropdown.Item>
        <SiteDropdown.Item>Edit</SiteDropdown.Item>
        <SiteDropdown.Item disabled>Delete (disabled)</SiteDropdown.Item>
      </SiteDropdown.Menu>
    </SiteDropdown>
  );
}

function DropdownDisabledItems() {
  return (
    <BrowserOnly fallback={<DropdownDisabledItemsContent />}>
      {() => <DropdownDisabledItemsContent />}
    </BrowserOnly>
  );
}
export default DropdownDisabledItems;
