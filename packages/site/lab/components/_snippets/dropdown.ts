export const dropdownUsageTsx = `import { Dropdown } from '@andrejground/lab';

export default function App() {
  return (
    <Dropdown>
      <Dropdown.Trigger>
        <button>Open Menu</button>
      </Dropdown.Trigger>
      <Dropdown.Menu>
        <Dropdown.Item onClick={() => alert('New file')}>
          New file
        </Dropdown.Item>
        <Dropdown.Item onClick={() => alert('Copy link')}>
          Copy link
        </Dropdown.Item>
        <Dropdown.Item onClick={() => alert('Edit')}>
          Edit
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}`;

export const dropdownSectionsTsx = `import { Dropdown } from '@andrejground/lab';

export default function App() {
  return (
    <Dropdown>
      <Dropdown.Trigger>
        <button>Open Menu</button>
      </Dropdown.Trigger>
      <Dropdown.Menu>
        <Dropdown.Section title="Actions">
          <Dropdown.Item description="Create a new file">
            New file
          </Dropdown.Item>
          <Dropdown.Item description="Copy the file link">
            Copy link
          </Dropdown.Item>
        </Dropdown.Section>

        <Dropdown.Divider />

        <Dropdown.Section title="Danger zone">
          <Dropdown.Item description="Permanently delete this file">
            Delete
          </Dropdown.Item>
        </Dropdown.Section>
      </Dropdown.Menu>
    </Dropdown>
  );
}`;

export const dropdownControlledTsx = `import React from 'react';
import { Dropdown } from '@andrejground/lab';

export default function App() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <Dropdown isOpen={isOpen} onOpenChange={setIsOpen}>
        <Dropdown.Trigger>
          <button>Open Menu</button>
        </Dropdown.Trigger>
        <Dropdown.Menu>
          <Dropdown.Item>New file</Dropdown.Item>
          <Dropdown.Item>Copy link</Dropdown.Item>
          <Dropdown.Item>Edit</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <br />

      <div>
        Open: <code>{\`\${isOpen}\`}</code>
      </div>
    </>
  );
}`;

export const dropdownNestedTsx = `import { Dropdown } from '@andrejground/lab';

export default function App() {
  return (
    <Dropdown>
      <Dropdown.Trigger>
        <button>Actions</button>
      </Dropdown.Trigger>
      <Dropdown.Menu>
        <Dropdown.Item>New file</Dropdown.Item>
        <Dropdown.Item>Copy link</Dropdown.Item>

        <Dropdown isNested>
          <Dropdown.Trigger>
            <Dropdown.Item shouldCloseOnSelection={false}>
              Export
            </Dropdown.Item>
          </Dropdown.Trigger>
          <Dropdown.Menu>
            <Dropdown.Item>JSON</Dropdown.Item>
            <Dropdown.Item>CSV</Dropdown.Item>
            <Dropdown.Item>PDF</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Dropdown.Menu>
    </Dropdown>
  );
}`;

export const dropdownDisabledItemsTsx = `import { Dropdown } from '@andrejground/lab';

export default function App() {
  return (
    <Dropdown>
      <Dropdown.Trigger>
        <button>Open Menu</button>
      </Dropdown.Trigger>
      <Dropdown.Menu>
        <Dropdown.Item>New file</Dropdown.Item>
        <Dropdown.Item disabled>Copy link (disabled)</Dropdown.Item>
        <Dropdown.Item>Edit</Dropdown.Item>
        <Dropdown.Item disabled>Delete (disabled)</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}`;

export const dropdownPolymorphicTsx = `import { Dropdown } from '@andrejground/lab';

export default function App() {
  return (
    <Dropdown>
      <Dropdown.Trigger>
        <button>Navigation</button>
      </Dropdown.Trigger>
      <Dropdown.Menu>
        <Dropdown.Item as="a" href="/blog" description="Visit the blog">
          Blog (Link)
        </Dropdown.Item>
        <Dropdown.Item as="a" href="https://github.com" target="_blank" description="Open GitHub">
          GitHub (anchor)
        </Dropdown.Item>
        <Dropdown.Item onClick={() => alert('Clicked!')} description="Triggers an action">
          Action (div)
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}`;
