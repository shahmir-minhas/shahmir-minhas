import { motion } from 'framer-motion'
import { Briefcase, MapPin, Calendar, ArrowRight } from 'lucide-react'
import { experiences } from '../data/experience'

function Experience() {
  return (
    <section id="experience" className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
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
            Career
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 dark:from-blue-400 dark:via-purple-400 dark:to-blue-400 bg-clip-text text-transparent">
            Work Experience
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A journey of growth, innovation, and impactful contributions to the tech industry
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 hidden md:block rounded-full"></div>

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100
                }}
                className={`relative flex flex-col md:flex-row items-start ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 0.2, type: "spring", stiffness: 200 }}
                  className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-5 h-5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-white dark:border-gray-900 z-10 hidden md:block shadow-lg"
                />

                <div className={`w-full md:w-[45%] ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:ml-auto'}`}>
                  <motion.div
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-800 group"
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 + 0.1 }}
                    >
                      <div className="flex flex-col gap-3 mb-6">
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {exp.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-4 text-gray-600 dark:text-gray-400 text-sm md:text-base">
                          <div className="flex items-center gap-2">
                            <Briefcase size={18} className="text-blue-600 dark:text-blue-400" />
                            <span className="font-semibold">{exp.company}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin size={18} className="text-blue-600 dark:text-blue-400" />
                            <span>{exp.location}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar size={18} className="text-blue-600 dark:text-blue-400" />
                            <span className="font-medium">{exp.period}</span>
                            <span className="text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-full">({exp.duration})</span>
                          </div>
                        </div>
                      </div>

                      <ul className="space-y-3 mb-6">
                        {exp.description.map((item, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 + idx * 0.05 }}
                            className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                          >
                            <ArrowRight size={18} className="text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                            <span className="leading-relaxed">{item}</span>
                          </motion.li>
                        ))}
                      </ul>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15 + 0.3 }}
                        className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}
                      >
                        {exp.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={tech}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 + techIndex * 0.05 }}
                            whileHover={{ scale: 1.1, y: -2 }}
                            className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 text-blue-800 dark:text-blue-200 text-sm rounded-full font-semibold hover:shadow-lg transition-all cursor-default"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
