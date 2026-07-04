import { useRoute } from '../hooks/RouterContext.jsx';
import { useI18n } from '../i18n.jsx';
import { routeUrl } from '../utils/paths.js';
import { getWhatsAppLink } from '../utils/whatsapp.js';

const ARTICLES = {
  'consultoria-criativa': {
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1400&q=90&auto=format&fit=crop',
    accent: 'Diagnóstico · Nicho · Posicionamento',
    pt: {
      eyebrow: 'Artigo estratégico',
      title: 'Consultoria Criativa: acelerando o potencial dos criadores',
      subtitle: 'Uma abordagem consultiva para transformar talento, ideias e presença digital em uma carreira mais sólida, posicionada e preparada para crescer.',
      summary: 'Criadores muitas vezes têm boas ideias, mas não possuem uma estrutura clara para transformar criatividade em posicionamento, produtos, audiência e resultado. A consultoria criativa atua exatamente nesse ponto: organizar a visão, fortalecer a presença digital e construir um plano prático para evolução.',
      stats: [
        { value: '01', label: 'Diagnóstico profundo' },
        { value: '02', label: 'Posicionamento claro' },
        { value: '03', label: 'Plano de crescimento' }
      ],
      takeaways: [
        'Definir nicho com base em paixão, demanda e oportunidade de mercado.',
        'Construir uma presença digital coerente, com identidade e comunicação consistentes.',
        'Transformar ideias em produtos, serviços, parcerias e oportunidades reais.'
      ],
      sections: [
        { title: 'Por que a consultoria criativa importa?', body: 'No ambiente digital, talento sozinho não garante crescimento. Muitos creators enfrentam dificuldade para monetizar, se posicionar e transformar conteúdo em uma trajetória profissional. A consultoria organiza esse caminho e reduz o improviso.' },
        { title: 'Nicho, público e proposta de valor', body: 'O primeiro passo é entender quem o creator deseja alcançar, qual problema ele resolve e como sua identidade pode se diferenciar em um mercado saturado. A partir disso, o posicionamento deixa de ser genérico e passa a ser estratégico.' },
        { title: 'Presença digital com consistência', body: 'Uma marca forte exige identidade visual, escolha correta de plataformas, calendário de comunicação e relacionamento com a audiência. Quando esses elementos estão alinhados, a percepção de profissionalismo aumenta.' },
        { title: 'Produtos, serviços e parcerias', body: 'A consultoria também orienta como transformar conhecimento, influência e comunidade em ofertas concretas. Isso pode envolver produtos digitais, serviços, parcerias com marcas, lives, campanhas e modelos de receita por plataforma.' },
        { title: 'Organização do processo criativo', body: 'Ferramentas de gestão, rotinas de produção, organização de ideias e foco operacional ajudam o creator a sair da desordem e construir consistência sem perder criatividade.' }
      ],
      ctaTitle: 'Pronto para elevar sua criação?',
      ctaText: 'A Check Creators pode caminhar ao seu lado para estruturar sua presença, posicionar seu talento e transformar sua jornada criativa em crescimento real.',
      ctaButton: 'Falar com a agência',
      back: 'Voltar para artigos'
    },
    en: {
      eyebrow: 'Strategic article',
      title: 'Creative Consulting: accelerating creator potential',
      subtitle: 'A consulting approach to turn talent, ideas and digital presence into a stronger, better-positioned creator career.',
      summary: 'Creators often have strong ideas but lack a clear structure to transform creativity into positioning, products, audience and measurable results. Creative consulting organizes that path.',
      stats: [
        { value: '01', label: 'Deep diagnosis' },
        { value: '02', label: 'Clear positioning' },
        { value: '03', label: 'Growth plan' }
      ],
      takeaways: [
        'Define a niche based on passion, demand and market opportunity.',
        'Build a consistent digital presence with identity and communication.',
        'Turn ideas into products, services, partnerships and real opportunities.'
      ],
      sections: [
        { title: 'Why creative consulting matters', body: 'In the digital environment, talent alone does not guarantee growth. Many creators struggle to monetize, position themselves and turn content into a professional path.' },
        { title: 'Niche, audience and value proposition', body: 'The first step is understanding who the creator wants to reach, what problem they solve and how their identity can stand out in a saturated market.' },
        { title: 'A consistent digital presence', body: 'A strong brand requires visual identity, the right platforms, communication cadence and a real relationship with the audience.' },
        { title: 'Products, services and partnerships', body: 'Consulting also guides how to transform knowledge, influence and community into concrete offers, campaigns and revenue models.' },
        { title: 'Organizing the creative process', body: 'Management tools, production routines and idea organization help creators build consistency without losing creativity.' }
      ],
      ctaTitle: 'Ready to elevate your creation?',
      ctaText: 'Check Creators can help structure your presence, position your talent and turn your creative journey into real growth.',
      ctaButton: 'Talk to the Agency',
      back: 'Back to articles'
    },
    es: {
      eyebrow: 'Artículo estratégico',
      title: 'Consultoría Creativa: acelerando el potencial de los creators',
      subtitle: 'Un enfoque consultivo para transformar talento, ideas y presencia digital en una carrera más sólida y posicionada.',
      summary: 'Los creators suelen tener buenas ideas, pero no siempre cuentan con una estructura clara para convertir creatividad en posicionamiento, productos, audiencia y resultados.',
      stats: [
        { value: '01', label: 'Diagnóstico profundo' },
        { value: '02', label: 'Posicionamiento claro' },
        { value: '03', label: 'Plan de crecimiento' }
      ],
      takeaways: [
        'Definir nicho con base en pasión, demanda y oportunidad de mercado.',
        'Construir presencia digital coherente, con identidad y comunicación.',
        'Convertir ideas en productos, servicios, alianzas y oportunidades reales.'
      ],
      sections: [
        { title: 'Por qué importa la consultoría creativa', body: 'En el entorno digital, el talento por sí solo no garantiza crecimiento. Muchos creators tienen dificultad para monetizar, posicionarse y convertir contenido en carrera profesional.' },
        { title: 'Nicho, audiencia y propuesta de valor', body: 'El primer paso es entender a quién se quiere alcanzar, qué problema se resuelve y cómo la identidad del creator puede diferenciarse.' },
        { title: 'Presencia digital consistente', body: 'Una marca fuerte exige identidad visual, plataformas correctas, calendario de comunicación y relación real con la audiencia.' },
        { title: 'Productos, servicios y alianzas', body: 'La consultoría ayuda a transformar conocimiento, influencia y comunidad en ofertas concretas, campañas y modelos de ingreso.' },
        { title: 'Organización del proceso creativo', body: 'Herramientas de gestión, rutinas de producción y organización de ideas ayudan a construir consistencia sin perder creatividad.' }
      ],
      ctaTitle: '¿Listo para elevar tu creación?',
      ctaText: 'Check Creators puede ayudarte a estructurar tu presencia, posicionar tu talento y convertir tu camino creativo en crecimiento real.',
      ctaButton: 'Hablar con la agencia',
      back: 'Volver a artículos'
    }
  },

  'estrategia-crescimento': {
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1400&q=90&auto=format&fit=crop',
    accent: 'Metas · Produção · Autoridade',
    pt: {
      eyebrow: 'Artigo estratégico',
      title: 'Estratégia: planos de ação para crescimento real',
      subtitle: 'Crescimento consistente não nasce do improviso. Ele exige direção, metas alcançáveis, produção organizada, análise contínua e posicionamento de marca.',
      summary: 'Uma estratégia bem construída orienta decisões, reduz desperdício de energia, protege contra burnout e permite ajustes inteligentes diante das mudanças do mercado digital.',
      stats: [
        { value: '01', label: 'Direção clara' },
        { value: '02', label: 'Metas reais' },
        { value: '03', label: 'Crescimento sustentável' }
      ],
      takeaways: [
        'Separar metas de curto, médio e longo prazo.',
        'Organizar produção com calendário, ferramentas e revisões constantes.',
        'Construir autoridade com conteúdo relevante, reputação e parcerias.'
      ],
      sections: [
        { title: 'A importância da estratégia', body: 'Sem direção, o creator pode se perder em métricas irrelevantes. Uma estratégia eficaz define prioridades, orienta ações e mantém o foco no resultado que realmente importa.' },
        { title: 'Metas reais e alcançáveis', body: 'Metas de curto prazo alimentam motivação, metas de médio prazo constroem habilidades e metas de longo prazo sustentam visão. O crescimento precisa ser medido e revisado.' },
        { title: 'Produção com foco e eficiência', body: 'Planejamento de conteúdo, calendário, ferramentas de gestão e rituais de análise ajudam a manter um fluxo constante sem comprometer qualidade ou criatividade.' },
        { title: 'Audiência certa para o nicho certo', body: 'A pesquisa de audiência permite personalizar conteúdo, escolher canais e criar mensagens que conectam com quem realmente tem potencial de engajar.' },
        { title: 'Autoridade e crescimento sustentável', body: 'Conteúdo de valor, reputação bem cuidada, colaborações estratégicas e revisão contínua constroem uma marca mais forte e preparada para escalar.' }
      ],
      ctaTitle: 'Cresça com estratégia, não com tentativa',
      ctaText: 'A Check Creators estrutura planos práticos para transformar rotina, influência e conteúdo em crescimento mensurável.',
      ctaButton: 'Falar com a agência',
      back: 'Voltar para artigos'
    },
    en: {
      eyebrow: 'Strategic article',
      title: 'Strategy: action plans for real growth',
      subtitle: 'Consistent growth does not come from improvisation. It requires direction, achievable goals, organized production and continuous analysis.',
      summary: 'A well-built strategy guides decisions, reduces wasted energy, protects creators from burnout and enables intelligent adaptation in a fast-changing digital market.',
      stats: [
        { value: '01', label: 'Clear direction' },
        { value: '02', label: 'Realistic goals' },
        { value: '03', label: 'Sustainable growth' }
      ],
      takeaways: [
        'Separate short-, medium- and long-term goals.',
        'Organize production with calendars, tools and reviews.',
        'Build authority through relevant content, reputation and partnerships.'
      ],
      sections: [
        { title: 'Why strategy matters', body: 'Without direction, creators can lose focus on irrelevant metrics. Effective strategy sets priorities and keeps attention on meaningful results.' },
        { title: 'Realistic and achievable goals', body: 'Short-term goals drive motivation, medium-term goals build skills and long-term goals sustain vision. Growth must be measured and reviewed.' },
        { title: 'Focused and efficient production', body: 'Content planning, calendars, management tools and review routines help creators maintain consistency without sacrificing quality.' },
        { title: 'The right audience for the right niche', body: 'Audience research allows creators to personalize content, choose channels and craft messages that connect with high-potential followers.' },
        { title: 'Authority and sustainable growth', body: 'Valuable content, reputation management, strategic collaborations and continuous review build a stronger and scalable brand.' }
      ],
      ctaTitle: 'Grow with strategy, not guesswork',
      ctaText: 'Check Creators structures practical plans to turn routine, influence and content into measurable growth.',
      ctaButton: 'Talk to the Agency',
      back: 'Back to articles'
    },
    es: {
      eyebrow: 'Artículo estratégico',
      title: 'Estrategia: planes de acción para crecimiento real',
      subtitle: 'El crecimiento consistente no nace de la improvisación. Exige dirección, metas alcanzables, producción organizada y análisis continuo.',
      summary: 'Una estrategia bien construida orienta decisiones, reduce desperdicio de energía, protege contra burnout y permite adaptación inteligente.',
      stats: [
        { value: '01', label: 'Dirección clara' },
        { value: '02', label: 'Metas reales' },
        { value: '03', label: 'Crecimiento sostenible' }
      ],
      takeaways: [
        'Separar metas de corto, mediano y largo plazo.',
        'Organizar producción con calendario, herramientas y revisiones.',
        'Construir autoridad con contenido relevante, reputación y alianzas.'
      ],
      sections: [
        { title: 'La importancia de la estrategia', body: 'Sin dirección, el creator puede perderse en métricas irrelevantes. Una estrategia eficaz define prioridades y mantiene el foco en el resultado.' },
        { title: 'Metas reales y alcanzables', body: 'Las metas de corto plazo impulsan motivación, las de mediano plazo construyen habilidades y las de largo plazo sostienen la visión.' },
        { title: 'Producción con foco y eficiencia', body: 'La planificación de contenido, calendarios, herramientas de gestión y revisiones constantes ayudan a mantener consistencia sin perder calidad.' },
        { title: 'La audiencia correcta para el nicho correcto', body: 'La investigación de audiencia permite personalizar contenido, elegir canales y crear mensajes que conectan con seguidores de alto potencial.' },
        { title: 'Autoridad y crecimiento sostenible', body: 'Contenido de valor, reputación, colaboraciones estratégicas y revisión continua construyen una marca más fuerte y escalable.' }
      ],
      ctaTitle: 'Crece con estrategia, no con intentos',
      ctaText: 'Check Creators estructura planes prácticos para convertir rutina, influencia y contenido en crecimiento medible.',
      ctaButton: 'Hablar con la agencia',
      back: 'Volver a artículos'
    }
  },

  'monetizacao': {
    image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=1400&q=90&auto=format&fit=crop',
    accent: 'Receita · Comunidade · Parcerias',
    pt: {
      eyebrow: 'Artigo estratégico',
      title: 'Monetização: resultados concretos em redes sociais',
      subtitle: 'Monetizar não é apenas vender. É transformar audiência em comunidade, conteúdo em ativo digital e influência em oportunidade profissional.',
      summary: 'A monetização estratégica cria um ecossistema de receita compatível com o nicho, a identidade do creator e as possibilidades de cada plataforma, incluindo Kwai, TikTok e novas frentes digitais.',
      stats: [
        { value: '01', label: 'Audiência engajada' },
        { value: '02', label: 'Fontes de receita' },
        { value: '03', label: 'Resultado real' }
      ],
      takeaways: [
        'Criar fontes de receita alinhadas ao nicho e à identidade do creator.',
        'Transformar seguidores em comunidade com relacionamento e interação.',
        'Usar conteúdo como ativo digital com valor de longo prazo.'
      ],
      sections: [
        { title: 'Monetização estratégica', body: 'A monetização estratégica vai além de anúncios ou venda direta. Ela cria uma estrutura onde audiência, comunidade, conteúdo, parcerias e plataformas trabalham juntos para gerar receita.' },
        { title: 'Fontes de receita compatíveis', body: 'Patrocínios, produtos digitais, serviços, consultorias, conteúdo pago, lives e parcerias precisam estar alinhados ao público e à identidade do creator.' },
        { title: 'Kwai e TikTok como oportunidades reais', body: 'Kwai e TikTok oferecem oportunidades para creators e streamers por meio de lives, campanhas, programas, presentes virtuais, vendas e parcerias por performance.' },
        { title: 'Audiência que vira comunidade', body: 'Interação, feedback, reconhecimento e comunicação constante fortalecem pertencimento. Comunidade engajada gera mais confiança e mais oportunidades comerciais.' },
        { title: 'Conteúdo como ativo digital', body: 'Um conteúdo bem planejado não morre no momento da publicação. Ele pode gerar autoridade, tráfego, vendas, parcerias e receita por muito mais tempo.' }
      ],
      ctaTitle: 'Transforme influência em receita',
      ctaText: 'Na Check Creators, monetização é resultado — não promessa. Estruturamos caminhos reais para creators e streamers crescerem com retorno financeiro.',
      ctaButton: 'Falar com a agência',
      back: 'Voltar para artigos'
    },
    en: {
      eyebrow: 'Strategic article',
      title: 'Monetization: concrete results on social media',
      subtitle: 'Monetizing is not just selling. It means turning audience into community, content into a digital asset and influence into professional opportunity.',
      summary: 'Strategic monetization creates a revenue ecosystem aligned with the creator’s niche, identity and platform opportunities, including Kwai, TikTok and new digital fronts.',
      stats: [
        { value: '01', label: 'Engaged audience' },
        { value: '02', label: 'Revenue streams' },
        { value: '03', label: 'Real results' }
      ],
      takeaways: [
        'Create revenue sources aligned with the creator’s niche and identity.',
        'Turn followers into community through relationship and interaction.',
        'Use content as a long-term digital asset.'
      ],
      sections: [
        { title: 'Strategic monetization', body: 'Strategic monetization goes beyond ads or direct sales. It creates a structure where audience, community, content, partnerships and platforms generate revenue together.' },
        { title: 'Compatible revenue streams', body: 'Sponsorships, digital products, services, consulting, paid content, live streams and partnerships must align with the creator’s audience and identity.' },
        { title: 'Kwai and TikTok as real opportunities', body: 'Kwai and TikTok offer opportunities through live streams, campaigns, platform programs, virtual gifts, sales and performance partnerships.' },
        { title: 'Audience becomes community', body: 'Interaction, feedback, recognition and consistent communication strengthen belonging. An engaged community creates trust and commercial opportunities.' },
        { title: 'Content as a digital asset', body: 'Well-planned content does not die at publication. It can generate authority, traffic, sales, partnerships and revenue over time.' }
      ],
      ctaTitle: 'Turn influence into revenue',
      ctaText: 'At Check Creators, monetization is a result — not a promise. We structure real paths for creators and streamers to grow financially.',
      ctaButton: 'Talk to the Agency',
      back: 'Back to articles'
    },
    es: {
      eyebrow: 'Artículo estratégico',
      title: 'Monetización: resultados concretos en redes sociales',
      subtitle: 'Monetizar no es solo vender. Es convertir audiencia en comunidad, contenido en activo digital e influencia en oportunidad profesional.',
      summary: 'La monetización estratégica crea un ecosistema de ingresos compatible con el nicho, la identidad del creator y las oportunidades de cada plataforma.',
      stats: [
        { value: '01', label: 'Audiencia activa' },
        { value: '02', label: 'Fuentes de ingreso' },
        { value: '03', label: 'Resultado real' }
      ],
      takeaways: [
        'Crear fuentes de ingreso alineadas al nicho y a la identidad.',
        'Convertir seguidores en comunidad con relación e interacción.',
        'Usar el contenido como activo digital de largo plazo.'
      ],
      sections: [
        { title: 'Monetización estratégica', body: 'La monetización estratégica va más allá de anuncios o ventas directas. Crea una estructura donde audiencia, comunidad, contenido, alianzas y plataformas generan ingresos juntos.' },
        { title: 'Fuentes de ingreso compatibles', body: 'Patrocinios, productos digitales, servicios, consultorías, contenido pago, lives y alianzas deben alinearse con la audiencia y la identidad del creator.' },
        { title: 'Kwai y TikTok como oportunidades reales', body: 'Kwai y TikTok ofrecen oportunidades mediante lives, campañas, programas, regalos virtuales, ventas y alianzas por performance.' },
        { title: 'Audiencia que se convierte en comunidad', body: 'Interacción, feedback, reconocimiento y comunicación constante fortalecen pertenencia. Una comunidad activa genera confianza y oportunidades.' },
        { title: 'Contenido como activo digital', body: 'Un contenido bien planificado no muere al publicarse. Puede generar autoridad, tráfico, ventas, alianzas e ingresos con el tiempo.' }
      ],
      ctaTitle: 'Convierte influencia en ingresos',
      ctaText: 'En Check Creators, monetización es resultado — no promesa. Estructuramos caminos reales para que creators y streamers crezcan financieramente.',
      ctaButton: 'Hablar con la agencia',
      back: 'Volver a artículos'
    }
  }
};

