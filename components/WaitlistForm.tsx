'use client'

import { useState } from 'react'
import { joinWaitlist } from '@/app/actions'

type Variant = 'light' | 'dark'

export function WaitlistForm({ variant = 'light' }: { variant?: Variant }) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const isDark = variant === 'dark'

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')
    const data = new FormData(e.currentTarget)
    try {
      const result = await joinWaitlist((data.get('email') as string) ?? '')
      setStatus(result.success ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <p
        style={{
          fontFamily: "var(--font-inter), 'Inter', sans-serif",
          fontSize: '14px',
          fontWeight: 500,
          letterSpacing: '0.01em',
          color: isDark ? '#fff' : '#000',
        }}
      >
        You&apos;re on the list.
      </p>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full flex-col gap-2 sm:flex-row">
      <input
        type="email"
        name="email"
        required
        placeholder="you@company.com"
        disabled={status === 'loading'}
        style={{
          flex: 1,
          fontFamily: "var(--font-inter), 'Inter', sans-serif",
          fontSize: '14px',
          fontWeight: 400,
          padding: '12px 16px',
          background: isDark ? 'transparent' : '#fff',
          border: isDark ? '1px solid rgba(255,255,255,0.2)' : '1px solid rgba(0,0,0,0.14)',
          color: isDark ? '#fff' : '#000',
          outline: 'none',
          transition: 'border-color 0.15s',
        }}
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        style={{
          fontFamily: "var(--font-inter), 'Inter', sans-serif",
          fontSize: '14px',
          fontWeight: 500,
          padding: '12px 24px',
          background: isDark ? '#fff' : '#000',
          color: isDark ? '#000' : '#fff',
          border: 'none',
          cursor: 'pointer',
          whiteSpace: 'nowrap',
          opacity: status === 'loading' ? 0.5 : 1,
          transition: 'opacity 0.15s',
          letterSpacing: '0.01em',
        }}
      >
        {status === 'loading' ? 'Joining…' : 'Join Waitlist'}
      </button>
    </form>
  )
}
