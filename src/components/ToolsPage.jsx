import { Link, useNavigate } from 'react-router-dom'
import { useWindowSize } from '../hooks/useWindowSize'
import CustomCursor from './CustomCursor'

export default function ToolsPage() {
  const { isMobile, isTablet } = useWindowSize()
  const navigate = useNavigate()

  return (
    <>
      <CustomCursor />
      <div style={{ minHeight: '100vh', background: 'var(--bg)', color: 'var(--text)', padding: isMobile ? '40px 20px' : '80px 40px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {/* Header / Back button */}
      <div style={{ width: '100%', maxWidth: 1000, display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 60 }}>
        <button onClick={() => navigate('/')} style={{ background: 'transparent', border: '1px solid var(--border)', color: 'var(--muted)', padding: '10px 20px', fontFamily: "'Space Mono',monospace", fontSize: 12, cursor: 'pointer', transition: 'all 0.3s' }}
          onMouseEnter={e => { e.target.style.borderColor = 'var(--accent)'; e.target.style.color = 'var(--accent)' }}
          onMouseLeave={e => { e.target.style.borderColor = 'var(--border)'; e.target.style.color = 'var(--muted)' }}
        >
          ← VOLVER
        </button>
        <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: isTablet ? 17 : 20, color: 'var(--accent)', letterSpacing: -0.5 }}>
          HOVO<span style={{ color: 'var(--accent2)' }}>CODEX</span>
        </div>
      </div>

      <div style={{ textAlign: 'center', marginBottom: 60 }}>
        <h1 style={{ fontFamily: "'Syne',sans-serif", fontSize: isMobile ? 32 : 48, fontWeight: 800, letterSpacing: -1, marginBottom: 16 }}>
          Nuestras <span style={{ color: 'var(--accent)' }}>Herramientas</span>
        </h1>
        <p style={{ fontFamily: "'Space Mono',monospace", fontSize: 14, color: 'var(--muted)', maxWidth: 600, margin: '0 auto' }}>
          Explora los productos y herramientas interactivas que hemos construido para potenciar tu presencia digital.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: isTablet ? '1fr' : '1fr 1fr', gap: 32, width: '100%', maxWidth: 1000 }}>
        {/* Card 1: VCard Creator */}
        <Link to="/card" style={{ textDecoration: 'none' }}>
          <div style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(0,245,196,0.3)',
            borderRadius: 16,
            padding: 40,
            height: '100%',
            transition: 'all 0.4s ease',
            cursor: 'pointer',
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            overflow: 'hidden'
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = 'translateY(-10px)';
            e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,245,196,0.15)';
            e.currentTarget.style.background = 'rgba(0,245,196,0.05)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = 'none';
            e.currentTarget.style.boxShadow = 'none';
            e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
          }}>
            <div style={{ position: 'absolute', top: 20, right: 20, background: 'var(--accent)', color: 'var(--black)', padding: '4px 12px', borderRadius: 20, fontSize: 10, fontFamily: "'Space Mono',monospace", fontWeight: 'bold' }}>
              ACTIVO
            </div>
            <div style={{ fontSize: 40, marginBottom: 20 }}>📇</div>
            <h3 style={{ fontFamily: "'Syne',sans-serif", fontSize: 24, fontWeight: 700, color: 'var(--text)', marginBottom: 12 }}>
              Creador de Tarjetas
            </h3>
            <p style={{ fontFamily: "'Space Mono',monospace", fontSize: 14, color: 'var(--muted)', lineHeight: 1.6, flexGrow: 1 }}>
              Crea tu propia tarjeta de presentación digital interactiva. Personaliza tus enlaces, colores y comparte tu perfil fácilmente con un código QR.
            </p>
            <div style={{ marginTop: 24, display: 'flex', alignItems: 'center', color: 'var(--accent)', fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 14 }}>
              Usar herramienta <span style={{ marginLeft: 8 }}>→</span>
            </div>
          </div>
        </Link>

        {/* Card 2: Coming Soon */}
        <div style={{
          background: 'rgba(255,255,255,0.02)',
          border: '1px dashed rgba(255,255,255,0.15)',
          borderRadius: 16,
          padding: 40,
          height: '100%',
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          opacity: 0.7
        }}>
          <div style={{ position: 'absolute', top: 20, right: 20, background: 'rgba(255,255,255,0.1)', color: 'var(--muted)', padding: '4px 12px', borderRadius: 20, fontSize: 10, fontFamily: "'Space Mono',monospace", fontWeight: 'bold' }}>
            PRÓXIMAMENTE
          </div>
          <div style={{ fontSize: 40, marginBottom: 20, filter: 'grayscale(100%)' }}>🚀</div>
          <h3 style={{ fontFamily: "'Syne',sans-serif", fontSize: 24, fontWeight: 700, color: 'var(--text)', marginBottom: 12 }}>
            Otra Herramienta
          </h3>
          <p style={{ fontFamily: "'Space Mono',monospace", fontSize: 14, color: 'var(--muted)', lineHeight: 1.6, flexGrow: 1 }}>
            Estamos trabajando en nuevas soluciones de IA y automatización para potenciar tu negocio. Mantente atento a nuestras próximas actualizaciones.
          </p>
          <div style={{ marginTop: 24, display: 'flex', alignItems: 'center', color: 'var(--muted)', fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 14 }}>
            Muy pronto...
          </div>
        </div>
      </div>
      </div>
    </>
  )
}
