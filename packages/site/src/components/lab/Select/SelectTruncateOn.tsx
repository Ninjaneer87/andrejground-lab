import { OptionItem } from '@andrejground/lab';
import BrowserOnly from '@docusaurus/BrowserOnly';
import SiteSelect from '@site/src/components/site-lab/SiteSelect/SiteSelect';
import React from 'react';

const ITEMS: OptionItem[] = [
  {
    value: 'long-1',
    text: 'A very long option label that should be truncated with an ellipsis',
    description: 'This is a very detailed description that explains the option in great length and should also be truncated',
  },
  {
    value: 'long-2',
    text: 'Another extremely verbose option text that keeps going and going',
    description: 'Yet another long description that provides extensive context about this particular option',
  },
  {
    value: 'long-3',
    text: 'One more ridiculously long option name to demonstrate truncation behavior',
    description: 'A comprehensive description that goes on to explain every single detail about this item',
  },
];

function SelectTruncateOnContent() {
  return (
    <SiteSelect
      items={ITEMS}
      placeholder="Select items"
      label="Truncation on (text truncated)"
      openOnLabelClick
      multiple
      truncate={{
        valueText: true,
        valueChipText: true,
        itemText: true,
        itemDescription: true,
        sectionTitle: true,
      }}
    />
  );
}

function SelectTruncateOn() {
  return (
    <BrowserOnly fallback={<SelectTruncateOnContent />}>
      {() => <SelectTruncateOnContent />}
    </BrowserOnly>
  );
}
export default SelectTruncateOn;
