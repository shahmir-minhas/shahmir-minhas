import { motion } from 'framer-motion'
import { Rocket, ExternalLink, Globe, ShoppingCart, Truck, ArrowRight, MessageCircle } from 'lucide-react'
import { featuredProduct } from '../data/services'

function FeaturedProduct() {
  const whatsappNumber = '+923078518828'
  const whatsappMessage = encodeURIComponent('Hi Shahmir! I would like to request a demo of Mizan ERP.')

  const features = [
    { icon: '📊', text: 'Multi-branch inventory' },
    { icon: '💰', text: 'Accounting + VAT invoices' },
    { icon: '🛒', text: 'POS system' },
    { icon: '👥', text: 'HR & payroll' },
    { icon: '🚚', text: 'Delivery GPS tracking' },
    { icon: '🌐', text: 'Built-in online store' },
    { icon: '🌍', text: 'English & Arabic (RTL)' },
    { icon: '✅', text: 'ZATCA GCC compliance' },
  ]

  return (
    <section id="featured" className="py-24 bg-white dark:bg-dark-surface relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-emerald/5 to-transparent"></div>

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
            className="inline-flex items-center gap-2 px-4 py-2 bg-accent-emerald/10 border border-accent-emerald/20 rounded-full text-accent-emerald text-sm font-semibold mb-6"
          >
            <Rocket size={16} />
            <span>What I'm Building</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-gradient">Mizan</span>
            <span className="text-gray-900 dark:text-white"> ERP</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {featuredProduct.description}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-start max-w-6xl mx-auto">
          {/* Left: Features & Tech */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Features Grid */}
            <div className="glass rounded-2xl p-8 border">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <span className="text-2xl">⚡</span>
                Core Features
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                    className="flex items-start gap-2"
                  >
                    <span className="text-xl">{feature.icon}</span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">{feature.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="glass rounded-2xl p-8 border">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <span className="text-2xl">🛠️</span>
                Tech Stack
              </h3>
              <div className="space-y-3">
                <div>
                  <p className="text-xs text-gray-500 mb-1">Frontend</p>
                  <p className="text-sm text-gray-700 dark:text-gray-300 font-mono">{featuredProduct.tech.frontend}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Backend</p>
                  <p className="text-sm text-gray-700 dark:text-gray-300 font-mono">{featuredProduct.tech.backend}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Deployment</p>
                  <p className="text-sm text-gray-700 dark:text-gray-300 font-mono">{featuredProduct.tech.deployment}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Links & CTAs */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Primary CTA */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="glass rounded-2xl p-8 border-2 border-primary-500/30 bg-gradient-to-br from-primary-500/5 to-transparent"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Ready to see it in action?</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Self-serve signup coming soon. Request a personalized demo.</p>
                </div>
              </div>
              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 w-full px-6 py-4 bg-gradient-to-r from-primary-500 to-accent-emerald text-white rounded-xl font-semibold shadow-lg hover:shadow-primary-500/50 transition-all"
              >
                <MessageCircle size={20} />
                <span>Request a Demo</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>

            {/* Marketing Site Links */}
            <div className="glass rounded-2xl p-6 border">
              <h4 className="text-sm font-semibold text-gray-500 mb-4 uppercase tracking-wide">Marketing Site</h4>
              <div className="space-y-3">
                <a
                  href={featuredProduct.links.marketing}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-white/5 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <Globe size={20} className="text-primary-500 dark:text-primary-400" />
                    <span className="text-gray-900 dark:text-white font-medium">Main Site</span>
                  </div>
                  <ExternalLink size={16} className="text-gray-400 dark:text-gray-500 group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors" />
                </a>

                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={featuredProduct.links.marketingSA_EN}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 p-2 rounded-lg bg-gray-50 dark:bg-white/5 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors text-sm text-gray-700 dark:text-gray-300"
                  >
                    <span>🇸🇦 EN</span>
                    <ExternalLink size={14} className="text-gray-400 dark:text-gray-500" />
                  </a>
                  <a
                    href={featuredProduct.links.marketingSA_AR}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 p-2 rounded-lg bg-gray-50 dark:bg-white/5 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors text-sm text-gray-700 dark:text-gray-300"
                  >
                    <span>🇸🇦 AR</span>
                    <ExternalLink size={14} className="text-gray-400 dark:text-gray-500" />
                  </a>
                  <a
                    href={featuredProduct.links.marketingPK_EN}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 p-2 rounded-lg bg-gray-50 dark:bg-white/5 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors text-sm text-gray-700 dark:text-gray-300 col-span-2"
                  >
                    <span>🇵🇰 EN</span>
                    <ExternalLink size={14} className="text-gray-400 dark:text-gray-500" />
                  </a>
                </div>
              </div>
            </div>

            {/* Demo Apps */}
            <div className="glass rounded-2xl p-6 border">
              <h4 className="text-sm font-semibold text-gray-500 mb-4 uppercase tracking-wide">Live Product Demos</h4>
              <div className="space-y-3">
                <a
                  href={featuredProduct.links.demoWeb}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-white/5 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors group"
                >
                  <span className="text-gray-700 dark:text-gray-300">Web App</span>
                  <ExternalLink size={16} className="text-gray-400 dark:text-gray-500 group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors" />
                </a>
                <a
                  href={featuredProduct.links.demoStore}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-white/5 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors group"
                >
                  <div className="flex items-center gap-2">
                    <ShoppingCart size={16} className="text-gray-500" />
                    <span className="text-gray-700 dark:text-gray-300">Store Demo</span>
                  </div>
                  <ExternalLink size={16} className="text-gray-400 dark:text-gray-500 group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors" />
                </a>
                <a
                  href={featuredProduct.links.demoDriver}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-white/5 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors group"
                >
                  <div className="flex items-center gap-2">
                    <Truck size={16} className="text-gray-500" />
                    <span className="text-gray-700 dark:text-gray-300">Driver App</span>
                  </div>
                  <ExternalLink size={16} className="text-gray-400 dark:text-gray-500 group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProduct
