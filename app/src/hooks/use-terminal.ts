import { useState, useCallback, useRef } from 'react'

interface TerminalCommand {
  input: string
  output: string
  timestamp: number
}

interface UseTerminalOptions {
  onCommand?: (command: string, args: string[]) => void
}

const AVAILABLE_COMMANDS = [
  { command: 'ls', description: 'List available sections' },
  { command: 'ls projects', description: 'Navigate to projects section' },
  { command: 'ls experience', description: 'Navigate to experience section' },
  { command: 'ls skills', description: 'Navigate to skills section' },
  { command: 'ls contact', description: 'Navigate to contact section' },
  { command: 'clear', description: 'Clear terminal output' },
  { command: 'help', description: 'Show available commands' },
  { command: 'whoami', description: 'Show user info' },
]

export function useTerminal({ onCommand }: UseTerminalOptions = {}) {
  const [isOpen, setIsOpen] = useState(false)
  const [history, setHistory] = useState<TerminalCommand[]>([])
  const [input, setInput] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  const processCommand = useCallback((cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase()
    const parts = trimmedCmd.split(' ')
    const command = parts[0]
    const args = parts.slice(1)

    let output = ''

    switch (command) {
      case 'ls':
        if (args.length === 0) {
          output = 'Available sections: projects, experience, skills, contact'
        } else {
          const section = args[0]
          const validSections = ['projects', 'experience', 'skills', 'contact']
          if (validSections.includes(section)) {
            output = `Navigating to ${section} section...`
            onCommand?.(command, [section])
            setTimeout(() => {
              const element = document.getElementById(section)
              element?.scrollIntoView({ behavior: 'smooth' })
            }, 500)
          } else {
            output = `Section "${section}" not found. Available: projects, experience, skills, contact`
          }
        }
        break

      case 'clear':
        setHistory([])
        return

      case 'help':
        output = AVAILABLE_COMMANDS.map(
          (cmd) => `  ${cmd.command.padEnd(20)} - ${cmd.description}`
        ).join('\n')
        break

      case 'whoami':
        output = 'Saurabh Verma - Backend Engineer & Systems Architect\nLocation: Pune, India\nEmail: hisaurabh.work@gmail.com'
        break

      case '':
        output = ''
        break

      default:
        output = `Command not found: ${command}. Type 'help' for available commands.`
    }

    setHistory((prev) => [
      ...prev,
      { input: cmd, output, timestamp: Date.now() },
    ])
  }, [onCommand])

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault()
    if (input.trim()) {
      processCommand(input)
      setInput('')
    }
  }, [input, processCommand])

  const toggleTerminal = useCallback(() => {
    setIsOpen((prev) => !prev)
    if (!isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100)
    }
  }, [isOpen])

  const focusInput = useCallback(() => {
    inputRef.current?.focus()
  }, [])

  return {
    isOpen,
    history,
    input,
    setInput,
    inputRef,
    toggleTerminal,
    handleSubmit,
    focusInput,
  }
}
