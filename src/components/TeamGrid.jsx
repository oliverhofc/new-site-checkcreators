import { useI18n } from '../i18n.jsx';
import { getWhatsAppLink } from '../utils/whatsapp.js';
import { assetUrl } from '../utils/paths.js';

const MEMBER_META = [
  {
    photo: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=400,h=400,fit=crop/A0xV8NWrPvfJ4GW5/oliver-h-1x1-ObDL7V9fN8oOO2Qh.jpeg',
    phone: '(92) 9 9403-5342',
    whatsapp: '559294035342',
    email: 'oliverh@check2.com.br'
  },
  {
    photo: '/team/elizabeth.jpg',
    phone: '(13) 9 9631-5384',
    whatsapp: '5513996315384',
    email: 'financeiro@check2.com.br'
  },
  {
    photo: '/team/letycia.jpg',
    phone: '+55 13 99109-6973',
    whatsapp: '5513991096973',
    email: 'letyciasacramento@check2.com.br'
  },
  {
    photo: '/team/larissa-sacramento.jpg',
    phone: '(13) 97410-3280',
    whatsapp: '5513974103280',
    email: 'larissasacramentous@check2.com.br'
  },
  {
    photo: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=400,h=400,fit=crop/A0xV8NWrPvfJ4GW5/captura-de-tela-2025-10-16-123830-YyvDKRgbVaFor58B.png',
    phone: '(46) 9 9971-9882',
    whatsapp: '5546999719882',
    email: 'diamantes@check2.com.br'
  },
  {
    photo: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=400,h=400,fit=crop/A0xV8NWrPvfJ4GW5/cesar-f5gMeSw4an6vhmhb.png',
    phone: '(88) 9 9934-9761',
    whatsapp: '558899349761',
    email: 'gestordetrafego@check2.com.br'
  },
  {
    photo: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=400,h=400,fit=crop/A0xV8NWrPvfJ4GW5/captura-de-tela-2026-01-25-144041-VA0u8HXIHtyhERYT.png',
    phone: '(13) 9 8168-5176',
    whatsapp: '5513981685176',
    email: 'programador@check2.com.br'
  },
  {
    photo: '/team/lucas-barcia.jpg',
    phone: '+55 11 97130-7766',
    whatsapp: '5511971307766',
    whatsappUrl: 'https://wa.me/5511971307766?text=Ol%C3%A1!',
    email: 'lucasbarcia@check2.com.br'
  }
];

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

export default function TeamGrid() {
  const { copy, language } = useI18n();
  const members = copy.team.members.map((member, index) => ({ ...member, ...MEMBER_META[index] }));
  const teamWhatsAppLink = (number) => getWhatsAppLink(language, number);

  return (
    <section className="team-grid-section" data-reveal>
      <div className="container-wide">
        <header className="section-head">
          <span className="eyebrow">{copy.team.grid.eyebrow}</span>
          <h2 className="heading-2">{copy.team.grid.title}</h2>
          <p className="body-large">{copy.team.grid.body}</p>
        </header>

        <div className="team-grid">
          {members.map((m, i) => (
            <article key={`${m.name}-${i}`} className="team-card" style={{ '--stagger': i }}>
              <div className="team-card-head">
                <img src={assetUrl(m.photo)} alt={m.name} className="team-card-photo" loading={i < 4 ? 'eager' : 'lazy'} decoding="async" fetchPriority={i < 2 ? 'high' : 'auto'} />
                <div>
                  <h3 className="team-card-name">{m.name}</h3>
                  <p className="team-card-role">{m.role}</p>
                </div>
              </div>

              <ul className="team-card-bio">
                {m.bio.map((line) => <li key={line}>{line}</li>)}
              </ul>

              {(m.phone || m.email) && (
                <div className="team-card-contact">
                  {m.phone && m.whatsapp && (
                    <a href={m.whatsappUrl || teamWhatsAppLink(m.whatsapp)} target="_blank" rel="noopener noreferrer" className="team-card-link" aria-label={`${copy.team.grid.whatsappLabel} ${m.name}: ${m.phone}`}>
                      <WhatsAppIcon />
                      <span>{m.phone}</span>
                    </a>
                  )}
                  {m.email && (
                    <a href={`mailto:${m.email}`} className="team-card-link" aria-label={`${copy.team.grid.emailLabel} ${m.name}`}>
                      <MailIcon />
                      <span>{m.email}</span>
                    </a>
                  )}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
