import { Github, Linkedin, Code2, ExternalLink } from 'lucide-react'
import { cn } from '@/lib/utils'

interface SocialLinksProps {
  className?: string
  iconSize?: number
}

const socials = [
  {
    name: 'GitHub',
    url: 'https://github.com',
    icon: Github,
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com',
    icon: Linkedin,
  },
  {
    name: 'LeetCode',
    url: 'https://leetcode.com',
    icon: Code2,
  },
  {
    name: 'CodeChef',
    url: 'https://codechef.com',
    icon: ExternalLink,
  },
]

export function SocialLinks({ className, iconSize = 20 }: SocialLinksProps) {
  return (
    <div className={cn('flex items-center gap-4', className)}>
      {socials.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            'text-muted hover:text-accent',
            'transition-all duration-300',
            'hover:scale-110'
          )}
          title={social.name}
        >
          <social.icon size={iconSize} />
        </a>
      ))}
    </div>
  )
}
