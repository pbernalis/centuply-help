import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

const copy = {
  el: {
    title: 'Centuply Help Center',
    eyebrow: 'Centuply Knowledge Base',
    subtitle:
      'Οδηγοί, tutorials και πρακτικά βήματα για να δημιουργήσεις, να επεξεργαστείς και να δημοσιεύσεις το AI website σου με σιγουριά.',
    primaryCta: 'Ξεκίνα από τον οδηγό',
    secondaryCta: 'Δες όλα τα θέματα',
    finderTitle: 'Τι θέλεις να κάνεις σήμερα;',
    finderPlaceholder: 'Διάλεξε γρήγορη διαδρομή παρακάτω',
    categoriesTitle: 'Browse by category',
    categoriesSubtitle:
      'Όλες οι βασικές λειτουργίες του Centuply οργανωμένες σε καθαρές ενότητες.',
    popularTitle: 'Popular guides',
    popularSubtitle:
      'Οι οδηγοί που βοηθούν περισσότερο όταν ξεκινάς ή ετοιμάζεις το site για publish.',
    pathTitle: 'Recommended path',
    pathSubtitle: 'Ακολούθησε αυτά τα 3 βήματα για να φτάσεις γρήγορα σε live website.',
    supportTitle: 'Χρειάζεσαι περισσότερη βοήθεια;',
    supportText:
      'Άνοιξε το app, συνέχισε την επεξεργασία του site σου ή χρησιμοποίησε τους οδηγούς για να λύσεις γρήγορα τα επόμενα βήματα.',
    appCta: 'Go to App',
    articlesCta: 'Help Articles',
    footerNote: 'Built for business owners, creators and teams using Centuply.',
    searchChips: [
      ['Δημιουργία site', '/ai-builder/overview'],
      ['Visual Editor', '/editor/visual-editor'],
      ['Publish', '/publishing/publish-site'],
      ['Domain', '/domains/connect-domain'],
    ],
    categories: [
      ['🚀', 'Getting Started', 'Ξεκίνα σωστά με το πρώτο σου website.', '/getting-started/what-is-centuply'],
      ['🤖', 'AI Builder', 'Δημιουργία website με Simple Mode ή Advanced Planner.', '/ai-builder/overview'],
      ['✏️', 'Visual Editor', 'Άλλαξε κείμενα, εικόνες, sections και CTA.', '/editor/visual-editor'],
      ['📄', 'Pages & Content', 'Οργάνωσε σελίδες, storyboard και περιεχόμενο.', '/pages/manage-pages'],
      ['🎨', 'Brand & Logo', 'Διαχειρίσου brand στοιχεία, logo και visual identity.', '/brand/brand-editor'],
      ['🔎', 'SEO & Blog', 'Βελτίωσε SEO, local visibility και blog περιεχόμενο.', '/seo/seo-overview'],
      ['📩', 'Forms & Leads', 'Ρύθμισε φόρμες, παραδόσεις και leads inbox.', '/forms/forms-builder'],
      ['🌍', 'Publishing & Domains', 'Κάνε publish και σύνδεσε custom domain.', '/publishing/publish-site'],
      ['💳', 'Account & Billing', 'Διαχειρίσου billing, profile και account settings.', '/account/billing'],
    ],
    popular: [
      ['Create your first site', 'Ξεκίνα από την πρώτη δημιουργία website.', '/getting-started/create-first-site'],
      ['Use the Visual Editor', 'Μάθε πώς να κάνεις αλλαγές με ασφάλεια.', '/editor/visual-editor'],
      ['Preview and apply AI changes', 'Δες AI προτάσεις πριν εφαρμοστούν.', '/editor/ai-assistant-preview-apply'],
      ['Publish your website', 'Έλεγξε το site και κάνε publish.', '/publishing/publish-site'],
      ['Connect your domain', 'Σύνδεσε domain και έλεγξε DNS.', '/domains/connect-domain'],
      ['Manage languages', 'Ρύθμισε multilingual περιεχόμενο.', '/localization/localization-center'],
    ],
    steps: [
      ['1', 'Create', 'Δώσε τα στοιχεία της επιχείρησης και δημιούργησε το πρώτο draft.', '/ai-builder/simple-mode'],
      ['2', 'Edit', 'Βελτίωσε περιεχόμενο, sections, εικόνες και CTA μέσα στον editor.', '/editor/visual-editor'],
      ['3', 'Publish', 'Έλεγξε forms, SEO, mobile και domain πριν βγει live.', '/publishing/site-health'],
    ],
  },
  en: {
    title: 'Centuply Help Center',
    eyebrow: 'Centuply Knowledge Base',
    subtitle:
      'Guides, tutorials and practical steps to create, edit and publish your AI website with confidence.',
    primaryCta: 'Start with the guide',
    secondaryCta: 'Browse all topics',
    finderTitle: 'What do you want to do today?',
    finderPlaceholder: 'Choose a quick path below',
    categoriesTitle: 'Browse by category',
    categoriesSubtitle:
      'All core Centuply features organized into clear help sections.',
    popularTitle: 'Popular guides',
    popularSubtitle:
      'The most useful guides when you are starting or preparing your website for publishing.',
    pathTitle: 'Recommended path',
    pathSubtitle: 'Follow these 3 steps to move from first draft to live website.',
    supportTitle: 'Need more help?',
    supportText:
      'Open the app, continue editing your website, or use the guides to complete the next setup step.',
    appCta: 'Go to App',
    articlesCta: 'Help Articles',
    footerNote: 'Built for business owners, creators and teams using Centuply.',
    searchChips: [
      ['Create a site', '/en/ai-builder/overview'],
      ['Visual Editor', '/en/editor/visual-editor'],
      ['Publish', '/en/publishing/publish-site'],
      ['Domain', '/en/domains/connect-domain'],
    ],
    categories: [
      ['🚀', 'Getting Started', 'Start correctly with your first website.', '/en/getting-started/what-is-centuply'],
      ['🤖', 'AI Builder', 'Create a website with Simple Mode or Advanced Planner.', '/en/ai-builder/overview'],
      ['✏️', 'Visual Editor', 'Edit text, images, sections and calls to action.', '/en/editor/visual-editor'],
      ['📄', 'Pages & Content', 'Organize pages, storyboard and website content.', '/en/pages/manage-pages'],
      ['🎨', 'Brand & Logo', 'Manage brand details, logo and visual identity.', '/en/brand/brand-editor'],
      ['🔎', 'SEO & Blog', 'Improve SEO, local visibility and blog content.', '/en/seo/seo-overview'],
      ['📩', 'Forms & Leads', 'Set up forms, delivery and leads inbox.', '/en/forms/forms-builder'],
      ['🌍', 'Publishing & Domains', 'Publish your website and connect a custom domain.', '/en/publishing/publish-site'],
      ['💳', 'Account & Billing', 'Manage billing, profile and account settings.', '/en/account/billing'],
    ],
    popular: [
      ['Create your first site', 'Start with the first website creation flow.', '/en/getting-started/create-first-site'],
      ['Use the Visual Editor', 'Learn how to make safe website changes.', '/en/editor/visual-editor'],
      ['Preview and apply AI changes', 'Review AI suggestions before applying them.', '/en/editor/ai-assistant-preview-apply'],
      ['Publish your website', 'Check your site and publish it.', '/en/publishing/publish-site'],
      ['Connect your domain', 'Connect a domain and check DNS.', '/en/domains/connect-domain'],
      ['Manage languages', 'Set up multilingual content.', '/en/localization/localization-center'],
    ],
    steps: [
      ['1', 'Create', 'Add business details and generate the first website draft.', '/en/ai-builder/simple-mode'],
      ['2', 'Edit', 'Improve content, sections, images and CTAs inside the editor.', '/en/editor/visual-editor'],
      ['3', 'Publish', 'Check forms, SEO, mobile and domain before going live.', '/en/publishing/site-health'],
    ],
  },
  es: {
    title: 'Centuply Help Center',
    eyebrow: 'Centuply Knowledge Base',
    subtitle:
      'Guías, tutoriales y pasos prácticos para crear, editar y publicar tu sitio web con AI con confianza.',
    primaryCta: 'Empezar con la guía',
    secondaryCta: 'Ver todos los temas',
    finderTitle: '¿Qué quieres hacer hoy?',
    finderPlaceholder: 'Elige una ruta rápida abajo',
    categoriesTitle: 'Explorar por categoría',
    categoriesSubtitle:
      'Todas las funciones principales de Centuply organizadas en secciones claras.',
    popularTitle: 'Guías populares',
    popularSubtitle:
      'Las guías más útiles cuando empiezas o preparas tu sitio para publicar.',
    pathTitle: 'Ruta recomendada',
    pathSubtitle: 'Sigue estos 3 pasos para pasar del primer draft al sitio live.',
    supportTitle: '¿Necesitas más ayuda?',
    supportText:
      'Abre la app, continúa editando tu sitio o usa las guías para completar el siguiente paso.',
    appCta: 'Go to App',
    articlesCta: 'Help Articles',
    footerNote: 'Creado para negocios, creadores y equipos que usan Centuply.',
    searchChips: [
      ['Crear un sitio', '/es/ai-builder/overview'],
      ['Visual Editor', '/es/editor/visual-editor'],
      ['Publicar', '/es/publishing/publish-site'],
      ['Dominio', '/es/domains/connect-domain'],
    ],
    categories: [
      ['🚀', 'Getting Started', 'Empieza correctamente con tu primer sitio.', '/es/getting-started/what-is-centuply'],
      ['🤖', 'AI Builder', 'Crea un sitio con Simple Mode o Advanced Planner.', '/es/ai-builder/overview'],
      ['✏️', 'Visual Editor', 'Edita textos, imágenes, secciones y CTAs.', '/es/editor/visual-editor'],
      ['📄', 'Pages & Content', 'Organiza páginas, storyboard y contenido.', '/es/pages/manage-pages'],
      ['🎨', 'Brand & Logo', 'Gestiona marca, logo e identidad visual.', '/es/brand/brand-editor'],
      ['🔎', 'SEO & Blog', 'Mejora SEO, visibilidad local y contenido blog.', '/es/seo/seo-overview'],
      ['📩', 'Forms & Leads', 'Configura formularios, entregas y leads inbox.', '/es/forms/forms-builder'],
      ['🌍', 'Publishing & Domains', 'Publica tu sitio y conecta un dominio propio.', '/es/publishing/publish-site'],
      ['💳', 'Account & Billing', 'Gestiona billing, profile y cuenta.', '/es/account/billing'],
    ],
    popular: [
      ['Create your first site', 'Empieza con el primer flujo de creación.', '/es/getting-started/create-first-site'],
      ['Use the Visual Editor', 'Aprende a hacer cambios seguros.', '/es/editor/visual-editor'],
      ['Preview and apply AI changes', 'Revisa sugerencias AI antes de aplicarlas.', '/es/editor/ai-assistant-preview-apply'],
      ['Publish your website', 'Revisa tu sitio y publícalo.', '/es/publishing/publish-site'],
      ['Connect your domain', 'Conecta dominio y revisa DNS.', '/es/domains/connect-domain'],
      ['Manage languages', 'Configura contenido multilingüe.', '/es/localization/localization-center'],
    ],
    steps: [
      ['1', 'Create', 'Añade datos del negocio y genera el primer draft.', '/es/ai-builder/simple-mode'],
      ['2', 'Edit', 'Mejora contenido, secciones, imágenes y CTAs en el editor.', '/es/editor/visual-editor'],
      ['3', 'Publish', 'Revisa forms, SEO, móvil y dominio antes del live.', '/es/publishing/site-health'],
    ],
  },
};

