'use client';

import { type PropsWithChildren, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

type ClientPortalProps = PropsWithChildren<{
  container?: Element | null;
}>;

export default function ClientPortal({ children, container }: ClientPortalProps) {
  const [portalNode] = useState(() => document.createElement('div'));

  useEffect(() => {
    const target = container ?? document.body;

    target.appendChild(portalNode);

    return () => {
      target.removeChild(portalNode);
    };
  }, [container, portalNode]);

  return createPortal(children, portalNode);
}
