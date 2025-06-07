'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  ComputerDesktopIcon, 
  ChartBarIcon, 
  CogIcon,
  ArrowRightIcon 
} from '@heroicons/react/24/outline';

const services = [
  {
    icon: ComputerDesktopIcon,
    title: 'Digital Presence Management',
    description: 'Complete web ecosystem with seamless social media integration, traditional marketing coordination, and real-time analytics.',
    features: [
      'Web Design & Development',
      'Social Media Integration',
      'Brand Consistency',
      'Real-time Analytics Dashboard'
    ],
    href: '/services/digital-presence'
  },
  {
    icon: ChartBarIcon,
    title: 'Big Data & Analytics Solutions',
    description: 'Transform your data into actionable insights with machine learning, predictive analytics, and custom algorithms.',
    features: [
      'Data Architecture & Pipelines',
      'Machine Learning Implementation',
      'Predictive Analytics',
      'Custom Algorithm Development'
    ],
    href: '/services/big-data'
  },
  {
    icon: CogIcon,
    title: 'Manufacturing Intelligence Systems',
    description: 'Optimize production with IoT integration, quality control systems, and automated workflow management.',
    features: [
      'IoT Integration',
      'Production Optimization',
      'Quality Control Systems',
      'Supply Chain Analytics'
    ],
    href: '/services/manufacturing'
  }
];

export default function Services() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
            Three Pillars of Digital Excellence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every aspect of your business, digitally connected and optimized for growth
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-gray-50 rounded-2xl p-8 h-full hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-primary">
                <div className="flex items-center mb-6">
                  <div className="bg-primary p-4 rounded-xl">
                    <service.icon className="h-8 w-8 text-secondary" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-secondary mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  href={service.href}
                  className="inline-flex items-center text-primary font-semibold hover:text-secondary transition-colors duration-300 group-hover:gap-2"
                >
                  Learn More
                  <ArrowRightIcon className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link
            href="/services"
            className="bg-secondary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-800 transition-colors duration-300 inline-flex items-center gap-2"
          >
            Explore All Services
            <ArrowRightIcon className="h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}