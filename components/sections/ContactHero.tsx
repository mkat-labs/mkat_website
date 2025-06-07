'use client';

import { motion } from 'framer-motion';
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';

export default function ContactHero() {
  return (
    <section className="relative py-24 gradient-purple-black overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-black/30" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
            Let&apos;s Start Your
            <span className="block text-primary">Transformation</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Ready to transform your business? Get in touch with our experts for a personalized consultation
          </p>
        </motion.div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { 
              icon: PhoneIcon, 
              title: 'Phone', 
              info: '+852 1234 5678',
              subtitle: 'Mon-Fri 9AM-6PM HKT'
            },
            { 
              icon: EnvelopeIcon, 
              title: 'Email', 
              info: 'hello@mkat.com',
              subtitle: '24/7 Response'
            },
            { 
              icon: MapPinIcon, 
              title: 'Offices', 
              info: 'Hong Kong • Germany • South Africa',
              subtitle: 'Global Presence'
            }
          ].map((contact, index) => (
            <motion.div
              key={contact.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6"
            >
              <div className="mx-auto w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                <contact.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{contact.title}</h3>
              <p className="text-primary font-medium mb-1">{contact.info}</p>
              <p className="text-gray-300 text-sm">{contact.subtitle}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
