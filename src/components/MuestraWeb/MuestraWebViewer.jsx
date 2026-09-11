import { useNavigate } from 'react-router-dom'
import CustomCursor from '../CustomCursor'

export default function MuestraWebViewer() {
  const navigate = useNavigate()

  return (
    <div style={{ width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column', background: '#0a0a0a', overflow: 'hidden' }}>
      <CustomCursor />
      
      {/* Top control bar */}
      <header style={{
        height: 60,
        background: '#0d0d12',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 20px',
        boxSizing: 'border-box',
        zIndex: 50
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <button
            onClick={() => navigate('/herramientas')}
            style={{
              background: 'transparent',
              border: '1px solid rgba(0, 245, 196, 0.3)',
              color: 'var(--accent, #00f5c4)',
              padding: '6px 14px',
              borderRadius: 6,
              fontFamily: "'Space Mono', monospace",
              fontSize: 12,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              transition: 'all 0.25s ease'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(0, 245, 196, 0.15)'
              e.currentTarget.style.borderColor = 'var(--accent, #00f5c4)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.borderColor = 'rgba(0, 245, 196, 0.3)'
            }}
          >
            ← Volver a Herramientas
          </button>

          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{
              background: 'rgba(0, 245, 196, 0.12)',
              color: 'var(--accent, #00f5c4)',
              fontSize: 11,
              fontFamily: "'Space Mono', monospace",
              padding: '3px 8px',
              borderRadius: 4,
              fontWeight: 700
            }}>
              MUESTRA EN VIVO
            </span>
            <span style={{
              fontFamily: "'Syne', sans-serif",
              color: '#fff',
              fontSize: 14,
              fontWeight: 700,
              display: 'none'
            }} className="desktop-title">
              Landing Page Profesional &bull; Plan S/ 50
            </span>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <a
            href="/muestra-web/index.html"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: '#94a3b8',
              textDecoration: 'none',
              fontFamily: "'Space Mono', monospace",
              fontSize: 12,
              display: 'inline-flex',
              alignItems: 'center',
              gap: 4,
              padding: '6px 12px',
              borderRadius: 6,
              border: '1px solid rgba(255, 255, 255, 0.1)',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.color = '#fff'
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.25)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.color = '#94a3b8'
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'
            }}
          >
            Pestaña completa ↗
          </a>

          <a
            href="https://wa.me/51924073688?text=Hola%20HOVOCODEX,%20vi%20la%20muestra%20de%20la%20p%C3%A1gina%20web%20de%20S/%2050%20y%20quiero%20hacer%20mi%20pedido"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: '#25d366',
              color: '#fff',
              textDecoration: 'none',
              fontFamily: "'Syne', sans-serif",
              fontWeight: 700,
              fontSize: 12,
              padding: '8px 16px',
              borderRadius: 6,
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              boxShadow: '0 2px 8px rgba(37, 211, 102, 0.3)',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-1px)'
              e.currentTarget.style.boxShadow = '0 4px 14px rgba(37, 211, 102, 0.45)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'none'
              e.currentTarget.style.boxShadow = '0 2px 8px rgba(37, 211, 102, 0.3)'
            }}
          >
            Pedir por S/ 50
          </a>
        </div>
      </header>

      {/* Embedded landing page */}
      <iframe
        src="/muestra-web/index.html"
        title="Muestra Landing Page Hovocodex"
        style={{
          flexGrow: 1,
          width: '100%',
          border: 'none',
          backgroundColor: '#f8fafc'
        }}
      />
    </div>
  )
}
