import { useEffect } from 'react';
import { useRoute } from '../hooks/RouterContext.jsx';
import { useI18n } from '../i18n.jsx';
import { assetUrl } from '../utils/paths.js';

const SITE_URL = 'https://check2.com.br';
const BRAND = 'Check Creators';
const DEFAULT_IMAGE = `${SITE_URL}/og-check-creators.png`;

const META = {
  pt: {
    '/': {
      title: 'Check Creators | Agência para Creators, Streamers, Kwai e TikTok',
      description: 'A Check Creators conecta creators e streamers a oportunidades em Kwai, TikTok Live, TikTok Shop, treinamentos, suporte, aulas de inglês e expansão internacional.',
      keywords: 'Check Creators, creators, streamers, Kwai, TikTok Live, TikTok Shop, Kwai Live, Kwai Cut, agência de creators'
    },
    '/portfolio': {
      title: 'Portfólio Check Creators | Parcerias com Kwai, TikTok e expansão global',
      description: 'Conheça a atuação da Check Creators, parcerias estratégicas, presença em plataformas como Kwai e TikTok e expansão para novas categorias e países.',
      keywords: 'portfólio Check Creators, Kwai, TikTok, creators, streamers, expansão internacional'
    },
    '/services': {
      title: 'Serviços Check Creators | Consultoria, Estratégia e Monetização',
      description: 'Conheça os serviços estratégicos da Check Creators para creators e streamers: consultoria criativa, crescimento real, posicionamento e monetização.',
      keywords: 'serviços Check Creators, consultoria criativa, estratégia de crescimento, monetização, creators, streamers'
    },
    '/contract': {
      title: 'Contratos Check Creators | Oportunidades em Kwai e TikTok',
      description: 'Acesse os contratos e formulários oficiais para Kwai Vídeo, Kwai Live, Kwai Cut, TikTok Live, TikTok Shop e expansão internacional.',
      keywords: 'contratos Check Creators, contrato creator, Kwai Vídeo, Kwai Live, Kwai Cut, TikTok Live, TikTok Shop'
    },
    '/team': {
      title: 'Equipe Check Creators | Gestão, Operação, Marketing e Tecnologia',
      description: 'Conheça a equipe da Check Creators responsável por operação, marketing digital, tecnologia, financeiro e suporte a creators e streamers.',
      keywords: 'equipe Check Creators, gestão de creators, marketing digital, operação, tecnologia'
    },
    '/contact': {
      title: 'Contato Check Creators | Fale com a agência',
      description: 'Entre em contato com a Check Creators para dúvidas, inscrições, parcerias, suporte e oportunidades para creators e streamers.',
      keywords: 'contato Check Creators, fale com agência, suporte creator, atendimento streamer'
    },
    '/faq': {
      title: 'FAQ Check Creators | Dúvidas sobre creators, streamers, Kwai e TikTok',
      description: 'Respostas sobre inscrição, plataformas atendidas, suporte, prazos, oportunidades em Kwai, TikTok e expansão internacional.',
      keywords: 'FAQ Check Creators, dúvidas creators, dúvidas streamers, Kwai, TikTok'
    },
    '/privacy-policy': {
      title: 'Política de Privacidade | Check Creators',
      description: 'Política de Privacidade da Check Creators com informações sobre dados, segurança, direitos e canais de contato.',
      keywords: 'política de privacidade Check Creators, privacidade, dados pessoais'
    },
    '/terms': {
      title: 'Termos e Condições | Check Creators',
      description: 'Termos e condições de uso do site e dos serviços digitais da Check Creators.',
      keywords: 'termos e condições Check Creators, termos de uso'
    },
    '/article/consultoria-criativa': {
      title: 'Consultoria Criativa para Creators | Check Creators',
      description: 'Entenda como consultoria criativa ajuda creators a definir nicho, posicionamento, presença digital, produtos, parcerias e monetização.',
      keywords: 'consultoria criativa, creators, posicionamento digital, presença digital, monetização'
    },
    '/article/estrategia-crescimento': {
      title: 'Estratégia de Crescimento para Creators | Check Creators',
      description: 'Planos de ação para creators e streamers crescerem com metas reais, produção organizada, autoridade e posicionamento de marca.',
      keywords: 'estratégia de crescimento, creators, streamers, produção de conteúdo, autoridade digital'
    },
    '/article/monetizacao': {
      title: 'Monetização em Redes Sociais | Check Creators',
      description: 'Como transformar audiência em comunidade, conteúdo em ativo digital e influência em oportunidades de receita em Kwai, TikTok e outras redes.',
      keywords: 'monetização, redes sociais, creators, streamers, Kwai, TikTok, receita digital'
    }
  },
  en: {
    '/': {
      title: 'Check Creators | Creator & Streamer Agency for Kwai and TikTok',
      description: 'Check Creators connects creators and streamers with Kwai, TikTok Live, TikTok Shop, training, support, English classes and international expansion.',
      keywords: 'Check Creators, creators, streamers, Kwai, TikTok Live, TikTok Shop, creator agency'
    },
    '/portfolio': {
      title: 'Check Creators Portfolio | Kwai, TikTok and Global Expansion',
      description: 'Explore Check Creators partnerships, platform presence with Kwai and TikTok, and expansion into new countries and categories.',
      keywords: 'Check Creators portfolio, Kwai, TikTok, creators, streamers, global expansion'
    },
    '/services': {
      title: 'Check Creators Services | Consulting, Growth Strategy and Monetization',
      description: 'Explore Check Creators strategic services for creators and streamers: creative consulting, real growth strategy, positioning and monetization.',
      keywords: 'Check Creators services, creative consulting, growth strategy, monetization, creators, streamers'
    },
    '/contract': {
      title: 'Check Creators Contracts | Kwai and TikTok Opportunities',
      description: 'Access official applications and contracts for Kwai Video, Kwai Live, Kwai Cut, TikTok Live, TikTok Shop and international expansion.',
      keywords: 'Check Creators contracts, creator contract, Kwai Video, Kwai Live, Kwai Cut, TikTok Live, TikTok Shop'
    },
    '/team': {
      title: 'Check Creators Team | Operations, Marketing, Finance and Technology',
      description: 'Meet the Check Creators team supporting creator and streamer growth across operations, marketing, finance and technology.',
      keywords: 'Check Creators team, creator management, digital marketing, operations'
    },
    '/contact': {
      title: 'Contact Check Creators | Talk to the Agency',
      description: 'Contact Check Creators for applications, partnerships, support and creator or streamer opportunities.',
      keywords: 'contact Check Creators, creator agency, streamer support'
    },
    '/faq': {
      title: 'Check Creators FAQ | Creators, Streamers, Kwai and TikTok',
      description: 'Answers about applications, platforms, support, timing, Kwai, TikTok and international expansion.',
      keywords: 'Check Creators FAQ, creators, streamers, Kwai, TikTok'
    },
    '/privacy-policy': {
      title: 'Privacy Policy | Check Creators',
      description: 'Check Creators Privacy Policy covering data processing, security, rights and contact channels.',
      keywords: 'Check Creators privacy policy, privacy, personal data'
    },
    '/terms': {
      title: 'Terms and Conditions | Check Creators',
      description: 'Terms and conditions for using the Check Creators website and digital services.',
      keywords: 'Check Creators terms, terms and conditions'
    },
    '/article/consultoria-criativa': {
      title: 'Creative Consulting for Creators | Check Creators',
      description: 'How creative consulting helps creators define niche, positioning, digital presence, products, partnerships and monetization.',
      keywords: 'creative consulting, creators, digital positioning, monetization'
    },
    '/article/estrategia-crescimento': {
      title: 'Growth Strategy for Creators | Check Creators',
      description: 'Action plans for creators and streamers to grow with realistic goals, organized production, authority and brand positioning.',
      keywords: 'growth strategy, creators, streamers, content production, digital authority'
    },
    '/article/monetizacao': {
      title: 'Social Media Monetization | Check Creators',
      description: 'How to turn audience into community, content into a digital asset and influence into revenue opportunities on Kwai, TikTok and more.',
      keywords: 'monetization, social media, creators, streamers, Kwai, TikTok'
    }
  },
  es: {
    '/': {
      title: 'Check Creators | Agencia para Creators, Streamers, Kwai y TikTok',
      description: 'Check Creators conecta creators y streamers con oportunidades en Kwai, TikTok Live, TikTok Shop, entrenamientos, soporte, clases de inglés y expansión internacional.',
      keywords: 'Check Creators, creators, streamers, Kwai, TikTok Live, TikTok Shop'
    },
    '/portfolio': {
      title: 'Portafolio Check Creators | Kwai, TikTok y expansión global',
      description: 'Conoce la actuación de Check Creators, alianzas estratégicas, presencia en Kwai y TikTok y expansión a nuevas categorías y países.',
      keywords: 'portafolio Check Creators, Kwai, TikTok, creators, streamers'
    },
    '/services': {
      title: 'Servicios Check Creators | Consultoría, Estrategia y Monetización',
      description: 'Conoce los servicios estratégicos de Check Creators para creators y streamers: consultoría creativa, crecimiento real, posicionamiento y monetización.',
      keywords: 'servicios Check Creators, consultoría creativa, estrategia de crecimiento, monetización, creators, streamers'
    },
    '/contract': {
      title: 'Contratos Check Creators | Oportunidades en Kwai y TikTok',
      description: 'Accede a contratos y formularios oficiales para Kwai Video, Kwai Live, Kwai Cut, TikTok Live, TikTok Shop y expansión internacional.',
      keywords: 'contratos Check Creators, contrato creator, Kwai Video, Kwai Live, Kwai Cut, TikTok Live, TikTok Shop'
    },
    '/team': {
      title: 'Equipo Check Creators | Gestión, Marketing, Finanzas y Tecnología',
      description: 'Conoce el equipo de Check Creators responsable por operación, marketing, tecnología, finanzas y soporte a creators y streamers.',
      keywords: 'equipo Check Creators, gestión de creators, marketing digital'
    },
    '/contact': {
      title: 'Contacto Check Creators | Habla con la agencia',
      description: 'Contacta a Check Creators para dudas, inscripciones, alianzas, soporte y oportunidades para creators y streamers.',
      keywords: 'contacto Check Creators, agencia de creators, soporte streamer'
    },
    '/faq': {
      title: 'FAQ Check Creators | Creators, Streamers, Kwai y TikTok',
      description: 'Respuestas sobre aplicación, plataformas, soporte, plazos, oportunidades en Kwai, TikTok y expansión internacional.',
      keywords: 'FAQ Check Creators, dudas creators, streamers, Kwai, TikTok'
    },
    '/privacy-policy': {
      title: 'Política de Privacidad | Check Creators',
      description: 'Política de Privacidad de Check Creators con información sobre datos, seguridad, derechos y contacto.',
      keywords: 'política de privacidad Check Creators, privacidad, datos personales'
    },
    '/terms': {
      title: 'Términos y Condiciones | Check Creators',
      description: 'Términos y condiciones de uso del sitio y servicios digitales de Check Creators.',
      keywords: 'términos y condiciones Check Creators, términos de uso'
    },
    '/article/consultoria-criativa': {
      title: 'Consultoría Creativa para Creators | Check Creators',
      description: 'Cómo la consultoría creativa ayuda a creators a definir nicho, posicionamiento, presencia digital, productos, alianzas y monetización.',
      keywords: 'consultoría creativa, creators, posicionamiento digital, monetización'
    },
    '/article/estrategia-crescimento': {
      title: 'Estrategia de Crecimiento para Creators | Check Creators',
      description: 'Planes de acción para creators y streamers crecer con metas reales, producción organizada, autoridad y posicionamiento de marca.',
      keywords: 'estrategia de crecimiento, creators, streamers, producción de contenido'
    },
    '/article/monetizacao': {
      title: 'Monetización en Redes Sociales | Check Creators',
      description: 'Cómo convertir audiencia en comunidad, contenido en activo digital e influencia en oportunidades de ingresos en Kwai, TikTok y más.',
      keywords: 'monetización, redes sociales, creators, streamers, Kwai, TikTok'
    }
  }
};

