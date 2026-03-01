export default function CTABanner({ onContact }) {
  return (
    <section
      style={{
        padding:      '100px clamp(24px, 7vw, 100px)',
        background:   'linear-gradient(135deg, rgba(0,245,196,0.05), rgba(123,92,255,0.05))',
        borderTop:    '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div style={{ maxWidth: 780, margin: '0 auto', textAlign: 'center' }}>
        <div className="section-label" style={{ justifyContent: 'center' }}>
          LISTO PARA EMPEZAR
        </div>

        <h2
          className="section-title"
          style={{ fontSize: 'clamp(30px, 5vw, 62px)', marginBottom: 24 }}
        >
          Tu negocio merece<br />
          tecnología de{' '}
          <span style={{ color: 'var(--accent)' }}>primer nivel</span>
        </h2>

        <p
          style={{
            color:        'var(--muted)',
            fontSize:     15,
            lineHeight:   1.8,
            marginBottom: 48,
          }}
        >
          Agenda una sesión gratuita de diagnóstico. Sin compromisos, sin letra
          pequeña. Solo una conversación honesta sobre cómo hacer crecer tu
          negocio con tecnología.
        </p>

        <button
          onClick={onContact}
          style={{
            padding:       '20px 54px',
            background:    'linear-gradient(135deg, var(--accent), var(--accent2))',
            border:        'none',
            color:         'var(--black)',
            fontFamily:    "'Syne', sans-serif",
            fontWeight:    800,
            fontSize:      15,
            letterSpacing: 3,
            cursor:        'none',
            textTransform: 'uppercase',
            boxShadow:     '0 0 50px rgba(0,245,196,0.2)',
            transition:    'all 0.3s ease',
            animation:     'pulse-border 3s ease-in-out infinite',
          }}
          onMouseEnter={(e) => {
            e.target.style.transform  = 'translateY(-4px) scale(1.02)'
            e.target.style.boxShadow  = '0 0 80px rgba(0,245,196,0.4)'
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'none'
            e.target.style.boxShadow = '0 0 50px rgba(0,245,196,0.2)'
          }}
        >
          Agenda tu sesión gratuita →
        </button>
      </div>
    </section>
  )
}
