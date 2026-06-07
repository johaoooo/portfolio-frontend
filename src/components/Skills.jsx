import { useTheme } from '../context/ThemeContext'
import { useTokens } from '../theme/tokens'
import { motion } from 'framer-motion'
import { Code, Shield, Cloud, Database, Sparkles, Cpu, PenTool, Server, Globe, Lock, Terminal, Wrench, Brain } from 'lucide-react'

const SKILLS = [
  { 
    category: 'Langages de programmation', 
    items: ['HTML', 'CSS', 'JavaScript', 'Python', 'SQL'],
    icon: <Code size={24} />
  },
  { 
    category: 'Frameworks & Bibliothèques', 
    items: ['React JS', 'Node JS', 'Django', 'WordPress'],
    icon: <Terminal size={24} />
  },
  { 
    category: 'Cybersécurité', 
    items: ['Tests d\'intrusion web', 'BurpSuite', 'Metasploit', 'TCP/IP', 'Cisco', 'OWASP Top 10'],
    icon: <Shield size={24} />
  },
  { 
    category: 'Systèmes & DevOps', 
    items: ['Linux', 'Docker', 'Virtualisation', 'Laragon', 'GitHub'],
    icon: <Cloud size={24} />
  },
  { 
    category: 'Bases de données', 
    items: ['MySQL', 'PostgreSQL'],
    icon: <Database size={24} />
  },
  { 
    category: 'Outils & Logiciels', 
    items: ['Figma', 'OBS', 'Microsoft Office', 'Canva', 'Adobe'],
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
  const t = useTokens(darkMode)

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

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', flex: 1 }}>
                {skill.items.map((item, i) => (
                  <motion.span
                    key={item}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 + i * 0.02, duration: 0.3 }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      scale: 1.05,
                      y: -2,
                      background: t.text.accent,
                      color: darkMode ? '#05080F' : '#fff'
                    }}
                    style={{
                      background: t.badge.bg,
                      color: t.badge.text,
                      border: `1px solid ${t.border.accent}`,
                      padding: '6px 14px',
                      borderRadius: '30px',
                      fontSize: '0.75rem',
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
