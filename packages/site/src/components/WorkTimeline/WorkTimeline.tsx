import BrowserOnly from '@docusaurus/BrowserOnly';
import { Timeline, TimelineItem, cn } from '@andrejground/lab';
import React from 'react';
import styles from './WorkTimeline.module.scss';
import { WORK_ITEMS } from '@site/src/utils/constants';

function WorkTimelineContent() {
  return (
    <div className={styles.wrapper}>
      <Timeline
        classNames={{
          base: cn(styles.timelineBase),
        }}
        items={WORK_ITEMS.map(
          (item): TimelineItem => ({
            name: item.name,
            isActive: item.isActive,
            classNames: {
              dot: cn(item.isActive && styles.timelineDot),
              dotDefaultInner: cn(
                item.isActive && styles.timelineDotDefaultInner,
              ),
              content: cn(!item.isActive && styles.timelineContentInactive),
            },
            content: (
              <div className={styles.jobContent}>
                <div className={styles.jobHeader}>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.jobLink}
                  >
                    <h3 className={styles.jobTitle}>{item.company} ↗</h3>
                  </a>
                  <span className={styles.jobLocation}>({item.location})</span>
                </div>
                <p className={styles.jobDescription}>{item.description}</p>
                <Timeline
                  variant="simple"
                  showPulseOnActiveStep={false}
                  items={item.positions.map((pos, i) => ({
                    name: `${item.name}-pos-${i}`,
                    isActive: pos.isActive,
                    content: (
                      <div className={styles.positionContent}>
                        <span>{pos.title}</span>
                        <span className={styles.positionDate}>{pos.date}</span>
                      </div>
                    ),
                  }))}
                />
                <div className={styles.techTags}>
                  {item.techStack.map((tech) => (
                    <span key={tech} className={styles.techTag}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ),
          }),
        )}
        variant="default"
      />
    </div>
  );
}

export default function WorkTimeline() {
  return (
    <BrowserOnly fallback={<WorkTimelineContent />}>
      {() => <WorkTimelineContent />}
    </BrowserOnly>
  );
}
