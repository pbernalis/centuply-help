/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'category',
      label: '🚀 Getting Started',
      items: ['intro'],
    },
    {
      type: 'category',
      label: 'AI Website Builder',
      items: ['ai-builder/overview', 'ai-builder/generate-website'],
    },
    {
      type: 'category',
      label: 'Visual Editor',
      items: ['editor/intro', 'editor/blocks', 'editor/custom-css'],
    },
    {
      type: 'category',
      label: 'Publishing & Domain',
      items: ['publishing/connect-domain', 'publishing/custom-domain'],
    },
    {
      type: 'category',
      label: 'Billing & Plans',
      items: ['billing/pricing', 'billing/one-time-payment'],
    },
    {
      type: 'category',
      label: 'Troubleshooting',
      items: ['troubleshooting/common-issues'],
    },
  ],
};

export default sidebars;
