'use client';

import { motion } from 'framer-motion';
import { 
  BeakerIcon, 
  ChartBarIcon, 
  CogIcon, 
  GlobeAltIcon,
  AcademicCapIcon,
  BriefcaseIcon,
  UsersIcon,
  LightBulbIcon
} from '@heroicons/react/24/outline';

const expertise = [
  {
    icon: BeakerIcon,
    title: 'Machine Learning & AI',
    description: 'Deep expertise in ML algorithms, neural networks, and AI implementation',
    skills: ['TensorFlow', 'PyTorch', 'Computer Vision', 'NLP', 'Deep Learning']
  },
  {
    icon: ChartBarIcon,
    title: 'Big Data Analytics',
    description: 'Advanced data processing, analytics, and business intelligence solutions',
    skills: ['Apache Spark', 'Hadoop', 'Data Warehousing', 'ETL Pipelines', 'Real-time Analytics']
  },
  {
    icon: CogIcon,
    title: 'Manufacturing Systems',
    description: 'Industrial IoT, automation, and smart manufacturing implementations',
    skills: ['IoT Integration', 'SCADA Systems', 'Predictive Maintenance', 'Quality Control', 'Supply Chain']
  },
  {
    icon: GlobeAltIcon,
    title: 'Digital Transformation',
    description: 'End-to-end digital strategy and implementation across industries',
    skills: ['Digital Strategy', 'Process Automation', 'Cloud Migration', 'API Development', 'System Integration']
  }
];

const stats = [
  { icon: BriefcaseIcon, value: '50+', label: 'Projects Delivered' },
  { icon: UsersIcon, value: '25+', label: 'Team Members' },
  { icon: GlobeAltIcon, value: '3', label: 'Global Offices' },
  { icon: LightBulbIcon, value: '100%', label: 'Client Satisfaction' }
];

const teamHighlights = [
  {
    title: 'PhD in Machine Learning',
    description: 'Advanced research background in AI and data science'
  },
  {
    title: 'Enterprise Architecture',
    description: 'Scalable system design for Fortune 500 companies'
  },
  {
    title: 'Manufacturing Excellence',
    description: 'Industrial automation and smart factory implementations'
  },
  {
    title: 'Global Experience',
    description: 'Cross-cultural teams with international project experience'
  }
];

export default function TeamExpertise() {
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
            Team <span className="text-primary">Expertise</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            World-class experts with deep technical knowledge and proven track records in digital transformation
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="mx-auto w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
                <stat.icon className="h-8 w-8 text-secondary" />
              </div>
              <div className="text-3xl font-bold text-secondary mb-2">{stat.value}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Expertise Areas */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {expertise.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="bg-primary p-3 rounded-xl">
                  <area.icon className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-secondary ml-4">
                  {area.title}
                </h3>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {area.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {area.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-primary/10 text-secondary rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Team Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-3xl p-12 shadow-lg"
        >
          <h3 className="text-3xl font-bold text-secondary text-center mb-12">
            What Makes Our Team Special
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamHighlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <AcademicCapIcon className="h-8 w-8 text-secondary" />
                </div>
                <h4 className="text-lg font-bold text-secondary mb-3">
                  {highlight.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {highlight.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}