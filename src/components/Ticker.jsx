import { TICKER_ITEMS } from '../data/constants'

export default function Ticker() {
  // Duplicate for seamless loop
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS]

  return (
    <div
      style={{
        overflow:     'hidden',
        borderTop:    '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
        padding:      '13px 0',
        background:   'rgba(0, 245, 196, 0.015)',
      }}
    >
      <div
        style={{
          display:   'flex',
          width:     'max-content',
          animation: 'ticker 22s linear infinite',
        }}
      >
        {items.map((item, i) => (
          <span
            key={i}
            style={{
              fontFamily:    "'Space Mono', monospace",
              fontSize:      10,
              letterSpacing: 4,
              color:         'var(--muted)',
              whiteSpace:    'nowrap',
              padding:       '0 40px',
              display:       'flex',
              alignItems:    'center',
              gap:           40,
            }}
          >
            {item}
            <span style={{ color: 'var(--accent)', opacity: 0.4 }}>◆</span>
          </span>
        ))}
      </div>
    </div>
  )
}
