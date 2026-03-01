import { IMPACT_STATS } from '../data/constants'

export default function Impact() {
  return (
    <section id="impacto" style={{ padding: '120px clamp(24px, 7vw, 100px)' }}>
      <div
        style={{
          maxWidth:            1200,
          margin:              '0 auto',
          display:             'grid',
          gridTemplateColumns: '1fr 1fr',
          gap:                 80,
          alignItems:          'center',
        }}
        className="grid-2col"
      >
        {/* Left: text */}
        <div>
          <div className="section-label">PARA PEQUEÑOS NEGOCIOS</div>

          <h2
            className="section-title"
            style={{ fontSize: 'clamp(28px, 3.5vw, 52px)', marginBottom: 28 }}
          >
            La tecnología de los grandes,<br />
            <span style={{ color: 'var(--accent)' }}>al alcance de todos.</span>
          </h2>

          <p
            style={{
              color:        'rgba(232,232,240,0.65)',
              lineHeight:   1.8,
              fontSize:     15,
              marginBottom: 24,
            }}
          >
            Antes, el software empresarial avanzado era solo para corporaciones.
            Hoy, te traemos esas mismas herramientas adaptadas a tu presupuesto
            y necesidades. Un chatbot de IA, una app a medida, un sistema
            inteligente: todo es posible para tu negocio.
          </p>

          <p style={{ color: 'rgba(232,232,240,0.65)', lineHeight: 1.8, fontSize: 15 }}>
            Nuestros clientes compiten con marcas 10 veces más grandes porque
            automatizaron lo rutinario y se enfocaron en lo que importa: crecer.
          </p>
        </div>

        {/* Right: stats grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
          {IMPACT_STATS.map(({ n, label, color }) => (
            <div
              key={n}
              style={{
                padding:     32,
                background:  'var(--surface)',
                border:      '1px solid var(--border)',
                borderTop:   `2px solid ${color}`,
              }}
            >
              <div
                style={{
                  fontFamily:   "'Syne', sans-serif",
                  fontWeight:   800,
                  fontSize:     40,
                  color:        color,
                  marginBottom: 10,
                }}
              >
                {n}
              </div>
              <div style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.5 }}>
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
