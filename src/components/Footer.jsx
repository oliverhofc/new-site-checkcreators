import { useI18n } from '../i18n.jsx';
import { useRoute } from '../hooks/RouterContext.jsx';
import { getWhatsAppLink } from '../utils/whatsapp.js';

export default function Footer() {
  const { copy, language } = useI18n();
  const { navigate } = useRoute();
  const whatsappLink = getWhatsAppLink(language);

  const handleInternal = (to) => (event) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.button === 1) return;
    event.preventDefault();
    navigate(to);
  };

  return (
    <footer className="site-footer">
      <div className="container-wide">
        <div className="footer-grid">
          <div className="footer-about">
            <a href="/" onClick={handleInternal('/')} className="brand">
              <span className="brand-mark" aria-hidden="true">
                <span className="brand-mark-inner">C</span>
              </span>
              <span className="brand-text">Check <span className="gradient-text">Creators</span></span>
            </a>
            <p className="footer-about-text">{copy.footer.about}</p>

            <address className="footer-contact">
              <a href="mailto:contato@check2.com.br" className="footer-contact-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                contato@check2.com.br
              </a>

              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="footer-contact-item">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                +1 (555) 735-6496
              </a>

              <div className="footer-contact-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
                {copy.footer.location}
              </div>
            </address>

            <div className="footer-social">
              <a href="https://www.instagram.com/checkcreators/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="footer-social-link">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
              </a>
              <a href="https://www.linkedin.com/company/check-creators/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="footer-social-link">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="https://www.youtube.com/@checkcreators" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="footer-social-link">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15 5-3-5-3z"></path></svg>
              </a>
              <a href="https://www.tiktok.com/@checkdiamond7" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="footer-social-link">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 3v11.2a4.2 4.2 0 1 1-4.2-4.2"></path><path d="M14 3c.6 3.4 2.6 5.4 6 6"></path></svg>
              </a>
              <a href="https://k.kwai.com/u/@checkcreators/VQTWClze" target="_blank" rel="noopener noreferrer" aria-label="Kwai" className="footer-social-link">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="14" height="14" rx="4"></rect><path d="M8 9v6"></path><path d="m8 12 5-3"></path><path d="m8 12 5 3"></path><path d="m17 10 4-2v8l-4-2"></path></svg>
              </a>
            </div>
          </div>

          <nav className="footer-nav" aria-label={copy.footer.company}>
            <h4 className="footer-title">{copy.footer.company}</h4>
            <ul>
              <li><a href="/" onClick={handleInternal('/')}>{copy.footer.home}</a></li>
              <li><a href="/portfolio" onClick={handleInternal('/portfolio')}>{copy.footer.portfolio}</a></li>
              <li><a href="/services" onClick={handleInternal('/services')}>{copy.footer.services}</a></li>
              <li><a href="/contract" onClick={handleInternal('/contract')}>{copy.footer.contract}</a></li>
              <li><a href="/team" onClick={handleInternal('/team')}>{copy.footer.team}</a></li>
            </ul>
          </nav>

          <nav className="footer-nav" aria-label={copy.footer.resources}>
            <h4 className="footer-title">{copy.footer.resources}</h4>
            <ul>
              <li><a href="/contact" onClick={handleInternal('/contact')}>{copy.footer.contact}</a></li>
              <li><a href="/faq" onClick={handleInternal('/faq')}>{copy.footer.faq}</a></li>
            </ul>
          </nav>

          <nav className="footer-nav" aria-label={copy.footer.legal}>
            <h4 className="footer-title">{copy.footer.legal}</h4>
            <ul>
              <li><a href="/privacy-policy" onClick={handleInternal('/privacy-policy')}>{copy.footer.privacy}</a></li>
              <li><a href="/terms" onClick={handleInternal('/terms')}>{copy.footer.terms}</a></li>
            </ul>
          </nav>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Check Creators. {copy.footer.rights}</p>
          <p>{copy.footer.made} <span className="heart">♥</span> {copy.footer.in}</p>
        </div>
      </div>
    </footer>
  );
}
