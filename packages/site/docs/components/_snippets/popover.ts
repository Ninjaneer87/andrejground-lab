export const popoverUsageTsx = `import { Popover } from '@andrejground/lab';

export default function App() {
  return (
    <Popover>
      <Popover.Trigger>
        <button>Open Popover</button>
      </Popover.Trigger>
      <Popover.Content>
        <div>Popover Content</div>
        <div>This is the popover content</div>
      </Popover.Content>
    </Popover>
  );
}`;

export const popoverPlacementsTsx = `import { Popover, type PopoverPlacement } from '@andrejground/lab';

const PLACEMENTS: PopoverPlacement[] = [
  'top-start',
  'top-center',
  'top-end',

  'bottom-start',
  'bottom-center',
  'bottom-end',

  'right-start',
  'right-center',
  'right-end',

  'left-start',
  'left-center',
  'left-end',
];

export default function App() {
  return (
    <>
      {PLACEMENTS.map((placement) => (
        <Popover key={placement} placement={placement} fullWidth>
          <Popover.Trigger>
            <button>{placement}</button>
          </Popover.Trigger>
          <Popover.Content>
            <div>
              <code>{placement}</code>
            </div>
            <small>This is the popover content</small>
          </Popover.Content>
        </Popover>
      ))}
    </>
  );
}
`;

export const popoverControlledTsx = `import React from 'react';
import { Popover } from '@andrejground/lab';

export default function App() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <Popover isOpen={isOpen} onOpenChange={setIsOpen} placement="top-center">
        <Popover.Trigger>
          <button>Open Popover</button>
        </Popover.Trigger>
        <Popover.Content>
          <div>Popover Content</div>
          <small>This is the popover content</small>
        </Popover.Content>
      </Popover>

      <br />

      <div>
        Open: <code>{\`\${isOpen}\`}</code>
      </div>
    </>
  );
}
`;

export const popoverOffsetTsx = `import { Popover } from '@andrejground/lab';

const OFFSETS = [0, 8, 16, 24];

export default function App() {
  return (
    <>
      {OFFSETS.map((offset) => (
        <Popover key={offset} offset={offset} placement="bottom-center">
          <Popover.Trigger>
            <button>offset: {offset}</button>
          </Popover.Trigger>
          <Popover.Content>
            <div>
              <code>offset: {offset}</code>
            </div>
            <small>This is the popover content</small>
          </Popover.Content>
        </Popover>
      ))}
    </>
  );
}
`;

export const popoverWithFormTsx = `import React from 'react';
import { Popover } from '@andrejground/lab';

const DEFAULT_VALUES = {
  firstName: '',
  lastName: '',
  email: '',
};

export default function App() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [values, setValues] = React.useState(DEFAULT_VALUES);

  const handleCancel = () => {
    setValues(DEFAULT_VALUES);
    setIsOpen(false);
  };

  const handleSave = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsOpen(false);
    alert(JSON.stringify(values, null, 2));
  };

  const handleChange =
    (field: keyof typeof values) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setValues((prev) => ({ ...prev, [field]: e.target.value }));
    };

  return (
    <Popover
      isOpen={isOpen}
      onOpenChange={setIsOpen}
      onClose={handleCancel}
      onOpen={() => setValues(DEFAULT_VALUES)}
    >
      <Popover.Trigger>
        <button>Open Form</button>
      </Popover.Trigger>
      <Popover.Content>
        <form
          style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}
          onSubmit={handleSave}
        >
          <input
            type="text"
            className="form-control"
            placeholder="First Name"
            value={values.firstName}
            onChange={handleChange('firstName')}
          />

          <input
            type="text"
            className="form-control"
            placeholder="Last Name"
            value={values.lastName}
            onChange={handleChange('lastName')}
          />

          <input
            type="text"
            className="form-control"
            placeholder="Email"
            value={values.email}
            onChange={handleChange('email')}
          />

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <button
              onClick={handleCancel}
              type="button"
            >
              Cancel
            </button>

            <button
              onClick={handleSave}
              type="submit"
            >
              Save
            </button>
          </div>
        </form>
      </Popover.Content>
    </Popover>
  );
}
`;

export const popoverBackdropTsx = `import { Popover, type Backdrop } from '@andrejground/lab';

const BACKDROPS: Backdrop[] = ['none', 'transparent', 'opaque', 'blur'];

export default function App() {
  return (
    <>
      {BACKDROPS.map((backdrop) => (
        <Popover key={backdrop} backdrop={backdrop} placement="bottom-center">
          <Popover.Trigger>
            <button>{backdrop}</button>
          </Popover.Trigger>
          <Popover.Content>
            <div>
              <code>backdrop: {backdrop}</code>
            </div>
            <small>This is the popover content</small>
          </Popover.Content>
        </Popover>
      ))}
    </>
  );
}
`;
