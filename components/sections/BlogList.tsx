'use client';

import { motion } from 'framer-motion';
import { CalendarIcon, UserIcon, ArrowRightIcon, TagIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const blogPosts = [
  {
    id: 'ai-manufacturing-2025',
    title: 'The Future of AI in Manufacturing: Trends for 2025',
    excerpt: 'Exploring how artificial intelligence is revolutionizing manufacturing processes, from predictive maintenance to quality control.',
    author: 'Dr. Michael Chen',
    date: '2024-12-15',
    category: 'Manufacturing Intelligence',
    readTime: '8 min read',
    featured: true,
    tags: ['AI', 'Manufacturing', 'IoT', 'Automation']
  },
  {
    id: 'data-pipeline-best-practices',
    title: 'Building Scalable Data Pipelines: Best Practices Guide',
    excerpt: 'A comprehensive guide to designing and implementing data pipelines that scale with your business growth.',
    author: 'Sarah Williams',
    date: '2024-12-10',
    category: 'Big Data',
    readTime: '12 min read',
    featured: true,
    tags: ['Data Engineering', 'ETL', 'Cloud', 'Scalability']
  },
  {
    id: 'digital-transformation-roi',
    title: 'Measuring ROI in Digital Transformation Projects',
    excerpt: 'Learn how to set KPIs and measure the success of your digital transformation initiatives with proven methodologies.',
    author: 'James Rodriguez',
    date: '2024-12-05',
    category: 'Digital Strategy',
    readTime: '10 min read',
    featured: false,
    tags: ['ROI', 'Strategy', 'KPIs', 'Business Intelligence']
  },
  {
    id: 'microservices-architecture',
    title: 'Microservices Architecture: When and How to Implement',
    excerpt: 'Understanding when microservices make sense for your business and how to implement them effectively.',
    author: 'Anna Kim',
    date: '2024-11-28',
    category: 'Technology',
    readTime: '15 min read',
    featured: false,
    tags: ['Microservices', 'Architecture', 'DevOps', 'Scalability']
  },
  {
    id: 'cybersecurity-trends',
    title: 'Cybersecurity Trends Every Business Should Know',
    excerpt: 'Stay ahead of cyber threats with these emerging cybersecurity trends and best practices for 2025.',
    author: 'David Thompson',
    date: '2024-11-20',
    category: 'Security',
    readTime: '7 min read',
    featured: false,
    tags: ['Cybersecurity', 'Risk Management', 'Compliance', 'Best Practices']
  },
  {
    id: 'customer-data-platform',
    title: 'Building a Customer Data Platform That Actually Works',
    excerpt: 'How to create a unified view of your customers across all touchpoints and drive personalized experiences.',
    author: 'Lisa Chen',
    date: '2024-11-15',
    category: 'Customer Experience',
    readTime: '11 min read',
    featured: false,
    tags: ['CDP', 'Customer Data', 'Personalization', 'Marketing Technology']
  }
];

const categories = ['All', 'Manufacturing Intelligence', 'Big Data', 'Digital Strategy', 'Technology', 'Security', 'Customer Experience'];

export default function BlogList() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Featured Posts */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-secondary mb-12 text-center">
            Featured <span className="text-primary">Articles</span>
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {blogPosts.filter(post => post.featured).map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-48 bg-gradient-to-br from-purple-600 to-blue-600 relative">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 bg-primary rounded-full text-secondary text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-secondary mb-3 hover:text-primary transition-colors duration-300">
                    <Link href={`/resources/${post.id}`}>
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <UserIcon className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <CalendarIcon className="h-4 w-4" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <span className="text-primary text-sm font-medium">{post.readTime}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <Link
                    href={`/resources/${post.id}`}
                    className="inline-flex items-center space-x-2 text-primary font-semibold hover:text-yellow-600 transition-colors duration-300"
                  >
                    <span>Read Article</span>
                    <ArrowRightIcon className="h-4 w-4" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>

        {/* All Posts */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex justify-between items-center mb-12">
            <h3 className="text-3xl font-bold text-secondary">
              Latest Insights
            </h3>
            
            {/* Category Filter */}
            <div className="hidden md:flex space-x-2">
              {categories.slice(0, 4).map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-primary hover:bg-primary/10 rounded-lg transition-colors duration-300"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.filter(post => !post.featured).map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden"
              >
                <div className="h-40 bg-gradient-to-br from-gray-400 to-gray-600 relative">
                  <div className="absolute bottom-3 left-3">
                    <span className="px-2 py-1 bg-white/90 text-gray-800 rounded text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h4 className="text-lg font-bold text-secondary mb-2 hover:text-primary transition-colors duration-300">
                    <Link href={`/resources/${post.id}`}>
                      {post.title}
                    </Link>
                  </h4>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {post.excerpt.substring(0, 120)}...
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <span>{post.author}</span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <Link
                    href={`/resources/${post.id}`}
                    className="text-primary text-sm font-medium hover:text-yellow-600 transition-colors duration-300"
                  >
                    Read More →
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-20 p-12 bg-gradient-to-r from-purple-900 to-black rounded-2xl text-center"
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            Stay Updated with Our Latest Insights
          </h3>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Get expert insights, industry trends, and best practices delivered to your inbox monthly
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary"
            />
            <button className="bg-primary text-secondary px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors duration-300">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
