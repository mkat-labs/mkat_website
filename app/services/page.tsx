import Header from '@/components/ui/Header';
import ServicesHero from '@/components/sections/ServicesHero';
import ServiceDetails from '@/components/sections/ServiceDetails';
import Footer from '@/components/ui/Footer';

export default function Services() {
  return (
    <div className="min-h-screen">
      <Header />
      <ServicesHero />
      <ServiceDetails />
      <Footer />
    </div>
  );
}