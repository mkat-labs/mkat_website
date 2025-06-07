import Header from '@/components/ui/Header';
import ContactHero from '@/components/sections/ContactHero';
import ContactForm from '@/components/sections/ContactForm';
import ContactInfo from '@/components/sections/ContactInfo';
import Footer from '@/components/ui/Footer';

export default function Contact() {
  return (
    <div className="min-h-screen">
      <Header />
      <ContactHero />
      <div className="grid lg:grid-cols-2 gap-0">
        <ContactForm />
        <ContactInfo />
      </div>
      <Footer />
    </div>
  );
}
