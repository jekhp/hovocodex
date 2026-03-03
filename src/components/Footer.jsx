import { useWindowSize } from '../hooks/useWindowSize'

const FOOTER_SERVICES = ['Agentes IA','Desarrollo Web','Software Custom','Consultoría']
const SOCIAL = ['LinkedIn','Twitter','GitHub']

export default function Footer({ onContact }) {
  const { isMobile, isTablet } = useWindowSize()
  const pad = isMobile ? '48px 20px 32px' : isTablet ? '60px 36px 32px' : '72px clamp(40px,7vw,100px) 40px'
  const cols = isMobile || isTablet ? '1fr' : '2fr 1fr 1fr'

  return (
    <footer style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)', padding: pad }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: cols, gap: isMobile ? 36 : 60, marginBottom: 48 }}>

          {/* Brand */}
          <div>
            <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 24, color: 'var(--accent)', marginBottom: 14 }}>
              HOVO<span style={{ color: 'var(--accent2)' }}>CODEX</span>
            </div>
            <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: 13, maxWidth: 300, marginBottom: 20 }}>
              Especialistas en desarrollo de software y web para empresas que buscan la innovación. Tu aliado tecnológico para crecer.
            </p>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {SOCIAL.map(s => (
                <div key={s} style={{ padding: '6px 12px', border: '1px solid var(--border)', fontFamily: "'Space Mono',monospace", fontSize: 9, color: 'var(--muted)', letterSpacing: 2, transition: 'all 0.2s', cursor: 'pointer' }}
                  onMouseEnter={e => { e.target.style.borderColor = 'var(--accent)'; e.target.style.color = 'var(--accent)' }}
                  onMouseLeave={e => { e.target.style.borderColor = 'var(--border)'; e.target.style.color = 'var(--muted)' }}
                >{s}</div>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <div style={{ fontFamily: "'Space Mono',monospace", fontSize: 9, letterSpacing: 4, color: 'var(--accent)', marginBottom: 18 }}>SERVICIOS</div>
            {FOOTER_SERVICES.map(s => (
              <div key={s} style={{ color: 'var(--muted)', fontSize: 13, marginBottom: 10, transition: 'color 0.2s', cursor: 'pointer' }}
                onMouseEnter={e => e.target.style.color = 'var(--text)'}
                onMouseLeave={e => e.target.style.color = 'var(--muted)'}
              >{s}</div>
            ))}
          </div>

          {/* Contact */}
          <div>
            <div style={{ fontFamily: "'Space Mono',monospace", fontSize: 9, letterSpacing: 4, color: 'var(--accent)', marginBottom: 18 }}>CONTACTO</div>
            <div style={{ color: 'var(--muted)', fontSize: 13, marginBottom: 10 }}>hovocodex22@gmail.com</div>
            <div style={{ color: 'var(--muted)', fontSize: 13, marginBottom: 10 }}>+51 924073688</div>
            <div style={{ color: 'var(--muted)', fontSize: 13, marginBottom: 24 }}>Chinchero - Cusco, PE</div>
            <button onClick={onContact} style={{ padding: '11px 20px', background: 'transparent', border: '1px solid var(--accent)', color: 'var(--accent)', fontFamily: "'Space Mono',monospace", fontSize: 9, letterSpacing: 3, cursor: 'pointer', textTransform: 'uppercase', transition: 'all 0.3s' }}
              onMouseEnter={e => { e.target.style.background = 'var(--accent)'; e.target.style.color = 'var(--black)' }}
              onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.color = 'var(--accent)' }}
            >ESCRÍBENOS</button>
          </div>
        </div>

        {/* Bottom */}
        <div style={{ borderTop: '1px solid var(--border)', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <span style={{ fontFamily: "'Space Mono',monospace", fontSize: 9, color: 'var(--muted)', letterSpacing: 1 }}>© 2026 HOVOCODEX TECHNOLOGIES. TODOS LOS DERECHOS RESERVADOS.</span>
          <span style={{ fontFamily: "'Space Mono',monospace", fontSize: 9, color: 'var(--muted)', letterSpacing: 1 }}>Tecnologies</span>
        </div>
      </div>
    </footer>
  )
}
