'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from 'react';

export default function AboutPage() {
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
              <a href="https://www.mkat.studio" target="_blank" rel="noopener noreferrer" className="hover:text-brand-yellow transition-colors">
                Studio
              </a>
            </div>
            
            {/* Right Navigation */}
            <div className="hidden md:flex space-x-12 font-bold text-lg">
              <Link href="/about" className="text-brand-yellow border-b-2 border-brand-yellow">
                About
              </Link>
              <Link href="/#careers" className="hover:text-brand-yellow transition-colors">
                Careers
              </Link>
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
                <Link 
                  href="/about" 
                  className="text-brand-yellow border-b-2 border-brand-yellow py-2"
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
              About mkat
            </h1>
            <h2 className="text-4xl lg:text-5xl font-black text-black mb-8 border-l-8 border-black pl-6 inline-block">
              every bit counts
            </h2>
            <p className="text-xl lg:text-2xl text-black max-w-4xl mx-auto leading-relaxed">
              Engineer founded and engineer led with roots over three continents and experience in multiple sectors.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl lg:text-6xl font-black text-black mb-8">
                Our Story
              </h2>
              <div className="space-y-6 text-xl lg:text-2xl text-black leading-relaxed">
                <p>
                  Founded by engineers who&apos;ve worked across three continents, bringing experience from security, manufacturing, logistics, and agriculture sectors.
                </p>
                <p>
                  We&apos;ve learned that good software comes from understanding real problems. Whether it&apos;s streamlining supply chains, securing data, or optimizing production workflows—we focus on practical solutions that work.
                </p>
                <p className="font-bold border-l-8 border-brand-yellow pl-6">
                  Engineer-led. Multi-continental experience. Real-world solutions.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="bg-brand-yellow border-4 border-black p-12">
                <Image
                  src="/mkat_name_only_logo.svg"
                  alt="mkat"
                  width={300}
                  height={100}
                  className="max-w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Presence Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-black text-white mb-8">
              Global Presence
            </h2>
            <p className="text-xl lg:text-2xl text-white max-w-4xl mx-auto leading-relaxed">
              With roots over three continents, we bring diverse perspectives and local expertise to every project.
            </p>
          </div>

          <div className="flex justify-center mb-16">
            <div className="bg-brand-yellow border-4 border-white p-8">
              <Image
                src="/mkat_locations.svg"
                alt="mkat global locations"
                width={600}
                height={400}
                className="max-w-full h-auto"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-brand-yellow border-4 border-white p-8 text-center">
              <h3 className="text-3xl font-black text-black mb-4">South Africa</h3>
              <p className="text-lg text-black">
                Our African hub, bringing innovation to emerging markets and established enterprises across the continent.
              </p>
            </div>
            <div className="bg-brand-yellow border-4 border-white p-8 text-center">
              <h3 className="text-3xl font-black text-black mb-4">Hong Kong</h3>
              <p className="text-lg text-black">
                Our Asia-Pacific gateway, connecting Eastern and Western business practices with cutting-edge technology.
              </p>
            </div>
            <div className="bg-brand-yellow border-4 border-white p-8 text-center">
              <h3 className="text-3xl font-black text-black mb-4">Germany</h3>
              <p className="text-lg text-black">
                Our European base, emphasizing precision engineering and robust, scalable solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Philosophy Section */}
      <section className="py-20 bg-brand-yellow">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-black text-black mb-8">
              Our Philosophy
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="bg-black border-4 border-black p-12 mb-8">
                <blockquote className="text-3xl lg:text-4xl font-bold text-white italic text-center">
                  &ldquo;Make yourself a destination&rdquo;
                </blockquote>
              </div>
              <p className="text-xl lg:text-2xl text-black leading-relaxed">
                This isn&apos;t just our motto—it&apos;s our commitment to you. We don&apos;t just build software; we create digital destinations that people want to visit, use, and return to.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white border-4 border-black p-6 text-center">
              <div className="text-4xl font-black text-black mb-4">🎯</div>
              <h3 className="text-xl font-bold text-black mb-4">Purpose-Driven</h3>
              <p className="text-black">
                Every line of code serves a purpose. We build with intention and focus on what truly matters.
              </p>
            </div>
            <div className="bg-white border-4 border-black p-6 text-center">
              <div className="text-4xl font-black text-black mb-4">🔧</div>
              <h3 className="text-xl font-bold text-black mb-4">Engineer-Led</h3>
              <p className="text-black">
                Founded and led by engineers who understand both the technical and business sides of software.
              </p>
            </div>
            <div className="bg-white border-4 border-black p-6 text-center">
              <div className="text-4xl font-black text-black mb-4">🌍</div>
              <h3 className="text-xl font-bold text-black mb-4">Global Mindset</h3>
              <p className="text-black">
                Multi-continental experience brings diverse perspectives to every challenge we solve.
              </p>
            </div>
            <div className="bg-white border-4 border-black p-6 text-center">
              <div className="text-4xl font-black text-black mb-4">✨</div>
              <h3 className="text-xl font-bold text-black mb-4">Beautiful Design</h3>
              <p className="text-black">
                We believe functionality and beauty aren&apos;t mutually exclusive—they&apos;re essential partners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-black text-black mb-8">
              Our Approach
            </h2>
            <p className="text-xl lg:text-2xl text-black max-w-4xl mx-auto leading-relaxed">
              We combine Swiss modernist design principles with cutting-edge technology to create solutions that are both beautiful and functional.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="border-4 border-black p-8 bg-white hover:bg-brand-yellow transition-colors duration-300">
              <h3 className="text-3xl font-black text-black mb-6">1. Understand</h3>
              <p className="text-lg text-black leading-relaxed">
                We dive deep into your business, understanding not just what you need, but why you need it. Every project starts with listening.
              </p>
            </div>
            <div className="border-4 border-black p-8 bg-white hover:bg-brand-yellow transition-colors duration-300">
              <h3 className="text-3xl font-black text-black mb-6">2. Design</h3>
              <p className="text-lg text-black leading-relaxed">
                Using psychological principles and modernist aesthetics, we create interfaces that are intuitive, beautiful, and purposeful.
              </p>
            </div>
            <div className="border-4 border-black p-8 bg-white hover:bg-brand-yellow transition-colors duration-300">
              <h3 className="text-3xl font-black text-black mb-6">3. Deliver</h3>
              <p className="text-lg text-black leading-relaxed">
                We build robust, scalable solutions using enterprise-grade technology, ensuring your digital destination can grow with you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <h2 className="text-5xl lg:text-6xl font-black text-white mb-8">
            Ready to Build Something Beautiful?
          </h2>
          <p className="text-xl lg:text-2xl text-white mb-12 max-w-3xl mx-auto leading-relaxed">
            Let&apos;s discuss how we can help you create a digital destination that truly serves your users and grows your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact" className="bg-brand-yellow text-black px-8 py-4 text-lg font-bold hover:bg-white transition-colors border-4 border-brand-yellow">
              Start a Conversation
            </Link>
            <Link href="/services" className="border-4 border-brand-yellow text-brand-yellow px-8 py-4 text-lg font-bold hover:bg-brand-yellow hover:text-black transition-colors">
              Explore Our Services
            </Link>
          </div>
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
                <Image
                  src="/mkat_name_only_logo.svg"
                  alt="mkat"
                  width={200}
                  height={60}
                  className="mx-auto mb-4"
                />
                <p className="text-black text-lg italic">every bit counts</p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-black font-bold text-xl mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li><Link href="/about" className="text-black hover:text-white transition-colors">About</Link></li>
                <li><Link href="/services" className="text-black hover:text-white transition-colors">Services</Link></li>
                <li><a href="https://www.mkat.studio" target="_blank" rel="noopener noreferrer" className="text-black hover:text-white transition-colors">Studio</a></li>
                <li><Link href="/#careers" className="text-black hover:text-white transition-colors">Careers</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-black font-bold text-xl mb-6">Get In Touch</h3>
              <ul className="space-y-3">
                <li><Link href="/#contact" className="text-black hover:text-white transition-colors">Contact Us</Link></li>
                <li>
                  <a href="https://mkat.co.za" target="_blank" rel="noopener noreferrer" className="text-black hover:text-white transition-colors">South Africa</a>
                  {" • "}
                  <Link href="/" className="text-black hover:text-white transition-colors">Hong Kong</Link>
                  {" • "}
                  <Link href="/" className="text-black hover:text-white transition-colors">Germany</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t-2 border-black pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-black text-lg mb-4 md:mb-0">
                © 2025 mkat. All rights reserved.
              </div>
              <div className="text-black text-lg">
                Making the internet a better place, one bit at a time.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
