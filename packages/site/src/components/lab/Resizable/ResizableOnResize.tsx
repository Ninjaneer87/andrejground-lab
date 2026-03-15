import { Resizable } from '@andrejground/lab';
import BrowserOnly from '@docusaurus/BrowserOnly';
import clsx from 'clsx';
import React from 'react';
import styles from './ResizableDemo.module.scss';

function ResizableOnResizeContent() {
  const [widthRight, setWidthRight] = React.useState<number>(null);
  const [widthLeft, setWidthLeft] = React.useState<number>(null);

  return (
    <div className={styles.container}>
      <Resizable
        className={clsx(styles.resizable, styles.resizableRight)}
        minWidth={220}
        initialWidth={220}
        maxWidth={350}
        resizableSide="right"
        name="docs-resizable-onresize-right"
        onResize={(width) => setWidthRight(Math.round(width))}
      >
        <div>
          Resizable side: <code>right</code>
        </div>
        <div>
          Current: <code>{widthRight}px</code>
        </div>
      </Resizable>

      <Resizable
        className={clsx(styles.resizable, styles.resizableLeft)}
        minWidth={220}
        initialWidth={220}
        maxWidth={350}
        resizableSide="left"
        name="docs-resizable-onresize-left"
        onResize={(width) => setWidthLeft(Math.round(width))}
      >
        <div>
          Resizable side: <code>left</code>
        </div>
        <div>
          Current: <code>{widthLeft}px</code>
        </div>
      </Resizable>
    </div>
  );
}

function ResizableOnResize() {
  return (
    <BrowserOnly fallback={<ResizableOnResizeContent />}>
      {() => <ResizableOnResizeContent />}
    </BrowserOnly>
  );
}
export default ResizableOnResize;
