import { useScrolled } from '../hooks/useScrolled'
import { NAV_LINKS } from '../data/constants'

export default function Navbar({ onContact }) {
  const scrolled = useScrolled(50)

  return (
    <nav
      style={{
        position:   'fixed',
        top:        0,
        left:       0,
        right:      0,
        zIndex:     1000,
        padding:    scrolled
          ? '14px clamp(20px, 6vw, 100px)'
          : '26px clamp(20px, 6vw, 100px)',
        background:     scrolled ? 'rgba(6,6,8,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)'        : 'none',
        borderBottom:   scrolled ? '1px solid var(--border)' : 'none',
        display:        'flex',
        justifyContent: 'space-between',
        alignItems:     'center',
        transition:     'all 0.4s ease',
      }}
    >
      {/* Logo */}
      <div
        style={{
          fontFamily:    "'Syne', sans-serif",
          fontWeight:    800,
          fontSize:      20,
          color:         'var(--accent)',
          letterSpacing: -0.5,
        }}
      >
        HOVO<span style={{ color: 'var(--accent2)' }}>CODEX</span>
      </div>

      {/* Links + CTA */}
      <div style={{ display: 'flex', gap: 36, alignItems: 'center' }}>
        {NAV_LINKS.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            style={{
              fontFamily:  "'Space Mono', monospace",
              fontSize:    10,
              color:       'var(--muted)',
              textDecoration: 'none',
              letterSpacing:  2,
              textTransform:  'uppercase',
              cursor:         'none',
              transition:     'color 0.2s',
            }}
            onMouseEnter={(e) => (e.target.style.color = 'var(--accent)')}
            onMouseLeave={(e) => (e.target.style.color = 'var(--muted)')}
          >
            {link}
          </a>
        ))}

        <button
          onClick={onContact}
          style={{
            padding:     '10px 22px',
            background:  'transparent',
            border:      '1px solid var(--accent)',
            color:       'var(--accent)',
            fontFamily:  "'Space Mono', monospace",
            fontSize:    10,
            letterSpacing: 2,
            cursor:      'none',
            textTransform: 'uppercase',
            transition:  'all 0.3s',
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
          CONTACTO
        </button>
      </div>
    </nav>
  )
}
