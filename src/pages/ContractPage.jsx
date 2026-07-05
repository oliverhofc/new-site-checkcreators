import { useI18n } from '../i18n.jsx';
import { assetUrl } from '../utils/paths.js';

const PLATFORM_ICONS = {
  video: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m10 9 5 3-5 3V9Z" />
    </svg>
  ),
  live: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4.93 4.93a10 10 0 0 0 0 14.14" />
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
      <path d="M8.46 8.46a5 5 0 0 0 0 7.08" />
      <path d="M15.54 8.46a5 5 0 0 1 0 7.08" />
      <circle cx="12" cy="12" r="1.5" />
    </svg>
  ),
  cut: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="6" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <path d="M20 4 8.12 15.88" />
      <path d="M14.47 14.48 20 20" />
      <path d="M8.12 8.12 12 12" />
    </svg>
  ),
  shop: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
      <path d="M3 6h18" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  ),
  user: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 21a8 8 0 1 0-16 0" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  ),
  clock: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  ),
  question: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 2.25-3 4" />
      <path d="M12 17h.01" />
    </svg>
  )
};

const SERVICE_PAGE_COPY = {
  pt: {
    eyebrow: 'Contratos',
    titleStart: 'Nossos ',
    titleHighlight: 'contratos',
    languageLabel: 'Brasil · contratos disponíveis',
    expansion: '',
    openNew: 'Abre em nova aba',
    contracts: [
      { title: 'Kwai Vídeo', href: 'https://checkcreators.com.br/kwai-video-check-diamond/', icon: 'video', visual: 'video', image: '/contracts/kwai-video.jpg' },
      { title: 'Kwai Live', href: 'https://checkcreators.com.br/kwai-live-check-diamond/', icon: 'live', visual: 'kwaiLive', image: '/contracts/kwai-live.jpg' },
      { title: 'Kwai Cut', href: 'https://checkcreators.com.br/cut-check-diamond/', icon: 'cut', visual: 'cut', image: '/contracts/kwai-cut.jpg' },
      { title: 'TikTok Live', href: 'https://checkcreators.com.br/live-check-diamond/', icon: 'live', visual: 'tiktokLive', image: '/contracts/tiktok-live.jpg' },
      { title: 'TikTok Shop', href: 'https://checkcreators.com.br/ttk-shop-check-diamond/', icon: 'shop', visual: 'shop', image: '/contracts/tiktok-shop.jpg' }
    ],
    faqTitle: 'FAQ',
    faqs: [
      { icon: 'question', question: 'O que é Kwai Vídeo?', answer: 'Kwai Vídeo é a criação de vídeos originais na plataforma Kwai.' },
      { icon: 'question', question: 'O que é Kwai Live?', answer: 'Transmissões ao vivo através da plataforma Kwai.' },
      { icon: 'question', question: 'O que é Kwai Cut?', answer: 'É a edição de vídeos diversos na plataforma Kwai.' },
      { icon: 'shop', question: 'Como funciona o TikTok Shop?', answer: 'Venda produtos da loja do TikTok através de vídeos e lives.' },
      { icon: 'user', question: 'Como posso ser contratado(a)?', answer: 'Escolha uma das opções acima e efetue seu cadastro.' },
      { icon: 'clock', question: 'Qual o tempo de espera?', answer: 'O prazo varia de 24 horas a 15 dias úteis, conforme a demanda.' }
    ]
  },
  en: {
    eyebrow: 'Contracts',
    titleStart: 'Creator ',
    titleHighlight: 'contracts',
    languageLabel: 'United States · active application',
    expansion: 'We are currently expanding to other platforms and categories for creators, streamers and digital talent.',
    openNew: 'Opens in a new tab',
    contracts: [
      { title: 'TikTok Live', href: 'https://checkcreators.com.br/ttk-live-us/', icon: 'live', visual: 'tiktokLive', image: '/contracts/tiktok-live.jpg' }
    ],
    faqTitle: 'FAQ',
    faqs: [
      { icon: 'question', question: 'What is TikTok Live?', answer: 'A livestreaming opportunity for creators and streamers in the United States.' },
      { icon: 'live', question: 'Who can apply?', answer: 'Creators and streamers interested in growing through live content.' },
      { icon: 'user', question: 'How do I apply?', answer: 'Click the TikTok Live option above and complete the official application form.' },
      { icon: 'clock', question: 'How long does it take?', answer: 'The review time may vary according to demand and operational availability.' },
      { icon: 'shop', question: 'Will new categories be added?', answer: 'Yes. Check Creators is expanding to other platforms and categories soon.' },
      { icon: 'video', question: 'Is this for creators and streamers?', answer: 'Yes. The US application is designed for digital talent, creators and streamers.' }
    ]
  },
  es: {
    eyebrow: 'Contratos',
    titleStart: 'Contratos ',
    titleHighlight: 'creator',
    languageLabel: 'Internacional · fase de expansión',
    expansion: 'Estamos en proceso de expansión hacia otras plataformas y categorías para creators, streamers y talentos digitales.',
    openNew: 'Abre en una nueva pestaña',
    contracts: [
      { title: 'TikTok Live', href: 'https://checkcreators.com.br/ttk-live-us/', icon: 'live', visual: 'tiktokLive', image: '/contracts/tiktok-live.jpg' }
    ],
    faqTitle: 'FAQ',
    faqs: [
      { icon: 'question', question: '¿Qué es TikTok Live?', answer: 'Una oportunidad de transmisiones en vivo para creators y streamers.' },
      { icon: 'live', question: '¿Quién puede aplicar?', answer: 'Creators y streamers interesados en crecer con contenido en vivo.' },
      { icon: 'user', question: '¿Cómo puedo aplicar?', answer: 'Haz clic en la opción TikTok Live y completa el formulario oficial.' },
      { icon: 'clock', question: '¿Cuánto tarda?', answer: 'El plazo puede variar según la demanda y disponibilidad operacional.' },
      { icon: 'shop', question: '¿Habrá nuevas categorías?', answer: 'Sí. Check Creators está expandiéndose a otras plataformas y categorías.' },
      { icon: 'video', question: '¿Es para creators y streamers?', answer: 'Sí. La aplicación internacional está pensada para talentos digitales.' }
    ]
  }
};

