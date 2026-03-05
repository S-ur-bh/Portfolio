import { useTypewriter } from '@/hooks/use-typewriter'
import { cn } from '@/lib/utils'

interface TypewriterProps {
  words: string[]
  className?: string
  cursorClassName?: string
  typeSpeed?: number
  deleteSpeed?: number
  pauseDuration?: number
}

export function Typewriter({
  words,
  className,
  cursorClassName,
  typeSpeed = 100,
  deleteSpeed = 50,
  pauseDuration = 2000,
}: TypewriterProps) {
  const { text, isDeleting } = useTypewriter({
    words,
    typeSpeed,
    deleteSpeed,
    pauseDuration,
  })

  return (
    <span className={cn('inline-flex items-center', className)}>
      <span>{text}</span>
      <span
        className={cn(
          'ml-1 inline-block w-[3px] h-[1em] bg-accent animate-pulse',
          cursorClassName
        )}
        style={{
          animationDuration: isDeleting ? '0.1s' : '0.5s',
        }}
      />
    </span>
  )
}
