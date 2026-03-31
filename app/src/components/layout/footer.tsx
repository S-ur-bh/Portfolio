import { Github, Linkedin } from 'lucide-react' // Keep imports for defining 'socials' array
import { SocialLinks } from '@/components/ui/social-links'

const socials = [
  { name: 'GitHub', url: 'https://github.com', icon: Github },
  { name: 'LinkedIn', url: 'https://linkedin.com', icon: Linkedin },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center gap-6">
          {/* Logo */}
          <span className="text-2xl font-bold font-mono text-foreground">
            Saurabh Verma
          </span>

          {/* Tagline */}
          <p className="text-muted text-center max-w-md">
            Backend Engineer & Systems Architect
            <br />
            Building scalable solutions for real-world problems
          </p>

          {/* Social Links */}
          <SocialLinks links={socials} iconSize={20} linkClassName="p-2 rounded-lg hover:bg-card" />

          {/* Divider */}
          <div className="w-full max-w-xs h-px bg-border" />

          {/* Copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-muted">
            <span>© 2025 Saurabh Verma. All rights reserved.</span>
            <span className="hidden sm:inline">•</span>
            <span className="font-mono text-accent">Built with React, TypeScript & Terminal Green</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