function ContractVisual({ type, icon, image, title }) {
  return (
    <span className={`contract-visual contract-visual--${type}`} aria-hidden="true">
      {image ? (
        <img className="contract-visual-image" src={assetUrl(image)} alt="" loading="eager" decoding="async" fetchPriority="high" />
      ) : (
        <>
          <span className="visual-orb visual-orb--one"></span>
          <span className="visual-orb visual-orb--two"></span>
          <span className="visual-frame">
            <span className="visual-bars"></span>
            <span className="visual-center-icon">{PLATFORM_ICONS[icon]}</span>
          </span>
          {(type === 'kwaiLive' || type === 'tiktokLive') && <span className="visual-live-badge">LIVE</span>}
        </>
      )}
      <span className="contract-visual-glow"></span>
    </span>
  );
}

function ContractCard({ contract, index, openNew }) {
  return (
    <a
      href={contract.href}
      target="_blank"
      rel="noreferrer"
      className="contract-tile"
      style={{ '--stagger': index }}
      aria-label={`${contract.title} — ${openNew}`}
    >
      <ContractVisual type={contract.visual} icon={contract.icon} image={contract.image} title={contract.title} />
      <span className="contract-tile-action">
        <span>{contract.title}</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="m9 18 6-6-6-6" />
        </svg>
      </span>
      <span className="sr-only">{openNew}</span>
    </a>
  );
}

function FaqItem({ item, index }) {
  return (
    <article className="faq-item" style={{ '--stagger': index }}>
      <span className="faq-icon">{PLATFORM_ICONS[item.icon] || PLATFORM_ICONS.question}</span>
      <div className="faq-content">
        <h3>{item.question}</h3>
        <p>{item.answer}</p>
      </div>
      <span className="faq-arrow" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m6 9 6 6 6-6" />
        </svg>
      </span>
    </article>
  );
}

export default function ContractPage() {
  const { language } = useI18n();
  const page = SERVICE_PAGE_COPY[language] || SERVICE_PAGE_COPY.en;

  return (
    <section className="contracts-showcase" data-reveal>
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-blob hero-blob--1"></div>
        <div className="hero-blob hero-blob--2"></div>
        <div className="hero-blob hero-blob--3"></div>
      </div>

      <div className="container-wide">
        <header className="contracts-showcase-head">
          <span className="eyebrow contracts-eyebrow">
            <span className="eyebrow-dot"></span>
            {page.eyebrow}
          </span>
          <h1 className="heading-1 contracts-showcase-title">
            {page.titleStart}
            <span className="gradient-text">{page.titleHighlight}</span>
          </h1>
          {page.expansion && <p className="contracts-expansion-text">{page.expansion}</p>}
        </header>

        <div className={`contracts-tiles contracts-tiles--${page.contracts.length}`}>
          {page.contracts.map((contract, index) => (
            <ContractCard key={contract.title} contract={contract} index={index} openNew={page.openNew} />
          ))}
        </div>

        <section className="faq-showcase" aria-labelledby="services-faq-title">
          <div className="faq-heading-wrap">
            <span className="faq-line" aria-hidden="true"></span>
            <h2 id="services-faq-title">{page.faqTitle}</h2>
            <span className="faq-line" aria-hidden="true"></span>
          </div>

          <div className="faq-grid">
            {page.faqs.map((item, index) => (
              <FaqItem key={item.question} item={item} index={index} />
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
