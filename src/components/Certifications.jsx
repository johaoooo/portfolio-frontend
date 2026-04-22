import { motion } from 'framer-motion'
import { CircleCheck, Clock, Shield, Award, TrendingUp, Target, ExternalLink } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'
import { useState } from 'react'

// ── Couleurs accent selon le mode ──────────────────────────────────────────
// dark  : bleu pur   #722F37
// light : bleu nuit  #5C1F28

const statusMap = {
  obtained:      { icon: CircleCheck, color: '#4ADE80', label: 'Obtenu',   bg: 'rgba(74,222,128,0.1)',  border: 'rgba(74,222,128,0.3)'  },
  'in-progress': { icon: Clock,       color: '#FCD34D', label: 'En cours', bg: 'rgba(252,211,77,0.1)',  border: 'rgba(252,211,77,0.3)'  },
  target:        { icon: Target,      color: '#4A6080', label: 'À viser',  bg: 'rgba(74,96,128,0.08)', border: 'rgba(74,96,128,0.2)'   },
}

const certificationsData = [
  {
    name: "Certified Ethical Hacker (CEH)",
    issuer: "EC-Council",
    period: "2026",
    status: "target",
    description: "Formation aux techniques de pentest avancé et ethical hacking",
    skills: ["Pentest", "Exploitation", "Report"],
    link: "#"
  },
  {
    name: "OSCP (Offensive Security)",
    issuer: "Offensive Security",
    period: "2026",
    status: "target",
    description: "Certification offensive reconnue mondialement",
    skills: ["Kali Linux", "Exploitation", "Privilege Escalation"],
    link: "#"
  },
  {
    name: "Sécurité Applicative OWASP",
    issuer: "OIF / D-CLIC",
    period: "2026",
    status: "in-progress",
    description: "Maîtrise des OWASP Top 10 et des bonnes pratiques de sécurité",
    skills: ["OWASP Top 10", "Secure Coding", "Audit"],
    link: "#"
  },
  {
    name: "Développeur Web Fullstack",
    issuer: "OpenClassrooms",
    period: "2025",
    status: "obtained",
    description: "Diplôme RNCP niveau 6 - React, Node.js, Django, MongoDB",
    skills: ["React", "Node.js", "Django", "MongoDB"],
    link: "#"
  },
  {
    name: "Cybersécurité & Réseaux",
    issuer: "Force-N Sénégal",
    period: "2026",
    status: "in-progress",
    description: "Formation intensive en sécurité réseau et infrastructure",
    skills: ["Réseaux", "Sécurité", "Cloud"],
    link: "#"
  },
  {
    name: "CompTIA Security+",
    issuer: "CompTIA",
    period: "2026",
    status: "target",
    description: "Certification fondamentale en cybersécurité",
    skills: ["Security Concepts", "Risk Management", "Cryptography"],
    link: "#"
  }
]

