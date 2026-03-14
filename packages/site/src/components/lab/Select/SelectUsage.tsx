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

function SelectUsageContent() {
  return (
    <SiteSelect
      items={ITEMS}
      placeholder="Select an animal"
      label="Favorite animal"
      openOnLabelClick
    />
  );
}

function SelectUsage() {
  return (
    <BrowserOnly fallback={<SelectUsageContent />}>
      {() => <SelectUsageContent />}
    </BrowserOnly>
  );
}
export default SelectUsage;
