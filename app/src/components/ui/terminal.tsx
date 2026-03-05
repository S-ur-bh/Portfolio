import { motion, AnimatePresence } from 'framer-motion'
import { X, Terminal as TerminalIcon } from 'lucide-react'
import { useTerminal } from '@/hooks/use-terminal'
import { cn } from '@/lib/utils'
import { useEffect } from 'react'

interface TerminalProps {
  className?: string
}

export function Terminal({ className }: TerminalProps) {
  const { isOpen, history, input, setInput, inputRef, toggleTerminal, handleSubmit, focusInput } = useTerminal()

  // Keyboard shortcut: Cmd+K or Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        toggleTerminal()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [toggleTerminal])

  return (
    <>
      {/* Terminal Toggle Button */}
      <button
        onClick={toggleTerminal}
        className={cn(
          'fixed bottom-6 right-6 z-50',
          'w-12 h-12 rounded-full',
          'bg-card border border-border',
          'flex items-center justify-center',
          'hover:border-accent hover:glow-accent',
          'transition-all duration-300',
          className
        )}
        title="Toggle Terminal (Cmd+K)"
      >
        <TerminalIcon className="w-5 h-5 text-accent" />
      </button>

      {/* Terminal Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className={cn(
              'fixed bottom-24 right-6 z-50',
              'w-[500px] max-w-[90vw]',
              'bg-card border border-border rounded-xl',
              'shadow-2xl overflow-hidden',
              className
            )}
            onClick={focusInput}
          >
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-card-hover border-b border-border">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <span className="text-sm text-muted font-mono">saurabh@portfolio:~</span>
              <button
                onClick={toggleTerminal}
                className="text-muted hover:text-foreground transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Terminal Output */}
            <div className="h-[250px] overflow-y-auto p-4 font-mono text-sm">
              <div className="text-muted mb-4">
                Welcome to Saurabh&apos;s Terminal v1.0.0<br />
                Type &apos;help&apos; for available commands.
              </div>

              {history.map((cmd, index) => (
                <div key={index} className="mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-accent">&gt;&gt;</span>
                    <span className="text-foreground">{cmd.input}</span>
                  </div>
                  {cmd.output && (
                    <div className="text-muted ml-6 whitespace-pre-line">
                      {cmd.output}
                    </div>
                  )}
                </div>
              ))}

              {/* Input Line */}
              <form onSubmit={handleSubmit} className="flex items-center gap-2">
                <span className="text-accent">&gt;&gt;</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="flex-1 bg-transparent text-foreground outline-none font-mono"
                  placeholder="Type a command..."
                  autoFocus
                />
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
