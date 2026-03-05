import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { Project } from '@/types'

interface ProjectCardProps {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={cn(
        'group relative',
        'bg-card border border-border rounded-xl',
        'overflow-hidden',
        'hover:border-accent/50',
        'transition-all duration-500',
        project.span || 'col-span-1'
      )}
    >
      {/* Image */}
      {project.image && (
        <div className="relative h-48 overflow-hidden">
          <div className={cn(
            'absolute inset-0',
            'bg-gradient-to-br from-accent/20 to-accent-secondary/20',
            'group-hover:scale-105',
            'transition-transform duration-500'
          )} />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-6xl font-bold text-accent/20 font-mono">
              {project.title.charAt(0)}
            </div>
          </div>
          {/* Overlay */}
          <div className={cn(
            'absolute inset-0',
            'bg-gradient-to-t from-card via-transparent to-transparent',
            'opacity-60'
          )} />
        </div>
      )}

      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-xl font-semibold text-foreground font-mono mb-2 group-hover:text-accent transition-colors">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-muted text-sm mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className={cn(
                'px-2 py-1 text-xs',
                'bg-card-hover border border-border rounded',
                'text-muted font-mono'
              )}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-4">
          {project.codeUrl && (
            <a
              href={project.codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'flex items-center gap-2 text-sm text-muted',
                'hover:text-accent transition-colors'
              )}
            >
              <Github className="w-4 h-4" />
              <span>Code</span>
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'flex items-center gap-2 text-sm text-muted',
                'hover:text-accent transition-colors'
              )}
            >
              <ExternalLink className="w-4 h-4" />
              <span>Demo</span>
            </a>
          )}
        </div>
      </div>

      {/* Featured Badge */}
      {project.featured && (
        <div className={cn(
          'absolute top-4 right-4',
          'px-3 py-1 text-xs',
          'bg-accent/20 border border-accent/50 rounded-full',
          'text-accent font-mono'
        )}>
          Featured
        </div>
      )}
    </motion.div>
  )
}
