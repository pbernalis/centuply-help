import { useMemo, useState } from 'react';
import Link from '@docusaurus/Link';
import helpSearchIndex from '../data/helpSearchIndex';
import styles from './HomepageSearch.module.css';

const copy = {
  el: {
    eyebrow: 'ΑΝΑΖΗΤΗΣΗ',
    title: 'Αναζήτησε στους οδηγούς',
    subtitle: 'Βρες γρήγορα οδηγίες για δημιουργία site, editor, publish, domain, φόρμες και SEO.',
    placeholder: 'Π.χ. domain, publish, φόρμες, Visual Editor...',
    suggested: 'Προτεινόμενοι οδηγοί',
    results: 'Αποτελέσματα',
    noResultsTitle: 'Δεν βρέθηκαν αποτελέσματα',
    noResultsText: 'Δοκίμασε διαφορετική λέξη, όπως publish, domain, SEO ή φόρμες.',
    open: 'Άνοιγμα οδηγού',
    clear: 'Καθαρισμός',
    examples: ['publish', 'domain', 'φόρμες', 'Visual Editor'],
  },
  en: {
    eyebrow: 'SEARCH',
    title: 'Search the help guides',
    subtitle: 'Find instructions for site creation, editing, publishing, domains, forms and SEO.',
    placeholder: 'Try domain, publish, forms, Visual Editor...',
    suggested: 'Suggested guides',
    results: 'Results',
    noResultsTitle: 'No results found',
    noResultsText: 'Try another keyword, such as publish, domain, SEO or forms.',
    open: 'Open guide',
    clear: 'Clear',
    examples: ['publish', 'domain', 'forms', 'Visual Editor'],
  },
  es: {
    eyebrow: 'BUSCAR',
    title: 'Busca en las guías',
    subtitle: 'Encuentra instrucciones para crear, editar, publicar, dominios, formularios y SEO.',
    placeholder: 'Prueba dominio, publicar, formularios, Visual Editor...',
    suggested: 'Guías sugeridas',
    results: 'Resultados',
    noResultsTitle: 'No se encontraron resultados',
    noResultsText: 'Prueba otra palabra, como publicar, dominio, SEO o formularios.',
    open: 'Abrir guía',
    clear: 'Limpiar',
    examples: ['publicar', 'dominio', 'formularios', 'Visual Editor'],
  },
};

const categoryLabels = {
  el: {
    'getting started': 'Ξεκινώντας',
    'ai builder': 'Δημιουργία με AI',
    editor: 'Editor',
    pages: 'Σελίδες',
    media: 'Πολυμέσα',
    collections: 'Συλλογές',
    brand: 'Brand',
    seo: 'SEO',
    blog: 'Blog',
    localization: 'Γλώσσες',
    publishing: 'Δημοσίευση',
    domains: 'Domains',
    forms: 'Φόρμες',
    leads: 'Leads',
    chatbot: 'Chatbot',
    bookings: 'Κρατήσεις',
    commerce: 'Προσφορές',
    support: 'Υποστήριξη',
    account: 'Λογαριασμός',
  },
  en: {
    'getting started': 'Getting Started',
    'ai builder': 'AI Builder',
    editor: 'Editor',
    pages: 'Pages',
    media: 'Media',
    collections: 'Collections',
    brand: 'Brand',
    seo: 'SEO',
    blog: 'Blog',
    localization: 'Languages',
    publishing: 'Publishing',
    domains: 'Domains',
    forms: 'Forms',
    leads: 'Leads',
    chatbot: 'Chatbot',
    bookings: 'Bookings',
    commerce: 'Commerce',
    support: 'Support',
    account: 'Account',
  },
  es: {
    'getting started': 'Primeros pasos',
    'ai builder': 'AI Builder',
    editor: 'Editor',
    pages: 'Páginas',
    media: 'Media',
    collections: 'Colecciones',
    brand: 'Brand',
    seo: 'SEO',
    blog: 'Blog',
    localization: 'Idiomas',
    publishing: 'Publicación',
    domains: 'Dominios',
    forms: 'Formularios',
    leads: 'Leads',
    chatbot: 'Chatbot',
    bookings: 'Reservas',
    commerce: 'Comercio',
    support: 'Soporte',
    account: 'Cuenta',
  },
};

function getLocale(locale) {
  if (locale?.startsWith('en')) return 'en';
  if (locale?.startsWith('es')) return 'es';
  return 'el';
}

function normalize(value) {
  return String(value || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/ς/g, 'σ')
    .trim();
}

function getCategoryLabel(category, locale) {
  const key = normalize(category);
  return categoryLabels[locale]?.[key] || category;
}

function scoreItem(item, terms) {
  const title = normalize(item.title);
  const description = normalize(item.description);
  const category = normalize(item.category);
  const searchText = normalize(item.searchText);

  return terms.reduce((score, term) => {
    if (!term) return score;
    if (title.includes(term)) return score + 16;
    if (description.includes(term)) return score + 10;
    if (category.includes(term)) return score + 7;
    if (searchText.includes(term)) return score + 3;
    return score;
  }, 0);
}

export default function HomepageSearch({ locale }) {
  const activeLocale = getLocale(locale);
  const t = copy[activeLocale];
  const [query, setQuery] = useState('');

  const localeItems = useMemo(
    () => helpSearchIndex.filter((item) => item.locale === activeLocale),
    [activeLocale],
  );

  const normalizedQuery = normalize(query);

  const results = useMemo(() => {
    if (!normalizedQuery) return localeItems.slice(0, 6);

    const terms = normalizedQuery.split(/\s+/).filter(Boolean);

    return localeItems
      .map((item) => ({ ...item, score: scoreItem(item, terms) }))
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score || a.title.localeCompare(b.title))
      .slice(0, 8);
  }, [localeItems, normalizedQuery]);

  const hasQuery = normalizedQuery.length > 0;

  return (
    <section className={styles.searchSection}>
      <div className="container">
        <div className={styles.searchPanel}>
          <div className={styles.searchHeader}>
            <span className={styles.searchEyebrow}>{t.eyebrow}</span>
            <h2>{t.title}</h2>
            <p>{t.subtitle}</p>
          </div>

          <div className={styles.searchBox}>
            <span className={styles.searchIcon}>⌕</span>
            <input
              aria-label={t.title}
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={t.placeholder}
            />
            {query ? (
              <button type="button" onClick={() => setQuery('')}>
                {t.clear}
              </button>
            ) : null}
          </div>

          <div className={styles.exampleChips}>
            {t.examples.map((example) => (
              <button key={example} type="button" onClick={() => setQuery(example)}>
                {example}
              </button>
            ))}
          </div>

          <div className={styles.resultsHeader}>
            <strong>{hasQuery ? t.results : t.suggested}</strong>
            <span>{results.length}</span>
          </div>

          {results.length > 0 ? (
            <div className={styles.resultsGrid}>
              {results.map((item) => (
                <Link className={styles.resultCard} to={item.permalink} key={item.permalink}>
                  <span>{getCategoryLabel(item.category, activeLocale)}</span>
                  <strong>{item.title}</strong>
                  <p>{item.description || item.excerpt}</p>
                  <em>{t.open} →</em>
                </Link>
              ))}
            </div>
          ) : (
            <div className={styles.emptyState}>
              <strong>{t.noResultsTitle}</strong>
              <p>{t.noResultsText}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
