// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Centuply Help Center',
  tagline: 'Όλα όσα χρειάζεσαι για να φτιάξεις και να διαχειριστείς το AI website σου',
  favicon: 'img/favicon.ico',

  url: 'https://help.centuply.com',
  baseUrl: '/',

  organizationName: 'pbernalis',
  projectName: 'centuply-help',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'el',
    locales: ['el'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'light',
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Centuply',
        logo: {
          alt: 'Centuply Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Help Articles',
          },
          {
            href: 'https://app.centuply.com/app',
            label: '→ Go to App',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Centuply',
            items: [
              { label: 'Κεντρική Σελίδα', href: 'https://www.centuply.com/' },
              { label: 'App', href: 'https://app.centuply.com/app' },
            ],
          },
          {
            title: 'Help Center',
            items: [
              { label: 'Getting Started', to: '/docs/intro' },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} Centuply. All Rights Reserved.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
