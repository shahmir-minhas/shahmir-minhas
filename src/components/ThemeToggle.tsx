import { Sun, Moon } from 'lucide-react'
import { motion } from 'framer-motion'

interface ThemeToggleProps {
  darkMode: boolean
  setDarkMode: (dark: boolean) => void
}

function ThemeToggle({ darkMode, setDarkMode }: ThemeToggleProps) {
  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      onClick={() => setDarkMode(!darkMode)}
      className="fixed top-6 right-6 z-50 w-12 h-12 glass rounded-full flex items-center justify-center border hover:border-primary-500/30 transition-all group shadow-lg"
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{ rotate: darkMode ? 0 : 180, scale: darkMode ? 1 : 0, opacity: darkMode ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute"
      >
        <Moon size={20} className="text-primary-500 dark:text-primary-400" />
      </motion.div>
      <motion.div
        initial={false}
        animate={{ rotate: darkMode ? 180 : 0, scale: darkMode ? 0 : 1, opacity: darkMode ? 0 : 1 }}
        transition={{ duration: 0.3 }}
        className="absolute"
      >
        <Sun size={20} className="text-yellow-500" />
      </motion.div>
    </motion.button>
  )
}

export default ThemeToggle
