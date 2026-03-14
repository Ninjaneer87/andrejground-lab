import { OptionItem } from '@andrejground/lab';
import BrowserOnly from '@docusaurus/BrowserOnly';
import SiteSelect from '@site/src/components/site-lab/SiteSelect/SiteSelect';
import React from 'react';

const ITEMS: OptionItem[] = [
  {
    value: 'long-1',
    text: 'A very long option label that should wrap into multiple lines',
    description: 'This is a very detailed description that explains the option in great length and should also wrap',
  },
  {
    value: 'long-2',
    text: 'Another extremely verbose option text that keeps going and going',
    description: 'Yet another long description that provides extensive context about this particular option',
  },
  {
    value: 'long-3',
    text: 'One more ridiculously long option name to demonstrate wrapping behavior',
    description: 'A comprehensive description that goes on to explain every single detail about this item',
  },
];

function SelectTruncateOffContent() {
  return (
    <SiteSelect
      items={ITEMS}
      placeholder="Select items"
      label="Truncation off (text wraps)"
      openOnLabelClick
      multiple
      truncate={{
        valueText: false,
        valueChipText: false,
        itemText: false,
        itemDescription: false,
        sectionTitle: false,
      }}
    />
  );
}

function SelectTruncateOff() {
  return (
    <BrowserOnly fallback={<SelectTruncateOffContent />}>
      {() => <SelectTruncateOffContent />}
    </BrowserOnly>
  );
}
export default SelectTruncateOff;
