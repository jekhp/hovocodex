import { useState, useEffect } from 'react'

const MESSAGES = [
  'INITIALIZING CORE SYSTEMS',
  'LOADING AI MODULES',
  'CONNECTING NEURAL NET',
  'DEPLOYING AGENTS',
  'ONLINE',
]

export default function Loader({ onComplete }) {
  const [progress, setProgress] = useState(0)
  const [exit, setExit]         = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(timer)
          setTimeout(() => {
            setExit(true)
            setTimeout(onComplete, 800)
          }, 400)
          return 100
        }
        const increment = p < 60 ? Math.random() * 4 + 2 : Math.random() * 1.5 + 0.5
        return Math.min(p + increment, 100)
      })
    }, 55)
    return () => clearInterval(timer)
  }, [onComplete])

  const msgIndex = Math.min(Math.floor(progress / 25), 4)

  return (
    <div
      style={{
        position:   'fixed',
        inset:      0,
        background: 'var(--black)',
        zIndex:     99999,
        display:    'flex',
        flexDirection: 'column',
        alignItems:    'center',
        justifyContent:'center',
        opacity:    exit ? 0 : 1,
        transition: 'opacity 0.8s ease',
        pointerEvents: exit ? 'none' : 'all',
      }}
    >
      {/* Scan line */}
      <div
        style={{
          position:   'absolute',
          left: 0,
          right: 0,
          height:     2,
          background: 'linear-gradient(90deg, transparent, var(--accent), transparent)',
          animation:  'scan 2.5s linear infinite',
          opacity:    0.5,
        }}
      />

      {/* Grid background */}
      <div
        style={{
          position:        'absolute',
          inset:           0,
          backgroundImage: 'linear-gradient(rgba(0,245,196,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(0,245,196,0.025) 1px, transparent 1px)',
          backgroundSize:  '50px 50px',
        }}
      />

      {/* Corner markers */}
      {[
        { top: 20,    left:  20,    borderTop: '1px solid var(--accent)', borderLeft:  '1px solid var(--accent)' },
        { top: 20,    right: 20,    borderTop: '1px solid var(--accent)', borderRight: '1px solid var(--accent)' },
        { bottom: 20, left:  20,    borderBottom: '1px solid var(--accent)', borderLeft:  '1px solid var(--accent)' },
        { bottom: 20, right: 20,    borderBottom: '1px solid var(--accent)', borderRight: '1px solid var(--accent)' },
      ].map((style, i) => (
        <div key={i} style={{ position: 'absolute', width: 20, height: 20, opacity: 0.5, ...style }} />
      ))}

      {/* Logo */}
      <div
        style={{
          position:    'relative',
          zIndex:      2,
          textAlign:   'center',
          marginBottom:56,
          animation:   'fadeIn 0.6s ease',
        }}
      >
        <div
          style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 800,
            fontSize:   'clamp(32px, 5vw, 58px)',
            color:      'var(--accent)',
            textShadow: '0 0 60px rgba(0,245,196,0.5)',
            letterSpacing: -2,
          }}
        >
          HOVOCODEX
        </div>
        <div
          style={{
            fontFamily:    "'Space Mono', monospace",
            fontSize:      10,
            color:         'var(--muted)',
            letterSpacing: 8,
            marginTop:     8,
          }}
        >
          TECHNOLOGIES
        </div>
      </div>

      {/* Progress */}
      <div style={{ position: 'relative', zIndex: 2, width: 'min(380px, 80vw)' }}>
        {/* Status message */}
        <div
          style={{
            fontFamily:    "'Space Mono', monospace",
            fontSize:      10,
            color:         'var(--muted)',
            letterSpacing: 2,
            marginBottom:  14,
          }}
        >
          {MESSAGES[msgIndex]}
          <span style={{ animation: 'blink 0.7s infinite' }}>_</span>
        </div>

        {/* Bar track */}
        <div style={{ height: 1, background: 'rgba(255,255,255,0.05)', marginBottom: 14 }}>
          <div
            style={{
              height:     '100%',
              width:      `${progress}%`,
              background: 'linear-gradient(90deg, var(--accent2), var(--accent))',
              boxShadow:  '0 0 15px rgba(0,245,196,0.5)',
              transition: 'width 0.1s linear',
            }}
          />
        </div>

        {/* Percentage */}
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <span
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 800,
              fontSize:   32,
              color:      'var(--accent)',
            }}
          >
            {Math.round(progress)}%
          </span>
        </div>
      </div>
    </div>
  )
}
