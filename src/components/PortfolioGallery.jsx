import { useI18n } from '../i18n.jsx';
import { assetUrl } from '../utils/paths.js';

const GALLERY_COPY = {
  pt: {
    eyebrow: 'Galeria',
    title: 'Registros reais da nossa atuação',
    subtitle: 'Eventos, treinamentos, encontros estratégicos e ativações que mostram a presença da Check Creators no mercado digital.',
    items: [
      { image: '/portfolio-real/kwai-event.avif', title: 'Evento Kwai', text: 'Presença em experiências oficiais e encontros com creators.' },
      { image: '/portfolio-real/meeting-and-training.avif', title: 'Treinamento e estratégia', text: 'Reuniões, treinamentos e alinhamentos para crescimento operacional.' },
      { image: '/portfolio-real/tiktok-event.avif', title: 'Presença em eventos', text: 'Relacionamento com plataformas e construção de oportunidades.' },
      { image: '/portfolio-real/tiktok-agency.avif', title: 'Check Creators no TikTok', text: 'Expansão de categorias e posicionamento em novas frentes digitais.' }
    ]
  },
  en: {
    eyebrow: 'Gallery',
    title: 'Real moments from our work',
    subtitle: 'Events, training sessions, strategic meetings and activations that show Check Creators’ presence in the digital market.',
    items: [
      { image: '/portfolio-real/kwai-event.avif', title: 'Kwai event', text: 'Presence in official experiences and creator meetings.' },
      { image: '/portfolio-real/meeting-and-training.avif', title: 'Training and strategy', text: 'Meetings, training sessions and alignments for operational growth.' },
      { image: '/portfolio-real/tiktok-event.avif', title: 'Event presence', text: 'Platform relationships and opportunity building.' },
      { image: '/portfolio-real/tiktok-agency.avif', title: 'Check Creators on TikTok', text: 'Category expansion and positioning in new digital fronts.' }
    ]
  },
  es: {
    eyebrow: 'Galería',
    title: 'Momentos reales de nuestra actuación',
    subtitle: 'Eventos, entrenamientos, reuniones estratégicas y activaciones que muestran la presencia de Check Creators en el mercado digital.',
    items: [
      { image: '/portfolio-real/kwai-event.avif', title: 'Evento Kwai', text: 'Presencia en experiencias oficiales y encuentros con creators.' },
      { image: '/portfolio-real/meeting-and-training.avif', title: 'Entrenamiento y estrategia', text: 'Reuniones, entrenamientos y alineamientos para crecimiento operacional.' },
      { image: '/portfolio-real/tiktok-event.avif', title: 'Presencia en eventos', text: 'Relación con plataformas y construcción de oportunidades.' },
      { image: '/portfolio-real/tiktok-agency.avif', title: 'Check Creators en TikTok', text: 'Expansión de categorías y posicionamiento en nuevos frentes digitales.' }
    ]
  }
};

export default function PortfolioGallery() {
  const { language } = useI18n();
  const copy = GALLERY_COPY[language] || GALLERY_COPY.en;

  return (
    <section className="portfolio-real-gallery" data-reveal>
      <div className="container-wide">
        <header className="portfolio-real-gallery-head">
          <span className="eyebrow">
            <span className="eyebrow-dot"></span>
            {copy.eyebrow}
          </span>
          <h2 className="heading-2">{copy.title}</h2>
          <p className="body-large">{copy.subtitle}</p>
        </header>

        <div className="portfolio-real-masonry portfolio-real-masonry--hq">
          {copy.items.map((item, index) => (
            <article key={item.title} className={`portfolio-real-card portfolio-real-card--${index + 1}`} style={{ '--stagger': index }}>
              <img src={assetUrl(item.image)} alt={item.title} loading="lazy" />
              <div className="portfolio-real-card-overlay">
                <span>{item.title}</span>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
