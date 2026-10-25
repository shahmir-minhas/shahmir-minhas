import { motion } from 'framer-motion'
import { ExternalLink, ChevronRight, Lightbulb, Hammer, Target } from 'lucide-react'
import { projects } from '../data/projects'

function Projects() {
  const featuredProjects = projects.filter(p => p.featured)
  const otherProjects = projects.filter(p => !p.featured)

  return (
    <section id="projects" className="py-24 bg-gray-50 dark:bg-dark-bg relative overflow-hidden">
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-2 bg-primary-500/10 border border-primary-500/20 rounded-full text-primary-700 dark:text-primary-300 text-sm font-semibold mb-6"
          >
            Selected Work
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-gray-900 dark:text-white">Featured </span>
            <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Real products I've shipped for clients — from ERP suites to trading terminals
          </p>
        </motion.div>

        {/* Featured Projects - Case Study Format */}
        <div className="max-w-6xl mx-auto space-y-12 mb-20">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass rounded-2xl overflow-hidden border border hover:border-primary-500/30 transition-all"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-primary-500/10 to-accent-emerald/10 p-8 border-b border">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-3xl font-bold text-gray-900 dark:text-white">{project.name}</h3>
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                        >
                          <ExternalLink size={20} />
                        </a>
                      )}
                    </div>
                    <p className="text-primary-700 dark:text-primary-400 font-semibold mb-1">{project.role}</p>
                    <p className="text-gray-600 dark:text-gray-400">{project.description}</p>
                  </div>
                  {project.category && (
                    <div className="px-4 py-2 bg-gray-100 dark:bg-white/10 rounded-lg">
                      <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">{project.category}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Case Study Content */}
              <div className="p-8">
                {project.problem && project.approach && project.outcome && (
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    {/* Problem */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-amber-600 dark:text-yellow-400">
                        <Lightbulb size={20} />
                        <h4 className="font-bold">Problem</h4>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{project.problem}</p>
                    </div>

                    {/* Approach */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-primary-700 dark:text-primary-400">
                        <Hammer size={20} />
                        <h4 className="font-bold">Approach</h4>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{project.approach}</p>
                    </div>

                    {/* Outcome */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-emerald-700 dark:text-accent-emerald">
                        <Target size={20} />
                        <h4 className="font-bold">Outcome</h4>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{project.outcome}</p>
                    </div>
                  </div>
                )}

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-3 uppercase tracking-wide">Key Features</h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    {project.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <ChevronRight size={16} className="text-primary-600 dark:text-primary-400 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="pt-6 border-t border">
                  <p className="text-xs text-gray-600 dark:text-gray-400 mb-3 uppercase tracking-wide">Tech Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className="px-3 py-1 bg-gray-50 dark:bg-white/5 border border rounded-lg text-xs text-gray-600 dark:text-gray-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects - Compact Cards */}
        {otherProjects.length > 0 && (
          <>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">More Projects</h3>
              <p className="text-gray-600 dark:text-gray-400">Additional client work and side projects</p>
            </motion.div>

            <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <motion.div
                  key={project.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  whileHover={{ y: -5 }}
                  className="glass rounded-xl p-6 border border hover:border-primary-500/30 transition-all"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">{project.name}</h4>
                    {project.category && (
                      <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-white/10 rounded text-gray-600 dark:text-gray-400">
                        {project.category}
                      </span>
                    )}
                  </div>

                  <p className="text-sm text-primary-700 dark:text-primary-400 font-medium mb-2">{project.role}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">{project.description}</p>

                  {/* Key Features (first 3) */}
                  <div className="space-y-2 mb-4">
                    {project.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-primary-400 rounded-full mt-1.5 flex-shrink-0"></div>
                        <span className="text-xs text-gray-600 dark:text-gray-400 line-clamp-1">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech (first 4) */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 4).map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className="px-2 py-0.5 bg-gray-50 dark:bg-white/5 border border rounded text-xs text-gray-600 dark:text-gray-400"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-0.5 text-xs text-gray-600">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  )
}

export default Projects
