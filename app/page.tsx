import Header from '@/components/ui/Header';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import GlobalPresence from '@/components/sections/GlobalPresence';
import TechnologyStack from '@/components/sections/TechnologyStack';
import Footer from '@/components/ui/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <GlobalPresence />
      <TechnologyStack />
      <Footer />
    </div>
  );
}
