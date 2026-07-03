# Check Creators — React

Landing + página de portfólio da Check Creators em **Vite + React 18**, com
roteamento manual sem dependência externa.

## 🚀 Como rodar

Você precisa do [Node.js 18+](https://nodejs.org) instalado.

```bash
# 1. Instalar dependências
npm install

# 2. Rodar em desenvolvimento (hot reload em http://localhost:5173)
npm run dev

# 3. Gerar build de produção (gera pasta dist/)
npm run build

# 4. Pré-visualizar o build
npm run preview
```

## 🗺️ Rotas disponíveis

| Rota          | Descrição                                                       |
| ------------- | ---------------------------------------------------------------- |
| `/`           | Home (landing completa)                                          |
| `/portfolio`  | Galeria de cases com filtros funcionais e contadores animados    |
| `/team`       | Equipe técnica e gestão (Oliver'h em destaque + grid de 6)       |
| `/services`   | Placeholder ("Em breve")                                         |
| `/contact`    | Placeholder                                                      |
| `/contract`   | Placeholder ("Quero ser creator")                                |
| (qualquer)    | "Página não encontrada"                                          |

Navegação é **SPA** (Single Page App): cliques em links internos não recarregam
a página. Back/forward do navegador funcionam. Cmd/Ctrl+Click ainda abre em
nova aba normalmente.

## 📁 Estrutura

```
check-creators/
├── index.html                   # Entry point do Vite
├── package.json                 # Apenas React + Vite, zero deps extras
├── vite.config.js
└── src/
    ├── main.jsx                 # Renderiza <App/>
    ├── App.jsx                  # Roteamento + layout (Header + Page + Footer)
    ├── styles.css               # CSS único (~2370 linhas, 26 seções)
    ├── hooks/
    │   ├── useRouter.jsx        # Roteador manual (history API + popstate)
    │   ├── RouterContext.jsx    # Context para acessar navigate em qualquer lugar
    │   └── useCountUp.jsx       # Counter animado (rAF + IntersectionObserver)
    ├── pages/
    │   ├── HomePage.jsx         # Compõe seções da home
    │   ├── PortfolioPage.jsx    # Compõe seções do portfólio
    │   ├── TeamPage.jsx         # Compõe seções da equipe
    │   └── PlaceholderPage.jsx  # Tela "em breve" para rotas não implementadas
    └── components/
        ├── PageBg.jsx           # Mesh + grid + noise fixos
        ├── ScrollProgress.jsx   # Barra de progresso scroll-driven
        ├── Header.jsx           # Theme toggle + mobile drawer + active link
        ├── Footer.jsx
        ├── Hero.jsx             # Home: hero principal
        ├── Stats.jsx            # Home: 4 métricas
        ├── Marquee.jsx          # Home: plataformas Kwai/TikTok/Facebook
        ├── VideoSection.jsx     # Home: iframe YouTube
        ├── Services.jsx         # Home: 4 cards de serviço
        ├── Process.jsx          # Home: 3 passos do processo
        ├── Cases.jsx            # Home: 3 cases em destaque
        ├── Split.jsx            # Home: Creators × Marcas
        ├── Testimonials.jsx     # Home: carousel de 5 depoimentos
        ├── FinalCTA.jsx         # CTA reutilizado em todas as páginas
        ├── PortfolioHero.jsx    # Portfolio: hero próprio
        ├── PortfolioStats.jsx   # Portfolio: stats com counters animados
        ├── PortfolioGallery.jsx # Portfolio: filtros + 6 cases
        ├── TeamHero.jsx         # Team: hero + bloco "Quem somos?"
        ├── TeamLeader.jsx       # Team: Oliver'h em destaque (conic ring)
        ├── TeamGrid.jsx         # Team: 6 membros em glass cards
        └── TeamValues.jsx       # Team: Estratégia / Análise / Otimização
```

## ✨ Funcionalidades interativas

| Componente              | O que faz                                                           |
| ----------------------- | ------------------------------------------------------------------- |
| Header                  | Toggle dark/light persistido em `localStorage`                      |
| Header                  | Hamburger abre drawer mobile, fecha ao navegar                      |
| Header                  | Link ativo se ajusta automaticamente baseado em `window.location`   |
| Testimonials            | Carousel: setas prev/next + dots clicáveis                          |
| PortfolioGallery        | Filtros por categoria com transição (key-remount + stagger)         |
| PortfolioStats          | Contadores animam de 0 ao valor final ao entrar no viewport         |
| Roteamento              | SPA com pushState + popstate, scroll-to-top no `navigate()`         |

## 🎨 Efeitos visuais avançados (todos no CSS)

Preservados do projeto original e estendidos para o portfolio:

- **`@property --angle`** registrado para animar gradientes cônicos
- **`scroll-timeline: scroll(root)`** na barra de progresso (sem JS)
- **`animation-timeline: view()`** para reveals scroll-driven com fallback
- **Conic ring rotativo** no avatar do depoimento e no case em destaque do portfolio
- **Mesh gradient animado** no fundo da página e no CTA final
- **Sheen sweep** no botão primário e nos filter chips no hover
- **Top gradient bar** que aparece no hover de cards
- **Eyebrow com dot pulsante** (live indicator)
- **Heartbeat** no coração do footer

Tudo desligado sob `prefers-reduced-motion: reduce`.

## 🔧 Customização rápida

| Onde mexer                              | O que muda                |
| --------------------------------------- | ------------------------- |
| `src/components/Stats.jsx`              | Métricas da home          |
| `src/components/Marquee.jsx`            | Plataformas no marquee    |
| `src/components/Services.jsx`           | Lista de serviços         |
| `src/components/Process.jsx`            | Etapas do processo        |
| `src/components/Cases.jsx`              | Cases em destaque na home |
| `src/components/Testimonials.jsx`       | Depoimentos do carousel   |
| `src/components/PortfolioGallery.jsx`   | Cases + categorias        |
| `src/components/PortfolioStats.jsx`     | Métricas animadas         |
| `src/App.jsx`                           | Adicionar novas rotas     |

## 📦 Deploy

A pasta `dist/` gerada pelo `npm run build` é 100% estática.

**Importante**: como o roteamento é client-side, o servidor precisa servir
`index.html` para qualquer rota não-encontrada (fallback). Configurações:

- **Vercel / Netlify / Cloudflare Pages**: detectam SPA automaticamente
- **Apache (htaccess)**: adicionar `FallbackResource /index.html`
- **Nginx**: `try_files $uri $uri/ /index.html;`
- **Hostinger / cPanel**: configurar redirecionamento 404 → `/index.html`

Sem essa configuração, recarregar a página em `/portfolio` direto vai dar 404.
