import { useTheme } from '../context/ThemeContext'
import { useTokens } from '../theme/tokens'
import { motion } from 'framer-motion'
import { Award, Calendar, ExternalLink, Medal, Sparkles } from 'lucide-react'

const certificationsData = [
  {
    name: 'OWASP Top 10',
    issuer: 'OWASP Foundation',
    date: '2024',
    description: 'Maîtrise des vulnérabilités web et des bonnes pratiques de sécurité.',
    credentialId: 'OWASP-2024-001',
    url: '#'
  },
  {
    name: 'DevOps Engineer - Docker & Kubernetes',
    issuer: 'Linux Foundation',
    date: '2023',
    description: 'Containerisation, orchestration et CI/CD.',
    credentialId: 'LF-2023-042',
    url: '#'
  },
  {
    name: 'Certified Ethical Hacker (CEH)',
    issuer: 'EC-Council',
    date: '2024',
    description: 'Techniques de pentest et identification des vulnérabilités.',
    credentialId: 'CEH-2024-089',
    url: '#'
  },
  {
    name: 'Security+',
    issuer: 'CompTIA',
    date: '2023',
    description: 'Fondamentaux de la sécurité réseau et gestion des risques.',
    credentialId: 'COMP-2023-567',
    url: '#'
  }
]

export default function Certifications() {
  const { darkMode } = useTheme()
  const t = useTokens(darkMode)

  return (
    <section id="certifications" style={{
      background: t.bg.page,
      padding: '60px 20px',
      transition: 'background 0.3s'
    }}>
      <div style={{
        maxWidth: '1000px',
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
            marginBottom: '40px'
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
            fontSize: '0.9rem',
            lineHeight: 1.6,
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Certifications professionnelles et formations continues
          </p>
        </motion.div>

        {/* Grille des certifications - Responsive */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '20px'
        }}>
          {certificationsData.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              style={{
                background: t.bg.surface,
                border: `1px solid ${t.border.default}`,
                borderRadius: '16px',
                padding: '20px',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                overflow: 'hidden'
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
                gap: '12px',
                marginBottom: '16px',
                flexWrap: 'wrap'
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  background: t.badge.bg,
                  border: `1px solid ${t.border.accent}`,
                  borderRadius: '12px',
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
                    fontSize: 'clamp(0.9rem, 3vw, 1rem)',
                    fontWeight: 600,
                    margin: 0
                  }}>
                    {cert.name}
                  </h3>
                  <p style={{
                    color: t.text.accent,
                    fontSize: '0.7rem',
                    margin: '4px 0 0 0'
                  }}>
                    {cert.issuer}
                  </p>
                </div>
              </div>

              <p style={{
                color: t.text.secondary,
                fontSize: '0.8rem',
                lineHeight: 1.5,
                marginBottom: '16px'
              }}>
                {cert.description}
              </p>

              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '8px'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  color: t.text.secondary,
                  fontSize: '0.7rem'
                }}>
                  <Calendar size={12} />
                  <span>{cert.date}</span>
                </div>
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
                  Voir la certification
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #certifications {
            padding: 40px 16px !important;
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
            padding: 30px 12px !important;
          }
        }
      `}</style>
    </section>
  )
}
