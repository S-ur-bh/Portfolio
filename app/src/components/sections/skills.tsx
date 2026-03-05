import { ScrollReveal } from '@/components/ui/scroll-reveal'
import { SkillCard } from '@/components/ui/skill-card'
import { skills, skillCategories } from '@/data/skills'
import { cn } from '@/lib/utils'

export function Skills() {
  return (
    <section id="skills" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground font-mono mb-4">
            My Skills
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
        </ScrollReveal>

        {/* Skills by Category */}
        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => {
            const categorySkills = skills.filter((s) => s.category === category.id)
            if (categorySkills.length === 0) return null

            return (
              <ScrollReveal key={category.id} delay={categoryIndex * 0.1}>
                <div>
                  {/* Category Header */}
                  <h3 className={cn(
                    'text-lg font-semibold mb-4 font-mono',
                    'bg-gradient-to-r',
                    category.color,
                    'bg-clip-text text-transparent'
                  )}>
                    {category.label}
                  </h3>

                  {/* Skills Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                    {categorySkills.map((skill, index) => (
                      <SkillCard
                        key={skill.name}
                        name={skill.name}
                        category={skill.category}
                        index={index}
                      />
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
