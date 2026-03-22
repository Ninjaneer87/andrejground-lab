import type { ReactNode } from 'react';
import Heading from '@theme/Heading';
import clsx from 'clsx';
import styles from './FeatureSection.module.scss';

type FeatureSectionProps = {
  title: ReactNode;
  accent: string;
  description?: ReactNode;
  children?: ReactNode;
  className?: string;
};

export default function FeatureSection({
  title,
  accent,
  description,
  children,
  className,
}: FeatureSectionProps) {
  return (
    <section className={clsx(styles.section, className)}>
      <Heading as="h2" className={styles.heading}>
        {title} <span className={styles.headingAccent}>{accent}</span>
      </Heading>

      {description && <p className={styles.description}>{description}</p>}

      {children}
    </section>
  );
}
