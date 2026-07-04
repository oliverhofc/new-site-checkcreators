import { useState } from 'react';
import { useI18n } from '../i18n.jsx';
import { routeUrl } from '../utils/paths.js';
import { useRoute } from '../hooks/RouterContext.jsx';

const CONTACT_COPY = {
  pt: {
    eyebrow: 'Contato',
    title: 'Dúvidas, sugestões ou agendamento',
    subtitle: 'Entre em contato conosco para tirar suas dúvidas ou deixar sua sugestão.',
    name: 'Seu nome completo',
    namePlaceholder: 'Digite seu nome aqui',
    email: 'Seu e-mail',
    emailPlaceholder: 'Digite seu e-mail aqui',
    whatsapp: 'WhatsApp',
    whatsappPlaceholder: 'Digite seu WhatsApp aqui',
    message: 'Sua mensagem',
    messagePlaceholder: 'Escreva sua mensagem aqui',
    button: 'Enviar mensagem',
    locationTitle: 'Localização',
    locationBody: 'Estamos localizados em um ambiente criativo, ideal para impulsionar sua presença digital e fortalecer sua marca nas plataformas online.',
    addressLabel: 'Endereço',
    address: 'Av. Paulista, 183, Sala 1105 — Paulista Corporate — Cerqueira César, São Paulo - SP, 01310-200',
    hoursLabel: 'Horário',
    hours: 'Segunda a sexta — 08h às 18h',
    mapLabel: 'Abrir no Maps',
    contractCta: 'Conheça nossos contratos',
    hiddenSubject: 'Nova mensagem pelo site Check Creators',
    sending: 'Enviando...',
    success: 'Mensagem enviada com sucesso. Em breve entraremos em contato.',
    error: 'Não foi possível enviar agora. Tente novamente em alguns instantes.'
  },
  en: {
    eyebrow: 'Contact',
    title: 'Questions, suggestions or scheduling',
    subtitle: 'Contact us to ask questions, request information or send your message.',
    name: 'Full name',
    namePlaceholder: 'Type your name here',
    email: 'Email',
    emailPlaceholder: 'Type your email here',
    whatsapp: 'WhatsApp',
    whatsappPlaceholder: 'Type your WhatsApp here',
    message: 'Message',
    messagePlaceholder: 'Write your message here',
    button: 'Send message',
    locationTitle: 'Location',
    locationBody: 'We are located in a creative environment designed to support digital presence, creators, streamers and brands.',
    addressLabel: 'Address',
    address: 'Av. Paulista, 183, Room 1105 — Paulista Corporate — Cerqueira César, São Paulo - SP, 01310-200, Brazil',
    hoursLabel: 'Business hours',
    hours: 'Monday to Friday — 8 AM to 6 PM',
    mapLabel: 'Open in Maps',
    contractCta: 'View our contracts',
    hiddenSubject: 'New message from Check Creators website',
    sending: 'Sending...',
    success: 'Message sent successfully. We will contact you soon.',
    error: 'Could not send right now. Please try again in a moment.'
  },
  es: {
    eyebrow: 'Contacto',
    title: 'Dudas, sugerencias o agendamiento',
    subtitle: 'Contáctanos para resolver dudas, solicitar información o enviar tu mensaje.',
    name: 'Nombre completo',
    namePlaceholder: 'Escribe tu nombre aquí',
    email: 'Correo electrónico',
    emailPlaceholder: 'Escribe tu correo aquí',
    whatsapp: 'WhatsApp',
    whatsappPlaceholder: 'Escribe tu WhatsApp aquí',
    message: 'Mensaje',
    messagePlaceholder: 'Escribe tu mensaje aquí',
    button: 'Enviar mensaje',
    locationTitle: 'Ubicación',
    locationBody: 'Estamos ubicados en un ambiente creativo, ideal para impulsar presencia digital, creators, streamers y marcas.',
    addressLabel: 'Dirección',
    address: 'Av. Paulista, 183, Sala 1105 — Paulista Corporate — Cerqueira César, São Paulo - SP, 01310-200, Brasil',
    hoursLabel: 'Horario',
    hours: 'Lunes a viernes — 08h a 18h',
    mapLabel: 'Abrir en Maps',
    contractCta: 'Ver contratos',
    hiddenSubject: 'Nuevo mensaje desde el sitio Check Creators',
    sending: 'Enviando...',
    success: 'Mensaje enviado correctamente. Pronto entraremos en contacto.',
    error: 'No fue posible enviar ahora. Inténtalo de nuevo en unos instantes.'
  }
};

