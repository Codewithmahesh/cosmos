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
      <>
        <p className="success-text">
          You&apos;re on the list.
        </p>

        <style jsx>{`
          .success-text {
            font-size: 14px;
            font-weight: 500;
            color: ${isDark ? '#fff' : '#000'};
          }
        `}</style>
      </>
    )
  }

return (
  <div
    style={{
      width: '100%',
      maxWidth: '100vw',
      overflow: 'hidden',
    }}
  >
    <form
      onSubmit={handleSubmit}
      style={{
        display: 'flex',
        width: '100%',
        maxWidth: '560px',
        flexDirection: 'column',
        gap: '12px',
      }}
    >

      <input
        type="email"
        name="email"
        required
        placeholder="you@company.com"
        style={{
          width: '100%',
          boxSizing: 'border-box',
          height: '44px',
          padding: '0 16px',
          borderRadius: '6px',
          border: '1px solid #ddd',
          fontSize: '14px',
        }}
      />

      <button
        type="submit"
        style={{
          width: '100%',
          height: '44px',
          background: '#000',
          color: '#fff',
          border: 'none',
          borderRadius: '6px',
          fontSize: '14px',
          fontWeight: 500,
        }}
      >
        Join Waitlist
      </button>

    </form>

    <style jsx>{`
      @media (min-width: 640px) {
        form {
          flex-direction: row !important;
        }

        button {
          width: auto !important;
          padding: 0 24px !important;
          white-space: nowrap;
        }
      }
    `}</style>

  </div>
)
} 