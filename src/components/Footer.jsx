const FOOTER_SERVICES = [
  'Agentes IA',
  'Desarrollo Web',
  'Software Custom',
  'CRM Inteligente',
  'Consultoría',
  'Cloud',
]

const SOCIAL_LINKS = ['LinkedIn', 'Twitter', 'GitHub']

export default function Footer({ onContact }) {
  return (
    <footer
      style={{
        background:  'var(--surface)',
        borderTop:   '1px solid var(--border)',
        padding:     '72px clamp(24px, 7vw, 100px) 40px',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>

        {/* Top grid */}
        <div
          style={{
            display:             'grid',
            gridTemplateColumns: '2fr 1fr 1fr',
            gap:                 60,
            marginBottom:        60,
          }}
        >
          {/* Brand column */}
          <div>
            <div
              style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 800,
                fontSize:   26,
                color:      'var(--accent)',
                marginBottom: 16,
              }}
            >
              HOVO<span style={{ color: 'var(--accent2)' }}>CODEX</span>
            </div>

            <p
              style={{
                color:        'var(--muted)',
                lineHeight:   1.8,
                fontSize:     13,
                maxWidth:     300,
                marginBottom: 24,
              }}
            >
              Especialistas en desarrollo de software y web para empresas que
              buscan la innovación. Tu aliado tecnológico para crecer sin límites.
            </p>

            <div style={{ display: 'flex', gap: 8 }}>
              {SOCIAL_LINKS.map((s) => (
                <div
                  key={s}
                  style={{
                    padding:       '7px 12px',
                    border:        '1px solid var(--border)',
                    fontFamily:    "'Space Mono', monospace",
                    fontSize:      9,
                    color:         'var(--muted)',
                    letterSpacing: 2,
                    cursor:        'none',
                    transition:    'all 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.borderColor = 'var(--accent)'
                    e.target.style.color       = 'var(--accent)'
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.borderColor = 'var(--border)'
                    e.target.style.color       = 'var(--muted)'
                  }}
                >
                  {s}
                </div>
              ))}
            </div>
          </div>

          {/* Services column */}
          <div>
            <div
              style={{
                fontFamily:    "'Space Mono', monospace",
                fontSize:      9,
                letterSpacing: 4,
                color:         'var(--accent)',
                marginBottom:  20,
              }}
            >
              SERVICIOS
            </div>
            {FOOTER_SERVICES.map((s) => (
              <div
                key={s}
                style={{ color: 'var(--muted)', fontSize: 13, marginBottom: 10, cursor: 'none', transition: 'color 0.2s' }}
                onMouseEnter={(e) => (e.target.style.color = 'var(--text)')}
                onMouseLeave={(e) => (e.target.style.color = 'var(--muted)')}
              >
                {s}
              </div>
            ))}
          </div>

          {/* Contact column */}
          <div>
            <div
              style={{
                fontFamily:    "'Space Mono', monospace",
                fontSize:      9,
                letterSpacing: 4,
                color:         'var(--accent)',
                marginBottom:  20,
              }}
            >
              CONTACTO
            </div>
            <div style={{ color: 'var(--muted)', fontSize: 13, marginBottom: 10 }}>hovocodex@gmail.com</div>
            <div style={{ color: 'var(--muted)', fontSize: 13, marginBottom: 10 }}>+51 924-073-688</div>
            <div style={{ color: 'var(--muted)', fontSize: 13, marginBottom: 28 }}>Chinchero - Cusco, PE</div>

            <button
              onClick={onContact}
              style={{
                padding:       '11px 22px',
                background:    'transparent',
                border:        '1px solid var(--accent)',
                color:         'var(--accent)',
                fontFamily:    "'Space Mono', monospace",
                fontSize:      9,
                letterSpacing: 3,
                cursor:        'none',
                textTransform: 'uppercase',
                transition:    'all 0.3s',
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'var(--accent)'
                e.target.style.color      = 'var(--black)'
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'transparent'
                e.target.style.color      = 'var(--accent)'
              }}
            >
              ESCRÍBENOS
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop:      '1px solid var(--border)',
            paddingTop:     28,
            display:        'flex',
            justifyContent: 'space-between',
            alignItems:     'center',
          }}
        >
          <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 9, color: 'var(--muted)', letterSpacing: 2 }}>
            © 2026 HOVOCODEX TECHNOLOGIES. TODOS LOS DERECHOS RESERVADOS.
          </span>
          <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 9, color: 'var(--muted)', letterSpacing: 2 }}>
            BUILT WITH ◆ AI + CODE
          </span>
        </div>
      </div>
    </footer>
  )
}