export default function Certifications() {
  const { darkMode } = useTheme()
  const [hoveredCard, setHoveredCard] = useState(null)

  // Tokens couleur selon le mode
  const accent      = darkMode ? '#722F37'              : '#5C1F28'
  const accentAlpha = darkMode ? 'rgba(114,47,55,0.10)'  : 'rgba(92,31,40,0.10)'
  const accentBrd   = darkMode ? 'rgba(114,47,55,0.20)'  : 'rgba(92,31,40,0.20)'
  const cardBg      = darkMode ? 'rgba(5,5,20,0.65)'   : 'rgba(255,255,255,0.75)'
  const sectionBg   = darkMode ? '#0A0A0A'              : '#F8F8FF'
  const textMuted   = darkMode ? '#8BA0B8'              : '#475569'
  const textTitle   = darkMode ? '#F1F5F9'              : '#0F172A'
  const glowColor1  = darkMode ? 'rgba(114,47,55,0.05)'  : 'rgba(92,31,40,0.06)'
  const glowColor2  = darkMode ? 'rgba(114,47,55,0.03)'  : 'rgba(92,31,40,0.04)'

  const stats = {
    total:      certificationsData.length,
    obtained:   certificationsData.filter(c => c.status === 'obtained').length,
    inProgress: certificationsData.filter(c => c.status === 'in-progress').length,
    target:     certificationsData.filter(c => c.status === 'target').length,
  }

  return (
    <section id="certifications" style={{
      padding: '7rem 0',
      background: sectionBg,
      position: 'relative',
      overflow: 'hidden',
      transition: 'background 0.35s ease',
    }}>

      {/* Effets de fond */}
      <div style={{
        position: 'absolute', top: '10%', right: '-10%',
        width: '40%', height: '50%',
        background: `radial-gradient(circle, ${glowColor1}, transparent)`,
        borderRadius: '50%', filter: 'blur(80px)',
      }} />
      <div style={{
        position: 'absolute', bottom: '20%', left: '-5%',
        width: '30%', height: '40%',
        background: `radial-gradient(circle, ${glowColor2}, transparent)`,
        borderRadius: '50%', filter: 'blur(80px)',
      }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 2 }}>

        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '3rem' }}
        >
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
            background: accentAlpha,
            border: `1px solid ${accentBrd}`,
            padding: '0.5rem 1.5rem', borderRadius: '50px', marginBottom: '1.5rem',
          }}>
            <Award size={16} color={accent} />
            <span style={{
              fontFamily: 'JetBrains Mono, monospace', fontSize: '0.7rem',
              letterSpacing: '0.15em', color: accent, textTransform: 'uppercase',
            }}>Certifications</span>
          </div>

          <h2 style={{
            fontFamily: 'Syne, sans-serif', fontWeight: 800,
            fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
            color: textTitle, marginBottom: '1rem',
          }}>
            Mes{' '}
            <span style={{ color: accent }}>certifications</span>
          </h2>

          <p style={{
            fontFamily: 'DM Sans, sans-serif', fontSize: '1rem',
            color: textMuted, maxWidth: '600px', margin: '0 auto',
          }}>
            Un parcours de formation continue pour rester à la pointe
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '3rem', flexWrap: 'wrap' }}
        >
          {[
            { label: 'Certifications', value: stats.total,      color: accent,     icon: Award       },
            { label: 'Obtenues',       value: stats.obtained,   color: '#4ADE80',  icon: CircleCheck },
            { label: 'En cours',       value: stats.inProgress, color: '#FCD34D',  icon: Clock       },
            { label: 'Objectifs',      value: stats.target,     color: '#8B5CF6',  icon: Target      },
          ].map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5, scale: 1.02 }}
              style={{
                display: 'flex', alignItems: 'center', gap: '1rem',
                background: cardBg,
                backdropFilter: 'blur(12px)',
                padding: '0.8rem 1.8rem', borderRadius: '20px',
                border: `1px solid ${accentBrd}`,
                transition: 'all 0.3s ease',
              }}
            >
              <div style={{
                width: '45px', height: '45px',
                background: `${stat.color}18`,
                borderRadius: '14px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <stat.icon size={22} color={stat.color} />
              </div>
              <div>
                <div style={{ fontFamily: 'Syne, sans-serif', fontSize: '1.6rem', fontWeight: 700, color: stat.color, lineHeight: 1 }}>{stat.value}</div>
                <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.7rem', color: textMuted }}>{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Grille des certifications */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
          gap: '1.8rem', marginBottom: '3rem',
        }}>
          {certificationsData.map((cert, i) => {
            const status     = statusMap[cert.status]
            const StatusIcon = status.icon
            const isHovered  = hoveredCard === i

            return (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                onMouseEnter={() => setHoveredCard(i)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  background: cardBg,
                  backdropFilter: 'blur(12px)',
                  borderRadius: '24px', padding: '1.5rem',
                  border: `1px solid ${isHovered ? accent : accentBrd}`,
                  transition: 'all 0.3s ease',
                  transform: isHovered ? 'translateY(-5px)' : 'translateY(0)',
                }}
              >
                {/* En-tête carte */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                  <div style={{
                    width: '55px', height: '55px',
                    background: `linear-gradient(135deg, ${status.color}20, ${status.color}05)`,
                    borderRadius: '16px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    border: `1px solid ${status.color}30`,
                  }}>
                    <Award size={26} color={status.color} />
                  </div>
                  <div style={{
                    display: 'flex', alignItems: 'center', gap: '0.4rem',
                    padding: '0.25rem 0.8rem',
                    background: status.bg, borderRadius: '30px',
                    border: `1px solid ${status.border}`,
                  }}>
                    <StatusIcon size={12} color={status.color} />
                    <span style={{
                      fontFamily: 'JetBrains Mono, monospace', fontSize: '0.6rem', color: status.color,
                    }}>{status.label}</span>
                  </div>
                </div>

                <h3 style={{
                  fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1.1rem',
                  color: textTitle, marginBottom: '0.25rem',
                }}>{cert.name}</h3>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                  <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.75rem', color: accent }}>{cert.issuer}</span>
                  <span style={{ width: '4px', height: '4px', background: textMuted, borderRadius: '50%' }} />
                  <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem', color: textMuted }}>{cert.period}</span>
                </div>

                <p style={{
                  fontFamily: 'DM Sans, sans-serif', fontSize: '0.8rem',
                  color: textMuted, lineHeight: 1.5, marginBottom: '1rem',
                }}>
                  {cert.description}
                </p>

                {/* Skills */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
                  {cert.skills.map((skill, idx) => (
                    <span key={idx} style={{
                      fontFamily: 'JetBrains Mono, monospace', fontSize: '0.6rem',
                      padding: '0.2rem 0.6rem',
                      background: accentAlpha,
                      borderRadius: '12px', color: accent,
                    }}>
                      {skill}
                    </span>
                  ))}
                </div>

                {cert.link && cert.link !== '#' && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                      fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem',
                      color: status.color, textDecoration: 'none',
                      transition: 'gap 0.3s ease',
                    }}
                    onMouseEnter={e => e.currentTarget.style.gap = '0.6rem'}
                    onMouseLeave={e => e.currentTarget.style.gap = '0.4rem'}
                  >
                    Voir la certification
                    <ExternalLink size={12} />
                  </a>
                )}
              </motion.div>
            )
          })}
        </div>

        {/* Feuille de route */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          style={{
            background: cardBg,
            backdropFilter: 'blur(12px)',
            borderRadius: '28px', padding: '2rem',
            border: `1px solid ${accentBrd}`,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center', marginBottom: '1.5rem' }}>
            <TrendingUp size={18} color={accent} />
            <span style={{
              fontFamily: 'JetBrains Mono, monospace', fontSize: '0.7rem',
              letterSpacing: '0.1em', color: accent,
            }}>Feuille de route</span>
          </div>
          <p style={{
            textAlign: 'center', fontFamily: 'DM Sans, sans-serif',
            fontSize: '0.85rem', color: textMuted, marginBottom: '1rem',
          }}>
            Objectif : Obtention de certifications reconnues internationalement d'ici 2026
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            {['CEH', 'OSCP', 'Security+', 'CISSP'].map((cert, i) => (
              <span key={i} style={{
                fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem',
                padding: '0.3rem 0.8rem',
                background: accentAlpha,
                borderRadius: '20px', color: accent,
                border: `1px solid ${accentBrd}`,
              }}>
                {cert}
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}
