import { motion } from 'framer-motion'
import { Award, Users, Briefcase, GraduationCap } from 'lucide-react'

function About() {
  const stats = [
    { icon: Briefcase, value: '5+', label: 'Years Experience', color: 'from-primary-500 to-primary-600' },
    { icon: Award, value: '15+', label: 'Major Projects', color: 'from-accent-emerald to-green-600' },
    { icon: Users, value: 'Lead', label: 'Team Roles', color: 'from-accent-violet to-purple-600' },
  ]

  return (
    <section id="about" className="py-24 bg-white dark:bg-dark-surface relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
      </div>

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
            className="inline-block px-4 py-2 bg-primary-500/10 border border-primary-500/20 rounded-full text-primary-500 dark:text-primary-400 text-sm font-semibold mb-6"
          >
            Background
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-gradient">Frontend-Focused,</span>
            <br />
            <span className="text-gray-900 dark:text-white">Full-Stack Capable</span>
          </h2>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Stats */}
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="glass rounded-2xl p-8 border border text-center group"
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                  <stat.icon size={32} className="text-gray-900 dark:text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Summary */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass rounded-2xl p-8 md:p-12 border border space-y-6"
          >
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Frontend-focused software engineer with <strong className="text-gray-900 dark:text-white">5+ years of experience</strong> building 
              scalable, user-centric web applications, including a period as <strong className="text-gray-900 dark:text-white">Lead Frontend Developer</strong>.
            </p>
            
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Deep expertise in <strong className="text-primary-400">React.js and Next.js</strong>, reusable component architecture, 
              state management (Redux Toolkit, Zustand, React Query) and REST/GraphQL API integration.
            </p>

            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Full-stack capable, with intermediate backend experience in <strong className="text-gray-900 dark:text-white">Node.js (Express, NestJS)</strong> and 
              ASP.NET Core and Laravel, working with PostgreSQL, MongoDB and Prisma.
            </p>

            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Experienced in remote Agile (Scrum) teams. Owned the frontend of a <strong className="text-primary-400">multi-product 
              ERP/HRM/POS suite</strong> end to end, led small frontend teams, and built real-time web and Electron desktop 
              applications for crypto trading, warehouse and HR domains.
            </p>

            {/* Education */}
            <div className="pt-8 border-t border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary-500/10 flex items-center justify-center flex-shrink-0">
                  <GraduationCap size={24} className="text-primary-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">BS Software Engineering</h3>
                  <p className="text-gray-600 dark:text-gray-400">University of Haripur, Pakistan</p>
                  <p className="text-gray-500 text-sm">CGPA: 3.64 • 2019</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
