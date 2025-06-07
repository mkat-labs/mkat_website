'use client';

import { motion } from 'framer-motion';
import { MapPinIcon, RocketLaunchIcon, BuildingOfficeIcon } from '@heroicons/react/24/outline';

const timeline = [
  {
    year: '2018',
    location: 'Germany',
    icon: MapPinIcon,
    title: 'Founded with German Precision',
    description: 'Started with a vision to combine German engineering excellence with modern digital solutions',
    gradient: 'from-red-500 to-yellow-500'
  },
  {
    year: '2020',
    location: 'South Africa',
    icon: RocketLaunchIcon,
    title: 'South African Innovation',
    description: 'Expanded operations to leverage South African talent and innovation ecosystem',
    gradient: 'from-green-500 to-blue-500'
  },
  {
    year: '2023',
    location: 'Hong Kong',
    icon: BuildingOfficeIcon,
    title: 'Global Scaling from Hong Kong',
    description: 'Established Asian headquarters to serve global markets and scale internationally',
    gradient: 'from-purple-500 to-pink-500'
  }
];

export default function CompanyStory() {
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
            Our <span className="text-primary">Journey</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From German roots to global reach - the story of how we became a trusted digital transformation partner
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-purple-500 to-primary"></div>
          
          {timeline.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`relative flex items-center mb-20 ${
                index % 2 === 0 ? 'justify-start' : 'justify-end'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary rounded-full border-4 border-white shadow-lg z-10"></div>
              
              {/* Content card */}
              <div className={`w-full max-w-lg ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-primary">
                  <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${item.gradient}`}>
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary">{item.year}</div>
                      <div className="text-sm text-gray-500 font-medium">{item.location}</div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-secondary mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-20 p-12 bg-gradient-to-r from-purple-900 to-black rounded-2xl"
        >
          <h3 className="text-3xl font-bold text-white mb-6">Our Mission</h3>
          <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            To empower businesses worldwide with complete digital ecosystems that seamlessly integrate 
            every aspect of their operations, from digital presence to data intelligence and manufacturing excellence.
          </p>
        </motion.div>
      </div>
    </section>
  );
}