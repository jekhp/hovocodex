import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { 
  UserCircle2, Phone, Mail, MapPin, Globe, ChevronRight,
  Monitor, PenTool, Megaphone, Share2, Briefcase, Camera, Hash, Users, MessageCircle, FileText, AlertTriangle, UserX
} from 'lucide-react'
import '../../styles/card.css'

const AVAILABLE_ICONS = [
  { id: 'PenTool', label: 'Diseño / Creatividad', icon: PenTool },
  { id: 'Megaphone', label: 'Marketing', icon: Megaphone },
  { id: 'Monitor', label: 'Web / App', icon: Monitor },
  { id: 'Share2', label: 'Redes Sociales', icon: Share2 },
]

const SOCIAL_PLATFORMS = [
  { id: 'linkedin', color: '#0077b5', icon: Briefcase },
  { id: 'instagram', color: '#e1306c', icon: Camera },
  { id: 'whatsapp', color: '#25D366', icon: MessageCircle },
  { id: 'portfolio', color: '#6c63ff', icon: FileText },
  { id: 'twitter', color: '#1DA1F2', icon: Hash },
  { id: 'facebook', color: '#1877F2', icon: Users },
]

export default function CardViewer() {
  const { username } = useParams()
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!username) {
      setError('Usuario no especificado')
      return
    }

    const fetchCard = async () => {
      try {
        const response = await fetch(`/api/cards/${username}`)
        if (!response.ok) {
          if (response.status === 404) {
            setError(`Tarjeta no encontrada para @${username}`)
          } else {
            setError('Error al obtener la tarjeta del servidor')
          }
          return
        }
        const data = await response.json()
        setData(data)
      } catch (err) {
        console.error(err)
        setError('Error al conectar con el servidor')
      }
    }

    fetchCard()
  }, [username])

  if (error) {
    return (
      <div className="card-app-wrapper public-view bg-dark">
        <div style={{ color: '#ff8a8a', textAlign: 'center', background: '#330000', padding: '2rem', borderRadius: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          {error.includes('encontrada') ? <UserX size={24} /> : <AlertTriangle size={24} />}
          <span>{error}</span>
        </div>
      </div>
    )
  }

  if (!data) {
    return <div className="card-app-wrapper public-view bg-dark">Cargando...</div>
  }

  const {
    template, companyLogo, companyName, companySlogan,
    avatarUrl, nombre, cargo, contacto, servicios, redes,
    ctaText, ctaUrl, createdAt
  } = data

  // Cálculo de caducidad del período de prueba (3 días de prueba gratuita)
  const creationDate = createdAt ? new Date(createdAt) : null;
  const daysOnline = creationDate ? Math.floor((new Date() - creationDate) / (1000 * 60 * 60 * 24)) : 0;
  const hasExpired = creationDate ? (daysOnline >= 3) : false;

  if (hasExpired) {
    return (
      <div className={`card-app-wrapper public-view ${template || 'bg-dark'}`}>
        <div className="business-card" style={{ backdropFilter: 'blur(20px)', background: 'rgba(0, 0, 0, 0.75)', border: '1px solid rgba(255, 255, 255, 0.1)', boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }}>
          <div className="bc-profile" style={{ textAlign: 'center', padding: '3rem 1.5rem' }}>
            <div style={{ background: 'rgba(255, 75, 75, 0.15)', width: '80px', height: '80px', borderRadius: '50%', display: 'flex', alignItems: 'center', margin: '0 auto 1.5rem', justifyContent: 'center', border: '1px solid rgba(255, 75, 75, 0.3)' }}>
              <AlertTriangle size={42} color="#ff4b4b" />
            </div>
            
            <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: '1.8rem', color: '#fff', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
              Tarjeta Inactiva
            </h2>
            <div style={{ fontSize: '0.85rem', color: '#ff4b4b', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1.5rem', background: 'rgba(255, 75, 75, 0.1)', padding: '4px 12px', borderRadius: '20px', display: 'inline-block' }}>
              Período de prueba vencido
            </div>

            <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '2.5rem', maxWidth: '320px', marginInline: 'auto' }}>
              El período gratuito de <strong>3 días</strong> ha concluido para <strong>{nombre || 'esta tarjeta'}</strong>. Para reactivar tu tarjeta digital y seguir atrayendo clientes, por favor contáctanos hoy mismo.
            </p>

            <a 
              href={`https://wa.me/51924073688?text=Hola!%20Deseo%20reactivar%20mi%20tarjeta%20digital%20de%20presentación%20para%20${encodeURIComponent(nombre || '')}%20(slug:%20${username})`} 
              target="_blank" 
              rel="noreferrer" 
              className="bc-cta-btn" 
              style={{ 
                background: 'linear-gradient(135deg, #00F2FE, #4FACFE)', 
                border: 'none', 
                color: '#111', 
                fontWeight: 'bold', 
                boxShadow: '0 8px 20px rgba(79, 172, 254, 0.4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                padding: '12px 24px',
                borderRadius: '30px',
                textDecoration: 'none',
                width: '100%',
                boxSizing: 'border-box'
              }}
            >
              <MessageCircle size={18} /> Reactivar por WhatsApp
            </a>

            <div style={{ marginTop: '2.5rem', fontSize: '0.7rem', opacity: 0.5, letterSpacing: '1px' }}>
              Contacto de soporte: +51 924073688
            </div>
          </div>
        </div>
      </div>
    )
  }

  const renderContactIcon = (type) => {
    switch(type) {
      case 'phone': return <Phone size={14} />
      case 'email': return <Mail size={14} />
      case 'address': return <MapPin size={14} />
      case 'web': return <Globe size={14} />
      default: return <ChevronRight size={14} />
    }
  }

  const renderServiceIcon = (iconStr) => {
    const found = AVAILABLE_ICONS.find(i => i.id === iconStr)
    const Icon = found ? found.icon : Monitor
    return <Icon size={22} />
  }

  return (
    <div className={`card-app-wrapper public-view ${template || 'bg-dark'}`}>
      <div className="business-card">
        
        {/* Header */}
        {(companyLogo || companyName) && (
          <div className="bc-header">
            <div className="bc-logo">
              {companyLogo && <img src={companyLogo} alt="Logo" />}
              {companyName}
            </div>
            {companySlogan && <div className="bc-slogan">{companySlogan}</div>}
          </div>
        )}

        {/* Profile */}
        <div className="bc-profile">
          <div className="bc-avatar-container">
            <div className="bc-avatar">
              {avatarUrl ? <img src={avatarUrl} alt="Avatar" /> : <UserCircle2 size={50} color="#666"/>}
            </div>
          </div>
          <div className="bc-name">{nombre || 'Sin Nombre'}</div>
          <div className="bc-role">{cargo}</div>
        </div>

        {/* Contact */}
        {contacto && contacto.length > 0 && (
          <div className="bc-panel">
            <div className="bc-panel-title">Datos de Contacto</div>
            <div className="bc-contact-grid">
              {contacto.map((c, i) => {
                let href = '#'
                if (c.type === 'phone') href = `tel:${c.value.replace(/\s+/g, '')}`
                if (c.type === 'email') href = `mailto:${c.value}`
                if (c.type === 'web') href = c.value.startsWith('http') ? c.value : `https://${c.value}`
                
                return (
                  <a key={i} href={href} target={c.type === 'web' ? '_blank' : '_self'} rel="noreferrer" className="bc-contact-item">
                    <div className="bc-contact-icon">{renderContactIcon(c.type)}</div>
                    <span>{c.value}</span>
                  </a>
                )
              })}
            </div>
          </div>
        )}

        {/* Services */}
        {servicios && servicios.length > 0 && (
          <div className="bc-panel">
            <div className="bc-panel-title">Servicios</div>
            <div className="bc-services-grid">
              {servicios.map((s, i) => (
                <div key={i} className="bc-service-item">
                  <div className="bc-service-icon-wrapper">
                    {renderServiceIcon(s.icon)}
                  </div>
                  <div className="bc-service-name">{s.name}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Socials */}
        {redes && redes.length > 0 && (
          <div className="bc-panel" style={{ background: 'transparent', border: 'none', padding: 0 }}>
            <div className="bc-panel-title" style={{textAlign:'center'}}>Conecta con nosotros</div>
            <div className="bc-social-flex">
              {redes.map((r, i) => {
                const platform = SOCIAL_PLATFORMS.find(p => p.id === r.platform) || SOCIAL_PLATFORMS[0]
                const Icon = platform.icon
                return (
                  <a key={i} href={r.url} target="_blank" rel="noreferrer" className="bc-social-item">
                    <div className="bc-social-btn" style={{ background: `linear-gradient(135deg, ${platform.color}, #111)` }}>
                      <Icon size={24} />
                    </div>
                    <div className="bc-social-handle">{r.handle}</div>
                  </a>
                )
              })}
            </div>
          </div>
        )}

        {/* CTA */}
        {ctaText && (
          <a href={ctaUrl || '#'} target="_blank" rel="noreferrer" className="bc-cta-btn">
            {ctaText} <ChevronRight size={18} />
          </a>
        )}

        <div style={{ marginTop: '2rem', fontSize: '0.7rem', opacity: 0.6, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span>Powered by HovoCodex</span>
        </div>

      </div>
    </div>
  )
}
