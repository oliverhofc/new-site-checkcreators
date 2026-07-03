import PageBg from './components/PageBg.jsx';
import ScrollProgress from './components/ScrollProgress.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import SEO from './components/SEO.jsx';

import HomePage from './pages/HomePage.jsx';
import PortfolioPage from './pages/PortfolioPage.jsx';
import TeamPage from './pages/TeamPage.jsx';
import ServicesPage from './pages/ServicesPage.jsx';
import ContractPage from './pages/ContractPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import FAQPage from './pages/FAQPage.jsx';
import LegalPage from './pages/LegalPage.jsx';
import ArticlePage from './pages/ArticlePage.jsx';
import PlaceholderPage from './pages/PlaceholderPage.jsx';

import { useRouter } from './hooks/useRouter.jsx';
import { RouterContext } from './hooks/RouterContext.jsx';
import { I18nProvider, useI18n } from './i18n.jsx';

const ROUTES = {
  '/':           () => <HomePage />,
  '/portfolio': () => <PortfolioPage />,
  '/team':      () => <TeamPage />,
  '/services':  () => <ServicesPage />,
  '/contact':   () => <ContactPage />,
  '/faq':       () => <FAQPage />,
  '/privacy-policy': () => <LegalPage type="privacy" />,
  '/terms':     () => <LegalPage type="terms" />,
  '/contract':  () => <ContractPage />,
  '/article/consultoria-criativa': () => <ArticlePage slug="consultoria-criativa" />,
  '/article/estrategia-crescimento': () => <ArticlePage slug="estrategia-crescimento" />,
  '/article/monetizacao': () => <ArticlePage slug="monetizacao" />,
};

function NotFound() {
  const { copy } = useI18n();
  return <PlaceholderPage title={copy.routes.notFound} />;
}

function AppShell() {
  const router = useRouter();
  const Page = ROUTES[router.path] || NotFound;

  return (
    <RouterContext.Provider value={router}>
      <PageBg />
      <ScrollProgress />
      <SEO />
      <Header />

      <main>
        <Page />
      </main>

      <Footer />
    </RouterContext.Provider>
  );
}

export default function App() {
  return (
    <I18nProvider>
      <AppShell />
    </I18nProvider>
  );
}
