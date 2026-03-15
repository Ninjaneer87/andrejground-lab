import BrowserOnly from '@docusaurus/BrowserOnly';
import SiteDropdown from '@site/src/components/site-lab/SiteDropdown/SiteDropdown';
import React from 'react';

function DropdownControlledContent() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="flex-wrap flex-wrap--column">
      <SiteDropdown isOpen={isOpen} onOpenChange={setIsOpen}>
        <SiteDropdown.Trigger>
          <button className="button button--secondary button--outline">
            Open Menu
          </button>
        </SiteDropdown.Trigger>
        <SiteDropdown.Menu>
          <SiteDropdown.Item>New file</SiteDropdown.Item>
          <SiteDropdown.Item>Copy link</SiteDropdown.Item>
          <SiteDropdown.Item>Edit</SiteDropdown.Item>
        </SiteDropdown.Menu>
      </SiteDropdown>

      <div>
        Open: <code>{`${isOpen}`}</code>
      </div>
    </div>
  );
}

function DropdownControlled() {
  return (
    <BrowserOnly fallback={<DropdownControlledContent />}>
      {() => <DropdownControlledContent />}
    </BrowserOnly>
  );
}
export default DropdownControlled;
