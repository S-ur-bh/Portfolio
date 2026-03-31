import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { Project } from '@/types'

// Import screenshots through Vite's asset handling
import travellingPostmanImg from '/TravellingPostman.png'
import snapgramImg from '/Snapgram.png'
import portfolioImg from '/Portfolio.png'

interface ProjectCardProps {
  project: Project
  index: number
}

// Map project IDs to their imported screenshot images
const SCREENSHOT_IMAGES: Record<string, string> = {
  'travelling-postman': travellingPostmanImg,
  'snapgram': snapgramImg,
  'portfolio': portfolioImg,
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const hasDemoUrl = project.demoUrl && project.demoUrl !== '#'
  const screenshotImage = SCREENSHOT_IMAGES[project.id]

  const cardContent = (
    <>
      {/* Preview Image Section */}
      <div className="relative h-48 overflow-hidden flex-shrink-0">
        {/* Screenshot image as background */}
        {screenshotImage ? (
          <>
            <img
              src={screenshotImage}
              alt={`${project.title} preview`}
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
            {/* Subtle bottom gradient for text blend */}
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-card/70 to-transparent" />
          </>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-card">
            <div className="text-6xl font-bold text-accent/20 font-mono">
              {project.title.charAt(0)}
            </div>
          </div>
        )}

        {/* Hover indicator */}
        {hasDemoUrl && (
          <div className={cn(
            'absolute inset-0 flex items-center justify-center',
            'bg-black/50 opacity-0 group-hover:opacity-100',
            'transition-opacity duration-300'
          )}>
            <div className="flex items-center gap-2 text-white font-medium">
              <ExternalLink className="w-5 h-5" />
              <span>View Project</span>
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex-1">
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
          {project.codeUrl && project.codeUrl !== '#' && (
            <a
              href={project.codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'flex items-center gap-2 text-sm text-muted',
                'hover:text-accent transition-colors',
                'z-10'
              )}
              onClick={(e) => e.stopPropagation()}
            >
              <Github className="w-4 h-4" />
              <span>Code</span>
            </a>
          )}
          {project.demoUrl && project.demoUrl !== '#' && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'flex items-center gap-2 text-sm text-muted',
                'hover:text-accent transition-colors',
                'z-10'
              )}
              onClick={(e) => e.stopPropagation()}
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
          'text-accent font-mono',
          'z-10'
        )}>
          Featured
        </div>
      )}
    </>
  )

  // If project has a demo URL, make the entire card clickable
  if (hasDemoUrl) {
    return (
      <motion.a
        href={project.demoUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className={cn(
          'group relative flex flex-col cursor-pointer',
          'bg-card border border-border rounded-xl',
          'overflow-hidden',
          'hover:border-accent/50',
          'transition-all duration-500',
          'h-full',
          project.span || 'col-span-1'
        )}
      >
        {cardContent}
      </motion.a>
    )
  }

  // If no demo URL, render as a regular div
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={cn(
        'group relative flex flex-col',
        'bg-card border border-border rounded-xl',
        'overflow-hidden',
        'hover:border-accent/50',
        'transition-all duration-500',
        'h-full',
        project.span || 'col-span-1'
      )}
    >
      {cardContent}
    </motion.div>
  )
}