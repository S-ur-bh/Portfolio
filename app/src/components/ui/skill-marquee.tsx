import { Skill } from '@/types'
import { SkillCard } from './skill-card'

interface SkillMarqueeProps {
  skills: Skill[]
  direction?: 'left' | 'right'
  speed?: number
}

export function SkillMarquee({ skills, direction = 'left', speed = 40 }: SkillMarqueeProps) {
  const marqueeDirection = direction === 'right' ? 'reverse' : 'normal'

  return (
    <div className="w-full overflow-hidden mask-gradient">
      <div
        className="flex animate-marquee"
        style={{
          animationDuration: `${speed}s`,
          animationDirection: marqueeDirection,
        }}
      >
        <ul className="flex items-center justify-center [&_li]:mx-8">
          {skills.map((skill, index) => (
            <li key={index}>
              <SkillCard skill={skill} index={index} />
            </li>
          ))}
        </ul>
        <ul className="flex items-center justify-center [&_li]:mx-8" aria-hidden="true">
          {skills.map((skill, index) => (
            <li key={`${index}-duplicate`}>
              <SkillCard skill={skill} index={index} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}