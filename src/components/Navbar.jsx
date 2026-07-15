import { useTheme } from '../context/ThemeContext'
import { useTokens } from '../theme/tokens'
import { useState, useEffect } from 'react'
import { Link as ScrollLink } from 'react-scroll'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import { FileText, Home, Code, Briefcase, Mail, Sun, Moon, Menu, X, Newspaper, ChevronsLeft, ChevronsRight } from 'lucide-react'

export default function Navbar() {
  const { darkMode, setDarkMode } = useTheme()
  const t = useTokens(darkMode)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const [activeSection, setActiveSection] = useState('hero')

  const isBlogPage = location.pathname === '/blog' || location.pathname.startsWith('/blog/')
  const isHomePage = location.pathname === '/'

  // Détection de la section active sur la page d'accueil
  useEffect(() => {
    if (!isHomePage) return

    const sections = ['hero', 'skills', 'projects', 'contact']
    const observers = []

    sections.forEach(sectionId => {
      const element = document.getElementById(sectionId)
      if (!element) return

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setActiveSection(sectionId)
            }
          })
        },
        { threshold: 0.3, rootMargin: '-70px 0px -70px 0px' }
      )
      observer.observe(element)
      observers.push(observer)
    })

    return () => {
      observers.forEach(observer => observer.disconnect())
    }
  }, [isHomePage])

  // Tous les éléments du menu
  const menuItems = [
    { name: 'Accueil', to: '/', icon: <Home size={16} />, isScroll: true, scrollTo: 'hero' },
    { name: 'Compétences', to: '/', icon: <Code size={16} />, isScroll: true, scrollTo: 'skills' },
    { name: 'Projets', to: '/', icon: <Briefcase size={16} />, isScroll: true, scrollTo: 'projects' },
    { name: 'Contact', to: '/', icon: <Mail size={16} />, isScroll: true, scrollTo: 'contact' },
    { name: 'Blog', to: '/blog', icon: <Newspaper size={16} />, isScroll: false, scrollTo: null }
  ]

  const isActive = (item) => {
    if (item.name === 'Blog') {
      return isBlogPage
    }
    if (isHomePage && item.isScroll) {
      return activeSection === item.scrollTo
    }
    return false
  }

  return (
    <>
      <style>{`
        .nav-link { 
          transition: all 0.2s ease;
          position: relative;
        }
        .nav-link:hover { 
          color: ${t.text.accent} !important; 
          transform: translateY(-2px);
        }
        .nav-link.active {
          color: ${t.text.accent} !important;
        }
        .nav-link.active::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 50%;
          transform: translateX(-50%);
          width: 20px;
          height: 2px;
          background: ${t.text.accent};
          border-radius: 2px;
        }
        
        @media (max-width: 768px) {
          .nav-links { display: none !important; }
          .hamburger { display: flex !important; }
          .navbar-custom {
            width: 90% !important;
            padding: 0 16px !important;
          }
          .menu-mobile {
            width: 90% !important;
            max-width: 320px !important;
          }
          .nav-link.active::after {
            display: none;
          }
        }
        
        @media (min-width: 769px) {
          .navbar-custom {
            width: auto !important;
            min-width: 800px !important;
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
        padding: '0 32px',
        height: '60px',
        zIndex: 1000,
        transition: 'background 0.3s, border-color 0.3s',
        boxShadow: darkMode ? '0 4px 20px rgba(0,0,0,0.3)' : '0 4px 20px rgba(0,0,0,0.05)'
      }}>
        {/* Logo avec effet gradient */}
        <RouterLink to="/" style={{
          fontWeight: 800, fontSize: '1.5rem',
          cursor: 'pointer', textDecoration: 'none',
          display: 'flex', alignItems: 'center', gap: '6px',
          marginRight: '40px'
        }}>
          <span style={{
            background: `linear-gradient(135deg, ${t.text.accent}, #34D399)`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            JD
          </span>
          <span style={{ color: t.text.secondary, fontSize: '0.6rem', fontWeight: 300 }}>✦</span>
        </RouterLink>

        <div className="nav-links" style={{
          display: 'flex', gap: '32px', alignItems: 'center',
          flex: 1,
          justifyContent: 'center'
        }}>
          {menuItems.map(item => (
            <RouterLink
              key={item.name}
              to={item.to}
              className={`nav-link ${isActive(item) ? 'active' : ''}`}
              style={{
                color: isActive(item) ? t.text.accent : t.text.secondary,
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
            </RouterLink>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginLeft: '20px' }}>
          <a
            href="/CV_DEHAZOUNDE_Joseph-vf.pdf"
            download
            style={{
              display: 'flex', alignItems: 'center', gap: '6px',
              background: t.text.accent,
              color: darkMode ? '#05080F' : '#fff',
              padding: '6px 16px', borderRadius: '40px',
              textDecoration: 'none', fontSize: '0.8rem',
              fontWeight: 600, transition: 'opacity 0.2s'
            }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >
            <FileText size={14} /> CV
          </a>

          <button style={{
            background: 'none', border: `1px solid ${t.border.default}`,
            color: t.text.secondary, borderRadius: '50%',
            width: 36, height: 36, cursor: 'pointer',
            transition: 'border-color 0.2s, color 0.2s',
            display: 'flex', alignItems: 'center', justifyContent: 'center'
          }} onClick={() => setDarkMode(!darkMode)} aria-label="Changer de thème">
            {darkMode ? <Sun size={16} /> : <Moon size={16} />}
          </button>

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
            <RouterLink
              key={item.name}
              to={item.to}
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
                padding: '16px 24px',
                color: isActive(item) ? t.text.accent : t.text.primary,
                textDecoration: 'none',
                borderBottom: `1px solid ${t.border.default}`,
                fontSize: '1rem', cursor: 'pointer',
                background: isActive(item) ? t.badge.bg : 'transparent'
              }}
            >
              {item.icon}
              {item.name}
            </RouterLink>
          ))}
          <div style={{ padding: '16px 24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <a
              href="/CV_DEHAZOUNDE_Joseph-vf.pdf"
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
