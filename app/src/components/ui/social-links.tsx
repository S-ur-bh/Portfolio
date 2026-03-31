import { cn } from '@/lib/utils'
import type { SocialLink } from '@/types'

interface SocialLinksProps {
  links: SocialLink[]
  className?: string
  linkClassName?: string // Added linkClassName prop
  iconSize?: number
}

export function SocialLinks({ links, className, linkClassName, iconSize = 20 }: SocialLinksProps) {
  return (
    <div className={cn('flex items-center gap-4', className)}>
      {links.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            'text-muted hover:text-accent',
            'transition-all duration-300',
            'hover:scale-110',
            linkClassName // Applied linkClassName here
          )}
          title={social.name}
        >
          <social.icon size={iconSize} />
        </a>
      ))}
    </div>
  )
}
