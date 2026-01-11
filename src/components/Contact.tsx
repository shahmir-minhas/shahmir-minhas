import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, Phone, MapPin } from 'lucide-react'

function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'minhasshahmir@hotmail.com',
      link: 'mailto:minhasshahmir@hotmail.com'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/shahmir-minhas',
      link: 'https://www.linkedin.com/in/shahmir-minhas/'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/shahmir-minhas',
      link: 'https://github.com/shahmir-minhas'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Remote (Pakistan)',
      link: null
    }
  ]

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-8">
            {contactInfo.map((info, index) => {
              const Component = info.link ? 'a' : 'div'
              const props = info.link
                ? {
                    href: info.link,
                    target: '_blank',
                    rel: 'noopener noreferrer',
                    className: 'block'
                  }
                : { className: 'block' }

              return (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Component
                    {...props}
                    className={`bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-xl transition-all ${
                      info.link ? 'cursor-pointer hover:scale-105' : ''
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <info.icon className="text-white" size={24} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                          {info.label}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 break-words">
                          {info.value}
                        </p>
                      </div>
                    </div>
                  </Component>
                </motion.div>
              )
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <a
              href="mailto:minhasshahmir@hotmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl text-lg font-semibold"
            >
              <Mail size={20} />
              <span>Send Me an Email</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact

