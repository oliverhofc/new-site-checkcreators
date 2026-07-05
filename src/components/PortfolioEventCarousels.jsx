import { useEffect, useRef } from 'react';
import { useI18n } from '../i18n.jsx';
import { assetUrl } from '../utils/paths.js';

const EVENT_IMAGES = [
  {
    src: '/portfolio-events/premio-kwai-2025-01.webp',
    alt: 'Registro da Check Creators no Prêmio Kwai 2025',
    label: 'Prêmio Kwai 2025'
  },
  {
    src: '/portfolio-events/sbt-encontro-01.webp',
    alt: 'Registro da Check Creators em frente ao SBT',
    label: 'Relacionamento com mídia'
  },
  {
    src: '/portfolio-events/tv-studio-01.webp',
    alt: 'Participação da Check Creators no programa Casos de Família, apresentado por Christina Rocha, no SBT',
    label: 'Casos de Família — SBT'
  },
  {
    src: '/portfolio-events/premio-kwai-2025-02.webp',
    alt: 'Registro de bastidores do Prêmio Kwai 2025',
    label: 'Bastidores premium'
  },
  {
    src: '/portfolio-events/premio-kwai-2025-03.webp',
    alt: 'Registro de networking da Check Creators no Prêmio Kwai 2025',
    label: 'Networking estratégico'
  },
  {
    src: '/portfolio-events/premio-kwai-2025-04.webp',
    alt: 'Registro de premiação com representantes e creators',
    label: 'Conexões com creators'
  }
];

const BACKSTAGE_IMAGES = [
  {
    src: '/portfolio-events/premio-kwai-2025-05.webp',
    alt: 'Registro da Check Creators com apresentadora em evento',
    label: 'Eventos oficiais'
  },
  {
    src: '/portfolio-events/premio-kwai-2025-06.webp',
    alt: 'Registro da Check Creators em encontro com creator',
    label: 'Encontros especiais'
  },
  {
    src: '/portfolio-events/evento-premiacao-01.webp',
    alt: 'Registro da Check Creators em evento de premiação',
    label: 'Premiação e destaque'
  },
  {
    src: '/portfolio-events/evento-premiacao-02.webp',
    alt: 'Registro da Check Creators em celebração de evento',
    label: 'Experiências reais'
  },
  {
    src: '/portfolio-events/ativacao-kwai-01.webp',
    alt: 'Registro em ativação da marca Kwai',
    label: 'Ativação Kwai'
  },
  {
    src: '/portfolio-events/reuniao-estrategica-01.webp',
    alt: 'Participação da Check Creators no podcast osfellascast',
    label: 'Podcast osfellascast'
  }
];

const CAROUSEL_COPY = {
  pt: {
    eyebrow: 'Eventos e bastidores',
    title: 'Presença real em momentos que fortalecem a marca',
    subtitle: 'Registros em alta qualidade da Check Creators em eventos, premiações, ativações, encontros com creators e conexões estratégicas com o mercado digital.',
    rows: ['Kwai, mídia e premiações', 'Bastidores, ativações e conexões'],
    previous: 'Imagem anterior',
    next: 'Próxima imagem'
  },
  en: {
    eyebrow: 'Events and backstage',
    title: 'Real presence in moments that strengthen the brand',
    subtitle: 'High-quality records of Check Creators at events, awards, activations, creator meetings and strategic connections across the digital market.',
    rows: ['Kwai, media and awards', 'Backstage, activations and connections'],
    previous: 'Previous image',
    next: 'Next image'
  },
  es: {
    eyebrow: 'Eventos y bastidores',
    title: 'Presencia real en momentos que fortalecen la marca',
    subtitle: 'Registros en alta calidad de Check Creators en eventos, premiaciones, activaciones, encuentros con creators y conexiones estratégicas con el mercado digital.',
    rows: ['Kwai, medios y premiaciones', 'Bastidores, activaciones y conexiones'],
    previous: 'Imagen anterior',
    next: 'Siguiente imagen'
  }
};

function normalizeLoopPosition(value, loopWidth) {
  if (!loopWidth || loopWidth <= 0) return 0;
  return ((value % loopWidth) + loopWidth) % loopWidth;
}

