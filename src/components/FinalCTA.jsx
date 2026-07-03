import { useI18n } from '../i18n.jsx';

export default function FinalCTA() {
  const { copy } = useI18n();

  return (
    <section className="final-cta-section" data-reveal>
      <div className="container-narrow">
        <div className="final-cta">
          <div className="final-cta-bg" aria-hidden="true">
            <div className="final-cta-mesh"></div>
            <div className="final-cta-grid"></div>
          </div>
          <div className="final-cta-content">
            <h2 className="heading-2">{copy.finalCta.title}</h2>
            <p className="body-large">{copy.finalCta.body}</p>
            <div className="final-cta-buttons">
              <a href="/contract" className="btn btn--primary btn--lg">
                <span className="btn-label">{copy.finalCta.primary}</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
              </a>
              <a href="/services" className="btn btn--outline btn--lg">{copy.finalCta.secondary}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
