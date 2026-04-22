import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import {
  MapPin, Briefcase, GraduationCap, Award, Code, Shield,
  Target, Star, Globe, Users, ArrowRight, Calendar,
  TrendingUp, Clock, CheckCircle, ExternalLink, BookOpen,
  Zap, Building2, Mail
} from 'lucide-react'
import { useTheme } from '../context/ThemeContext'
import { useState } from 'react'

const stats = [
  { value: '5+',   label: 'Projets livrés',  icon: Code,   color: 'accent', description: 'Applications web sécurisées' },
  { value: '20+',  label: 'Vulnérabilités',  icon: Shield, color: '#C9A84C', description: 'Audits & correctifs' },
  { value: '4',    label: 'Certifications',  icon: Award,  color: '#8B5CF6', description: "En cours d'obtention" },
  { value: '100%', label: 'Satisfaction',    icon: Star,   color: '#FF6B6B', description: 'Clients recommandent' },
]

const formations = [
  {
    icon: Shield,
    title: "Bootcamp Cybersécurité",
    school: "OIF / D-CLIC",
    period: "2026",
    description: "Spécialisation en sécurité applicative, audit OWASP Top 10, pentesting et remédiation des vulnérabilités.",
    color: 'accent',
    status: "En cours",
    location: "En ligne",
    certificate: "Certification OWASP"
  },
  {
    icon: Code,
    title: "Développeur Web Fullstack",
    school: "OpenClassrooms",
    period: "2025",
    description: "Diplôme RNCP niveau 6 (Bac+3/4) - React, Node.js, Django, bases de données, sécurité API et déploiement.",
    color: "#C9A84C",
    status: "Diplômé",
    location: "En ligne",
    certificate: "RNCP Niveau 6"
  },
  {
    icon: TrendingUp,
    title: "Formation Informatique & Internet",
    school: "Force-N Sénégal",
    period: "2026",
    description: "Programme intensif en développement web, infrastructure réseau, cloud computing et cybersécurité.",
    color: "#8B5CF6",
    status: "En cours",
    location: "Dakar, Sénégal",
    certificate: "Certification en cours"
  },
]

