import Header from '@/components/ui/Header';
import ResourcesHero from '@/components/sections/ResourcesHero';
import BlogList from '@/components/sections/BlogList';
import Footer from '@/components/ui/Footer';

export default function Resources() {
  return (
    <div className="min-h-screen">
      <Header />
      <ResourcesHero />
      <BlogList />
      <Footer />
    </div>
  );
}
