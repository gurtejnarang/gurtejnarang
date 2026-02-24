import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const DRIVE_FOLDER_ID = '1bhJGzvYe2UNVw9BCfzmdbu0PRoApy6kD'

const viewModes = [
  { label: 'Grid View', value: 'grid', icon: '⊞' },
  { label: 'List View', value: 'list', icon: '☰' },
]

export default function Portfolio() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  const [viewMode, setViewMode] = useState('grid')
  const [iframeLoaded, setIframeLoaded] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); obs.disconnect() }
    }, { threshold: 0.05 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  const embedUrl = `https://drive.google.com/embeddedfolderview?id=${DRIVE_FOLDER_ID}#${viewMode}`

  return (
    <section id="portfolio" style={{
      padding: '120px var(--pad-x)',
      borderBottom: '1px solid var(--border)',
      background: 'var(--white)',
    }}>
      <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }} ref={ref}>
        <SectionLabel>Communications Portfolio</SectionLabel>
        <div style={{
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          marginBottom: 48,
          flexWrap: 'wrap',
          gap: 24,
        }}>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: 'clamp(40px, 6vw, 80px)',
              letterSpacing: '-0.04em',
              lineHeight: 0.95,
              color: 'var(--black)',
            }}
          >
            Comms<br />
            <span style={{ color: 'var(--accent)' }}>Portfolio</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 15,
              fontWeight: 300,
              color: 'var(--gray-500)',
              maxWidth: 360,
              lineHeight: 1.7,
            }}
          >
            A curated collection of campaigns, strategy decks, editorial work, and brand assets — organized by category.
          </motion.p>
        </div>

        {/* Controls bar */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 20,
            flexWrap: 'wrap',
            gap: 12,
          }}
        >
          {/* View mode toggle */}
          <div style={{
            display: 'flex',
            gap: 4,
            background: 'var(--off-white)',
            border: '1px solid var(--border)',
            borderRadius: 12,
            padding: 4,
          }}>
            {viewModes.map(m => (
              <button
                key={m.value}
                onClick={() => { setViewMode(m.value); setIframeLoaded(false) }}
                style={{
                  background: viewMode === m.value ? 'white' : 'transparent',
                  border: viewMode === m.value ? '1px solid var(--border)' : '1px solid transparent',
                  borderRadius: 8,
                  padding: '8px 16px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: 11,
                  letterSpacing: '0.06em',
                  color: viewMode === m.value ? 'var(--black)' : 'var(--gray-500)',
                  display: 'flex', alignItems: 'center', gap: 6,
                  boxShadow: viewMode === m.value ? '0 1px 4px rgba(0,0,0,0.06)' : 'none',
                  transition: 'all 0.2s ease',
                }}
              >
                <span>{m.icon}</span>
                {m.label}
              </button>
            ))}
          </div>

          <a
            href={`https://drive.google.com/drive/folders/${DRIVE_FOLDER_ID}?usp=share_link`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'var(--accent)',
              color: 'white',
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              letterSpacing: '0.08em',
              textDecoration: 'none',
              border: 'none',
              borderRadius: 99,
              padding: '10px 24px',
              boxShadow: '0 4px 16px rgba(26,107,250,0.3)',
              transition: 'all 0.2s ease',
            }}
          >
            Open in Drive
            <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
              <path d="M1 11L11 1M11 1H4M11 1v7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </motion.div>

        {/* Drive embed */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          style={{
            border: '1px solid var(--border)',
            borderRadius: 20,
            overflow: 'hidden',
            background: 'white',
            boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
          }}
        >
          {/* Browser-like header */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 0,
            padding: '0 24px',
            height: 52,
            background: 'var(--off-white)',
            borderBottom: '1px solid var(--border)',
          }}>
            <div style={{ display: 'flex', gap: 7, marginRight: 16 }}>
              {['#FF5F57','#FFBD2E','#28C840'].map((c, i) => (
                <span key={i} style={{ width: 11, height: 11, borderRadius: '50%', background: c, display: 'block' }} />
              ))}
            </div>
            <div style={{
              flex: 1,
              background: 'white',
              border: '1px solid var(--border)',
              borderRadius: 8,
              padding: '6px 14px',
              display: 'flex', alignItems: 'center', gap: 8,
            }}>
              <span style={{ fontSize: 11, color: 'var(--gray-300)' }}>🔒</span>
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 11,
                color: 'var(--gray-500)',
                letterSpacing: '0.03em',
              }}>
                drive.google.com — Gurtej's Portfolio
              </span>
            </div>
          </div>

          {/* Iframe */}
          <div style={{ position: 'relative', height: 660 }}>
            {!iframeLoaded && (
              <div style={{
                position: 'absolute', inset: 0,
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                gap: 16, background: 'var(--off-white)',
              }}>
                <div style={{
                  width: 40, height: 40,
                  border: '2px solid var(--border)',
                  borderTop: '2px solid var(--accent)',
                  borderRadius: '50%',
                  animation: 'spin 0.8s linear infinite',
                }} />
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--gray-500)', letterSpacing: '0.1em' }}>
                  Loading Drive...
                </p>
              </div>
            )}
            <iframe
              key={viewMode}
              src={embedUrl}
              title="Gurtej's Portfolio — Google Drive"
              onLoad={() => setIframeLoaded(true)}
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                display: 'block',
                opacity: iframeLoaded ? 1 : 0,
                transition: 'opacity 0.4s ease',
              }}
              allowFullScreen
            />
          </div>

          {/* Footer note */}
          <div style={{
            padding: '14px 24px',
            borderTop: '1px solid var(--border)',
            background: 'var(--off-white)',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          }}>
            <span style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 10,
              color: 'var(--gray-500)',
              letterSpacing: '0.08em',
            }}>
              ⓘ If the embed is blocked, use the "Open in Drive" button to view all files directly.
            </span>
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>
    </section>
  )
}

function SectionLabel({ children }) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: 'var(--gray-500)',
      marginBottom: 16,
    }}>
      <span style={{ width: 24, height: 1, background: 'var(--gray-300)', display: 'block' }} />
      {children}
    </div>
  )
}
