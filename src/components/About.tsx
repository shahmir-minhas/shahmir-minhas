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
      description: 'Writing maintainable, scalable, and well-documented code following best practices and industry standards',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Building high-performance applications with optimized rendering, efficient state management, and fast load times',
      color: 'from-yellow-500 to-orange-600'
    },
    {
      icon: Users,
      title: 'Leadership',
      description: 'Leading frontend teams, mentoring developers, and driving technical decisions to deliver exceptional results',
      color: 'from-purple-500 to-purple-600'
    }
  ]

  const stats = [
    { value: '4+', label: 'Years Experience', gradient: 'from-blue-500 to-blue-600' },
    { value: '50+', label: 'Projects', gradient: 'from-purple-500 to-purple-600' },
    { value: '100%', label: 'Commitment', gradient: 'from-pink-500 to-pink-600' }
  ]

  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-900">
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
            About
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 dark:from-blue-400 dark:via-purple-400 dark:to-blue-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div {...fadeInUp} className="space-y-6">
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed"
            >
              A dedicated software engineer with a passion for building scalable, user-centric web
              applications. Strong expertise in React.js, Next.js, modern frontend architecture,
              state management, and API integration.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed"
            >
              Experienced in leading frontend teams, delivering pixel-perfect UI/UX, and working with
              Agile methodologies. I thrive on solving complex problems and transforming ideas into
              high-quality digital experiences.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed"
            >
              With 4+ years of hands-on experience, I've worked on diverse projects ranging from
              enterprise applications to modern web platforms, always focusing on code quality,
              performance, and user experience.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-3 gap-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.05 }}
                className={`bg-gradient-to-br ${stat.gradient} rounded-2xl p-6 text-center shadow-xl hover:shadow-2xl transition-all cursor-default`}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.2, type: "spring", stiffness: 200 }}
                  className="text-4xl font-bold text-white mb-2"
                >
                  {stat.value}
                </motion.div>
                <div className="text-white/90 text-sm font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 hover:shadow-xl transition-all border border-gray-200 dark:border-gray-700 group"
            >
              <motion.div
                whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                transition={{ duration: 0.5 }}
                className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6 shadow-lg`}
              >
                <feature.icon className="text-white" size={32} />
              </motion.div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About
