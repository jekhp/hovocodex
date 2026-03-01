import { useState } from 'react'
import { FAQS } from '../data/constants'

function FAQItem({ faq, isOpen, onToggle }) {
  return (
    <div
      style={{
        background: 'var(--surface2)',
        border:     '1px solid var(--border)',
        overflow:   'hidden',
      }}
    >
      <button
        onClick={onToggle}
        style={{
          width:          '100%',
          padding:        '22px 26px',
          background:     'none',
          border:         'none',
          display:        'flex',
          justifyContent: 'space-between',
          alignItems:     'center',
          cursor:         'none',
          gap:            16,
          textAlign:      'left',
        }}
      >
        <span
          style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 600,
            fontSize:   15,
            color:      'var(--text)',
          }}
        >
          {faq.q}
        </span>
        <span
          style={{
            color:      'var(--accent)',
            fontSize:   22,
            flexShrink: 0,
            display:    'inline-block',
            transition: 'transform 0.3s ease',
            transform:  isOpen ? 'rotate(45deg)' : 'none',
          }}
        >
          +
        </span>
      </button>

      {isOpen && (
        <div
          style={{
            padding:   '0 26px 22px',
            color:     'var(--muted)',
            lineHeight: 1.8,
            fontSize:  14,
            animation: 'fadeUp 0.25s ease',
          }}
        >
          {faq.a}
        </div>
      )}
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i)

  return (
    <section id="faq" style={{ padding: '120px clamp(24px, 7vw, 100px)', background: 'var(--surface)' }}>
      <div style={{ maxWidth: 760, margin: '0 auto' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 70 }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>FAQ</div>
          <h2
            className="section-title"
            style={{ fontSize: 'clamp(28px, 4vw, 50px)' }}
          >
            Resolvemos tus dudas
          </h2>
        </div>

        {/* Accordion */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {FAQS.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              isOpen={openIndex === i}
              onToggle={() => toggle(i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
