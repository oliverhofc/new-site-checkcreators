import { useState, useEffect } from 'react';
import { useRoute } from '../hooks/RouterContext.jsx';
import { useI18n } from '../i18n.jsx';
import { getWhatsAppLink } from '../utils/whatsapp.js';
import { routeUrl } from '../utils/paths.js';

const NAV_LINKS = [
  { to: '/',          key: 'home' },
  { to: '/portfolio', key: 'portfolio' },
  { to: '/services',  key: 'services' },
  { to: '/contract',  key: 'contract' },
  { to: '/team',      key: 'team' },
  { to: '/contact',   key: 'contact' }
];

function LanguageSelect({ compact = false }) {
  const { language, setLanguage, languages, copy } = useI18n();

  return (
    <label className={`language-select${compact ? ' language-select--mobile' : ''}`}>
      <span className="sr-only">{copy.meta.languageLabel}</span>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M2 12h20"></path>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
      </svg>
      <select
        value={language}
        aria-label={copy.meta.languageLabel}
        onChange={(event) => setLanguage(event.target.value)}
      >
        {languages.map((item) => (
          <option key={item.code} value={item.code}>
            {compact ? `${item.short} · ${item.label}` : item.short}
          </option>
        ))}
      </select>
    </label>
  );
}

export default function Header() {
  const { path, navigate } = useRoute();
  const { copy, language } = useI18n();

  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'dark';
    const saved = localStorage.getItem('cc-theme');
    if (saved) return saved;
    return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
  });

  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('cc-theme', theme);
  }, [theme]);

  useEffect(() => {
    setMobileOpen(false);
  }, [path]);

  const toggleTheme = () => setTheme(t => (t === 'dark' ? 'light' : 'dark'));
  const whatsappLink = getWhatsAppLink(language);

  const handleNavClick = (to) => (e) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button === 1) return;
    e.preventDefault();
    navigate(to);
  };

  return (
    <>
      <header className="site-header">
        <div className="container-wide">
          <nav className="header-nav" aria-label="Main navigation">
            <a href={routeUrl('/')} className="brand" onClick={handleNavClick('/')}>
              <span className="brand-mark" aria-hidden="true">
                <span className="brand-mark-inner">C</span>
              </span>
              <span className="brand-text">Check <span className="gradient-text">Creators</span></span>
            </a>

            <div className="nav-links">
              {NAV_LINKS.map(({ to, key }) => (
                <a
                  key={to}
                  href={routeUrl(to)}
                  className={`nav-link${path === to ? ' is-active' : ''}`}
                  onClick={handleNavClick(to)}
                >
                  {copy.nav[key]}
                </a>
              ))}
            </div>

            <div className="header-actions">
              <LanguageSelect />

              <button
                className="icon-btn"
                aria-label={theme === 'dark' ? 'Activate light theme' : 'Activate dark theme'}
                onClick={toggleTheme}
              >
                {theme === 'dark' ? (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>
                ) : (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg>
                )}
              </button>

              <a href={whatsappLink} className="btn btn--primary" target="_blank" rel="noopener noreferrer">
                <span className="btn-label">{copy.nav.agency}</span>
              </a>

              <button
                className="icon-btn icon-btn--mobile"
                aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileOpen}
                onClick={() => setMobileOpen(o => !o)}
              >
                {mobileOpen ? (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
                ) : (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>
                )}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {mobileOpen && (
        <div className="mobile-drawer" role="dialog" aria-modal="true">
          <nav className="mobile-drawer-nav" aria-label="Mobile navigation">
            <LanguageSelect compact />

            {NAV_LINKS.map(({ to, key }) => (
              <a
                key={to}
                href={routeUrl(to)}
                className={`mobile-drawer-link${path === to ? ' is-active' : ''}`}
                onClick={handleNavClick(to)}
              >
                {copy.nav[key]}
              </a>
            ))}
            <div className="mobile-drawer-cta">
              <a href={whatsappLink} className="btn btn--primary" target="_blank" rel="noopener noreferrer">
                <span className="btn-label">{copy.nav.agency}</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
