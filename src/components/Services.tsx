import { motion } from 'framer-motion'
import { Rocket, LayoutDashboard, Boxes, Check, ArrowRight } from 'lucide-react'
import { services } from '../data/services'

function Services() {
  const iconMap = {
    Rocket,
    LayoutDashboard,
    Boxes,
  }

  const whatsappNumber = '+923078518828'
  const whatsappMessage = encodeURIComponent('Hi Shahmir! I would like to discuss a project.')

  return (
    <section id="services" className="py-24 bg-gray-50 dark:bg-dark-bg relative overflow-hidden">
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
            Services
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-gray-900 dark:text-white">What I Build for </span>
            <span className="text-gradient">Clients</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Three ways to work together — from landing pages to full products
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap]
            
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass rounded-2xl p-8 border hover:border-primary-500/30 transition-all group"
              >
                {/* Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-emerald/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon size={28} className="text-primary-700 dark:text-primary-400" />
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-gray-900 dark:text-white">{index + 1}</span>
                    <span className="text-gray-500 dark:text-gray-500">/3</span>
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-gradient transition-all">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Deliverables */}
                <div className="space-y-2 mb-6">
                  {service.deliverables.slice(0, 4).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <Check size={16} className="text-accent-emerald mt-1 flex-shrink-0" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">{item}</span>
                    </div>
                  ))}
                  {service.deliverables.length > 4 && (
                    <p className="text-sm text-gray-600 dark:text-gray-400 pl-6">
                      +{service.deliverables.length - 4} more
                    </p>
                  )}
                </div>

                {/* Outcome */}
                <div className="pt-6 border-t border-gray-200 dark:border-white/10">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">You Get:</p>
                  <p className="text-gray-900 dark:text-white font-medium">{service.outcome}</p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Not sure which one fits? Let's discuss your project.
          </p>
          <a
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-emerald text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-primary-500/50 transition-all"
          >
            Start a Conversation
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
