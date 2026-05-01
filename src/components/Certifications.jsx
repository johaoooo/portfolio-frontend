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
      padding: '80px 24px',
      transition: 'background 0.3s'
    }}>
      <div style={{
        maxWidth: '1000px',
        margin: '0 auto'
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
            marginBottom: '16px'
          }}>
            <Medal size={28} style={{ color: t.text.accent }} />
            <h2 style={{
              color: t.text.primary,
              fontSize: 'clamp(1.5rem, 4vw, 2rem)',
              fontWeight: 700,
              margin: 0
            }}>
              Certifications
            </h2>
            <Sparkles size={28} style={{ color: t.text.accent }} />
          </div>
          <p style={{
            color: t.text.secondary,
            fontSize: '1rem',
            lineHeight: 1.6,
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Certifications professionnelles et formations continues
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '24px'
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
                padding: '24px',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
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
                marginBottom: '16px'
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
                  color: t.text.accent
                }}>
                  <Award size={24} />
                </div>
                <div>
                  <h3 style={{
                    color: t.text.primary,
                    fontSize: '1rem',
                    fontWeight: 600,
                    margin: 0
                  }}>
                    {cert.name}
                  </h3>
                  <p style={{
                    color: t.text.accent,
                    fontSize: '0.75rem',
                    margin: '4px 0 0 0'
                  }}>
                    {cert.issuer}
                  </p>
                </div>
              </div>

              <p style={{
                color: t.text.secondary,
                fontSize: '0.85rem',
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
          #certifications > div > div {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}
