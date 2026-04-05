import type { ReactNode } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.scss';
import FeatureSection from '@site/src/components/FeatureSection';
import ByosComponentsSvg from '@site/src/components/HomepageFeatures/ByosComponentsSvg';
import UseAnythingSvg from '@site/src/components/HomepageFeatures/UseAnythingSvg';
import BlogSvg from '@site/src/components/HomepageFeatures/BlogSvg';
import Link from '@docusaurus/Link';
import Logo from '@site/src/components/Logo';
import HomeSelectDemo from '@site/src/components/HomepageFeatures/HomeSelectDemo';
import HomeDropdownDemo from '@site/src/components/HomepageFeatures/HomeDropdownDemo';
import HomePopoverDemo from '@site/src/components/HomepageFeatures/HomePopoverDemo';
import WaveSvg from '@site/src/components/shared/WaveSvg';
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

type FeatureItem = {
  title: string;
  svgImage?: ReactNode;
  description: ReactNode;
  to: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Components',
    svgImage: <ByosComponentsSvg />,
    to: '/lab/category/components',
    description: (
      <>
        Bring the components into your own design system. Customize each slot of
        each component to fit your needs.
      </>
    ),
  },
  {
    title: 'Hooks',
    svgImage: <UseAnythingSvg />,
    to: '/lab/category/hooks',
    description: (
      <>
        Constelation of all sorts of react hooks. Have your reusable pieces of
        logic ready to use across any of your projects.
      </>
    ),
  },
  {
    title: 'Blog',
    svgImage: <BlogSvg />,
    to: '/blog',
    description: (
      <>
        Guides and tutorials on the latest trends and best practices in React.js
        ecosystem and beyond.
      </>
    ),
  },
];

function Feature({ to, title, svgImage, description }: FeatureItem) {
  return (
    <Link to={to} className={clsx(styles.feature)}>
      <div className={styles.feature__header}>
        <div className={styles.feature__image}>{svgImage}</div>
        <Heading className={styles.feature__heading} as="h3">
          {title}
        </Heading>
      </div>

      <div className="padding-horiz--md">
        <p>{description}</p>
      </div>
    </Link>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <Logo background />
      <WaveSvg />

      <div className="container">
        <FeatureSection
          title="Look"
          accent="inside"
          description="Explore the hooks, components, utilities, tips and tricks you need or didn't know you need."
        >
          <div className={styles.featuresRow}>
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </FeatureSection>

        <FeatureSection
          title="Fresh from"
          accent="the lab"
          description="See some of the latest experiments and ideas in action."
        >
          <div className="row">
            <div className="col col--4 padding--md">
              <Heading as={'h3'}>
                <Link to="/lab/components/select">Select</Link>
              </Heading>
              <p>
                Powerful select component with built-in support for some of the
                most common use cases, like multiselect, infinite-scroll,
                autocomplete, keyboard navigation, controlled/uncontrolled and
                more.
              </p>

              <div>
                <HomeSelectDemo />
              </div>
            </div>

            <div className="col col--4 padding--md">
              <Heading as="h3">
                <Link to="/lab/components/dropdown">Dropdown</Link>
              </Heading>
              <p>
                Highly customizable dropdown with features like infinite-scroll,
                nested dropdowns, keyboard navigation, and more.
              </p>

              <div>
                <HomeDropdownDemo />
              </div>
            </div>

            <div className="col col--4 padding--md">
              <Heading as="h3">
                <Link to="/lab/components/popover">Popover</Link>
              </Heading>
              <p>
                Mighty popover, the underlying component for Select and
                Dropdown. Can be used as a tooltip.
              </p>

              <div>
                <HomePopoverDemo />
              </div>
            </div>
          </div>
        </FeatureSection>

        <FeatureSection
          title="Use the lab in"
          accent="your project"
          description={
            <>
              AndrejGround Lab is available as an{' '}
              <Link to="lab/getting-started/installation">NPM package</Link>. Set
              it up in these two steps:
            </>
          }
        >
          <div className="row">
            <div className="col col--6 padding--md">
              <Heading as="h3">1. Install the package</Heading>

              <Tabs groupId="package-manager">
                <TabItem value="npm" label="npm" default>
                  <CodeBlock language="bash">
                    npm install @andrejground/lab
                  </CodeBlock>
                </TabItem>
                <TabItem value="pnpm" label="pnpm">
                  <CodeBlock language="bash">
                    pnpm install @andrejground/lab
                  </CodeBlock>
                </TabItem>
                <TabItem value="yarn" label="Yarn">
                  <CodeBlock language="bash">
                    yarn add @andrejground/lab
                  </CodeBlock>
                </TabItem>
              </Tabs>
            </div>

            <div className="col col--6 padding--md">
              <Heading as="h3">
                2. Import the styles in the root of your app
              </Heading>

              <CodeBlock language="tsx" title="App.tsx">
                {`// add-next-line
import '@andrejground/lab/style.css';`}
              </CodeBlock>
            </div>
          </div>
          <p>Happy coding! 🫡</p>
        </FeatureSection>
      </div>
    </section>
  );
}
