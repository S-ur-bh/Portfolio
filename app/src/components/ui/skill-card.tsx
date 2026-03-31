import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import type { Skill } from '@/types'
import { ElementType } from 'react'

interface SkillCardProps {
  skill: Skill
  index: number
}

export function SkillCard({ skill, index }: SkillCardProps) {
  const IconComponent = skill.icon as ElementType | undefined

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -4, scale: 1.02 }}
      className={cn(
        'p-2',
        'transition-all duration-300',
        'flex flex-col items-center justify-center gap-1',
        'min-w-[80px]'
      )}
    >
      {IconComponent && (
        <IconComponent className="w-7 h-7 text-foreground" />
      )}
      <span className="text-sm font-medium text-muted text-center whitespace-nowrap">{skill.name}</span>
    </motion.div>
  )
}