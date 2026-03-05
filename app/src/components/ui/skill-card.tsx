import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface SkillCardProps {
  name: string
  category: string
  index: number
}

export function SkillCard({ name, category, index }: SkillCardProps) {
  const categoryColors: Record<string, string> = {
    languages: 'from-blue-500/20 to-cyan-500/20 border-blue-500/30',
    frontend: 'from-purple-500/20 to-pink-500/20 border-purple-500/30',
    backend: 'from-green-500/20 to-emerald-500/20 border-green-500/30',
    database: 'from-orange-500/20 to-yellow-500/20 border-orange-500/30',
    tools: 'from-red-500/20 to-orange-500/20 border-red-500/30',
    other: 'from-indigo-500/20 to-purple-500/20 border-indigo-500/30',
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -4, scale: 1.02 }}
      className={cn(
        'px-4 py-3 rounded-lg',
        'bg-gradient-to-br',
        categoryColors[category] || categoryColors.other,
        'border hover:border-accent/50',
        'transition-all duration-300',
        'flex items-center justify-center'
      )}
    >
      <span className="text-sm font-medium text-foreground">{name}</span>
    </motion.div>
  )
}
