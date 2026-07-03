import { useI18n } from '../i18n.jsx';

export default function Process() {
  const { copy } = useI18n();

  return (
    <section className="process-section" data-reveal>
      <div className="container-narrow">
        <header className="section-head">
          <span className="eyebrow">{copy.process.eyebrow}</span>
          <h2 className="heading-2">{copy.process.title}</h2>
          <p className="body-large">{copy.process.body}</p>
        </header>

        <ol className="process-steps">
          {copy.process.steps.map((step, i) => (
            <li key={step.number} className="process-step" style={{ '--stagger': i }}>
              <div className="process-number">
                <span className="process-number-text">{step.number}</span>
              </div>
              <div className="process-body">
                <h3 className="process-title">{step.title}</h3>
                <p className="process-text">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
