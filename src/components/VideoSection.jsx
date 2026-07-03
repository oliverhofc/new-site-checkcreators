import { useI18n } from '../i18n.jsx';

export default function VideoSection() {
  const { copy } = useI18n();

  return (
    <section className="video-section" data-reveal>
      <div className="container-wide">
        <div className="video-wrapper">
          <div className="video-glow" aria-hidden="true"></div>

          <div className="video-frame">
            <div className="video-frame-inner">
              <div className="video-header">
                <div className="video-header-text">
                  <span className="eyebrow eyebrow--sm">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="6 3 20 12 6 21 6 3"></polygon></svg>
                    {copy.video.eyebrow}
                  </span>
                  <p className="video-desc">{copy.video.desc}</p>
                </div>
                <div className="video-tags">
                  {copy.video.tags.map((tag) => <span key={tag} className="tag">{tag}</span>)}
                </div>
              </div>

              <div className="video-player">
                <iframe
                  src="https://www.youtube.com/embed/c5093KnwHb8?rel=0&modestbranding=1&playsinline=1"
                  title={copy.video.title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
