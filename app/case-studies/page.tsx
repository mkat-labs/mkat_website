import Header from '@/components/ui/Header';
import CaseStudiesHero from '@/components/sections/CaseStudiesHero';
import CaseStudiesList from '@/components/sections/CaseStudiesList';
import Footer from '@/components/ui/Footer';

export default function CaseStudies() {
  return (
    <div className="min-h-screen">
      <Header />
      <CaseStudiesHero />
      <CaseStudiesList />
      <Footer />
    </div>
  );
}
