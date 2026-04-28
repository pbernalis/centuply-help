// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Centuply Help Center',
  tagline: 'How can we help you today?',
  favicon: 'img/favicon.ico',

  // Το δικό σου URL
  url: 'https://help.centuply.com',
  baseUrl: '/',

  organizationName: 'pbernalis',
  projectName: 'centuply-help',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Αφαιρέσαμε το editUrl για να είναι καθαρό για τους πελάτες σου
        },
        blog: false, // Κλείνουμε το blog προς το παρόν για να είναι καθαρό Knowledge Base
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Centuply',
        logo: {
          alt: 'Centuply Logo',
          src: 'img/logo.svg', // Θα ανεβάσουμε το δικό σου logo στο επόμενο βήμα!
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
            label: 'Go to App',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Help Center',
            items: [
              {
                label: 'Getting Started',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Centuply',
            items: [
              {
                label: 'Main Website',
                href: 'https://www.centuply.com/',
              },
              {
                label: 'Open App',
                href: 'https://app.centuply.com/app',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Centuply.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;