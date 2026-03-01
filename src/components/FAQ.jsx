import { useState } from 'react'
import { useWindowSize } from '../hooks/useWindowSize'
import { FAQS } from '../data/constants'

function FAQItem({ faq, isOpen, onToggle }) {
  return (
    <div style={{ background: 'var(--surface2)', border: '1px solid var(--border)', overflow: 'hidden' }}>
      <button onClick={onToggle} style={{ width: '100%', padding: '20px 22px', background: 'none', border: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', gap: 16, textAlign: 'left' }}>
        <span style={{ fontFamily: "'Syne',sans-serif", fontWeight: 600, fontSize: 14, color: 'var(--text)', lineHeight: 1.4 }}>{faq.q}</span>
        <span style={{ color: 'var(--accent)', fontSize: 22, flexShrink: 0, display: 'inline-block', transition: 'transform 0.3s', transform: isOpen ? 'rotate(45deg)' : 'none' }}>+</span>
      </button>
      {isOpen && (
        <div style={{ padding: '0 22px 20px', color: 'var(--muted)', lineHeight: 1.8, fontSize: 13, animation: 'fadeUp 0.25s ease' }}>
          {faq.a}
        </div>
      )}
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)
  const { isMobile, isTablet } = useWindowSize()
  const pad = isMobile ? '60px 20px' : isTablet ? '80px 36px' : '100px clamp(40px,7vw,100px)'

  return (
    <section id="faq" style={{ padding: pad, background: 'var(--surface)' }}>
      <div style={{ maxWidth: 740, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 52 }}>
          <div style={{ fontFamily: "'Space Mono',monospace", fontSize: 10, letterSpacing: 6, color: 'var(--accent)', marginBottom: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
            <span>◆</span> FAQ
          </div>
          <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: isMobile ? 26 : 'clamp(26px,4vw,48px)', fontWeight: 800, letterSpacing: -1 }}>
            Resolvemos tus dudas
          </h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {FAQS.map((faq, i) => (
            <FAQItem key={i} faq={faq} isOpen={openIndex === i} onToggle={() => setOpenIndex(openIndex === i ? null : i)} />
          ))}
        </div>
      </div>
    </section>
  )
}
