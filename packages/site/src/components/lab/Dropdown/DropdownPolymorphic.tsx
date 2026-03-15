import BrowserOnly from '@docusaurus/BrowserOnly';
import Link from '@docusaurus/Link';
import SiteDropdown from '@site/src/components/site-lab/SiteDropdown/SiteDropdown';
import React from 'react';

function DropdownPolymorphicContent() {
  return (
    <SiteDropdown>
      <SiteDropdown.Trigger>
        <button className="button button--secondary button--outline">
          Navigation
        </button>
      </SiteDropdown.Trigger>
      <SiteDropdown.Menu>
        <SiteDropdown.Item as={Link} to="/blog" description="Visit the blog">
          Blog (Link)
        </SiteDropdown.Item>
        <SiteDropdown.Item as="a" href="https://github.com" target="_blank" description="Open GitHub">
          GitHub (anchor)
        </SiteDropdown.Item>
        <SiteDropdown.Item onClick={() => alert('Clicked!')} description="Triggers an action">
          Action (div)
        </SiteDropdown.Item>
      </SiteDropdown.Menu>
    </SiteDropdown>
  );
}

function DropdownPolymorphic() {
  return (
    <BrowserOnly fallback={<DropdownPolymorphicContent />}>
      {() => <DropdownPolymorphicContent />}
    </BrowserOnly>
  );
}
export default DropdownPolymorphic;
