import { PRIVACY_POLICY_TEXT, TERMS_TEXT } from '../data/legalContent.js';
import { useI18n } from '../i18n.jsx';

const LEGAL_COPY = {
  en: {
    privacyKicker: 'Legal',
    privacyTitle: 'Privacy Policy',
    privacySubtitle: 'How Check Creators handles personal data, security, rights and contact channels.',
    termsKicker: 'Legal',
    termsTitle: 'Terms and Conditions',
    termsSubtitle: 'Rules and conditions for using the Check Creators website and digital services.',
    updated: 'Official website document'
  },
  pt: {
    privacyKicker: 'Legal',
    privacyTitle: 'Política de Privacidade',
    privacySubtitle: 'Como a Check Creators trata dados pessoais, segurança, direitos e canais de contato.',
    termsKicker: 'Legal',
    termsTitle: 'Termos e Condições',
    termsSubtitle: 'Regras e condições de uso do site e dos serviços digitais da Check Creators.',
    updated: 'Documento oficial do site'
  },
  es: {
    privacyKicker: 'Legal',
    privacyTitle: 'Política de Privacidad',
    privacySubtitle: 'Cómo Check Creators maneja datos personales, seguridad, derechos y canales de contacto.',
    termsKicker: 'Legal',
    termsTitle: 'Términos y Condiciones',
    termsSubtitle: 'Reglas y condiciones para usar el sitio y los servicios digitales de Check Creators.',
    updated: 'Documento oficial del sitio'
  }
};

function parseLegalText(text) {
  const lines = text.split(/\n+/).map((line) => line.trim()).filter(Boolean);
  const [, ...body] = lines;
  return body.map((line, index) => {
    const isSection = line.endsWith(':') || /^[A-Z][A-Za-z\s]+:$/.test(line);
    return { id: `${index}-${line.slice(0, 18)}`, text: line, isSection };
  });
}

export default function LegalPage({ type }) {
  const { language } = useI18n();
  const copy = LEGAL_COPY[language] || LEGAL_COPY.en;
  const isPrivacy = type === 'privacy';
  const text = isPrivacy ? PRIVACY_POLICY_TEXT : TERMS_TEXT;
  const rows = parseLegalText(text);

  return (
    <section className="legal-page" data-reveal>
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-blob hero-blob--1"></div>
        <div className="hero-blob hero-blob--2"></div>
        <div className="hero-blob hero-blob--3"></div>
      </div>

      <div className="container-narrow">
        <header className="legal-hero">
          <span className="eyebrow">
            <span className="eyebrow-dot"></span>
            {isPrivacy ? copy.privacyKicker : copy.termsKicker}
          </span>
          <h1 className="heading-1">
            {isPrivacy ? copy.privacyTitle : copy.termsTitle}
          </h1>
          <p className="body-large">{isPrivacy ? copy.privacySubtitle : copy.termsSubtitle}</p>
          <span className="legal-pill">{copy.updated}</span>
        </header>

        <article className="legal-card">
          {rows.map((row) => row.isSection ? (
            <h2 key={row.id}>{row.text.replace(/:$/, '')}</h2>
          ) : (
            <p key={row.id}>{row.text}</p>
          ))}
        </article>
      </div>
    </section>
  );
}
