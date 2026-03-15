import { Resizable } from '@andrejground/lab';
import BrowserOnly from '@docusaurus/BrowserOnly';
import clsx from 'clsx';
import React from 'react';
import styles from './ResizableDemo.module.scss';

function ResizableUsageContent() {
  return (
    <Resizable
      className={clsx(styles.resizable, styles.resizableRight)}
      minWidth={200}
      initialWidth={250}
      maxWidth={400}
      resizableSide="right"
      name="docs-resizable-usage"
    >
      <div>Drag the right edge to resize</div>
      <div>
        Min: <code>200px</code>
      </div>
      <div>
        Max: <code>400px</code>
      </div>
    </Resizable>
  );
}

function ResizableUsage() {
  return (
    <BrowserOnly fallback={<ResizableUsageContent />}>
      {() => <ResizableUsageContent />}
    </BrowserOnly>
  );
}
export default ResizableUsage;
