'use client';

import { motion } from 'framer-motion';
import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon, 
  ClockIcon,
  GlobeAltIcon 
} from '@heroicons/react/24/outline';

const offices = [
  {
    city: 'Hong Kong',
    address: 'Central District\nHong Kong SAR',
    phone: '+852 1234 5678',
    email: 'hk@mkat.com',
    timezone: 'GMT+8',
    hours: '9:00 AM - 6:00 PM'
  },
  {
    city: 'Germany',
    address: 'Munich\nBavaria, Germany',
    phone: '+49 89 1234 5678',
    email: 'de@mkat.com',
    timezone: 'GMT+1',
    hours: '9:00 AM - 5:00 PM'
  },
  {
    city: 'South Africa',
    address: 'Cape Town\nWestern Cape, South Africa',
    phone: '+27 21 123 4567',
    email: 'za@mkat.com',
    timezone: 'GMT+2',
    hours: '8:00 AM - 5:00 PM'
  }
];

const responsePromises = [
  {
    icon: EnvelopeIcon,
    title: 'Email Response',
    time: 'Within 4 hours',
    description: 'Initial response to your inquiry'
  },
  {
    icon: PhoneIcon,
    title: 'Phone Consultation',
    time: 'Within 24 hours',
    description: 'Detailed discussion about your project'
  },
  {
    icon: GlobeAltIcon,
    title: 'Project Proposal',
    time: 'Within 3 days',
    description: 'Comprehensive proposal and timeline'
  }
];

export default function ContactInfo() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-2xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-secondary mb-8">
            Our Global Offices
          </h2>

          {/* Offices */}
          <div className="space-y-8 mb-12">
            {offices.map((office, index) => (
              <motion.div
                key={office.city}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <MapPinIcon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-secondary mb-2">
                      {office.city}
                    </h3>
                    <div className="space-y-2 text-gray-600">
                      <div className="flex items-center space-x-2">
                        <MapPinIcon className="h-4 w-4" />
                        <span className="whitespace-pre-line">{office.address}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <PhoneIcon className="h-4 w-4" />
                        <span>{office.phone}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <EnvelopeIcon className="h-4 w-4" />
                        <span>{office.email}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <ClockIcon className="h-4 w-4" />
                        <span>{office.hours} ({office.timezone})</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Response Timeline */}
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold text-secondary mb-6">
              Our Response Timeline
            </h3>
            <div className="space-y-6">
              {responsePromises.map((promise, index) => (
                <motion.div
                  key={promise.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <promise.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary mb-1">
                      {promise.title}
                    </h4>
                    <p className="text-primary font-medium text-sm mb-1">
                      {promise.time}
                    </p>
                    <p className="text-gray-600 text-sm">
                      {promise.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 p-6 bg-gradient-to-r from-purple-900 to-black rounded-xl text-center"
          >
            <h4 className="text-xl font-bold text-white mb-2">
              Prefer to talk directly?
            </h4>
            <p className="text-gray-200 mb-4">
              Schedule a call with our team at your convenience
            </p>
            <button className="bg-primary text-secondary px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors duration-300">
              Schedule a Call
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
