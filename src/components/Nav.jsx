import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { label: 'Work', href: '#work' },
  { label: 'Resume', href: '#resume' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'About', href: '#about' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
      const sections = document.querySelectorAll('section[id]')
      sections.forEach(s => {
        if (window.scrollY >= s.offsetTop - 100) setActive(s.id)
      })
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 100,
        height: 'var(--nav-h)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 var(--pad-x)',
        background: scrolled ? 'rgba(255,255,255,0.88)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        transition: 'all 0.3s ease',
      }}
    >
      {/* Logo */}
      <a href="#" style={{ textDecoration: 'none' }}>
        <span style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 700,
          fontSize: 18,
          letterSpacing: '-0.02em',
          color: 'var(--black)',
        }}>
          GN
        </span>
      </a>

      {/* Desktop links */}
      <div style={{ display: 'flex', gap: 32, alignItems: 'center' }}
        className="desktop-nav">
        {links.map(l => (
          <a
            key={l.href}
            href={l.href}
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 12,
              letterSpacing: '0.04em',
              color: active === l.href.slice(1) ? 'var(--accent)' : 'var(--gray-500)',
              textDecoration: 'none',
              transition: 'color 0.2s ease',
              fontWeight: 400,
            }}
          >
            {l.label}
          </a>
        ))}
        <a
          href="mailto:gurtejnarang@gmail.com"
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            letterSpacing: '0.06em',
            color: 'var(--black)',
            textDecoration: 'none',
            border: '1px solid var(--border)',
            borderRadius: 99,
            padding: '8px 20px',
            transition: 'all 0.2s ease',
            background: 'white',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = 'var(--black)'
            e.currentTarget.style.color = 'white'
            e.currentTarget.style.borderColor = 'var(--black)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'white'
            e.currentTarget.style.color = 'var(--black)'
            e.currentTarget.style.borderColor = 'var(--border)'
          }}
        >
          Say hello →
        </a>
      </div>

      {/* Mobile burger */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="mobile-burger"
        style={{
          background: 'none', border: 'none',
          display: 'none',
          flexDirection: 'column', gap: 5,
          padding: 4,
        }}
        aria-label="Menu"
      >
        <span style={{ width: 22, height: 1.5, background: 'var(--black)', display: 'block', transition: 'all 0.2s', transform: menuOpen ? 'rotate(45deg) translate(4px,4px)' : 'none' }} />
        <span style={{ width: 22, height: 1.5, background: 'var(--black)', display: 'block', opacity: menuOpen ? 0 : 1 }} />
        <span style={{ width: 22, height: 1.5, background: 'var(--black)', display: 'block', transition: 'all 0.2s', transform: menuOpen ? 'rotate(-45deg) translate(4px,-4px)' : 'none' }} />
      </button>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            style={{
              position: 'fixed',
              top: 'var(--nav-h)', left: 0, right: 0,
              background: 'white',
              borderBottom: '1px solid var(--border)',
              padding: '24px var(--pad-x)',
              display: 'flex', flexDirection: 'column', gap: 20,
            }}
          >
            {links.map(l => (
              <a key={l.href} href={l.href}
                onClick={() => setMenuOpen(false)}
                style={{ fontFamily: 'var(--font-display)', fontSize: 24, fontWeight: 600, color: 'var(--black)', textDecoration: 'none' }}>
                {l.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-burger { display: flex !important; }
        }
      `}</style>
    </motion.nav>
  )
}
