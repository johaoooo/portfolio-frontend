import { motion } from 'framer-motion'
import { ShieldCheck, Code2, Wrench, Brain, Zap, Users, GitBranch, Palette, Lock } from 'lucide-react'
import { useState } from 'react'
import { useTheme } from '../context/ThemeContext'

function SkillCard({ category, skills, index, darkMode, accent, accentBrd, cardBg, textTitle, textMuted }) {
  const [hoveredSkill, setHoveredSkill] = useState(null)

  // Résoudre la couleur "accent" string
  const resolveColor = (c) => c === 'accent' ? accent : c
  const color = resolveColor(category.color)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      style={{
        background: cardBg,
        borderRadius: '24px', padding: '1.8rem',
        border: `1px solid ${accentBrd}`,
        backdropFilter: 'blur(10px)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      }}
      whileHover={{
        transform: 'translateY(-5px)',
        boxShadow: darkMode ? '0 20px 40px rgba(0,0,0,0.3)' : '0 20px 40px rgba(0,0,0,0.1)',
      }}
    >
      {/* En-tête */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: '0.75rem',
        marginBottom: '1.5rem',
        borderBottom: `1px solid ${darkMode ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.07)'}`,
        paddingBottom: '1rem',
      }}>
        <div style={{
          width: '48px', height: '48px',
          background: `${color}20`,
          borderRadius: '14px',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          border: `1px solid ${color}40`,
        }}>
          <category.icon size={24} color={color} />
        </div>
        <div>
          <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1.2rem', color: textTitle }}>
            {category.title}
          </h3>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.7rem', color: color }}>
            {category.subtitle}
          </p>
        </div>
      </div>

      {/* Barres de compétences */}
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
                  fontFamily: 'DM Sans, sans-serif', fontSize: '0.85rem', fontWeight: 500,
                  color: darkMode ? '#CBD5E1' : '#334155',
                }}>{skill.name}</span>
                {skill.certified && (
                  <span style={{
                    fontSize: '0.55rem', padding: '0.15rem 0.4rem',
                    background: `${color}20`, borderRadius: '10px',
                    color: color, fontFamily: 'JetBrains Mono, monospace',
                  }}>Certifié</span>
                )}
              </div>
              <span style={{
                fontFamily: 'JetBrains Mono, monospace', fontSize: '0.7rem',
                color: hoveredSkill === skill.name ? color : (darkMode ? '#4A6080' : '#64748B'),
                transition: 'color 0.3s ease',
              }}>{skill.level}%</span>
            </div>
            <div style={{
              height: '6px',
              background: darkMode ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)',
              borderRadius: '10px', overflow: 'hidden',
            }}>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.1 + i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  height: '100%',
                  background: `linear-gradient(90deg, ${color}, ${color}80)`,
                  borderRadius: '10px',
                  position: 'relative',
                }}
              >
                <div style={{
                  position: 'absolute', top: 0, right: 0,
                  width: '20px', height: '100%',
                  background: `linear-gradient(90deg, transparent, ${color}40)`,
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

function SoftSkill({ name, icon: Icon, color, darkMode, accent, accentAlpha, accentBrd }) {
  const c = color === 'accent' ? accent : color
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -3 }}
      style={{
        display: 'flex', alignItems: 'center', gap: '0.6rem',
        padding: '0.6rem 1rem',
        background: accentAlpha,
        borderRadius: '12px',
        border: `1px solid ${accentBrd}`,
        transition: 'all 0.3s ease',
      }}
    >
      <Icon size={18} color={c} />
      <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.8rem', color: darkMode ? '#CBD5E1' : '#334155' }}>
        {name}
      </span>
    </motion.div>
  )
}

