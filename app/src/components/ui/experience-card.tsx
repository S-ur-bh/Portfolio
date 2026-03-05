import { motion } from 'framer-motion'
import { Briefcase, MapPin, Calendar } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { Experience } from '@/types'

interface ExperienceCardProps {
  experience: Experience
  index: number
}

export function ExperienceCard({ experience, index }: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className={cn(
        'relative pl-8 pb-12',
        'border-l-2 border-border',
        'last:pb-0',
        'group'
      )}
    >
      {/* Timeline Dot */}
      <div className={cn(
        'absolute -left-[9px] top-0',
        'w-4 h-4 rounded-full',
        'bg-background border-2 border-accent',
        'group-hover:scale-125 group-hover:glow-accent',
        'transition-all duration-300'
      )} />

      {/* Card Content */}
      <div className={cn(
        'p-6 rounded-xl',
        'bg-card border border-border',
        'group-hover:border-accent/50',
        'transition-all duration-300'
      )}>
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
          <div>
            <h3 className="text-xl font-semibold text-foreground font-mono">
              {experience.role}
            </h3>
            <div className="flex items-center gap-2 text-accent mt-1">
              <Briefcase className="w-4 h-4" />
              <span className="font-medium">{experience.company}</span>
            </div>
          </div>
          <div className="flex flex-col items-start sm:items-end gap-1 text-sm text-muted">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{experience.duration}</span>
            </div>
            {experience.location && (
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                <span>{experience.location}</span>
              </div>
            )}
          </div>
        </div>

        {/* Description */}
        <ul className="space-y-2 mb-4">
          {experience.description.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-muted">
              <span className="text-accent mt-1.5">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {/* Tech Stack */}
        {experience.techStack && (
          <div className="flex flex-wrap gap-2">
            {experience.techStack.map((tech) => (
              <span
                key={tech}
                className={cn(
                  'px-3 py-1 text-xs',
                  'bg-card-hover border border-border rounded-full',
                  'text-muted font-mono'
                )}
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  )
}
