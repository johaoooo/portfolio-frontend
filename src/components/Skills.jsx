import { useTheme } from '../context/ThemeContext'
import { useTokens } from '../theme/tokens'
import { motion } from 'framer-motion'
import { Code, Shield, Cloud, Brain, Database, Server, Figma, Github, Docker } from 'lucide-react'

const SKILLS = [
  { 
    category: 'Cybersécurité', 
    items: ['Pentest', 'OWASP', 'Administration Cisco', 'Sécurité applicative', 'Windows Server'], 
    icon: <Shield size={20} /> 
  },
  { 
    category: 'DevOps & Outils', 
    items: ['Docker', 'GitHub', 'CI/CD', 'Linux', 'Akvo Flow', 'Kobocollect'], 
    icon: <Cloud size={20} /> 
  },
  { 
    category: 'Développement', 
    items: ['React.js', 'Node.js', 'Django', 'Next.js', 'JavaScript', 'Python', 'HTML/CSS'], 
    icon: <Code size={20} /> 
  },
  { 
    category: 'Base de données', 
    items: ['SQL', 'MySQL', 'PostgreSQL'], 
    icon: <Database size={20} /> 
  },
  { 
    category: 'Design & Outils', 
    items: ['Figma', 'Excel', 'Gestion d\'équipe', 'Collecte de données'], 
    icon: <Figma size={20} /> 
  },
]

export default function Skills() {
  const { darkMode } = useTheme()
  const t = useTokens(darkMode)

  return (
    <section id="skills" style={{
      background: t.bg.page, padding: '80px 24px',
      transition: 'background 0.3s',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '48px' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '16px' }}>
            <Code size={28} style={{ color: t.text.accent }} />
            <h2 style={{ color: t.text.primary, fontSize: 'clamp(1.5rem, 4vw, 2rem)', fontWeight: 700, margin: 0 }}>
              Compétences
            </h2>
          </div>
          <p style={{ color: t.text.secondary, fontSize: '1rem', maxWidth: '600px', margin: '0 auto' }}>
            Technologies, outils et méthodes que je maîtrise
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
        }}>
          {SKILLS.map(({ category, items, icon }, index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              style={{
                background: t.bg.surface,
                border: `1px solid ${t.border.default}`,
                borderRadius: '16px', padding: '24px',
                transition: 'all 0.3s ease',
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
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                <div style={{
                  width: '40px', height: '40px',
                  background: t.badge.bg,
                  border: `1px solid ${t.border.accent}`,
                  borderRadius: '10px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: t.text.accent
                }}>
                  {icon}
                </div>
                <h3 style={{ color: t.text.accent, fontSize: '0.9rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', margin: 0 }}>
                  {category}
                </h3>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {items.map(skill => (
                  <span key={skill} style={{
                    background: t.badge.bg,
                    color: t.badge.text,
                    border: `1px solid ${t.border.accent}`,
                    padding: '6px 14px', borderRadius: '30px',
                    fontSize: '0.8rem', fontWeight: 500,
                  }}>
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
