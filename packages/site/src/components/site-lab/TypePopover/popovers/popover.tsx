import TypePopover from '../TypePopover';

export function PopoverClassNamesTypePopover() {
  return (
    <TypePopover
      name="PopoverClassNames"
      code={`type PopoverClassNames = {
  base?: string;
  trigger?: string;
  triggerWrapper?: string;
  backdrop?: string;
  content?: string;
};`}
    />
  );
}

export function PopoverSizeTypePopover() {
  return (
    <TypePopover
      name="PopoverSize"
      code={`type PopoverSize =
  | 'free'
  | 'small'
  | 'medium'
  | 'large'
  | 'trigger';`}
    />
  );
}

export function BackdropTypePopover() {
  return (
    <TypePopover
      name="Backdrop"
      code={`type Backdrop =
  | 'none'
  | 'transparent'
  | 'opaque'
  | 'blur';`}
    />
  );
}
