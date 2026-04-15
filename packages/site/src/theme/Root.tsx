import React, { useEffect, useRef, type ReactNode } from 'react';

export default function Root({ children }: { children: ReactNode }): ReactNode {
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const rafRef = useRef<number>(0);
  const dirtyRef = useRef(false);

  useEffect(() => {
    const flush = () => {
      if (!dirtyRef.current) return;
      dirtyRef.current = false;
      const { x, y } = mouseRef.current;
      document.body.style.setProperty('--mouse-x', `${x + window.scrollX}px`);
      document.body.style.setProperty('--mouse-y', `${y + window.scrollY}px`);
    };

    const scheduleUpdate = () => {
      if (dirtyRef.current) return;
      dirtyRef.current = true;
      rafRef.current = requestAnimationFrame(flush);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      scheduleUpdate();
    };

    const handleScroll = () => scheduleUpdate();

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return children;
}