export default function Skills() {
  const { darkMode } = useTheme()

  // Tokens
  const accent      = darkMode ? '#0000FF'              : '#191970'
  const accentAlpha = darkMode ? 'rgba(0,0,255,0.06)'   : 'rgba(25,25,112,0.07)'
  const accentBrd   = darkMode ? 'rgba(0,0,255,0.15)'   : 'rgba(25,25,112,0.15)'
  const sectionBg   = darkMode ? '#0A0A0A'              : '#F8F8FF'
  const cardBg      = darkMode ? 'rgba(5,5,20,0.70)'    : 'rgba(255,255,255,0.90)'
  const textTitle   = darkMode ? '#F1F5F9'              : '#0F172A'
  const textMuted   = darkMode ? '#8BA0B8'              : '#475569'
  const glowL       = darkMode ? 'rgba(0,0,255,0.04)'   : 'rgba(25,25,112,0.05)'
  const glowR       = darkMode ? 'rgba(0,0,255,0.03)'   : 'rgba(25,25,112,0.04)'

  const categories = {
    technical: {
      title: 'Compétences Techniques',
      subtitle: 'Stack & Outils',
      icon: Code2,
      color: 'accent',
      skills: [
        { name: 'React / Next.js',      level: 85, certified: true  },
        { name: 'Django REST',          level: 80, certified: false },
        { name: 'Node.js / Express',    level: 75, certified: false },
        { name: 'PostgreSQL / MongoDB', level: 80, certified: false },
        { name: 'Tailwind CSS',         level: 90, certified: false },
      ]
    },
    security: {
      title: 'Cybersécurité',
      subtitle: 'Protection & Audit',
      icon: ShieldCheck,
      color: '#C9A84C',
      skills: [
        { name: 'OWASP Top 10',         level: 90, certified: true  },
        { name: 'Pentest (Burp, Nmap)', level: 85, certified: false },
        { name: 'Sécurité API / JWT',   level: 88, certified: false },
        { name: 'Cryptographie',        level: 75, certified: false },
        { name: 'Audit de code',        level: 82, certified: false },
      ]
    },
    tools: {
      title: 'Outils & DevOps',
      subtitle: 'Environnement',
      icon: Wrench,
      color: '#8B5CF6',
      skills: [
        { name: 'Git / GitHub',         level: 90, certified: false },
        { name: 'Docker',               level: 70, certified: false },
        { name: 'Linux / Kali',         level: 85, certified: true  },
        { name: 'VS Code / IntelliJ',   level: 95, certified: false },
        { name: 'Postman / Insomnia',   level: 88, certified: false },
      ]
    }
  }

  const softSkills = [
    { name: "Résolution de problèmes", icon: Brain,     color: 'accent'   },
    { name: "Autodidacte",             icon: Zap,       color: '#C9A84C'  },
    { name: "Travail d'équipe",        icon: Users,     color: '#8B5CF6'  },
    { name: "Communication",           icon: GitBranch, color: '#FF6B6B'  },
    { name: "Gestion de projet",       icon: Palette,   color: '#4ADE80'  },
  ]

  const sharedProps = { darkMode, accent, accentBrd, cardBg, textTitle, textMuted }

  return (
    <section id="skills" style={{
      padding: '7rem 0',
      background: sectionBg,
      position: 'relative',
      overflow: 'hidden',
      transition: 'background 0.35s ease',
    }}>

      {/* Lueurs de fond */}
      <div style={{
        position: 'absolute', top: '10%', left: '-10%',
        width: '40%', height: '50%',
        background: `radial-gradient(circle, ${glowL}, transparent)`,
        borderRadius: '50%', filter: 'blur(60px)',
      }} />
      <div style={{
        position: 'absolute', bottom: '10%', right: '-10%',
        width: '35%', height: '45%',
        background: `radial-gradient(circle, ${glowR}, transparent)`,
        borderRadius: '50%', filter: 'blur(60px)',
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
              display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
              background: accentAlpha,
              border: `1px solid ${accentBrd}`,
              padding: '0.4rem 1.2rem', borderRadius: '50px',
            }}>
              <Zap size={14} color={accent} />
              <span style={{
                fontFamily: 'JetBrains Mono, monospace', fontSize: '0.7rem',
                letterSpacing: '0.15em', color: accent, textTransform: 'uppercase',
              }}>Expertise & Savoir-faire</span>
            </div>
          </div>

          <h2 style={{
            fontFamily: 'Syne, sans-serif', fontWeight: 800,
            fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
            color: textTitle,
          }}>
            Mes <span style={{ color: accent }}>compétences</span>
          </h2>

          <p style={{
            fontFamily: 'DM Sans, sans-serif', fontSize: '0.95rem',
            color: textMuted, maxWidth: '600px', margin: '1rem auto 0',
          }}>
            Un équilibre parfait entre développement moderne et sécurité applicative
          </p>
        </motion.div>

        {/* Grille technique */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '1.5rem', marginBottom: '3rem',
        }}>
          <SkillCard category={categories.technical} skills={categories.technical.skills} index={0} {...sharedProps} />
          <SkillCard category={categories.security}  skills={categories.security.skills}  index={1} {...sharedProps} />
          <SkillCard category={categories.tools}     skills={categories.tools.skills}     index={2} {...sharedProps} />
        </div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 600, fontSize: '1.5rem', color: textTitle, marginBottom: '0.5rem' }}>
              Soft Skills
            </h3>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.85rem', color: textMuted }}>
              Au-delà du code, des qualités humaines
            </p>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.8rem' }}>
            {softSkills.map((skill, i) => (
              <SoftSkill key={i} {...skill} darkMode={darkMode} accent={accent} accentAlpha={accentAlpha} accentBrd={accentBrd} />
            ))}
          </div>
        </motion.div>

        {/* Badge veille */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          style={{
            textAlign: 'center', marginTop: '3rem', padding: '1.5rem',
            background: accentAlpha,
            borderRadius: '20px',
            border: `1px solid ${accentBrd}`,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
            <Lock size={16} color={accent} />
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.7rem', color: textMuted }}>
              En constante veille technologique et sécuritaire
            </span>
            <span style={{
              fontFamily: 'JetBrains Mono, monospace', fontSize: '0.6rem',
              padding: '0.2rem 0.6rem',
              background: `${accent}20`, borderRadius: '20px', color: accent,
            }}>+5 certifications en cours</span>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
