import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { 
  PlusCircle, Trash2, Globe, Sparkles, Building2, UserCircle2, 
  Phone, Mail, MapPin, MousePointerClick, ChevronRight,
  Monitor, PenTool, Megaphone, Share2, Briefcase, Camera, Hash, Users, MessageCircle, FileText
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

export default function CardEditor() {
  const navigate = useNavigate()
  
  // Theme
  const [template, setTemplate] = useState('bg-neon-city')
  
  // Company
  const [companyLogo, setCompanyLogo] = useState('https://cdn-icons-png.flaticon.com/512/9382/9382189.png')
  const [companyName, setCompanyName] = useState('LUNA CREATIVE AGENCY')
  const [companySlogan, setCompanySlogan] = useState('Diseño, Marketing & Estrategia Digital')

  // Profile
  const [avatarUrl, setAvatarUrl] = useState('https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop')
  const [nombre, setNombre] = useState('Eva Martínez')
  const [cargo, setCargo] = useState('Co-Fundadora / Directora Creativa')

  // Contact Grid
  const [contacto, setContacto] = useState([
    { type: 'phone', value: '910 123 456' },
    { type: 'email', value: 'eva@lunacreative.es' },
    { type: 'address', value: 'Calle Velázquez 45, Madrid' },
    { type: 'web', value: 'lunacreative.es' }
  ])

  // Services
  const [servicios, setServicios] = useState([
    { icon: 'PenTool', name: 'Branding' },
    { icon: 'Megaphone', name: 'Marketing Digital' },
    { icon: 'Monitor', name: 'Diseño Web' },
    { icon: 'Share2', name: 'Redes Sociales' }
  ])

  // Socials
  const [redes, setRedes] = useState([
    { platform: 'linkedin', handle: '@evamartinezluna', url: 'https://linkedin.com' },
    { platform: 'instagram', handle: '@lunacreative_es', url: 'https://instagram.com' },
    { platform: 'whatsapp', handle: '678 901 234', url: 'https://wa.me/123456789' },
    { platform: 'portfolio', handle: '/portafolio', url: 'https://lunacreative.es/portfolio' }
  ])

  // CTA
  const [ctaText, setCtaText] = useState('¡Reserva Tu Consulta Gratis!')
  const [ctaUrl, setCtaUrl] = useState('https://calendly.com')

  const slug = nombre.trim().toLowerCase().replace(/\s+/g, '_') || 'usuario'
  const urlPreview = `hovocodex.vercel.app/card/${slug}`

  // Handlers for dynamic arrays
  const updateArray = (setter, array, index, field, value) => {
    const newArr = [...array]
    newArr[index][field] = value
    setter(newArr)
  }
  const removeFromArray = (setter, array, index) => {
    const newArr = [...array]
    newArr.splice(index, 1)
    setter(newArr)
  }
  const addService = () => {
    setServicios([...servicios, { icon: 'Monitor', name: 'Nuevo Servicio' }])
  }
  const addSocial = () => {
    setRedes([...redes, { platform: 'instagram', handle: '@usuario', url: 'https://' }])
  }
  const addContact = () => {
    setContacto([...contacto, { type: 'phone', value: '+34 000 000 000' }])
  }

  const publicarTarjeta = async () => {
    if (!slug || slug === 'usuario') {
      alert('Asegúrate de ingresar un nombre para generar la URL.')
      return
    }
    const data = {
      template,
      companyLogo, companyName, companySlogan,
      avatarUrl, nombre, cargo,
      contacto, servicios, redes,
      ctaText, ctaUrl
    }

    try {
      const response = await fetch('/api/cards', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ slug, ...data })
      })

      if (response.ok) {
        navigate(`/card/${slug}`)
      } else {
        const err = await response.json()
        alert(`Error al guardar: ${err.message}`)
      }
    } catch (error) {
      console.error("Error al conectar con el servidor:", error)
      alert("No se pudo conectar con el servidor backend.")
    }
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
    <div className={`card-app-wrapper ${template}`}>
      <div className="card-container">
        {/* Panel editor */}
        <div className="editor-panel editor-scroll">
          <h2><Sparkles size={28} /> Constructor de Tarjeta</h2>
          
          <div className="section-title">Apariencia</div>
          <div className="input-group">
            <label>Plantilla de Fondo</label>
            <select value={template} onChange={(e) => setTemplate(e.target.value)}>
              <option value="bg-neon-city">Neón City (Magenta/Cyan)</option>
              <option value="bg-deep-ocean">Océano Profundo (Azul/Verde)</option>
              <option value="bg-dark">Oscuro Minimalista</option>
            </select>
          </div>

          <div className="section-title"><Building2 size={18}/> Empresa</div>
          <div className="input-group">
            <label>Logo (URL)</label>
            <input type="text" value={companyLogo} onChange={(e) => setCompanyLogo(e.target.value)} />
          </div>
          <div className="input-group">
            <label>Nombre Agencia/Empresa</label>
            <input type="text" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
          </div>
          <div className="input-group">
            <label>Eslogan</label>
            <input type="text" value={companySlogan} onChange={(e) => setCompanySlogan(e.target.value)} />
          </div>

          <div className="section-title"><UserCircle2 size={18}/> Perfil</div>
          <div className="input-group">
            <label>Foto de Perfil (URL)</label>
            <input type="text" value={avatarUrl} onChange={(e) => setAvatarUrl(e.target.value)} />
          </div>
          <div className="input-group">
            <label>Nombre de la Persona</label>
            <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
          </div>
          <div className="input-group">
            <label>Cargo / Rol</label>
            <input type="text" value={cargo} onChange={(e) => setCargo(e.target.value)} />
          </div>

          <div className="section-title"><Phone size={18}/> Datos de Contacto</div>
          {contacto.map((c, idx) => (
            <div className="dynamic-item" key={idx}>
              <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <select value={c.type} onChange={(e) => updateArray(setContacto, contacto, idx, 'type', e.target.value)} style={{flex: 1}}>
                  <option value="phone">Teléfono</option>
                  <option value="email">Email</option>
                  <option value="address">Dirección</option>
                  <option value="web">Sitio Web</option>
                </select>
                <input type="text" value={c.value} onChange={(e) => updateArray(setContacto, contacto, idx, 'value', e.target.value)} style={{flex: 2}} />
              </div>
              <button className="btn-remove-small" onClick={() => removeFromArray(setContacto, contacto, idx)}><Trash2 size={14}/></button>
            </div>
          ))}
          <button className="btn-add" onClick={addContact}><PlusCircle size={18}/> Añadir Contacto</button>

          <div className="section-title"><PenTool size={18}/> Servicios</div>
          {servicios.map((s, idx) => (
            <div className="dynamic-item" key={idx}>
              <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <select value={s.icon} onChange={(e) => updateArray(setServicios, servicios, idx, 'icon', e.target.value)} style={{flex: 1}}>
                  {AVAILABLE_ICONS.map(i => <option key={i.id} value={i.id}>{i.label}</option>)}
                </select>
                <input type="text" value={s.name} onChange={(e) => updateArray(setServicios, servicios, idx, 'name', e.target.value)} style={{flex: 2}} placeholder="Nombre corto" />
              </div>
              <button className="btn-remove-small" onClick={() => removeFromArray(setServicios, servicios, idx)}><Trash2 size={14}/></button>
            </div>
          ))}
          <button className="btn-add" onClick={addService}><PlusCircle size={18}/> Añadir Servicio</button>

          <div className="section-title"><Share2 size={18}/> Redes Sociales</div>
          {redes.map((r, idx) => (
            <div className="dynamic-item" key={idx}>
              <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <select value={r.platform} onChange={(e) => updateArray(setRedes, redes, idx, 'platform', e.target.value)} style={{flex: 1}}>
                  {SOCIAL_PLATFORMS.map(p => <option key={p.id} value={p.id}>{p.id.toUpperCase()}</option>)}
                </select>
                <input type="text" value={r.handle} onChange={(e) => updateArray(setRedes, redes, idx, 'handle', e.target.value)} style={{flex: 1}} placeholder="@usuario" />
              </div>
              <input type="url" value={r.url} onChange={(e) => updateArray(setRedes, redes, idx, 'url', e.target.value)} style={{width: '100%'}} placeholder="Enlace completo https://..." />
              <button className="btn-remove-small" onClick={() => removeFromArray(setRedes, redes, idx)}><Trash2 size={14}/></button>
            </div>
          ))}
          <button className="btn-add" onClick={addSocial}><PlusCircle size={18}/> Añadir Red Social</button>

          <div className="section-title"><MousePointerClick size={18}/> Botón Principal (CTA)</div>
          <div className="input-group">
            <label>Texto del Botón</label>
            <input type="text" value={ctaText} onChange={(e) => setCtaText(e.target.value)} />
          </div>
          <div className="input-group">
            <label>URL Destino</label>
            <input type="url" value={ctaUrl} onChange={(e) => setCtaUrl(e.target.value)} />
          </div>

          <button className="btn-publicar" onClick={publicarTarjeta}>
            <Globe size={22} /> Publicar Mi Tarjeta
          </button>
          <p style={{ fontSize: '0.7rem', marginTop: '0.8rem', textAlign: 'center', opacity: 0.8, marginBottom: '0.2rem' }}>
            URL: <strong>{urlPreview}</strong>
          </p>
          <p style={{ fontSize: '0.65rem', color: '#ffb3b3', textAlign: 'center', opacity: 0.8, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.25rem' }}>
            <span style={{ display: 'inline-block', width: '6px', height: '6px', backgroundColor: '#ff4b4b', borderRadius: '50%' }}></span>
            Incluye 3 días de período de prueba gratuito.
          </p>
        </div>

        {/* Vista previa en tiempo real */}
        <div className="preview-card-wrapper">
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
            {contacto.length > 0 && (
              <div className="bc-panel">
                <div className="bc-panel-title">Datos de Contacto</div>
                <div className="bc-contact-grid">
                  {contacto.map((c, i) => (
                    <a key={i} href="#" className="bc-contact-item" onClick={e=>e.preventDefault()}>
                      <div className="bc-contact-icon">{renderContactIcon(c.type)}</div>
                      <span>{c.value}</span>
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* Services */}
            {servicios.length > 0 && (
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
            {redes.length > 0 && (
              <div className="bc-panel" style={{ background: 'transparent', border: 'none', padding: 0 }}>
                <div className="bc-panel-title" style={{textAlign:'center'}}>Conecta con nosotros</div>
                <div className="bc-social-flex">
                  {redes.map((r, i) => {
                    const platform = SOCIAL_PLATFORMS.find(p => p.id === r.platform) || SOCIAL_PLATFORMS[0]
                    const Icon = platform.icon
                    return (
                      <a key={i} href="#" className="bc-social-item" onClick={e=>e.preventDefault()}>
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
              <a href="#" className="bc-cta-btn" onClick={e=>e.preventDefault()}>
                {ctaText} <ChevronRight size={18} />
              </a>
            )}

          </div>
        </div>
      </div>
    </div>
  )
}
