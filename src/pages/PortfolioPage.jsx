import PortfolioHero from '../components/PortfolioHero.jsx';
import PortfolioStats from '../components/PortfolioStats.jsx';
import PortfolioAbout from '../components/PortfolioAbout.jsx';
import PortfolioGallery from '../components/PortfolioGallery.jsx';
import PortfolioEventCarousels from '../components/PortfolioEventCarousels.jsx';
import FinalCTA from '../components/FinalCTA.jsx';

export default function PortfolioPage() {
  return (
    <>
      <PortfolioHero />
      <PortfolioStats />
      <PortfolioAbout />
      <PortfolioGallery />
      <PortfolioEventCarousels />
      <FinalCTA />
    </>
  );
}
