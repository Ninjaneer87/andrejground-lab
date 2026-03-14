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

function SelectSearchableContent() {
  return (
    <SiteSelect
      items={ITEMS}
      placeholder="Search animals"
      label="Searchable select"
      openOnLabelClick
      search
    />
  );
}

function SelectSearchable() {
  return (
    <BrowserOnly fallback={<SelectSearchableContent />}>
      {() => <SelectSearchableContent />}
    </BrowserOnly>
  );
}
export default SelectSearchable;