export default function About() {
  const { darkMode } = useTheme()
  const [activeFormation, setActiveFormation] = useState(null)

  // Tokens
  const accent      = darkMode ? '#722F37'               : '#5C1F28'
  const accentAlpha = darkMode ? 'rgba(114,47,55,0.08)'    : 'rgba(92,31,40,0.08)'
  const accentBrd   = darkMode ? 'rgba(114,47,55,0.18)'    : 'rgba(92,31,40,0.18)'
  const sectionBg   = darkMode ? '#0A0A0A'               : '#F0F0FA'
  const cardBg      = darkMode ? 'rgba(5,5,20,0.55)'     : 'rgba(255,255,255,0.75)'
  const textTitle   = darkMode ? '#F1F5F9'               : '#0F172A'
  const textMuted   = darkMode ? '#8BA0B8'               : '#475569'
  const textFaint   = darkMode ? '#4A6080'               : '#64748B'
  const divider     = darkMode ? 'rgba(255,255,255,0.08)': 'rgba(0,0,0,0.06)'
  const cardShadow  = darkMode ? '0 8px 32px rgba(0,0,0,0.2)' : '0 8px 32px rgba(0,0,0,0.05)'

  // Résoudre "accent" string dans les formations/stats
  const resolveColor = (c) => c === 'accent' ? accent : c

  return (
    <section id="about" style={{
      padding: '7rem 0',
      background: sectionBg,
      position: 'relative',
      overflow: 'hidden',
      transition: 'background 0.35s ease',
    }}>

      {/* Fond radial */}
      <div style={{
        position: 'absolute', inset: 0,
        background: darkMode
          ? `radial-gradient(circle at 20% 30%, rgba(114,47,55,0.06), transparent)`
          : `radial-gradient(circle at 20% 30%, rgba(92,31,40,0.05), transparent)`,
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 2 }}>

        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
            background: accentAlpha,
            backdropFilter: 'blur(12px)',
            border: `1px solid ${accentBrd}`,
            padding: '0.5rem 1.5rem', borderRadius: '50px', marginBottom: '1.5rem',
          }}>
            <GraduationCap size={16} color={accent} />
            <span style={{
              fontFamily: 'JetBrains Mono, monospace', fontSize: '0.7rem',
              letterSpacing: '0.15em', color: accent, textTransform: 'uppercase',
            }}>Parcours & Formation</span>
          </div>

          <h2 style={{
            fontFamily: 'Syne, sans-serif', fontWeight: 800,
            fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
            color: textTitle, marginBottom: '1rem',
          }}>
            Mon{' '}
            <span style={{ color: accent }}>parcours</span>
          </h2>

          <p style={{
            fontFamily: 'DM Sans, sans-serif', fontSize: '1rem',
            color: textMuted, maxWidth: '600px', margin: '0 auto',
          }}>
            Une formation continue entre développement web et cybersécurité
          </p>
        </motion.div>

        {/* Grille principale */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem', alignItems: 'stretch' }}>

          {/* Carte profil */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ height: '100%' }}
          >
            <div style={{
              background: cardBg, backdropFilter: 'blur(12px)',
              borderRadius: '28px', padding: '2rem',
              border: `1px solid ${accentBrd}`,
              boxShadow: cardShadow,
              height: '100%', display: 'flex', flexDirection: 'column',
            }}>
              {/* Avatar + titre */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{
                  width: '70px', height: '70px',
                  background: darkMode
                    ? 'linear-gradient(135deg, #722F37, #8B3A45)'
                    : 'linear-gradient(135deg, #5C1F28, #4A1520)',
                  borderRadius: '20px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: `0 10px 25px -5px ${darkMode ? 'rgba(114,47,55,0.30)' : 'rgba(92,31,40,0.25)'}`,
                }}>
                  <Shield size={34} color="#FFFFFF" />
                </div>
                <div>
                  <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1.4rem', color: textTitle }}>
                    Dehazounde Joseph
                  </div>
                  <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.7rem', color: accent }}>
                    Fullstack Developer & Security
                  </div>
                </div>
              </div>

              <p style={{ color: textMuted, lineHeight: 1.7, marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                Développeur web fullstack basé à{' '}
                <strong style={{ color: accent }}>Cotonou, Bénin</strong>.
                Je combine développement d'applications modernes et cybersécurité applicative.
              </p>

              {/* Infos */}
              <div style={{
                display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.8rem',
                marginBottom: '1.5rem',
                padding: '1rem 0',
                borderTop: `1px solid ${divider}`,
                borderBottom: `1px solid ${divider}`,
              }}>
                {[
                  { icon: MapPin,    text: 'Cotonou, Bénin' },
                  { icon: Briefcase, text: 'Disponible' },
                  { icon: Globe,     text: 'Freelance / CDI' },
                  { icon: Mail,      text: 'Contact pro' },
                ].map(({ icon: Icon, text }, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <Icon size={14} color={accent} />
                    <span style={{ fontSize: '0.8rem', color: textMuted }}>{text}</span>
                  </div>
                ))}
              </div>

              {/* Philosophie */}
              <div style={{ flex: 1 }}>
                <h4 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.75rem', color: textTitle }}>
                  💡 Philosophie
                </h4>
                <p style={{
                  fontSize: '0.85rem', color: textMuted,
                  fontStyle: 'italic', lineHeight: 1.6,
                  background: accentAlpha,
                  padding: '1rem', borderRadius: '16px',
                  borderLeft: `3px solid ${accent}`,
                }}>
                  "Je modélise les menaces pendant que je conçois. Chaque endpoint est pensé sous l'angle de l'attaquant."
                </p>
              </div>

              <Link to="contact" smooth duration={600} offset={-70} style={{ marginTop: '1.5rem' }}>
                <button style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                  width: '100%', justifyContent: 'center',
                  background: accent, color: '#FFFFFF',
                  border: 'none', borderRadius: '50px',
                  padding: '0.75rem 1.5rem',
                  fontFamily: 'DM Sans, sans-serif', fontSize: '0.85rem', fontWeight: 600,
                  cursor: 'pointer', transition: 'opacity 0.2s, transform 0.15s',
                }}
                onMouseEnter={e => { e.currentTarget.style.opacity = '.88'; e.currentTarget.style.transform = 'translateY(-2px)' }}
                onMouseLeave={e => { e.currentTarget.style.opacity = '1';   e.currentTarget.style.transform = 'translateY(0)' }}
                >
                  Discutons de votre projet <ArrowRight size={16} />
                </button>
              </Link>
            </div>
          </motion.div>

          {/* Formations */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ height: '100%' }}
          >
            <div style={{
              background: cardBg, backdropFilter: 'blur(12px)',
              borderRadius: '28px', padding: '2rem',
              border: `1px solid ${accentBrd}`,
              boxShadow: cardShadow,
              height: '100%',
            }}>
              <h3 style={{
                fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1.2rem',
                marginBottom: '1.5rem', color: textTitle,
                display: 'flex', alignItems: 'center', gap: '0.5rem',
              }}>
                <BookOpen size={18} color={accent} />
                Formations & Diplômes
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                {formations.map((formation, i) => {
                  const fc = resolveColor(formation.color)
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      onMouseEnter={() => setActiveFormation(i)}
                      onMouseLeave={() => setActiveFormation(null)}
                      style={{
                        background: accentAlpha,
                        borderRadius: '20px', padding: '1.2rem',
                        border: `1px solid ${activeFormation === i ? fc : accentBrd}`,
                        transition: 'all 0.3s ease',
                        transform: activeFormation === i ? 'translateX(5px)' : 'translateX(0)',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                        <div style={{
                          width: '48px', height: '48px',
                          background: `${fc}20`,
                          borderRadius: '14px',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          border: `1px solid ${fc}40`,
                          flexShrink: 0,
                        }}>
                          <formation.icon size={22} color={fc} />
                        </div>
                        <div style={{ flex: 1 }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', marginBottom: '0.25rem' }}>
                            <h4 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 600, fontSize: '1rem', color: textTitle }}>
                              {formation.title}
                            </h4>
                            <div style={{ display: 'flex', gap: '0.5rem' }}>
                              <span style={{
                                fontFamily: 'JetBrains Mono, monospace', fontSize: '0.55rem',
                                padding: '0.2rem 0.6rem',
                                background: `${fc}15`, borderRadius: '20px', color: fc,
                              }}>{formation.period}</span>
                              <span style={{
                                fontFamily: 'JetBrains Mono, monospace', fontSize: '0.55rem',
                                padding: '0.2rem 0.6rem',
                                background: formation.status === 'Diplômé' ? '#4ADE8020' : '#FCD34D20',
                                borderRadius: '20px',
                                color: formation.status === 'Diplômé' ? '#4ADE80' : '#FCD34D',
                              }}>{formation.status}</span>
                            </div>
                          </div>
                          <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.8rem', color: fc, marginBottom: '0.25rem' }}>
                            {formation.school} • {formation.location}
                          </div>
                          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.75rem', color: textMuted, lineHeight: 1.5, marginBottom: '0.5rem' }}>
                            {formation.description}
                          </p>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <CheckCircle size={12} color={fc} />
                            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.6rem', color: fc }}>
                              {formation.certificate}
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{
            display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1.5rem', marginTop: '3rem',
          }}
        >
          {stats.map((stat, i) => {
            const sc = resolveColor(stat.color)
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                style={{
                  background: cardBg, backdropFilter: 'blur(12px)',
                  borderRadius: '20px', padding: '1.5rem',
                  textAlign: 'center',
                  border: `1px solid ${accentBrd}`,
                  transition: 'all 0.3s ease',
                }}
              >
                <div style={{
                  width: '55px', height: '55px',
                  background: `${sc}15`,
                  borderRadius: '14px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 1rem auto',
                  border: `1px solid ${sc}30`,
                }}>
                  <stat.icon size={26} color={sc} />
                </div>
                <div style={{ fontFamily: 'Syne, sans-serif', fontSize: '2rem', fontWeight: 800, color: sc, lineHeight: 1 }}>
                  {stat.value}
                </div>
                <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.85rem', fontWeight: 600, color: textTitle, marginTop: '0.5rem' }}>
                  {stat.label}
                </div>
                <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.6rem', color: textFaint, marginTop: '0.25rem' }}>
                  {stat.description}
                </div>
              </motion.div>
            )
          })}
        </motion.div>

      </div>
    </section>
  )
}
