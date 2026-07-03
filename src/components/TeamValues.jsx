import { useI18n } from '../i18n.jsx';

const ICONS = [
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M7 16V9"></path><path d="M11 16v-4"></path><path d="M15 16V7"></path><path d="M19 16v-2"></path></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
];

export default function TeamValues() {
  const { copy } = useI18n();

  return (
    <section className="team-values-section" data-reveal>
      <div className="container-wide">
        <header className="section-head">
          <span className="eyebrow eyebrow--sm">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 12l10 5 10-5"></path></svg>
            {copy.team.values.eyebrow}
          </span>
          <h2 className="heading-2">{copy.team.values.title}</h2>
          <p className="body-large">{copy.team.values.body}</p>
        </header>

        <div className="team-values-grid">
          {copy.team.values.items.map((v, i) => (
            <article key={v.title} className="service-card team-value" style={{ '--stagger': i }}>
              <div className="service-icon">{ICONS[i]}</div>
              <h3 className="service-title">{v.title}</h3>
              <p className="service-text">{v.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
