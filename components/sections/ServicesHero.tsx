'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ServicesHero() {
  return (
    <section className="relative py-24 gradient-purple-black overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-black/30" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Comprehensive
            <span className="block text-primary">Digital Solutions</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            End-to-end services that transform your business from every angle - 
            digital presence, data intelligence, and manufacturing excellence
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <Link
              href="/contact"
              className="bg-primary text-secondary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-400 transition-all duration-300"
            >
              Schedule Consultation
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}