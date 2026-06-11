/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'category',
      label: '🚀 Ξεκινώντας',
      items: [
        'intro',
        'getting-started/what-is-centuply',
        'getting-started/create-first-site',
        'getting-started/site-cockpit',
      ],
    },
    {
      type: 'category',
      label: '🤖 Δημιουργία site με AI',
      items: [
        'ai-builder/overview',
        'ai-builder/simple-mode',
        'ai-builder/advanced-planner',
        'ai-builder/payment-and-generation',
      ],
    },
    {
      type: 'category',
      label: '✏️ Επεξεργασία site',
      items: [
        'editor/visual-editor',
        'editor/ai-assistant-preview-apply',
        'editor/edit-text-images',
        'editor/sections',
      ],
    },
    {
      type: 'category',
      label: '📄 Σελίδες & Περιεχόμενο',
      items: [
        'pages/manage-pages',
        'pages/storyboard-view',
        'media/media-library',
        'collections/overview',
      ],
    },
    {
      type: 'category',
      label: '🎨 Brand & Logo',
      items: [
        'brand/brand-editor',
        'brand/logo-studio',
      ],
    },
    {
      type: 'category',
      label: '🔎 SEO, Blog & Γλώσσες',
      items: [
        'seo/seo-overview',
        'seo/local-seo',
        'blog/blog-management',
        'localization/localization-center',
      ],
    },
    {
      type: 'category',
      label: '🌍 Δημοσίευση & Domain',
      items: [
        'publishing/publish-site',
        'publishing/site-health',
        'domains/connect-domain',
        'domains/dns-troubleshooting',
      ],
    },
    {
      type: 'category',
      label: '📩 Φόρμες & Leads',
      items: [
        'forms/forms-builder',
        'forms/form-delivery',
        'leads/leads-inbox',
      ],
    },
    {
      type: 'category',
      label: '💬 Chatbot',
      items: [
        'chatbot/setup-chatbot',
        'chatbot/appearance',
        'chatbot/test-and-publish',
      ],
    },
    {
      type: 'category',
      label: '📅 Business Tools',
      items: [
        'bookings/bookings-manager',
        'commerce/offers-manager',
        'support/support-center',
      ],
    },
    {
      type: 'category',
      label: '💳 Λογαριασμός & Billing',
      items: [
        'account/billing',
        'account/profile-settings',
      ],
    },
  ],
};

export default sidebars;