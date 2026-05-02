import { useTheme } from '../context/ThemeContext'
import { useTokens } from '../theme/tokens'
import { motion } from 'framer-motion'
import { Code, Shield, Cloud, Database, Sparkles, Cpu, PenTool, GitBranch, Container } from 'lucide-react'

const SKILLS = [
  { 
    category: 'Cybersécurité', 
    items: ['Pentest', 'OWASP', 'Administration Cisco', 'Sécurité applicative', 'Windows Server'],
    icon: <Shield size={24} />
  },
  { 
    category: 'DevOps & Outils', 
    items: ['Docker', 'CI/CD', 'Linux', 'Akvo Flow', 'Kobocollect', 'GitHub'],
    icon: <Container size={24} />
  },
  { 
    category: 'Développement', 
    items: ['React.js', 'Node.js', 'Django', 'Next.js', 'JavaScript', 'Python', 'HTML/CSS'],
    icon: <Code size={24} />
  },
  { 
    category: 'Base de données', 
    items: ['SQL', 'MySQL', 'PostgreSQL'],
    icon: <Database size={24} />
  },
  { 
    category: 'Design & Outils', 
    items: ['Figma', 'Excel', 'Gestion', 'Collecte données'],
    icon: <PenTool size={24} />
  },
]

export default function Skills() {
  const { darkMode } = useTheme()
  const t = useTokens(darkMode)

  return (
    <section id="skills" style={{
      background: t.bg.page,
      padding: '80px 24px',
      transition: 'background 0.3s',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '50px' }}
        >
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '12px' }}
          >
            <Cpu size={28} style={{ color: t.text.accent }} />
            <h2 style={{
              color: t.text.primary,
              fontSize: 'clamp(1.8rem, 4vw, 2.2rem)',
              fontWeight: 700,
              margin: 0,
              display: 'inline-block'
            }}>
              Compétences
            </h2>
            <Sparkles size={28} style={{ color: t.text.accent }} />
          </motion.div>
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
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px'
        }}>
          {SKILLS.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1, type: "spring", stiffness: 80 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -8 }}
              style={{
                background: t.bg.surface,
                border: `1px solid ${t.border.default}`,
                borderRadius: '20px',
                padding: '24px',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <motion.div
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: `linear-gradient(90deg, transparent, ${t.text.accent}15, transparent)`,
                  pointerEvents: 'none'
                }}
              />
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    width: '50px',
                    height: '50px',
                    background: t.badge.bg,
                    border: `1px solid ${t.border.accent}`,
                    borderRadius: '15px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: t.text.accent
                  }}
                >
                  {skill.icon}
                </motion.div>
                <h3 style={{
                  color: t.text.accent,
                  fontSize: '1rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  margin: 0
                }}>
                  {skill.category}
                </h3>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {skill.items.map((item, i) => (
                  <motion.span
                    key={item}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 + i * 0.03, duration: 0.3 }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      scale: 1.05,
                      y: -3,
                      background: t.text.accent,
                      color: darkMode ? '#05080F' : '#fff'
                    }}
                    style={{
                      background: t.badge.bg,
                      color: t.badge.text,
                      border: `1px solid ${t.border.accent}`,
                      padding: '6px 14px',
                      borderRadius: '30px',
                      fontSize: '0.8rem',
                      fontWeight: 500,
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
