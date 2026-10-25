import { motion } from 'framer-motion'
import { Briefcase, MapPin, Calendar, TrendingUp } from 'lucide-react'
import { experiences } from '../data/experience'

function Experience() {
  return (
    <section id="experience" className="py-24 bg-dark-surface relative overflow-hidden">
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
            className="inline-block px-4 py-2 bg-primary-500/10 border border-primary-500/20 rounded-full text-primary-400 text-sm font-semibold mb-6"
          >
            Experience
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-white">Career </span>
            <span className="text-gradient">Journey</span>
          </h2>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${exp.period}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass rounded-2xl p-8 border border-white/10 hover:border-primary-500/20 transition-all"
            >
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary-500/20 to-accent-emerald/20 flex items-center justify-center">
                      <Briefcase size={24} className="text-primary-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                      <p className="text-lg text-primary-400 font-semibold">{exp.company}</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-gray-400 ml-15">
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 px-4 py-2 bg-accent-emerald/10 border border-accent-emerald/20 rounded-lg">
                  <Calendar size={16} className="text-accent-emerald" />
                  <span className="text-accent-emerald font-semibold text-sm">{exp.duration}</span>
                </div>
              </div>

              {/* Progression (if exists) */}
              {exp.progression && (
                <div className="mb-6 p-4 bg-primary-500/5 border border-primary-500/10 rounded-lg">
                  <div className="flex items-start gap-2">
                    <TrendingUp size={18} className="text-primary-400 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-gray-400 leading-relaxed">
                      <strong className="text-gray-300">Progression:</strong> {exp.progression}
                    </p>
                  </div>
                </div>
              )}

              {/* Description */}
              <div className="space-y-3 mb-6">
                {exp.description.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-300 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>

              {/* Technologies */}
              <div className="pt-6 border-t border-white/10">
                <p className="text-xs text-gray-500 mb-3 uppercase tracking-wide">Technologies</p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs text-gray-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