const SCHEMA_BY_PATH = {
  '/': 'Organization',
  '/contact': 'ContactPage',
  '/faq': 'FAQPage',
  '/services': 'Service',
  '/contract': 'Service',
  '/portfolio': 'CollectionPage',
  '/team': 'AboutPage',
  '/article/consultoria-criativa': 'Article',
  '/article/estrategia-crescimento': 'Article',
  '/article/monetizacao': 'Article'
};

function upsertMeta(selector, attrs) {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement('meta');
    document.head.appendChild(el);
  }
  Object.entries(attrs).forEach(([key, value]) => el.setAttribute(key, value));
}

function upsertLink(rel, href, extra = {}) {
  let el = document.head.querySelector(`link[rel="${rel}"]${extra.hreflang ? `[hreflang="${extra.hreflang}"]` : ''}`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    if (extra.hreflang) el.setAttribute('hreflang', extra.hreflang);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
  Object.entries(extra).forEach(([key, value]) => {
    if (key !== 'hreflang') el.setAttribute(key, value);
  });
}

function buildSchema(path, meta, language) {
  const url = `${SITE_URL}${path}`;
  const baseOrganization = {
    '@type': 'Organization',
    name: BRAND,
    url: SITE_URL,
    email: 'contato@check2.com.br',
    sameAs: [
      'https://www.instagram.com/checkcreators/',
      'https://www.linkedin.com/company/check-creators/',
      'https://www.youtube.com/@checkcreators',
      'https://www.tiktok.com/@checkdiamond7',
      'https://k.kwai.com/u/@checkcreators/VQTWClze'
    ],
    areaServed: ['Brazil', 'United States'],
    knowsAbout: ['Creators', 'Streamers', 'Kwai', 'TikTok Live', 'TikTok Shop', 'Creator Marketing', 'Digital Growth']
  };

  if (path === '/faq') {
    return {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: language,
      mainEntity: [
        {
          '@type': 'Question',
          name: language === 'pt' ? 'Como posso me inscrever como creator ou streamer?' : 'How can I apply as a creator or streamer?',
          acceptedAnswer: { '@type': 'Answer', text: language === 'pt' ? 'Acesse a aba Serviços, escolha a modalidade disponível e preencha o formulário oficial.' : 'Go to Services, choose the available opportunity and complete the official form.' }
        },
        {
          '@type': 'Question',
          name: language === 'pt' ? 'Quais plataformas a Check Creators atende?' : 'Which platforms does Check Creators work with?',
          acceptedAnswer: { '@type': 'Answer', text: 'Kwai, TikTok Live, TikTok Shop, Kwai Video, Kwai Live and Kwai Cut.' }
        }
      ]
    };
  }

  if (SCHEMA_BY_PATH[path] === 'Article') {
    return {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: meta.title,
      description: meta.description,
      image: DEFAULT_IMAGE,
      author: baseOrganization,
      publisher: baseOrganization,
      mainEntityOfPage: url,
      inLanguage: language
    };
  }

  if (path === '/services') {
    return {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Creator and Streamer Management',
      description: meta.description,
      provider: baseOrganization,
      serviceType: ['Creator Management', 'Streamer Support', 'Kwai Opportunities', 'TikTok Live', 'TikTok Shop'],
      areaServed: ['Brazil', 'United States']
    };
  }

  return {
    '@context': 'https://schema.org',
    '@type': SCHEMA_BY_PATH[path] || 'WebPage',
    name: meta.title,
    description: meta.description,
    url,
    inLanguage: language,
    isPartOf: {
      '@type': 'WebSite',
      name: BRAND,
      url: SITE_URL,
      potentialAction: {
        '@type': 'SearchAction',
        target: `${SITE_URL}/?s={search_term_string}`,
        'query-input': 'required name=search_term_string'
      }
    },
    publisher: baseOrganization
  };
}

export default function SEO() {
  const { path } = useRoute();
  const { language } = useI18n();

  useEffect(() => {
    const langMeta = META[language] || META.pt;
    const meta = langMeta[path] || langMeta['/'];
    const url = `${SITE_URL}${path}`;

    document.title = meta.title;

    upsertMeta('meta[name="description"]', { name: 'description', content: meta.description });
    upsertMeta('meta[name="keywords"]', { name: 'keywords', content: meta.keywords });
    upsertMeta('meta[name="robots"]', { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' });
    upsertMeta('meta[name="author"]', { name: 'author', content: 'Check Creators' });
    upsertMeta('meta[name="theme-color"]', { name: 'theme-color', content: '#07131f' });
    upsertMeta('meta[name="application-name"]', { name: 'application-name', content: BRAND });
    upsertMeta('meta[name="apple-mobile-web-app-title"]', { name: 'apple-mobile-web-app-title', content: BRAND });
    upsertMeta('meta[property="og:locale"]', { property: 'og:locale', content: language === 'pt' ? 'pt_BR' : language === 'es' ? 'es_US' : 'en_US' });
    upsertMeta('meta[property="og:title"]', { property: 'og:title', content: meta.title });
    upsertMeta('meta[property="og:description"]', { property: 'og:description', content: meta.description });
    upsertMeta('meta[property="og:type"]', { property: 'og:type', content: SCHEMA_BY_PATH[path] === 'Article' ? 'article' : 'website' });
    upsertMeta('meta[property="og:url"]', { property: 'og:url', content: url });
    upsertMeta('meta[property="og:image"]', { property: 'og:image', content: DEFAULT_IMAGE });
    upsertMeta('meta[property="og:site_name"]', { property: 'og:site_name', content: BRAND });
    upsertMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' });
    upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: meta.title });
    upsertMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: meta.description });
    upsertMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: DEFAULT_IMAGE });

    upsertLink('canonical', url);
    upsertLink('alternate', `${SITE_URL}${path}`, { hreflang: 'x-default' });
    upsertLink('alternate', `${SITE_URL}${path}`, { hreflang: 'pt-BR' });
    upsertLink('alternate', `${SITE_URL}${path}`, { hreflang: 'en-US' });
    upsertLink('alternate', `${SITE_URL}${path}`, { hreflang: 'es-US' });
    upsertLink('manifest', assetUrl('/site.webmanifest'));

    let schema = document.getElementById('structured-data');
    if (!schema) {
      schema = document.createElement('script');
      schema.id = 'structured-data';
      schema.type = 'application/ld+json';
      document.head.appendChild(schema);
    }
    schema.textContent = JSON.stringify(buildSchema(path, meta, language));
  }, [path, language]);

  return null;
}
