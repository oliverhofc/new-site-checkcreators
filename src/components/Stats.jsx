import { useI18n } from '../i18n.jsx';

export default function Stats() {
  const { copy } = useI18n();

  return (
    <section className="stats" data-reveal>
      <div className="container-wide">
        <dl className="stats-grid">
          {copy.stats.map(({ value, label }) => (
            <div className="stat" key={label}>
              <dt className="stat-value gradient-text">{value}</dt>
              <dd className="stat-label">{label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
