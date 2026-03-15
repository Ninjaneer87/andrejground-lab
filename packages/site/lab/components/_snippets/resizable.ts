export const resizableUsageTsx = `import { Resizable } from '@andrejground/lab';

export default function App() {
  return (
    <Resizable
      minWidth={200}
      initialWidth={250}
      maxWidth={400}
      resizableSide="right"
      name="my-resizable"
    >
      <div>Drag the right edge to resize</div>
      <div>Min: <code>200px</code></div>
      <div>Max: <code>400px</code></div>
    </Resizable>
  );
}`;

export const resizableLeftSideTsx = `import { Resizable } from '@andrejground/lab';

export default function App() {
  return (
    <Resizable
      minWidth={200}
      initialWidth={250}
      maxWidth={400}
      resizableSide="left"
      name="my-resizable-left"
    >
      <div>Drag the left edge to resize</div>
      <div>Min: <code>200px</code></div>
      <div>Max: <code>400px</code></div>
    </Resizable>
  );
}`;

export const resizableOnResizeTsx = `import React from 'react';
import { Resizable } from '@andrejground/lab';

export default function App() {
  const [widthRight, setWidthRight] = React.useState<number>(null);
  const [widthLeft, setWidthLeft] = React.useState<number>(null);

  return (
    <>
      <Resizable
        minWidth={220}
        initialWidth={220}
        maxWidth={350}
        resizableSide="right"
        name="demo-onresize-right"
        onResize={(width) => setWidthRight(Math.round(width))}
      >
        <div>Resizable side: <code>right</code></div>
        <div>Current: <code>{widthRight}px</code></div>
      </Resizable>

      <br />

      <Resizable
        minWidth={220}
        initialWidth={220}
        maxWidth={350}
        resizableSide="left"
        name="demo-onresize-left"
        onResize={(width) => setWidthLeft(Math.round(width))}
      >
        <div>Resizable side: <code>left</code></div>
        <div>Current: <code>{widthLeft}px</code></div>
      </Resizable>
    </>
  );
}`;
