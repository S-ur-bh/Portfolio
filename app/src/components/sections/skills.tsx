import { ScrollReveal } from '@/components/ui/scroll-reveal'
import { SkillMarquee } from '@/components/ui/skill-marquee'
import { skills } from '@/data/skills'

export function Skills() {
  // Split skills into three parts for three rows
  const skillsPerMarquee = Math.ceil(skills.length / 3);
  const skillsRow1 = skills.slice(0, skillsPerMarquee);
  const skillsRow2 = skills.slice(skillsPerMarquee, skillsPerMarquee * 2);
  const skillsRow3 = skills.slice(skillsPerMarquee * 2);

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

        {/* Skills Marquee */}
        <div className="space-y-8">
          <SkillMarquee skills={skillsRow1} speed={40} />
          <SkillMarquee skills={skillsRow2} direction="right" speed={50} />
          <SkillMarquee skills={skillsRow3} speed={45} />
        </div>
      </div>
    </section>
  )
}
