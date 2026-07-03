import { useI18n } from '../i18n.jsx';

export default function Hero() {
  const { copy } = useI18n();

  return (
    <section className="hero" data-reveal>
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-blob hero-blob--1"></div>
        <div className="hero-blob hero-blob--2"></div>
        <div className="hero-blob hero-blob--3"></div>
      </div>

      <div className="container-wide">
        <div className="hero-content">
          <span className="eyebrow">
            <span className="eyebrow-dot"></span>
            {copy.hero.eyebrow}
          </span>
          <h1 className="heading-1">
            {copy.hero.before}<span className="gradient-text">{copy.hero.highlight}</span>
            <span className="heading-serif">{copy.hero.serif}</span>
          </h1>
          <p className="body-large">{copy.hero.body}</p>
          <div className="hero-cta">
            <a href="/contract" className="btn btn--primary btn--lg">
              <span className="btn-label">{copy.hero.primary}</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
            </a>
            <a href="/portfolio" className="btn btn--outline btn--lg">{copy.hero.secondary}</a>
          </div>
        </div>

        <div className="hero-floating" aria-hidden="true">
          <div className="floating-icon floating-icon--1">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path><path d="M20 3v4"></path><path d="M22 5h-4"></path><path d="M4 17v2"></path><path d="M5 18H3"></path></svg>
          </div>
          <div className="floating-icon floating-icon--2">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
          </div>
        </div>
      </div>
    </section>
  );
}
