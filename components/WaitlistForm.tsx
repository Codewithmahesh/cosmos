'use client'

import { useState } from 'react'
import { joinWaitlist } from '@/app/actions'

type Variant = 'light' | 'dark'

export function WaitlistForm({
  variant = 'light',
}: {
  variant?: Variant
}) {
  const [status, setStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle')

  const isDark = variant === 'dark'

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault()
    setStatus('loading')

    const data = new FormData(e.currentTarget)

    try {
      const result = await joinWaitlist(
        (data.get('email') as string) ?? ''
      )

      setStatus(result.success ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <p
        style={{
          fontSize: '14px',
          fontWeight: 500,
          color: isDark ? '#fff' : '#000',
        }}
      >
        You&apos;re on the list.
      </p>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        width: '100%',
        display: 'flex',
        gap: '12px',
        alignItems: 'center',
      }}
      className="waitlist-form"
    >
      <input
        type="email"
        name="email"
        required
        placeholder="you@company.com"
        disabled={status === 'loading'}
        style={{
          flex: 1,
          width: '100%',
          height: '44px',
          boxSizing: 'border-box',
          padding: '0 16px',
          borderRadius: '4px',
          border: isDark
            ? '1px solid rgba(255,255,255,0.3)'
            : '1px solid rgba(0,0,0,0.15)',
          background: isDark
            ? 'rgba(255,255,255,0.07)'
            : '#ffffff',
          color: isDark ? '#fff' : '#000',
          fontSize: '14px',
          outline: 'none',
        }}
      />

      <button
        type="submit"
        disabled={status === 'loading'}
        style={{
          height: '44px',
          background: isDark ? '#fff' : '#000',
          color: isDark ? '#000' : '#fff',
          border: isDark ? '1px solid #fff' : '1px solid #000',
          borderRadius: '4px',
          fontSize: '14px',
          fontWeight: 500,
          cursor: 'pointer',
          whiteSpace: 'nowrap',
          opacity: status === 'loading' ? 0.5 : 1,
          transition: 'opacity 0.2s ease',
        }}
      >
        {status === 'loading' ? 'Joining…' : 'Join Waitlist'}
      </button>

      <style>{`
        @media (max-width: 639px) {
          .waitlist-form {
            flex-direction: column !important;
            align-items: stretch !important;
          }
          .waitlist-form input,
          .waitlist-form button {
            width: 100% !important;
          }
        }
        @media (min-width: 640px) {
          .waitlist-form button {
            width: auto !important;
            padding-left: 24px !important;
            padding-right: 24px !important;
          }
        }
      `}</style>

    </form>
  )
}