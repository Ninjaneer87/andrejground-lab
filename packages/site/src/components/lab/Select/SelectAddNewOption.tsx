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
  { value: 'bird', text: 'Bird' },
  { value: 'fish', text: 'Fish' },
];

function SelectAddNewOptionContent() {
  return (
    <SiteSelect
      items={ITEMS}
      placeholder="Search or add animals"
      label="Add new option"
      openOnLabelClick
      multiple
      search
      isAddNewOption
    />
  );
}

function SelectAddNewOption() {
  return (
    <BrowserOnly fallback={<SelectAddNewOptionContent />}>
      {() => <SelectAddNewOptionContent />}
    </BrowserOnly>
  );
}
export default SelectAddNewOption;
