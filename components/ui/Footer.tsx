'use client';

import Image from 'next/image';
import Link from 'next/link';
import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon,
  ArrowRightIcon 
} from '@heroicons/react/24/outline';

const offices = [
  {
    location: 'Hong Kong (Headquarters)',
    address: 'Central, Hong Kong SAR',
    phone: '+852 xxxx xxxx',
    email: 'hk@mkat.digital'
  },
  {
    location: 'Germany',
    address: 'Innovation Hub',
    phone: '+49 xxx xxx xxxx',
    email: 'de@mkat.digital'
  },
  {
    location: 'South Africa',
    address: 'Cape Town',
    phone: '+27 xx xxx xxxx',
    email: 'za@mkat.digital'
  }
];

const services = [
  { name: 'Digital Presence Management', href: '/services/digital-presence' },
  { name: 'Big Data & Analytics', href: '/services/big-data' },
  { name: 'Manufacturing Intelligence', href: '/services/manufacturing' },
  { name: 'Technology Consulting', href: '/services/consulting' }
];

const company = [
  { name: 'About Us', href: '/about' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Technology', href: '/technology' },
  { name: 'Careers', href: '/careers' }
];

const resources = [
  { name: 'Blog', href: '/resources/blog' },
  { name: 'Whitepapers', href: '/resources/whitepapers' },
  { name: 'Webinars', href: '/resources/webinars' },
  { name: 'Documentation', href: '/resources/docs' }
];

export default function Footer() {
  return (
    <footer className="gradient-purple-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <Link href="/" className="inline-block mb-6">
                <Image
                  src="/mkat_small.svg"
                  alt="mkat logo"
                  width={36}
                  height={60}
                  className="h-15 w-9"
                />
              </Link>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Complete digital ecosystem solutions from concept to digital dominance. 
                We build, connect, and scale your entire business ecosystem.
              </p>
              <div className="flex space-x-4">
                {/* Social Media Icons - Placeholder for now */}
                <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-300 cursor-pointer">
                  <span className="text-white font-bold">Li</span>
                </div>
                <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-300 cursor-pointer">
                  <span className="text-white font-bold">Tw</span>
                </div>
                <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-300 cursor-pointer">
                  <span className="text-white font-bold">Gh</span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">Services</h3>
              <ul className="space-y-4">
                {services.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-gray-300 hover:text-primary transition-colors duration-300"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">Company</h3>
              <ul className="space-y-4">
                {company.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-gray-300 hover:text-primary transition-colors duration-300"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">Resources</h3>
              <ul className="space-y-4">
                {resources.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-gray-300 hover:text-primary transition-colors duration-300"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Office Locations */}
        <div className="border-t border-gray-700 py-12">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Global Office Locations
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office) => (
              <div key={office.location} className="text-center">
                <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors duration-300">
                  <div className="flex justify-center mb-4">
                    <MapPinIcon className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    {office.location}
                  </h4>
                  <p className="text-gray-300 mb-3">{office.address}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-center text-gray-400">
                      <PhoneIcon className="h-4 w-4 mr-2" />
                      {office.phone}
                    </div>
                    <div className="flex items-center justify-center text-gray-400">
                      <EnvelopeIcon className="h-4 w-4 mr-2" />
                      {office.email}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-700 py-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Updated with Digital Innovation
            </h3>
            <p className="text-gray-300 mb-6">
              Get insights on digital transformation, technology trends, and industry best practices
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-primary"
              />
              <button className="bg-primary text-secondary px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors duration-300 flex items-center justify-center gap-2">
                Subscribe
                <ArrowRightIcon className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 mkat. All rights reserved. Proudly multilingual, globally innovative.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-primary text-sm transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-primary text-sm transition-colors duration-300">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-primary text-sm transition-colors duration-300">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}