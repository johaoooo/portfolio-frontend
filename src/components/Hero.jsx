import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { ArrowRight, Shield, ChevronDown, Mail, Sparkles, Code, Lock, Zap, Star } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'
import { useState, useEffect } from 'react'

// Icônes personnalisées
const GithubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
  </svg>
)

const LinkedinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
)

// Composant Counter animé
const AnimatedCounter = ({ target, suffix = '' }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    const duration = 2000
    const step = Math.ceil(target / (duration / 16))
    
    const timer = setInterval(() => {
      start += step
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(start)
      }
    }, 16)
    
    return () => clearInterval(timer)
  }, [target])

  return <>{count}{suffix}</>
}

export default function Hero() {
  const { darkMode } = useTheme()
  
  // Texte dynamique
  const texts = [
    "Expert en Cybersécurité",
    "Développeur Fullstack",
    "Pentest & Audit",
    "Sécurité Applicative"
  ]
  const [currentText, setCurrentText] = useState(0)
  const [displayText, setDisplayText] = useState(texts[0])
  const [isDeleting, setIsDeleting] = useState(false)
  const [typingSpeed, setTypingSpeed] = useState(100)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < texts[currentText].length) {
          setDisplayText(texts[currentText].slice(0, displayText.length + 1))
          setTypingSpeed(100)
        } else {
          setIsDeleting(true)
          setTypingSpeed(2000)
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1))
          setTypingSpeed(50)
        } else {
          setIsDeleting(false)
          setCurrentText((currentText + 1) % texts.length)
          setTypingSpeed(100)
        }
      }
    }, typingSpeed)

    return () => clearTimeout(timer)
  }, [displayText, isDeleting, currentText, texts, typingSpeed])

  const stats = [
    { target: 5, suffix: '+', label: 'Projets', icon: Code, color: 'var(--accent)' },
    { target: 20, suffix: '+', label: 'Vulnérabilités', icon: Shield, color: '#C9A84C' },
    { target: 100, suffix: '%', label: 'Sécurisé', icon: Lock, color: '#8B5CF6' },
  ]

  return (
    <section id="hero" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
    }}>
      
      {/* Background dynamique */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: darkMode 
          ? 'radial-gradient(ellipse at 20% 30%, #0A0F1A 0%, #080C14 50%, #05080F 100%)'
          : 'radial-gradient(ellipse at 20% 30%, #F8FAFC 0%, #F1F5F9 50%, #E2E8F0 100%)',
      }} />
      
      {/* Effets de particules flottantes */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '5%',
        width: '300px',
        height: '300px',
        background: 'radial-gradient(circle, rgba(0,212,255,0.15), transparent)',
        borderRadius: '50%',
        filter: 'blur(60px)',
        animation: 'float 8s ease-in-out infinite',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '10%',
        right: '5%',
        width: '250px',
        height: '250px',
        background: 'radial-gradient(circle, rgba(139,92,246,0.12), transparent)',
        borderRadius: '50%',
        filter: 'blur(60px)',
        animation: 'float 6s ease-in-out infinite reverse',
      }} />

      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '6rem 2rem',
        display: 'grid',
        gridTemplateColumns: '1fr 0.8fr',
        gap: '5rem',
        alignItems: 'center',
        position: 'relative',
        zIndex: 2,
      }} className="hero-grid">
        
        {/* Texte à gauche */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
        >
          {/* Nom avec effet 3D */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            style={{ marginBottom: '1.5rem' }}
          >
            <div style={{ position: 'relative' }}>
              {/* Ombre portée 3D */}
              <h1 style={{
                fontFamily: '"Syne", "Montserrat", sans-serif',
                fontWeight: 800,
                fontSize: 'clamp(3.5rem, 8vw, 6rem)',
                lineHeight: 1,
                letterSpacing: '-0.02em',
                textTransform: 'uppercase',
                background: 'linear-gradient(135deg, var(--accent) 0%, #C9A84C 35%, #8B5CF6 70%, var(--accent) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: darkMode ? '0 0 30px rgba(0,212,255,0.3)' : '0 0 20px rgba(0,212,255,0.2)',
                position: 'relative',
                zIndex: 2,
              }}>
                DEHAZOUNDE
              </h1>
              {/* Effet de relief */}
              <div style={{
                position: 'absolute',
                top: '4px',
                left: '4px',
                right: 0,
                bottom: 0,
                fontFamily: '"Syne", "Montserrat", sans-serif',
                fontWeight: 800,
                fontSize: 'clamp(3.5rem, 8vw, 6rem)',
                lineHeight: 1,
                letterSpacing: '-0.02em',
                textTransform: 'uppercase',
                background: 'linear-gradient(135deg, rgba(0,212,255,0.3), rgba(139,92,246,0.2))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                zIndex: 1,
                opacity: 0.5,
              }}>
                DEHAZOUNDE
              </div>
            </div>
            
            {/* Prénom simple sans tirets */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              marginTop: '0.75rem',
            }}>
              <div style={{
                width: '50px',
                height: '3px',
                background: 'linear-gradient(90deg, var(--accent), #8B5CF6)',
                borderRadius: '3px',
              }} />
              <span style={{
                fontFamily: '"DM Sans", sans-serif',
                fontWeight: 600,
                fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
                color: darkMode ? '#F1F5F9' : '#0F172A',
                letterSpacing: '-0.01em',
              }}>
                Joseph
              </span>
              <span style={{
                background: 'rgba(0,212,255,0.12)',
                padding: '0.2rem 0.8rem',
                borderRadius: '20px',
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.65rem',
                fontWeight: 500,
                color: 'var(--accent)',
                border: '1px solid rgba(0,212,255,0.25)',
              }}>Junior</span>
            </div>
          </motion.div>

          {/* Stats dynamiques */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            style={{
              display: 'flex',
              gap: '2rem',
              marginBottom: '2.5rem',
              flexWrap: 'wrap',
              marginTop: '1rem',
            }}
          >
            {stats.map((stat, i) => (
              <div key={stat.label} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                padding: '0.5rem 1rem 0.5rem 0',
                borderRight: i < stats.length - 1 ? `1px solid ${darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}` : 'none',
                paddingRight: i < stats.length - 1 ? '1.5rem' : '0',
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  background: darkMode ? `rgba(0,212,255,0.06)` : `rgba(0,212,255,0.1)`,
                  borderRadius: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: `1px solid ${darkMode ? 'rgba(0,212,255,0.2)' : 'rgba(0,212,255,0.3)'}`,
                }}>
                  <stat.icon size={22} color={stat.color} />
                </div>
                <div>
                  <div style={{
                    fontFamily: 'Syne, sans-serif',
                    fontSize: '1.8rem',
                    fontWeight: 800,
                    color: darkMode ? '#F1F5F9' : '#0F172A',
                    lineHeight: 1.1,
                  }}>
                    <AnimatedCounter target={stat.target} suffix={stat.suffix} />
                  </div>
                  <div style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '0.6rem',
                    color: darkMode ? '#4A6080' : '#64748B',
                    letterSpacing: '0.08em',
                  }}>{stat.label}</div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Boutons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}
          >
            <Link to="projects" smooth duration={600} offset={-70}>
              <button className="btn-primary" style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem',
                padding: '0.9rem 2rem',
                fontSize: '0.85rem',
                borderRadius: '40px',
              }}>
                Explorer mes projets <ArrowRight size={16} />
              </button>
            </Link>
            <Link to="contact" smooth duration={600} offset={-70}>
              <button className="btn-ghost" style={{
                padding: '0.9rem 2rem',
                fontSize: '0.85rem',
                borderRadius: '40px',
              }}>
                Me contacter
              </button>
            </Link>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            style={{ display: 'flex', gap: '1.2rem', alignItems: 'center' }}
          >
            <span style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '0.6rem',
              color: darkMode ? '#4A6080' : '#64748B',
              letterSpacing: '0.15em',
            }}>CONNECT</span>
            <div style={{ width: '40px', height: '1px', background: darkMode ? '#1E2A3A' : '#CBD5E1' }} />
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href="https://github.com/johaoooo" target="_blank" rel="noopener noreferrer"
                style={{ color: darkMode ? '#8BA0B8' : '#475569', transition: 'all 0.3s', padding: '0.4rem', borderRadius: '8px', background: darkMode ? 'rgba(139, 148, 184, 0.05)' : 'rgba(0, 0, 0, 0.03)' }}>
                <GithubIcon />
              </a>
              <a href="https://linkedin.com/in/dehazounde-joseph" target="_blank" rel="noopener noreferrer"
                style={{ color: darkMode ? '#8BA0B8' : '#475569', transition: 'all 0.3s', padding: '0.4rem', borderRadius: '8px', background: darkMode ? 'rgba(139, 148, 184, 0.05)' : 'rgba(0, 0, 0, 0.03)' }}>
                <LinkedinIcon />
              </a>
              <a href="mailto:josephdehazounde@gmail.com"
                style={{ color: darkMode ? '#8BA0B8' : '#475569', transition: 'all 0.3s', padding: '0.4rem', borderRadius: '8px', background: darkMode ? 'rgba(139, 148, 184, 0.05)' : 'rgba(0, 0, 0, 0.03)' }}>
                <Mail size={18} />
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Photo à droite */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          style={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            perspective: '1000px',
          }}
        >
          <div style={{
            position: 'relative',
            width: '100%',
            maxWidth: '320px',
            margin: '0 auto',
          }}>
            {/* Anneau rotatif multi-couleurs */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              style={{
                position: 'absolute',
                top: '-15px',
                left: '-15px',
                right: '-15px',
                bottom: '-15px',
                borderRadius: '50%',
                background: 'conic-gradient(from 0deg, var(--accent), #C9A84C, #8B5CF6, #FF6B6B, var(--accent))',
                opacity: 0.5,
              }}
            />
            
            {/* Deuxième anneau */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              style={{
                position: 'absolute',
                top: '-8px',
                left: '-8px',
                right: '-8px',
                bottom: '-8px',
                borderRadius: '50%',
                border: '1px dashed rgba(0,212,255,0.4)',
              }}
            />
            
            {/* Cadre photo */}
            <div style={{
              position: 'relative',
              background: `linear-gradient(135deg, ${darkMode ? 'rgba(0,212,255,0.1)' : 'rgba(0,212,255,0.15)'}, ${darkMode ? 'rgba(139,92,246,0.08)' : 'rgba(139,92,246,0.1)'})`,
              borderRadius: '50%',
              padding: '6px',
              border: `2px solid ${darkMode ? 'rgba(0,212,255,0.35)' : 'rgba(0,212,255,0.5)'}`,
              backdropFilter: 'blur(10px)',
              boxShadow: darkMode ? '0 20px 40px rgba(0,0,0,0.4)' : '0 20px 40px rgba(0,0,0,0.1)',
            }}>
              <div style={{
                borderRadius: '50%',
                overflow: 'hidden',
                aspectRatio: '1 / 1',
                background: darkMode ? '#0D1421' : '#E2E8F0',
              }}>
                <img
                  src="/images/profile.jpeg"
                  alt="Dehazounde Joseph"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: '50% 20%',
                  }}
                  onError={(e) => {
                    e.target.src = `https://ui-avatars.com/api/?name=Joseph+Dehazounde&background=00D4FF&color=${darkMode ? '080C14' : 'FFFFFF'}&size=300&rounded=true&bold=true&length=2`
                  }}
                />
              </div>
            </div>

            {/* Badge flottant */}
            <motion.div
              initial={{ opacity: 0, x: -20, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.7 }}
              whileHover={{ scale: 1.05 }}
              style={{
                position: 'absolute',
                bottom: '5%',
                left: '-20px',
                background: darkMode ? 'rgba(13, 20, 33, 0.98)' : 'rgba(255, 255, 255, 0.98)',
                backdropFilter: 'blur(12px)',
                border: `1px solid ${darkMode ? 'rgba(0,212,255,0.45)' : 'rgba(0,212,255,0.6)'}`,
                borderRadius: '16px',
                padding: '0.7rem 1.2rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.7rem',
                boxShadow: darkMode ? '0 10px 25px rgba(0,0,0,0.3)' : '0 10px 25px rgba(0,0,0,0.1)',
              }}
            >
              <div style={{
                width: '32px',
                height: '32px',
                background: 'rgba(0,212,255,0.15)',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <Shield size={16} color="var(--accent)" />
              </div>
              <div>
                <div style={{
                  fontFamily: 'Syne, sans-serif',
                  fontWeight: 700,
                  color: 'var(--accent)',
                  fontSize: '0.85rem',
                  letterSpacing: '-0.01em',
                }}>
                  {displayText}
                  <span style={{
                    display: 'inline-block',
                    width: '2px',
                    height: '12px',
                    background: 'var(--accent)',
                    marginLeft: '3px',
                    animation: 'blink 1s step-end infinite',
                  }} />
                </div>
                <div style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '0.5rem',
                  color: darkMode ? '#4A6080' : '#64748B',
                }}>Certifié OWASP</div>
              </div>
            </motion.div>

            {/* Petit badge en haut à droite */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9 }}
              style={{
                position: 'absolute',
                top: '10%',
                right: '-15px',
                background: 'linear-gradient(135deg, #C9A84C, #8B5CF6)',
                borderRadius: '10px',
                padding: '0.3rem 0.7rem',
                boxShadow: '0 5px 15px rgba(0,0,0,0.2)',
              }}
            >
              <span style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.55rem',
                fontWeight: 600,
                color: '#080C14',
              }}>Top 1%</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        <Link to="about" smooth duration={600} offset={-70} style={{ cursor: 'pointer' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '0.55rem',
              color: darkMode ? '#4A6080' : '#64748B',
              letterSpacing: '0.2em',
            }}>SCROLL</span>
            <div style={{
              width: '1px',
              height: '30px',
              background: 'linear-gradient(180deg, var(--accent), transparent)',
              animation: 'scrollIndicator 2s ease-in-out infinite',
            }} />
          </div>
        </Link>
      </motion.div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes scrollIndicator {
          0%, 100% { opacity: 0.3; transform: scaleY(1); }
          50% { opacity: 1; transform: scaleY(1.5); }
        }
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
            gap: 3rem !important;
          }
          .hero-grid div:first-child {
            order: 2;
          }
          .hero-grid div:last-child {
            order: 1;
          }
          .hero-grid .stats {
            justify-content: center;
          }
          .hero-grid .stats > div {
            border-right: none !important;
          }
        }
      `}</style>
    </section>
  )
}
