import TypePopover from '../TypePopover';

export function TooltipClassNamesTypePopover() {
  return (
    <TypePopover
      name="TooltipClassNames"
      code={`type TooltipClassNames = {
  base?: string;
  triggerWrapper?: string;
  content?: string;
};`}
    />
  );
}
