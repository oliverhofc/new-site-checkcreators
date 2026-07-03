import CreatorInsights from '../components/CreatorInsights.jsx';
import { useI18n } from '../i18n.jsx';

const SERVICES_COPY = {
  pt: {
    eyebrow: 'Serviços estratégicos',
    titleStart: 'Soluções para ',
    titleHighlight: 'crescimento digital',
    subtitle: 'Na aba Serviços, reunimos os pilares que ajudam creators e streamers a evoluírem com mais direção: consultoria criativa, estratégia de crescimento e monetização.',
    cards: [
      { title: 'Consultoria Criativa', text: 'Diagnóstico, posicionamento, nicho, presença digital e organização da jornada criativa.' },
      { title: 'Estratégia de Crescimento', text: 'Planejamento, metas reais, produção com foco, autoridade e crescimento sustentável.' },
      { title: 'Monetização', text: 'Comunidade, parcerias, conteúdo como ativo digital e oportunidades reais em plataformas.' }
    ]
  },
  en: {
    eyebrow: 'Strategic services',
    titleStart: 'Solutions for ',
    titleHighlight: 'digital growth',
    subtitle: 'In Services, we bring together the pillars that help creators and streamers evolve with direction: creative consulting, growth strategy and monetization.',
    cards: [
      { title: 'Creative Consulting', text: 'Diagnosis, positioning, niche, digital presence and organization of the creative journey.' },
      { title: 'Growth Strategy', text: 'Planning, realistic goals, focused production, authority and sustainable growth.' },
      { title: 'Monetization', text: 'Community, partnerships, content as a digital asset and real platform opportunities.' }
    ]
  },
  es: {
    eyebrow: 'Servicios estratégicos',
    titleStart: 'Soluciones para ',
    titleHighlight: 'crecimiento digital',
    subtitle: 'En Servicios, reunimos los pilares que ayudan a creators y streamers a evolucionar con dirección: consultoría creativa, estrategia de crecimiento y monetización.',
    cards: [
      { title: 'Consultoría Creativa', text: 'Diagnóstico, posicionamiento, nicho, presencia digital y organización de la ruta creativa.' },
      { title: 'Estrategia de Crecimiento', text: 'Planificación, metas reales, producción enfocada, autoridad y crecimiento sostenible.' },
      { title: 'Monetización', text: 'Comunidad, alianzas, contenido como activo digital y oportunidades reales en plataformas.' }
    ]
  }
};

export default function ServicesPage() {
  const { language } = useI18n();
  const copy = SERVICES_COPY[language] || SERVICES_COPY.en;

  return (
    <section className="services-articles-page" data-reveal>
      <section className="services-articles-hero">
        <div className="hero-bg" aria-hidden="true">
          <div className="hero-blob hero-blob--1"></div>
          <div className="hero-blob hero-blob--2"></div>
          <div className="hero-blob hero-blob--3"></div>
        </div>

        <div className="container-wide">
          <header className="services-articles-head">
            <span className="eyebrow">
              <span className="eyebrow-dot"></span>
              {copy.eyebrow}
            </span>
            <h1 className="heading-1">
              {copy.titleStart}<span className="gradient-text">{copy.titleHighlight}</span>
            </h1>
            <p className="body-large">{copy.subtitle}</p>
          </header>

          <div className="services-articles-mini-grid" aria-label={copy.eyebrow}>
            {copy.cards.map((item, index) => (
              <article key={item.title} className="services-articles-mini-card" style={{ '--stagger': index }}>
                <span className="services-articles-mini-number">{String(index + 1).padStart(2, '0')}</span>
                <h2>{item.title}</h2>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CreatorInsights />
    </section>
  );
}
