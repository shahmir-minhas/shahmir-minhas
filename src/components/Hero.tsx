import { motion } from 'framer-motion'
import { ArrowRight, MessageCircle, Mail, Linkedin, Github, Sparkles, ExternalLink } from 'lucide-react'

function Hero() {
  const whatsappNumber = '+923078518828'
  const whatsappMessage = encodeURIComponent('Hi Shahmir! I would like to discuss a project.')

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#f4f7fb] dark:bg-[#0b0f14]">
      {/* Light aurora / Dark charcoal mesh — CSS only */}
      <div
        className="absolute inset-0 opacity-90 dark:opacity-100"
        style={{
          backgroundImage: [
            'radial-gradient(ellipse 80% 60% at 12% 18%, rgba(14, 116, 144, 0.16), transparent 55%)',
            'radial-gradient(ellipse 70% 50% at 88% 12%, rgba(16, 185, 129, 0.14), transparent 50%)',
            'radial-gradient(ellipse 60% 55% at 78% 88%, rgba(109, 40, 217, 0.10), transparent 55%)',
            'linear-gradient(180deg, rgba(255,255,255,0.55) 0%, rgba(244,247,251,0.2) 40%, rgba(244,247,251,0.85) 100%)',
          ].join(', '),
        }}
      />
      <div
        className="absolute inset-0 hidden dark:block"
        style={{
          backgroundImage: [
            'radial-gradient(ellipse 90% 70% at 8% 10%, rgba(6, 182, 212, 0.22), transparent 50%)',
            'radial-gradient(ellipse 70% 55% at 92% 18%, rgba(16, 185, 129, 0.16), transparent 48%)',
            'radial-gradient(ellipse 65% 60% at 70% 92%, rgba(139, 92, 246, 0.16), transparent 52%)',
            'linear-gradient(180deg, rgba(11,15,20,0.2) 0%, rgba(11,15,20,0.55) 55%, rgba(11,15,20,0.92) 100%)',
          ].join(', '),
        }}
      />

      {/* Fine grid */}
      <div
        className="absolute inset-0 opacity-[0.35] dark:opacity-[0.18]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(15, 23, 42, 0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(15, 23, 42, 0.06) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
          maskImage: 'radial-gradient(ellipse 80% 70% at 50% 40%, black 35%, transparent 85%)',
        }}
      />
      <div
        className="absolute inset-0 hidden dark:block opacity-40"
        style={{
          backgroundImage:
            'linear-gradient(rgba(34, 211, 238, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(34, 211, 238, 0.08) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
          maskImage: 'radial-gradient(ellipse 80% 70% at 50% 40%, black 35%, transparent 85%)',
        }}
      />

      {/* Soft moving orbs */}
      <motion.div
        animate={{ scale: [1, 1.08, 1], x: [0, 24, 0], y: [0, -16, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-32 -right-24 h-[28rem] w-[28rem] rounded-full bg-cyan-300/40 blur-3xl dark:bg-cyan-500/20"
      />
      <motion.div
        animate={{ scale: [1.05, 1, 1.05], x: [0, -28, 0], y: [0, 20, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -bottom-36 -left-28 h-[26rem] w-[26rem] rounded-full bg-emerald-200/50 blur-3xl dark:bg-emerald-500/15"
      />
      <motion.div
        animate={{ scale: [1, 1.12, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-[42%] right-[18%] h-72 w-72 rounded-full bg-violet-200/40 blur-3xl dark:bg-violet-500/15"
      />

      <div className="container-custom relative z-10 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          {/* Photo + Name Row - Left Aligned */}
          <div className="flex flex-col md:flex-row items-start gap-6 mb-12">
            {/* Profile Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="flex-shrink-0"
            >
              <div className="relative">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500 via-accent-emerald to-primary-600 p-1"
                />
                <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full p-1 bg-white dark:bg-dark-bg">
                  <img 
                    src="/shahmir-profile.jpg" 
                    alt="Shahmir Minhas"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>
            </motion.div>

            {/* Name and Title */}
            <div className="flex-1">
              {/* Name */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold mb-3 tracking-tight"
              >
                <span className="text-gray-900 dark:text-white">Shahmir </span>
                <span className="text-gradient">Minhas</span>
              </motion.h1>

              {/* Positioning Statement */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-3 font-medium"
              >
                Senior Full-Stack Engineer
              </motion.p>

              {/* Availability Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full border border-accent-emerald/30"
              >
                <div className="w-2 h-2 bg-accent-emerald rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Open for freelance projects</span>
              </motion.div>
            </div>
          </div>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl leading-relaxed"
          >
            I ship React/Next.js + Node products that get clients paying users.
            <br />
            <span className="text-gray-600 dark:text-gray-400">5+ years • Pakistan • Remote</span>
          </motion.p>

          {/* Primary CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-4 mb-12"
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
            className="flex flex-wrap items-center gap-6"
          >
            <a
              href="https://www.linkedin.com/in/shahmir-minhas"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              <Linkedin size={20} />
              <span className="text-sm">LinkedIn</span>
            </a>

            <a
              href="https://github.com/shahmir-minhas"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              <Github size={20} />
              <span className="text-sm">GitHub</span>
            </a>

            <div className="w-px h-6 bg-gray-300 dark:bg-gray-700"></div>

            <a
              href="https://mizan-erp-site.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-emerald-700 dark:text-accent-emerald hover:text-emerald-800 dark:hover:text-emerald-300 transition-colors"
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
            className="mt-12 text-gray-600 dark:text-gray-400 text-sm"
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
          className="w-6 h-10 border-2 border-gray-400 dark:border-gray-500 rounded-full flex justify-center p-2"
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
