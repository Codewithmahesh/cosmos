'use client'

import { useRef, useEffect } from 'react'

interface Props {
  children: React.ReactNode
  delay?: number
  className?: string
}

export function FadeUp({ children, delay = 0, className }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const show = () => {
      el.style.opacity = '1'
      el.style.transform = 'none'
    }

    // Set hidden state client-side only (server HTML stays visible)
    el.style.opacity = '0'
    el.style.transform = 'translateY(18px)'
    el.style.transition = `opacity 0.6s cubic-bezier(0.22,1,0.36,1) ${delay}s, transform 0.6s cubic-bezier(0.22,1,0.36,1) ${delay}s`

    // If already near viewport, animate in immediately
    const rect = el.getBoundingClientRect()
    if (rect.top < window.innerHeight + 100) {
      requestAnimationFrame(() => requestAnimationFrame(show))
      return
    }

    // Otherwise observe scroll
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          show()
          observer.disconnect()
        }
      },
      { rootMargin: '0px 0px 120px 0px', threshold: 0 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
