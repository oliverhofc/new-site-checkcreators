import { useRoute } from '../hooks/RouterContext.jsx';
import { useI18n } from '../i18n.jsx';
import { routeUrl } from '../utils/paths.js';

export default function PlaceholderPage({ title, titleKey }) {
  const { navigate } = useRoute();
  const { copy } = useI18n();
  const pageTitle = title || copy.routes[titleKey] || titleKey;

  return (
    <section className="hero" data-reveal>
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-blob hero-blob--1"></div>
        <div className="hero-blob hero-blob--2"></div>
      </div>
      <div className="container-wide">
        <div className="hero-content">
          <span className="eyebrow">
            <span className="eyebrow-dot"></span>
            {copy.placeholder.soon}
          </span>
          <h1 className="heading-1">
            <span className="gradient-text">{pageTitle}</span>
          </h1>
          <p className="body-large">{copy.placeholder.body}</p>
          <div className="hero-cta">
            <a
              href={routeUrl('/')}
              className="btn btn--primary btn--lg"
              onClick={(e) => { e.preventDefault(); navigate('/'); }}
            >
              <span className="btn-label">{copy.placeholder.back}</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
