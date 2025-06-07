'use client';

import { motion } from 'framer-motion';
import { ChartBarIcon, TrophyIcon, RocketLaunchIcon } from '@heroicons/react/24/outline';

export default function CaseStudiesHero() {
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
            Success
            <span className="block text-primary">Stories</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Real transformations, measurable results, and lasting partnerships across industries
          </p>
        </motion.div>

        {/* Key Metrics */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: ChartBarIcon, metric: '300%', label: 'Average ROI Increase' },
            { icon: TrophyIcon, metric: '98%', label: 'Client Satisfaction' },
            { icon: RocketLaunchIcon, metric: '50+', label: 'Projects Delivered' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6"
            >
              <div className="mx-auto w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                <stat.icon className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.metric}</div>
              <div className="text-gray-300">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
