import { useI18n } from '../i18n.jsx';

export default function Split() {
  const { copy } = useI18n();
  const creators = copy.split.creators;
  const brands = copy.split.brands;

  return (
    <section className="split-section" data-reveal>
      <div className="container-wide">
        <div className="split-grid">
          <article className="split-card split-card--primary">
            <div className="split-card-bg" aria-hidden="true"></div>
            <div className="split-card-content">
              <span className="chip chip--primary">{creators.chip}</span>
              <h3 className="heading-3">{creators.title}</h3>
              <p className="split-text">{creators.text}</p>
              <ul className="split-list">
                {creators.list.map((item) => <li key={item}><span className="dot dot--primary"></span>{item}</li>)}
              </ul>
              <a href="/contract" className="btn btn--primary">
                <span className="btn-label">{creators.button}</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
              </a>
            </div>
          </article>

          <article className="split-card split-card--muted">
            <div className="split-card-content">
              <span className="chip chip--muted">{brands.chip}</span>
              <h3 className="heading-3">{brands.title}</h3>
              <p className="split-text">{brands.text}</p>
              <ul className="split-list">
                {brands.list.map((item) => <li key={item}><span className="dot"></span>{item}</li>)}
              </ul>
              <a href="/contact" className="btn btn--outline">
                {brands.button}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
