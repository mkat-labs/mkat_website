'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function ContactPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navigation */}
      <nav className="border-b-4 border-black bg-white relative">
        <div className="max-w-7xl mx-auto px-8 py-8">
          <div className="flex items-center justify-between relative min-h-[60px]">
            {/* Left Navigation */}
            <div className="hidden md:flex space-x-12 font-bold text-lg">
              <Link href="/services" className="hover:text-brand-yellow transition-colors">
                Services
              </Link>
              <a href="https://mkat.studio" target="_blank" rel="noopener noreferrer" className="hover:text-brand-yellow transition-colors">
                Studio
              </a>
            </div>
            
            {/* Right Navigation */}
            <div className="hidden md:flex space-x-12 font-bold text-lg">
              <Link href="/about" className="hover:text-brand-yellow transition-colors">
                About
              </Link>
              <Link href="/#careers" className="hover:text-brand-yellow transition-colors">
                Careers
              </Link>
              <Link href="/contact" className="text-brand-yellow border-b-2 border-brand-yellow">
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
                  href="https://mkat.studio" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-brand-yellow transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Studio
                </a>
                <Link 
                  href="/about" 
                  className="hover:text-brand-yellow transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link 
                  href="/#careers" 
                  className="hover:text-brand-yellow transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Careers
                </Link>
                <Link 
                  href="/contact" 
                  className="text-brand-yellow border-b-2 border-brand-yellow py-2"
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
          <Link href="/">
            <Image
              src="/mkat_small.svg"
              alt="mkat logo"
              width={120}
              height={50}
              priority
            />
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-brand-yellow min-h-[60vh] flex items-center pt-12">
        <div className="max-w-7xl mx-auto px-8 py-20">
          <div className="text-center">
            <h1 className="text-6xl lg:text-8xl font-black text-black mb-8">
              Contact Us
            </h1>
            <p className="text-xl lg:text-2xl text-black max-w-4xl mx-auto leading-relaxed">
              Get in touch with our team. We&apos;d love to hear about your project and discuss how we can help make yourself a destination.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-8">
          <div className="text-center">
            <h2 className="text-4xl lg:text-5xl font-black text-black mb-8">
              Let&apos;s Talk
            </h2>
            <div className="space-y-6 text-lg text-black leading-relaxed mb-12 max-w-3xl mx-auto">
              <p>
                Ready to transform your digital presence? Whether you need a bespoke application, want to implement Workflow Manager, or have questions about our services—we&apos;re here to help.
              </p>
              <p className="font-bold border-l-8 border-brand-yellow pl-6 text-left">
                Engineer-led solutions. Global experience. Local expertise.
              </p>
            </div>

            {/* Contact Details */}
            <div className="bg-brand-yellow border-4 border-black p-12 max-w-2xl mx-auto">
              <h3 className="text-3xl font-black text-black mb-8">Get In Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center justify-center">
                  <div className="w-10 h-10 bg-black flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10h5v-2h-5c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57V12c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47.65.89 1.77 1.47 2.96 1.47 1.97 0 3.5-1.53 3.5-3.57V12c0-5.52-4.48-10-10-10zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/>
                    </svg>
                  </div>
                  <a 
                    href="mailto:hello@mkat.co.za"
                    className="text-2xl font-bold text-black hover:underline"
                  >
                    hello@mkat.co.za
                  </a>
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-10 h-10 bg-black flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                  </div>
                  <span className="text-xl font-bold text-black">South Africa • Hong Kong • Germany</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Email Call-to-Action Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-8">
            Ready to Start?
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto leading-relaxed">
            Send us an email and let&apos;s discuss your project.
          </p>
          <a 
            href="mailto:hello@mkat.co.za"
            className="inline-flex items-center bg-brand-yellow text-black px-8 py-4 text-lg font-bold hover:bg-white transition-colors border-4 border-brand-yellow"
          >
            <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10h5v-2h-5c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57V12c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47.65.89 1.77 1.47 2.96 1.47 1.97 0 3.5-1.53 3.5-3.57V12c0-5.52-4.48-10-10-10zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/>
            </svg>
            hello@mkat.co.za
          </a>
        </div>
      </section>
    </div>
  );
}
