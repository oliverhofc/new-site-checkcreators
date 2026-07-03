import { useI18n } from '../i18n.jsx';

const CASE_IMAGES = [
  'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80',
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80',
  'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80'
];

const CASE_HREFS = [
  '/portfolio/lancamento-produto-tech',
  '/portfolio/gestao-influencer-lifestyle',
  '/portfolio/campanha-awareness-sustentabilidade'
];

export default function Cases() {
  const { copy } = useI18n();

  return (
    <section className="cases-section" data-reveal>
      <div className="container-wide">
        <header className="section-head">
          <span className="eyebrow">{copy.cases.eyebrow}</span>
          <h2 className="heading-2">{copy.cases.title}</h2>
          <p className="body-large">{copy.cases.body}</p>
        </header>

        <div className="cases-grid">
          {copy.cases.items.map((c, i) => (
            <a key={CASE_HREFS[i]} href={CASE_HREFS[i]} className="case-card" style={{ '--stagger': i }}>
              <img src={CASE_IMAGES[i]} alt={c.alt} className="case-image" loading="lazy" />
              <span className="case-badge">{c.badge}</span>
              <div className="case-overlay">
                <span className="case-category">{c.category}</span>
                <h3 className="case-title">{c.title}</h3>
                <p className="case-client">{c.client}</p>
                <span className="case-link">
                  {copy.cases.view}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className="section-footer">
          <a href="/portfolio" className="btn btn--outline">
            {copy.cases.button}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
          </a>
        </div>
      </div>
    </section>
  );
}
