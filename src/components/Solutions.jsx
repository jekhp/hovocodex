import { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { WireIco } from './ThreeScene'
import { INDUSTRIES } from '../data/constants'

function IndustryCard({ item }) {
  const [hover, setHover] = useState(false)

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        padding:    '26px 22px',
        background: hover ? 'rgba(123,92,255,0.06)' : 'var(--surface)',
        border:     `1px solid ${hover ? 'rgba(123,92,255,0.35)' : 'var(--border)'}`,
        transition: 'all 0.3s ease',
        cursor:     'none',
      }}
    >
      <div style={{ fontSize: 26, marginBottom: 10 }}>{item.icon}</div>
      <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 15, marginBottom: 8 }}>
        {item.title}
      </div>
      <div style={{ color: 'var(--muted)', fontSize: 12, lineHeight: 1.6 }}>
        {item.desc}
      </div>
    </div>
  )
}

export default function Solutions() {
  return (
    <section
      id="soluciones"
      style={{ padding: '120px clamp(24px, 7vw, 100px)', position: 'relative', overflow: 'hidden' }}
    >
      {/* 3D accent decoration */}
      <div
        style={{
          position:      'absolute',
          right:         -80,
          top:           '50%',
          transform:     'translateY(-50%)',
          width:         450,
          height:        450,
          opacity:       0.12,
          zIndex:        0,
          pointerEvents: 'none',
        }}
      >
        <Canvas>
          <ambientLight intensity={0.5} />
          <pointLight position={[5, 5, 5]} color="#7b5cff" />
          <WireIco />
        </Canvas>
      </div>

      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <div className="section-label" style={{ color: 'var(--accent2)' }}>
          {/* label text rendered via CSS ::before — override color manually */}
          <span style={{ color: 'var(--accent2)' }}>◆</span>
          <span
            style={{
              fontFamily:    "'Space Mono', monospace",
              fontSize:      10,
              letterSpacing: 6,
              color:         'var(--accent2)',
            }}
          >
            INDUSTRIAS
          </span>
        </div>

        <h2
          className="section-title"
          style={{ fontSize: 'clamp(30px, 4vw, 54px)', marginBottom: 60 }}
        >
          Soluciones para<br />
          cualquier <span style={{ color: 'var(--accent2)' }}>sector</span>
        </h2>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 2 }} className="grid-4">
          {INDUSTRIES.map((item) => (
            <IndustryCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
