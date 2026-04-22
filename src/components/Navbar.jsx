import { useState, useEffect, useCallback, useRef } from 'react'
import { Link } from 'react-scroll'
import {
  Menu, X, Download,
  Home, User, Code, FolderKanban, Award, Mail,
  Sparkles, Sun, Moon,
} from 'lucide-react'
import Logo from './Logo'
import { useTheme } from '../context/ThemeContext'

// ─── constants ────────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { label: 'Accueil',       to: 'hero',           icon: Home },
  { label: 'À propos',      to: 'about',          icon: User },
  { label: 'Compétences',   to: 'skills',         icon: Code },
  { label: 'Projets',       to: 'projects',       icon: FolderKanban },
  { label: 'Certifications',to: 'certifications', icon: Award },
  { label: 'Contact',       to: 'contact',        icon: Mail },
]

const NAV_HEIGHT       = { default: 85, scrolled: 70 }   // px – single source of truth
const SCROLL_THRESHOLD = 50
const SECTION_OFFSET   = 100

// ─── sub-components ───────────────────────────────────────────────────────────

function NavLink({ link, isActive, onClick }) {
  return (
    <li>
      <Link
        to={link.to}
        smooth
        duration={600}
        offset={-NAV_HEIGHT.scrolled}
        spy
        onSetActive={onClick ? undefined : undefined}
        onClick={onClick}
        aria-current={isActive ? 'page' : undefined}
        className={`nav-link ${isActive ? 'nav-link--active' : ''}`}
      >
        <link.icon size={15} aria-hidden="true" />
        <span>{link.label}</span>
      </Link>
    </li>
  )
}

function ThemeToggle({ darkMode, onToggle }) {
  return (
    <button
      onClick={onToggle}
      aria-label={darkMode ? 'Passer en mode clair' : 'Passer en mode sombre'}
      className="icon-btn"
    >
      {darkMode
        ? <Sun  size={17} aria-hidden="true" />
        : <Moon size={17} aria-hidden="true" />}
    </button>
  )
}

function CVButton({ scrolled }) {
  return (
    <a
      href="/CV_Dehazounde_Joseph.pdf"
      download
      className={`cv-btn ${scrolled ? 'cv-btn--sm' : ''}`}
      aria-label="Télécharger le CV (PDF)"
    >
      <Download size={13} aria-hidden="true" />
      <span>CV</span>
    </a>
  )
}

function MobileMenu({ isOpen, onClose, activeSection, borderColor }) {
  const menuRef = useRef(null)

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handler)
    // Trap focus inside menu
    menuRef.current?.querySelector('a, button')?.focus()
    return () => document.removeEventListener('keydown', handler)
  }, [isOpen, onClose])

  // Prevent body scroll while open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div
      ref={menuRef}
      role="dialog"
      aria-modal="true"
      aria-label="Menu de navigation"
      className="mobile-menu"
    >
      <nav>
        {NAV_LINKS.map(link => {
          const isActive = activeSection === link.to
          return (
            <Link
              key={link.to}
              to={link.to}
              smooth
              duration={600}
              offset={-NAV_HEIGHT.scrolled}
              onClick={onClose}
              aria-current={isActive ? 'page' : undefined}
              className={`mobile-nav-link ${isActive ? 'mobile-nav-link--active' : ''}`}
            >
              <link.icon size={18} aria-hidden="true" />
              <span>{link.label}</span>
            </Link>
          )
        })}
      </nav>

      <a
        href="/CV_Dehazounde_Joseph.pdf"
        download
        className="mobile-cv-btn"
        aria-label="Télécharger le CV (PDF)"
      >
        <Download size={15} aria-hidden="true" />
        Télécharger le CV
      </a>
    </div>
  )
}

// ─── main component ───────────────────────────────────────────────────────────

