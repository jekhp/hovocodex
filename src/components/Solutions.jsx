import { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { WireIco } from './ThreeScene'
import { useWindowSize } from '../hooks/useWindowSize'
import { INDUSTRIES } from '../data/constants'

function IndustryCard({ item }) {
  const [hover, setHover] = useState(false)
  return (
    <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} style={{ padding: '22px 18px', background: hover ? 'rgba(123,92,255,0.06)' : 'var(--surface)', border: `1px solid ${hover ? 'rgba(123,92,255,0.35)' : 'var(--border)'}`, transition: 'all 0.3s', boxSizing: 'border-box' }}>
      <div style={{ fontSize: 24, marginBottom: 8 }}>{item.icon}</div>
      <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 14, marginBottom: 6 }}>{item.title}</div>
      <div style={{ color: 'var(--muted)', fontSize: 12, lineHeight: 1.6 }}>{item.desc}</div>
    </div>
  )
}

export default function Solutions() {
  const { isMobile, isTablet } = useWindowSize()
  const cols = isMobile ? 'repeat(2,1fr)' : isTablet ? 'repeat(2,1fr)' : 'repeat(4,1fr)'
  const pad = isMobile ? '60px 20px' : isTablet ? '80px 36px' : '100px clamp(40px,7vw,100px)'

  return (
    <section id="soluciones" style={{ padding: pad, position: 'relative', overflow: 'hidden' }}>
      {/* 3D decoration — desktop only */}
      {!isTablet && (
        <div style={{ position: 'absolute', right: -60, top: '50%', transform: 'translateY(-50%)', width: 400, height: 400, opacity: 0.1, zIndex: 0, pointerEvents: 'none' }}>
          <Canvas><ambientLight intensity={0.5} /><pointLight position={[5,5,5]} color="#7b5cff" /><WireIco /></Canvas>
        </div>
      )}
      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{ fontFamily: "'Space Mono',monospace", fontSize: 10, letterSpacing: 6, color: 'var(--accent2)', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 8 }}>
          <span>◆</span> INDUSTRIAS
        </div>
        <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: isMobile ? 28 : 'clamp(28px,4vw,52px)', fontWeight: 800, letterSpacing: -1, marginBottom: 48 }}>
          Soluciones para <span style={{ color: 'var(--accent2)' }}>cualquier sector</span>
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: cols, gap: 2 }}>
          {INDUSTRIES.map(item => <IndustryCard key={item.title} item={item} />)}
        </div>
      </div>
    </section>
  )
}
