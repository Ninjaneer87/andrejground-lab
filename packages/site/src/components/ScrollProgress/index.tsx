import { useEffect, useRef } from 'react';
import styles from './styles.module.css';

export default function ScrollProgress() {
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let clientHeight = document.documentElement.clientHeight;
    let scrollHeight = document.documentElement.scrollHeight - clientHeight;
    let scheduledAnimationFrame = false;

    function updateScrollProgress() {
      if (!progressRef.current) return;

      const scrollPercentage = (window.scrollY / scrollHeight) * 100;
      progressRef.current.style.translate = `${Math.min(scrollPercentage, 100)}% 0`;
      scheduledAnimationFrame = false;
    }

    function onScroll() {
      if (!scheduledAnimationFrame) {
        scheduledAnimationFrame = true;
        requestAnimationFrame(updateScrollProgress);
      }
    }

    function onResize() {
      clientHeight = document.documentElement.clientHeight;
      scrollHeight = document.documentElement.scrollHeight - clientHeight;
    }

    window.addEventListener('scroll', onScroll);
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <div className={styles.container}>
      <div ref={progressRef} className={styles.progressBar}>
        <div className={styles.glow} />
      </div>
    </div>
  );
}
