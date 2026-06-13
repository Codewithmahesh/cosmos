'use client'

import type { ReactNode } from 'react'

export function TallyButton({ className, children }: { className: string; children: ReactNode }) {
  function handleClick() {
    const w = window as any
    if (w.Tally) {
      w.Tally.openPopup('NpOLxl', { emoji: { text: '\u{1F44B}', animation: 'wave' } })
    } else {
      window.open('https://tally.so/r/NpOLxl', '_blank')
    }
  }

  return (
    <button type="button" onClick={handleClick} className={className}>
      {children}
    </button>
  )
}
