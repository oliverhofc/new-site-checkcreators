import { useI18n } from '../i18n.jsx';
import { assetUrl, routeUrl } from '../utils/paths.js';

const FOUNDATION_DATE = { year: 2020, month: 10, day: 12 }; // 12/11/2020 - mês em formato JS: novembro = 10

function getYearsSinceFoundation(today = new Date()) {
  let years = today.getFullYear() - FOUNDATION_DATE.year;
  const anniversaryAlreadyPassed =
    today.getMonth() > FOUNDATION_DATE.month ||
    (today.getMonth() === FOUNDATION_DATE.month && today.getDate() >= FOUNDATION_DATE.day);

  if (!anniversaryAlreadyPassed) years -= 1;

  return Math.max(years, 0);
}

const ABOUT_COPY = {
  pt: {
    eyebrow: 'Sobre nós',
    title: 'Transformamos presença digital com creators reais',
    paragraphs: [
      'A Check Creators atua conectando creators, streamers, marcas e plataformas com estratégia, relacionamento humano e visão de crescimento.',
      'Nosso trabalho combina gestão, treinamento, curadoria e performance para ampliar oportunidades no mercado digital e fortalecer talentos com potencial de escala.'
    ],
    stats: [
      { value: '20.000+', label: 'Creators em gestão' },
      { value: 'auto', label: 'Anos transformando digital', autoYears: true }
    ],
    button: 'Conheça nossos contratos',
    alt: 'Equipe em reunião estratégica da Check Creators'
  },
  en: {
    eyebrow: 'About us',
    title: 'We build digital presence with real creators',
    paragraphs: [
      'Check Creators connects creators, streamers, brands and platforms through strategy, human relationships and a growth-driven vision.',
      'Our work combines management, training, curation and performance to expand opportunities in the digital market and strengthen scalable talent.'
    ],
    stats: [
      { value: '20,000+', label: 'Creators managed' },
      { value: 'auto', label: 'Years building digital growth', autoYears: true }
    ],
    button: 'Explore contracts',
    alt: 'Check Creators team in a strategic meeting'
  },
  es: {
    eyebrow: 'Sobre nosotros',
    title: 'Construimos presencia digital con creators reales',
    paragraphs: [
      'Check Creators conecta creators, streamers, marcas y plataformas con estrategia, relaciones humanas y visión de crecimiento.',
      'Nuestro trabajo combina gestión, entrenamiento, curaduría y performance para ampliar oportunidades en el mercado digital y fortalecer talentos con potencial de escala.'
    ],
    stats: [
      { value: '20.000+', label: 'Creators gestionados' },
      { value: 'auto', label: 'Años construyendo crecimiento digital', autoYears: true }
    ],
    button: 'Ver contratos',
    alt: 'Equipo Check Creators en reunión estratégica'
  }
};

export default function PortfolioAbout() {
  const { language } = useI18n();
  const copy = ABOUT_COPY[language] || ABOUT_COPY.en;
  const yearsSinceFoundation = `${getYearsSinceFoundation()}+`;

  return (
    <section className="portfolio-real-about" data-reveal>
      <div className="container-wide portfolio-real-about-grid">
        <article className="portfolio-real-copy">
          <span className="eyebrow">
            <span className="eyebrow-dot"></span>
            {copy.eyebrow}
          </span>

          <h2 className="heading-2">{copy.title}</h2>

          {copy.paragraphs.map((paragraph) => (
            <p key={paragraph} className="portfolio-real-paragraph">{paragraph}</p>
          ))}

          <div className="portfolio-real-stats">
            {copy.stats.map((item) => (
              <div key={item.label} className="portfolio-real-stat">
                <strong className="gradient-text">{item.autoYears ? yearsSinceFoundation : item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>

          <a href={routeUrl('/contract')} className="btn btn--primary portfolio-real-button">
            <span className="btn-label">{copy.button}</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </a>
        </article>

        <figure className="portfolio-real-feature-image">
          <img src={assetUrl('/portfolio-real/about-team.avif')} alt={copy.alt} loading="lazy" />
          <figcaption>Check Creators</figcaption>
        </figure>
      </div>
    </section>
  );
}
