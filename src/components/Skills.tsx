import { motion } from 'framer-motion'
import { skillCategories } from '../data/skills'

function Skills() {
  return (
    <section id="skills" className="py-24 bg-gray-50 dark:bg-dark-bg relative overflow-hidden">
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
            Technical Skills
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-gray-900 dark:text-white">Tech </span>
            <span className="text-gradient">Stack</span>
          </h2>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            // Special sizing for first two items
            const isLarge = index === 0 || index === 3
            const gridClass = isLarge ? 'lg:col-span-2' : ''

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                className={`glass rounded-2xl p-6 md:p-8 border border hover:border-primary-500/30 transition-all ${gridClass}`}
              >
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                  <span className="w-2 h-2 bg-primary-600 dark:bg-primary-400 rounded-full"></span>
                  {category.title}
                </h3>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 + skillIndex * 0.02 }}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1.5 bg-gray-100 dark:bg-white/5 hover:bg-primary-500/10 border border hover:border-primary-500/30 rounded-lg text-sm text-gray-700 dark:text-gray-300 hover:text-primary-700 dark:hover:text-primary-400 transition-all cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Methodology Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-4xl mx-auto mt-12 text-center"
        >
          <div className="glass rounded-xl p-6 border border">
            <p className="text-gray-600 dark:text-gray-400">
              <strong className="text-gray-900 dark:text-white">Methodology:</strong> Agile (Scrum) • MVC Architecture • 
              Object-Oriented Programming • Git Workflow • Code Review • Cross-Browser Testing
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
