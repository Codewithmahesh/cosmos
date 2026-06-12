import React from 'react'

export function SectionWrapper({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <section
      className={`relative w-full overflow-hidden ${className}`}
      style={{
        background: '#F9F8F5',
      }}
    >
      <div className="relative w-full">
        {children}
      </div>
    </section>
  )
}
