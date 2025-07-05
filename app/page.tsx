'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from 'react';

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navigation */}
      <nav className="border-b-4 border-black bg-white relative">
        <div className="max-w-7xl mx-auto px-8 py-8">
          <div className="flex items-center justify-between relative min-h-[60px]">
            {/* Left Navigation */}
            <div className="hidden md:flex space-x-12 font-bold text-lg">
              <a href="/services" className="hover:text-brand-yellow transition-colors">
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
              <Link href="/contact" className="hover:text-brand-yellow transition-colors">
                Contact
              </Link>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button 
                className="text-black hover:text-brand-yellow p-2"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t-4 border-black">
            <div className="max-w-7xl mx-auto px-8 py-4">
              <div className="flex flex-col space-y-4 font-bold text-lg">
                <Link 
                  href="/services" 
                  className="hover:text-brand-yellow transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Services
                </Link>
                <a 
                  href="https://www.mkat.studio" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-brand-yellow transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Studio
                </a>
                <a 
                  href="#about" 
                  className="hover:text-brand-yellow transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </a>
                <a 
                  href="#careers" 
                  className="hover:text-brand-yellow transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Careers
                </a>
                <Link 
                  href="/contact" 
                  className="hover:text-brand-yellow transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        )}
        
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
              <h2 className="text-2xl lg:text-3xl font-bold text-black mb-8 border-l-8 border-black pl-6">
                every bit counts
              </h2>
              <p className="text-xl lg:text-2xl text-black mb-12 max-w-lg leading-relaxed">
                We love the internet and want to make it a better, safer and more efficient place by designing beautiful apps that help people get things done.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/services" className="bg-black text-white px-8 py-4 text-lg font-bold hover:bg-gray-800 transition-colors border-4 border-black text-center">
                  Make yourself a destination
                </a>
                <a href="https://www.mkat.studio" target="_blank" rel="noopener noreferrer" className="border-4 border-black text-black px-8 py-4 text-lg font-bold hover:bg-black hover:text-white transition-colors text-center">
                  View Our Work
                </a>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/mkat_locations.svg"
                alt="mkat global locations"
                width={500}
                height={400}
                className="max-w-full h-auto mb-8"
              />
              <Image
                src="/mkat_name_only_logo.svg"
                alt="mkat"
                width={240}
                height={72}
                className="h-16 lg:h-24 w-auto"
                priority
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
                Founded by engineers who&apos;ve worked across three continents, bringing experience from security, manufacturing, logistics, and agriculture sectors.
              </p>
              <p className="text-xl lg:text-2xl text-black leading-relaxed">
                We focus on practical solutions that work—whether it&apos;s streamlining supply chains, securing data, or optimizing production workflows.
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
      <footer className="border-t-4 border-black bg-brand-yellow py-16">
        <div className="max-w-7xl mx-auto px-8">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="text-center mb-8">
                <div className="flex justify-center mb-4">
                  <Image
                    src="/mkat_name_only_logo.svg"
                    alt="mkat"
                    width={240}
                    height={72}
                  />
                </div>
                <div className="text-black font-bold text-3xl">
                  every bit counts
                </div>
              </div>
              <div className="flex justify-center space-x-4">
                <a href="https://www.linkedin.com/company/mkatza?trk=public_jobs_topcard-org-name" target="_blank" rel="noopener noreferrer" className="text-black hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="https://github.com/mkat-labs" target="_blank" rel="noopener noreferrer" className="text-black hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-black font-bold text-xl mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li><a href="/services" className="text-black hover:text-white transition-colors text-lg">Services</a></li>
                <li><a href="#about" className="text-black hover:text-white transition-colors text-lg">About</a></li>
                <li><a href="#careers" className="text-black hover:text-white transition-colors text-lg">Careers</a></li>
                <li><a href="#contact" className="text-black hover:text-white transition-colors text-lg">Contact</a></li>
                <li><a href="https://www.mkat.studio" target="_blank" rel="noopener noreferrer" className="text-black hover:text-white transition-colors text-lg">Studio</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-black font-bold text-xl mb-6">Get In Touch</h3>
              <ul className="space-y-3">
                <li><a href="https://mkat.co.za" target="_blank" rel="noopener noreferrer" className="text-black hover:text-white transition-colors text-lg">South Africa</a></li>
                <li><Link href="/" className="text-black hover:text-white transition-colors text-lg">Hong Kong</Link></li>
                <li><Link href="/" className="text-black hover:text-white transition-colors text-lg">Germany</Link></li>
                <li><a href="mailto:hello@mkat-labs.com" className="text-black hover:text-white transition-colors text-lg">hello@mkat-labs.com</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t-2 border-black pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-black text-lg mb-4 md:mb-0">
                © {new Date().getFullYear()} mkat. All rights reserved.
              </div>
              <div className="flex space-x-6">
                <a href="#" className="text-black hover:text-white transition-colors text-lg">Privacy Policy</a>
                <a href="#" className="text-black hover:text-white transition-colors text-lg">Terms of Service</a>
                <a href="#" className="text-black hover:text-white transition-colors text-lg">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
