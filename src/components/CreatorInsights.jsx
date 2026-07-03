import { useI18n } from '../i18n.jsx';
import { useRoute } from '../hooks/RouterContext.jsx';

const INSIGHTS_COPY = {
  pt: {
    eyebrow: 'Artigos estratégicos',
    titleStart: 'Conhecimento aplicado para ',
    titleHighlight: 'crescimento real',
    subtitle: 'Três pilares para transformar criação em posicionamento, audiência em comunidade e influência em resultado financeiro.',
    readMore: 'Saiba mais',
    contractCta: 'Ver contratos',
    contactCta: 'Falar com a agência',
    items: [
      {
        title: 'Consultoria Criativa',
        slug: 'consultoria-criativa',
        kicker: 'Diagnóstico · Nicho · Posicionamento',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&q=88&auto=format&fit=crop',
        text: 'Orientação personalizada para criadores que precisam estruturar nicho, presença digital, identidade e um plano profissional para crescer com consistência.',
        points: ['Definição de público e proposta de valor', 'Presença digital mais forte', 'Produtos e serviços que convertem']
      },
      {
        title: 'Estratégia de Crescimento',
        slug: 'estrategia-crescimento',
        kicker: 'Metas · Produção · Autoridade',
        image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=900&q=88&auto=format&fit=crop',
        text: 'Planos de ação para sair do improviso, organizar produção, definir metas alcançáveis e construir crescimento sustentável nas redes sociais.',
        points: ['Planejamento com direção clara', 'Produção com foco e eficiência', 'Autoridade e posicionamento de marca']
      },
      {
        title: 'Monetização',
        slug: 'monetizacao',
        kicker: 'Receita · Comunidade · Parcerias',
        image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=900&q=88&auto=format&fit=crop',
        text: 'Estratégias para transformar audiência em comunidade e criar fontes de receita compatíveis com o perfil do creator, da plataforma e do mercado.',
        points: ['Fontes de receita alinhadas ao nicho', 'Kwai e TikTok como oportunidades reais', 'Conteúdo como ativo digital']
      }
    ]
  },
  en: {
    eyebrow: 'Strategic articles',
    titleStart: 'Applied knowledge for ',
    titleHighlight: 'real growth',
    subtitle: 'Three pillars to turn content creation into positioning, audience into community and influence into measurable revenue.',
    readMore: 'Learn more',
    contractCta: 'View contracts',
    contactCta: 'Contact the agency',
    items: [
      {
        title: 'Creative Consulting',
        slug: 'consultoria-criativa',
        kicker: 'Diagnosis · Niche · Positioning',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&q=88&auto=format&fit=crop',
        text: 'Personalized guidance for creators who need to structure their niche, digital presence, identity and a professional growth plan.',
        points: ['Audience and value proposition definition', 'Stronger digital presence', 'Products and services that convert']
      },
      {
        title: 'Growth Strategy',
        slug: 'estrategia-crescimento',
        kicker: 'Goals · Production · Authority',
        image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=900&q=88&auto=format&fit=crop',
        text: 'Action plans to move beyond improvisation, organize production, set achievable goals and build sustainable social growth.',
        points: ['Planning with clear direction', 'Focused and efficient production', 'Authority and brand positioning']
      },
      {
        title: 'Monetization',
        slug: 'monetizacao',
        kicker: 'Revenue · Community · Partnerships',
        image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=900&q=88&auto=format&fit=crop',
        text: 'Strategies to turn audience into community and create revenue streams aligned with the creator, platform and market.',
        points: ['Revenue sources aligned with the niche', 'Kwai and TikTok as real opportunities', 'Content as a digital asset']
      }
    ]
  },
  es: {
    eyebrow: 'Artículos estratégicos',
    titleStart: 'Conocimiento aplicado para ',
    titleHighlight: 'crecimiento real',
    subtitle: 'Tres pilares para transformar creación en posicionamiento, audiencia en comunidad e influencia en resultados financieros.',
    readMore: 'Saber más',
    contractCta: 'Ver contratos',
    contactCta: 'Hablar con la agencia',
    items: [
      {
        title: 'Consultoría Creativa',
        slug: 'consultoria-criativa',
        kicker: 'Diagnóstico · Nicho · Posicionamiento',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&q=88&auto=format&fit=crop',
        text: 'Orientación personalizada para creators que necesitan estructurar nicho, presencia digital, identidad y un plan profesional de crecimiento.',
        points: ['Definición de audiencia y propuesta de valor', 'Presencia digital más fuerte', 'Productos y servicios que convierten']
      },
      {
        title: 'Estrategia de Crecimiento',
        slug: 'estrategia-crescimento',
        kicker: 'Metas · Producción · Autoridad',
        image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=900&q=88&auto=format&fit=crop',
        text: 'Planes de acción para salir de la improvisación, organizar la producción, definir metas alcanzables y crecer de forma sostenible.',
        points: ['Planificación con dirección clara', 'Producción enfocada y eficiente', 'Autoridad y posicionamiento de marca']
      },
      {
        title: 'Monetización',
        slug: 'monetizacao',
        kicker: 'Ingresos · Comunidad · Alianzas',
        image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=900&q=88&auto=format&fit=crop',
        text: 'Estrategias para convertir audiencia en comunidad y crear fuentes de ingreso compatibles con el perfil del creator, la plataforma y el mercado.',
        points: ['Fuentes de ingreso alineadas al nicho', 'Kwai y TikTok como oportunidades reales', 'Contenido como activo digital']
      }
    ]
  }
};

export default function CreatorInsights() {
  const { language } = useI18n();
  const { navigate } = useRoute();
  const copy = INSIGHTS_COPY[language] || INSIGHTS_COPY.en;

  const handleInternal = (to) => (event) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.button === 1) return;
    event.preventDefault();
    navigate(to);
  };

  return (
    <section className="creator-insights-section" data-reveal>
      <div className="container-wide">
        <header className="creator-insights-head">
          <span className="eyebrow">
            <span className="eyebrow-dot"></span>
            {copy.eyebrow}
          </span>
          <h2 className="heading-2">
            {copy.titleStart}<span className="gradient-text">{copy.titleHighlight}</span>
          </h2>
          <p className="body-large">{copy.subtitle}</p>
        </header>

        <div className="creator-insights-grid">
          {copy.items.map((item, index) => (
            <article key={item.title} className="creator-insight-card" style={{ '--stagger': index }}>
              <div className="creator-insight-image">
                <img src={item.image} alt={item.title} loading="lazy" />
                <span className="creator-insight-kicker">{item.kicker}</span>
              </div>

              <div className="creator-insight-content">
                <h3>{item.title}</h3>
                <p>{item.text}</p>

                <ul>
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>

                <a href={`/article/${item.slug}`} className="creator-insight-link">
                  {copy.readMore}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M7 17 17 7"></path>
                    <path d="M7 7h10v10"></path>
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="creator-insights-cta">
          <a
            href="/contract"
            className="btn btn--primary btn--lg"
            onClick={handleInternal('/contract')}
          >
            <span className="btn-label">{copy.contractCta}</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </a>

          <a
            href="/contact"
            className="btn btn--outline btn--lg"
            onClick={handleInternal('/contact')}
          >
            {copy.contactCta}
          </a>
        </div>
      </div>
    </section>
  );
}
