import { createContext, useContext, useEffect, useMemo, useState } from 'react';

export const LANGUAGES = [
  { code: 'en', label: 'English', short: 'EN', htmlLang: 'en-US' },
  { code: 'pt', label: 'Português', short: 'PT', htmlLang: 'pt-BR' },
  { code: 'es', label: 'Español', short: 'ES', htmlLang: 'es-US' }
];

export const DEFAULT_LANGUAGE = 'pt';

const shared = {
  brand: 'Check Creators',
  platforms: ['Kwai Video', 'Kwai Live', 'Kwai Live Shop', 'Kwai Cut', 'TikTok Shop', 'TikTok Live']
};

export const translations = {
  en: {
    meta: { languageName: 'English', languageLabel: 'Language' },
    nav: {
      home: 'Home', portfolio: 'Portfolio', services: 'Services', team: 'Team', contact: 'Contact',
      contract: 'Contracts', agency: 'Talk to the Agency'
    },
    routes: {
      services: 'Services', contact: 'Contact', contract: 'Contracts', notFound: 'Page not found'
    },
    hero: {
      eyebrow: 'Creator Marketing & Platform Expansion Agency',
      before: 'We connect ', highlight: 'creators and streamers', serif: ' with global platforms',
      body: 'Check Creators operates with strategic fronts connected to Kwai and TikTok, while expanding opportunities for creators and streamers to new platforms and countries, including the United States.',
      primary: 'Talk to the Agency', secondary: 'View Partnerships'
    },
    stats: [
      { value: '20,000+', label: 'Creators managed' },
      { value: '2+', label: 'Core platform partners' },
      { value: '3', label: 'Active languages' },
      { value: 'US', label: 'International expansion' }
    ],
    marquee: {
      caption: 'Platforms where our creators and streamers perform',
      platforms: shared.platforms
    },
    video: {
      eyebrow: 'On video',
      desc: 'A sample of the creative presence Check Creators builds for creators, streamers and brands.',
      tags: ['Creativity', 'Digital presence', 'Visual impact'],
      title: 'Check Creators institutional video'
    },
    services: {
      eyebrow: 'What we do',
      title: 'Platform opportunities for creators and streamers',
      body: 'From Kwai Video and Kwai Live to TikTok Live and TikTok Shop, we structure application flows, management and growth opportunities by language and market.',
      button: 'View services',
      items: [
        { title: 'Kwai & TikTok Operations', text: 'Strategic fronts connected to Kwai, TikTok Live, TikTok Shop, Kwai Video, Kwai Live and Kwai Cut.' },
        { title: 'Creator & Streamer Applications', text: 'Clear registration flows by language, country and platform category.' },
        { title: 'International Expansion', text: 'Expansion to the United States and preparation for new platforms and categories.' },
        { title: 'Performance & Support', text: 'Operational follow-up, data, process organization and result-focused support.' }
      ]
    },
    process: {
      eyebrow: 'Creator journey',
      title: 'From profile review to creator growth',
      body: 'A clear path for creators and streamers: we review the profile, connect the right opportunity and support the next steps with platform-focused direction.',
      steps: [
        { number: '01', title: 'Profile review', text: 'We analyze niche, consistency, language, platform fit and growth potential for each creator or streamer.' },
        { number: '02', title: 'Opportunity match', text: 'We direct the creator to the best front: Kwai Video, Kwai Live, Kwai Cut, TikTok Live, TikTok Shop or international expansion.' },
        { number: '03', title: 'Support and evolution', text: 'We provide guidance, follow-up and strategic adjustments so the creator can improve performance and professionalize the journey.' }
      ]
    },
    cases: {
      eyebrow: 'Featured cases',
      title: 'Results that speak for themselves',
      body: 'Explore projects that made a difference for our clients.',
      button: 'View all cases',
      view: 'View case',
      items: [
        { alt: 'Viral Tech Launch', badge: 'TechBrand Co.', category: 'Launches', title: 'Viral Tech Launch', client: 'TechBrand Co.' },
        { alt: '360° Lifestyle Management', badge: 'Marina Influencer', category: 'Management', title: '360° Lifestyle Management', client: 'Marina Influencer' },
        { alt: 'Green Digital Movement', badge: 'EcoBrand USA', category: 'Campaigns', title: 'Green Digital Movement', client: 'EcoBrand USA' }
      ]
    },
    split: {
      creators: {
        chip: 'For Creators & Streamers', title: 'Take your career to the next level',
        text: 'Professional management, strategic partnerships and full support so you can focus on what you do best: creating.',
        list: ['Growth strategy', 'Partnership negotiation', 'Legal support', 'Content production'],
        button: 'I want management'
      },
      brands: {
        chip: 'For Brands', title: 'Connect your brand with top creators',
        text: 'Strategic campaigns with authentic creators and streamers who truly connect with your target audience.',
        list: ['Creator curation', '360° campaigns', 'Real-time metrics', 'Proven ROI'],
        button: 'Talk to a specialist'
      }
    },
    testimonials: {
      eyebrow: 'Testimonials',
      title: 'What our clients say',
      body: 'Real results from creators, streamers and brands that trust Check Creators.',
      rating: '5 out of 5 stars', previous: 'Previous testimonial', next: 'Next testimonial', item: 'Testimonial',
      items: [
        { quote: 'Check Creators made all the difference in my journey as a streamer. Beyond offering exceptional support, the agency brings trust, respect and care to every creator. At every moment, I felt I was not just another number, but part of a team that truly supports my growth. I am very grateful to be part of this family and for all the support I receive every day. I am sure Check Creators will continue transforming the lives of many creators, just as it transformed mine.', name: 'Karina Brito', role: 'Streamer', handle: '@hii_karina', profileUrl: 'https://www.tiktok.com/@hii_karina' },
        { quote: 'Check Creators made a real difference in my life as a streamer. I received full support and guidance from the agency. That is why I am grateful for all the care and attention they give us. I am sure Check Creators will continue changing the lives of new streamers, because this is an agency I truly trust.', name: 'Nilton Teclas', role: 'Streamer', handle: '@Niltonteclasnt', profileUrl: 'https://k.kwai.com/u/@Niltonteclasnt/3ekxkqCa' },
        { quote: 'Being part of Check Creators was a turning point in my journey as a streamer. More than an agency, I found a team that believes in the potential of every creator and is always there to guide, encourage and support. From day one I was treated with respect, attention and dedication, which gave me even more motivation to grow. I am very grateful to be part of this family and proud to walk alongside people who truly cheer for our success. Thank you, Check Creators, for being part of my story and for transforming the journey of so many creators, including mine!', name: 'Andrezza Salvador', role: 'Streamer', handle: '@andrezzasalvador', profileUrl: 'https://www.tiktok.com/@andrezzasalvador' },
        { quote: 'Check Creators was a fresh start in my journey as a streamer. From the beginning, I felt genuine care, constant encouragement and a true desire to see me grow. They do everything they can to motivate us, believe in us and remind us of our potential, even in the hardest moments. I never felt like just another number, but part of something bigger. I am very grateful to be part of this story and for everything we have built together.', name: 'Márcia Nara', role: 'Streamer', handle: '@marcianara_', profileUrl: 'https://www.tiktok.com/@marcianara_?_r=1&_t=ZS-965GiJ7LY4i' }
      ]
    },
    finalCta: {
      title: 'Ready to transform your digital presence?',
      body: 'Whether you are a creator, streamer or brand, we have the right strategy to reach your goals.',
      primary: 'Get started', secondary: 'Explore services'
    },
    portfolio: {
      eyebrow: 'Strategic partnerships',
      before: 'Partners that ', highlight: 'expand creators', serif: ' worldwide',
      body: 'Check Creators builds relationships with leading platforms such as Kwai and TikTok, while expanding opportunities for creators and streamers into new platforms and countries, including the United States.',
      stats: [
        { target: 2, suffix: '+', label: 'Core platform partners' },
        { target: 5, suffix: '+', label: 'Digital fronts' },
        { target: 3, suffix: '', label: 'Languages ready' },
        { target: 1, suffix: '+', label: 'International expansion' }
      ],
      partners: ['Kwai', 'TikTok', 'United States', 'Global Expansion'],
      filters: ['All', 'Launches', 'Management', 'Campaigns', 'Performance'],
      featured: 'Featured',
      empty: 'No cases in this category yet. Coming soon!',
      view: 'View case',
      items: [
        { category: 'Launches', alt: 'Viral Tech Launch', badge: 'TechBrand Co.', title: 'Viral Tech Launch', client: 'TechBrand Co.', metric: '+2.3M views in 72h' },
        { category: 'Management', alt: '360° Lifestyle Management', badge: 'Marina Influencer', title: '360° Lifestyle Management', client: 'Marina Influencer', metric: '5x growth in 1 year' },
        { category: 'Campaigns', alt: 'Green Digital Movement', badge: 'EcoBrand USA', title: 'Green Digital Movement', client: 'EcoBrand USA', metric: '+850K engagements' },
        { category: 'Performance', alt: 'Fashion Performance', badge: 'ModaStore', title: 'Fashion Performance', client: 'ModaStore', metric: '4.7x ROI in 90 days' },
        { category: 'Management', alt: 'Fitness Evolution', badge: 'Pedro Trainer', title: 'Fitness Evolution', client: 'Pedro Trainer', metric: '+320K followers in 6m' },
        { category: 'Campaigns', alt: 'Fintech for Everyone', badge: 'PaySimple', title: 'Fintech for Everyone', client: 'PaySimple', metric: '+1.5M app downloads' }
      ]
    },
    team: {
      eyebrow: 'Technical Team & Management',
      before: 'A team of ', highlight: 'Solutions', serif: ' and answers',
      body: 'Specialists dedicated to your business success. Increase your visibility and strengthen your brand presence in the digital market.',
      aboutTitle: 'Who we are',
      aboutText: 'Our team is made of specialists in marketing, finance, technology and management, committed to delivering strategic, innovative and effective solutions. We work with a focus on sustainable business growth, brand strength and competitive positioning.',
      leader: {
        label: 'CEO & Founder', name: 'Julinho Corrêa', alt: 'Julinho Corrêa — CEO and Founder of Check Creators',
        bioStart: 'Serial entrepreneur, writer and digital influencer, he built his path by creating projects and external methodologies for performance and strategic positioning on the internet. He is CEO, Founder and Interim Director, as well as author of the training ',
        bioEm: 'Unlocking the Algorithm',
        bioEnd: ', a program that explains in practical terms the mechanisms behind engagement and content distribution across digital platforms.',
        tags: ['Essential', 'Business', 'Partnerships'], linkedin: 'Julinho Corrêa LinkedIn', instagram: 'Julinho Corrêa Instagram'
      },
      grid: {
        eyebrow: 'Our team', title: 'Specialists in every front',
        body: 'Marketing, finance, technology and operations — a multidisciplinary team united by the mission of scaling creators, streamers and brands.',
        whatsappLabel: 'WhatsApp', emailLabel: 'Email'
      },
      values: {
        eyebrow: 'Differential', title: 'Marketing Strategy', body: 'Strategies to promote and qualify creators, streamers and brands with method.',
        items: [
          { title: 'Strategy', text: 'Planning and execution of campaigns that connect brands with authentic creators.' },
          { title: 'Analytics', text: 'Real-time data for informed decisions and measurable ROI in every project.' },
          { title: 'Optimization', text: 'Continuous visibility improvement — testing, adjustments and sustainable growth.' }
        ]
      },
      members: [
        { name: "Oliver'h", role: 'Head of Operations', bio: ['Business marketing and influence specialist', 'CEO of Mentoria de Sucesso and Master Social Media', 'Expertise in project management, quality management, people management, service and result-driven strategies'] },
        { name: 'Elizabeth', role: 'Head of Finance Department', bio: ['Specialist in management, administration and finance', 'Risk analysis, ROI and productivity'] },
        { name: 'Letycia Sacramento', role: 'Head of Digital Marketing', bio: ['People management specialist', 'Expertise in viral video production', 'Live streaming expertise · Digital influencer'] },
        { name: 'Larissa Sacramento', role: 'Head of Digital Marketing', bio: ['People management expertise', 'English Teacher', 'TikTok instructor', 'Administrative assistant focused on organization and operational support'] },
        { name: 'Bianca and Rodrigo', role: 'Heads of Check Diamond', bio: ['Marketing and sales specialists', 'Authorized resellers', 'Digital influencers'] },
        { name: 'Cesar Veiga', role: 'Head of Digital Marketing', bio: ['Paid traffic management specialist', 'Digital marketing specialist', 'Budget management'] },
        { name: 'Gustavo Serão', role: 'Head of Technology', bio: ['High-performance software development specialist', 'Programming specialist'] },
        { name: 'Lucas Barcia', role: 'Audiovisual Specialist', bio: ['Audiovisual professional with 10 years of experience', 'Expertise in Adobe Premiere', 'Always seeking inspiration from series, films and digital content'] }
      ]
    },
    footer: {
      about: 'Advertising and creator management agency. We turn talent into brands and brands into stories.',
      company: 'Company', resources: 'Resources', legal: 'Legal', home: 'Home', portfolio: 'Portfolio', services: 'Services', team: 'Team', contract: 'Contracts', contact: 'Contact', faq: 'FAQ', privacy: 'Privacy Policy', terms: 'Terms & Conditions',
      location: 'São Paulo, Brazil', rights: 'All rights reserved.', made: 'Made with', in: 'in São Paulo'
    },
    placeholder: { soon: 'Coming soon', body: 'This page is under construction. Check back soon.', back: 'Back to home' }
  },
  pt: {
    meta: { languageName: 'Português', languageLabel: 'Idioma' },
    nav: { home: 'Início', portfolio: 'Portfólio', services: 'Serviços', team: 'Equipe', contact: 'Contato', contract: 'Contratos', agency: 'Fale com a agência' },
    routes: { services: 'Serviços', contact: 'Contato', contract: 'Contratos', notFound: 'Página não encontrada' },
    hero: { eyebrow: 'Agência de Creators & Expansão de Plataformas', before: 'Conectamos ', highlight: 'creators e streamers', serif: ' a plataformas globais', body: 'A Check Creators atua em frentes estratégicas conectadas ao Kwai e TikTok, enquanto expande oportunidades para creators e streamers em novas plataformas e países, incluindo os Estados Unidos.', primary: 'Fale com a agência', secondary: 'Ver parcerias' },
    stats: [ { value: '20.000+', label: 'Creators gerenciados' }, { value: '2+', label: 'Parceiros principais' }, { value: '3', label: 'Idiomas ativos' }, { value: 'EUA', label: 'Expansão internacional' } ],
    marquee: { caption: 'Plataformas onde nossos creators e streamers performam', platforms: ['Kwai Vídeo', 'Kwai Live', 'Kwai Live Shop', 'Kwai Cut', 'TikTok Shop', 'TikTok Live'] },
    video: { eyebrow: 'Em vídeo', desc: 'Um recorte da presença criativa que a Check Creators constrói para creators, streamers e marcas.', tags: ['Criatividade', 'Presença digital', 'Impacto visual'], title: 'Vídeo institucional da Check Creators' },
    services: { eyebrow: 'O que fazemos', title: 'Oportunidades de plataforma para creators e streamers', body: 'Do Kwai Vídeo e Kwai Live ao TikTok Live e TikTok Shop, estruturamos cadastros, gestão e oportunidades de crescimento por idioma e mercado.', button: 'Ver serviços', items: [ { title: 'Operação Kwai & TikTok', text: 'Frentes estratégicas conectadas ao Kwai, TikTok Live, TikTok Shop, Kwai Vídeo, Kwai Live e Kwai Cut.' }, { title: 'Cadastro de Creators e Streamers', text: 'Fluxos claros de inscrição por idioma, país e categoria de plataforma.' }, { title: 'Expansão Internacional', text: 'Expansão para os Estados Unidos e preparação para novas plataformas e categorias.' }, { title: 'Performance & Suporte', text: 'Acompanhamento operacional, dados, organização de processos e suporte com foco em resultado.' } ] },
    process: { eyebrow: 'Jornada do creator', title: 'Do perfil analisado ao crescimento profissional', body: 'Um caminho claro para creators e streamers: analisamos o perfil, conectamos a melhor oportunidade e acompanhamos os próximos passos com direção focada em plataforma.', steps: [ { number: '01', title: 'Análise do perfil', text: 'Avaliamos nicho, consistência, idioma, encaixe por plataforma e potencial de crescimento de cada creator ou streamer.' }, { number: '02', title: 'Direcionamento da oportunidade', text: 'Indicamos a melhor frente: Kwai Vídeo, Kwai Live, Kwai Cut, TikTok Live, TikTok Shop ou expansão internacional.' }, { number: '03', title: 'Suporte e evolução', text: 'Orientamos, acompanhamos e ajustamos estratégias para melhorar performance e profissionalizar a jornada do creator.' } ] },
    cases: { eyebrow: 'Cases em destaque', title: 'Resultados que falam por si', body: 'Conheça alguns dos projetos que fizeram a diferença para nossos clientes.', button: 'Ver todos os cases', view: 'Ver case', items: [ { alt: 'Lançamento Viral Tech', badge: 'TechBrand Co.', category: 'Lançamentos', title: 'Lançamento Viral Tech', client: 'TechBrand Co.' }, { alt: 'Gestão 360° Lifestyle', badge: 'Marina Influencer', category: 'Gestão', title: 'Gestão 360° Lifestyle', client: 'Marina Influencer' }, { alt: 'Movimento Verde Digital', badge: 'EcoMarca Brasil', category: 'Campanhas', title: 'Movimento Verde Digital', client: 'EcoMarca Brasil' } ] },
    split: { creators: { chip: 'Para Creators e Streamers', title: 'Leve sua carreira para o próximo nível', text: 'Gestão profissional, parcerias estratégicas e suporte completo para você focar no que faz de melhor: criar.', list: ['Estratégia de crescimento', 'Negociação de parcerias', 'Suporte jurídico', 'Produção de conteúdo'], button: 'Quero ser gerenciado' }, brands: { chip: 'Para Marcas', title: 'Conecte sua marca aos melhores creators', text: 'Campanhas estratégicas com creators e streamers autênticos que realmente conectam com seu público-alvo.', list: ['Curadoria de creators', 'Campanhas 360°', 'Métricas em tempo real', 'ROI comprovado'], button: 'Falar com especialista' } },
    testimonials: { eyebrow: 'Depoimentos', title: 'O que nossos clientes dizem', body: 'Resultados reais de creators, streamers e marcas que confiam na Check Creators.', rating: '5 de 5 estrelas', previous: 'Depoimento anterior', next: 'Próximo depoimento', item: 'Depoimento', items: [ { quote: 'A Check Creators fez toda a diferença na minha trajetória como streamer. Além de oferecer um suporte excepcional, a agência transmite confiança, respeito e cuidado com cada criador. Em todos os momentos, senti que não era apenas mais um número, mas parte de uma equipe que realmente torce pelo meu crescimento. Sou muito grata por fazer parte dessa família e por todo o apoio que recebo diariamente. Tenho certeza de que a Check Creators continuará transformando a vida de muitos criadores, assim como transformou a minha.', name: 'Karina Brito', role: 'Streamer', handle: '@hii_karina', profileUrl: 'https://www.tiktok.com/@hii_karina' }, { quote: 'A Check Creators fez total diferença na minha vida como streamer, onde obtive total apoio e suporte da agência. Por isso, agradeço por todo carinho e cuidado que vocês têm com a gente. Tenho certeza de que a Agência Check Creators continuará mudando a vida de novos streamers, porque nessa eu confio.', name: 'Nilton Teclas', role: 'Streamer', handle: '@Niltonteclasnt', profileUrl: 'https://k.kwai.com/u/@Niltonteclasnt/3ekxkqCa' }, { quote: 'Fazer parte da Check Creators foi um divisor de águas na minha trajetória como streamer. Mais do que uma agência, encontrei uma equipe que acredita no potencial de cada criador e está sempre presente para orientar, incentivar e apoiar. Desde o primeiro dia fui tratada com respeito, atenção e dedicação, o que me deu ainda mais motivação para crescer. Sou muito grata por fazer parte dessa família e tenho orgulho de caminhar ao lado de pessoas que realmente torcem pelo nosso sucesso. Obrigada, Check Creators, por fazer parte da minha história e por transformar a jornada de tantos criadores, inclusive a minha!', name: 'Andrezza Salvador', role: 'Streamer', handle: '@andrezzasalvador', profileUrl: 'https://www.tiktok.com/@andrezzasalvador' }, { quote: 'A Check Creators foi um novo começo na minha trajetória de streamer. Desde o começo, senti um cuidado genuíno, um incentivo constante e uma vontade verdadeira de me ver crescer. Eles fazem de tudo para nos motivar, acreditar na gente e nos lembrar do nosso potencial, mesmo nos momentos mais difíceis. Nunca me senti apenas mais um número, mas parte de algo maior. Sou muito grata por fazer parte dessa história e por tudo o que construímos juntos.', name: 'Márcia Nara', role: 'Streamer', handle: '@marcianara_', profileUrl: 'https://www.tiktok.com/@marcianara_?_r=1&_t=ZS-965GiJ7LY4i' } ] },
    finalCta: { title: 'Pronto para transformar sua presença digital?', body: 'Seja você creator, streamer ou marca, temos a solução perfeita para alcançar seus objetivos.', primary: 'Começar agora', secondary: 'Conhecer serviços' },
    portfolio: { eyebrow: 'Parcerias estratégicas', before: 'Parceiros que ', highlight: 'expandem creators', serif: ' pelo mundo', body: 'A Check Creators constrói relacionamento com plataformas parceiras como Kwai e TikTok, enquanto expande oportunidades para creators e streamers em novas plataformas e países, incluindo os Estados Unidos.', stats: [ { target: 2, suffix: '+', label: 'Parceiros principais' }, { target: 5, suffix: '+', label: 'Frentes digitais' }, { target: 3, suffix: '', label: 'Idiomas ativos' }, { target: 1, suffix: '+', label: 'Expansão internacional' } ], partners: ['Kwai', 'TikTok', 'Estados Unidos', 'Expansão Global'], filters: ['Todos', 'Lançamentos', 'Gestão', 'Campanhas', 'Performance'], featured: 'Destaque', empty: 'Nenhum case nesta categoria ainda. Em breve!', view: 'Ver case', items: [ { category: 'Lançamentos', alt: 'Lançamento Viral Tech', badge: 'TechBrand Co.', title: 'Lançamento Viral Tech', client: 'TechBrand Co.', metric: '+2.3M visualizações em 72h' }, { category: 'Gestão', alt: 'Gestão 360° Lifestyle', badge: 'Marina Influencer', title: 'Gestão 360° Lifestyle', client: 'Marina Influencer', metric: '5x crescimento em 1 ano' }, { category: 'Campanhas', alt: 'Movimento Verde Digital', badge: 'EcoMarca Brasil', title: 'Movimento Verde Digital', client: 'EcoMarca Brasil', metric: '+850K engajamentos' }, { category: 'Performance', alt: 'Performance Fashion', badge: 'ModaStore', title: 'Performance Fashion', client: 'ModaStore', metric: 'ROI 4.7x em 90 dias' }, { category: 'Gestão', alt: 'Evolução Fitness', badge: 'Pedro Trainer', title: 'Evolução Fitness', client: 'Pedro Trainer', metric: '+320K seguidores em 6m' }, { category: 'Campanhas', alt: 'Fintech para Todos', badge: 'PaySimples', title: 'Fintech para Todos', client: 'PaySimples', metric: '+1.5M downloads do app' } ] },
    team: { eyebrow: 'Equipe Técnica & Gestão', before: 'Time de ', highlight: 'Soluções', serif: ' e respostas', body: 'Especialistas dedicados ao sucesso do seu negócio. Aumente a visibilidade e a presença da sua marca no mercado digital.', aboutTitle: 'Quem somos?', aboutText: 'Nossa equipe é formada por especialistas em marketing, finanças, tecnologia e gestão, comprometidos em oferecer soluções estratégicas, inovadoras e eficazes. Atuamos com foco no crescimento sustentável do seu negócio, fortalecendo sua marca e ampliando sua competitividade no mercado.', leader: { label: 'CEO e Fundador', name: 'Julinho Corrêa', alt: 'Julinho Corrêa — CEO e Fundador da Check Creators', bioStart: 'Empreendedor serial, escritor e influenciador digital, construiu sua trajetória criando projetos e metodologias externas para performance e posicionamento estratégico na internet. É CEO, Fundador e Diretor Interino, além de autor do treinamento ', bioEm: 'Destravando o Algoritmo', bioEnd: ', programa que explica de forma prática os mecanismos por trás do engajamento e da distribuição de conteúdo nas plataformas digitais.', tags: ['Essencial', 'Negócios', 'Parcerias'], linkedin: 'LinkedIn de Julinho Corrêa', instagram: 'Instagram de Julinho Corrêa' }, grid: { eyebrow: 'Nossa equipe', title: 'Especialistas em cada frente', body: 'Marketing, finanças, tecnologia e gestão — uma equipe multidisciplinar unida pela paixão de transformar o mercado digital brasileiro.', whatsappLabel: 'WhatsApp', emailLabel: 'Email' }, values: { eyebrow: 'Diferencial', title: 'Estratégia de Marketing', body: 'Estratégias para promover e qualificar creators, streamers e marcas com método.', items: [ { title: 'Estratégia', text: 'Planejamento e execução de campanhas que conectam marcas a creators autênticos.' }, { title: 'Análise', text: 'Dados em tempo real para decisões informadas e ROI mensurável em cada projeto.' }, { title: 'Otimização', text: 'Melhoria contínua da visibilidade — testes, ajustes de rota e crescimento sustentável.' } ] }, members: [
        { name: "Oliver'h", role: 'Head de Operações', bio: ['Especialista em marketing empresarial e influência', 'CEO do projeto Mentoria de Sucesso e Master Social Media', 'Expertise em projetos, gestão da qualidade, gestão de pessoas, atendimento e estratégias de resultado'] },
        { name: 'Elizabeth', role: 'Head do Departamento Financeiro', bio: ['Especialista em gestão, administração e finanças', 'Análise de risco, ROI e produtividade'] },
        { name: 'Letycia Sacramento', role: 'Head de Marketing Digital', bio: ['Especialista em gestão de pessoas', 'Expertise em produção de vídeos virais', 'Expertise em transmissões ao vivo · Influenciadora digital'] },
        { name: 'Larissa Sacramento', role: 'Head de Marketing Digital', bio: ['Expertise em gestão de pessoas', 'Professora de inglês', 'Instrutora especializada em TikTok', 'Auxiliar administrativo com foco em organização e suporte operacional'] },
        { name: 'Bianca e Rodrigo', role: 'Heads do Check Diamond', bio: ['Especialistas em marketing e vendas', 'Revendedores autorizados', 'Influenciadores digitais'] },
        { name: 'Cesar Veiga', role: 'Head de Marketing Digital', bio: ['Especialista em gestão de tráfego pago', 'Especialista em marketing digital', 'Gestão de orçamento'] },
        { name: 'Gustavo Serão', role: 'Head de Tecnologia', bio: ['Especialista em desenvolvimento de softwares de alto desempenho', 'Especialista em programação'] },
        { name: 'Lucas Barcia', role: 'Especialista em Audiovisual', bio: ['Profissional de audiovisual há 10 anos', 'Expertise em Adobe Premiere', 'Sempre buscando inspiração em séries, filmes e conteúdos digitais'] }
      ] },
    footer: { about: 'Agência de publicidade e gestão de criadores digitais. Transformamos talentos em marcas e marcas em histórias.', company: 'Empresa', resources: 'Recursos', legal: 'Legal', home: 'Início', portfolio: 'Portfólio', services: 'Serviços', team: 'Equipe', contract: 'Contratos', contact: 'Contato', faq: 'FAQ', privacy: 'Política de Privacidade', terms: 'Termos e Condições', location: 'São Paulo, Brasil', rights: 'Todos os direitos reservados.', made: 'Feito com', in: 'em São Paulo' },
    placeholder: { soon: 'Em breve', body: 'Esta página está em construção. Volte em breve para conferir.', back: 'Voltar ao início' }
  },
  es: {
    meta: { languageName: 'Español', languageLabel: 'Idioma' },
    nav: { home: 'Inicio', portfolio: 'Portafolio', services: 'Servicios', team: 'Equipo', contact: 'Contacto', contract: 'Contratos', agency: 'Hablar con la agencia' },
    routes: { services: 'Servicios', contact: 'Contacto', contract: 'Contratos', notFound: 'Página no encontrada' },
    hero: { eyebrow: 'Agencia de Creators & Expansión de Plataformas', before: 'Conectamos ', highlight: 'creators y streamers', serif: ' con plataformas globales', body: 'Check Creators trabaja en frentes estratégicos conectados a Kwai y TikTok, mientras expande oportunidades para creators y streamers a nuevas plataformas y países, incluyendo Estados Unidos.', primary: 'Hablar con la agencia', secondary: 'Ver alianzas' },
    stats: [ { value: '20.000+', label: 'Creators gestionados' }, { value: '2+', label: 'Aliados principales' }, { value: '3', label: 'Idiomas activos' }, { value: 'EUA', label: 'Expansión internacional' } ],
    marquee: { caption: 'Plataformas donde nuestros creators y streamers performan', platforms: shared.platforms },
    video: { eyebrow: 'En video', desc: 'Una muestra de la presencia creativa que Check Creators construye para creators, streamers y marcas.', tags: ['Creatividad', 'Presencia digital', 'Impacto visual'], title: 'Video institucional de Check Creators' },
    services: { eyebrow: 'Qué hacemos', title: 'Oportunidades de plataforma para creators y streamers', body: 'Desde Kwai Video y Kwai Live hasta TikTok Live y TikTok Shop, estructuramos aplicaciones, gestión y oportunidades de crecimiento por idioma y mercado.', button: 'Ver servicios', items: [ { title: 'Operación Kwai & TikTok', text: 'Frentes estratégicos conectados a Kwai, TikTok Live, TikTok Shop, Kwai Video, Kwai Live y Kwai Cut.' }, { title: 'Aplicación de Creators y Streamers', text: 'Flujos claros de inscripción por idioma, país y categoría de plataforma.' }, { title: 'Expansión Internacional', text: 'Expansión hacia Estados Unidos y preparación para nuevas plataformas y categorías.' }, { title: 'Performance & Soporte', text: 'Seguimiento operativo, datos, organización de procesos y soporte enfocado en resultados.' } ] },
    process: { eyebrow: 'Ruta del creator', title: 'Del perfil analizado al crecimiento profesional', body: 'Un camino claro para creators y streamers: analizamos el perfil, conectamos la mejor oportunidad y acompañamos los próximos pasos con dirección enfocada en plataforma.', steps: [ { number: '01', title: 'Análisis del perfil', text: 'Evaluamos nicho, consistencia, idioma, encaje por plataforma y potencial de crecimiento de cada creator o streamer.' }, { number: '02', title: 'Dirección de oportunidad', text: 'Indicamos el mejor frente: Kwai Video, Kwai Live, Kwai Cut, TikTok Live, TikTok Shop o expansión internacional.' }, { number: '03', title: 'Soporte y evolución', text: 'Orientamos, acompañamos y ajustamos estrategias para mejorar performance y profesionalizar la ruta del creator.' } ] },
    cases: { eyebrow: 'Cases destacados', title: 'Resultados que hablan por sí mismos', body: 'Conoce algunos proyectos que marcaron la diferencia para nuestros clientes.', button: 'Ver todos los cases', view: 'Ver case', items: [ { alt: 'Lanzamiento Viral Tech', badge: 'TechBrand Co.', category: 'Lanzamientos', title: 'Lanzamiento Viral Tech', client: 'TechBrand Co.' }, { alt: 'Gestión 360° Lifestyle', badge: 'Marina Influencer', category: 'Gestión', title: 'Gestión 360° Lifestyle', client: 'Marina Influencer' }, { alt: 'Movimiento Verde Digital', badge: 'EcoMarca USA', category: 'Campañas', title: 'Movimiento Verde Digital', client: 'EcoMarca USA' } ] },
    split: { creators: { chip: 'Para Creators y Streamers', title: 'Lleva tu carrera al siguiente nivel', text: 'Gestión profesional, alianzas estratégicas y soporte completo para que te enfoques en lo que haces mejor: crear.', list: ['Estrategia de crecimiento', 'Negociación de alianzas', 'Soporte legal', 'Producción de contenido'], button: 'Quiero ser gestionado' }, brands: { chip: 'Para Marcas', title: 'Conecta tu marca con los mejores creators', text: 'Campañas estratégicas con creators y streamers auténticos que conectan de verdad con tu público objetivo.', list: ['Curaduría de creators', 'Campañas 360°', 'Métricas en tiempo real', 'ROI comprobado'], button: 'Hablar con especialista' } },
    testimonials: { eyebrow: 'Testimonios', title: 'Lo que dicen nuestros clientes', body: 'Resultados reales de creators, streamers y marcas que confían en Check Creators.', rating: '5 de 5 estrellas', previous: 'Testimonio anterior', next: 'Siguiente testimonio', item: 'Testimonio', items: [ { quote: 'Check Creators marcó toda la diferencia en mi trayectoria como streamer. Además de ofrecer un soporte excepcional, la agencia transmite confianza, respeto y cuidado con cada creator. En todo momento sentí que no era solo un número, sino parte de un equipo que realmente apoya mi crecimiento. Estoy muy agradecida por formar parte de esta familia y por todo el apoyo que recibo diariamente. Estoy segura de que Check Creators seguirá transformando la vida de muchos creators, así como transformó la mía.', name: 'Karina Brito', role: 'Streamer', handle: '@hii_karina', profileUrl: 'https://www.tiktok.com/@hii_karina' }, { quote: 'Check Creators marcó una gran diferencia en mi vida como streamer. Recibí todo el apoyo y soporte de la agencia. Por eso agradezco todo el cariño y cuidado que tienen con nosotros. Estoy seguro de que la Agencia Check Creators seguirá cambiando la vida de nuevos streamers, porque en esta agencia confío.', name: 'Nilton Teclas', role: 'Streamer', handle: '@Niltonteclasnt', profileUrl: 'https://k.kwai.com/u/@Niltonteclasnt/3ekxkqCa' }, { quote: 'Formar parte de Check Creators fue un antes y un después en mi trayectoria como streamer. Más que una agencia, encontré un equipo que cree en el potencial de cada creator y siempre está presente para orientar, incentivar y apoyar. Desde el primer día fui tratada con respeto, atención y dedicación, lo que me dio aún más motivación para crecer. Estoy muy agradecida de formar parte de esta familia y orgullosa de caminar junto a personas que realmente apoyan nuestro éxito. Gracias, Check Creators, por ser parte de mi historia y por transformar la jornada de tantos creators, incluida la mía!', name: 'Andrezza Salvador', role: 'Streamer', handle: '@andrezzasalvador', profileUrl: 'https://www.tiktok.com/@andrezzasalvador' }, { quote: 'Check Creators fue un nuevo comienzo en mi trayectoria como streamer. Desde el principio, sentí un cuidado genuino, un incentivo constante y una verdadera voluntad de verme crecer. Hacen todo lo posible para motivarnos, creer en nosotros y recordarnos nuestro potencial, incluso en los momentos más difíciles. Nunca me sentí solo un número más, sino parte de algo más grande. Estoy muy agradecida por formar parte de esta historia y por todo lo que construimos juntos.', name: 'Márcia Nara', role: 'Streamer', handle: '@marcianara_', profileUrl: 'https://www.tiktok.com/@marcianara_?_r=1&_t=ZS-965GiJ7LY4i' } ] },
    finalCta: { title: '¿Listo para transformar tu presencia digital?', body: 'Seas creator, streamer o marca, tenemos la estrategia ideal para alcanzar tus objetivos.', primary: 'Comenzar ahora', secondary: 'Conocer servicios' },
    portfolio: { eyebrow: 'Alianzas estratégicas', before: 'Alianzas que ', highlight: 'expanden creators', serif: ' por el mundo', body: 'Check Creators construye relaciones con plataformas aliadas como Kwai y TikTok, mientras expande oportunidades para creators y streamers en nuevas plataformas y países, incluyendo Estados Unidos.', stats: [ { target: 2, suffix: '+', label: 'Aliados principales' }, { target: 5, suffix: '+', label: 'Frentes digitales' }, { target: 3, suffix: '', label: 'Idiomas activos' }, { target: 1, suffix: '+', label: 'Expansión internacional' } ], partners: ['Kwai', 'TikTok', 'Estados Unidos', 'Expansión Global'], filters: ['Todos', 'Lanzamientos', 'Gestión', 'Campañas', 'Performance'], featured: 'Destacado', empty: 'No hay cases en esta categoría todavía. ¡Pronto!', view: 'Ver case', items: [ { category: 'Lanzamientos', alt: 'Lanzamiento Viral Tech', badge: 'TechBrand Co.', title: 'Lanzamiento Viral Tech', client: 'TechBrand Co.', metric: '+2.3M visualizaciones en 72h' }, { category: 'Gestión', alt: 'Gestión 360° Lifestyle', badge: 'Marina Influencer', title: 'Gestión 360° Lifestyle', client: 'Marina Influencer', metric: '5x crecimiento en 1 año' }, { category: 'Campañas', alt: 'Movimiento Verde Digital', badge: 'EcoMarca USA', title: 'Movimiento Verde Digital', client: 'EcoMarca USA', metric: '+850K interacciones' }, { category: 'Performance', alt: 'Performance Fashion', badge: 'ModaStore', title: 'Performance Fashion', client: 'ModaStore', metric: 'ROI 4.7x en 90 días' }, { category: 'Gestión', alt: 'Evolución Fitness', badge: 'Pedro Trainer', title: 'Evolución Fitness', client: 'Pedro Trainer', metric: '+320K seguidores en 6m' }, { category: 'Campañas', alt: 'Fintech para Todos', badge: 'PaySimple', title: 'Fintech para Todos', client: 'PaySimple', metric: '+1.5M descargas de la app' } ] },
    team: { eyebrow: 'Equipo Técnico & Gestión', before: 'Equipo de ', highlight: 'Soluciones', serif: ' y respuestas', body: 'Especialistas dedicados al éxito de tu negocio. Aumenta la visibilidad y la presencia de tu marca en el mercado digital.', aboutTitle: 'Quiénes somos', aboutText: 'Nuestro equipo está formado por especialistas en marketing, finanzas, tecnología y gestión, comprometidos con ofrecer soluciones estratégicas, innovadoras y eficaces. Trabajamos con foco en el crecimiento sostenible de tu negocio, fortaleciendo tu marca y ampliando tu competitividad.', leader: { label: 'CEO y Fundador', name: 'Julinho Corrêa', alt: 'Julinho Corrêa — CEO y Fundador de Check Creators', bioStart: 'Emprendedor serial, escritor e influencer digital, construyó su trayectoria creando proyectos y metodologías externas para performance y posicionamiento estratégico en internet. Es CEO, Fundador y Director Interino, además de autor del entrenamiento ', bioEm: 'Desbloqueando el Algoritmo', bioEnd: ', un programa que explica de forma práctica los mecanismos detrás del engagement y la distribución de contenido en plataformas digitales.', tags: ['Esencial', 'Negocios', 'Alianzas'], linkedin: 'LinkedIn de Julinho Corrêa', instagram: 'Instagram de Julinho Corrêa' }, grid: { eyebrow: 'Nuestro equipo', title: 'Especialistas en cada frente', body: 'Marketing, finanzas, tecnología y operaciones — un equipo multidisciplinario unido por la misión de escalar creators, streamers y marcas.', whatsappLabel: 'WhatsApp', emailLabel: 'Email' }, values: { eyebrow: 'Diferencial', title: 'Estrategia de Marketing', body: 'Estrategias para promover y calificar creators, streamers y marcas con método.', items: [ { title: 'Estrategia', text: 'Planificación y ejecución de campañas que conectan marcas con creators auténticos.' }, { title: 'Análisis', text: 'Datos en tiempo real para decisiones informadas y ROI medible en cada proyecto.' }, { title: 'Optimización', text: 'Mejora continua de visibilidad — pruebas, ajustes y crecimiento sostenible.' } ] }, members: [
        { name: "Oliver'h", role: 'Head de Operaciones', bio: ['Especialista en marketing empresarial e influencia', 'CEO del proyecto Mentoria de Sucesso y Master Social Media', 'Expertise en proyectos, gestión de calidad, gestión de personas, atención y estrategias de resultados'] },
        { name: 'Elizabeth', role: 'Head del Departamento Financiero', bio: ['Especialista en gestión, administración y finanzas', 'Análisis de riesgo, ROI y productividad'] },
        { name: 'Letycia Sacramento', role: 'Head de Marketing Digital', bio: ['Especialista en gestión de personas', 'Expertise en producción de videos virales', 'Expertise en transmisiones en vivo · Influencer digital'] },
        { name: 'Larissa Sacramento', role: 'Head de Marketing Digital', bio: ['Expertise en gestión de personas', 'Profesora de inglés', 'Instructora especializada en TikTok', 'Auxiliar administrativa con enfoque en organización y soporte operativo'] },
        { name: 'Bianca y Rodrigo', role: 'Heads de Check Diamond', bio: ['Especialistas en marketing y ventas', 'Revendedores autorizados', 'Influencers digitales'] },
        { name: 'Cesar Veiga', role: 'Head de Marketing Digital', bio: ['Especialista en gestión de tráfico pago', 'Especialista en marketing digital', 'Gestión de presupuesto'] },
        { name: 'Gustavo Serão', role: 'Head de Tecnología', bio: ['Especialista en desarrollo de software de alto rendimiento', 'Especialista en programación'] },
        { name: 'Lucas Barcia', role: 'Especialista en Audiovisual', bio: ['Profesional audiovisual con 10 años de experiencia', 'Expertise en Adobe Premiere', 'Siempre busca inspiración en series, películas y contenidos digitales'] }
      ] },
    footer: { about: 'Agencia de publicidad y gestión de creadores digitales. Convertimos talentos en marcas y marcas en historias.', company: 'Empresa', resources: 'Recursos', legal: 'Legal', home: 'Inicio', portfolio: 'Portafolio', services: 'Servicios', team: 'Equipo', contract: 'Contratos', contact: 'Contacto', faq: 'FAQ', privacy: 'Política de Privacidad', terms: 'Términos y Condiciones', location: 'São Paulo, Brasil', rights: 'Todos los derechos reservados.', made: 'Hecho con', in: 'en São Paulo' },
    placeholder: { soon: 'Próximamente', body: 'Esta página está en construcción. Vuelve pronto para verla.', back: 'Volver al inicio' }
  }
};

