import { ScrollReveal } from '@/components/ui/scroll-reveal'
import { ExperienceCard } from '@/components/ui/experience-card'
import { experiences } from '@/data/experience'

export function Experience() {
  return (
    <section id="experience" className="py-20 md:py-32 bg-card/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground font-mono mb-4">
            Experience
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            My professional journey and key experiences in software development
          </p>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full mt-4" />
        </ScrollReveal>

        {/* Experience Timeline */}
        <div className="relative">
          {experiences.map((exp, index) => (
            <ExperienceCard
              key={exp.id}
              experience={exp}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
