import { useState } from 'react'
import { useWindowSize } from '../hooks/useWindowSize'
import { CONTACT_SERVICES } from '../data/constants'

const FORMSPREE_URL = 'https://formspree.io/f/mykdaeoa'

export default function ContactModal({ open, onClose }) {
  const { isMobile } = useWindowSize()
  const [form, setForm] = useState({ name: '', email: '', company: '', service: '', message: '' })
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)

  if (!open) return null

  const set = key => e => setForm({ ...form, [key]: e.target.value })

  const onFocus = e => (e.target.style.borderColor = 'var(--accent)')
  const onBlur  = e => (e.target.style.borderColor = 'var(--border)')

  const handleSubmit = async e => {
    e.preventDefault()
    setSending(true)
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ nombre: form.name, email: form.email, empresa: form.company, servicio: form.service, mensaje: form.message }),
      })
      if (res.ok) { setSent(true) }
      else { alert('Hubo un error al enviar. Intenta de nuevo.') }
    } catch { alert('Error de conexión. Verifica tu internet.') }
    finally { setSending(false) }
  }

  const inp = { width: '100%', padding: '13px 14px', background: 'var(--surface2)', border: '1px solid var(--border)', color: 'var(--text)', fontFamily: "'DM Sans',sans-serif", fontSize: 14, outline: 'none', transition: 'border-color 0.2s', boxSizing: 'border-box' }
  const lbl = { fontFamily: "'Space Mono',monospace", fontSize: 9, letterSpacing: 3, color: 'var(--muted)', display: 'block', marginBottom: 7, textTransform: 'uppercase' }

  return (
    <div onClick={onClose} style={{ position: 'fixed', inset: 0, zIndex: 9000, background: 'rgba(6,6,8,0.96)', backdropFilter: 'blur(12px)', display: 'flex', alignItems: isMobile ? 'flex-end' : 'center', justifyContent: 'center', padding: isMobile ? 0 : 20, animation: 'fadeIn 0.25s ease' }}>
      <div onClick={e => e.stopPropagation()} style={{ background: 'var(--surface)', border: '1px solid var(--border)', width: '100%', maxWidth: isMobile ? '100%' : 600, maxHeight: isMobile ? '92vh' : '90vh', overflowY: 'auto', animation: 'fadeUp 0.35s ease', borderRadius: isMobile ? '12px 12px 0 0' : 0 }}>
        {/* Top accent */}
        <div style={{ height: 2, background: 'linear-gradient(90deg,var(--accent2),var(--accent))' }} />

        {/* Header */}
        <div style={{ padding: '24px 24px', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ fontFamily: "'Space Mono',monospace", fontSize: 9, letterSpacing: 4, color: 'var(--accent)', marginBottom: 6 }}>◆ NUEVO PROYECTO</div>
            <h2 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: isMobile ? 22 : 26, letterSpacing: -0.5 }}>Hablemos de tu idea</h2>
          </div>
          <button onClick={onClose} style={{ background: 'none', border: '1px solid var(--border)', color: 'var(--muted)', width: 36, height: 36, cursor: 'pointer', fontSize: 15, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transition: 'all 0.2s' }}
            onMouseEnter={e => { e.target.style.borderColor = 'var(--accent3)'; e.target.style.color = 'var(--accent3)' }}
            onMouseLeave={e => { e.target.style.borderColor = 'var(--border)'; e.target.style.color = 'var(--muted)' }}
          >✕</button>
        </div>

        {/* Success */}
        {sent ? (
          <div style={{ padding: '60px 24px', textAlign: 'center' }}>
            <div style={{ fontSize: 50, color: 'var(--accent)', marginBottom: 18, animation: 'float 2s ease-in-out infinite' }}>◉</div>
            <h3 style={{ fontFamily: "'Syne',sans-serif", fontSize: 24, fontWeight: 800, color: 'var(--accent)', marginBottom: 12 }}>¡Recibido!</h3>
            <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: 14, maxWidth: 340, margin: '0 auto' }}>
              Te contactaremos en menos de 24 horas para agendar una sesión gratuita de diagnóstico.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: 16 }}>
            {/* Name + Email */}
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 16 }}>
              <div>
                <label style={lbl}>Nombre completo</label>
                <input type="text" required placeholder="Tu nombre" value={form.name} onChange={set('name')} style={inp} onFocus={onFocus} onBlur={onBlur} />
              </div>
              <div>
                <label style={lbl}>Email</label>
                <input type="email" required placeholder="tu@email.com" value={form.email} onChange={set('email')} style={inp} onFocus={onFocus} onBlur={onBlur} />
              </div>
            </div>

            {/* Company */}
            <div>
              <label style={lbl}>Empresa / Negocio</label>
              <input type="text" placeholder="Nombre de tu empresa" value={form.company} onChange={set('company')} style={inp} onFocus={onFocus} onBlur={onBlur} />
            </div>

            {/* Service */}
            <div>
              <label style={lbl}>Servicio de interés</label>
              <select value={form.service} onChange={set('service')} style={{ ...inp, cursor: 'pointer', appearance: 'none' }}>
                <option value="">Selecciona un servicio...</option>
                {CONTACT_SERVICES.map(s => <option key={s}>{s}</option>)}
              </select>
            </div>

            {/* Message */}
            <div>
              <label style={lbl}>Cuéntanos sobre tu proyecto</label>
              <textarea rows={4} required placeholder="Describe brevemente qué necesitas o qué problema quieres resolver..." value={form.message} onChange={set('message')} style={{ ...inp, resize: 'none' }} onFocus={onFocus} onBlur={onBlur} />
            </div>

            {/* Badge */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 4, height: 4, background: 'var(--accent)', borderRadius: '50%', flexShrink: 0 }} />
              <span style={{ fontFamily: "'Space Mono',monospace", fontSize: 9, color: 'var(--muted)', letterSpacing: 1 }}>PRIMERA SESIÓN DE DIAGNÓSTICO 100% GRATUITA</span>
            </div>

            {/* Submit */}
            <button type="submit" disabled={sending} style={{ padding: 16, background: sending ? 'var(--surface2)' : 'linear-gradient(135deg,var(--accent2),var(--accent))', border: 'none', color: sending ? 'var(--muted)' : 'var(--black)', fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 14, letterSpacing: 2, cursor: 'pointer', textTransform: 'uppercase', transition: 'all 0.3s' }}>
              {sending ? 'ENVIANDO...' : 'ENVIAR MENSAJE →'}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
