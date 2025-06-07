'use client';

import { motion } from 'framer-motion';
import { MapPinIcon, GlobeAltIcon } from '@heroicons/react/24/outline';

const locations = [
  {
    country: 'Germany',
    city: 'Heritage & Innovation',
    description: 'German engineering excellence meets cutting-edge technology',
    coordinates: { x: '52%', y: '25%' },
    heritage: true
  },
  {
    country: 'South Africa',
    city: 'Roots & Growth',
    description: 'Our foundational base with emerging market expertise',
    coordinates: { x: '55%', y: '75%' },
    heritage: true
  },
  {
    country: 'Hong Kong',
    city: 'Asia-Pacific Hub',
    description: 'Strategic gateway to Asian markets and innovation',
    coordinates: { x: '85%', y: '45%' },
    active: true
  }
];

const stats = [
  { value: '15+', label: 'Countries Served' },
  { value: '3', label: 'Global Offices' },
  { value: '24/7', label: 'Support Coverage' },
  { value: '50+', label: 'Projects Delivered' }
];

export default function GlobalPresence() {
  return (
    <section className="py-24 gradient-purple-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Global Reach, Local Expertise
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            From German heritage to South African roots, now serving the world from our Hong Kong base
          </p>
        </motion.div>

        {/* Interactive World Map */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative mb-20"
        >
          <div className="bg-gray-800/50 rounded-3xl p-8 backdrop-blur-sm border border-gray-700">
            <div className="relative h-96 bg-gray-900/50 rounded-2xl overflow-hidden">
              {/* Simplified world map background */}
              <div className="absolute inset-0 opacity-30">
                <svg viewBox="0 0 800 400" className="w-full h-full">
                  <path
                    d="M150,100 L200,80 L280,90 L350,85 L400,95 L450,90 L500,100 L550,95 L600,105 L650,100 L150,100"
                    fill="currentColor"
                    className="text-gray-600"
                  />
                  <path
                    d="M100,150 L180,140 L250,145 L320,140 L380,150 L440,145 L500,155 L570,150 L640,160 L700,155 L100,150"
                    fill="currentColor"
                    className="text-gray-600"
                  />
                  <path
                    d="M120,200 L200,190 L270,195 L340,190 L400,200 L460,195 L520,205 L580,200 L650,210 L120,200"
                    fill="currentColor"
                    className="text-gray-600"
                  />
                </svg>
              </div>

              {/* Location markers */}
              {locations.map((location, index) => (
                <motion.div
                  key={location.country}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="absolute"
                  style={{ 
                    left: location.coordinates.x, 
                    top: location.coordinates.y,
                    transform: 'translate(-50%, -50%)'
                  }}
                >
                  <div className="group relative">
                    <motion.div
                      className={`w-4 h-4 rounded-full ${
                        location.active ? 'bg-primary' : 'bg-purple-400'
                      } shadow-lg cursor-pointer`}
                      whileHover={{ scale: 1.2 }}
                      animate={{
                        scale: location.active ? [1, 1.2, 1] : 1,
                      }}
                      transition={{
                        duration: 2,
                        repeat: location.active ? Infinity : 0,
                      }}
                    />
                    
                    {/* Tooltip */}
                    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <div className="bg-white text-secondary p-3 rounded-lg shadow-xl whitespace-nowrap">
                        <p className="font-semibold">{location.country}</p>
                        <p className="text-sm">{location.city}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Location Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {locations.map((location, index) => (
            <motion.div
              key={location.country}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 ${
                location.active ? 'bg-primary text-secondary' : 'bg-purple-600 text-white'
              }`}>
                {location.heritage ? (
                  <GlobeAltIcon className="h-8 w-8" />
                ) : (
                  <MapPinIcon className="h-8 w-8" />
                )}
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{location.country}</h3>
              <p className="text-primary font-semibold mb-3">{location.city}</p>
              <p className="text-gray-300">{location.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <div key={stat.label} className="text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold text-primary mb-2"
              >
                {stat.value}
              </motion.div>
              <p className="text-gray-300 font-semibold">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}