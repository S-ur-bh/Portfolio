import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { ThemeToggle } from '@/components/ui/theme-toggle'
import { cn } from '@/lib/utils'

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [resumeModal, setResumeModal] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    element?.scrollIntoView({ behavior: 'smooth' })
    setIsMobileMenuOpen(false)
  }

  const openResume = () => {
    setResumeModal(true)
  }

  const closeResume = () => {
    setResumeModal(false)
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={cn(
          'fixed top-0 left-0 right-0 z-40',
          'transition-all duration-300',
          isScrolled && 'bg-background/80 backdrop-blur-lg border-b border-border'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault()
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
              className="text-xl font-bold font-mono text-foreground hover:text-accent transition-colors"
            >
              Saurabh Verma
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className={cn(
                    'text-sm text-muted hover:text-foreground',
                    'relative group',
                    'transition-colors duration-200'
                  )}
                >
                  {link.name}
                  <span className={cn(
                    'absolute -bottom-1 left-0',
                    'w-0 h-0.5 bg-accent',
                    'group-hover:w-full',
                    'transition-all duration-300'
                  )} />
                </button>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-4">
              <ThemeToggle />
              <button
                onClick={openResume}
                className={cn(
                  'px-4 py-2 text-sm font-mono',
                  'border border-accent text-accent rounded-lg',
                  'hover:bg-accent hover:text-background',
                  'transition-all duration-300 cursor-pointer'
                )}
              >
                Resume
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center gap-2">
              <ThemeToggle
                className="w-9 h-9"
                iconSize={18}
              />
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-foreground"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
            className={cn(
              'fixed inset-0 z-30 md:hidden',
              'bg-background/95 backdrop-blur-lg'
            )}
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollToSection(link.href)}
                  className="text-2xl font-mono text-foreground hover:text-accent transition-colors"
                >
                  {link.name}
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                onClick={() => {
                  openResume()
                  setIsMobileMenuOpen(false)
                }}
                className={cn(
                  'mt-4 px-6 py-3 text-lg font-mono',
                  'border border-accent text-accent rounded-lg',
                  'hover:bg-accent hover:text-background',
                  'transition-all duration-300 cursor-pointer'
                )}
              >
                Resume
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Resume PDF Modal */}
      <AnimatePresence>
        {resumeModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80"
              onClick={closeResume}
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="relative w-full max-w-5xl h-[85vh] bg-card border border-border rounded-2xl shadow-2xl overflow-hidden z-10"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-border bg-card">
                <h3 className="text-lg font-semibold text-foreground font-mono">
                  Saurabh Verma - Resume
                </h3>
                <button
                  onClick={closeResume}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-background hover:bg-accent/10 text-muted hover:text-accent transition-all duration-300"
                  aria-label="Close Resume"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* PDF Viewer */}
              <div className="h-[calc(100%-64px)] bg-background">
                <iframe
                  src="/Portfolio/resume.pdf#view=FitH"
                  className="w-full h-full border-0"
                  title="Resume - Saurabh Verma"
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}