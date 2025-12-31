import BrowserOnly from '@docusaurus/BrowserOnly';
import SitePopover from '@site/src/components/lab/SitePopover/SitePopover';
import React from 'react';

const DEFAULT_VALUES = {
  firstName: '',
  lastName: '',
  email: '',
};

function PopoverWithFormContent() {
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
    <SitePopover
      isOpen={isOpen}
      onOpenChange={setIsOpen}
      onClose={handleCancel}
      onOpen={() => setValues(DEFAULT_VALUES)}
    >
      <SitePopover.Trigger>
        <button className="button button--secondary button--outline">Open Form</button>
      </SitePopover.Trigger>
      <SitePopover.Content>
        <form className="flex-wrap flex-wrap--column" onSubmit={handleSave}>
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
              className="button button--danger button--outline"
              onClick={handleCancel}
              type="button"
            >
              Cancel
            </button>

            <button
              className="button button--primary button--outline"
              type="submit"
            >
              Save
            </button>
          </div>
        </form>
      </SitePopover.Content>
    </SitePopover>
  );
}

function PopoverWithForm() {
  return (
    <BrowserOnly fallback={<PopoverWithFormContent />}>
      {() => <PopoverWithFormContent />}
    </BrowserOnly>
  );
}
export default PopoverWithForm;
