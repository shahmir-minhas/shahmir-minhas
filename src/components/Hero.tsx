import { motion } from 'framer-motion'
import { ArrowRight, MessageCircle, Mail, Linkedin, Github, Sparkles, ExternalLink } from 'lucide-react'

function Hero() {
  const whatsappNumber = '+923078518828'
  const whatsappMessage = encodeURIComponent('Hi Shahmir! I would like to discuss a project.')

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 dark:bg-dark-bg">
      {/* Gradient Mesh Background */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-20 dark:opacity-40"></div>
      
      {/* Animated Glow Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 right-20 w-96 h-96 bg-primary-500/20 dark:bg-primary-500/30 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-20 left-20 w-96 h-96 bg-accent-emerald/10 dark:bg-accent-emerald/20 rounded-full blur-3xl"
      />

      <div className="container-custom relative z-10 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto text-center"
        >
          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-8"
          >
            <div className="relative inline-block">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500 via-accent-emerald to-primary-600 p-1"
              />
              <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full p-1 bg-white dark:bg-dark-bg">
                <img 
                  src="/shahmir-profile.jpg" 
                  alt="Shahmir Minhas"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Availability Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 glass rounded-full border border-accent-emerald/30"
          >
            <div className="w-2 h-2 bg-accent-emerald rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Open for freelance projects</span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight"
          >
            <span className="text-gray-900 dark:text-white">Shahmir</span>
            <br />
            <span className="text-gradient">Minhas</span>
          </motion.h1>

          {/* Positioning Statement */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl lg:text-3xl text-gray-700 dark:text-gray-300 mb-4 font-medium leading-relaxed"
          >
            Senior Full-Stack Engineer
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            I ship React/Next.js + Node products that get clients paying users.
            <br />
            <span className="text-gray-500 dark:text-gray-500">5+ years • Pakistan • Remote</span>
          </motion.p>

          {/* Primary CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <motion.a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(6, 182, 212, 0.4)' }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-primary-500/50 transition-all"
            >
              <MessageCircle size={22} />
              <span>Book a Project</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>

            <motion.a
              href="mailto:minhasshahmir@hotmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 px-8 py-4 glass glass-hover rounded-xl font-semibold text-lg text-gray-700 dark:text-gray-200"
            >
              <Mail size={22} />
              <span>Email</span>
            </motion.a>
          </motion.div>

          {/* Secondary CTAs - Social & ERP */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-wrap justify-center items-center gap-6"
          >
            <a
              href="https://www.linkedin.com/in/shahmir-minhas"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
            >
              <Linkedin size={20} />
              <span className="text-sm">LinkedIn</span>
            </a>

            <a
              href="https://github.com/shahmir-minhas"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
            >
              <Github size={20} />
              <span className="text-sm">GitHub</span>
            </a>

            <div className="w-px h-6 bg-gray-300 dark:bg-gray-700"></div>

            <a
              href="https://mizan-erp-site.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-accent-emerald hover:text-accent-emerald/80 transition-colors"
            >
              <Sparkles size={20} />
              <span className="text-sm font-medium">See my ERP product</span>
              <ExternalLink size={16} />
            </a>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 text-gray-500 dark:text-gray-500 text-sm"
          >
            <p>
              <a href="tel:+923078518828" className="hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
                +92 307 851 8828
              </a>
              {' • '}
              <a href="mailto:minhasshahmir@hotmail.com" className="hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
                minhasshahmir@hotmail.com
              </a>
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-400 dark:border-gray-300 dark:border-gray-600 rounded-full flex justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0], opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-primary-500 dark:bg-primary-400 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
