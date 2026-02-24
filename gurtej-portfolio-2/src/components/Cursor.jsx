import { useEffect, useRef, useState } from 'react'

export default function Cursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const [isHover, setIsHover] = useState(false)
  const [isClick, setIsClick] = useState(false)
  const posRef = useRef({ x: -100, y: -100 })
  const ringPosRef = useRef({ x: -100, y: -100 })
  const rafRef = useRef(null)

  useEffect(() => {
    const onMove = (e) => {
      posRef.current = { x: e.clientX, y: e.clientY }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX - 5}px, ${e.clientY - 5}px)`
      }
    }

    const animate = () => {
      const { x: tx, y: ty } = posRef.current
      const curr = ringPosRef.current
      const dx = tx - curr.x
      const dy = ty - curr.y
      ringPosRef.current = { x: curr.x + dx * 0.1, y: curr.y + dy * 0.1 }
      if (ringRef.current) {
        const size = isHover ? 48 : 32
        ringRef.current.style.transform = `translate(${ringPosRef.current.x - size / 2}px, ${ringPosRef.current.y - size / 2}px)`
      }
      rafRef.current = requestAnimationFrame(animate)
    }

    const onEnter = (e) => {
      if (e.target.closest('a, button, [role="button"], .hoverable')) setIsHover(true)
    }
    const onLeave = (e) => {
      if (e.target.closest('a, button, [role="button"], .hoverable')) setIsHover(false)
    }
    const onDown = () => setIsClick(true)
    const onUp = () => setIsClick(false)

    window.addEventListener('mousemove', onMove)
    document.addEventListener('mouseover', onEnter)
    document.addEventListener('mouseout', onLeave)
    document.addEventListener('mousedown', onDown)
    document.addEventListener('mouseup', onUp)
    rafRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onEnter)
      document.removeEventListener('mouseout', onLeave)
      document.removeEventListener('mousedown', onDown)
      document.removeEventListener('mouseup', onUp)
      cancelAnimationFrame(rafRef.current)
    }
  }, [isHover])

  if (typeof window !== 'undefined' && window.innerWidth < 768) return null

  return (
    <>
      <div
        ref={dotRef}
        style={{
          position: 'fixed',
          top: 0, left: 0,
          width: 10, height: 10,
          borderRadius: '50%',
          background: isClick ? 'var(--accent)' : 'var(--black)',
          pointerEvents: 'none',
          zIndex: 9999,
          willChange: 'transform',
          transition: 'background 0.15s ease, transform 0.05s ease',
        }}
      />
      <div
        ref={ringRef}
        style={{
          position: 'fixed',
          top: 0, left: 0,
          width: isHover ? 48 : 32,
          height: isHover ? 48 : 32,
          borderRadius: '50%',
          border: `1.5px solid ${isHover ? 'var(--accent)' : 'var(--black)'}`,
          pointerEvents: 'none',
          zIndex: 9998,
          willChange: 'transform',
          transition: 'width 0.25s ease, height 0.25s ease, border-color 0.25s ease',
          opacity: 0.5,
        }}
      />
    </>
  )
}
