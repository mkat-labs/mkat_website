import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navigation */}
      <nav className="border-b-4 border-black bg-white relative">
        <div className="max-w-7xl mx-auto px-8 py-8">
          <div className="flex items-center justify-between relative min-h-[60px]">
            {/* Left Navigation */}
            <div className="hidden md:flex space-x-12 font-bold text-lg">
              <a href="#services" className="hover:text-brand-yellow transition-colors">
                Services
              </a>
              <a href="https://www.mkat.studio" target="_blank" rel="noopener noreferrer" className="hover:text-brand-yellow transition-colors">
                Studio
              </a>
            </div>
            
            {/* Right Navigation */}
            <div className="hidden md:flex space-x-12 font-bold text-lg">
              <a href="#about" className="hover:text-brand-yellow transition-colors">
                About
              </a>
              <a href="#careers" className="hover:text-brand-yellow transition-colors">
                Careers
              </a>
              <a href="#contact" className="hover:text-brand-yellow transition-colors">
                Contact
              </a>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button className="text-black hover:text-brand-yellow p-2">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {/* Floating Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-full -translate-y-1/2 z-20">
          <Image
            src="/mkat_small.svg"
            alt="mkat logo"
            width={120}
            height={50}
            priority
          />
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-brand-yellow min-h-[80vh] flex items-center pt-12">
        <div className="max-w-7xl mx-auto px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-6xl lg:text-8xl font-black text-black mb-6 leading-tight">
                mkat
              </h1>
              <h2 className="text-2xl lg:text-3xl font-bold text-black mb-8 border-l-8 border-black pl-6">
                every bit counts
              </h2>
              <p className="text-xl lg:text-2xl text-black mb-12 max-w-lg leading-relaxed">
                We love the internet and want to make it a better, safer and more efficient place by designing beautiful apps that help people get things done.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-black text-white px-8 py-4 text-lg font-bold hover:bg-gray-800 transition-colors border-4 border-black">
                  Make yourself a destination
                </button>
                <button className="border-4 border-black text-black px-8 py-4 text-lg font-bold hover:bg-black hover:text-white transition-colors">
                  View Our Work
                </button>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="/mkat_locations.svg"
                alt="mkat global locations"
                width={500}
                height={400}
                className="max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Digital Presence Management Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center bg-brand-yellow p-8 mb-8 border-4 border-black">
              <Image
                src="/dpm_logo_only.svg"
                alt="Digital Presence Management"
                width={80}
                height={80}
              />
            </div>
            <h2 className="text-5xl lg:text-6xl font-black text-black mb-6">
              Digital Presence Management
            </h2>
            <p className="text-xl lg:text-2xl text-black max-w-4xl mx-auto leading-relaxed">
              We want to help you curate your digital presence. From your customer facing websites, to your internal and customer facing apps, interfaces and forms. From invoices and integrations, to services, to marketing and social media management.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-20">
            {/* Bespoke Applications */}
            <div className="border-4 border-black p-8 bg-white">
              <h3 className="text-3xl lg:text-4xl font-black text-black mb-8">
                Bespoke Applications
              </h3>
              
              <div className="space-y-8">
                <div className="border-l-8 border-brand-yellow pl-6">
                  <h4 className="text-2xl font-bold text-black mb-4">Data Solutions</h4>
                  <p className="text-lg text-black leading-relaxed">
                    We use Microsoft Azure as our cloud provider to ensure that your data lives on servers in your country. We offer IoT integrations to move and store your data into actionable insights.
                  </p>
                </div>
                
                <div className="border-l-8 border-brand-yellow pl-6">
                  <h4 className="text-2xl font-bold text-black mb-4">Web Solutions</h4>
                  <p className="text-lg text-black leading-relaxed">
                    We build web apps that help you better manage your organization and interact with your clients. Our designs are founded on psychological principles to ensure ease of use and maximum productivity.
                  </p>
                </div>
              </div>
            </div>

            {/* Workflow Manager */}
            <div className="border-4 border-black p-8 bg-brand-yellow">
              <div className="flex items-center mb-6">
                <Image
                  src="/workflow_manager_logo_text_yellow_background.svg"
                  alt="Workflow Manager"
                  width={300}
                  height={60}
                  className="max-w-full h-auto"
                />
              </div>
              <p className="text-lg text-black leading-relaxed mb-6">
                Comprehensive digital workflow automation platform designed to eliminate paper-based processes, streamline administrative tasks, and create fully auditable approval trails.
              </p>
              <button className="bg-black text-white px-6 py-3 text-lg font-bold hover:bg-gray-800 transition-colors border-4 border-black">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-brand-yellow">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl lg:text-6xl font-black text-black mb-8">
                About mkat
              </h2>
              <p className="text-xl lg:text-2xl text-black leading-relaxed mb-8">
                mkat is a software company. We love the internet and want to make it a better, safer and more efficient and all around nicer place to be by designing beautiful apps that help people get things done.
              </p>
              <p className="text-xl lg:text-2xl text-black leading-relaxed">
                Whether it&apos;s shifting around big data, interacting with customers or automating nasty email chains. Let us help you build it better!
              </p>
            </div>
            <div className="bg-black border-4 border-black p-8">
              <h3 className="text-3xl font-bold text-white mb-6">Our Locations</h3>
              <div className="space-y-4 text-xl text-white">
                <div className="flex items-center space-x-4">
                  <div className="w-4 h-4 bg-brand-yellow border-2 border-white"></div>
                  <span>South Africa</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-4 h-4 bg-brand-yellow border-2 border-white"></div>
                  <span>Hong Kong</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-4 h-4 bg-brand-yellow border-2 border-white"></div>
                  <span>Germany</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section id="careers" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <h2 className="text-5xl lg:text-6xl font-black text-black mb-8">
            Join Our Team
          </h2>
          <p className="text-xl lg:text-2xl text-black mb-12 max-w-3xl mx-auto leading-relaxed">
            Be part of making the internet a better place. We&apos;re always looking for talented individuals who share our passion for beautiful, functional design.
          </p>
          <button className="bg-brand-yellow text-black px-8 py-4 text-lg font-bold hover:bg-black hover:text-white transition-colors border-4 border-black">
            View Open Positions
          </button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <h2 className="text-5xl lg:text-6xl font-black text-white mb-8">
            Get In Touch
          </h2>
          <p className="text-xl lg:text-2xl text-white mb-12 max-w-3xl mx-auto leading-relaxed">
            Ready to make yourself a destination? Let&apos;s discuss how we can help transform your digital presence.
          </p>
          <button className="bg-brand-yellow text-black px-8 py-4 text-lg font-bold hover:bg-white transition-colors border-4 border-brand-yellow">
            Contact Us
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-4 border-black bg-white py-8">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Image
                src="/mkat_name_only_logo.svg"
                alt="mkat"
                width={100}
                height={30}
              />
            </div>
            <div className="text-black font-bold text-lg">
              every bit counts
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
