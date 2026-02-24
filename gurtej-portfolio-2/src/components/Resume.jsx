import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const highlights = [
  { icon: '🚀', text: 'Founder of Waves — building in the startup ecosystem' },
  { icon: '🎨', text: 'Web design & development for diverse clients' },
  { icon: '📣', text: 'Strategic communications & brand storytelling' },
  { icon: '⚡', text: 'Cross-functional creative leadership' },
]

export default function Resume() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); obs.disconnect() }
    }, { threshold: 0.08 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="resume" style={{
      padding: '120px var(--pad-x)',
      background: 'var(--off-white)',
      borderBottom: '1px solid var(--border)',
    }}>
      <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }} ref={ref}>
        <SectionLabel>Experience</SectionLabel>
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 800,
          fontSize: 'clamp(40px, 6vw, 80px)',
          letterSpacing: '-0.04em',
          lineHeight: 0.95,
          color: 'var(--black)',
          marginBottom: 64,
        }}>
          My Résumé
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.4fr',
          gap: 64,
          alignItems: 'start',
        }}
        className="resume-grid"
        >
          {/* Left col */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={visible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: 17,
              fontWeight: 300,
              lineHeight: 1.8,
              color: 'var(--gray-500)',
              marginBottom: 40,
            }}>
              A versatile builder at the intersection of product, strategy, and story. I work fast, think clearly, and ship things that matter.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 40 }}>
              {highlights.map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  animate={visible ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 14,
                    padding: '16px 18px',
                    background: 'white',
                    border: '1px solid var(--border)',
                    borderRadius: 12,
                    boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
                  }}
                >
                  <span style={{ fontSize: 16, lineHeight: 1.5 }}>{h.icon}</span>
                  <span style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 14,
                    fontWeight: 400,
                    color: 'var(--gray-700)',
                    lineHeight: 1.55,
                  }}>{h.text}</span>
                </motion.div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a
                href="https://drive.google.com/drive/folders/1bhJGzvYe2UNVw9BCfzmdbu0PRoApy6kD?usp=share_link"
                target="_blank"
                rel="noopener noreferrer"
                style={glassBtnStyle}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M7 1v9M3 7l4 4 4-4M1 13h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Download Resume
              </a>
            </div>
          </motion.div>

          {/* Right col — resume embed */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={visible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            style={{
              background: 'white',
              border: '1px solid var(--border)',
              borderRadius: 20,
              overflow: 'hidden',
              boxShadow: '0 8px 40px rgba(0,0,0,0.06)',
              height: 680,
            }}
          >
            {/* Window chrome */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              padding: '14px 20px',
              background: 'var(--off-white)',
              borderBottom: '1px solid var(--border)',
            }}>
              {['#FF5F57','#FFBD2E','#28C840'].map((c, i) => (
                <span key={i} style={{ width: 12, height: 12, borderRadius: '50%', background: c, display: 'block' }} />
              ))}
              <span style={{
                marginLeft: 8,
                fontFamily: 'var(--font-mono)',
                fontSize: 11,
                color: 'var(--gray-500)',
                letterSpacing: '0.04em',
              }}>Resume — Gurtej Narang.pdf</span>
            </div>
            {/* Placeholder or actual PDF embed */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              height: 'calc(100% - 49px)',
              gap: 16,
              padding: 40,
              textAlign: 'center',
            }}>
              <div style={{
                width: 72, height: 72,
                background: 'var(--off-white)',
                border: '1px solid var(--border)',
                borderRadius: 16,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 32,
              }}>📄</div>
              <div>
                <p style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: 20,
                  letterSpacing: '-0.02em',
                  color: 'var(--black)',
                  marginBottom: 8,
                }}>Resume Preview</p>
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 13,
                  color: 'var(--gray-500)',
                  lineHeight: 1.6,
                  maxWidth: 280,
                  margin: '0 auto 24px',
                }}>
                  Upload your resume PDF to Google Drive and paste the embed link in{' '}
                  <code style={{ fontFamily: 'var(--font-mono)', background: 'var(--off-white)', padding: '2px 6px', borderRadius: 4, fontSize: 11 }}>
                    Resume.jsx
                  </code>
                </p>
                <a
                  href="https://drive.google.com/drive/folders/1bhJGzvYe2UNVw9BCfzmdbu0PRoApy6kD"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={glassBtnStyle}
                >
                  Open Drive Folder
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M1 11L11 1M11 1H4M11 1v7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
              {/*
                TO EMBED YOUR RESUME:
                1. Upload PDF to Google Drive
                2. Open the PDF → Share → Get embeddable link
                3. Replace the placeholder div above with:
                <iframe
                  src="YOUR_GOOGLE_DRIVE_EMBED_URL"
                  width="100%"
                  height="100%"
                  style={{ border: 'none' }}
                  title="Resume"
                />
              */}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .resume-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

const glassBtnStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: 8,
  background: 'rgba(255,255,255,0.8)',
  backdropFilter: 'blur(16px)',
  WebkitBackdropFilter: 'blur(16px)',
  border: '1px solid var(--border)',
  borderRadius: 99,
  padding: '12px 24px',
  fontFamily: 'var(--font-mono)',
  fontSize: 11,
  letterSpacing: '0.08em',
  color: 'var(--black)',
  textDecoration: 'none',
  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.9), 0 2px 8px rgba(0,0,0,0.06)',
  transition: 'all 0.2s ease',
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
