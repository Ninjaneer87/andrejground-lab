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

function SelectMultipleContent() {
  return (
    <SiteSelect
      items={ITEMS}
      placeholder="Select animals"
      label="Multiple selection"
      openOnLabelClick
      multiple
    />
  );
}

function SelectMultiple() {
  return (
    <BrowserOnly fallback={<SelectMultipleContent />}>
      {() => <SelectMultipleContent />}
    </BrowserOnly>
  );
}
export default SelectMultiple;
