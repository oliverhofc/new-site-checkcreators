import { useEffect, useMemo, useState } from 'react';
import { useI18n } from '../i18n.jsx';
import { assetUrl } from '../utils/paths.js';

const AVATARS = [
  '/testimonials/karina-brito.webp',
  '/testimonials/nilton-teclas.webp',
  '/testimonials/andrezza-salvador.webp',
  '/testimonials/marcia-nara.webp'
];

function Star() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
    </svg>
  );
}

export default function Testimonials() {
  const { copy, language } = useI18n();
  const [index, setIndex] = useState(0);
  const testimonialAvatars = useMemo(() => AVATARS.map((avatar) => assetUrl(avatar)), []);
  const testimonials = copy.testimonials.items.map((item, i) => ({ ...item, avatar: testimonialAvatars[i] }));
  const total = testimonials.length;
  const current = testimonials[index];

  useEffect(() => {
    setIndex(0);
  }, [language]);

  useEffect(() => {
    testimonialAvatars.forEach((src) => {
      const image = new Image();
      image.decoding = 'async';
      image.src = src;
    });
  }, [testimonialAvatars]);

  const go = (i) => setIndex((i + total) % total);
  const prev = () => go(index - 1);
  const next = () => go(index + 1);

  return (
    <section className="testimonials-section" data-reveal>
      <div className="container-wide">
        <header className="section-head">
          <span className="eyebrow">{copy.testimonials.eyebrow}</span>
          <h2 className="heading-2">{copy.testimonials.title}</h2>
          <p className="body-large">{copy.testimonials.body}</p>
        </header>

        <figure className="testimonial glass-card">
          <div className="testimonial-preload-images" aria-hidden="true">
            {testimonialAvatars.map((avatar) => (
              <img key={avatar} src={avatar} alt="" loading="eager" decoding="async" />
            ))}
          </div>

          <svg className="testimonial-quote-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
            <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
          </svg>

          <div className="testimonial-body" key={`${language}-${index}`}>
            <div className="testimonial-stars" aria-label={copy.testimonials.rating}>
              <Star /><Star /><Star /><Star /><Star />
            </div>

            <blockquote className="testimonial-quote">
              <span className="testimonial-mark">&ldquo;</span>
              {current.quote}
              <span className="testimonial-mark">&rdquo;</span>
            </blockquote>

            <figcaption className="testimonial-author">
              {current.profileUrl ? (
                <a
                  href={current.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="testimonial-avatar-ring testimonial-avatar-link"
                  aria-label={`Abrir perfil de ${current.name}`}
                >
                  <img src={current.avatar} alt={current.name} className="testimonial-avatar" loading="eager" decoding="async" fetchPriority="high" />
                </a>
              ) : (
                <span className="testimonial-avatar-ring">
                  <img src={current.avatar} alt={current.name} className="testimonial-avatar" loading="eager" decoding="async" fetchPriority="high" />
                </span>
              )}
              <div>
                <div className="testimonial-name">{current.name}</div>
                <div className="testimonial-role">
                  {current.role}
                  {current.handle && current.profileUrl && (
                    <>
                      {' • '}
                      <a
                        href={current.profileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="testimonial-handle-link"
                      >
                        {current.handle}
                      </a>
                    </>
                  )}
                </div>
              </div>
            </figcaption>
          </div>

          <div className="testimonial-nav">
            <button className="icon-btn" aria-label={copy.testimonials.previous} onClick={prev}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"></path></svg>
            </button>
            <div className="testimonial-dots" role="tablist">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`dot-btn${i === index ? ' is-active' : ''}`}
                  aria-label={`${copy.testimonials.item} ${i + 1}`}
                  aria-selected={i === index}
                  onClick={() => go(i)}
                />
              ))}
            </div>
            <button className="icon-btn" aria-label={copy.testimonials.next} onClick={next}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"></path></svg>
            </button>
          </div>
        </figure>
      </div>
    </section>
  );
}
