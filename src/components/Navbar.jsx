import { useTheme } from '../context/ThemeContext'
import { useTokens } from '../theme/tokens'
import { useState } from 'react'
import { Link as ScrollLink } from 'react-scroll'
import { FileText, Home, Code, Briefcase, Mail, Sun, Moon, Menu, X } from 'lucide-react'

export default function Navbar() {
  const { darkMode, setDarkMode } = useTheme()
  const t = useTokens(darkMode)
  const [menuOpen, setMenuOpen] = useState(false)

  const menuItems = [
    { name: 'Accueil', to: 'hero', icon: <Home size={16} /> },
    { name: 'Compétences', to: 'skills', icon: <Code size={16} /> },
    { name: 'Projets', to: 'projects', icon: <Briefcase size={16} /> },
    { name: 'Contact', to: 'contact', icon: <Mail size={16} /> }
  ]

  return (
    <>
      <style>{`
        @media (max-width: 768px) {
          .nav-links { display: none !important; }
          .hamburger { display: flex !important; }
        }
        .nav-link:hover { 
          color: ${t.text.accent} !important; 
          transform: translateY(-2px);
        }
        .nav-link {
          transition: all 0.2s ease;
        }
      `}</style>

      <nav style={{
        position: 'fixed',
        top: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: 'calc(100% - 40px)',
        maxWidth: '900px',
        boxSizing: 'border-box',
        background: t.bg.nav,
        backdropFilter: 'blur(12px)',
        border: `1px solid ${t.border.default}`,
        borderRadius: '60px',
        display: 'flex', alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 20px', height: '56px',
        zIndex: 1000,
        transition: 'background 0.3s, border-color 0.3s',
        boxShadow: darkMode ? '0 4px 20px rgba(0,0,0,0.3)' : '0 4px 20px rgba(0,0,0,0.05)'
      }}>
        {/* Logo gauche */}
        <ScrollLink to="hero" smooth duration={500} style={{
          color: t.text.accent, fontWeight: 700, fontSize: '1.3rem',
          cursor: 'pointer', textDecoration: 'none',
          display: 'flex', alignItems: 'center', gap: '6px'
        }}>
          <Code size={20} /> JD
        </ScrollLink>

        {/* Menu centré avec icônes */}
        <div className="nav-links" style={{
          display: 'flex', gap: '20px', alignItems: 'center'
        }}>
          {menuItems.map(item => (
            <ScrollLink
              key={item.name}
              to={item.to}
              smooth={true}
              duration={500}
              offset={-70}
              className="nav-link"
              style={{
                color: t.text.secondary,
                fontSize: '0.85rem',
                textDecoration: 'none',
                cursor: 'pointer',
                fontWeight: 500,
                display: 'flex',
                alignItems: 'center',
                gap: '5px'
              }}
            >
              {item.icon}
              {item.name}
            </ScrollLink>
          ))}
        </div>

        {/* Boutons droite */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {/* Bouton CV */}
          <a
            href="/cv.pdf"
            download
            style={{
              display: 'flex', alignItems: 'center', gap: '5px',
              background: t.text.accent,
              color: darkMode ? '#05080F' : '#fff',
              padding: '5px 12px', borderRadius: '40px',
              textDecoration: 'none', fontSize: '0.75rem',
              fontWeight: 600, transition: 'opacity 0.2s'
            }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >
            <FileText size={12} /> CV
          </a>

          {/* Bouton thème */}
          <button style={{
            background: 'none', border: `1px solid ${t.border.default}`,
            color: t.text.secondary, borderRadius: '50%',
            width: 32, height: 32, cursor: 'pointer',
            fontSize: '0.9rem', flexShrink: 0,
            transition: 'border-color 0.2s, color 0.2s',
            display: 'flex', alignItems: 'center', justifyContent: 'center'
          }} onClick={() => setDarkMode(!darkMode)} aria-label="Changer de thème">
            {darkMode ? <Sun size={14} /> : <Moon size={14} />}
          </button>

          {/* Hamburger mobile */}
          <button className="hamburger" style={{
            background: 'none', border: 'none',
            color: t.text.primary, cursor: 'pointer',
            padding: '6px', flexShrink: 0,
            display: 'none', alignItems: 'center', justifyContent: 'center'
          }} onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Menu mobile avec icônes */}
      {menuOpen && (
        <div style={{
          position: 'fixed',
          top: '85px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 'calc(100% - 40px)',
          maxWidth: '350px',
          background: t.bg.surface,
          border: `1px solid ${t.border.default}`,
          borderRadius: '20px',
          zIndex: 999,
          boxSizing: 'border-box',
          transition: 'background 0.3s',
          overflow: 'hidden',
          backdropFilter: 'blur(12px)'
        }}>
          {menuItems.map(item => (
            <ScrollLink
              key={item.name}
              to={item.to}
              smooth={true}
              duration={500}
              offset={-70}
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                padding: '14px 20px',
                color: t.text.primary, textDecoration: 'none',
                borderBottom: `1px solid ${t.border.default}`,
                fontSize: '0.9rem', cursor: 'pointer', textAlign: 'center'
              }}
            >
              {item.icon}
              {item.name}
            </ScrollLink>
          ))}
          <div style={{ padding: '14px 20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <a
              href="/cv.pdf"
              download
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px',
                background: t.text.accent,
                color: darkMode ? '#05080F' : '#fff',
                padding: '8px', borderRadius: '40px',
                textDecoration: 'none', fontSize: '0.85rem', fontWeight: 600
              }}
            >
              <FileText size={14} /> Télécharger CV
            </a>
            <button
              onClick={() => { setDarkMode(!darkMode); setMenuOpen(false) }}
              style={{
                background: 'none', border: `1px solid ${t.border.accent}`,
                color: t.text.accent, padding: '8px',
                borderRadius: '40px', cursor: 'pointer', fontSize: '0.8rem',
                width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px'
              }}
            >
              {darkMode ? <Sun size={14} /> : <Moon size={14} />}
              {darkMode ? 'Mode clair' : 'Mode sombre'}
            </button>
          </div>
        </div>
      )}
    </>
  )
}
