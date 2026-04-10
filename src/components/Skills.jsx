import { motion } from 'framer-motion'
import { ShieldCheck, Code2, Wrench, Database, Cloud, Terminal, Lock, Zap, Brain, Server, GitBranch, Palette, Users } from 'lucide-react'
import { useState } from 'react'
import { useTheme } from '../context/ThemeContext'

function SkillCard({ category, skills, index, darkMode }) {
  const [hoveredSkill, setHoveredSkill] = useState(null)
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      style={{
        background: darkMode ? 'rgba(17, 24, 39, 0.8)' : 'rgba(255, 255, 255, 0.9)',
        borderRadius: '24px',
        padding: '1.8rem',
        border: `1px solid ${darkMode ? 'rgba(0,212,255,0.1)' : 'rgba(0,212,255,0.15)'}`,
        backdropFilter: 'blur(10px)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      }}
      whileHover={{ transform: 'translateY(-5px)', boxShadow: darkMode ? '0 20px 40px rgba(0,0,0,0.3)' : '0 20px 40px rgba(0,0,0,0.1)' }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', borderBottom: `1px solid ${darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)'}`, paddingBottom: '1rem' }}>
        <div style={{
          width: '48px',
          height: '48px',
          background: `linear-gradient(135deg, ${category.color}20, ${category.color}08)`,
          borderRadius: '14px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: `1px solid ${category.color}40`,
        }}>
          <category.icon size={24} color={category.color} />
        </div>
        <div>
          <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1.2rem', color: darkMode ? '#F1F5F9' : '#0F172A' }}>{category.title}</h3>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.7rem', color: category.color }}>{category.subtitle}</p>
        </div>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {skills.map((skill, i) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + i * 0.05 }}
            onMouseEnter={() => setHoveredSkill(skill.name)}
            onMouseLeave={() => setHoveredSkill(null)}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '0.85rem',
                  fontWeight: 500,
                  color: darkMode ? '#CBD5E1' : '#334155',
                }}>{skill.name}</span>
                {skill.certified && (
                  <span style={{
                    fontSize: '0.55rem',
                    padding: '0.15rem 0.4rem',
                    background: `${category.color}20`,
                    borderRadius: '10px',
                    color: category.color,
                    fontFamily: 'JetBrains Mono, monospace',
                  }}>Certifié</span>
                )}
              </div>
              <span style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.7rem',
                color: hoveredSkill === skill.name ? category.color : darkMode ? '#4A6080' : '#64748B',
                transition: 'color 0.3s ease',
              }}>{skill.level}%</span>
            </div>
            <div style={{
              height: '6px',
              background: darkMode ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)',
              borderRadius: '10px',
              overflow: 'hidden',
            }}>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.1 + i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  height: '100%',
                  background: `linear-gradient(90deg, ${category.color}, ${category.color}80)`,
                  borderRadius: '10px',
                  position: 'relative',
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  width: '20px',
                  height: '100%',
                  background: `linear-gradient(90deg, transparent, ${category.color}40)`,
                  borderRadius: '10px',
                }} />
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

// Composant pour les soft skills
function SoftSkill({ name, icon: Icon, color, darkMode }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -3 }}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.6rem',
        padding: '0.6rem 1rem',
        background: darkMode ? 'rgba(0,212,255,0.05)' : 'rgba(0,212,255,0.08)',
        borderRadius: '12px',
        border: `1px solid ${darkMode ? 'rgba(0,212,255,0.15)' : 'rgba(0,212,255,0.2)'}`,
        transition: 'all 0.3s ease',
      }}
    >
      <Icon size={18} color={color} />
      <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.8rem', color: darkMode ? '#CBD5E1' : '#334155' }}>{name}</span>
    </motion.div>
  )
}

export default function Skills() {
  const { darkMode } = useTheme()

  const categories = {
    technical: {
      title: 'Compétences Techniques',
      subtitle: 'Stack & Outils',
      icon: Code2,
      color: 'var(--accent)',
      skills: [
        { name: 'React / Next.js', level: 85, certified: true },
        { name: 'Django REST', level: 80, certified: false },
        { name: 'Node.js / Express', level: 75, certified: false },
        { name: 'PostgreSQL / MongoDB', level: 80, certified: false },
        { name: 'Tailwind CSS', level: 90, certified: false },
      ]
    },
    security: {
      title: 'Cybersécurité',
      subtitle: 'Protection & Audit',
      icon: ShieldCheck,
      color: '#C9A84C',
      skills: [
        { name: 'OWASP Top 10', level: 90, certified: true },
        { name: 'Pentest (Burp, Nmap)', level: 85, certified: false },
        { name: 'Sécurité API / JWT', level: 88, certified: false },
        { name: 'Cryptographie', level: 75, certified: false },
        { name: 'Audit de code', level: 82, certified: false },
      ]
    },
    tools: {
      title: 'Outils & DevOps',
      subtitle: 'Environnement',
      icon: Wrench,
      color: '#8B5CF6',
      skills: [
        { name: 'Git / GitHub', level: 90, certified: false },
        { name: 'Docker', level: 70, certified: false },
        { name: 'Linux / Kali', level: 85, certified: true },
        { name: 'VS Code / IntelliJ', level: 95, certified: false },
        { name: 'Postman / Insomnia', level: 88, certified: false },
      ]
    }
  }

  const softSkills = [
    { name: 'Résolution de problèmes', icon: Brain, color: 'var(--accent)' },
    { name: 'Autodidacte', icon: Zap, color: '#C9A84C' },
    { name: 'Travail d\'équipe', icon: Users, color: '#8B5CF6' },
    { name: 'Communication', icon: GitBranch, color: '#FF6B6B' },
    { name: 'Gestion de projet', icon: Palette, color: '#4ADE80' },
  ]

  return (
    <section id="skills" style={{ 
      padding: '7rem 0', 
      background: darkMode ? '#080C14' : '#F8FAFC',
      position: 'relative',
      overflow: 'hidden',
    }}>
      
      {/* Effets de fond */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '-10%',
        width: '40%',
        height: '50%',
        background: `radial-gradient(circle, ${darkMode ? 'rgba(0,212,255,0.04)' : 'rgba(0,212,255,0.06)'}, transparent)`,
        borderRadius: '50%',
        filter: 'blur(60px)',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '10%',
        right: '-10%',
        width: '35%',
        height: '45%',
        background: `radial-gradient(circle, ${darkMode ? 'rgba(139,92,246,0.04)' : 'rgba(139,92,246,0.06)'}, transparent)`,
        borderRadius: '50%',
        filter: 'blur(60px)',
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
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              background: darkMode ? 'rgba(0,212,255,0.08)' : 'rgba(0,212,255,0.1)',
              border: `1px solid ${darkMode ? 'rgba(0,212,255,0.2)' : 'rgba(0,212,255,0.3)'}`,
              padding: '0.4rem 1.2rem',
              borderRadius: '50px',
            }}>
              <Zap size={14} color="var(--accent)" />
              <span style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.7rem',
                letterSpacing: '0.15em',
                color: 'var(--accent)',
                textTransform: 'uppercase',
              }}>Expertise & Savoir-faire</span>
            </div>
          </div>
          
          <h2 className="section-title">
            Mes <span style={{ background: 'linear-gradient(135deg, var(--accent), #8B5CF6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>compétences</span>
          </h2>
          
          <p style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '0.95rem',
            color: darkMode ? '#8BA0B8' : '#475569',
            maxWidth: '600px',
            margin: '1rem auto 0',
          }}>
            Un équilibre parfait entre développement moderne et sécurité applicative
          </p>
        </motion.div>

        {/* Grille des compétences techniques */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '1.5rem',
          marginBottom: '3rem',
        }}>
          <SkillCard category={categories.technical} skills={categories.technical.skills} index={0} darkMode={darkMode} />
          <SkillCard category={categories.security} skills={categories.security.skills} index={1} darkMode={darkMode} />
          <SkillCard category={categories.tools} skills={categories.tools.skills} index={2} darkMode={darkMode} />
        </div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h3 style={{
              fontFamily: 'Syne, sans-serif',
              fontWeight: 600,
              fontSize: '1.5rem',
              color: darkMode ? '#F1F5F9' : '#0F172A',
              marginBottom: '0.5rem',
            }}>
              Soft Skills
            </h3>
            <p style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '0.85rem',
              color: darkMode ? '#8BA0B8' : '#475569',
            }}>
              Au-delà du code, des qualités humaines
            </p>
          </div>
          
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '0.8rem',
          }}>
            {softSkills.map((skill, i) => (
              <SoftSkill key={i} {...skill} darkMode={darkMode} />
            ))}
          </div>
        </motion.div>

        {/* Badge de certification */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          style={{
            textAlign: 'center',
            marginTop: '3rem',
            padding: '1.5rem',
            background: darkMode ? 'rgba(0,212,255,0.03)' : 'rgba(0,212,255,0.05)',
            borderRadius: '20px',
            border: `1px solid ${darkMode ? 'rgba(0,212,255,0.1)' : 'rgba(0,212,255,0.15)'}`,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
            <Lock size={16} color="var(--accent)" />
            <span style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '0.7rem',
              color: darkMode ? '#8BA0B8' : '#475569',
            }}>
              En constante veille technologique et sécuritaire
            </span>
            <span style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '0.6rem',
              padding: '0.2rem 0.6rem',
              background: 'var(--accent)20',
              borderRadius: '20px',
              color: 'var(--accent)',
            }}>+5 certifications en cours</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
