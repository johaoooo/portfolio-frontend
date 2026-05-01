import { useTheme } from '../context/ThemeContext'
import { useTokens } from '../theme/tokens'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Link as ScrollLink } from 'react-scroll'
import PhotoCard from './PhotoCard'

export default function Hero() {
  const { darkMode } = useTheme()
  const t = useTokens(darkMode)
  
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  
  const texts = [
    'Cybersécurité',
    'Développement Web',
    'Réseaux',
    'Intelligence Artificielle'
  ]
  
  useEffect(() => {
    let timeout
    const handleTyping = () => {
      const fullText = texts[loopNum % texts.length]
      const updatedText = isDeleting 
        ? fullText.substring(0, currentText.length - 1)
        : fullText.substring(0, currentText.length + 1)
      
      setCurrentText(updatedText)
      
      let typingSpeed = isDeleting ? 50 : 100
      
      if (!isDeleting && updatedText === fullText) {
        typingSpeed = 2000
        setIsDeleting(true)
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false)
        setLoopNum(loopNum + 1)
        typingSpeed = 500
      }
      
      timeout = setTimeout(handleTyping, typingSpeed)
    }
    
    timeout = setTimeout(handleTyping, 100)
    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, loopNum, texts])
  
  useEffect(() => {
    if (currentText === '' && !isDeleting && loopNum === 0) {
      setCurrentText('Cybersécurité')
    }
  }, [])
  
  return (
    <section id="hero" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      background: t.bg.page,
      transition: 'background 0.3s',
      padding: '80px 24px',
      fontFamily: 'Calibri, "Segoe UI", Arial, sans-serif'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        width: '100%',
        background: t.bg.surface,
        border: `1px solid ${t.border.default}`,
        borderRadius: '40px',
        padding: '40px 50px',
        transition: 'all 0.3s ease',
        boxShadow: darkMode ? '0 20px 40px rgba(0,0,0,0.3)' : '0 20px 40px rgba(0,0,0,0.05)'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 0.8fr',
          gap: '40px',
          alignItems: 'center'
        }}>
          
          {/* Partie gauche - Texte dynamique */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 style={{
              color: t.text.primary,
              fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
              fontWeight: 700,
              lineHeight: 1.2,
              marginBottom: '16px',
              fontFamily: 'Calibri, "Segoe UI", Arial, sans-serif'
            }}>
              <span style={{ color: t.text.accent }}>Expert</span>
              <br />
              en{' '}
              <span style={{
                color: t.text.accent,
                display: 'inline-block',
                minWidth: '180px'
              }}>
                {currentText}
                <span style={{
                  display: 'inline-block',
                  width: '2px',
                  height: '1em',
                  backgroundColor: t.text.accent,
                  marginLeft: '4px',
                  animation: 'blink 1s step-end infinite',
                  verticalAlign: 'middle'
                }} />
              </span>
            </h1>
            
            <p style={{
              color: t.text.secondary,
              fontSize: '1rem',
              lineHeight: 1.5,
              marginBottom: '24px',
              fontFamily: 'Calibri, "Segoe UI", Arial, sans-serif'
            }}>
              Expert en Cybersécurité & Développeur Fullstack
            </p>
            
            <div style={{
              display: 'flex',
              gap: '12px',
              flexWrap: 'wrap'
            }}>
              <ScrollLink
                to="projects"
                smooth duration={500}
                offset={-70}
                style={{
                  background: t.text.accent,
                  color: darkMode ? '#05080F' : '#fff',
                  padding: '10px 24px',
                  borderRadius: '40px',
                  textDecoration: 'none',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'opacity 0.2s'
                }}
                onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
                onMouseLeave={e => e.currentTarget.style.opacity = '1'}
              >
                Voir mes projets
              </ScrollLink>
              <ScrollLink
                to="contact"
                smooth duration={500}
                offset={-70}
                style={{
                  background: 'transparent',
                  border: `2px solid ${t.text.accent}`,
                  color: t.text.accent,
                  padding: '10px 24px',
                  borderRadius: '40px',
                  textDecoration: 'none',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = t.text.accent
                  e.currentTarget.style.color = darkMode ? '#05080F' : '#fff'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'transparent'
                  e.currentTarget.style.color = t.text.accent
                }}
              >
                Me contacter
              </ScrollLink>
            </div>
          </motion.div>
          
          {/* Partie droite - Photo + Nom + Titre */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '16px'
            }}
          >
            <div style={{
              width: '100%',
              maxWidth: '240px',
              borderRadius: '30px',
              overflow: 'hidden',
              boxShadow: `0 15px 30px rgba(0,0,0,0.2)`
            }}>
              <PhotoCard />
            </div>
            
            {/* Nom et titre sous la photo - AUCUN TEXTE INDESIRABLE */}
            <div style={{ textAlign: 'center' }}>
              <h2 style={{
                color: t.text.primary,
                fontSize: '1.3rem',
                fontWeight: 600,
                marginBottom: '4px',
                fontFamily: 'Calibri, "Segoe UI", Arial, sans-serif'
              }}>
                Joseph <span style={{ color: t.text.accent }}>Dehazounde</span>
              </h2>
              <p style={{
                color: t.text.accent,
                fontSize: '0.7rem',
                letterSpacing: '1px',
                fontFamily: 'Calibri, "Segoe UI", Arial, sans-serif'
              }}>
                EXPERT CYBERSÉCURITÉ & FULLSTACK DEV
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      
      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        
        @media (max-width: 768px) {
          #hero {
            padding: 100px 16px 60px !important;
          }
          #hero > div {
            padding: 30px !important;
          }
          #hero > div > div {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 30px;
          }
        }
        
        @media (max-width: 480px) {
          #hero > div {
            padding: 20px !important;
            border-radius: 24px !important;
          }
        }
      `}</style>
    </section>
  )
}
