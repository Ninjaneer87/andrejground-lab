export const tooltipUsageTsx = `import { Tooltip } from '@andrejground/lab';

export default function App() {
  return (
    <Tooltip content="This is a tooltip">
      <button>Hover me</button>
    </Tooltip>
  );
}`;

export const tooltipPlacementsTsx = `import { Tooltip, type TooltipPlacement } from '@andrejground/lab';

const PLACEMENTS: TooltipPlacement[] = [
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
        <Tooltip key={placement} content={placement} placement={placement}>
          <button>{placement}</button>
        </Tooltip>
      ))}
    </>
  );
}
`;

export const tooltipDelayShowTsx = `import { Tooltip } from '@andrejground/lab';

const DELAYS = [0, 300, 500, 1000];

export default function App() {
  return (
    <>
      {DELAYS.map((delay) => (
        <Tooltip key={delay} content={\`Delay: \${delay}ms\`} delayShow={delay}>
          <button>{delay}ms delay</button>
        </Tooltip>
      ))}
    </>
  );
}
`;

export const tooltipDelayHideTsx = `import { Tooltip } from '@andrejground/lab';

const DELAYS = [0, 300, 500, 1000];

export default function App() {
  return (
    <>
      {DELAYS.map((delay) => (
        <Tooltip key={delay} content={\`Delay: \${delay}ms\`} delayHide={delay}>
          <button>{delay}ms delay</button>
        </Tooltip>
      ))}
    </>
  );
}
`;

export const tooltipControlledTsx = `import React from 'react';
import { Tooltip } from '@andrejground/lab';

export default function App() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <Tooltip
        content="Controlled tooltip"
        isOpen={isOpen}
        onOpenChange={setIsOpen}
      >
        <button>Hover me</button>
      </Tooltip>

      <br />

      <div>
        Open: <code>{\`\${isOpen}\`}</code>
      </div>
    </>
  );
}
`;
