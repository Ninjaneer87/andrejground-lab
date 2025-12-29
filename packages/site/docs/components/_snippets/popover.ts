export const popoverUsageTsx = `import { Popover } from '@andrejground/lab';

export default function App() {
  return (
    <Popover>
      <Popover.Trigger>
        <button>Open Popover</button>
      </Popover.Trigger>
      <Popover.Content>
        <div>Popover Content</div>
        <div>This is the popover content</div>
      </Popover.Content>
    </Popover>
  );
}`;

export const popoverPlacementsTsx = `import { Popover, type PopoverPlacement } from '@andrejground/lab';

const PLACEMENTS: PopoverPlacement[] = [
  'top-start',
  'top-center',
  'top-end',

  'bottom-start',
  'bottom-center',
  'bottom-end',

  'right-start',
  'right-center',
  'right-end',

  'left-start',
  'left-center',
  'left-end',
];

export default function App() {
  return (
    <>
      {PLACEMENTS.map((placement) => (
        <Popover key={placement} placement={placement}>
          <Popover.Trigger>
            <button>{placement}</button>
          </Popover.Trigger>
          <Popover.Content>
            <div>
              <code>{placement}</code>
            </div>
            <small>This is the popover content</small>
          </Popover.Content>
        </Popover>
      ))}
    </>
  );
}
`;
