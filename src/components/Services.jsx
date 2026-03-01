import { useState } from 'react'
import { useWindowSize } from '../hooks/useWindowSize'
import { SERVICES } from '../data/constants'

function ServiceCard({ service }) {
  const [hover, setHover] = useState(false)
  return (
    <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} style={{ padding: 28, background: hover ? 'rgba(0,245,196,0.04)' : 'var(--surface)', border: `1px solid ${hover ? 'rgba(0,245,196,0.25)' : 'var(--border)'}`, transition: 'all 0.4s', transform: hover ? 'translateY(-4px)' : 'none', boxSizing: 'border-box' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 }}>
        <span style={{ fontSize: 28, color: 'var(--accent)', opacity: hover ? 1 : 0.6, transition: 'opacity 0.3s' }}>{service.icon}</span>
        <span style={{ fontFamily: "'Space Mono',monospace", fontSize: 9, letterSpacing: 2, color: 'var(--accent2)', padding: '3px 8px', border: '1px solid rgba(123,92,255,0.25)', flexShrink: 0 }}>{service.tag}</span>
      </div>
      <h3 style={{ fontFamily: "'Syne',sans-serif", fontSize: 19, fontWeight: 700, marginBottom: 10 }}>{service.title}</h3>
      <p style={{ color: 'var(--muted)', lineHeight: 1.7, fontSize: 13, marginBottom: 20 }}>{service.desc}</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
        {service.features.map(f => (
          <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ width: 3, height: 3, background: 'var(--accent)', borderRadius: '50%', flexShrink: 0 }} />
            <span style={{ fontFamily: "'Space Mono',monospace", fontSize: 10, color: 'var(--muted)', letterSpacing: 1 }}>{f}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Services() {
  const { isMobile, isTablet } = useWindowSize()
  const cols = isMobile ? '1fr' : isTablet ? 'repeat(2,1fr)' : 'repeat(3,1fr)'
  const pad = isMobile ? '60px 20px' : isTablet ? '80px 36px' : '100px clamp(40px,7vw,100px)'

  return (
    <section id="servicios" style={{ padding: pad }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ marginBottom: 48 }}>
          <div style={{ fontFamily: "'Space Mono',monospace", fontSize: 10, letterSpacing: 6, color: 'var(--accent)', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 8 }}>
            <span>◆</span> LO QUE HACEMOS
          </div>
          <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: isMobile ? 30 : 'clamp(30px,4vw,56px)', fontWeight: 800, letterSpacing: -1, lineHeight: 1.05 }}>
            Soluciones que <span style={{ color: 'var(--accent)' }}>transforman</span>
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: cols, gap: 2 }}>
          {SERVICES.map((s, i) => <ServiceCard key={i} service={s} />)}
        </div>
      </div>
    </section>
  )
}
