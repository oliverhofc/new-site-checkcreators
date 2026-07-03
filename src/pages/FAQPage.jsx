import { useI18n } from '../i18n.jsx';

const FAQ_COPY = {
  pt: {
    eyebrow: 'FAQ',
    titleStart: 'Perguntas ',
    titleHighlight: 'frequentes',
    subtitle: 'Respostas claras sobre contratos, plataformas, inscrição, atendimento e expansão internacional da Check Creators.',
    categories: ['Todos', 'Inscrição', 'Plataformas', 'Atendimento', 'Expansão'],
    items: [
      { category: 'Inscrição', q: 'Como posso me inscrever como creator ou streamer?', a: 'Acesse a aba Serviços, escolha a modalidade disponível no seu idioma e preencha o formulário oficial. A equipe analisa as informações e retorna pelo canal de contato informado.' },
      { category: 'Plataformas', q: 'Quais plataformas a Check Creators atende?', a: 'Atuamos com frentes relacionadas a Kwai, TikTok Live, TikTok Shop, Kwai Vídeo, Kwai Live e Kwai Cut, com expansão para novas plataformas conforme a operação avança.' },
      { category: 'Expansão', q: 'A Check Creators está expandindo para os Estados Unidos?', a: 'Sim. O site já possui estrutura em inglês e formulários internacionais, começando pelo TikTok Live US e avançando para novas categorias.' },
      { category: 'Inscrição', q: 'A inscrição garante contratação automática?', a: 'Não. O cadastro inicia a análise. A aprovação depende das informações enviadas, perfil, disponibilidade, demanda da plataforma e critérios operacionais.' },
      { category: 'Atendimento', q: 'Quanto tempo demora para receber retorno?', a: 'O prazo pode variar de 24 horas a 15 dias úteis, conforme volume de cadastros, demanda da área e etapa de análise.' },
      { category: 'Plataformas', q: 'Qual a diferença entre Kwai Vídeo, Kwai Live e Kwai Cut?', a: 'Kwai Vídeo é focado em vídeos originais, Kwai Live em transmissões ao vivo e Kwai Cut em edição de vídeos para a plataforma.' },
      { category: 'Plataformas', q: 'Como funciona o TikTok Shop?', a: 'TikTok Shop envolve venda de produtos através de conteúdo, vídeos e lives, seguindo critérios da plataforma e da operação comercial.' },
      { category: 'Atendimento', q: 'Como falo diretamente com a agência?', a: 'Use o botão “Fale com a agência” ou a aba Contato. O WhatsApp abre com a mensagem correta conforme o idioma selecionado.' }
    ]
  },
  en: {
    eyebrow: 'FAQ',
    titleStart: 'Frequently asked ',
    titleHighlight: 'questions',
    subtitle: 'Clear answers about applications, platforms, contracts, support and Check Creators’ international expansion.',
    categories: ['All', 'Application', 'Platforms', 'Support', 'Expansion'],
    items: [
      { category: 'Application', q: 'How can I apply as a creator or streamer?', a: 'Go to Services, choose the available opportunity for your language and complete the official form. The team reviews your information and contacts you through the channel provided.' },
      { category: 'Platforms', q: 'Which platforms does Check Creators work with?', a: 'We operate across Kwai, TikTok Live, TikTok Shop, Kwai Video, Kwai Live and Kwai Cut, with expansion to new platforms as the operation grows.' },
      { category: 'Expansion', q: 'Is Check Creators expanding to the United States?', a: 'Yes. The website is already structured in English with international forms, starting with TikTok Live US and expanding to new categories.' },
      { category: 'Application', q: 'Does applying guarantee approval?', a: 'No. The form starts the review process. Approval depends on the submitted information, profile, availability, platform demand and operational criteria.' },
      { category: 'Support', q: 'How long does it take to get a response?', a: 'The timeframe may vary from 24 hours to 15 business days, depending on application volume, demand and review stage.' },
      { category: 'Platforms', q: 'What is the difference between Kwai Video, Kwai Live and Kwai Cut?', a: 'Kwai Video focuses on original videos, Kwai Live on live streaming and Kwai Cut on video editing for the platform.' },
      { category: 'Platforms', q: 'How does TikTok Shop work?', a: 'TikTok Shop involves selling products through content, videos and live streams, following platform and commercial-operation criteria.' },
      { category: 'Support', q: 'How do I talk directly to the agency?', a: 'Use the “Talk to the Agency” button or the Contact page. WhatsApp opens with the correct message based on the selected language.' }
    ]
  },
  es: {
    eyebrow: 'FAQ',
    titleStart: 'Preguntas ',
    titleHighlight: 'frecuentes',
    subtitle: 'Respuestas claras sobre aplicaciones, plataformas, contratos, soporte y expansión internacional de Check Creators.',
    categories: ['Todos', 'Aplicación', 'Plataformas', 'Soporte', 'Expansión'],
    items: [
      { category: 'Aplicación', q: '¿Cómo puedo aplicar como creator o streamer?', a: 'Ve a Servicios, elige la oportunidad disponible para tu idioma y completa el formulario oficial. El equipo revisa tus datos y te contacta por el canal informado.' },
      { category: 'Plataformas', q: '¿Con qué plataformas trabaja Check Creators?', a: 'Trabajamos con Kwai, TikTok Live, TikTok Shop, Kwai Video, Kwai Live y Kwai Cut, con expansión a nuevas plataformas conforme crece la operación.' },
      { category: 'Expansión', q: '¿Check Creators se está expandiendo a Estados Unidos?', a: 'Sí. El sitio ya está estructurado en inglés con formularios internacionales, comenzando por TikTok Live US y avanzando hacia nuevas categorías.' },
      { category: 'Aplicación', q: '¿Aplicar garantiza aprobación?', a: 'No. El formulario inicia el proceso de análisis. La aprobación depende de los datos enviados, perfil, disponibilidad, demanda de la plataforma y criterios operativos.' },
      { category: 'Soporte', q: '¿Cuánto tarda la respuesta?', a: 'El plazo puede variar de 24 horas a 15 días hábiles, según el volumen de aplicaciones, demanda y etapa de revisión.' },
      { category: 'Plataformas', q: '¿Cuál es la diferencia entre Kwai Video, Kwai Live y Kwai Cut?', a: 'Kwai Video se enfoca en videos originales, Kwai Live en transmisiones en vivo y Kwai Cut en edición de videos para la plataforma.' },
      { category: 'Plataformas', q: '¿Cómo funciona TikTok Shop?', a: 'TikTok Shop implica vender productos mediante contenido, videos y lives, siguiendo criterios de la plataforma y de la operación comercial.' },
      { category: 'Soporte', q: '¿Cómo hablo directamente con la agencia?', a: 'Usa el botón “Hablar con la agencia” o la página Contacto. WhatsApp abre con el mensaje correcto según el idioma seleccionado.' }
    ]
  }
};

