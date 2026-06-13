'use client'

import { useEffect, useState } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 h-16 bg-white/[0.97] backdrop-blur-md transition-shadow duration-300 ${
        scrolled ? 'shadow-[0_1px_0_rgba(0,0,0,0.1)]' : 'hairline-b'
      }`}
    >
      <div className="container-wide flex h-full items-center justify-between">
        <span className="t-brand select-none">COSMOS.</span>
        <div className="flex items-center gap-6">
          <span className="t-label" style={{ letterSpacing: '0.04em', fontSize: '13px', textTransform: 'none', color: '#aaa' }}>
            by Exponentor
          </span>
          <a
            href="https://tally.so/r/NpOLxl"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-waitlist-btn"
          >
            Join Waitlist
          </a>
        </div>
      </div>
    </nav>
  )
}
