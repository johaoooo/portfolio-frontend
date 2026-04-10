import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { Menu, X, Download, Home, User, Code, FolderKanban, Award, Mail, Sparkles, Sun, Moon } from 'lucide-react'
import Logo from './Logo'
import { useTheme } from '../context/ThemeContext'

const links = [
  { label: 'Accueil', to: 'hero', icon: Home },
  { label: 'À propos', to: 'about', icon: User },
  { label: 'Compétences', to: 'skills', icon: Code },
  { label: 'Projets', to: 'projects', icon: FolderKanban },
  { label: 'Certifications', to: 'certifications', icon: Award },
  { label: 'Contact', to: 'contact', icon: Mail },
]

export default function Navbar() {
  const { darkMode, setDarkMode } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const [hoveredItem, setHoveredItem] = useState(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      const sections = links.map(link => link.to)
      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element && window.scrollY >= element.offsetTop - 100) {
          setActiveSection(section)
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navBg = darkMode 
    ? (scrolled ? 'rgba(8, 12, 20, 0.95)' : 'rgba(8, 12, 20, 0.8)')
    : (scrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.9)')
  
  const borderColor = darkMode ? 'rgba(0, 212, 255, 0.2)' : 'rgba(0, 0, 0, 0.08)'
  const textColor = darkMode ? '#8BA0B8' : '#334155'
  const activeColor = darkMode ? '#00D4FF' : '#0052CC'
  const nameColor = darkMode ? '#F1F5F9' : '#0F172A'
  const subtitleColor = darkMode ? '#00D4FF' : '#0052CC'

  return (
    <>
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        background: navBg,
        backdropFilter: scrolled ? 'blur(20px)' : 'blur(12px)',
        borderBottom: scrolled ? `1px solid ${borderColor}` : '1px solid transparent',
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 2rem',
          height: scrolled ? '70px' : '85px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        }}>
          
          <Link to="hero" smooth duration={600} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
            <Logo size={scrolled ? 34 : 40} />
            <div>
              <span style={{
                fontFamily: 'Syne, sans-serif',
                fontWeight: 700,
                fontSize: scrolled ? '0.95rem' : '1.1rem',
                color: nameColor,
                transition: 'color 0.3s ease',
              }}>Joseph Dehazounde</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', marginTop: '2px' }}>
                <Sparkles size={10} color={subtitleColor} />
                <span style={{ 
                  fontFamily: 'JetBrains Mono, monospace', 
                  fontSize: '0.5rem', 
                  color: subtitleColor, 
                  letterSpacing: '0.1em', 
                  textTransform: 'uppercase' 
                }}>Fullstack & Security</span>
              </div>
            </div>
          </Link>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <ul style={{ display: 'flex', gap: '0.3rem', listStyle: 'none', margin: 0, padding: 0 }} className="desktop-nav">
              {links.map(link => {
                const Icon = link.icon
                const isActive = activeSection === link.to
                const isHovered = hoveredItem === link.to
                return (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      smooth
                      duration={600}
                      offset={-70}
                      spy={true}
                      onSetActive={() => setActiveSection(link.to)}
                      onMouseEnter={() => setHoveredItem(link.to)}
                      onMouseLeave={() => setHoveredItem(null)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '0.5rem 1.1rem',
                        fontFamily: 'DM Sans, sans-serif',
                        fontSize: '0.85rem',
                        fontWeight: isActive ? 600 : 400,
                        color: isActive ? activeColor : textColor,
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        borderRadius: '30px',
                        background: isActive 
                          ? (darkMode ? 'rgba(0, 212, 255, 0.1)' : 'rgba(0, 82, 204, 0.1)')
                          : isHovered 
                            ? (darkMode ? 'rgba(0, 212, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)')
                            : 'transparent',
                      }}
                    >
                      <Icon size={16} />
                      <span>{link.label}</span>
                    </Link>
                  </li>
                )
              })}
            </ul>

            <button
              onClick={() => setDarkMode(!darkMode)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '38px',
                height: '38px',
                borderRadius: '30px',
                background: darkMode ? 'rgba(0, 212, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)',
                border: `1px solid ${borderColor}`,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
            >
              {darkMode ? <Sun size={18} color="#FCD34D" /> : <Moon size={18} color="#0052CC" />}
            </button>

            <a
              href="/CV_Dehazounde_Joseph.pdf"
              download
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: scrolled ? '0.5rem 1.3rem' : '0.65rem 1.6rem',
                background: darkMode 
                  ? 'linear-gradient(135deg, #00D4FF 0%, #0099cc 100%)'
                  : 'linear-gradient(135deg, #0052CC 0%, #0041a3 100%)',
                borderRadius: '30px',
                textDecoration: 'none',
                fontFamily: 'DM Sans, sans-serif',
                fontSize: scrolled ? '0.75rem' : '0.8rem',
                fontWeight: 600,
                color: '#FFFFFF',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
              }}
            >
              <Download size={14} /> CV
            </a>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              style={{
                display: 'none',
                background: darkMode ? 'rgba(0, 212, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)',
                border: `1px solid ${borderColor}`,
                borderRadius: '12px',
                padding: '0.6rem',
                color: darkMode ? '#00D4FF' : '#0052CC',
                cursor: 'pointer',
              }}
              className="mobile-btn"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {mobileOpen && (
        <div style={{
          position: 'fixed',
          top: scrolled ? '70px' : '85px',
          left: 0,
          right: 0,
          background: darkMode ? 'rgba(13, 20, 33, 0.98)' : 'rgba(255, 255, 255, 0.98)',
          backdropFilter: 'blur(20px)',
          borderBottom: `1px solid ${borderColor}`,
          padding: '1.5rem',
          zIndex: 999,
        }}>
          {links.map(link => {
            const Icon = link.icon
            const isActive = activeSection === link.to
            return (
              <Link
                key={link.to}
                to={link.to}
                smooth
                duration={600}
                offset={-70}
                onClick={() => setMobileOpen(false)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '0.875rem 0',
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '1rem',
                  fontWeight: isActive ? 600 : 400,
                  color: isActive ? activeColor : textColor,
                  cursor: 'pointer',
                  borderBottom: `1px solid ${borderColor}`,
                }}
              >
                <Icon size={18} />
                <span>{link.label}</span>
              </Link>
            )
          })}
          <a
            href="/CV_Dehazounde_Joseph.pdf"
            download
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              marginTop: '1rem',
              padding: '0.8rem',
              background: darkMode 
                ? 'linear-gradient(135deg, #00D4FF, #0099cc)'
                : 'linear-gradient(135deg, #0052CC, #0041a3)',
              borderRadius: '30px',
              textDecoration: 'none',
              color: '#FFFFFF',
              fontWeight: 600,
            }}
          >
            <Download size={14} /> Télécharger le CV
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-btn { display: flex !important; }
        }
      `}</style>
    </>
  )
}
