'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject || 'Contact Form Inquiry');
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoLink = `mailto:hello@mkat.co.za?subject=${subject}&body=${body}`;
    
    // Open default email client
    window.location.href = mailtoLink;
    
    setIsSubmitting(false);
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

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

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Contact Information */}
            <div>
              <h2 className="text-4xl lg:text-5xl font-black text-black mb-8">
                Let&apos;s Talk
              </h2>
              <div className="space-y-6 text-lg text-black leading-relaxed mb-8">
                <p>
                  Ready to transform your digital presence? Whether you need a bespoke application, want to implement Workflow Manager, or have questions about our services—we&apos;re here to help.
                </p>
                <p className="font-bold border-l-8 border-brand-yellow pl-6">
                  Engineer-led solutions. Global experience. Local expertise.
                </p>
              </div>

              {/* Contact Details */}
              <div className="bg-brand-yellow border-4 border-black p-8">
                <h3 className="text-2xl font-black text-black mb-6">Get In Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-black flex items-center justify-center mr-4">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10h5v-2h-5c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57V12c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47.65.89 1.77 1.47 2.96 1.47 1.97 0 3.5-1.53 3.5-3.57V12c0-5.52-4.48-10-10-10zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/>
                      </svg>
                    </div>
                    <span className="text-black font-bold">hello@mkat.co.za</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-black flex items-center justify-center mr-4">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                      </svg>
                    </div>
                    <span className="text-black font-bold">South Africa • Hong Kong • Germany</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white border-4 border-black p-8">
              <h3 className="text-3xl font-black text-black mb-6">Send us a message</h3>
              
              {submitted ? (
                <div className="bg-brand-yellow border-4 border-black p-6 text-center">
                  <div className="text-4xl mb-4">✓</div>
                  <h4 className="text-xl font-bold text-black mb-2">Message Sent!</h4>
                  <p className="text-black">Your default email client should have opened with your message. If not, please send your inquiry directly to hello@mkat.co.za</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-black font-bold mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full border-4 border-black p-3 text-black focus:outline-none focus:border-brand-yellow transition-colors"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-black font-bold mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full border-4 border-black p-3 text-black focus:outline-none focus:border-brand-yellow transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-black font-bold mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full border-4 border-black p-3 text-black focus:outline-none focus:border-brand-yellow transition-colors"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-black font-bold mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full border-4 border-black p-3 text-black focus:outline-none focus:border-brand-yellow transition-colors resize-none"
                      placeholder="Tell us about your project or inquiry..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-black text-white px-8 py-4 text-lg font-bold hover:bg-brand-yellow hover:text-black transition-colors border-4 border-black disabled:opacity-50"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Alternative Contact Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-8">
            Prefer Email?
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto leading-relaxed">
            You can always reach out to us directly at our email address.
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
