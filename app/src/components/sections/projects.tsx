import { ScrollReveal } from '@/components/ui/scroll-reveal'
import { ProjectCard } from '@/components/ui/project-card'
import { projects } from '@/data/projects'

export function Projects() {
  // Separate featured project from others
  const featuredProject = projects.find(p => p.id === 'travelling-postman')
  const otherProjects = projects.filter(p => p.id !== 'travelling-postman')

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

        {/* Desktop Layout: Featured full width, others side by side */}
        <div className="hidden md:grid grid-cols-2 gap-6">
          {/* Featured Project - Full Width */}
          {featuredProject && (
            <div className="col-span-2">
              <ProjectCard
                project={featuredProject}
                index={0}
              />
            </div>
          )}
          
          {/* Other Projects - Side by Side */}
          {otherProjects.map((project, index) => (
            <div key={project.id} className="col-span-1">
              <ProjectCard
                project={project}
                index={index + 1}
              />
            </div>
          ))}
        </div>

        {/* Mobile Layout: Horizontal Scroll */}
        <div className="md:hidden">
          <div className="flex gap-6 overflow-x-auto pb-4 -mx-4 px-4 snap-x snap-mandatory scrollbar-hide">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="flex-shrink-0 w-[85vw] snap-start"
              >
                <ProjectCard
                  project={project}
                  index={index}
                />
              </div>
            ))}
          </div>
          
          {/* Scroll Indicator */}
          <div className="flex justify-center mt-4 gap-1">
            {projects.map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 rounded-full bg-muted"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}