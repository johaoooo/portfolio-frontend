import { motion } from 'framer-motion'
import { CircleCheck, Clock, Shield, Award, TrendingUp, Target, BookOpen, Sparkles, ExternalLink } from 'lucide-react'
import { certifications } from '../data/certifications'
import { useTheme } from '../context/ThemeContext'
import { useState } from 'react'

const statusMap = {
  obtained:      { icon: CircleCheck, color: '#4ADE80', label: 'Obtenu', bg: 'rgba(74,222,128,0.1)', border: 'rgba(74,222,128,0.3)' },
  'in-progress': { icon: Clock,       color: '#FCD34D', label: 'En cours', bg: 'rgba(252,211,77,0.1)', border: 'rgba(252,211,77,0.3)' },
  target:        { icon: Target,      color: '#4A6080', label: 'À viser', bg: 'rgba(74,96,128,0.08)', border: 'rgba(74,96,128,0.2)' },
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

  const stats = {
    total: certificationsData.length,
    obtained: certificationsData.filter(c => c.status === 'obtained').length,
    inProgress: certificationsData.filter(c => c.status === 'in-progress').length,
    target: certificationsData.filter(c => c.status === 'target').length,
  }

  return (
    <section id="certifications" style={{
      padding: '7rem 0',
      background: darkMode ? '#080C14' : '#F8FAFC',
      position: 'relative',
      overflow: 'hidden',
    }}>
      
      {/* Effets de fond */}
      <div style={{
        position: 'absolute',
        top: '10%',
        right: '-10%',
        width: '40%',
        height: '50%',
        background: `radial-gradient(circle, ${darkMode ? 'rgba(0,212,255,0.04)' : 'rgba(0,212,255,0.06)'}, transparent)`,
        borderRadius: '50%',
        filter: 'blur(80px)',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '20%',
        left: '-5%',
        width: '30%',
        height: '40%',
        background: `radial-gradient(circle, ${darkMode ? 'rgba(139,92,246,0.04)' : 'rgba(139,92,246,0.06)'}, transparent)`,
        borderRadius: '50%',
        filter: 'blur(80px)',
      }} />

      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 2rem',
        position: 'relative',
        zIndex: 2,
      }}>
        
        {/* En-tête de section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '3rem' }}
        >
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.6rem',
            background: darkMode ? 'rgba(0,212,255,0.08)' : 'rgba(0,212,255,0.1)',
            border: `1px solid ${darkMode ? 'rgba(0,212,255,0.15)' : 'rgba(0,212,255,0.2)'}`,
            padding: '0.5rem 1.5rem',
            borderRadius: '50px',
            marginBottom: '1.5rem',
          }}>
            <Award size={16} color="var(--accent)" />
            <span style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '0.7rem',
              letterSpacing: '0.15em',
              color: 'var(--accent)',
              textTransform: 'uppercase',
            }}>Certifications</span>
          </div>

          <h2 className="section-title" style={{ marginBottom: '1rem' }}>
            Mes{' '}
            <span style={{
              background: 'linear-gradient(135deg, var(--accent), #C9A84C, #8B5CF6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              certifications
            </span>
          </h2>
          
          <p style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '1rem',
            color: darkMode ? '#8BA0B8' : '#475569',
            maxWidth: '600px',
            margin: '0 auto',
          }}>
            Un parcours de formation continue pour rester à la pointe
          </p>
        </motion.div>

        {/* Stats rapides */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '2rem',
            marginBottom: '3rem',
            flexWrap: 'wrap',
          }}
        >
          {[
            { label: 'Certifications', value: stats.total, color: 'var(--accent)', icon: Award },
            { label: 'Obtenues', value: stats.obtained, color: '#4ADE80', icon: CircleCheck },
            { label: 'En cours', value: stats.inProgress, color: '#FCD34D', icon: Clock },
            { label: 'Objectifs', value: stats.target, color: '#8B5CF6', icon: Target },
          ].map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5, scale: 1.02 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                background: darkMode ? 'rgba(17, 24, 39, 0.6)' : 'rgba(255, 255, 255, 0.7)',
                backdropFilter: 'blur(12px)',
                padding: '0.8rem 1.8rem',
                borderRadius: '20px',
                border: `1px solid ${darkMode ? 'rgba(0,212,255,0.1)' : 'rgba(0,212,255,0.15)'}`,
                transition: 'all 0.3s ease',
              }}
            >
              <div style={{
                width: '45px',
                height: '45px',
                background: `${stat.color}15`,
                borderRadius: '14px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <stat.icon size={22} color={stat.color} />
              </div>
              <div>
                <div style={{ fontFamily: 'Syne, sans-serif', fontSize: '1.6rem', fontWeight: 700, color: stat.color, lineHeight: 1 }}>{stat.value}</div>
                <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.7rem', color: darkMode ? '#8BA0B8' : '#475569' }}>{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Grille des certifications */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
          gap: '1.8rem',
          marginBottom: '3rem',
        }}>
          {certificationsData.map((cert, i) => {
            const status = statusMap[cert.status]
            const StatusIcon = status.icon
            const isHovered = hoveredCard === i
            
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
                  background: darkMode 
                    ? `rgba(17, 24, 39, 0.6)`
                    : `rgba(255, 255, 255, 0.7)`,
                  backdropFilter: 'blur(12px)',
                  borderRadius: '24px',
                  padding: '1.5rem',
                  border: `1px solid ${isHovered ? status.color : (darkMode ? 'rgba(0,212,255,0.1)' : 'rgba(0,212,255,0.15)')}`,
                  transition: 'all 0.3s ease',
                  transform: isHovered ? 'translateY(-5px)' : 'translateY(0)',
                }}
              >
                {/* En-tête de la carte */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                  <div style={{
                    width: '55px',
                    height: '55px',
                    background: `linear-gradient(135deg, ${status.color}20, ${status.color}05)`,
                    borderRadius: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: `1px solid ${status.color}30`,
                  }}>
                    <Award size={26} color={status.color} />
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    padding: '0.25rem 0.8rem',
                    background: status.bg,
                    borderRadius: '30px',
                    border: `1px solid ${status.border}`,
                  }}>
                    <StatusIcon size={12} color={status.color} />
                    <span style={{
                      fontFamily: 'JetBrains Mono, monospace',
                      fontSize: '0.6rem',
                      color: status.color,
                    }}>{status.label}</span>
                  </div>
                </div>

                {/* Contenu */}
                <h3 style={{
                  fontFamily: 'Syne, sans-serif',
                  fontWeight: 700,
                  fontSize: '1.1rem',
                  color: darkMode ? '#F1F5F9' : '#0F172A',
                  marginBottom: '0.25rem',
                }}>{cert.name}</h3>
                
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  marginBottom: '0.75rem',
                }}>
                  <span style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '0.75rem',
                    color: status.color,
                  }}>{cert.issuer}</span>
                  <span style={{
                    width: '4px',
                    height: '4px',
                    background: darkMode ? '#4A6080' : '#64748B',
                    borderRadius: '50%',
                  }} />
                  <span style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '0.65rem',
                    color: darkMode ? '#4A6080' : '#64748B',
                  }}>{cert.period}</span>
                </div>

                <p style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '0.8rem',
                  color: darkMode ? '#8BA0B8' : '#475569',
                  lineHeight: 1.5,
                  marginBottom: '1rem',
                }}>
                  {cert.description}
                </p>

                {/* Compétences */}
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                  marginBottom: '1rem',
                }}>
                  {cert.skills.map((skill, idx) => (
                    <span key={idx} style={{
                      fontFamily: 'JetBrains Mono, monospace',
                      fontSize: '0.6rem',
                      padding: '0.2rem 0.6rem',
                      background: darkMode ? 'rgba(0,212,255,0.08)' : 'rgba(0,212,255,0.1)',
                      borderRadius: '12px',
                      color: 'var(--accent)',
                    }}>
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Lien */}
                {cert.link && cert.link !== '#' && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      fontFamily: 'JetBrains Mono, monospace',
                      fontSize: '0.65rem',
                      color: status.color,
                      textDecoration: 'none',
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

        {/* Parcours de certification - Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          style={{
            background: darkMode ? 'rgba(17, 24, 39, 0.6)' : 'rgba(255, 255, 255, 0.7)',
            backdropFilter: 'blur(12px)',
            borderRadius: '28px',
            padding: '2rem',
            border: `1px solid ${darkMode ? 'rgba(0,212,255,0.15)' : 'rgba(0,212,255,0.2)'}`,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center', marginBottom: '1.5rem' }}>
            <TrendingUp size={18} color="var(--accent)" />
            <span style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '0.7rem',
              letterSpacing: '0.1em',
              color: 'var(--accent)',
            }}>Feuille de route</span>
          </div>
          <p style={{
            textAlign: 'center',
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '0.85rem',
            color: darkMode ? '#8BA0B8' : '#475569',
            marginBottom: '1rem',
          }}>
            Objectif : Obtention de certifications reconnues internationalement d'ici 2026
          </p>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            flexWrap: 'wrap',
          }}>
            {['CEH', 'OSCP', 'Security+', 'CISSP'].map((cert, i) => (
              <span key={i} style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.65rem',
                padding: '0.3rem 0.8rem',
                background: darkMode ? 'rgba(0,212,255,0.08)' : 'rgba(0,212,255,0.1)',
                borderRadius: '20px',
                color: 'var(--accent)',
                border: `1px solid ${darkMode ? 'rgba(0,212,255,0.2)' : 'rgba(0,212,255,0.3)'}`,
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
