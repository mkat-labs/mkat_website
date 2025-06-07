'use client';

import { motion } from 'framer-motion';
import { 
  BookOpenIcon, 
  DocumentTextIcon, 
  VideoCameraIcon, 
  ChartBarIcon 
} from '@heroicons/react/24/outline';

const resourceTypes = [
  {
    icon: BookOpenIcon,
    title: 'Industry Insights',
    count: '25+ Articles',
    description: 'Latest trends and analysis in digital transformation'
  },
  {
    icon: DocumentTextIcon,
    title: 'Whitepapers',
    count: '8 Downloads',
    description: 'In-depth technical guides and best practices'
  },
  {
    icon: VideoCameraIcon,
    title: 'Webinar Series',
    count: '12 Sessions',
    description: 'Expert-led sessions on emerging technologies'
  },
  {
    icon: ChartBarIcon,
    title: 'Case Studies',
    count: '15+ Stories',
    description: 'Real-world transformation success stories'
  }
];

export default function ResourcesHero() {
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
            Knowledge
            <span className="block text-primary">Resources</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Stay ahead with insights, best practices, and thought leadership from our experts
          </p>
        </motion.div>

        {/* Resource Types */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {resourceTypes.map((type, index) => (
            <motion.div
              key={type.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6"
            >
              <div className="mx-auto w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                <type.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{type.title}</h3>
              <div className="text-primary font-medium mb-2">{type.count}</div>
              <p className="text-gray-300 text-sm">{type.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
