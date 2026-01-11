import { motion } from 'framer-motion'
import { Download, ChevronDown, Mail, Linkedin, Github, Sparkles } from 'lucide-react'

function Hero() {
  const handleDownloadCV = () => {
    // In production, this would link to an actual CV file
    window.open('#', '_blank')
  }

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-900">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
            opacity: [0.4, 0.2, 0.4],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [45, -45, 45],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl"
        />
      </div>

      {/* Floating Particles */}
      {[...Array(15)].map((_, i) => {
        const randomX = Math.random() * 100
        const randomY = Math.random() * 100
        const randomDuration = Math.random() * 10 + 10
        const randomDelay = Math.random() * 5
        
        return (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/20 dark:bg-blue-500/20 rounded-full"
            style={{
              left: `${randomX}%`,
              top: `${randomY}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: randomDuration,
              repeat: Infinity,
              delay: randomDelay,
              ease: "easeInOut"
            }}
          />
        )
      })}

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Avatar with Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.2,
              type: "spring",
              stiffness: 100
            }}
            className="mb-8"
          >
            <div className="inline-block relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 p-1"
              />
              <div className="relative w-36 h-36 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 dark:from-gray-800 dark:to-gray-900 p-1">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-5xl font-bold text-white shadow-2xl">
                  SM
                </div>
              </div>
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -top-2 -right-2"
              >
                <Sparkles className="text-yellow-400" size={32} />
              </motion.div>
            </div>
          </motion.div>

          {/* Name with Gradient */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-6xl md:text-8xl font-extrabold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent leading-tight"
          >
            Shahmir Minhas
          </motion.h1>

          {/* Role */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-blue-600"></div>
            <p className="text-2xl md:text-4xl font-bold text-gray-800 dark:text-gray-200">
              Lead Frontend Developer
            </p>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-purple-600"></div>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-12 font-medium"
          >
            Full Stack Developer • 4+ Years Experience • Remote (Pakistan)
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <motion.a
              href="mailto:minhasshahmir@hotmail.com"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all shadow-xl hover:shadow-2xl font-semibold text-lg"
              aria-label="Email"
            >
              <Mail size={22} />
              <span>Get In Touch</span>
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/shahmir-minhas/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-xl border-2 border-gray-300 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-400 transition-all shadow-xl hover:shadow-2xl font-semibold text-lg"
              aria-label="LinkedIn"
            >
              <Linkedin size={22} />
              <span>LinkedIn</span>
            </motion.a>
            <motion.a
              href="https://github.com/shahmir-minhas"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-xl border-2 border-gray-300 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-400 transition-all shadow-xl hover:shadow-2xl font-semibold text-lg"
              aria-label="GitHub"
            >
              <Github size={22} />
              <span>GitHub</span>
            </motion.a>
            <motion.button
              onClick={handleDownloadCV}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all shadow-xl hover:shadow-2xl font-semibold text-lg"
            >
              <Download size={22} />
              <span>Download CV</span>
            </motion.button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            onClick={scrollToAbout}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            aria-label="Scroll to about"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ChevronDown size={36} />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

