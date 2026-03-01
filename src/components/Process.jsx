import { useState } from 'react'
import { useWindowSize } from '../hooks/useWindowSize'
import { STEPS } from '../data/constants'

function StepCard({ step, index }) {
  const [hover, setHover] = useState(false)
  const accent = index % 2 === 0 ? 'var(--accent)' : 'var(--accent2)'
  return (
    <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} style={{ padding: '28px 24px', background: 'var(--surface2)', border: '1px solid var(--border)', borderTop: `2px solid ${accent}`, transition: 'transform 0.3s', transform: hover ? 'translateY(-4px)' : 'none', boxSizing: 'border-box' }}>
      <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 40, color: accent, opacity: 0.25, marginBottom: 12, lineHeight: 1 }}>{step.n}</div>
      <h3 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 17, marginBottom: 10 }}>{step.title}</h3>
      <p style={{ color: 'var(--muted)', fontSize: 13, lineHeight: 1.7 }}>{step.desc}</p>
    </div>
  )
}

export default function Process() {
  const { isMobile, isTablet } = useWindowSize()
  const cols = isMobile ? '1fr' : isTablet ? 'repeat(2,1fr)' : 'repeat(5,1fr)'
  const pad = isMobile ? '60px 20px' : isTablet ? '80px 36px' : '100px clamp(40px,7vw,100px)'

  return (
    <section id="proceso" style={{ padding: pad, background: 'var(--surface)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <div style={{ fontFamily: "'Space Mono',monospace", fontSize: 10, letterSpacing: 6, color: 'var(--accent)', marginBottom: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
            <span>◆</span> CÓMO TRABAJAMOS
          </div>
          <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: isMobile ? 28 : 'clamp(28px,4vw,50px)', fontWeight: 800, letterSpacing: -1 }}>
            Un proceso <span style={{ color: 'var(--accent2)' }}>sin sorpresas</span>
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: cols, gap: 2 }}>
          {STEPS.map((s, i) => <StepCard key={s.n} step={s} index={i} />)}
        </div>
      </div>
    </section>
  )
}
