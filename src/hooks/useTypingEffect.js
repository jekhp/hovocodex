import { useState, useEffect } from 'react'

/**
 * Hook that cycles through an array of words with a typewriter effect.
 * @param {string[]} words - Array of words to cycle through
 * @param {number} speed - Typing speed in ms per character (default 90)
 * @param {number} pause - Pause time before switching word in ms (default 1800)
 */
export function useTypingEffect(words = [], speed = 90, pause = 1800) {
  const [typed, setTyped] = useState('')
  const [wordIndex, setWordIndex] = useState(0)

  useEffect(() => {
    if (!words.length) return
    let i = 0
    const word = words[wordIndex]
    setTyped('')

    const interval = setInterval(() => {
      if (i <= word.length) {
        setTyped(word.slice(0, i))
        i++
      } else {
        clearInterval(interval)
        setTimeout(() => {
          setWordIndex((prev) => (prev + 1) % words.length)
        }, pause)
      }
    }, speed)

    return () => clearInterval(interval)
  }, [wordIndex, words, speed, pause])

  return typed
}
