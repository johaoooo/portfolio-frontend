import { useTheme } from '../context/ThemeContext'
import { useTokens } from '../theme/tokens'
import { motion } from 'framer-motion'
import { Award, Calendar, ExternalLink, Medal, Sparkles } from 'lucide-react'

const certificationsData = [
  {
    name: 'Administration système Linux',
    issuer: 'OpenClassrooms',
    date: '2025',
    description: 'Maîtrise de l\'administration système sous Linux, gestion des utilisateurs, processus, et sécurisation.',
    url: '#'
  },
  {
    name: 'Bootcamp Cybersécurité',
    issuer: 'D-Clic / OIF (Organisation Internationale de la Francophonie)',
    date: '2026',
    description: 'Formation intensive en cybersécurité offensive et défensive.',
    url: '#'
  },
  {
    name: 'Administration Cisco',
    issuer: 'OpenClassrooms',
    date: '2026',
    description: 'Configuration et administration des équipements réseau Cisco.',
    url: '#'
  },
  {
    name: 'GitHub',
    issuer: 'OpenClassrooms',
    date: '2026',
    description: 'Gestion de versions, collaboration sur projets, et automatisation avec GitHub Actions.',
    url: '#'
  },
  {
    name: 'Docker',
    issuer: 'OpenClassrooms',
    date: '2026',
    description: 'Containerisation d\'applications, orchestration avec Docker Compose.',
    url: '#'
  },
  {
    name: 'Windows Server',
    issuer: 'OpenClassrooms',
    date: '2026',
    description: 'Administration de serveurs Windows, Active Directory, et déploiement de services.',
    url: '#'
  }
]

export default function Certifications() {
  const { darkMode } = useTheme()
  const t = useTokens(darkMode)

  return (
    <section id="certifications" style={{
      background: t.bg.page,
      padding: '80px 20px',
      transition: 'background 0.3s'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 16px'
      }}>
        {/* Titre avec icône */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          style={{
            textAlign: 'center',
            marginBottom: '48px'
          }}
        >
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            marginBottom: '16px',
            flexWrap: 'wrap'
          }}>
            <Medal size={28} style={{ color: t.text.accent }} />
            <h2 style={{
              color: t.text.primary,
              fontSize: 'clamp(1.5rem, 5vw, 2rem)',
              fontWeight: 700,
              margin: 0
            }}>
              Certifications
            </h2>
            <Sparkles size={28} style={{ color: t.text.accent }} />
          </div>
          <p style={{
            color: t.text.secondary,
            fontSize: '0.95rem',
            lineHeight: 1.6,
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Certifications professionnelles obtenues pour renforcer mes compétences en cybersécurité et développement
          </p>
        </motion.div>

        {/* Grille des certifications 3 colonnes sur desktop */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px'
        }}>
          {certificationsData.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              style={{
                background: t.bg.surface,
                border: `1px solid ${t.border.default}`,
                borderRadius: '20px',
                padding: '24px',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-5px)'
                e.currentTarget.style.borderColor = t.border.accent
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.borderColor = t.border.default
              }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                marginBottom: '16px'
              }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  background: t.badge.bg,
                  border: `1px solid ${t.border.accent}`,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: t.text.accent,
                  flexShrink: 0
                }}>
                  <Award size={24} />
                </div>
                <div>
                  <h3 style={{
                    color: t.text.primary,
                    fontSize: '1rem',
                    fontWeight: 700,
                    margin: 0,
                    lineHeight: 1.3
                  }}>
                    {cert.name}
                  </h3>
                  <p style={{
                    color: t.text.accent,
                    fontSize: '0.7rem',
                    margin: '5px 0 0 0',
                    fontWeight: 500
                  }}>
                    {cert.issuer}
                  </p>
                </div>
              </div>

              <p style={{
                color: t.text.secondary,
                fontSize: '0.85rem',
                lineHeight: 1.5,
                marginBottom: '20px',
                flex: 1
              }}>
                {cert.description}
              </p>

              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: 'auto'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  color: t.text.secondary,
                  fontSize: '0.75rem'
                }}>
                  <Calendar size={14} />
                  <span>Obtenue en {cert.date}</span>
                </div>
                {cert.url !== '#' && (
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      color: t.text.accent,
                      fontSize: '0.7rem',
                      textDecoration: 'none',
                      fontWeight: 500
                    }}
                  >
                    <ExternalLink size={12} />
                    Voir
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #certifications {
            padding: 50px 16px !important;
          }
          #certifications > div {
            padding: 0 !important;
          }
          #certifications > div > div {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
        }
        
        @media (max-width: 480px) {
          #certifications {
            padding: 40px 12px !important;
          }
        }
      `}</style>
    </section>
  )
}
