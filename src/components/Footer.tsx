import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, MessageCircle } from 'lucide-react'

function Footer() {
  const currentYear = new Date().getFullYear()
  const whatsappNumber = '+923078518828'

  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ]

  const socialLinks = [
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      href: `https://wa.me/${whatsappNumber}`,
      color: 'hover:text-accent-emerald'
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:minhasshahmir@hotmail.com',
      color: 'hover:text-primary-500 dark:hover:text-primary-400'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/shahmir-minhas',
      color: 'hover:text-primary-500 dark:hover:text-primary-400'
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/shahmir-minhas',
      color: 'hover:text-gray-800 dark:hover:text-gray-200'
    },
  ]

  return (
    <footer className="bg-gray-100 dark:bg-dark-elevated border-t border py-12">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-gradient">Shahmir Minhas</span>
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              Senior Full-Stack Engineer specializing in React/Next.js products that get clients paying users.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <div className="w-2 h-2 bg-accent-emerald rounded-full animate-pulse"></div>
              <span>Open for freelance projects</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h4>
            <nav className="space-y-3">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </motion.div>

          {/* Connect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Connect</h4>
            <div className="space-y-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.label !== 'Email' ? '_blank' : undefined}
                  rel={social.label !== 'Email' ? 'noopener noreferrer' : undefined}
                  className={`flex items-center gap-3 text-gray-600 dark:text-gray-400 ${social.color} transition-colors group`}
                >
                  <social.icon size={20} />
                  <span>{social.label}</span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pt-8 border-t border text-center"
        >
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            © {currentYear} Shahmir Minhas. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
