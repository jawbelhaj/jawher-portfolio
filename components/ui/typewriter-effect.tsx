"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface TypewriterEffectProps {
  words: {
    text: string
    className?: string
  }[]
  className?: string
  cursorClassName?: string
}

export const TypewriterEffect = ({ words, className, cursorClassName }: TypewriterEffectProps) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentWord = words[currentWordIndex].text

    const timeout = setTimeout(
      () => {
        // If deleting, remove a character
        if (isDeleting) {
          setCurrentText(currentWord.substring(0, currentText.length - 1))

          // If all characters are deleted, move to the next word
          if (currentText.length === 0) {
            setIsDeleting(false)
            setCurrentWordIndex((prev) => (prev + 1) % words.length)
          }
        } else {
          // If typing, add a character
          setCurrentText(currentWord.substring(0, currentText.length + 1))

          // If the word is complete, start deleting after a pause
          if (currentText.length === currentWord.length) {
            setTimeout(() => {
              setIsDeleting(true)
            }, 1500) // Pause at the end of the word
          }
        }
      },
      isDeleting ? 50 : 100,
    ) // Typing is slower than deleting

    return () => clearTimeout(timeout)
  }, [currentText, currentWordIndex, isDeleting, words])

  return (
    <div className={cn("flex items-center justify-center", className)}>
      <h1 className="text-2xl md:text-3xl font-bold text-center">
        <span>{currentText}</span>
        <span className={cn("animate-blink", cursorClassName)}>|</span>
      </h1>
    </div>
  )
}
