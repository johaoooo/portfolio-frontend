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
        .nav-link:hover { 
          color: ${t.text.accent} !important; 
          transform: translateY(-2px);
        }
        .nav-link {
          transition: all 0.2s ease;
        }
        
        /* Mobile styles */
        @media (max-width: 768px) {
          .nav-links { display: none !important; }
          .hamburger { display: flex !important; }
          .navbar-custom {
            width: 85% !important;
            padding: 0 16px !important;
          }
          .menu-mobile {
            width: 85% !important;
            max-width: 300px !important;
          }
        }
        
        /* Desktop styles */
        @media (min-width: 769px) {
          .navbar-custom {
            width: auto !important;
            min-width: 700px !important;
            padding: 0 28px !important;
          }
          .hamburger {
            display: none !important;
          }
        }
      `}</style>

      <nav className="navbar-custom" style={{
        position: 'fixed',
        top: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        boxSizing: 'border-box',
        background: t.bg.nav,
        backdropFilter: 'blur(12px)',
        border: `1px solid ${t.border.default}`,
        borderRadius: '60px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 28px',
        height: '60px',
        zIndex: 1000,
        transition: 'background 0.3s, border-color 0.3s',
        boxShadow: darkMode ? '0 4px 20px rgba(0,0,0,0.3)' : '0 4px 20px rgba(0,0,0,0.05)'
      }}>
        {/* Logo gauche */}
        <ScrollLink to="hero" smooth duration={500} style={{
          color: t.text.accent, fontWeight: 700, fontSize: '1.4rem',
          cursor: 'pointer', textDecoration: 'none',
          display: 'flex', alignItems: 'center', gap: '8px'
        }}>
          <Code size={22} /> JD
        </ScrollLink>

        {/* Menu centré avec icônes */}
        <div className="nav-links" style={{
          display: 'flex', gap: '28px', alignItems: 'center'
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
                fontSize: '0.9rem',
                textDecoration: 'none',
                cursor: 'pointer',
                fontWeight: 500,
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              {item.icon}
              {item.name}
            </ScrollLink>
          ))}
        </div>

        {/* Boutons droite */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {/* Bouton CV */}
          <a
            href="/cv.pdf"
            download
            style={{
              display: 'flex', alignItems: 'center', gap: '6px',
              background: t.text.accent,
              color: darkMode ? '#05080F' : '#fff',
              padding: '6px 14px', borderRadius: '40px',
              textDecoration: 'none', fontSize: '0.8rem',
              fontWeight: 600, transition: 'opacity 0.2s'
            }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >
            <FileText size={14} /> CV
          </a>

          {/* Bouton thème */}
          <button style={{
            background: 'none', border: `1px solid ${t.border.default}`,
            color: t.text.secondary, borderRadius: '50%',
            width: 36, height: 36, cursor: 'pointer',
            transition: 'border-color 0.2s, color 0.2s',
            display: 'flex', alignItems: 'center', justifyContent: 'center'
          }} onClick={() => setDarkMode(!darkMode)} aria-label="Changer de thème">
            {darkMode ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          {/* Hamburger mobile */}
          <button className="hamburger" style={{
            background: 'none', border: 'none',
            color: t.text.primary, cursor: 'pointer',
            padding: '8px', flexShrink: 0,
            display: 'none', alignItems: 'center', justifyContent: 'center'
          }} onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Menu mobile */}
      {menuOpen && (
        <div className="menu-mobile" style={{
          position: 'fixed',
          top: '90px',
          left: '50%',
          transform: 'translateX(-50%)',
          background: t.bg.surface,
          border: `1px solid ${t.border.default}`,
          borderRadius: '24px',
          zIndex: 999,
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
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
                padding: '16px 24px',
                color: t.text.primary, textDecoration: 'none',
                borderBottom: `1px solid ${t.border.default}`,
                fontSize: '1rem', cursor: 'pointer'
              }}
            >
              {item.icon}
              {item.name}
            </ScrollLink>
          ))}
          <div style={{ padding: '16px 24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <a
              href="/cv.pdf"
              download
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                background: t.text.accent,
                color: darkMode ? '#05080F' : '#fff',
                padding: '10px', borderRadius: '40px',
                textDecoration: 'none', fontSize: '0.9rem', fontWeight: 600
              }}
            >
              <FileText size={16} /> Télécharger CV
            </a>
            <button
              onClick={() => { setDarkMode(!darkMode); setMenuOpen(false) }}
              style={{
                background: 'none', border: `1px solid ${t.border.accent}`,
                color: t.text.accent, padding: '10px',
                borderRadius: '40px', cursor: 'pointer', fontSize: '0.85rem',
                width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px'
              }}
            >
              {darkMode ? <Sun size={16} /> : <Moon size={16} />}
              {darkMode ? 'Mode clair' : 'Mode sombre'}
            </button>
          </div>
        </div>
      )}
    </>
  )
}
