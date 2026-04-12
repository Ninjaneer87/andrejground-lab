import TypePopover from '../TypePopover';

export function SelectClassNamesTypePopover() {
  return (
    <TypePopover
      name="SelectClassNames"
      code={`type SelectClassNames = {
  base?: string;
  label?: string;
  requiredAsterisk?: string;
  trigger?: {
    base?: string;
    placeholder?: string;
    valueText?: string;
    valueChip?: string;
    valueChipText?: string;
    searchInput?: string;
    selectorIcon?: string;
  };
  innerWrapper?: string;
  value?: string;
  contentWrapper?: string;
  listboxWrapper?: string;
  listbox?: string;
  popover?: PopoverClassNames;
  helperWrapper?: string;
  description?: string;
  errorMessage?: string;
  item?: SelectItemClassNames;
  section?: SelectSectionClassNames;
};`}
    />
  );
}

export function SelectItemClassNamesTypePopover() {
  return (
    <TypePopover
      name="SelectItemClassNames"
      code={`type SelectItemClassNames = {
  base?: string;
  contentWrapper?: string;
  startContent?: string;
  mainContent?: string;
  textContent?: string;
  descriptionContent?: string;
  endContent?: string;
  selectedIcon?: string;
};`}
    />
  );
}

export function SelectSectionClassNamesTypePopover() {
  return (
    <TypePopover
      name="SelectSectionClassNames"
      code={`type SelectSectionClassNames = {
  base?: string;
  title?: string;
};`}
    />
  );
}

export function SelectTruncateTypePopover() {
  return (
    <TypePopover
      name="SelectTruncate"
      code={`type SelectTruncate = {
  valueText?: boolean;
  valueChipText?: boolean;
  itemText?: boolean;
  itemDescription?: boolean;
  sectionTitle?: boolean;
};`}
    />
  );
}

export function SelectItemTruncateTypePopover() {
  return (
    <TypePopover
      name="SelectItemTruncate"
      code={`type SelectItemTruncate = {
  itemText?: boolean;
  itemDescription?: boolean;
};`}
    />
  );
}

export function SelectSectionTruncateTypePopover() {
  return (
    <TypePopover
      name="SelectSectionTruncate"
      code={`type SelectSectionTruncate = {
  sectionTitle?: boolean;
};`}
    />
  );
}

export function OptionItemTypePopover() {
  return (
    <TypePopover
      name="OptionItem"
      code={`type OptionItem = {
  value: string | number;
  text: string;
  textContent?: ReactNode;
  description?: ReactNode;
  disabled?: boolean;
};`}
    />
  );
}

export function RenderOptionTypePopover() {
  return (
    <TypePopover
      name="RenderOption"
      code={`type RenderOption<T extends OptionItem> = (props: {
  option: T & { isSelected?: boolean; children?: ReactNode };
  currentOptions?: (T & { isSelected?: boolean })[];
}) => ReactNode;`}
    />
  );
}
