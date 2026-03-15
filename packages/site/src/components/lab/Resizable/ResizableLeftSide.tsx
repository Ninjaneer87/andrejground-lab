import { Resizable } from '@andrejground/lab';
import BrowserOnly from '@docusaurus/BrowserOnly';
import clsx from 'clsx';
import React from 'react';
import styles from './ResizableDemo.module.scss';

function ResizableLeftSideContent() {
  return (
    <Resizable
      className={clsx(styles.resizable, styles.resizableLeft)}
      minWidth={200}
      initialWidth={250}
      maxWidth={400}
      resizableSide="left"
      name="docs-resizable-left"
    >
      <div>Drag the left edge to resize</div>
      <div>
        Min: <code>200px</code>
      </div>
      <div>
        Max: <code>400px</code>
      </div>
    </Resizable>
  );
}

function ResizableLeftSide() {
  return (
    <BrowserOnly fallback={<ResizableLeftSideContent />}>
      {() => <ResizableLeftSideContent />}
    </BrowserOnly>
  );
}
export default ResizableLeftSide;
