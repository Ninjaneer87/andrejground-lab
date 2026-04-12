import { useCallback, useEffect, useRef } from 'react';

export function useMobileTOC() {
  const tocMobileRef = useRef<HTMLDivElement>(null);
  const handleTocLinkClick = useCallback(
    (e?: React.MouseEvent<HTMLDivElement>) => {
      if (e?.target instanceof HTMLButtonElement) return;

      const button = tocMobileRef.current?.querySelector('button');
      button?.click();
    },
    [],
  );

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      const el = tocMobileRef.current;
      if (!el || el.contains(e.target as Node)) return;

      const expanded = el.querySelector('[class*="tocCollapsibleExpanded"]');
      if (!expanded) return;

      handleTocLinkClick();
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [handleTocLinkClick]);

  return {
    tocMobileRef,
    handleTocLinkClick,
  };
}
