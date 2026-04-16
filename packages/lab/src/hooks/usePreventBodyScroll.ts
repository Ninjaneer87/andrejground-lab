'use client';

import { useEffect } from 'react';

export function usePreventBodyScroll(shouldPrevent: boolean) {
  useEffect(() => {
    const currentBodyOverflowY = window.getComputedStyle(
      document.body,
    ).overflowY;

    if (shouldPrevent) {
      document.body.style.overflowY = 'hidden';
      document.body.style.touchAction = 'none';
    }

    return () => {
      if (shouldPrevent) {
        document.body.style.overflowY = currentBodyOverflowY;
        document.body.style.touchAction = '';
      }
    };
  }, [shouldPrevent]);
}
