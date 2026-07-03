import { useCountUp } from '../hooks/useCountUp.jsx';
import { useI18n } from '../i18n.jsx';

function AnimatedStat({ target, suffix, label }) {
  const [value, ref] = useCountUp(target, 1800);

  return (
    <div className="stat" ref={ref}>
      <dt className="stat-value gradient-text">
        {value}{suffix}
      </dt>
      <dd className="stat-label">{label}</dd>
    </div>
  );
}

export default function PortfolioStats() {
  const { copy } = useI18n();

  return (
    <section className="stats" data-reveal>
      <div className="container-wide">
        <dl className="stats-grid">
          {copy.portfolio.stats.map((s) => (
            <AnimatedStat key={s.label} {...s} />
          ))}
        </dl>
      </div>
    </section>
  );
}
