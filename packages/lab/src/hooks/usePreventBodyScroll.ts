'use client';

import { useEffect } from 'react';

export function usePreventBodyScroll(shouldPrevent: boolean) {
  useEffect(() => {
    const currentBodyOverflowY = window.getComputedStyle(
      document.body,
    ).overflowY;
    const currentBodyTouchAction = window.getComputedStyle(
      document.body,
    ).touchAction;

    if (shouldPrevent) {
      document.body.style.overflowY = 'hidden';
      document.body.style.touchAction = 'none';
    }

    return () => {
      if (shouldPrevent) {
        document.body.style.overflowY = currentBodyOverflowY;
        document.body.style.touchAction = currentBodyTouchAction;
      }
    };
  }, [shouldPrevent]);
}
