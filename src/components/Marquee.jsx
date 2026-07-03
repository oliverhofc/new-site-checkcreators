import { useI18n } from '../i18n.jsx';

export default function Marquee() {
  const { copy } = useI18n();
  const platforms = copy.marquee.platforms;
  const tickerItems = [...platforms, ...platforms, ...platforms, ...platforms];

  return (
    <section className="bf-ticker-section" data-reveal aria-label={copy.marquee.caption}>
      <div className="bf-ticker">
        <div className="bf-ticker-track">
          {tickerItems.map((name, index) => (
            <span className="bf-ticker-item" key={`${name}-${index}`}>
              <span className="bf-ticker-star">✦</span>
              {name}
              <span className="bf-ticker-tag">Creator</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
