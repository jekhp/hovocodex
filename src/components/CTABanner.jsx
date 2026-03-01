import { useWindowSize } from '../hooks/useWindowSize'

export default function CTABanner({ onContact }) {
  const { isMobile, isTablet } = useWindowSize()
  const pad = isMobile ? '60px 20px' : isTablet ? '80px 36px' : '100px clamp(40px,7vw,100px)'

  return (
    <section style={{ padding: pad, background: 'linear-gradient(135deg,rgba(0,245,196,0.05),rgba(123,92,255,0.05))', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div style={{ maxWidth: 780, margin: '0 auto', textAlign: 'center' }}>
        <div style={{ fontFamily: "'Space Mono',monospace", fontSize: 10, letterSpacing: 6, color: 'var(--accent)', marginBottom: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
          <span>◆</span> LISTO PARA EMPEZAR
        </div>
        <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: isMobile ? 28 : 'clamp(28px,5vw,60px)', fontWeight: 800, letterSpacing: -2, lineHeight: 1.05, marginBottom: 20 }}>
          Tu negocio merece<br />tecnología de <span style={{ color: 'var(--accent)' }}>primer nivel</span>
        </h2>
        <p style={{ color: 'var(--muted)', fontSize: isMobile ? 14 : 15, lineHeight: 1.8, marginBottom: 40 }}>
          Agenda una sesión gratuita de diagnóstico. Sin compromisos, sin letra pequeña. Una conversación honesta sobre cómo hacer crecer tu negocio.
        </p>
        <button onClick={onContact} style={{ padding: isMobile ? '16px 32px' : '20px 54px', background: 'linear-gradient(135deg,var(--accent),var(--accent2))', border: 'none', color: 'var(--black)', fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: isMobile ? 13 : 15, letterSpacing: 2, cursor: 'pointer', textTransform: 'uppercase', boxShadow: '0 0 50px rgba(0,245,196,0.2)', transition: 'all 0.3s', animation: 'pulse-border 3s ease-in-out infinite' }}
          onMouseEnter={e => { e.target.style.transform = 'translateY(-3px)'; e.target.style.boxShadow = '0 0 80px rgba(0,245,196,0.4)' }}
          onMouseLeave={e => { e.target.style.transform = 'none'; e.target.style.boxShadow = '0 0 50px rgba(0,245,196,0.2)' }}
        >
          Agenda tu sesión gratuita →
        </button>
      </div>
    </section>
  )
}
