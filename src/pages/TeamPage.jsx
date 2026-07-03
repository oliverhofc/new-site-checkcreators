import TeamHero from '../components/TeamHero.jsx';
import TeamLeader from '../components/TeamLeader.jsx';
import TeamGrid from '../components/TeamGrid.jsx';
import TeamValues from '../components/TeamValues.jsx';
import FinalCTA from '../components/FinalCTA.jsx';

export default function TeamPage() {
  return (
    <>
      <TeamHero />
      <TeamLeader />
      <TeamGrid />
      <TeamValues />
      <FinalCTA />
    </>
  );
}
