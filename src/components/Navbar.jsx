import { useState } from 'react'
import { useScrolled } from '../hooks/useScrolled'
import { NAV_LINKS } from '../data/constants'

export default function Navbar({ onContact }) {
  const scrolled = useScrolled(50)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      padding: scrolled ? '14px clamp(20px,6vw,100px)' : '22px clamp(20px,6vw,100px)',
      background: scrolled || menuOpen ? 'rgba(6,6,8,0.96)' : 'transparent',
      backdropFilter: scrolled || menuOpen ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border)' : 'none',
      transition: 'all 0.4s ease',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Logo */}
        <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 20, color: 'var(--accent)', letterSpacing: -0.5 }}>
          HOVO<span style={{ color: 'var(--accent2)' }}>CODEX</span>
        </div>

        {/* Desktop links */}
        <div style={{ display: 'flex', gap: 36, alignItems: 'center' }} className="desktop-nav">
          {NAV_LINKS.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`}
              style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, color: 'var(--muted)', textDecoration: 'none', letterSpacing: 2, textTransform: 'uppercase', cursor: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => e.target.style.color = 'var(--accent)'}
              onMouseLeave={e => e.target.style.color = 'var(--muted)'}
            >{link}</a>
          ))}
          <button onClick={onContact}
            style={{ padding: '10px 22px', background: 'transparent', border: '1px solid var(--accent)', color: 'var(--accent)', fontFamily: "'Space Mono', monospace", fontSize: 10, letterSpacing: 2, cursor: 'none', textTransform: 'uppercase', transition: 'all 0.3s' }}
            onMouseEnter={e => { e.target.style.background = 'var(--accent)'; e.target.style.color = 'var(--black)' }}
            onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.color = 'var(--accent)' }}
          >CONTACTO</button>
        </div>

        {/* Hamburger */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="hamburger"
          style={{ display: 'none', background: 'none', border: '1px solid var(--border)', padding: '8px 10px', cursor: 'none', flexDirection: 'column', gap: 5 }}>
          <span style={{ display: 'block', width: 22, height: 1.5, background: menuOpen ? 'var(--accent3)' : 'var(--accent)', transition: 'all 0.3s', transform: menuOpen ? 'rotate(45deg) translate(4px, 4px)' : 'none' }} />
          <span style={{ display: 'block', width: 22, height: 1.5, background: 'var(--accent)', transition: 'all 0.3s', opacity: menuOpen ? 0 : 1 }} />
          <span style={{ display: 'block', width: 22, height: 1.5, background: menuOpen ? 'var(--accent3)' : 'var(--accent)', transition: 'all 0.3s', transform: menuOpen ? 'rotate(-45deg) translate(4px, -4px)' : 'none' }} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{ paddingTop: 24, paddingBottom: 16, display: 'flex', flexDirection: 'column', gap: 4, borderTop: '1px solid var(--border)', marginTop: 16 }} className="mobile-menu">
          {NAV_LINKS.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: 'var(--muted)', textDecoration: 'none', letterSpacing: 3, textTransform: 'uppercase', padding: '12px 0', borderBottom: '1px solid var(--border)' }}
            >{link}</a>
          ))}
          <button onClick={() => { onContact(); setMenuOpen(false) }}
            style={{ marginTop: 16, padding: '14px', background: 'linear-gradient(135deg, var(--accent2), var(--accent))', border: 'none', color: 'var(--black)', fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 13, letterSpacing: 2, cursor: 'none', textTransform: 'uppercase' }}
          >CONTACTO</button>
        </div>
      )}
    </nav>
  )
}
