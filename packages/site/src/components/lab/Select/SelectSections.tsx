import { OptionItem } from '@andrejground/lab';
import BrowserOnly from '@docusaurus/BrowserOnly';
import SiteSelect from '@site/src/components/site-lab/SiteSelect/SiteSelect';
import React from 'react';

const SELECT_ITEMS: { section: string; items: OptionItem[] }[] = [
  {
    section: 'Animals',
    items: [
      { value: 'cat', text: 'Cat', description: 'A small domesticated carnivorous mammal' },
      { value: 'dog', text: 'Dog', description: 'A domesticated carnivorous mammal' },
      { value: 'rabbit', text: 'Rabbit', description: 'A small domesticated herbivorous mammal' },
    ],
  },
  {
    section: 'Cars',
    items: [
      { value: 'toyota', text: 'Toyota', description: 'A Japanese automotive manufacturer' },
      { value: 'bmw', text: 'BMW', description: 'A German automotive manufacturer' },
      { value: 'honda', text: 'Honda', description: 'A Japanese automotive manufacturer' },
    ],
  },
];

function SelectSectionsContent() {
  return (
    <SiteSelect
      label="Grouped items"
      openOnLabelClick
      placeholder="Select an item"
    >
      {SELECT_ITEMS.map(({ section, items }, index) => (
        <SiteSelect.Section
          title={section}
          key={section}
          showDivider={index !== SELECT_ITEMS.length - 1}
        >
          {items.map((item) => (
            <SiteSelect.Item key={item.value} {...item}>
              {item.text}
            </SiteSelect.Item>
          ))}
        </SiteSelect.Section>
      ))}
    </SiteSelect>
  );
}

function SelectSections() {
  return (
    <BrowserOnly fallback={<SelectSectionsContent />}>
      {() => <SelectSectionsContent />}
    </BrowserOnly>
  );
}
export default SelectSections;
