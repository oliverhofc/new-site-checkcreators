import { useI18n } from '../i18n.jsx';
import { assetUrl } from '../utils/paths.js';

const LEADER_PHOTO = '/team/julinho-correa.jpg';

const leaderSocials = [
  {
    key: 'linkedin',
    href: 'https://www.linkedin.com/in/julinho-correa-94810633b',
    label: 'LinkedIn de Julinho Corrêa',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect width="4" height="12" x="2" y="9"></rect>
        <circle cx="4" cy="4" r="2"></circle>
      </svg>
    )
  },
  {
    key: 'kwai',
    href: 'https://k.kwai.com/u/@Casalcheck2/uCzC0b5D',
    label: 'Kwai de Julinho Corrêa',
    icon: <span className="team-leader-social-letter" aria-hidden="true">K</span>
  },
  {
    key: 'instagram',
    href: 'https://www.instagram.com/casalcheck2/',
    label: 'Instagram de Julinho Corrêa',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
      </svg>
    )
  },
  {
    key: 'tiktok',
    href: 'https://www.tiktok.com/@casalcheck2',
    label: 'TikTok de Julinho Corrêa',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14 3v11.2a4.2 4.2 0 1 1-4.2-4.2"></path>
        <path d="M14 5.5c1.2 2.7 3.1 4.1 6 4.3"></path>
      </svg>
    )
  },
  {
    key: 'facebook',
    href: 'https://www.facebook.com/casalcheck2',
    label: 'Facebook de Julinho Corrêa',
    icon: <span className="team-leader-social-letter" aria-hidden="true">f</span>
  },
  {
    key: 'threads',
    href: 'https://www.threads.com/@casalcheck2',
    label: 'Threads de Julinho Corrêa',
    icon: <span className="team-leader-social-letter" aria-hidden="true">@</span>
  },
  {
    key: 'youtube',
    href: 'https://www.youtube.com/@casalcheck2',
    label: 'YouTube de Julinho Corrêa',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="5" width="20" height="14" rx="4"></rect>
        <path d="m10 9 5 3-5 3V9z"></path>
      </svg>
    )
  }
];

export default function TeamLeader() {
  const { copy } = useI18n();
  const leader = copy.team.leader;

  return (
    <section className="team-leader-section" data-reveal>
      <div className="container-wide">
        <div className="team-leader">
          <div className="team-leader-photo">
            <span className="team-leader-ring" aria-hidden="true"></span>
            <img src={assetUrl(LEADER_PHOTO)} alt={leader.alt} loading="lazy" />
            <span className="team-leader-star" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
              </svg>
            </span>
          </div>

          <div className="team-leader-content">
            <span className="team-leader-label">{leader.label}</span>
            <h2 className="heading-2 team-leader-name">{leader.name}</h2>

            <p className="team-leader-bio">
              {leader.bioStart}<em>&ldquo;{leader.bioEm}&rdquo;</em>{leader.bioEnd}
            </p>

            <div className="team-leader-tags">
              {leader.tags.map((tag) => <span key={tag} className="tag">{tag}</span>)}
            </div>

            <div className="team-leader-socials">
              {leaderSocials.map((social) => (
                <a
                  key={social.key}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  title={social.label}
                  className="team-leader-social"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
