import TypePopover from '../TypePopover';

export function DropdownClassNamesTypePopover() {
  return (
    <TypePopover
      name="DropdownClassNames"
      code={`type DropdownClassNames = {
  popover?: {
    base?: string;
    trigger?: string;
    triggerWrapper?: string;
    backdrop?: string;
    content?: string;
  };
  divider?: { base?: string };
  footer?: { base?: string };
  header?: { base?: string };
  menu?: { base?: string };
  item?: {
    base?: string;
    startContent?: string;
    mainContent?: string;
    textContent?: string;
    descriptionContent?: string;
    endContent?: string;
  };
  section?: { base?: string; title?: string };
};`}
    />
  );
}

export function DropdownTriggerClassNamesTypePopover() {
  return (
    <TypePopover
      name="DropdownTriggerClassNames"
      code={`type DropdownTriggerClassNames = {
  base?: string;
};`}
    />
  );
}

export function DropdownMenuClassNamesTypePopover() {
  return (
    <TypePopover
      name="DropdownMenuClassNames"
      code={`type DropdownMenuClassNames = {
  base?: string;
};`}
    />
  );
}

export function DropdownSectionClassNamesTypePopover() {
  return (
    <TypePopover
      name="DropdownSectionClassNames"
      code={`type DropdownSectionClassNames = {
  base?: string;
  title?: string;
};`}
    />
  );
}

export function DropdownItemClassNamesTypePopover() {
  return (
    <TypePopover
      name="DropdownItemClassNames"
      code={`type DropdownItemClassNames = {
  base?: string;
  startContent?: string;
  mainContent?: string;
  textContent?: string;
  descriptionContent?: string;
  endContent?: string;
};`}
    />
  );
}

export function DropdownHeaderClassNamesTypePopover() {
  return (
    <TypePopover
      name="DropdownHeaderClassNames"
      code={`type DropdownHeaderClassNames = {
  base?: string;
};`}
    />
  );
}

export function DropdownFooterClassNamesTypePopover() {
  return (
    <TypePopover
      name="DropdownFooterClassNames"
      code={`type DropdownFooterClassNames = {
  base?: string;
};`}
    />
  );
}

export function DropdownDividerClassNamesTypePopover() {
  return (
    <TypePopover
      name="DropdownDividerClassNames"
      code={`type DropdownDividerClassNames = {
  base?: string;
};`}
    />
  );
}
