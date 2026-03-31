import { motion } from 'framer-motion'
import { MapPin, ChevronDown, Github, Linkedin, Code2 } from 'lucide-react'
import { Typewriter } from '@/components/ui/typewriter'
import { SocialLinks } from '@/components/ui/social-links' // Import SocialLinks
import { cn } from '@/lib/utils'

const socials = [
  { name: 'GitHub', url: 'https://github.com', icon: Github },
  { name: 'LinkedIn', url: 'https://linkedin.com', icon: Linkedin },
  { name: 'LeetCode', url: 'https://leetcode.com', icon: Code2 },
]

export function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="about"
      className={cn(
        'min-h-screen flex items-center justify-center',
        'relative overflow-hidden',
        'pt-16'
      )}
    >
      {/* Background Gradient */}
      <div className={cn(
        'absolute inset-0',
        'bg-gradient-to-br from-background via-card/50 to-background'
      )} />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 255, 157, 0.5) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(0, 255, 157, 0.5) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Glow Effect */}
      <div className={cn(
        'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
        'w-[600px] h-[600px]',
        'bg-accent/5 rounded-full blur-[150px]'
      )} />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Pre-title */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-muted font-mono text-sm mb-4"
        >
          Hello, I&apos;m
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4 font-mono"
        >
          Saurabh Verma
        </motion.h1>

        {/* Typewriter Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl sm:text-2xl md:text-3xl text-accent font-mono mb-6 h-10"
        >
          <Typewriter
            words={['Backend Engineer', 'Systems Architect', 'Full Stack Developer']}
            typeSpeed={80}
            deleteSpeed={40}
            pauseDuration={2000}
          />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-muted text-lg max-w-2xl mx-auto mb-8"
        >
          A passionate software engineer specializing in backend systems, distributed
          architectures, and full-stack development. I build scalable solutions that
          power real-world applications.
        </motion.p>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex items-center justify-center gap-2 text-muted mb-8"
        >
          <MapPin className="w-4 h-4 text-accent" />
          <span>Pune, Maharashtra, India</span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <button
            onClick={scrollToProjects}
            className={cn(
              'px-8 py-3 text-sm font-mono',
              'border border-accent text-accent rounded-lg',
              'hover:bg-accent hover:text-background',
              'transition-all duration-300',
              'w-full sm:w-auto'
            )}
          >
            View Projects
          </button>
          <button
            onClick={scrollToContact}
            className={cn(
              'px-8 py-3 text-sm font-mono',
              'bg-card border border-border text-foreground rounded-lg',
              'hover:border-accent',
              'transition-all duration-300',
              'w-full sm:w-auto'
            )}
          >
            Contact Me
          </button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex items-center justify-center gap-6"
        >
          <SocialLinks links={socials} iconSize={24} />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className={cn(
          'absolute bottom-8 left-1/2 -translate-x-1/2',
          'flex flex-col items-center gap-2'
        )}
      >
        <span className="text-xs text-muted font-mono">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-5 h-5 text-accent" />
        </motion.div>
      </motion.div>
    </section>
  )
}
