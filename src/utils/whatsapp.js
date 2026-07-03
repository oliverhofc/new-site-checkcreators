const DEFAULT_WHATSAPP_NUMBER = '15557356496';

const WHATSAPP_MESSAGES = {
  pt: 'Oi!',
  en: 'Hello!',
  es: 'Ey!'
};

export function getWhatsAppLink(language = 'en', number = DEFAULT_WHATSAPP_NUMBER) {
  const message = WHATSAPP_MESSAGES[language] || WHATSAPP_MESSAGES.en;
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
