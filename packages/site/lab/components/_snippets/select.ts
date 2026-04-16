export const selectMySelectTsx = `import { OptionItem, Select, SelectProps } from '@andrejground/lab';
import styles from './MySelect.module.scss';

type Props<T extends OptionItem> = SelectProps<T>;

function MySelect<T extends OptionItem>(props: Props<T>) {
  return (
    <Select
      {...props}
      classNames={{
        popover: { content: styles.popoverContent },
        trigger: {
          base: styles.triggerBase,
          valueChip: styles.triggerValueChip,
        },
        section: { title: styles.sectionTitle },
        item: { base: styles.itemBase },
      }}
    />
  );
}

MySelect.Section = Select.Section;
MySelect.Item = Select.Item;
MySelect.Divider = Select.Divider;

export default MySelect;`;

export const selectMySelectScss = `.popoverContent {
  background-color: var(--background-color);
  color: var(--text-color);
  border: 1px solid var(--border-color);
}

.triggerBase {
  background-color: var(--background-color);
  color: var(--text-color);
  border-color: var(--border-color);
}

.sectionTitle {
  background-color: var(--section-bg-color);
}

.itemBase {
  &:hover,
  &:active,
  &:focus-visible,
  &:focus-within {
    background-color: var(--item-hover-bg-color);
  }
}

.triggerValueChip {
  background-color: var(--chip-bg-color);
  border-color: transparent;
  outline-color: transparent;
  border-radius: 4px;
  color: inherit;
}`;

export const selectUsageTsx = `import { Select, type OptionItem } from '@andrejground/lab';

const ITEMS: OptionItem[] = [
  { value: 'cat', text: 'Cat' },
  { value: 'dog', text: 'Dog' },
  { value: 'rabbit', text: 'Rabbit' },
  { value: 'mouse', text: 'Mouse' },
  { value: 'snake', text: 'Snake' },
];

export default function App() {
  return (
    <Select
      items={ITEMS}
      placeholder="Select an animal"
      label="Favorite animal"
      openOnLabelClick
    />
  );
}`;

export const selectSectionsTsx = `import { Select, type OptionItem } from '@andrejground/lab';

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

export default function App() {
  return (
    <Select
      label="Grouped items"
      openOnLabelClick
      placeholder="Select an item"
    >
      {SELECT_ITEMS.map(({ section, items }, index) => (
        <Select.Section
          title={section}
          key={section}
          showDivider={index !== SELECT_ITEMS.length - 1}
        >
          {items.map((item) => (
            <Select.Item key={item.value} {...item}>
              {item.text}
            </Select.Item>
          ))}
        </Select.Section>
      ))}
    </Select>
  );
}`;

export const selectControlledTsx = `import React from 'react';
import { Select, type OptionItem } from '@andrejground/lab';

const ITEMS: OptionItem[] = [
  { value: 'cat', text: 'Cat' },
  { value: 'dog', text: 'Dog' },
  { value: 'rabbit', text: 'Rabbit' },
  { value: 'mouse', text: 'Mouse' },
  { value: 'snake', text: 'Snake' },
];

export default function App() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <Select
        items={ITEMS}
        placeholder="Select an animal"
        label="Controlled select"
        openOnLabelClick
        isOpen={isOpen}
        onOpenChange={setIsOpen}
      />

      <br />

      <div>
        Open: <code>{\`\${isOpen}\`}</code>
      </div>
    </>
  );
}`;

export const selectMultipleTsx = `import { Select, type OptionItem } from '@andrejground/lab';

const ITEMS: OptionItem[] = [
  { value: 'cat', text: 'Cat' },
  { value: 'dog', text: 'Dog' },
  { value: 'rabbit', text: 'Rabbit' },
  { value: 'mouse', text: 'Mouse' },
  { value: 'snake', text: 'Snake' },
  { value: 'bird', text: 'Bird' },
  { value: 'fish', text: 'Fish' },
];

export default function App() {
  return (
    <Select
      items={ITEMS}
      placeholder="Select animals"
      label="Multiple selection"
      openOnLabelClick
      multiple
    />
  );
}`;

