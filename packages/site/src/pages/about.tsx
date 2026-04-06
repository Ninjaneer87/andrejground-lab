import type { ReactNode } from 'react';
import '@fontsource-variable/montserrat';
import '@andrejground/lab/style.css';
import Layout from '@theme/Layout';
import FeatureSection from '@site/src/components/FeatureSection';
import WorkTimeline from '@site/src/components/WorkTimeline/WorkTimeline';
import SocialLinks from '@site/src/components/SocialLinks';
import WaveSvg from '@site/src/components/shared/WaveSvg';

export default function About(): ReactNode {
  return (
    <Layout
      title="About"
      description="Andrej - a frontend developer from Serbia with 6+ years of experience building modern web applications"
    >
      <WaveSvg />
      <main className="container">
        <FeatureSection
          title="About"
          accent="me"
          description={
            <>
              I'm <strong>Andrej</strong> - a frontend developer from Serbia
              with 6+ years of experience building modern web applications
            </>
          }
        >
          <p>
            Besides building products, I enjoy crafting and sharing all kinds of
            abstractions and automations that make my workflow more fun and
            efficient.
          </p>
          <SocialLinks />
        </FeatureSection>

        <FeatureSection
          title="Career"
          accent="timeline"
          description={
            <>
              I've worked at multiple product based companies across various
              industries including <strong>cybersecurity</strong>,{' '}
              <strong>fintech</strong>, and <strong>environmental tech</strong>.
            </>
          }
        >
          <WorkTimeline />
        </FeatureSection>
      </main>
    </Layout>
  );
}
