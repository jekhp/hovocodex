import { Canvas } from '@react-three/fiber'
import { Stars } from '@react-three/drei'
import { ParticleField, DistortSphere } from './ThreeScene'
import { useTypingEffect } from '../hooks/useTypingEffect'
import { useWindowSize } from '../hooks/useWindowSize'
import { TYPED_WORDS, HERO_STATS } from '../data/constants'

export default function Hero({ onContact }) {
  const typed = useTypingEffect(TYPED_WORDS)
  const { isMobile, isTablet } = useWindowSize()

  const px = isMobile ? '20px' : isTablet ? '36px' : 'clamp(40px,7vw,100px)'
  const titleSize = isMobile ? '34px' : isTablet ? '48px' : 'clamp(44px,6vw,80px)'

  return (
    <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
      {/* 3D Canvas */}
      <div style={{ position: 'absolute', inset: 0 }}>
        <Canvas camera={{ position: [0, 0, 7], fov: 60 }}>
          <ambientLight intensity={0.2} />
          <pointLight position={[8, 8, 8]} color="#00f5c4" intensity={1.2} />
          <pointLight position={[-8, -8, -8]} color="#7b5cff" intensity={0.6} />
          <ParticleField count={isMobile ? 800 : 2000} />
          <DistortSphere />
          <Stars radius={80} depth={50} count={isMobile ? 800 : 2000} factor={3} fade speed={0.5} />
        </Canvas>
      </div>

      {/* Gradient */}
      <div style={{ position: 'absolute', inset: 0, background: isMobile ? 'rgba(6,6,8,0.88)' : 'linear-gradient(100deg,rgba(6,6,8,0.92) 45%,rgba(6,6,8,0.4) 100%)' }} />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 2, padding: `80px ${px} 0`, width: '100%', maxWidth: isMobile ? '100%' : 950, boxSizing: 'border-box' }}>

        {/* Eyebrow */}
        <div style={{ fontFamily: "'Space Mono',monospace", fontSize: isMobile ? 9 : 10, letterSpacing: isMobile ? 3 : 6, color: 'var(--accent)', marginBottom: 20, animation: 'fadeUp 0.8s ease 0.3s both', display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 18, height: 1, background: 'var(--accent)', flexShrink: 0 }} />
          {isMobile ? 'TECNOLOGÍA · IA · IMPACTO' : 'TECNOLOGÍA · INNOVACIÓN · IMPACTO'}
        </div>

        {/* Headline */}
        <h1 style={{ fontFamily: "'Syne',sans-serif", fontSize: titleSize, fontWeight: 800, lineHeight: 1.0, letterSpacing: isMobile ? -1 : -3, marginBottom: 20, animation: 'fadeUp 0.8s ease 0.5s both' }}>
          CONSTRUIMOS
          <br />
          TU{' '}
          <span style={{ color: 'var(--accent)', textShadow: '0 0 40px rgba(0,245,196,0.4)' }}>{typed}</span>
          <span style={{ borderRight: '3px solid var(--accent)', animation: 'blink 0.8s infinite' }} />
        </h1>

        {/* Subheadline */}
        <p style={{ fontSize: isMobile ? 14 : 16, color: 'rgba(232,232,240,0.65)', maxWidth: 500, lineHeight: 1.75, marginBottom: 36, animation: 'fadeUp 0.8s ease 0.7s both' }}>
          Llevamos la tecnología de grandes corporaciones a pequeños negocios. Software inteligente, agentes con IA y soluciones web que multiplican tu alcance y automatizan tu crecimiento.
        </p>

        {/* CTAs */}
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', animation: 'fadeUp 0.8s ease 0.9s both' }}>
          <button onClick={onContact} style={{ padding: isMobile ? '14px 28px' : '16px 36px', background: 'linear-gradient(135deg,var(--accent),#00c4a3)', border: 'none', color: 'var(--black)', fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: isMobile ? 12 : 13, letterSpacing: 2, cursor: 'pointer', textTransform: 'uppercase', boxShadow: '0 0 40px rgba(0,245,196,0.25)', transition: 'all 0.3s' }}>
            Iniciar Proyecto →
          </button>
          <a href="#servicios" style={{ padding: isMobile ? '14px 28px' : '16px 36px', background: 'transparent', border: '1px solid rgba(255,255,255,0.15)', color: 'var(--text)', fontFamily: "'Syne',sans-serif", fontWeight: 600, fontSize: isMobile ? 12 : 13, letterSpacing: 2, textDecoration: 'none', textTransform: 'uppercase', transition: 'all 0.3s', display: 'inline-block' }}>
            Ver Servicios
          </a>
        </div>

        {/* Stats */}
        <div style={{ display: 'flex', gap: isMobile ? 24 : 48, marginTop: isMobile ? 40 : 64, animation: 'fadeUp 0.8s ease 1.1s both', flexWrap: 'wrap' }}>
          {HERO_STATS.map(({ n, label }) => (
            <div key={label}>
              <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: isMobile ? 28 : 'clamp(26px,4vw,44px)', color: 'var(--accent)' }}>{n}</div>
              <div style={{ fontFamily: "'Space Mono',monospace", fontSize: 9, color: 'var(--muted)', letterSpacing: 3, textTransform: 'uppercase' }}>{label}</div>
            </div>
          ))}
        </div>

        {/* Scroll indicator — hide on mobile */}
        {!isMobile && (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10, marginTop: 48 }}>
            <div style={{ width: 1, height: 48, background: 'linear-gradient(to bottom,var(--accent),transparent)', animation: 'float 2.5s ease-in-out infinite' }} />
            <span style={{ fontFamily: "'Space Mono',monospace", fontSize: 8, letterSpacing: 5, color: 'var(--muted)' }}>SCROLL</span>
          </div>
        )}
      </div>
    </section>
  )
}