function getCopy(locale) {
  if (locale?.startsWith('en')) return copy.en;
  if (locale?.startsWith('es')) return copy.es;
  return copy.el;
}

function HomepageHero({ t }) {
  return (
    <header className={styles.hero}>
      <div className={clsx('container', styles.heroInner)}>
        <div className={styles.eyebrow}>{t.eyebrow}</div>
        <Heading as="h1" className={styles.heroTitle}>
          {t.title}
        </Heading>
        <p className={styles.heroSubtitle}>{t.subtitle}</p>

        <div className={styles.heroActions}>
          <Link className={clsx(styles.button, styles.buttonPrimary)} to={t.categories[0][3]}>
            🚀 {t.primaryCta}
          </Link>
          <Link className={clsx(styles.button, styles.buttonSecondary)} to={t.categories[1][3]}>
            {t.secondaryCta}
          </Link>
        </div>

        <div className={styles.helpFinder} aria-label={t.finderTitle}>
          <div>
            <strong>{t.finderTitle}</strong>
            <span>{t.finderPlaceholder}</span>
          </div>
          <div className={styles.finderChips}>
            {t.searchChips.map(([label, to]) => (
              <Link key={label} to={to}>
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}

function CategoryGrid({ t }) {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <Heading as="h2">{t.categoriesTitle}</Heading>
          <p>{t.categoriesSubtitle}</p>
        </div>

        <div className={styles.categoryGrid}>
          {t.categories.map(([icon, title, description, to]) => (
            <Link className={styles.categoryCard} to={to} key={title}>
              <span className={styles.categoryIcon}>{icon}</span>
              <strong>{title}</strong>
              <p>{description}</p>
              <span className={styles.cardArrow}>Read guide →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function PopularGuides({ t }) {
  return (
    <section className={clsx(styles.section, styles.sectionAlt)}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <Heading as="h2">{t.popularTitle}</Heading>
          <p>{t.popularSubtitle}</p>
        </div>

        <div className={styles.popularGrid}>
          {t.popular.map(([title, description, to]) => (
            <Link className={styles.popularCard} to={to} key={title}>
              <strong>{title}</strong>
              <p>{description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function RecommendedPath({ t }) {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <Heading as="h2">{t.pathTitle}</Heading>
          <p>{t.pathSubtitle}</p>
        </div>

        <div className={styles.stepsGrid}>
          {t.steps.map(([number, title, description, to]) => (
            <Link className={styles.stepCard} to={to} key={title}>
              <span>{number}</span>
              <strong>{title}</strong>
              <p>{description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function SupportCta({ t }) {
  return (
    <section className={styles.supportSection}>
      <div className={clsx('container', styles.supportCard)}>
        <div>
          <Heading as="h2">{t.supportTitle}</Heading>
          <p>{t.supportText}</p>
        </div>
        <div className={styles.supportActions}>
          <Link className={clsx(styles.button, styles.buttonPrimary)} to="https://app.centuply.com">
            {t.appCta}
          </Link>
          <Link className={clsx(styles.button, styles.buttonSecondary)} to="/intro">
            {t.articlesCta}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const { i18n } = useDocusaurusContext();
  const t = getCopy(i18n?.currentLocale);

  return (
    <Layout title={t.title} description={t.subtitle}>
      <HomepageHero t={t} />
      <main>
        <CategoryGrid t={t} />
        <PopularGuides t={t} />
        <RecommendedPath t={t} />
        <SupportCta t={t} />
      </main>
    </Layout>
  );
}
