import { useI18n } from '../i18n.jsx';

export default function PortfolioHero() {
  const { copy } = useI18n();

  return (
    <section className="portfolio-hero" data-reveal>
      <div className="portfolio-hero-bg" aria-hidden="true">
        <div className="hero-blob hero-blob--1"></div>
        <div className="hero-blob hero-blob--2"></div>
      </div>

      <div className="container-wide">
        <div className="portfolio-hero-content">
          <span className="eyebrow">
            <span className="eyebrow-dot"></span>
            {copy.portfolio.eyebrow}
          </span>
          <h1 className="heading-1">
            {copy.portfolio.before}<span className="gradient-text">{copy.portfolio.highlight}</span>
            <span className="heading-serif">{copy.portfolio.serif}</span>
          </h1>
          <p className="body-large">{copy.portfolio.body}</p>

          {copy.portfolio.partners && (
            <div className="portfolio-partner-chips" aria-label="Main partners and expansion fronts">
              {copy.portfolio.partners.map((partner) => (
                <span key={partner} className="portfolio-partner-chip">{partner}</span>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