const ICONS = {
  'Inscrição': '✦', 'Application': '✦', 'Aplicación': '✦',
  'Plataformas': '▣', 'Platforms': '▣',
  'Atendimento': '◌', 'Support': '◌', 'Soporte': '◌',
  'Expansão': '↗', 'Expansion': '↗'
};

export default function FAQPage() {
  const { language } = useI18n();
  const copy = FAQ_COPY[language] || FAQ_COPY.en;

  return (
    <section className="faq-premium-page" data-reveal>
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-blob hero-blob--1"></div>
        <div className="hero-blob hero-blob--2"></div>
        <div className="hero-blob hero-blob--3"></div>
      </div>

      <div className="container-wide">
        <header className="faq-premium-hero">
          <span className="eyebrow">
            <span className="eyebrow-dot"></span>
            {copy.eyebrow}
          </span>
          <h1 className="heading-1">
            {copy.titleStart}<span className="gradient-text">{copy.titleHighlight}</span>
          </h1>
          <p className="body-large">{copy.subtitle}</p>

          <div className="faq-premium-chips" aria-hidden="true">
            {copy.categories.map((category) => (
              <span key={category}>{category}</span>
            ))}
          </div>
        </header>

        <div className="faq-premium-grid">
          {copy.items.map((item, index) => (
            <article key={item.q} className="faq-premium-card" style={{ '--stagger': index }}>
              <span className="faq-premium-icon">{ICONS[item.category] || '?'}</span>
              <div>
                <span className="faq-premium-category">{item.category}</span>
                <h2>{item.q}</h2>
                <p>{item.a}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
