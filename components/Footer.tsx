export default function Footer() {
  return (
    <footer
      className="bg-black"
      style={{ borderTop: '1px solid rgba(255,255,255,0.07)', padding: '1.75rem 0' }}
    >
      <div className="container-wide flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <span
          style={{
            fontFamily: "var(--font-body), 'Inter', sans-serif",
            fontSize: '13px',
            color: 'rgba(255,255,255,0.35)',
          }}
        >
          &copy; 2026 Cosmos by Exponentor
        </span>
        <span
          style={{
            fontFamily: "var(--font-body), 'Inter', sans-serif",
            fontSize: '13px',
            letterSpacing: '0.1em',
            color: 'rgba(255,255,255,0.22)',
          }}
        >
          Built on A2A&nbsp;&nbsp;·&nbsp;&nbsp;MCP
        </span>
      </div>
    </footer>
  )
}
