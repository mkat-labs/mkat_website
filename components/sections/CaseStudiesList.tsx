'use client';

import { motion } from 'framer-motion';
import { ArrowRightIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const caseStudies = [
  {
    id: 'manufacturing-ai',
    title: 'Smart Manufacturing Transformation',
    client: 'Global Manufacturing Corp',
    industry: 'Manufacturing',
    challenge: 'Outdated production systems causing 30% efficiency loss and quality control issues',
    solution: 'Implemented IoT sensors, predictive analytics, and automated quality control systems',
    results: [
      '45% increase in production efficiency',
      '60% reduction in defect rates',
      '2M+ annual cost savings',
      'Real-time production monitoring'
    ],
    technologies: ['IoT', 'Machine Learning', 'Python', 'Azure', 'Power BI'],
    image: '/api/placeholder/600/400',
    gradient: 'from-blue-600 to-purple-600'
  },
  {
    id: 'ecommerce-analytics',
    title: 'E-commerce Data Intelligence Platform',
    client: 'Retail Fashion Brand',
    industry: 'E-commerce',
    challenge: 'Fragmented customer data across multiple platforms leading to poor personalization',
    solution: 'Built unified customer data platform with ML-powered recommendation engine',
    results: [
      '85% improvement in conversion rates',
      '3x increase in customer lifetime value',
      '50% boost in cross-selling success',
      'Unified 360° customer view'
    ],
    technologies: ['React', 'Node.js', 'TensorFlow', 'AWS', 'MongoDB'],
    image: '/api/placeholder/600/400',
    gradient: 'from-green-600 to-teal-600'
  },
  {
    id: 'fintech-platform',
    title: 'Digital Banking Transformation',
    client: 'Regional Bank',
    industry: 'Financial Services',
    challenge: 'Legacy banking systems unable to compete with digital-first competitors',
    solution: 'Complete digital banking platform with AI-powered fraud detection and mobile-first UX',
    results: [
      '200% increase in digital adoption',
      '90% reduction in fraud incidents',
      '4.8/5 customer satisfaction score',
      '40% reduction in operational costs'
    ],
    technologies: ['React Native', 'Microservices', 'Kubernetes', 'PostgreSQL', 'AI/ML'],
    image: '/api/placeholder/600/400',
    gradient: 'from-orange-600 to-red-600'
  }
];

export default function CaseStudiesList() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
            Featured <span className="text-primary">Case Studies</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore how we&apos;ve helped businesses transform their operations and achieve remarkable results
          </p>
        </motion.div>

        {/* Case Studies */}
        <div className="space-y-20">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-2">
                    {study.industry}
                  </span>
                  <h3 className="text-3xl font-bold text-secondary mb-2">
                    {study.title}
                  </h3>
                  <p className="text-lg text-gray-500 mb-6">{study.client}</p>
                </div>

                {/* Challenge */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-secondary mb-2">Challenge</h4>
                  <p className="text-gray-600">{study.challenge}</p>
                </div>

                {/* Solution */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-secondary mb-2">Solution</h4>
                  <p className="text-gray-600">{study.solution}</p>
                </div>

                {/* Results */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-secondary mb-3">Results</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {study.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="flex items-start space-x-2">
                        <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-secondary mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {study.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <Link
                  href="/contact"
                  className="inline-flex items-center space-x-2 text-primary font-semibold hover:text-yellow-600 transition-colors duration-300"
                >
                  <span>Discuss Your Project</span>
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </div>

              {/* Visual */}
              <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className={`aspect-video rounded-2xl bg-gradient-to-br ${study.gradient} p-8 flex items-center justify-center relative overflow-hidden`}>
                  <div className="text-center">
                    <h4 className="text-2xl font-bold text-white mb-2">{study.title}</h4>
                    <p className="text-white/80 text-lg">{study.client}</p>
                  </div>
                  <div className="absolute inset-0 bg-black/10 rounded-2xl"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-20 p-12 bg-gradient-to-r from-purple-900 to-black rounded-2xl"
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Write Your Success Story?
          </h3>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Join our growing list of satisfied clients who have transformed their businesses with our solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-primary text-secondary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-400 transition-all duration-300"
            >
              Start Your Transformation
            </Link>
            <Link
              href="/services"
              className="border-2 border-primary text-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary hover:text-secondary transition-all duration-300"
            >
              Explore Our Services
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
