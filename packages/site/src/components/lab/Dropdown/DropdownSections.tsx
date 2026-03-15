import BrowserOnly from '@docusaurus/BrowserOnly';
import SiteDropdown from '@site/src/components/site-lab/SiteDropdown/SiteDropdown';
import React from 'react';

function DropdownSectionsContent() {
  return (
    <SiteDropdown>
      <SiteDropdown.Trigger>
        <button className="button button--secondary button--outline">
          Open Menu
        </button>
      </SiteDropdown.Trigger>
      <SiteDropdown.Menu>
        <SiteDropdown.Section title="Actions">
          <SiteDropdown.Item description="Create a new file">
            New file
          </SiteDropdown.Item>
          <SiteDropdown.Item description="Copy the file link">
            Copy link
          </SiteDropdown.Item>
        </SiteDropdown.Section>

        <SiteDropdown.Divider />

        <SiteDropdown.Section title="Danger zone">
          <SiteDropdown.Item description="Permanently delete this file">
            Delete
          </SiteDropdown.Item>
        </SiteDropdown.Section>
      </SiteDropdown.Menu>
    </SiteDropdown>
  );
}

function DropdownSections() {
  return (
    <BrowserOnly fallback={<DropdownSectionsContent />}>
      {() => <DropdownSectionsContent />}
    </BrowserOnly>
  );
}
export default DropdownSections;
