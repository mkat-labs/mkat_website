import Header from '@/components/ui/Header';
import TechnologyHero from '@/components/sections/TechnologyHero';
import TechnologyStack from '@/components/sections/TechnologyStack';
import Footer from '@/components/ui/Footer';

export default function Technology() {
  return (
    <div className="min-h-screen">
      <Header />
      <TechnologyHero />
      <TechnologyStack />
      <Footer />
    </div>
  );
}