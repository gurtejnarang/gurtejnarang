import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const words = ['Builder.', 'Strategist.', 'Founder.', 'Creator.']

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)
  const gridRef = useRef(null)

  // Typewriter effect
  useEffect(() => {
    const word = words[wordIndex]
    let timeout
    if (!deleting && displayed.length < word.length) {
      timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 90)
    } else if (!deleting && displayed.length === word.length) {
      timeout = setTimeout(() => setDeleting(true), 1800)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 50)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setWordIndex((wordIndex + 1) % words.length)
    }
    return () => clearTimeout(timeout)
  }, [displayed, deleting, wordIndex])

  // Parallax grid dots on mouse
  useEffect(() => {
    const onMove = (e) => {
      if (!gridRef.current) return
      const x = (e.clientX / window.innerWidth - 0.5) * 20
      const y = (e.clientY / window.innerHeight - 0.5) * 20
      gridRef.current.style.transform = `translate(${x}px, ${y}px)`
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        paddingTop: 'var(--nav-h)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 'var(--nav-h) var(--pad-x) 80px',
        position: 'relative',
        overflow: 'hidden',
        borderBottom: '1px solid var(--border)',
      }}
    >
      {/* Animated dot grid background */}
      <div
        ref={gridRef}
        style={{
          position: 'absolute',
          inset: -40,
          backgroundImage: 'radial-gradient(circle, var(--gray-300) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          opacity: 0.5,
          transition: 'transform 0.1s ease-out',
          pointerEvents: 'none',
        }}
      />

      {/* Blue accent blob */}
      <div style={{
        position: 'absolute',
        width: 600, height: 600,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(26,107,250,0.06) 0%, transparent 70%)',
        top: '10%', right: '-10%',
        pointerEvents: 'none',
      }} />

      <div style={{ position: 'relative', maxWidth: 'var(--max-w)', margin: '0 auto', width: '100%' }}>
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'rgba(26,107,250,0.06)',
            border: '1px solid rgba(26,107,250,0.2)',
            borderRadius: 99,
            padding: '6px 16px',
            marginBottom: 40,
          }}
        >
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e', display: 'block', boxShadow: '0 0 0 3px rgba(34,197,94,0.2)' }} />
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--gray-700)', letterSpacing: '0.06em' }}>
            Open to opportunities
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 800,
            fontSize: 'clamp(52px, 8vw, 120px)',
            lineHeight: 0.95,
            letterSpacing: '-0.04em',
            color: 'var(--black)',
            marginBottom: 24,
          }}
        >
          Gurtej<br />
          Narang
        </motion.h1>

        {/* Typewriter line */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 600,
            fontSize: 'clamp(28px, 4vw, 52px)',
            letterSpacing: '-0.03em',
            color: 'var(--accent)',
            marginBottom: 40,
            minHeight: 68,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          {displayed}
          <span style={{
            display: 'inline-block',
            width: 3,
            height: '0.85em',
            background: 'var(--accent)',
            marginLeft: 4,
            animation: 'blink 1s step-end infinite',
          }} />
        </motion.div>

        {/* Sub text + CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.5 }}
          style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: 32 }}
        >
          <p style={{
            fontFamily: 'var(--font-body)',
            fontWeight: 300,
            fontSize: 17,
            lineHeight: 1.7,
            color: 'var(--gray-500)',
            maxWidth: 480,
          }}>
            Building digital products, crafting brand narratives, and shipping things that matter.
            Based everywhere that counts.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a href="#work" style={{ ...btnStyle.primary }}>
              View Work
              <ArrowRight />
            </a>
            <a href="#portfolio" style={{ ...btnStyle.ghost }}>
              Comms Portfolio
            </a>
          </div>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          style={{
            display: 'flex', gap: 0,
            marginTop: 80,
            borderTop: '1px solid var(--border)',
            paddingTop: 40,
          }}
        >
          {[
            { num: '3+', label: 'Websites Shipped' },
            { num: '1', label: 'Startup Founded' },
            { num: '∞', label: 'Ideas Building' },
          ].map((s, i) => (
            <div key={i} style={{
              flex: 1,
              borderRight: i < 2 ? '1px solid var(--border)' : 'none',
              paddingRight: i < 2 ? 40 : 0,
              paddingLeft: i > 0 ? 40 : 0,
            }}>
              <div style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: 'clamp(36px, 4vw, 56px)',
                letterSpacing: '-0.04em',
                color: 'var(--black)',
              }}>{s.num}</div>
              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 11,
                color: 'var(--gray-500)',
                letterSpacing: '0.06em',
                marginTop: 4,
              }}>{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <style>{`
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
      `}</style>
    </section>
  )
}

const btnStyle = {
  primary: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    background: 'var(--black)',
    color: 'white',
    fontFamily: 'var(--font-mono)',
    fontSize: 12,
    letterSpacing: '0.06em',
    textDecoration: 'none',
    borderRadius: 99,
    padding: '14px 28px',
    border: '1px solid var(--black)',
    transition: 'all 0.2s ease',
  },
  ghost: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    background: 'rgba(255,255,255,0.7)',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    color: 'var(--black)',
    fontFamily: 'var(--font-mono)',
    fontSize: 12,
    letterSpacing: '0.06em',
    textDecoration: 'none',
    borderRadius: 99,
    padding: '14px 28px',
    border: '1px solid var(--border)',
    transition: 'all 0.2s ease',
    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.8)',
  },
}

function ArrowRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
