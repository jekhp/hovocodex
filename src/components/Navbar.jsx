import { useState } from 'react'
import { useScrolled } from '../hooks/useScrolled'
import { useWindowSize } from '../hooks/useWindowSize'
import { NAV_LINKS } from '../data/constants'

export default function Navbar({ onContact }) {
  const scrolled = useScrolled(50)
  const { isTablet } = useWindowSize()
  const [menuOpen, setMenuOpen] = useState(false)

  const close = () => setMenuOpen(false)

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      width: '100%', boxSizing: 'border-box',
      padding: '0 20px',
      background: scrolled || menuOpen ? 'rgba(6,6,8,0.97)' : 'transparent',
      backdropFilter: scrolled || menuOpen ? 'blur(20px)' : 'none',
      borderBottom: scrolled && !menuOpen ? '1px solid var(--border)' : 'none',
      transition: 'background 0.4s ease, backdrop-filter 0.4s ease',
    }}>
      {/* Top bar */}
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        height: 64, width: '100%',
      }}>
        {/* Logo */}
        <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: isTablet ? 17 : 20, color: 'var(--accent)', letterSpacing: -0.5, flexShrink: 0 }}>
          HOVO<span style={{ color: 'var(--accent2)' }}>CODEX</span>
        </div>

        {/* Desktop links */}
        {!isTablet && (
          <div style={{ display: 'flex', gap: 28, alignItems: 'center' }}>
            {NAV_LINKS.map(link => (
              <a key={link} href={`#${link.toLowerCase()}`} style={{ fontFamily: "'Space Mono',monospace", fontSize: 10, color: 'var(--muted)', textDecoration: 'none', letterSpacing: 2, textTransform: 'uppercase', transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = 'var(--accent)'}
                onMouseLeave={e => e.target.style.color = 'var(--muted)'}
              >{link}</a>
            ))}
            <button onClick={onContact} style={{ padding: '9px 20px', background: 'transparent', border: '1px solid var(--accent)', color: 'var(--accent)', fontFamily: "'Space Mono',monospace", fontSize: 10, letterSpacing: 2, cursor: 'none', textTransform: 'uppercase', transition: 'all 0.3s' }}
              onMouseEnter={e => { e.target.style.background = 'var(--accent)'; e.target.style.color = 'var(--black)' }}
              onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.color = 'var(--accent)' }}
            >CONTACTO</button>
          </div>
        )}

        {/* Hamburger */}
        {isTablet && (
          <button onClick={() => setMenuOpen(o => !o)} style={{ background: 'none', border: '1px solid var(--border)', padding: '8px 10px', cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: 5, flexShrink: 0 }}>
            <span style={{ display: 'block', width: 22, height: 2, background: 'var(--accent)', transition: 'all 0.3s', transform: menuOpen ? 'rotate(45deg) translate(4px,5px)' : 'none' }} />
            <span style={{ display: 'block', width: 22, height: 2, background: 'var(--accent)', transition: 'all 0.3s', opacity: menuOpen ? 0 : 1 }} />
            <span style={{ display: 'block', width: 22, height: 2, background: 'var(--accent)', transition: 'all 0.3s', transform: menuOpen ? 'rotate(-45deg) translate(4px,-5px)' : 'none' }} />
          </button>
        )}
      </div>

      {/* Mobile dropdown */}
      {isTablet && menuOpen && (
        <div style={{ borderTop: '1px solid var(--border)', paddingBottom: 20 }}>
          {NAV_LINKS.map(link => (
            <a key={link} href={`#${link.toLowerCase()}`} onClick={close} style={{ display: 'block', fontFamily: "'Space Mono',monospace", fontSize: 12, color: 'var(--muted)', textDecoration: 'none', letterSpacing: 3, textTransform: 'uppercase', padding: '14px 0', borderBottom: '1px solid var(--border)' }}>
              {link}
            </a>
          ))}
          <button onClick={() => { onContact(); close() }} style={{ width: '100%', marginTop: 16, padding: 15, background: 'linear-gradient(135deg,var(--accent2),var(--accent))', border: 'none', color: 'var(--black)', fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 13, letterSpacing: 2, cursor: 'pointer', textTransform: 'uppercase' }}>
            CONTACTO
          </button>
        </div>
      )}
    </nav>
  )
}
