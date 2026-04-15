import type { ReactNode } from 'react';
import BackgroundDots from '@site/src/components/BackgroundDots/BackgroundDots';

export default function Root({ children }: { children: ReactNode }): ReactNode {
  return (
    <>
      <BackgroundDots />
      {children}
    </>
  );
}
