import { useState } from 'react'
import { Link as ScrollLink } from 'react-scroll'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { name: 'Accueil', to: 'hero' },
    { name: 'Compétences', to: 'skills' },
    { name: 'Projets', to: 'projects' },
    { name: 'Contact', to: 'contact' }
  ]

  return (
    <>
      <nav style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        maxWidth: "100vw",
        boxSizing: "border-box",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 16px",
        height: "60px",
        backgroundColor: "#05080F",
        borderBottom: "1px solid #7CB9E8",
        zIndex: 1000,
        overflow: "hidden",
      }}>
        {/* Logo */}
        <div style={{ color: "#7CB9E8", fontWeight: "bold", fontSize: "1.5rem" }}>
          <ScrollLink to="hero" smooth duration={500} style={{ cursor: 'pointer', textDecoration: 'none', color: '#7CB9E8' }}>
            JD
          </ScrollLink>
        </div>

        {/* Bouton hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{
            background: "none",
            border: "none",
            color: "#7CB9E8",
            fontSize: "1.5rem",
            cursor: "pointer",
            padding: "8px",
            flexShrink: 0,
            lineHeight: 1,
          }}
          aria-label="Menu"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Menu mobile overlay */}
      {isOpen && (
        <div style={{
          position: "fixed",
          top: "60px",
          left: 0,
          width: "100%",
          maxWidth: "100vw",
          backgroundColor: "#0A1020",
          zIndex: 999,
          boxSizing: "border-box",
          borderBottom: "1px solid #7CB9E8",
        }}>
          {menuItems.map((item) => (
            <ScrollLink
              key={item.name}
              to={item.to}
              smooth={true}
              duration={500}
              offset={-70}
              onClick={() => setIsOpen(false)}
              style={{
                display: "block",
                padding: "16px 24px",
                color: "#E2E8F0",
                textDecoration: "none",
                borderBottom: "1px solid rgba(124, 185, 232, 0.2)",
                cursor: "pointer",
                textAlign: "center"
              }}
            >
              {item.name}
            </ScrollLink>
          ))}
          <a
            href="/cv.pdf"
            download
            style={{
              display: "block",
              padding: "16px 24px",
              backgroundColor: "#7CB9E8",
              color: "#05080F",
              textDecoration: "none",
              textAlign: "center",
              fontWeight: "bold",
              margin: "10px",
              borderRadius: "8px"
            }}
          >
            📄 Télécharger CV
          </a>
        </div>
      )}
    </>
  )
}
