import Hero from '../components/Hero.jsx';
import Stats from '../components/Stats.jsx';
import Marquee from '../components/Marquee.jsx';
import VideoSection from '../components/VideoSection.jsx';
import Services from '../components/Services.jsx';
import Process from '../components/Process.jsx';
import CreatorBenefits from '../components/CreatorBenefits.jsx';
import Testimonials from '../components/Testimonials.jsx';
import FinalCTA from '../components/FinalCTA.jsx';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <Marquee />
      <VideoSection />
      <Services />
      <Process />
      <CreatorBenefits />
      <Testimonials />
      <FinalCTA />
    </>
  );
}