const I18nContext = createContext(null);

function normalizeLanguage(lang) {
  if (!lang) return DEFAULT_LANGUAGE;
  const code = lang.toLowerCase();
  if (code.startsWith('pt')) return 'pt';
  if (code.startsWith('es')) return 'es';
  if (code.startsWith('en')) return 'en';
  return DEFAULT_LANGUAGE;
}

export function I18nProvider({ children }) {
  const [language, setLanguageState] = useState(() => {
    if (typeof window === 'undefined') return DEFAULT_LANGUAGE;
    const saved = localStorage.getItem('cc-language');
    if (saved) return normalizeLanguage(saved);
    return normalizeLanguage(navigator.language || DEFAULT_LANGUAGE);
  });

  const setLanguage = (nextLanguage) => {
    const normalized = normalizeLanguage(nextLanguage);
    setLanguageState(normalized);
  };

  useEffect(() => {
    const active = LANGUAGES.find((item) => item.code === language) || LANGUAGES[0];
    document.documentElement.lang = active.htmlLang;
    localStorage.setItem('cc-language', language);
  }, [language]);

  const value = useMemo(() => ({
    language,
    setLanguage,
    languages: LANGUAGES,
    copy: translations[language] || translations[DEFAULT_LANGUAGE]
  }), [language]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within I18nProvider');
  }
  return context;
}
