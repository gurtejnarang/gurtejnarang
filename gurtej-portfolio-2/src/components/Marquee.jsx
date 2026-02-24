const items = [
  'Web Design', 'Brand Strategy', 'Communications',
  'Startup Building', 'Creative Direction', 'Digital Products',
  'Copywriting', 'UX Thinking', 'Go-to-Market',
]

export default function Marquee() {
  const doubled = [...items, ...items]
  return (
    <div style={{
      borderTop: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)',
      padding: '14px 0',
      overflow: 'hidden',
      background: 'var(--off-white)',
    }}>
      <div style={{
        display: 'flex',
        gap: 48,
        width: 'max-content',
        animation: 'marquee 28s linear infinite',
      }}>
        {doubled.map((item, i) => (
          <span
            key={i}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 16,
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--gray-500)',
              flexShrink: 0,
            }}
          >
            <span style={{
              width: 4, height: 4,
              borderRadius: '50%',
              background: 'var(--accent)',
              flexShrink: 0,
            }} />
            {item}
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  )
}
