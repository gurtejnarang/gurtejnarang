import { useRef, useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const tabs = [
  {
    label: 'All Work',
    id: 'all',
    folderId: '1XPwPy2hAfjKPxDkbPoG6h4v6ggPZZurC',
    description: 'Full communications portfolio — campaigns, strategy, brand assets, and more.',
    tag: 'Overview',
  },
  {
    label: 'Jake Evans for Congress',
    id: 'jake',
    folderId: '1qfOkQ5Wlk7azBOp5l-QwEdcKS4pTcnHh',
    description: 'Congressional campaign communications — messaging, digital strategy, and outreach materials.',
    tag: 'Political Campaign',
  },
  {
    label: 'Shawn Still for State Senate',
    id: 'shawn',
    folderId: '1sxMo4KlsHOs_QJzXCfc79wX9VmAJjsrp',
    description: 'State Senate campaign — brand communications, voter outreach, and campaign collateral.',
    tag: 'Political Campaign',
  },
]

export default function Portfolio() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  const [activeTab, setActiveTab] = useState('all')
  const [viewMode, setViewMode] = useState('grid')
  const [iframeLoaded, setIframeLoaded] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); obs.disconnect() }
    }, { threshold: 0.05 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  const current = tabs.find(t => t.id === activeTab)
  const embedUrl = `https://drive.google.com/embeddedfolderview?id=${current.folderId}#${viewMode}`

  const handleTabChange = (id) => {
    setActiveTab(id)
    setIframeLoaded(false)
  }

  const handleViewChange = (mode) => {
    setViewMode(mode)
    setIframeLoaded(false)
  }

  return (
    <section id="portfolio" style={{
      padding: '120px var(--pad-x)',
      borderBottom: '1px solid var(--border)',
      background: 'var(--white)',
    }}>
      <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }} ref={ref}>

        {/* Header */}
        <SectionLabel>Communications Portfolio</SectionLabel>
        <div style={{
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          marginBottom: 56,
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
            Political campaigns, strategy decks, editorial work, and brand assets — organized by project.
          </motion.p>
        </div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          style={{
            display: 'flex',
            gap: 8,
            marginBottom: 0,
            flexWrap: 'wrap',
          }}
        >
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id
            return (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                style={{
                  padding: '10px 22px',
                  borderRadius: '12px 12px 0 0',
                  border: '1px solid',
                  borderBottom: isActive ? '1px solid white' : '1px solid var(--border)',
                  borderColor: isActive ? 'var(--border)' : 'transparent',
                  background: isActive ? 'white' : 'transparent',
                  fontFamily: 'var(--font-mono)',
                  fontSize: 11,
                  letterSpacing: '0.05em',
                  color: isActive ? 'var(--black)' : 'var(--gray-500)',
                  fontWeight: isActive ? 500 : 400,
                  transition: 'all 0.2s ease',
                  position: 'relative',
                  zIndex: isActive ? 2 : 1,
                  marginBottom: isActive ? '-1px' : 0,
                  cursor: 'none',
                }}
              >
                {isActive && (
                  <span style={{
                    display: 'inline-block',
                    width: 6, height: 6,
                    borderRadius: '50%',
                    background: 'var(--accent)',
                    marginRight: 8,
                    verticalAlign: 'middle',
                    marginTop: -2,
                  }} />
                )}
                {tab.label}
              </button>
            )
          })}
        </motion.div>

        {/* Main viewer panel */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          style={{
            border: '1px solid var(--border)',
            borderRadius: '0 12px 20px 20px',
            overflow: 'hidden',
            background: 'white',
            boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
            position: 'relative',
            zIndex: 1,
          }}
        >
          {/* Panel header — context + controls */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '16px 24px',
            borderBottom: '1px solid var(--border)',
            background: 'var(--off-white)',
            flexWrap: 'wrap',
            gap: 12,
          }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 8 }}
                transition={{ duration: 0.2 }}
                style={{ display: 'flex', alignItems: 'center', gap: 12 }}
              >
                <span style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 9,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'white',
                  background: 'var(--accent)',
                  borderRadius: 99,
                  padding: '3px 10px',
                }}>
                  {current.tag}
                </span>
                <span style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 13,
                  color: 'var(--gray-500)',
                  fontWeight: 300,
                }}>
                  {current.description}
                </span>
              </motion.div>
            </AnimatePresence>

            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              {/* Grid/List toggle */}
              <div style={{
                display: 'flex',
                background: 'white',
                border: '1px solid var(--border)',
                borderRadius: 8,
                overflow: 'hidden',
              }}>
                {[
                  { mode: 'grid', icon: (
                    <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                      <rect x="1" y="1" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.4"/>
                      <rect x="8" y="1" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.4"/>
                      <rect x="1" y="8" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.4"/>
                      <rect x="8" y="8" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.4"/>
                    </svg>
                  )},
                  { mode: 'list', icon: (
                    <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                      <path d="M1 3.5h12M1 7h12M1 10.5h12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
                    </svg>
                  )},
                ].map(({ mode, icon }) => (
                  <button
                    key={mode}
                    onClick={() => handleViewChange(mode)}
                    style={{
                      padding: '7px 10px',
                      background: viewMode === mode ? 'var(--off-white)' : 'white',
                      border: 'none',
                      color: viewMode === mode ? 'var(--black)' : 'var(--gray-300)',
                      display: 'flex', alignItems: 'center',
                      transition: 'all 0.15s ease',
                    }}
                  >
                    {icon}
                  </button>
                ))}
              </div>

              {/* Open in Drive */}
              <a
                href={`https://drive.google.com/drive/folders/${current.folderId}?usp=share_link`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                  background: 'var(--black)',
                  color: 'white',
                  fontFamily: 'var(--font-mono)',
                  fontSize: 10,
                  letterSpacing: '0.08em',
                  textDecoration: 'none',
                  borderRadius: 8,
                  padding: '8px 16px',
                  transition: 'all 0.2s ease',
                  whiteSpace: 'nowrap',
                }}
              >
                Open in Drive
                <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                  <path d="M1 11L11 1M11 1H4M11 1v7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>

          {/* iFrame embed */}
          <div style={{ position: 'relative', height: 660 }}>
            {!iframeLoaded && (
              <div style={{
                position: 'absolute', inset: 0,
                display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center',
                gap: 14, background: 'var(--off-white)',
                zIndex: 2,
              }}>
                <div style={{
                  width: 36, height: 36,
                  border: '2px solid var(--border)',
                  borderTop: '2px solid var(--accent)',
                  borderRadius: '50%',
                  animation: 'spin 0.8s linear infinite',
                }} />
                <p style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 10,
                  color: 'var(--gray-500)',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                }}>
                  Loading {current.label}...
                </p>
              </div>
            )}
            <AnimatePresence mode="wait">
              <motion.iframe
                key={`${activeTab}-${viewMode}`}
                src={embedUrl}
                title={current.label}
                onLoad={() => setIframeLoaded(true)}
                initial={{ opacity: 0 }}
                animate={{ opacity: iframeLoaded ? 1 : 0 }}
                transition={{ duration: 0.4 }}
                style={{
                  width: '100%', height: '100%',
                  border: 'none', display: 'block',
                }}
                allowFullScreen
              />
            </AnimatePresence>
          </div>

          {/* Footer */}
          <div style={{
            padding: '12px 24px',
            borderTop: '1px solid var(--border)',
            background: 'var(--off-white)',
          }}>
            <span style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 10,
              color: 'var(--gray-300)',
              letterSpacing: '0.06em',
            }}>
              ⓘ If files don't load, ensure the Drive folder is set to "Anyone with the link can view."
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
      display: 'flex', alignItems: 'center', gap: 10,
      fontFamily: 'var(--font-mono)', fontSize: 10,
      letterSpacing: '0.2em', textTransform: 'uppercase',
      color: 'var(--gray-500)', marginBottom: 16,
    }}>
      <span style={{ width: 24, height: 1, background: 'var(--gray-300)', display: 'block' }} />
      {children}
    </div>
  )
}
