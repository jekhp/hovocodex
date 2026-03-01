import { Canvas } from '@react-three/fiber'
import { Stars } from '@react-three/drei'
import { ParticleField, DistortSphere } from './ThreeScene'
import { useTypingEffect } from '../hooks/useTypingEffect'
import { TYPED_WORDS, HERO_STATS } from '../data/constants'

export default function Hero({ onContact }) {
  const typed = useTypingEffect(TYPED_WORDS)

  return (
    <section
      style={{
        position:   'relative',
        height:     '100vh',
        display:    'flex',
        alignItems: 'center',
        overflow:   'hidden',
      }}
    >
      {/* ── 3D Canvas background ── */}
      <div style={{ position: 'absolute', inset: 0 }}>
        <Canvas camera={{ position: [0, 0, 7], fov: 60 }}>
          <ambientLight intensity={0.2} />
          <pointLight position={[8, 8, 8]}   color="#00f5c4" intensity={1.2} />
          <pointLight position={[-8, -8, -8]} color="#7b5cff" intensity={0.6} />
          <ParticleField />
          <DistortSphere />
          <Stars radius={80} depth={50} count={2000} factor={3} fade speed={0.5} />
        </Canvas>
      </div>

      {/* ── Gradient overlay ── */}
      <div
        style={{
          position:   'absolute',
          inset:      0,
          background: 'linear-gradient(100deg, rgba(6,6,8,0.92) 45%, rgba(6,6,8,0.4) 100%)',
        }}
      />

      {/* ── Content ── */}
      <div
        style={{
          position:  'relative',
          zIndex:    2,
          padding:   '100px clamp(24px, 7vw, 100px) 0',
          maxWidth:  950,
        }}
      >
        {/* Eyebrow */}
        <div
          style={{
            fontFamily:    "'Space Mono', monospace",
            fontSize:      10,
            letterSpacing: 6,
            color:         'var(--accent)',
            marginBottom:  28,
            animation:     'fadeUp 0.8s ease 0.3s both',
            display:       'flex',
            alignItems:    'center',
            gap:           12,
          }}
        >
          <div style={{ width: 24, height: 1, background: 'var(--accent)' }} />
          TECNOLOGÍA · INNOVACIÓN · IMPACTO
        </div>

        {/* Headline */}
        <h1
          style={{
            fontFamily:    "'Syne', sans-serif",
            fontSize:      'clamp(28px, 5vw, 72px)',
            fontWeight:    800,
            lineHeight:    0.95,
            letterSpacing: -4,
            marginBottom:  28,
            animation:     'fadeUp 0.8s ease 0.5s both',
          }}
        >
          CONSTRUIMOS
          <br />
          EL{' '}
          <span style={{ color: 'var(--accent)', textShadow: '0 0 50px rgba(0,245,196,0.4)' }}>
            {typed}
          </span>
          <span style={{ borderRight: '3px solid var(--accent)', animation: 'blink 0.8s infinite' }} />
        </h1>

        {/* Subheadline */}
        <p
          style={{
            fontSize:     'clamp(14px, 1.5vw, 17px)',
            color:        'rgba(232,232,240,0.65)',
            maxWidth:     500,
            lineHeight:   1.75,
            marginBottom: 48,
            animation:    'fadeUp 0.8s ease 0.7s both',
          }}
        >
          Llevamos la tecnología de grandes corporaciones a pequeños negocios.
          Software inteligente, agentes con IA y soluciones web que multiplican
          tu alcance y automatizan tu crecimiento.
        </p>

        {/* CTAs */}
        <div
          style={{
            display:   'flex',
            gap:       14,
            flexWrap:  'wrap',
            animation: 'fadeUp 0.8s ease 0.9s both',
          }}
        >
          <button
            onClick={onContact}
            className="btn-primary"
          >
            Consultar →
          </button>
          <a href="#servicios" className="btn-outline">
            Ver Servicios
          </a>
        </div>

        {/* Stats */}
        <div
          style={{
            display:   'flex',
            gap:       56,
            marginTop: 76,
            animation: 'fadeUp 0.8s ease 1.1s both',
          }}
        >
          {HERO_STATS.map(({ n, label }) => (
            <div key={label}>
              <div
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 800,
                  fontSize:   'clamp(26px, 4vw, 44px)',
                  color:      'var(--accent)',
                }}
              >
                {n}
              </div>
              <div
                style={{
                  fontFamily:    "'Space Mono', monospace",
                  fontSize:      9,
                  color:         'var(--muted)',
                  letterSpacing: 3,
                  textTransform: 'uppercase',
                }}
              >
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position:  'absolute',
          bottom:    40,
          left:      '50%',
          transform: 'translateX(-50%)',
          zIndex:    2,
          display:   'flex',
          flexDirection: 'column',
          alignItems:    'center',
          gap:       10,
        }}
      >
        <div
          style={{
            width:      1,
            height:     56,
            background: 'linear-gradient(to bottom, var(--accent), transparent)',
            animation:  'float 2.5s ease-in-out infinite',
          }}
        />
        <span
          style={{
            fontFamily:    "'Space Mono', monospace",
            fontSize:      8,
            letterSpacing: 5,
            color:         'var(--muted)',
          }}
        >
          SCROLL
        </span>
      </div>
    </section>
  )
}
