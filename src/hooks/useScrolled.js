import { useState, useEffect } from 'react'

/**
 * Returns true when the page has scrolled past `threshold` pixels.
 * @param {number} threshold - Scroll threshold in px (default 50)
 */
export function useScrolled(threshold = 50) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > threshold)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [threshold])

  return scrolled
}
