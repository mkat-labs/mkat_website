'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from 'react';

export default function ServicesPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navigation */}
      <nav className="border-b-4 border-black bg-white relative">
        <div className="max-w-7xl mx-auto px-8 py-8">
          <div className="flex items-center justify-between relative min-h-[60px]">
            {/* Left Navigation */}
            <div className="hidden md:flex space-x-12 font-bold text-lg">
              <Link href="/services" className="text-brand-yellow border-b-2 border-brand-yellow">
                Services
              </Link>
              <a href="https://mkat.studio" target="_blank" rel="noopener noreferrer" className="hover:text-brand-yellow transition-colors">
                Studio
              </a>
            </div>
            
            {/* Right Navigation */}
            <div className="hidden md:flex space-x-12 font-bold text-lg">
              <Link href="/#about" className="hover:text-brand-yellow transition-colors">
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
                  className="text-brand-yellow border-b-2 border-brand-yellow py-2"
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
            <div className="inline-flex items-center justify-center p-8 mb-8">
              <Image
                src="/dpm_logo_only.svg"
                alt="Digital Presence Management"
                width={120}
                height={120}
              />
            </div>
            <h1 className="text-6xl lg:text-8xl font-black text-black mb-8">
              Our Services
            </h1>
            <h2 className="text-4xl lg:text-5xl font-black text-black mb-8 border-l-8 border-black pl-6 inline-block">
              Digital Presence Management
            </h2>
            <p className="text-xl lg:text-2xl text-black max-w-4xl mx-auto leading-relaxed">
              We want to help you curate your digital presence. From your customer facing websites, to your internal and customer facing apps, interfaces and forms. From invoices and integrations, to services, to marketing and social media management.
            </p>
            <div className="mt-8">
              <span className="text-2xl lg:text-3xl font-bold text-black italic">
                &ldquo;Make yourself a destination&rdquo;
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          
          {/* Bespoke Applications */}
          <div className="mb-32">
            <div className="text-center mb-16">
              <h2 className="text-5xl lg:text-6xl font-black text-black mb-8">
                Bespoke Applications
              </h2>
              <p className="text-xl lg:text-2xl text-black max-w-4xl mx-auto leading-relaxed">
                Custom-built solutions tailored to your unique business needs. We create powerful, scalable applications that grow with your organization.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Data Solutions */}
              <div className="border-4 border-black p-8 bg-white hover:bg-brand-yellow transition-colors duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-brand-yellow border-4 border-black flex items-center justify-center mr-6">
                    <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-black text-black">
                    Data Solutions
                  </h3>
                </div>
                <div className="space-y-6">
                  <p className="text-lg text-black leading-relaxed">
                    Transform your data into actionable insights with our comprehensive data solutions built on Microsoft Azure infrastructure.
                  </p>
                  <div className="border-l-8 border-brand-yellow pl-6 bg-gray-50 p-4">
                    <h4 className="text-xl font-bold text-black mb-3">Key Features:</h4>
                    <ul className="space-y-2 text-black">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-black mr-3"></span>
                        Data lives on servers in your country (Azure compliance)
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-black mr-3"></span>
                        IoT integrations for real-time data collection
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-black mr-3"></span>
                        Advanced analytics and reporting dashboards
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-black mr-3"></span>
                        Scalable cloud architecture
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Web Solutions */}
              <div className="border-4 border-black p-8 bg-white hover:bg-brand-yellow transition-colors duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-brand-yellow border-4 border-black flex items-center justify-center mr-6">
                    <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-black text-black">
                    Web Solutions
                  </h3>
                </div>
                <div className="space-y-6">
                  <p className="text-lg text-black leading-relaxed">
                    Beautiful, functional web applications designed with psychological principles to maximize productivity and user satisfaction.
                  </p>
                  <div className="border-l-8 border-brand-yellow pl-6 bg-gray-50 p-4">
                    <h4 className="text-xl font-bold text-black mb-3">Key Features:</h4>
                    <ul className="space-y-2 text-black">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-black mr-3"></span>
                        Psychology-based UX design
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-black mr-3"></span>
                        Client interaction management systems
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-black mr-3"></span>
                        Organization management tools
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-black mr-3"></span>
                        Mobile-responsive design
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Workflow Manager - Flagship Product */}
          <div className="mb-32">
            <div className="bg-brand-yellow border-4 border-black p-12">
              <div className="text-center mb-12">
                <div className="flex justify-center mb-8">
                  <Image
                    src="/workflow_manager_logo_text_yellow_background.svg"
                    alt="Workflow Manager"
                    width={400}
                    height={80}
                    className="max-w-full h-auto"
                  />
                </div>
                <h2 className="text-4xl lg:text-5xl font-black text-black mb-6">
                  Comprehensive Workflow Automation Suite
                </h2>
                <p className="text-xl lg:text-2xl text-black max-w-4xl mx-auto leading-relaxed mb-8">
                  Eliminate paper-based processes, streamline administrative tasks, and create fully auditable approval trails for organizational transactions.
                </p>
                <div className="inline-block bg-black text-white px-6 py-3 text-lg font-bold border-4 border-black">
                  🎯 Zero Email Dependency
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
                {/* Core Features */}
                <div className="bg-white border-4 border-black p-6">
                  <h3 className="text-2xl font-bold text-black mb-4 border-b-4 border-brand-yellow pb-2">
                    🎨 Visual Workflow Designer
                  </h3>
                  <ul className="space-y-3 text-black">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-brand-yellow mt-2 mr-3 flex-shrink-0"></span>
                      <span>Drag-and-drop interface for custom workflows</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-brand-yellow mt-2 mr-3 flex-shrink-0"></span>
                      <span>Pre-built templates for common processes</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-brand-yellow mt-2 mr-3 flex-shrink-0"></span>
                      <span>Conditional logic and branching</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-brand-yellow mt-2 mr-3 flex-shrink-0"></span>
                      <span>Process versioning and tracking</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white border-4 border-black p-6">
                  <h3 className="text-2xl font-bold text-black mb-4 border-b-4 border-brand-yellow pb-2">
                    🔄 Intelligent Document Routing
                  </h3>
                  <ul className="space-y-3 text-black">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-brand-yellow mt-2 mr-3 flex-shrink-0"></span>
                      <span>Automated assignment based on roles</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-brand-yellow mt-2 mr-3 flex-shrink-0"></span>
                      <span>Workload balancing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-brand-yellow mt-2 mr-3 flex-shrink-0"></span>
                      <span>Multi-stage approvals</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-brand-yellow mt-2 mr-3 flex-shrink-0"></span>
                      <span>Escalation management</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white border-4 border-black p-6">
                  <h3 className="text-2xl font-bold text-black mb-4 border-b-4 border-brand-yellow pb-2">
                    🛡️ Role-Based Access Control
                  </h3>
                  <ul className="space-y-3 text-black">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-brand-yellow mt-2 mr-3 flex-shrink-0"></span>
                      <span>Hierarchical role system</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-brand-yellow mt-2 mr-3 flex-shrink-0"></span>
                      <span>Granular permission matrix</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-brand-yellow mt-2 mr-3 flex-shrink-0"></span>
                      <span>Cross-department workflows</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-brand-yellow mt-2 mr-3 flex-shrink-0"></span>
                      <span>Audit trail compliance</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white border-4 border-black p-6">
                  <h3 className="text-2xl font-bold text-black mb-4 border-b-4 border-brand-yellow pb-2">
                    📊 Dynamic Dashboard System
                  </h3>
                  <ul className="space-y-3 text-black">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-brand-yellow mt-2 mr-3 flex-shrink-0"></span>
                      <span>Role-specific views</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-brand-yellow mt-2 mr-3 flex-shrink-0"></span>
                      <span>Real-time updates</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-brand-yellow mt-2 mr-3 flex-shrink-0"></span>
                      <span>Performance analytics</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-brand-yellow mt-2 mr-3 flex-shrink-0"></span>
                      <span>Filterable task management</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white border-4 border-black p-6">
                  <h3 className="text-2xl font-bold text-black mb-4 border-b-4 border-brand-yellow pb-2">
                    📝 Comprehensive Form Builder
                  </h3>
                  <ul className="space-y-3 text-black">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-brand-yellow mt-2 mr-3 flex-shrink-0"></span>
                      <span>No-code form creation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-brand-yellow mt-2 mr-3 flex-shrink-0"></span>
                      <span>Rich text and media fields</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-brand-yellow mt-2 mr-3 flex-shrink-0"></span>
                      <span>Conditional field logic</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-brand-yellow mt-2 mr-3 flex-shrink-0"></span>
                      <span>Auto-save and validation</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white border-4 border-black p-6">
                  <h3 className="text-2xl font-bold text-black mb-4 border-b-4 border-brand-yellow pb-2">
                    🔗 Advanced Integrations
                  </h3>
                  <ul className="space-y-3 text-black">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-brand-yellow mt-2 mr-3 flex-shrink-0"></span>
                      <span>Microsoft 365 integration</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-brand-yellow mt-2 mr-3 flex-shrink-0"></span>
                      <span>Email automation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-brand-yellow mt-2 mr-3 flex-shrink-0"></span>
                      <span>API connections</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-brand-yellow mt-2 mr-3 flex-shrink-0"></span>
                      <span>Custom integrations</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="text-center">
                <button className="bg-black text-white px-8 py-4 text-xl font-bold hover:bg-gray-800 transition-colors border-4 border-black mr-4">
                  Learn More About Workflow Manager
                </button>
                <button className="border-4 border-black text-black px-8 py-4 text-xl font-bold hover:bg-black hover:text-white transition-colors">
                  Request Demo
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-black text-white mb-8">
              Our Technology Stack
            </h2>
            <p className="text-xl lg:text-2xl text-white max-w-4xl mx-auto leading-relaxed">
              We use cutting-edge technologies to build robust, scalable, and secure solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-brand-yellow border-4 border-white p-6 text-center">
              <h3 className="text-xl font-bold text-black mb-4">Cloud Platform</h3>
              <div className="text-black">
                <div className="font-semibold mb-2">Microsoft Azure</div>
                <div className="text-sm">Secure, compliant, global infrastructure</div>
              </div>
            </div>

            <div className="bg-brand-yellow border-4 border-white p-6 text-center">
              <h3 className="text-xl font-bold text-black mb-4">Frontend</h3>
              <div className="text-black">
                <div className="font-semibold mb-2">React / Next.js</div>
                <div className="text-sm">Modern, responsive user interfaces</div>
              </div>
            </div>

            <div className="bg-brand-yellow border-4 border-white p-6 text-center">
              <h3 className="text-xl font-bold text-black mb-4">Backend</h3>
              <div className="text-black">
                <div className="font-semibold mb-2">Node.js / .NET</div>
                <div className="text-sm">Scalable server-side solutions</div>
              </div>
            </div>

            <div className="bg-brand-yellow border-4 border-white p-6 text-center">
              <h3 className="text-xl font-bold text-black mb-4">Database</h3>
              <div className="text-black">
                <div className="font-semibold mb-2">SQL Server / MongoDB</div>
                <div className="text-sm">Reliable data storage and retrieval</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-brand-yellow">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <h2 className="text-5xl lg:text-6xl font-black text-black mb-8">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-xl lg:text-2xl text-black mb-12 max-w-3xl mx-auto leading-relaxed">
            Let&apos;s discuss how our services can help you streamline operations, improve efficiency, and make yourself a true digital destination.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact" className="bg-black text-white px-8 py-4 text-lg font-bold hover:bg-gray-800 transition-colors border-4 border-black">
              Get Started Today
            </Link>
            <Link href="https://mkat.studio" target="_blank" rel="noopener noreferrer" className="border-4 border-black text-black px-8 py-4 text-lg font-bold hover:bg-black hover:text-white transition-colors">
              View Our Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-4 border-black bg-white py-16">
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
                <a href="https://www.linkedin.com/company/mkatza?trk=public_jobs_topcard-org-name" target="_blank" rel="noopener noreferrer" className="text-black hover:text-brand-yellow transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="https://github.com/mkat-labs" target="_blank" rel="noopener noreferrer" className="text-black hover:text-brand-yellow transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-black font-bold text-xl mb-6">Services</h3>
              <ul className="space-y-3">
                <li><a href="#bespoke" className="text-black hover:text-brand-yellow transition-colors text-lg">Bespoke Applications</a></li>
                <li><a href="#data" className="text-black hover:text-brand-yellow transition-colors text-lg">Data Solutions</a></li>
                <li><a href="#web" className="text-black hover:text-brand-yellow transition-colors text-lg">Web Solutions</a></li>
                <li><a href="#workflow" className="text-black hover:text-brand-yellow transition-colors text-lg">Workflow Manager</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-black font-bold text-xl mb-6">Get In Touch</h3>
              <ul className="space-y-3">
                <li><a href="https://mkat.co.za" target="_blank" rel="noopener noreferrer" className="text-black hover:text-brand-yellow transition-colors text-lg">South Africa</a></li>
                <li><Link href="/" className="text-black hover:text-brand-yellow transition-colors text-lg">Hong Kong</Link></li>
                <li><Link href="/" className="text-black hover:text-brand-yellow transition-colors text-lg">Germany</Link></li>
                <li><a href="mailto:hello@mkat-labs.com" className="text-black hover:text-brand-yellow transition-colors text-lg">hello@mkat-labs.com</a></li>
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
                <a href="#" className="text-black hover:text-brand-yellow transition-colors text-lg">Privacy Policy</a>
                <a href="#" className="text-black hover:text-brand-yellow transition-colors text-lg">Terms of Service</a>
                <a href="#" className="text-black hover:text-brand-yellow transition-colors text-lg">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
