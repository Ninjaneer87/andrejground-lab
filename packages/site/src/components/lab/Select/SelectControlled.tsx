import { OptionItem } from '@andrejground/lab';
import BrowserOnly from '@docusaurus/BrowserOnly';
import SiteSelect from '@site/src/components/site-lab/SiteSelect/SiteSelect';
import React from 'react';

const ITEMS: OptionItem[] = [
  { value: 'cat', text: 'Cat' },
  { value: 'dog', text: 'Dog' },
  { value: 'rabbit', text: 'Rabbit' },
  { value: 'mouse', text: 'Mouse' },
  { value: 'snake', text: 'Snake' },
];

function SelectControlledContent() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="flex-wrap flex-wrap--column">
      <SiteSelect
        items={ITEMS}
        placeholder="Select an animal"
        label="Controlled select"
        openOnLabelClick
        isOpen={isOpen}
        onOpenChange={setIsOpen}
      />

      <div>
        Open: <code>{`${isOpen}`}</code>
      </div>
    </div>
  );
}

function SelectControlled() {
  return (
    <BrowserOnly fallback={<SelectControlledContent />}>
      {() => <SelectControlledContent />}
    </BrowserOnly>
  );
}
export default SelectControlled;
