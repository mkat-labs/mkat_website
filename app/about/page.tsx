import Header from '@/components/ui/Header';
import AboutHero from '@/components/sections/AboutHero';
import CompanyStory from '@/components/sections/CompanyStory';
import TeamExpertise from '@/components/sections/TeamExpertise';
import GlobalPresence from '@/components/sections/GlobalPresence';
import Footer from '@/components/ui/Footer';

export default function About() {
  return (
    <div className="min-h-screen">
      <Header />
      <AboutHero />
      <CompanyStory />
      <TeamExpertise />
      <GlobalPresence />
      <Footer />
    </div>
  );
}