export default function Navbar() {
  const { darkMode, setDarkMode } = useTheme()
  const [scrolled,       setScrolled]       = useState(false)
  const [mobileOpen,     setMobileOpen]     = useState(false)
  const [activeSection,  setActiveSection]  = useState('hero')

  // Stable section IDs array – no need to re-derive on every scroll
  const sectionIds = NAV_LINKS.map(l => l.to)

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > SCROLL_THRESHOLD)

    // Iterate in reverse without mutating the original array
    for (let i = sectionIds.length - 1; i >= 0; i--) {
      const el = document.getElementById(sectionIds[i])
      if (el && window.scrollY >= el.offsetTop - SECTION_OFFSET) {
        setActiveSection(sectionIds[i])
        break
      }
    }
  }, [sectionIds])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  const toggleTheme  = useCallback(() => setDarkMode(d => !d), [setDarkMode])
  const closeMobile  = useCallback(() => setMobileOpen(false), [])
  const toggleMobile = useCallback(() => setMobileOpen(o => !o), [])

  return (
    <>
      {/* ── Navbar ── */}
      <header
        role="banner"
        className={`navbar ${scrolled ? 'navbar--scrolled' : ''} ${darkMode ? 'dark' : 'light'}`}
        style={{ '--nav-h': `${scrolled ? NAV_HEIGHT.scrolled : NAV_HEIGHT.default}px` }}
      >
        <div className="navbar__inner">

          {/* Logo + name */}
          <Link
            to="hero"
            smooth
            duration={600}
            aria-label="Retour à l'accueil"
            className="navbar__brand"
          >
            <Logo size={scrolled ? 34 : 40} />
            <div className="navbar__brand-text">
              <span className="navbar__name">Joseph Dehazounde</span>
              <span className="navbar__sub" aria-hidden="true">
                <Sparkles size={9} />
                Fullstack &amp; Security
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <ul className="navbar__links" role="list" aria-label="Navigation principale">
            {NAV_LINKS.map(link => (
              <NavLink
                key={link.to}
                link={link}
                isActive={activeSection === link.to}
              />
            ))}
          </ul>

          {/* Actions */}
          <div className="navbar__actions">
            <ThemeToggle darkMode={darkMode} onToggle={toggleTheme} />
            <CVButton scrolled={scrolled} />

            {/* Mobile trigger */}
            <button
              onClick={toggleMobile}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              className="icon-btn mobile-trigger"
            >
              {mobileOpen ? <X size={21} aria-hidden="true" /> : <Menu size={21} aria-hidden="true" />}
            </button>
          </div>

        </div>
      </header>

      {/* ── Mobile menu ── */}
      <MobileMenu
        isOpen={mobileOpen}
        onClose={closeMobile}
        activeSection={activeSection}
      />

      {/* ── Styles ── */}
      <style>{`
        /* ── tokens ── */
        .navbar.dark  { --c-bg: rgba(8,12,20,0.92);  --c-border: rgba(0,212,255,0.18); --c-text: #8BA0B8; --c-active: #00D4FF; --c-name: #F1F5F9; --c-sub: #00D4FF; --c-btn-bg: #00D4FF; --c-hover-bg: rgba(0,212,255,0.07); --c-active-bg: rgba(0,212,255,0.11); }
        .navbar.light { --c-bg: rgba(255,255,255,0.94); --c-border: rgba(0,0,0,0.08); --c-text: #334155; --c-active: #0052CC; --c-name: #0F172A; --c-sub: #0052CC; --c-btn-bg: #0052CC; --c-hover-bg: rgba(0,0,0,0.04); --c-active-bg: rgba(0,82,204,0.09); }

        /* ── layout ── */
        .navbar {
          position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
          background: var(--c-bg);
          backdrop-filter: blur(18px); -webkit-backdrop-filter: blur(18px);
          border-bottom: 1px solid transparent;
          transition: height .4s cubic-bezier(.16,1,.3,1), border-color .4s ease, background .4s ease;
          will-change: height;
        }
        .navbar--scrolled { border-bottom-color: var(--c-border); }

        .navbar__inner {
          max-width: 1280px; margin: 0 auto; padding: 0 2rem;
          height: var(--nav-h);
          display: flex; align-items: center; justify-content: space-between;
          gap: 1rem;
          transition: height .4s cubic-bezier(.16,1,.3,1);
        }

        /* ── brand ── */
        .navbar__brand {
          display: flex; align-items: center; gap: .7rem;
          text-decoration: none; cursor: pointer; flex-shrink: 0;
        }
        .navbar__brand-text { display: flex; flex-direction: column; gap: 2px; }
        .navbar__name {
          font-family: 'Syne', sans-serif; font-weight: 700;
          font-size: clamp(.9rem, 1.2vw, 1.05rem);
          color: var(--c-name); line-height: 1;
          transition: color .3s;
        }
        .navbar__sub {
          display: flex; align-items: center; gap: 4px;
          font-family: 'JetBrains Mono', monospace; font-size: .52rem;
          color: var(--c-sub); letter-spacing: .1em; text-transform: uppercase;
        }

        /* ── desktop nav ── */
        .navbar__links {
          display: flex; gap: .2rem; list-style: none; margin: 0; padding: 0;
        }
        .nav-link {
          display: flex; align-items: center; gap: .45rem;
          padding: .45rem 1rem;
          font-family: 'DM Sans', sans-serif; font-size: .84rem; font-weight: 400;
          color: var(--c-text);
          border-radius: 30px; cursor: pointer;
          transition: background .2s, color .2s, font-weight .2s;
          white-space: nowrap;
        }
        .nav-link:hover   { background: var(--c-hover-bg);  color: var(--c-active); }
        .nav-link--active { background: var(--c-active-bg); color: var(--c-active); font-weight: 600; }

        /* ── actions ── */
        .navbar__actions { display: flex; align-items: center; gap: .5rem; flex-shrink: 0; }

        .icon-btn {
          display: flex; align-items: center; justify-content: center;
          width: 38px; height: 38px; border-radius: 50%;
          background: var(--c-hover-bg); border: 1px solid var(--c-border);
          color: var(--c-active); cursor: pointer;
          transition: background .2s, transform .15s;
        }
        .icon-btn:hover  { background: var(--c-active-bg); }
        .icon-btn:active { transform: scale(.93); }

        .cv-btn {
          display: flex; align-items: center; gap: .45rem;
          padding: .5rem 1.4rem;
          background: var(--c-btn-bg); color: #fff;
          border-radius: 30px; font-family: 'DM Sans', sans-serif;
          font-size: .8rem; font-weight: 600;
          text-decoration: none; white-space: nowrap;
          transition: opacity .2s, transform .15s, padding .4s;
        }
        .cv-btn--sm { padding: .45rem 1.2rem; font-size: .75rem; }
        .cv-btn:hover  { opacity: .88; }
        .cv-btn:active { transform: scale(.96); }

        /* ── mobile trigger ── */
        .mobile-trigger { display: none; }

        /* ── mobile menu ── */
        .mobile-menu {
          position: fixed; inset: var(--nav-h, 85px) 0 0 0;
          z-index: 999;
          background: var(--c-bg, rgba(8,12,20,.98));
          backdrop-filter: blur(24px); -webkit-backdrop-filter: blur(24px);
          padding: 1.25rem 1.5rem 2rem;
          overflow-y: auto;
          display: flex; flex-direction: column; gap: .25rem;
          animation: slideDown .25s cubic-bezier(.16,1,.3,1) both;
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .mobile-nav-link {
          display: flex; align-items: center; gap: .75rem;
          padding: .9rem .5rem;
          font-family: 'DM Sans', sans-serif; font-size: 1rem; font-weight: 400;
          color: var(--c-text, #8BA0B8);
          border-bottom: 1px solid var(--c-border, rgba(0,212,255,0.1));
          cursor: pointer; transition: color .2s;
        }
        .mobile-nav-link:hover,
        .mobile-nav-link--active { color: var(--c-active, #00D4FF); font-weight: 600; }

        .mobile-cv-btn {
          display: flex; align-items: center; justify-content: center; gap: .5rem;
          margin-top: 1.25rem; padding: .9rem;
          background: var(--c-btn-bg, #00D4FF); color: #fff;
          border-radius: 30px; font-weight: 600; text-decoration: none;
          font-family: 'DM Sans', sans-serif; font-size: .9rem;
          transition: opacity .2s;
        }
        .mobile-cv-btn:hover { opacity: .88; }

        /* ── responsive ── */
        @media (max-width: 900px) {
          .navbar__links { display: none; }
        }
        @media (max-width: 768px) {
          .mobile-trigger { display: flex; }
          .cv-btn span    { display: none; }
          .cv-btn         { padding: 0; width: 38px; height: 38px; border-radius: 50%; justify-content: center; }
        }
        @media (max-width: 480px) {
          .navbar__inner { padding: 0 1rem; }
          .navbar__sub   { display: none; }
        }
      `}</style>
    </>
  )
}
