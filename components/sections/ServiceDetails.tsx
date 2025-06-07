'use client';

import { motion } from 'framer-motion';
import { 
  GlobeAltIcon, 
  ChartBarIcon, 
  CogIcon,
  ComputerDesktopIcon,
  ShareIcon,
  MegaphoneIcon,
  ClockIcon,
  ChartPieIcon,
  BeakerIcon,
  EyeIcon,
  CloudIcon,
  ShieldCheckIcon,
  CpuChipIcon,
  ArrowPathIcon
} from '@heroicons/react/24/outline';

const services = [
  {
    id: 'digital-presence',
    title: 'Digital Presence Management',
    description: 'Complete web ecosystem with integrated social media and traditional marketing coordination',
    icon: GlobeAltIcon,
    features: [
      { name: 'Web Design & Development', icon: ComputerDesktopIcon },
      { name: 'Social Media Integration & Management', icon: ShareIcon },
      { name: 'Traditional Marketing Coordination', icon: MegaphoneIcon },
      { name: 'Brand Consistency Across Platforms', icon: ClockIcon },
      { name: 'Real-time Analytics Dashboard', icon: ChartPieIcon }
    ],
    gradient: 'from-blue-600 to-purple-600'
  },
  {
    id: 'big-data',
    title: 'Big Data & Analytics Solutions',
    description: 'Advanced data architecture with machine learning and predictive analytics capabilities',
    icon: ChartBarIcon,
    features: [
      { name: 'Data Architecture & Pipeline Development', icon: CloudIcon },
      { name: 'Machine Learning Implementation', icon: BeakerIcon },
      { name: 'Predictive Analytics', icon: EyeIcon },
      { name: 'Custom Algorithm Development', icon: CpuChipIcon },
      { name: 'Data Visualization & Reporting', icon: ChartBarIcon }
    ],
    gradient: 'from-green-600 to-teal-600'
  },
  {
    id: 'manufacturing',
    title: 'Manufacturing Intelligence Systems',
    description: 'IoT integration and production optimization with quality control and supply chain analytics',
    icon: CogIcon,
    features: [
      { name: 'IoT Integration', icon: CpuChipIcon },
      { name: 'Production Optimization', icon: ArrowPathIcon },
      { name: 'Quality Control Systems', icon: ShieldCheckIcon },
      { name: 'Supply Chain Analytics', icon: ChartBarIcon },
      { name: 'Automated Workflow Management', icon: CogIcon }
    ],
    gradient: 'from-orange-600 to-red-600'
  }
];

export default function ServiceDetails() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
            Our <span className="text-primary">Service Pillars</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Three comprehensive service areas that work together to create a complete digital ecosystem for your business
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="space-y-32">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="mb-6">
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${service.gradient} mb-4`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-secondary mb-4">
                    {service.title}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Features List */}
                <div className="space-y-4">
                  {service.features.map((feature, featureIndex) => (
                    <motion.div
                      key={feature.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: featureIndex * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <div className="flex-shrink-0">
                        <feature.icon className="h-5 w-5 text-primary" />
                      </div>
                      <span className="text-gray-700 font-medium">{feature.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Visual */}
              <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className={`aspect-square rounded-2xl bg-gradient-to-br ${service.gradient} p-8 flex items-center justify-center`}>
                  <service.icon className="h-32 w-32 text-white/20" />
                  <div className="absolute inset-0 bg-black/5 rounded-2xl"></div>
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
            Ready to Transform Your Business?
          </h3>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how our integrated approach can scale your operations and drive measurable results
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-primary text-secondary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-400 transition-all duration-300"
            >
              Schedule Consultation
            </a>
            <a
              href="/case-studies"
              className="border-2 border-primary text-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary hover:text-secondary transition-all duration-300"
            >
              View Case Studies
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}