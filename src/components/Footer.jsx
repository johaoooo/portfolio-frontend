import Logo from './Logo'

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid #1E2A3A', padding: '3rem 2rem', background: '#080C14' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <Logo size={28} />
          <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.7rem', color: '#4A6080', letterSpacing: '0.1em' }}>
            DEHAZOUNDE JOSEPH · {new Date().getFullYear()}
          </span>
        </div>
        <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem', color: '#1E2A3A', letterSpacing: '0.1em' }}>
          React + Django · Sécurité by design
        </span>
      </div>
    </footer>
  )
}
