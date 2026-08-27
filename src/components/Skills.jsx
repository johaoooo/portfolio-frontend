import { useTheme } from '../context/ThemeContext'
import { useTokens } from '../theme/tokens'
import { motion } from 'framer-motion'
import { Code, Shield, Cloud, Database, PenTool, Terminal, Brain } from 'lucide-react'

const SKILLS = [
  { 
    category: 'Langages de programmation', 
    items: [
      { name: 'HTML', logo: '/logos/html5.svg' },
      { name: 'CSS', logo: '/logos/css3.svg' },
      { name: 'JavaScript', logo: '/logos/javascript.svg' },
      { name: 'Python', logo: '/logos/python.svg' },
      { name: 'SQL', logo: '/logos/postgresql.svg' }
    ],
    icon: <Code size={24} />
  },
  { 
    category: 'Frameworks & Bibliothèques', 
    items: [
      { name: 'React JS', logo: '/logos/react.svg' },
      { name: 'Node JS', logo: '/logos/nodejs.svg' },
      { name: 'Django', logo: '/logos/django.svg' },
      { name: 'WordPress', logo: '/logos/wordpress.svg' }
    ],
    icon: <Terminal size={24} />
  },
  { 
    category: 'Cybersécurité', 
    items: [
      { name: 'Tests d\'intrusion web', logo: '/logos/kalilinux.svg' },
      { name: 'BurpSuite', logo: '/logos/burpsuite.svg' },
      { name: 'Metasploit', logo: '/logos/metasploit.svg' },
      { name: 'Cisco', logo: '/logos/cisco.svg' },
      { name: 'OWASP Top 10', logo: '/logos/owasp.svg' }
    ],
    icon: <Shield size={24} />
  },
  { 
    category: 'Systèmes & DevOps', 
    items: [
      { name: 'Linux', logo: '/logos/linux.svg' },
      { name: 'Docker', logo: '/logos/docker.svg' },
      { name: 'GitHub', logo: '/logos/github.svg' }
    ],
    icon: <Cloud size={24} />
  },
  { 
    category: 'Bases de données', 
    items: [
      { name: 'MySQL', logo: '/logos/mysql.svg' },
      { name: 'PostgreSQL', logo: '/logos/postgresql.svg' }
    ],
    icon: <Database size={24} />
  },
  { 
    category: 'Outils & Logiciels', 
    items: [
      { name: 'Figma', logo: '/logos/figma.svg' },
      { name: 'Canva', logo: '/logos/canva.svg' }
    ],
    icon: <PenTool size={24} />
  },
  { 
    category: 'Soft Skills', 
    items: ['Leadership', 'Rigueur', 'Autonomie', 'Esprit d\'initiative', 'Gestion d\'équipe'],
    icon: <Brain size={24} />
  }
]

export default function Skills() {
  const { darkMode } = useTheme()
  const t = useTokens()

  return (
    <section id="skills" style={{
      background: t.bg.page,
      padding: '80px 24px',
      transition: 'background 0.3s'
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '50px' }}
        >
          <h2 style={{
            color: t.text.primary,
            fontSize: 'clamp(1.8rem, 4vw, 2.2rem)',
            fontWeight: 700,
            margin: 0,
            display: 'inline-block'
          }}>
            Compétences
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '60px' }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            style={{
              height: '3px',
              background: t.text.accent,
              borderRadius: '2px',
              margin: '12px auto 0'
            }}
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            style={{
              color: t.text.secondary,
              fontSize: '0.95rem',
              maxWidth: '600px',
              margin: '16px auto 0'
            }}
          >
            Technologies, outils et compétences que je maîtrise
          </motion.p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px'
        }}>
          {SKILLS.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05, type: "spring", stiffness: 80 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -5 }}
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
            >
              <div style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ color: t.text.accent, display: 'flex', alignItems: 'center' }}>
                  {skill.icon}
                </span>
                <h3 style={{
                  color: t.text.accent,
                  fontSize: '0.95rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  margin: 0
                }}>
                  {skill.category}
                </h3>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', flex: 1 }}>
                {skill.items.map((item, i) => {
                  const name = typeof item === 'string' ? item : item.name
                  const logo = typeof item === 'object' ? item.logo : null
                  const emoji = typeof item === 'object' ? item.emoji : null

                  return (
                    <motion.span
                      key={name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.04 + i * 0.02, duration: 0.3 }}
                      viewport={{ once: true }}
                      whileHover={{ 
                        scale: 1.06,
                        y: -2,
                        borderColor: t.text.accent,
                        boxShadow: '0 4px 12px rgba(16, 185, 129, 0.15)'
                      }}
                      style={{
                        background: t.badge.bg,
                        color: t.text.primary,
                        border: `1px solid ${t.border.accent}`,
                        padding: '7px 14px',
                        borderRadius: '30px',
                        fontSize: '0.78rem',
                        fontWeight: 500,
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px'
                      }}
                    >
                      {logo && (
                        <img
                          src={logo}
                          alt={name}
                          style={{
                            width: '16px',
                            height: '16px',
                            objectFit: 'contain',
                            flexShrink: 0
                          }}
                        />
                      )}
                      {emoji && (
                        <span style={{ fontSize: '0.85rem' }}>{emoji}</span>
                      )}
                      <span>{name}</span>
                    </motion.span>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #skills {
            padding: 60px 16px !important;
          }
          #skills > div > div {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
        }
      `}</style>
    </section>
  )
}

