import { useState, useEffect } from 'react'

export function useTypingEffect(words = [], speed = 90, pause = 1800) {
  const [typed, setTyped] = useState('')
  const [wordIndex, setWordIndex] = useState(0)

  useEffect(() => {
    if (!words.length) return
    let i = 0
    const word = words[wordIndex]
    setTyped('')
    const interval = setInterval(() => {
      if (i <= word.length) { setTyped(word.slice(0, i)); i++ }
      else { clearInterval(interval); setTimeout(() => setWordIndex(p => (p + 1) % words.length), pause) }
    }, speed)
    return () => clearInterval(interval)
  }, [wordIndex, words, speed, pause])

  return typed
}