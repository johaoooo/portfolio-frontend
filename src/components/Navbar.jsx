import { useTheme } from '../context/ThemeContext'
import { useTokens } from '../theme/tokens'
import { useState, useEffect, useCallback } from 'react'
import { scroller } from 'react-scroll'
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom'
import { FileText, Home, Code, Briefcase, Mail, Sun, Moon, Menu, X, Newspaper, ChevronsLeft, ChevronsRight } from 'lucide-react'

export default function Navbar() {
  const { darkMode, setDarkMode } = useTheme()
  const t = useTokens()
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const [activeSection, setActiveSection] = useState('hero')

  const isBlogPage = location.pathname === '/blog' || location.pathname.startsWith('/blog/')
  const isHomePage = location.pathname === '/'

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

  const handleScroll = useCallback((sectionId) => {
    setMenuOpen(false)
    scroller.scrollTo(sectionId, {
      smooth: true,
      duration: 500,
      offset: -70
    })
  }, [])

  const handleNavClick = useCallback((item) => {
    setMenuOpen(false)
    if (!item.isScroll) {
      navigate(item.to)
      return
    }
    if (!isHomePage) {
      navigate('/')
      setTimeout(() => handleScroll(item.scrollTo), 100)
    } else {
      handleScroll(item.scrollTo)
    }
  }, [isHomePage, navigate, handleScroll])

  const menuItems = [
    { name: 'Accueil', to: '/', isScroll: true, scrollTo: 'hero' },
    { name: 'Compétences', to: '/', isScroll: true, scrollTo: 'skills' },
    { name: 'Projets', to: '/', isScroll: true, scrollTo: 'projects' },
    { name: 'Contact', to: '/', isScroll: true, scrollTo: 'contact' },
    { name: 'Blog', to: '/blog', isScroll: false, scrollTo: null }
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
        {/* Logo Monogramme moderne JD uniquement */}
        <RouterLink to="/" aria-label="Accueil" style={{
          cursor: 'pointer', textDecoration: 'none',
          display: 'flex', alignItems: 'center',
          marginRight: '24px'
        }}>
          <div style={{
            width: '40px', height: '40px',
            borderRadius: '12px',
            background: `linear-gradient(135deg, ${t.text.accent}, #059669)`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: '#05080F', fontWeight: 900, fontSize: '1.1rem',
            letterSpacing: '-0.5px',
            boxShadow: '0 4px 14px rgba(16, 185, 129, 0.35)',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease'
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = 'scale(1.05)'
            e.currentTarget.style.boxShadow = '0 6px 20px rgba(16, 185, 129, 0.5)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = 'scale(1)'
            e.currentTarget.style.boxShadow = '0 4px 14px rgba(16, 185, 129, 0.35)'
          }}
          >
            JD
          </div>
        </RouterLink>

        <div className="nav-links" style={{
          display: 'flex', gap: '8px', alignItems: 'center',
          flex: 1,
          justifyContent: 'center'
        }}>
          {menuItems.map(item => {
            const active = isActive(item)
            return (
              <span
                key={item.name}
                onClick={() => handleNavClick(item)}
                style={{
                  color: active ? t.text.accent : t.text.secondary,
                  background: active ? t.badge.bg : 'transparent',
                  fontSize: '0.88rem',
                  cursor: 'pointer',
                  fontWeight: active ? 600 : 500,
                  padding: '8px 16px',
                  borderRadius: '30px',
                  transition: 'all 0.25s ease',
                  border: active ? `1px solid ${t.border.accent}` : '1px solid transparent'
                }}
              >
                {item.name}
              </span>
            )
          })}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginLeft: '16px' }}>
          <a
            href="/CV_DEHAZOUNDE_Joseph-vf.pdf"
            download
            style={{
              display: 'flex', alignItems: 'center', gap: '6px',
              background: `linear-gradient(135deg, ${t.text.accent}, #059669)`,
              color: '#05080F',
              padding: '7px 18px', borderRadius: '40px',
              textDecoration: 'none', fontSize: '0.82rem',
              fontWeight: 700, transition: 'transform 0.2s, box-shadow 0.2s',
              boxShadow: '0 4px 12px rgba(16, 185, 129, 0.2)'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-1px)'
              e.currentTarget.style.boxShadow = '0 6px 16px rgba(16, 185, 129, 0.35)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(16, 185, 129, 0.2)'
            }}
          >
            <FileText size={14} /> CV
          </a>

          <button style={{
            background: t.badge.bg, border: `1px solid ${t.border.default}`,
            color: t.text.accent, borderRadius: '50%',
            width: 38, height: 38, cursor: 'pointer',
            transition: 'all 0.2s',
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
            <span
              key={item.name}
              onClick={() => handleNavClick(item)}
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
                padding: '16px 24px',
                color: isActive(item) ? t.text.accent : t.text.primary,
                borderBottom: `1px solid ${t.border.default}`,
                fontSize: '1rem', cursor: 'pointer',
                background: isActive(item) ? t.badge.bg : 'transparent'
              }}
            >
              {item.name}
            </span>
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
