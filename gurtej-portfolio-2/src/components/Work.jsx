import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const sites = [
  {
    tag: 'My Startup',
    name: 'Waves',
    url: 'https://wavewebsite-five.vercel.app',
    desc: 'The digital home for my startup, Waves. Built from zero to capture the brand vision and convert visitors into believers.',
    index: '01',
    tech: ['React', 'Vercel', 'Startup'],
  },
  {
    tag: 'Client Work',
    name: 'Parsley & Sage',
    url: 'https://parsley-sage.com',
    desc: 'A refined web presence for a brand rooted in quality and intention — crafted to reflect their ethos in every detail.',
    index: '02',
    tech: ['Web Design', 'Brand', 'Client'],
  },
  {
    tag: 'Client Work',
    name: 'Kudos',
    url: 'https://kudoswebsite.vercel.app',
    desc: 'A dynamic website built to celebrate and amplify — designed to make kudos feel as good to give as to receive.',
    index: '03',
    tech: ['Vercel', 'React', 'Client'],
  },
]

function SiteCard({ site, delay }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); obs.disconnect() }
    }, { threshold: 0.1 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={visible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        border: '1px solid var(--border)',
        borderRadius: 20,
        overflow: 'hidden',
        background: 'white',
        transition: 'box-shadow 0.3s ease, transform 0.3s ease',
        boxShadow: hovered ? '0 24px 60px rgba(0,0,0,0.1)' : '0 2px 12px rgba(0,0,0,0.04)',
        transform: hovered ? 'translateY(-6px)' : 'none',
      }}
    >
      {/* Preview iframe */}
      <div style={{
        position: 'relative',
        height: 240,
        overflow: 'hidden',
        background: '#f5f5f5',
        borderBottom: '1px solid var(--border)',
      }}>
        <iframe
          src={site.url}
          title={site.name}
          loading="lazy"
          scrolling="no"
          sandbox="allow-scripts allow-same-origin"
          style={{
            width: '140%',
            height: '140%',
            border: 'none',
            transform: 'scale(0.714)',
            transformOrigin: 'top left',
            pointerEvents: 'none',
          }}
        />
        {/* Overlay gradient */}
        <div style={{
          position: 'absolute', inset: 0,
          background: hovered
            ? 'linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.04) 100%)'
            : 'linear-gradient(to bottom, transparent 60%, rgba(255,255,255,0.15) 100%)',
          transition: 'background 0.3s ease',
        }} />
        {/* Index badge */}
        <div style={{
          position: 'absolute', top: 16, left: 16,
          background: 'rgba(255,255,255,0.85)',
          backdropFilter: 'blur(8px)',
          border: '1px solid var(--border)',
          borderRadius: 99,
          padding: '4px 12px',
          fontFamily: 'var(--font-mono)',
          fontSize: 11,
          color: 'var(--gray-500)',
        }}>{site.index}</div>
      </div>

      {/* Info */}
      <div style={{ padding: '24px 28px' }}>
        <div style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 10,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: 'var(--accent)',
          marginBottom: 8,
        }}>{site.tag}</div>
        <h3 style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 700,
          fontSize: 24,
          letterSpacing: '-0.03em',
          color: 'var(--black)',
          marginBottom: 10,
        }}>{site.name}</h3>
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: 14,
          fontWeight: 300,
          color: 'var(--gray-500)',
          lineHeight: 1.65,
          marginBottom: 20,
        }}>{site.desc}</p>

        {/* Tags */}
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 20 }}>
          {site.tech.map(t => (
            <span key={t} style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 10,
              color: 'var(--gray-500)',
              background: 'var(--off-white)',
              border: '1px solid var(--border)',
              borderRadius: 99,
              padding: '3px 10px',
              letterSpacing: '0.05em',
            }}>{t}</span>
          ))}
        </div>

        <a
          href={site.url}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            letterSpacing: '0.06em',
            color: 'var(--black)',
            textDecoration: 'none',
            borderBottom: '1px solid var(--black)',
            paddingBottom: 2,
            transition: 'color 0.2s, borderColor 0.2s',
          }}
        >
          Visit Live Site
          <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
            <path d="M1 11L11 1M11 1H4M11 1v7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </motion.div>
  )
}

export default function Work() {
  return (
    <section id="work" style={{ padding: '120px var(--pad-x)', borderBottom: '1px solid var(--border)' }}>
      <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 64, flexWrap: 'wrap', gap: 24 }}>
          <div>
            <SectionLabel>Selected Work</SectionLabel>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: 'clamp(40px, 6vw, 80px)',
              letterSpacing: '-0.04em',
              lineHeight: 0.95,
              color: 'var(--black)',
            }}>
              Websites<br />
              <span style={{ color: 'var(--accent)' }}>I've built</span>
            </h2>
          </div>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 15,
            fontWeight: 300,
            color: 'var(--gray-500)',
            maxWidth: 340,
            lineHeight: 1.7,
          }}>
            From my own startup to client projects — every site is built with intention, craft, and a bias toward shipping.
          </p>
        </div>

        {/* Cards grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 24,
        }}>
          {sites.map((site, i) => (
            <SiteCard key={site.url} site={site} delay={i * 0.1} />
          ))}
        </div>
      </div>
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
