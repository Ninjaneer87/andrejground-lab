import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'AndrejGround',
  tagline: "Tips, tricks and how-to's on frontend development and beyond",
  favicon: 'img/favicon/favicon.ico',
  headTags: [
    // Icon 96x96
    {
      tagName: 'link',
      attributes: {
        rel: 'icon',
        type: 'image/png',
        href: '/img/favicon/favicon-96x96.png',
        sizes: '96x96',
      },
    },
    // SVG Icon
    {
      tagName: 'link',
      attributes: {
        rel: 'icon',
        type: 'image/svg+xml',
        href: '/img/favicon/favicon.svg',
      },
    },
    // Apple Touch Icon
    {
      tagName: 'link',
      attributes: {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/img/favicon/apple-touch-icon.png',
      },
    },
    // Apple Mobile Web App Title
    {
      tagName: 'meta',
      attributes: {
        name: 'apple-mobile-web-app-title',
        content: 'AG',
      },
    },
    // Web Manifest
    {
      tagName: 'link',
      attributes: {
        rel: 'manifest',
        href: '/img/favicon/site.webmanifest',
      },
    },
  ],
  plugins: [
    'vercel-analytics',
    'docusaurus-plugin-sass',
    require.resolve('./src/plugins/blog-tags-global'),
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
          blogSidebarTitle: 'Latest',
          blogSidebarCount: 5,
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
    algolia: {
      // The application ID provided by Algolia
      appId: '7VTDWVOW5W',

      // Public API key: it is safe to commit it
      apiKey: '6ceadd22c3f6f9d242ab286cdb01ada4',
      indexName: 'AndrejGround Lab',

      // Optional: see doc section below
      contextualSearch: true,

      // Optional: path for search page that enabled by default (`false` to disable it)
      searchPagePath: 'search',

      // Optional: whether the insights feature is enabled or not on Docsearch (`false` by default)
      insights: false,
      translations: {
        modal: {
          searchBox: {
            placeholderText: 'Search...',
          },
        },
      },
    },
    tableOfContents: {
      minHeadingLevel: 2, // Default
      maxHeadingLevel: 4, // Increase this to show deeper headings
    },
    docs: {
      sidebar: {
        hideable: true,
      },
    },
    image: 'img/AG-meta.webp',
    metadata: [
      {
        name: 'description',
        content: "Tips, tricks and how-to's on frontend development and beyond",
      },
      { property: 'og:site_name', content: 'AndrejGround' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'algolia-site-verification', content: '320C0FF23C41B79C' },
      {
        name: 'google-site-verification',
        content: 'm1-drPhTSqBUc7vhvQi4UQDlvCooHp4unf4N3puHBXE',
      },
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
          type: 'dropdown',
          label: 'Lab',
          to: '/lab/getting-started/introduction',
          position: 'left',
          items: [
            {
              to: '/lab/getting-started/introduction',
              label: 'Getting Started',
            },
            {
              to: '/lab/category/components',
              label: 'Components',
            },
            {
              to: '/lab/category/hooks',
              label: 'Hooks',
            },
            {
              type: 'html',
              value:
                '<hr style="margin: 8px 0; border: none; border-top: 1px solid var(--ifm-color-emphasis-300);">',
            },
            {
              href: 'https://github.com/Ninjaneer87/andrejground-lab/tree/main/packages/lab',
              label: 'GitHub',
            },
            {
              href: 'https://www.npmjs.com/package/@andrejground/lab',
              label: 'npm',
            },
          ],
        },
        { to: '/blog', label: 'Blog', position: 'left' as const },
        { to: '/about', label: 'About', position: 'left' as const },
        {
          type: 'html',
          position: 'right',
          value: `<div class="navbar-social-links">
            <a href="https://github.com/Ninjaneer87" target="_blank" rel="noopener noreferrer" class="navbar-icon-link" aria-label="GitHub"><svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg></a>
            <a href="https://www.linkedin.com/in/andrejforgac/" target="_blank" rel="noopener noreferrer" class="navbar-icon-link" aria-label="LinkedIn"><svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg></a>
            <a href="https://stackblitz.com/@Ninjaneer87" target="_blank" rel="noopener noreferrer" class="navbar-icon-link" aria-label="StackBlitz"><svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M10.797 14.182H3.635L16.56 0l-3.359 9.818h7.165L7.441 24l3.356-9.818z"/></svg></a>
            <a href="https://x.com/andrejground" target="_blank" rel="noopener noreferrer" class="navbar-icon-link" aria-label="X"><svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></a>
          </div>`,
        },
      ],
    },
    footer: {
      // style: 'dark',
      links: [
        {
          title: 'AndrejGround',
          items: [
            {
              label: 'Lab',
              to: '/lab/getting-started/introduction',
            },
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'About',
              to: '/about',
            },
            {
              html: '<hr style="margin: 8px 0; border: none; border-top: 1px solid var(--ifm-color-emphasis-300);">',
            },
            {
              label: 'AndrejGround GitHub',
              href: 'https://github.com/Ninjaneer87/andrejground-lab',
            },
          ],
        },
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
            {
              html: '<hr style="margin: 8px 0; border: none; border-top: 1px solid var(--ifm-color-emphasis-300);">',
            },
            {
              label: 'Lab GitHub',
              href: 'https://github.com/Ninjaneer87/andrejground-lab/tree/main/packages/lab',
            },
            {
              label: 'npm',
              href: 'https://www.npmjs.com/package/@andrejground/lab',
            },
          ],
        },
        {
          title: 'Blog',
          items: [
            {
              label: 'Welcome to AndrejGround',
              to: '/blog/welcome-to-andrejground',
            },
          ],
        },
        {
          title: 'Andrej',
          items: [
            {
              label: 'About',
              to: '/about',
            },
            {
              html: '<hr style="margin: 8px 0; border: none; border-top: 1px solid var(--ifm-color-emphasis-300);">',
            },
            {
              label: 'contact@andrejground.com',
              href: 'mailto:contact@andrejground.com',
            },
            {
              label: "Andrej's GitHub",
              href: 'https://github.com/Ninjaneer87',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/in/andrejforgac/',
            },
            {
              label: 'StackBlitz',
              href: 'https://stackblitz.com/@Ninjaneer87',
            },
            {
              label: 'X',
              href: 'https://x.com/andrejground',
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
