export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{
      background: 'var(--black)',
      borderTop: '1px solid #1A1A1A',
      padding: '40px var(--pad-x)',
    }}>
      <div style={{
        maxWidth: 'var(--max-w)',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 24,
      }}>
        <span style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 700,
          fontSize: 18,
          letterSpacing: '-0.02em',
          color: 'white',
        }}>
          GN
          <span style={{ color: 'var(--accent)', marginLeft: 4 }}>·</span>
        </span>

        <span style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 11,
          letterSpacing: '0.12em',
          color: '#444',
          textTransform: 'uppercase',
        }}>
          © {year} Gurtej Narang — All rights reserved
        </span>

        <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
          {[
            { label: 'Drive', href: 'https://drive.google.com/drive/folders/1bhJGzvYe2UNVw9BCfzmdbu0PRoApy6kD' },
            { label: 'Wave', href: 'https://wavewebsite-five.vercel.app' },
            { label: 'Email', href: 'mailto:hello@gurtejnarang.com' },
          ].map(l => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith('http') ? '_blank' : undefined}
              rel={l.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 11,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#555',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={e => e.currentTarget.style.color = 'white'}
              onMouseLeave={e => e.currentTarget.style.color = '#555'}
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
