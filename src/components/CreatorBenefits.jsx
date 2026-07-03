import { useI18n } from '../i18n.jsx';

const BENEFITS_COPY = {
  pt: {
    eyebrow: 'Vantagens Check Creators',
    titleStart: 'Benefícios reais para ',
    titleHighlight: 'creators e streamers',
    subtitle: 'Uma estrutura de suporte, aprendizado e crescimento para quem quer evoluir com mais direção, confiança e oportunidades dentro das plataformas digitais.',
    cta: 'Ver oportunidades',
    items: [
      {
        title: 'Atendimento dedicado',
        text: 'Cada creator e streamer recebe atenção personalizada, suporte ágil e acompanhamento constante para crescer com mais confiança e clareza.',
        metric: 'Cuidado'
      },
      {
        title: 'Estratégias personalizadas',
        text: 'Analisamos perfil, público, objetivos e plataforma para traçar um plano sob medida, focado em evolução autêntica e consistente.',
        metric: 'Estratégia'
      },
      {
        title: 'Suporte técnico',
        text: 'Uma equipe pronta para ajudar em dúvidas de configuração, performance, estabilidade de transmissão e qualidade do conteúdo.',
        metric: 'Suporte'
      },
      {
        title: 'Treinamentos',
        text: 'Acesso a conteúdos, mentorias e workshops pensados para desenvolver habilidades, melhorar rotina e acelerar a jornada como streamer.',
        metric: 'Aprendizado'
      },
      {
        title: 'E-books gratuitos',
        text: 'Materiais com dicas práticas, estratégias de crescimento e insights valiosos para estudar no próprio ritmo e evoluir com consistência.',
        metric: 'Conteúdo'
      },
      {
        title: 'Grupos de networking',
        text: 'Conexão com outros creators e streamers para compartilhar experiências, trocar ideias e abrir portas para novas oportunidades.',
        metric: 'Rede'
      },
      {
        title: 'Aulas de Inglês',
        text: 'Preparação para comunicação internacional, expansão de oportunidades e atuação em mercados como Estados Unidos e outras frentes globais.',
        metric: 'Idiomas'
      },
      {
        title: 'Oportunidades em plataformas',
        text: 'Frentes conectadas a Kwai, TikTok Live, TikTok Shop, Kwai Vídeo, Kwai Live e Kwai Cut, com expansão para novas categorias.',
        metric: 'Plataformas'
      }
    ]
  },
  en: {
    eyebrow: 'Check Creators advantages',
    titleStart: 'Real benefits for ',
    titleHighlight: 'creators and streamers',
    subtitle: 'A support, learning and growth structure for creators who want to evolve with more direction, confidence and opportunities across digital platforms.',
    cta: 'View opportunities',
    items: [
      {
        title: 'Dedicated support',
        text: 'Each creator and streamer receives personalized attention, agile support and constant follow-up to grow with more confidence and clarity.',
        metric: 'Care'
      },
      {
        title: 'Personalized strategies',
        text: 'We analyze profile, audience, goals and platform fit to design a tailored plan focused on authentic and consistent evolution.',
        metric: 'Strategy'
      },
      {
        title: 'Technical support',
        text: 'A team ready to help with setup, performance, stream stability and content-quality questions.',
        metric: 'Support'
      },
      {
        title: 'Training sessions',
        text: 'Access to content, mentoring and workshops designed to develop skills, improve routine and accelerate the streamer journey.',
        metric: 'Learning'
      },
      {
        title: 'Free e-books',
        text: 'Materials with practical tips, growth strategies and valuable insights to study at your own pace and evolve consistently.',
        metric: 'Content'
      },
      {
        title: 'Networking groups',
        text: 'Connection with other creators and streamers to share experiences, exchange ideas and open doors to new opportunities.',
        metric: 'Network'
      },
      {
        title: 'English classes',
        text: 'Preparation for international communication, opportunity expansion and growth in markets such as the United States and other global fronts.',
        metric: 'Languages'
      },
      {
        title: 'Platform opportunities',
        text: 'Fronts connected to Kwai, TikTok Live, TikTok Shop, Kwai Video, Kwai Live and Kwai Cut, with expansion to new categories.',
        metric: 'Platforms'
      }
    ]
  },
  es: {
    eyebrow: 'Ventajas Check Creators',
    titleStart: 'Beneficios reales para ',
    titleHighlight: 'creators y streamers',
    subtitle: 'Una estructura de soporte, aprendizaje y crecimiento para quienes quieren evolucionar con más dirección, confianza y oportunidades en plataformas digitales.',
    cta: 'Ver oportunidades',
    items: [
      {
        title: 'Atención dedicada',
        text: 'Cada creator y streamer recibe atención personalizada, soporte ágil y acompañamiento constante para crecer con más confianza y claridad.',
        metric: 'Cuidado'
      },
      {
        title: 'Estrategias personalizadas',
        text: 'Analizamos perfil, audiencia, objetivos y plataforma para diseñar un plan a medida, enfocado en evolución auténtica y consistente.',
        metric: 'Estrategia'
      },
      {
        title: 'Soporte técnico',
        text: 'Un equipo preparado para ayudar con configuración, performance, estabilidad de transmisión y calidad del contenido.',
        metric: 'Soporte'
      },
      {
        title: 'Entrenamientos',
        text: 'Acceso a contenidos, mentorías y workshops pensados para desarrollar habilidades, mejorar rutina y acelerar la ruta como streamer.',
        metric: 'Aprendizaje'
      },
      {
        title: 'E-books gratuitos',
        text: 'Materiales con consejos prácticos, estrategias de crecimiento e insights valiosos para estudiar a tu ritmo y evolucionar con consistencia.',
        metric: 'Contenido'
      },
      {
        title: 'Grupos de networking',
        text: 'Conexión con otros creators y streamers para compartir experiencias, intercambiar ideas y abrir puertas a nuevas oportunidades.',
        metric: 'Red'
      },
      {
        title: 'Clases de inglés',
        text: 'Preparación para comunicación internacional, expansión de oportunidades y actuación en mercados como Estados Unidos y otros frentes globales.',
        metric: 'Idiomas'
      },
      {
        title: 'Oportunidades en plataformas',
        text: 'Frentes conectados a Kwai, TikTok Live, TikTok Shop, Kwai Video, Kwai Live y Kwai Cut, con expansión a nuevas categorías.',
        metric: 'Plataformas'
      }
    ]
  }
};

const ICONS = ['✓', '◎', '⚙', '✦', '▣', '◇', 'EN', '↗'];

export default function CreatorBenefits() {
  const { language } = useI18n();
  const copy = BENEFITS_COPY[language] || BENEFITS_COPY.en;

  return (
    <section className="creator-benefits-section" data-reveal>
      <div className="container-wide">
        <header className="creator-benefits-head">
          <span className="eyebrow">
            <span className="eyebrow-dot"></span>
            {copy.eyebrow}
          </span>
          <h2 className="heading-2">
            {copy.titleStart}<span className="gradient-text">{copy.titleHighlight}</span>
          </h2>
          <p className="body-large">{copy.subtitle}</p>
        </header>

        <div className="creator-benefits-grid creator-benefits-grid--expanded">
          {copy.items.map((item, index) => (
            <article key={item.title} className="creator-benefit-card" style={{ '--stagger': index }}>
              <div className="creator-benefit-top">
                <span className="creator-benefit-icon">{ICONS[index]}</span>
                <span className="creator-benefit-metric">{item.metric}</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>

        <div className="creator-benefits-footer">
          <a href="/contract" className="btn btn--primary btn--lg">
            <span className="btn-label">{copy.cta}</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
