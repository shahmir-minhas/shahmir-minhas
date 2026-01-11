import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Code, X, CheckCircle, ArrowRight } from 'lucide-react'
import { projects } from '../data/projects'

function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  }

  const categoryColors: Record<string, string> = {
    'Enterprise': 'from-blue-500 to-blue-600',
    'Fintech': 'from-green-500 to-green-600',
    'Education': 'from-purple-500 to-purple-600',
    'E-commerce': 'from-orange-500 to-orange-600',
    'Business': 'from-indigo-500 to-indigo-600',
    'SaaS': 'from-pink-500 to-pink-600',
    'Desktop': 'from-gray-500 to-gray-600'
  }

  return (
    <>
      <section id="projects" className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm font-semibold mb-4"
            >
              Portfolio
            </motion.span>
            <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 dark:from-blue-400 dark:via-purple-400 dark:to-blue-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A curated selection of projects showcasing expertise in modern web development, enterprise solutions, and innovative applications
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {projects.map((project) => {
              const gradientClass = categoryColors[project.category || 'Enterprise'] || 'from-blue-500 to-blue-600'
              
              return (
                <motion.div
                  key={project.name}
                  variants={itemVariants}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer border border-gray-200 dark:border-gray-800"
                  onClick={() => setSelectedProject(project)}
                >
                  {/* Project Header with Gradient */}
                  <div className={`h-48 bg-gradient-to-br ${gradientClass} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0.3 }}
                        whileHover={{ scale: 1, opacity: 0.5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Code size={64} className="text-white" />
                      </motion.div>
                    </div>
                    {project.category && (
                      <div className="absolute top-4 right-4 px-3 py-1.5 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm rounded-full text-xs font-bold text-gray-800 dark:text-white shadow-lg">
                        {project.category}
                      </div>
                    )}
                    {project.highlights && project.highlights.length > 0 && (
                      <div className="absolute bottom-4 left-4 right-4 flex gap-2 flex-wrap">
                        {project.highlights.slice(0, 2).map((highlight, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded text-xs font-medium text-gray-800 dark:text-white"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                      {project.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3 text-sm leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 5).map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded-full font-medium hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 5 && (
                        <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded-full font-medium">
                          +{project.technologies.length - 5}
                        </span>
                      )}
                    </div>

                    <motion.button
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold text-sm transition-colors group/btn"
                    >
                      <span>View Details</span>
                      <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                    </motion.button>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
              onClick={() => setSelectedProject(null)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 50 }}
              className="fixed inset-4 md:inset-8 lg:inset-x-16 lg:inset-y-12 z-50 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
            >
              <div className={`h-64 bg-gradient-to-br ${categoryColors[selectedProject.category || 'Enterprise'] || 'from-blue-500 to-blue-600'} relative`}>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white dark:hover:bg-gray-800 transition-colors z-10"
                >
                  <X size={20} className="text-gray-800 dark:text-white" />
                </button>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Code size={80} className="text-white opacity-30" />
                </div>
                {selectedProject.category && (
                  <div className="absolute top-4 left-4 px-4 py-2 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm rounded-full text-sm font-bold text-gray-800 dark:text-white shadow-lg">
                    {selectedProject.category}
                  </div>
                )}
              </div>

              <div className="flex-1 overflow-y-auto p-6 md:p-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                  {selectedProject.name}
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  {selectedProject.description}
                </p>

                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
                    <CheckCircle size={24} className="text-blue-600 dark:text-blue-400" />
                    Key Features
                  </h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {selectedProject.features.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
                      >
                        <CheckCircle size={20} className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Technologies Used</h3>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full font-medium text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {selectedProject.highlights && selectedProject.highlights.length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Highlights</h3>
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.highlights.map((highlight, index) => (
                        <span
                          key={index}
                          className="px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900 dark:to-blue-900 text-purple-800 dark:text-purple-200 rounded-full font-semibold text-sm"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex gap-4 pt-4 border-t border-gray-200 dark:border-gray-800">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all font-semibold shadow-lg"
                  >
                    <ExternalLink size={20} />
                    <span>View Live</span>
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-6 py-3 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors font-semibold"
                  >
                    <Code size={20} />
                    <span>View Code</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Projects
