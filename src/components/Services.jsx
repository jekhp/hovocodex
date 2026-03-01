import { useState } from 'react'
import { SERVICES } from '../data/constants'

// ─── Single Service Card ───
function ServiceCard({ service }) {
  const [hover, setHover] = useState(false)

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        padding:    36,
        background: hover ? 'rgba(0,245,196,0.04)' : 'var(--surface)',
        border:     `1px solid ${hover ? 'rgba(0,245,196,0.25)' : 'var(--border)'}`,
        transition: 'all 0.4s ease',
        cursor:     'none',
        transform:  hover ? 'translateY(-6px)' : 'none',
        boxShadow:  hover ? '0 20px 50px rgba(0,245,196,0.07)' : 'none',
      }}
    >
      {/* Header row */}
      <div
        style={{
          display:         'flex',
          justifyContent:  'space-between',
          alignItems:      'flex-start',
          marginBottom:    24,
        }}
      >
        <span style={{ fontSize: 30, color: 'var(--accent)', opacity: hover ? 1 : 0.6, transition: 'opacity 0.3s' }}>
          {service.icon}
        </span>
        <span
          style={{
            fontFamily:    "'Space Mono', monospace",
            fontSize:      9,
            letterSpacing: 3,
            color:         'var(--accent2)',
            padding:       '4px 10px',
            border:        '1px solid rgba(123,92,255,0.25)',
          }}
        >
          {service.tag}
        </span>
      </div>

      <h3
        style={{
          fontFamily:   "'Syne', sans-serif",
          fontSize:     21,
          fontWeight:   700,
          marginBottom: 12,
        }}
      >
        {service.title}
      </h3>

      <p
        style={{
          color:        'var(--muted)',
          lineHeight:   1.7,
          fontSize:     13,
          marginBottom: 24,
        }}
      >
        {service.desc}
      </p>

      {/* Feature bullets */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {service.features.map((f) => (
          <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div
              style={{
                width:        3,
                height:       3,
                background:   'var(--accent)',
                borderRadius: '50%',
                flexShrink:   0,
              }}
            />
            <span
              style={{
                fontFamily:    "'Space Mono', monospace",
                fontSize:      10,
                color:         'var(--muted)',
                letterSpacing: 1,
              }}
            >
              {f}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── Services Section ───
export default function Services() {
  return (
    <section id="servicios" style={{ padding: '120px clamp(24px, 7vw, 100px)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>

        {/* Header */}
        <div
          style={{
            marginBottom:    72,
            display:         'flex',
            justifyContent:  'space-between',
            alignItems:      'flex-end',
          }}
        >
          <div>
            <div className="section-label">LO QUE HACEMOS</div>
            <h2
              className="section-title"
              style={{ fontSize: 'clamp(30px, 4vw, 58px)' }}
            >
              Soluciones que<br />
              <span style={{ color: 'var(--accent)' }}>transforman</span>
            </h2>
          </div>
          <p
            style={{
              color:    'var(--muted)',
              maxWidth: 260,
              fontSize: 13,
              lineHeight: 1.8,
              textAlign: 'right',
            }}
          >
            Tu negocio es único, por eso nuestras soluciones también lo son.
          </p>
        </div>

        {/* Grid */}
        <div
          style={{
            display:             'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap:                 2,
          }}
        >
          {SERVICES.map((s, i) => (
            <ServiceCard key={i} service={s} />
          ))}
        </div>
      </div>
    </section>
  )
}
