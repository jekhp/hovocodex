import { useState } from 'react'
import { STEPS } from '../data/constants'

function StepCard({ step, index }) {
  const [hover, setHover] = useState(false)
  const accent = index % 2 === 0 ? 'var(--accent)' : 'var(--accent2)'

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        flex:       1,
        padding:    '28px 24px',
        background: 'var(--surface2)',
        border:     '1px solid var(--border)',
        borderTop:  `2px solid ${accent}`,
        transition: 'transform 0.3s ease',
        cursor:     'none',
        transform:  hover ? 'translateY(-5px)' : 'none',
      }}
    >
      <div
        style={{
          fontFamily:   "'Syne', sans-serif",
          fontWeight:   800,
          fontSize:     44,
          color:        accent,
          opacity:      0.25,
          marginBottom: 14,
          lineHeight:   1,
        }}
      >
        {step.n}
      </div>

      <h3
        style={{
          fontFamily:   "'Syne', sans-serif",
          fontWeight:   700,
          fontSize:     17,
          marginBottom: 10,
        }}
      >
        {step.title}
      </h3>

      <p style={{ color: 'var(--muted)', fontSize: 12, lineHeight: 1.7 }}>
        {step.desc}
      </p>
    </div>
  )
}

export default function Process() {
  return (
    <section id="proceso" style={{ padding: '120px clamp(24px, 7vw, 100px)', background: 'var(--surface)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 80 }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>CÓMO TRABAJAMOS</div>
          <h2
            className="section-title"
            style={{ fontSize: 'clamp(30px, 4vw, 54px)' }}
          >
            Un proceso{' '}
            <span style={{ color: 'var(--accent2)' }}>sin sorpresas</span>
          </h2>
        </div>

        {/* Steps */}
        <div style={{ display: 'flex', gap: 2 }}>
          {STEPS.map((step, i) => (
            <StepCard key={step.n} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
