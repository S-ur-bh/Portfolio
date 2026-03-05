import { ScrollReveal } from '@/components/ui/scroll-reveal'
import { ProjectCard } from '@/components/ui/project-card'
import { projects } from '@/data/projects'
import { cn } from '@/lib/utils'

export function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground font-mono mb-4">
            Projects
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            A showcase of my technical projects and creative solutions
          </p>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full mt-4" />
        </ScrollReveal>

        {/* Bento Grid */}
        <div className={cn(
          'grid grid-cols-1 md:grid-cols-3 gap-6',
          'auto-rows-fr'
        )}>
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
