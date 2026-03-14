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

function SelectMultipleSearchableContent() {
  return (
    <SiteSelect
      items={ITEMS}
      placeholder="Search animals"
      label="Multi-select with search"
      openOnLabelClick
      multiple
      search
      popOnSelection
    />
  );
}

function SelectMultipleSearchable() {
  return (
    <BrowserOnly fallback={<SelectMultipleSearchableContent />}>
      {() => <SelectMultipleSearchableContent />}
    </BrowserOnly>
  );
}
export default SelectMultipleSearchable;
