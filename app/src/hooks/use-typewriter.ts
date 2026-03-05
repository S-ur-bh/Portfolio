import { useState, useEffect, useCallback } from 'react'

interface UseTypewriterOptions {
  words: string[]
  typeSpeed?: number
  deleteSpeed?: number
  pauseDuration?: number
  loop?: boolean
}

export function useTypewriter({
  words,
  typeSpeed = 100,
  deleteSpeed = 50,
  pauseDuration = 2000,
}: UseTypewriterOptions) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  const typeNextCharacter = useCallback(() => {
    const currentWord = words[currentWordIndex]

    if (isDeleting) {
      setCurrentText((prev) => prev.slice(0, -1))
      if (currentText.length === 0) {
        setIsDeleting(false)
        setCurrentWordIndex((prev) => (prev + 1) % words.length)
      }
    } else {
      setCurrentText(currentWord.slice(0, currentText.length + 1))
      if (currentText.length + 1 === currentWord.length) {
        setIsPaused(true)
        setTimeout(() => {
          setIsPaused(false)
          setIsDeleting(true)
        }, pauseDuration)
      }
    }
  }, [currentText, currentWordIndex, isDeleting, words, pauseDuration])

  useEffect(() => {
    if (isPaused) return

    const timeout = setTimeout(
      typeNextCharacter,
      isDeleting ? deleteSpeed : typeSpeed
    )

    return () => clearTimeout(timeout)
  }, [typeNextCharacter, isDeleting, isPaused, deleteSpeed, typeSpeed])

  return { text: currentText, isDeleting, isTyping: !isDeleting && !isPaused }
}