export const selectSearchableTsx = `import { Select, type OptionItem } from '@andrejground/lab';

const ITEMS: OptionItem[] = [
  { value: 'cat', text: 'Cat' },
  { value: 'dog', text: 'Dog' },
  { value: 'rabbit', text: 'Rabbit' },
  { value: 'mouse', text: 'Mouse' },
  { value: 'snake', text: 'Snake' },
  { value: 'bird', text: 'Bird' },
  { value: 'fish', text: 'Fish' },
];

export default function App() {
  return (
    <Select
      items={ITEMS}
      placeholder="Search animals"
      label="Searchable select"
      openOnLabelClick
      search
    />
  );
}`;

export const selectAsyncInfiniteScrollTsx = `import React from 'react';
import { Select, debounceCallback, type OptionItem } from '@andrejground/lab';

// Example hook that fetches paginated data
function usePokemonList() {
  const [items, setItems] = React.useState<OptionItem[]>([]);
  const [hasMore, setHasMore] = React.useState(true);
  const [isLoading, setIsLoading] = React.useState(false);
  const [offset, setOffset] = React.useState(0);
  const limit = 8;

  const loadPokemon = React.useCallback(async (currentOffset: number) => {
    setIsLoading(true);
    const res = await fetch(
      \`https://pokeapi.co/api/v2/pokemon?offset=\${currentOffset}&limit=\${limit}\`,
    );
    const json = await res.json();
    setHasMore(json.next !== null);
    setItems((prev) => {
      const loaded = json.results.map((p) => ({ text: p.name, value: p.url }));
      return [...new Map([...prev, ...loaded].map((i) => [i.value, i])).values()];
    });
    setIsLoading(false);
  }, []);

  React.useEffect(() => { loadPokemon(0); }, []);

  const onLoadMore = React.useCallback(
    ({ search, newOffset = offset } = {}) => {
      const next = newOffset + limit;
      setOffset(next);
      loadPokemon(next);
    },
    [offset, loadPokemon],
  );

  return { items, hasMore, isLoading, onLoadMore };
}

export default function App() {
  const { items, isLoading, onLoadMore, hasMore } = usePokemonList();

  const { callback: debouncedSearch } = debounceCallback(
    (searchQuery?: string) => onLoadMore({ newOffset: 0, search: searchQuery }),
    500,
  );

  return (
    <Select
      openOnLabelClick
      items={items}
      truncate={{
        itemText: true,
        valueChipText: true,
        itemDescription: true,
        sectionTitle: true,
        valueText: true,
      }}
      multiple
      label="Async infinite scroll"
      search
      popOnSelection
      onSearchChange={debouncedSearch}
      placeholder="Select pokémons"
      infiniteScrollProps={{
        onLoadMore: (searchVal) => onLoadMore({ search: searchVal }),
        hasMore,
        isLoading,
      }}
    />
  );
}`;

export const selectMultipleSearchableTsx = `import { Select, type OptionItem } from '@andrejground/lab';

const ITEMS: OptionItem[] = [
  { value: 'cat', text: 'Cat' },
  { value: 'dog', text: 'Dog' },
  { value: 'rabbit', text: 'Rabbit' },
  { value: 'mouse', text: 'Mouse' },
  { value: 'snake', text: 'Snake' },
  { value: 'bird', text: 'Bird' },
  { value: 'fish', text: 'Fish' },
];

export default function App() {
  return (
    <Select
      items={ITEMS}
      placeholder="Search animals"
      label="Multi-select with search"
      openOnLabelClick
      multiple
      search
      popOnSelection
    />
  );
}`;

export const selectTruncateOffTsx = `import { Select, type OptionItem } from '@andrejground/lab';

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

export default function App() {
  return (
    <Select
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
}`;

export const selectTruncateOnTsx = `import { Select, type OptionItem } from '@andrejground/lab';

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

export default function App() {
  return (
    <Select
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
}`;
