'use client';

import { motion } from 'framer-motion';
import { GlobeAltIcon, UserGroupIcon, LightBulbIcon, TrophyIcon } from '@heroicons/react/24/outline';

const values = [
  {
    icon: LightBulbIcon,
    title: 'Innovation',
    description: 'Pioneering solutions for tomorrow&apos;s challenges'
  },
  {
    icon: GlobeAltIcon,
    title: 'Global Perspective',
    description: 'International experience with local understanding'
  },
  {
    icon: UserGroupIcon,
    title: 'Collaboration',
    description: 'Building partnerships that drive mutual success'
  },
  {
    icon: TrophyIcon,
    title: 'Excellence',
    description: 'Delivering quality that exceeds expectations'
  }
];

export default function AboutHero() {
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
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
            About
            <span className="block text-primary">mkat</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Born from German precision, nurtured in South African innovation, 
            and scaling globally from Hong Kong
          </p>
        </motion.div>

        {/* Company Values */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6"
            >
              <div className="mb-4 mx-auto w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                <value.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
              <p className="text-gray-300">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}