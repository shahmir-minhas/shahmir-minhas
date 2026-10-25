import { motion } from 'framer-motion'
import { Mail, MessageCircle, Linkedin, Github, MapPin, ArrowRight } from 'lucide-react'

function Contact() {
  const whatsappNumber = '+923078518828'
  const whatsappMessage = encodeURIComponent('Hi Shahmir! I would like to discuss a project.')

  const contactMethods = [
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: '+92 307 851 8828',
      href: `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`,
      primary: true,
      description: 'Fastest response'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'minhasshahmir@hotmail.com',
      href: 'mailto:minhasshahmir@hotmail.com',
      primary: true,
      description: 'For detailed inquiries'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'shahmir-minhas',
      href: 'https://www.linkedin.com/in/shahmir-minhas',
      primary: false,
      description: 'Professional network'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'shahmir-minhas',
      href: 'https://github.com/shahmir-minhas',
      primary: false,
      description: 'Code & projects'
    },
  ]

  return (
    <section id="contact" className="py-24 bg-dark-surface relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-accent-emerald/5"></div>

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
            Get In Touch
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">Let's Build </span>
            <span className="text-gradient">Something Great</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-4">
            Have a project in mind? Need a React/Next.js developer?
          </p>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            <MapPin className="inline-block mr-2" size={18} />
            Available for remote work • Pakistan timezone (UTC+5)
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Primary Contact Methods */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid md:grid-cols-2 gap-6 mb-8"
          >
            {contactMethods.filter(m => m.primary).map((method, index) => (
              <motion.a
                key={method.label}
                href={method.href}
                target={method.label !== 'Email' ? '_blank' : undefined}
                rel={method.label !== 'Email' ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group glass rounded-2xl p-8 border-2 border-primary-500/30 hover:border-primary-500/50 transition-all bg-gradient-to-br from-primary-500/5 to-transparent"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-emerald/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <method.icon size={28} className="text-primary-400" />
                  </div>
                  <ArrowRight size={20} className="text-gray-600 group-hover:text-primary-400 group-hover:translate-x-1 transition-all" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{method.label}</h3>
                <p className="text-primary-400 font-mono text-sm mb-2">{method.value}</p>
                <p className="text-gray-500 text-sm">{method.description}</p>
              </motion.a>
            ))}
          </motion.div>

          {/* Secondary Contact Methods */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass rounded-2xl p-8 border border-white/10"
          >
            <h3 className="text-lg font-semibold text-gray-400 mb-6 text-center">Also Find Me On</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {contactMethods.filter(m => !m.primary).map((method) => (
                <a
                  key={method.label}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary-500/30 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-500/10 to-transparent flex items-center justify-center">
                    <method.icon size={20} className="text-gray-400 group-hover:text-primary-400 transition-colors" />
                  </div>
                  <div className="flex-1">
                    <p className="text-white font-medium mb-0.5">{method.label}</p>
                    <p className="text-gray-500 text-sm">{method.description}</p>
                  </div>
                  <ArrowRight size={16} className="text-gray-600 group-hover:text-primary-400 group-hover:translate-x-1 transition-all" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Availability Status */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 text-center"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 glass rounded-full border border-accent-emerald/30">
              <div className="w-3 h-3 bg-accent-emerald rounded-full animate-pulse"></div>
              <span className="text-gray-300 font-medium">Currently accepting new projects</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