function useInfiniteLoopCarousel({ reverse = false, imageCount }) {
  const railRef = useRef(null);
  const trackRef = useRef(null);
  const loopWidthRef = useRef(0);
  const positionRef = useRef(0);
  const frameRef = useRef(0);
  const lastTimeRef = useRef(0);
  const pauseUntilRef = useRef(0);

  const applyPosition = () => {
    const track = trackRef.current;
    if (!track) return;
    track.style.transform = `translate3d(${-positionRef.current}px, 0, 0)`;
  };

  const measureLoop = () => {
    const track = trackRef.current;
    if (!track) return 0;

    const cards = track.querySelectorAll('.portfolio-event-card');
    const firstCard = cards[0];
    const firstClone = cards[imageCount];

    // A primeira cópia começa exatamente depois do primeiro bloco de imagens.
    // O fallback por scrollWidth/2 garante o loop mesmo se o navegador ainda
    // estiver finalizando o layout das imagens no primeiro carregamento.
    const measuredWidth = firstCard && firstClone
      ? firstClone.offsetLeft - firstCard.offsetLeft
      : track.scrollWidth / 2;

    const loopWidth = Math.max(1, Math.round(measuredWidth || track.scrollWidth / 2 || 1));
    loopWidthRef.current = loopWidth;
    positionRef.current = normalizeLoopPosition(positionRef.current, loopWidth);
    applyPosition();
    return loopWidth;
  };

  const moveByCard = (direction) => {
    const track = trackRef.current;
    const firstCard = track?.querySelector('.portfolio-event-card');
    if (!track || !firstCard) return;

    const styles = window.getComputedStyle(track);
    const gap = Number.parseFloat(styles.columnGap || styles.gap || '0') || 0;
    const step = firstCard.getBoundingClientRect().width + gap;
    const loopWidth = loopWidthRef.current || measureLoop();

    positionRef.current = normalizeLoopPosition(
      positionRef.current + direction * step,
      loopWidth
    );

    // Pequena pausa apenas após o clique para o usuário perceber a navegação manual.
    // Depois disso, o movimento automático volta sozinho em loop contínuo.
    pauseUntilRef.current = performance.now() + 650;
    applyPosition();
  };

  useEffect(() => {
    const rail = railRef.current;
    const track = trackRef.current;
    if (!rail || !track) return undefined;

    let resizeId;
    let bootMeasureOne;
    let bootMeasureTwo;
    let resizeObserver;
    const speed = 0.085; // px por milissegundo: movimento visível, suave e contínuo.
    const movementDirection = reverse ? -1 : 1;

    const scheduleMeasure = () => {
      window.clearTimeout(resizeId);
      resizeId = window.setTimeout(measureLoop, 80);
    };

    const animate = (timestamp) => {
      const lastTime = lastTimeRef.current || timestamp;
      const delta = Math.min(timestamp - lastTime, 64);
      lastTimeRef.current = timestamp;

      const loopWidth = loopWidthRef.current || measureLoop();

      if (loopWidth > 1 && timestamp > pauseUntilRef.current) {
        positionRef.current = normalizeLoopPosition(
          positionRef.current + movementDirection * speed * delta,
          loopWidth
        );
        applyPosition();
      }

      frameRef.current = window.requestAnimationFrame(animate);
    };

    measureLoop();
    bootMeasureOne = window.setTimeout(measureLoop, 250);
    bootMeasureTwo = window.setTimeout(measureLoop, 1000);

    const images = Array.from(track.querySelectorAll('img'));
    images.forEach((img) => {
      if (!img.complete) {
        img.addEventListener('load', scheduleMeasure, { once: true });
        img.addEventListener('error', scheduleMeasure, { once: true });
      }
    });

    if ('ResizeObserver' in window) {
      resizeObserver = new ResizeObserver(scheduleMeasure);
      resizeObserver.observe(rail);
      resizeObserver.observe(track);
    }

    window.addEventListener('resize', scheduleMeasure);
    frameRef.current = window.requestAnimationFrame(animate);

    return () => {
      window.cancelAnimationFrame(frameRef.current);
      window.clearTimeout(resizeId);
      window.clearTimeout(bootMeasureOne);
      window.clearTimeout(bootMeasureTwo);
      window.removeEventListener('resize', scheduleMeasure);
      images.forEach((img) => {
        img.removeEventListener('load', scheduleMeasure);
        img.removeEventListener('error', scheduleMeasure);
      });
      if (resizeObserver) resizeObserver.disconnect();
    };
  }, [imageCount, reverse]);

  return {
    railRef,
    trackRef,
    goPrevious: () => moveByCard(-1),
    goNext: () => moveByCard(1)
  };
}

function CarouselRow({ title, images, copy, reverse = false }) {
  const { railRef, trackRef, goPrevious, goNext } = useInfiniteLoopCarousel({
    reverse,
    imageCount: images.length
  });
  const loopImages = [...images, ...images];

  return (
    <div className="portfolio-event-carousel" aria-label={title}>
      <div className="portfolio-event-carousel-head">
        <h3>{title}</h3>
        <span>HD</span>
      </div>

      <div className="portfolio-event-rail" ref={railRef}>
        <button
          className="portfolio-event-nav portfolio-event-nav--prev"
          type="button"
          aria-label={copy.previous}
          onClick={goPrevious}
        >
          ‹
        </button>

        <div className="portfolio-event-list" ref={trackRef}>
          {loopImages.map((image, index) => {
            const isClone = index >= images.length;
            return (
              <figure
                className="portfolio-event-card"
                key={`${image.src}-${index}`}
                aria-hidden={isClone ? 'true' : undefined}
                data-clone={isClone ? 'true' : undefined}
              >
                <img
                  src={assetUrl(image.src)}
                  alt={isClone ? '' : image.alt}
                  loading={!isClone && index < 2 ? 'eager' : 'lazy'}
                  decoding="async"
                  fetchPriority={!isClone && index < 2 ? 'high' : 'auto'}
                />
                <figcaption>{image.label}</figcaption>
              </figure>
            );
          })}
        </div>

        <button
          className="portfolio-event-nav portfolio-event-nav--next"
          type="button"
          aria-label={copy.next}
          onClick={goNext}
        >
          ›
        </button>
      </div>
    </div>
  );
}

export default function PortfolioEventCarousels() {
  const { language } = useI18n();
  const copy = CAROUSEL_COPY[language] || CAROUSEL_COPY.en;

  return (
    <section className="portfolio-event-showcase" data-reveal>
      <div className="container-wide">
        <header className="portfolio-event-showcase-head">
          <span className="eyebrow">
            <span className="eyebrow-dot"></span>
            {copy.eyebrow}
          </span>
          <h2 className="heading-2">{copy.title}</h2>
          <p className="body-large">{copy.subtitle}</p>
        </header>

        <CarouselRow title={copy.rows[0]} images={EVENT_IMAGES} copy={copy} />
        <CarouselRow title={copy.rows[1]} images={BACKSTAGE_IMAGES} copy={copy} reverse />
      </div>
    </section>
  );
}
