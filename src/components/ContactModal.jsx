import { useState } from 'react'
import { CONTACT_SERVICES } from '../data/constants'

const inputStyle = {
  width:       '100%',
  padding:     '14px 16px',
  background:  'var(--surface2)',
  border:      '1px solid var(--border)',
  color:       'var(--text)',
  fontFamily:  "'DM Sans', sans-serif",
  fontSize:    14,
  outline:     'none',
  transition:  'border-color 0.2s',
}

const labelStyle = {
  fontFamily:    "'Space Mono', monospace",
  fontSize:      9,
  letterSpacing: 3,
  color:         'var(--muted)',
  display:       'block',
  marginBottom:  8,
  textTransform: 'uppercase',
}

function FormField({ label, children }) {
  return (
    <div>
      <label style={labelStyle}>{label}</label>
      {children}
    </div>
  )
}

export default function ContactModal({ open, onClose }) {
  const [form, setForm] = useState({
    name: '', email: '', company: '', service: '', message: '',
  })
  const [sending, setSending] = useState(false)
  const [sent,    setSent]    = useState(false)

  if (!open) return null

  const setField = (key) => (e) => setForm({ ...form, [key]: e.target.value })

  const handleFocus = (e) => (e.target.style.borderColor = 'var(--accent)')
  const handleBlur  = (e) => (e.target.style.borderColor = 'var(--border)')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)

    try {
      const res = await fetch('https://formspree.io/f/mykdaeoa', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          nombre:   form.name,
          email:    form.email,
          empresa:  form.company,
          servicio: form.service,
          mensaje:  form.message,
        }),
      })

      if (res.ok) {
        setSent(true)
      } else {
        alert('Hubo un error al enviar. Intenta de nuevo.')
      }
    } catch {
      alert('Error de conexión. Verifica tu internet.')
    } finally {
      setSending(false)
    }
  }

  return (
    <div
      onClick={onClose}
      style={{
        position:       'fixed',
        inset:          0,
        zIndex:         9000,
        background:     'rgba(6,6,8,0.96)',
        backdropFilter: 'blur(12px)',
        display:        'flex',
        alignItems:     'center',
        justifyContent: 'center',
        padding:        20,
        animation:      'fadeIn 0.25s ease',
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="contact-modal-inner"
        style={{
          background: 'var(--surface)',
          border:     '1px solid var(--border)',
          width:      '100%',
          maxWidth:   620,
          maxHeight:  '92vh',
          overflowY:  'auto',
          animation:  'fadeUp 0.35s ease',
          position:   'relative',
        }}
      >
        {/* Accent top bar */}
        <div style={{ height: 2, background: 'linear-gradient(90deg, var(--accent2), var(--accent))' }} />

        {/* Modal header */}
        <div
          style={{
            padding:        '32px 36px',
            borderBottom:   '1px solid var(--border)',
            display:        'flex',
            justifyContent: 'space-between',
            alignItems:     'center',
          }}
        >
          <div>
            <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 9, letterSpacing: 4, color: 'var(--accent)', marginBottom: 8 }}>
              ◆ NUEVO PROYECTO
            </div>
            <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 26, letterSpacing: -0.5 }}>
              Hablemos de tu idea
            </h2>
          </div>

          <button
            onClick={onClose}
            style={{
              background: 'none',
              border:     '1px solid var(--border)',
              color:      'var(--muted)',
              width:      38,
              height:     38,
              cursor:     'none',
              fontSize:   16,
              display:    'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => { e.target.style.borderColor = 'var(--accent3)'; e.target.style.color = 'var(--accent3)' }}
            onMouseLeave={(e) => { e.target.style.borderColor = 'var(--border)';  e.target.style.color = 'var(--muted)' }}
          >
            ✕
          </button>
        </div>

        {/* Success state */}
        {sent ? (
          <div style={{ padding: '70px 36px', textAlign: 'center' }}>
            <div
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize:   56,
                color:      'var(--accent)',
                marginBottom: 20,
                animation:  'float 2s ease-in-out infinite',
              }}
            >
              ◉
            </div>
            <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: 26, fontWeight: 800, color: 'var(--accent)', marginBottom: 14 }}>
              ¡Recibido!
            </h3>
            <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: 14, maxWidth: 380, margin: '0 auto' }}>
              Nuestro equipo revisará tu mensaje y te contactaremos en menos de 24 horas para agendar una sesión gratuita de diagnóstico.
            </p>
          </div>
        ) : (
          /* Form */
          <form
            onSubmit={handleSubmit}
            style={{ padding: '30px 36px', display: 'flex', flexDirection: 'column', gap: 18 }}
          >
            {/* Name + Email */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
              <FormField label="Nombre completo">
                <input
                  type="text" required placeholder="Tu nombre"
                  value={form.name} onChange={setField('name')}
                  style={inputStyle} onFocus={handleFocus} onBlur={handleBlur}
                />
              </FormField>
              <FormField label="Email">
                <input
                  type="email" required placeholder="tu@email.com"
                  value={form.email} onChange={setField('email')}
                  style={inputStyle} onFocus={handleFocus} onBlur={handleBlur}
                />
              </FormField>
            </div>

            {/* Company */}
            <FormField label="Empresa / Negocio">
              <input
                type="text" placeholder="Nombre de tu empresa"
                value={form.company} onChange={setField('company')}
                style={inputStyle} onFocus={handleFocus} onBlur={handleBlur}
              />
            </FormField>

            {/* Service */}
            <FormField label="Servicio de interés">
              <select
                value={form.service} onChange={setField('service')}
                style={{ ...inputStyle, cursor: 'none' }}
              >
                <option value="">Selecciona un servicio...</option>
                {CONTACT_SERVICES.map((s) => <option key={s}>{s}</option>)}
              </select>
            </FormField>

            {/* Message */}
            <FormField label="Cuéntanos sobre tu proyecto">
              <textarea
                rows={4} required
                placeholder="Describe brevemente qué necesitas o qué problema quieres resolver..."
                value={form.message} onChange={setField('message')}
                style={{ ...inputStyle, resize: 'none' }}
                onFocus={handleFocus} onBlur={handleBlur}
              />
            </FormField>

            {/* Free session badge */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ width: 4, height: 4, background: 'var(--accent)', borderRadius: '50%' }} />
              <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 9, color: 'var(--muted)', letterSpacing: 1 }}>
                PRIMERA SESIÓN DE DIAGNÓSTICO 100% GRATUITA
              </span>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={sending}
              style={{
                padding:       18,
                marginTop:     4,
                background:    sending
                  ? 'var(--surface2)'
                  : 'linear-gradient(135deg, var(--accent2), var(--accent))',
                border:        'none',
                color:         sending ? 'var(--muted)' : 'var(--black)',
                fontFamily:    "'Syne', sans-serif",
                fontWeight:    800,
                fontSize:      14,
                letterSpacing: 2,
                cursor:        'none',
                textTransform: 'uppercase',
                transition:    'all 0.3s',
              }}
            >
              {sending ? 'ENVIANDO...' : 'ENVIAR MENSAJE →'}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
