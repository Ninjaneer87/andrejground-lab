import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'AndrejGround',
  tagline: 'Lightweight, accessible React toolkit for any design system',
  favicon: 'img/favicon.ico',
  plugins: [
    // require.resolve('./src/plugins/watch-lab'),
    'docusaurus-plugin-sass',
  ],

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },
  // Set the production url of your site here
  url: 'https://andrejground.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  // ? clientModules if direct import is not working
  // clientModules: [
  //   require.resolve('./src/client/load-lab-styles.js')
  // ],

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Ninjaneer87', // Usually your GitHub org/user name.
  projectName: 'andrejground-lab', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          path: 'lab',
          routeBasePath: 'lab',
          sidebarPath: './sidebars.ts',
          sidebarCollapsed: false,
          // sidebarCollapsible: false,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/Ninjaneer87/andrejground-lab/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/Ninjaneer87/andrejground-lab/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.scss',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    docs: {
      sidebar: {
        hideable: true,
      },
    },
    image: 'img/AG-meta.webp',
    metadata: [
      { name: 'description', content: 'Lightweight, accessible React toolkit for any design system' },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: 'AndrejGround' },
      { property: 'og:description', content: 'Lightweight, accessible React toolkit for any design system' },
      { property: 'og:url', content: 'https://andrejground.com' },
      { property: 'og:site_name', content: 'AndrejGround' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'AndrejGround' },
      { name: 'twitter:description', content: 'Lightweight, accessible React toolkit for any design system' },
      { name: 'twitter:creator', content: '@andrejground' },
    ],
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'AndrejGround',
      logo: {
        alt: 'AndrejGround logo',
        src: 'img/logo.svg',
        srcDark: 'img/logo-dark.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'getting-started/introduction',
          position: 'left',
          label: 'Lab',
        },
        { to: '/blog', label: 'Blog', position: 'left' as const },
        {
          href: 'https://github.com/Ninjaneer87/andrejground-lab',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      // style: 'dark',
      links: [
        {
          title: 'Lab',
          items: [
            {
              label: 'Getting Started',
              to: '/lab/getting-started/introduction',
            },
            {
              label: 'Components',
              to: '/lab/category/components',
            },
            {
              label: 'Hooks',
              to: '/lab/category/hooks',
            },
          ],
        },
        {
          title: 'Andrej',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/Ninjaneer87',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/in/andrejforgac87/',
            },
            {
              label: 'X',
              href: 'https://x.com/andrejground',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'Lab GitHub',
              href: 'https://github.com/Ninjaneer87/andrejground-lab',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} AndrejGround, Inc. Built with ❤️`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.oceanicNext,
      additionalLanguages: ['powershell', 'bash', 'scss'],
      magicComments: [
        {
          className: 'theme-code-block-highlighted-line',
          line: 'highlight-next-line',
          block: { start: 'highlight-start', end: 'highlight-end' },
        },
        {
          className: 'code-block-add-line',
          line: 'add-next-line',
          block: { start: 'add-start', end: 'add-end' },
        },
        {
          className: 'code-block-remove-line',
          line: 'remove-next-line',
          block: { start: 'remove-start', end: 'remove-end' },
        },
      ],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
