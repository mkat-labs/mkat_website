'use client';

import { motion } from 'framer-motion';
import { 
  CloudIcon, 
  CpuChipIcon, 
  ShieldCheckIcon, 
  RocketLaunchIcon,
  CubeIcon,
  BoltIcon
} from '@heroicons/react/24/outline';

const techCategories = [
  {
    icon: CloudIcon,
    title: 'Cloud & Infrastructure',
    technologies: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform'],
    color: 'bg-blue-500'
  },
  {
    icon: CpuChipIcon,
    title: 'Data & AI',
    technologies: ['Python', 'TensorFlow', 'PyTorch', 'Apache Spark', 'Elasticsearch', 'PostgreSQL'],
    color: 'bg-green-500'
  },
  {
    icon: CubeIcon,
    title: 'Frontend Development',
    technologies: ['React', 'Next.js', 'TypeScript', 'TailwindCSS', 'Vue.js', 'React Native'],
    color: 'bg-purple-500'
  },
  {
    icon: BoltIcon,
    title: 'Backend & APIs',
    technologies: ['Node.js', 'Python', 'Go', 'GraphQL', 'REST', 'Microservices'],
    color: 'bg-orange-500'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Security & Compliance',
    technologies: ['OAuth', 'JWT', 'SSL/TLS', 'GDPR', 'SOC 2', 'Penetration Testing'],
    color: 'bg-red-500'
  },
  {
    icon: RocketLaunchIcon,
    title: 'DevOps & Automation',
    technologies: ['CI/CD', 'GitHub Actions', 'Jenkins', 'Monitoring', 'Logging', 'Testing'],
    color: 'bg-indigo-500'
  }
];

const principles = [
  {
    title: 'Modular Architecture',
    description: 'Scalable, maintainable systems that grow with your business'
  },
  {
    title: 'Cloud-First Approach',
    description: 'Leveraging modern cloud infrastructure for optimal performance'
  },
  {
    title: 'Security by Design',
    description: 'Built-in security measures from the ground up'
  },
  {
    title: 'Continuous Integration',
    description: 'Automated testing and deployment for reliable delivery'
  }
];

export default function TechnologyStack() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
            Modern Technology Stack
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cutting-edge tools and frameworks powering innovation and scalability
          </p>
        </motion.div>

        {/* Technology Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {techCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                <div className={`${category.color} p-3 rounded-xl`}>
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-secondary ml-4">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Architecture Principles */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-12 shadow-lg"
        >
          <h3 className="text-3xl font-bold text-secondary text-center mb-12">
            Our Architecture Principles
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {principles.map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-secondary">
                    {index + 1}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-secondary mb-3">
                  {principle.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {principle.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="gradient-purple-black rounded-2xl p-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Build Something Amazing?
            </h3>
            <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how our technology stack can transform your business vision into reality
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary text-secondary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-400 transition-colors duration-300">
                Schedule Consultation
              </button>
              <button className="border-2 border-primary text-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary hover:text-secondary transition-all duration-300">
                View Case Studies
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}