export default function ArticlePage({ slug }) {
  const { language } = useI18n();
  const { navigate } = useRoute();
  const article = ARTICLES[slug] || ARTICLES['consultoria-criativa'];
  const copy = article[language] || article.en;
  const whatsappLink = getWhatsAppLink(language);

  const backToServices = (event) => {
    event.preventDefault();
    navigate('/services');
    setTimeout(() => {
      document.querySelector('.creator-insights-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 80);
  };

  return (
    <article className="article-page" data-reveal>
      <div className="article-bg" aria-hidden="true">
        <span className="article-orb article-orb--one"></span>
        <span className="article-orb article-orb--two"></span>
        <span className="article-grid-light"></span>
      </div>

      <section className="article-hero">
        <div className="container-wide article-hero-grid">
          <div className="article-hero-copy">
            <a href={routeUrl('/services')} className="article-back" onClick={backToServices}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5"></path><path d="m12 19-7-7 7-7"></path></svg>
              {copy.back}
            </a>

            <span className="eyebrow article-eyebrow">
              <span className="eyebrow-dot"></span>
              {copy.eyebrow}
            </span>

            <h1 className="heading-1">{copy.title}</h1>
            <p className="body-large">{copy.subtitle}</p>

            <div className="article-hero-actions">
              <a href={whatsappLink} className="btn btn--primary btn--lg" target="_blank" rel="noopener noreferrer">
                <span className="btn-label">{copy.ctaButton}</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
              </a>
              <a href={routeUrl('/services')} className="btn btn--outline btn--lg" onClick={(e) => { e.preventDefault(); navigate('/services'); }}>
                Services
              </a>
            </div>
          </div>

          <figure className="article-hero-media">
            <img src={article.image} alt={copy.title} loading="eager" />
            <figcaption>{article.accent}</figcaption>
          </figure>
        </div>
      </section>

      <section className="article-summary-section">
        <div className="container-wide article-summary-grid">
          <div className="article-summary-card">
            <span className="article-mini-label">Overview</span>
            <p>{copy.summary}</p>
          </div>

          <div className="article-stat-grid">
            {copy.stats.map((item) => (
              <div className="article-stat-card" key={item.label}>
                <strong className="gradient-text">{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="article-content-section">
        <div className="container-wide article-content-layout">
          <aside className="article-takeaways">
            <span className="article-mini-label">Essencial</span>
            <h2>Principais pontos</h2>
            <ul>
              {copy.takeaways.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </aside>

          <div className="article-sections">
            {copy.sections.map((section, index) => (
              <section key={section.title} className="article-section-card" style={{ '--stagger': index }}>
                <span className="article-section-number">{String(index + 1).padStart(2, '0')}</span>
                <h2>{section.title}</h2>
                <p>{section.body}</p>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="article-final-cta">
        <div className="container-narrow">
          <div className="article-final-card">
            <span className="eyebrow">
              <span className="eyebrow-dot"></span>
              Check Creators
            </span>
            <h2>{copy.ctaTitle}</h2>
            <p>{copy.ctaText}</p>
            <a href={whatsappLink} className="btn btn--primary btn--lg" target="_blank" rel="noopener noreferrer">
              <span className="btn-label">{copy.ctaButton}</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
            </a>
          </div>
        </div>
      </section>
    </article>
  );
}
