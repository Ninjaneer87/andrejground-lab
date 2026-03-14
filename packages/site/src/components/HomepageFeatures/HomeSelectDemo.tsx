import { debounceCallback, OptionItem } from '@andrejground/lab';
import BrowserOnly from '@docusaurus/BrowserOnly';
import SiteSelect from '@site/src/components/lab/SiteSelect/SiteSelect';
import { usePokemonList } from '@site/src/hooks/usePokemonList';

const SELECT_ITEMS: { section: string; items: OptionItem[] }[] = [
  {
    section: 'Animals',
    items: [
      {
        value: 'cat',
        text: 'Cat',
        description: 'A small domesticated carnivorous mammal',
      },
      {
        value: 'dog',
        text: 'Dog',
        description: 'A domesticated carnivorous mammal',
      },
      {
        value: 'rabbit',
        text: 'Rabbit',
        description: 'A small domesticated herbivorous mammal',
      },
      {
        value: 'mouse',
        text: 'Mouse',
        description: 'A small domesticated rodent',
      },
      {
        value: 'snake',
        text: 'Snake',
        description: 'A elongated reptile',
      },
      {
        value: 'bird',
        text: 'Bird',
        description: 'A feathered vertebrate',
      },
      {
        value: 'fish',
        text: 'Fish',
        description: 'A aquatic vertebrate',
      },
    ],
  },
  {
    section: 'Cars',
    items: [
      {
        value: 'toyota',
        text: 'Toyota',
        description: 'A Japanese multinational automotive manufacturer',
      },
      {
        value: 'mazda',
        text: 'Mazda',
        description: 'A Japanese multinational automotive manufacturer',
      },
      {
        value: 'bmw',
        text: 'BMW',
        description: 'A German multinational automotive manufacturer',
      },
      {
        value: 'audi',
        text: 'Audi',
        description: 'A German multinational automotive manufacturer',
      },
      {
        value: 'nissan',
        text: 'Nissan',
        description: 'A Japanese multinational automotive manufacturer',
      },
      {
        value: 'honda',
        text: 'Honda',
        description: 'A Japanese multinational automotive manufacturer',
      },
      {
        value: 'lexus',
        text: 'Lexus',
        description: 'A Japanese multinational automotive manufacturer',
      },
      {
        value: 'mercedes',
        text: 'Mercedes',
        description: 'A German multinational automotive manufacturer',
      },
    ],
  },
];

function HomeSelectDemoContent() {
  const { items, isLoading, onLoadMore, hasMore } = usePokemonList({
    fetchDelay: 300,
  });

  const { callback: debouncedSearch } = debounceCallback(
    (searchQuery?: string) => onLoadMore({ newOffset: 0, search: searchQuery }),
    500,
  );

  return (
    <>
      <SiteSelect
        openOnLabelClick
        items={items}
        onSelectionChange={() => {}}
        truncate={{
          itemText: true,
          valueChipText: true,
          itemDescription: true,
          sectionTitle: true,
          valueText: true,
        }}
        multiple
        label="Multi-select autocomplete & infinite scroll"
        search
        popOnSelection
        onSearchChange={debouncedSearch}
        placeholder="Select pokemons"
        onClose={() => console.log('onClose')}
        infiniteScrollProps={{
          onLoadMore: (searchVal) => onLoadMore({ search: searchVal }),
          hasMore,
          isLoading,
        }}
      />

      <br />

      <SiteSelect
        openOnLabelClick
        label="Multi-select with sections"
        onSelectionChange={(value) => console.log(value)}
        multiple
        placeholder="Select items"
        truncate={{
          itemText: false,
          valueChipText: true,
          itemDescription: false,
          sectionTitle: true,
          valueText: true,
        }}
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
    </>
  );
}

function HomeSelectDemo() {
  return <BrowserOnly>{() => <HomeSelectDemoContent />}</BrowserOnly>;
}

export default HomeSelectDemo;
