import { motion } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'
import { useTheme } from '@/contexts/theme-context'
import { cn } from '@/lib/utils'

interface ThemeToggleProps {
  className?: string
  iconSize?: number
}

export function ThemeToggle({ className, iconSize = 20 }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        'relative w-10 h-10 flex items-center justify-center',
        'rounded-lg overflow-hidden',
        'bg-card border border-border',
        'hover:border-accent/50',
        'transition-all duration-300',
        className
      )}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <div className="relative w-5 h-5">
        {/* Sun Icon */}
        <motion.div
          className="absolute inset-0"
          initial={false}
          animate={{
            rotate: isDark ? 0 : 180,
            scale: isDark ? 0 : 1,
            opacity: isDark ? 0 : 1,
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <Sun className="w-full h-full text-accent" size={iconSize} />
        </motion.div>

        {/* Moon Icon */}
        <motion.div
          className="absolute inset-0"
          initial={false}
          animate={{
            rotate: isDark ? 180 : 0,
            scale: isDark ? 1 : 0,
            opacity: isDark ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <Moon className="w-full h-full text-accent" size={iconSize} />
        </motion.div>
      </div>
    </button>
  )
}