import { useWindowSize } from '../hooks/useWindowSize'
import { IMPACT_STATS } from '../data/constants'

export default function Impact() {
  const { isMobile, isTablet } = useWindowSize()
  const pad = isMobile ? '60px 20px' : isTablet ? '80px 36px' : '100px clamp(40px,7vw,100px)'

  return (
    <section id="impacto" style={{ padding: pad }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: isMobile || isTablet ? '1fr' : '1fr 1fr', gap: isMobile ? 40 : 80, alignItems: 'center' }}>
        {/* Text */}
        <div>
          <div style={{ fontFamily: "'Space Mono',monospace", fontSize: 10, letterSpacing: 6, color: 'var(--accent)', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 8 }}>
            <span>◆</span> PARA PEQUEÑOS NEGOCIOS
          </div>
          <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: isMobile ? 26 : 'clamp(26px,3.5vw,50px)', fontWeight: 800, lineHeight: 1.1, marginBottom: 24, letterSpacing: -1 }}>
            La tecnología de los grandes,<br />
            <span style={{ color: 'var(--accent)' }}>al alcance de todos.</span>
          </h2>
          <p style={{ color: 'rgba(232,232,240,0.65)', lineHeight: 1.8, fontSize: 14, marginBottom: 18 }}>
            Antes, el software empresarial avanzado era solo para corporaciones. Hoy, te traemos esas mismas herramientas adaptadas a tu presupuesto y necesidades.
          </p>
          <p style={{ color: 'rgba(232,232,240,0.65)', lineHeight: 1.8, fontSize: 14 }}>
            Nuestros clientes compiten con marcas 10 veces más grandes porque automatizaron lo rutinario y se enfocaron en lo que importa: crecer.
          </p>
        </div>

        {/* Stats grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 2 }}>
          {IMPACT_STATS.map(({ n, label, color }) => (
            <div key={n} style={{ padding: isMobile ? 24 : 32, background: 'var(--surface)', border: '1px solid var(--border)', borderTop: `2px solid ${color}` }}>
              <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: isMobile ? 32 : 40, color, marginBottom: 8 }}>{n}</div>
              <div style={{ fontSize: 12, color: 'var(--muted)', lineHeight: 1.5 }}>{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