export default function ContactPage() {
  const { language } = useI18n();
  const { navigate } = useRoute();
  const copy = CONTACT_COPY[language] || CONTACT_COPY.en;
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    if (formData.get('_honey')) return;

    setStatus('sending');

    try {
      const response = await fetch('https://formsubmit.co/ajax/oliverh@check2.com.br', {
        method: 'POST',
        headers: {
          Accept: 'application/json'
        },
        body: formData
      });

      if (!response.ok) {
        throw new Error('FormSubmit request failed');
      }

      form.reset();
      setStatus('success');
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section className="contact-page" data-reveal>
      <div className="contact-hero">
        <div className="contact-hero-bg" aria-hidden="true">
          <span className="contact-orb contact-orb--one"></span>
          <span className="contact-orb contact-orb--two"></span>
          <span className="contact-grid-light"></span>
        </div>

        <div className="container-wide contact-hero-inner">
          <header className="contact-heading">
            <span className="eyebrow contact-eyebrow">
              <span className="eyebrow-dot"></span>
              {copy.eyebrow}
            </span>
            <h1>{copy.title}</h1>
            <p>{copy.subtitle}</p>
          </header>

          <form
            className="contact-form-card"
            action="https://formsubmit.co/ajax/oliverh@check2.com.br"
            method="POST"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="_subject" value={copy.hiddenSubject} />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://checkcreators.com.br/" />
            <input type="text" name="_honey" className="contact-honey" tabIndex="-1" autoComplete="off" />

            <label>
              <span>{copy.name}<sup>*</sup></span>
              <input name="Nome completo" type="text" placeholder={copy.namePlaceholder} required />
            </label>

            <label>
              <span>{copy.email}<sup>*</sup></span>
              <input name="E-mail" type="email" placeholder={copy.emailPlaceholder} required />
            </label>

            <label>
              <span>{copy.whatsapp}<sup>*</sup></span>
              <input name="WhatsApp" type="tel" placeholder={copy.whatsappPlaceholder} required />
            </label>

            <label>
              <span>{copy.message}<sup>*</sup></span>
              <textarea name="Mensagem" placeholder={copy.messagePlaceholder} rows="5" required></textarea>
            </label>

            <button className="contact-submit" type="submit" disabled={status === 'sending'}>
              <span>{status === 'sending' ? copy.sending : copy.button}</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </button>

            {status === 'success' && (
              <p className="contact-status contact-status--success" role="status">{copy.success}</p>
            )}
            {status === 'error' && (
              <p className="contact-status contact-status--error" role="alert">{copy.error}</p>
            )}
          </form>
        </div>
      </div>

      <div className="contact-location-section">
        <div className="container-wide contact-location-grid">
          <article className="contact-location-copy">
            <span className="eyebrow contact-eyebrow">
              <span className="eyebrow-dot"></span>
              Check Creators
            </span>
            <h2>{copy.locationTitle}</h2>
            <p>{copy.locationBody}</p>

            <div className="contact-info-list">
              <div>
                <strong>{copy.addressLabel}</strong>
                <span>{copy.address}</span>
              </div>
              <div>
                <strong>{copy.hoursLabel}</strong>
                <span>{copy.hours}</span>
              </div>
            </div>
          </article>

          <div className="contact-map-card">
            <iframe
              title="Check Creators - São Paulo"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=Av.%20Paulista%2C%20183%2C%20S%C3%A3o%20Paulo%2C%20SP&output=embed"
            ></iframe>
            <a
              className="contact-map-link"
              href="https://www.google.com/maps/search/?api=1&query=Av.%20Paulista%2C%20183%2C%20S%C3%A3o%20Paulo%2C%20SP"
              target="_blank"
              rel="noreferrer"
            >
              {copy.mapLabel}
            </a>
          </div>
        </div>

        <div className="contact-contract-cta">
          <a
            href={routeUrl('/contract')}
            className="btn btn--primary btn--lg"
            onClick={(event) => {
              event.preventDefault();
              navigate('/contract');
            }}
          >
            <span>{copy.contractCta}</span>
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
