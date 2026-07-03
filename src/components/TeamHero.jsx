import { useI18n } from '../i18n.jsx';

export default function TeamHero() {
  const { copy } = useI18n();

  return (
    <section className="team-hero" data-reveal>
      <div className="team-hero-bg" aria-hidden="true">
        <div className="hero-blob hero-blob--1"></div>
        <div className="hero-blob hero-blob--2"></div>
      </div>

      <div className="container-wide">
        <div className="team-hero-content">
          <span className="eyebrow">
            <span className="eyebrow-dot"></span>
            {copy.team.eyebrow}
          </span>
          <h1 className="heading-1">
            {copy.team.before}<span className="gradient-text">{copy.team.highlight}</span>
            <span className="heading-serif">{copy.team.serif}</span>
          </h1>
          <p className="body-large">{copy.team.body}</p>
        </div>

        <div className="team-about glass-card">
          <h2 className="heading-3 team-about-title">{copy.team.aboutTitle}</h2>
          <p className="team-about-text">{copy.team.aboutText}</p>
        </div>
      </div>
    </section>
  );
}
