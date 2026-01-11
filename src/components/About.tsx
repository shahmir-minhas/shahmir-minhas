import { motion } from 'framer-motion'
import { Code2, Users, Zap } from 'lucide-react'

function About() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  }

  const features = [
    {
      icon: Code2,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and well-documented code following best practices'
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Building high-performance applications with optimized rendering and efficient state management'
    },
    {
      icon: Users,
      title: 'Leadership',
      description: 'Leading frontend teams, mentoring developers, and driving technical decisions'
    }
  ]

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div {...fadeInUp}>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              A dedicated software engineer with a passion for building scalable, user-centric web
              applications. Strong expertise in React.js, Next.js, modern frontend architecture,
              state management, and API integration.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Experienced in leading frontend teams, delivering pixel-perfect UI/UX, and working with
              Agile methodologies. I thrive on solving complex problems and transforming ideas into
              high-quality digital experiences.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              With 4+ years of hands-on experience, I've worked on diverse projects ranging from
              enterprise applications to modern web platforms, always focusing on code quality,
              performance, and user experience.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-3 gap-4"
          >
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-center shadow-lg">
              <div className="text-3xl font-bold text-white mb-2">4+</div>
              <div className="text-blue-100 text-sm">Years Experience</div>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-6 text-center shadow-lg">
              <div className="text-3xl font-bold text-white mb-2">50+</div>
              <div className="text-purple-100 text-sm">Projects</div>
            </div>
            <div className="bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl p-6 text-center shadow-lg">
              <div className="text-3xl font-bold text-white mb-2">100%</div>
              <div className="text-pink-100 text-sm">Commitment</div>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              {...fadeInUp}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About

