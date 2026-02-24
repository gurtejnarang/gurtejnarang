import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const skills = [
  'Brand Strategy', 'Web Design', 'Web Development',
  'Startup Building', 'Communications', 'Copywriting',
  'Creative Direction', 'Go-to-Market', 'Product Thinking',
]

export default function About() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); obs.disconnect() }
    }, { threshold: 0.1 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="about" style={{
      padding: '120px var(--pad-x)',
      background: 'var(--black)',
      borderBottom: '1px solid #222',
    }}>
      <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }} ref={ref}>
        {/* Label */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: 10,
          fontFamily: 'var(--font-mono)', fontSize: 10,
          letterSpacing: '0.2em', textTransform: 'uppercase',
          color: '#555', marginBottom: 16,
        }}>
          <span style={{ width: 24, height: 1, background: '#333', display: 'block' }} />
          About
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }} className="about-grid">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: 'clamp(44px, 6vw, 88px)',
              letterSpacing: '-0.04em',
              lineHeight: 0.92,
              color: 'white',
              marginBottom: 40,
            }}>
              The person<br />
              <span style={{ color: 'var(--accent)' }}>behind</span><br />
              the work.
            </h2>

            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: 16,
              fontWeight: 300,
              lineHeight: 1.85,
              color: '#888',
              marginBottom: 24,
            }}>
              I'm Gurtej — a builder and communicator who finds the thread between strategy and story, between product and person. I've launched a startup, built websites for clients, and crafted communications that move people.
            </p>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: 16,
              fontWeight: 300,
              lineHeight: 1.85,
              color: '#888',
              marginBottom: 48,
            }}>
              Every project is a chance to make something that lasts. I bring a startup mindset — move fast, think clearly, ship with intention.
            </p>

            <a
              href="mailto:hello@gurtejnarang.com"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                background: 'white',
                color: 'var(--black)',
                fontFamily: 'var(--font-mono)',
                fontSize: 12,
                letterSpacing: '0.08em',
                textDecoration: 'none',
                borderRadius: 99,
                padding: '14px 28px',
                border: '1px solid rgba(255,255,255,0.1)',
                transition: 'all 0.2s ease',
              }}
            >
              Get in touch
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Skills */}
            <div style={{ marginBottom: 48 }}>
              <p style={{
                fontFamily: 'var(--font-mono)', fontSize: 10,
                letterSpacing: '0.15em', textTransform: 'uppercase',
                color: '#555', marginBottom: 20,
              }}>
                Skills & Expertise
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {skills.map((s, i) => (
                  <motion.span
                    key={s}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={visible ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.2 + i * 0.04 }}
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 11,
                      letterSpacing: '0.05em',
                      color: '#aaa',
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      borderRadius: 99,
                      padding: '7px 16px',
                    }}
                  >
                    {s}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Numbers */}
            {[
              { num: '3+', label: 'Websites shipped' },
              { num: '1', label: 'Startup founded (Waves)' },
              { num: '∞', label: 'Ideas in the pipeline' },
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 24 }}
                animate={visible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderTop: '1px solid #1E1E1E',
                  padding: '20px 0',
                }}
              >
                <span style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 800,
                  fontSize: 48,
                  letterSpacing: '-0.04em',
                  color: 'white',
                }}>{s.num}</span>
                <span style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 11,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#555',
                }}>{s.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  )
}
