import { useEffect, useRef, useState } from 'react'

export default function CustomCursor() {
  const dotRef    = useRef(null)
  const ringRef   = useRef(null)
  const pos       = useRef({ x: 0, y: 0 })
  const follower  = useRef({ x: 0, y: 0 })
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Only show on devices with a real mouse
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)')
    if (!mq.matches) return

    setVisible(true)

    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY }
      if (dotRef.current) {
        dotRef.current.style.left = e.clientX + 'px'
        dotRef.current.style.top  = e.clientY + 'px'
      }
    }
    window.addEventListener('mousemove', onMove)

    let raf
    const loop = () => {
      follower.current.x += (pos.current.x - follower.current.x) * 0.1
      follower.current.y += (pos.current.y - follower.current.y) * 0.1
      if (ringRef.current) {
        ringRef.current.style.left = follower.current.x + 'px'
        ringRef.current.style.top  = follower.current.y + 'px'
      }
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  if (!visible) return null

  const base = {
    position: 'fixed', pointerEvents: 'none',
    zIndex: 99999, transform: 'translate(-50%,-50%)', borderRadius: '50%',
  }

  return (
    <>
      <div ref={dotRef} style={{
        ...base, width: 10, height: 10,
        background: '#ffffff',
        boxShadow: '0 0 0 2px #00f5c4, 0 0 12px rgba(0,245,196,0.8)',
      }} />
      <div ref={ringRef} style={{
        ...base, width: 34, height: 34,
        border: '2px solid rgba(0,245,196,0.85)',
      }} />
    </>
  )
}
