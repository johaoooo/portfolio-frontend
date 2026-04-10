import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'
import { projects } from '../data/projects'
import { ArrowRight, FolderGit2, ShieldCheck, Code2, Award, Sparkles, TrendingUp, Eye } from 'lucide-react'
import { Link } from 'react-scroll'
import { useTheme } from '../context/ThemeContext'
import { useState } from 'react'

export default function Projects() {
  const { darkMode } = useTheme()
  const [filter, setFilter] = useState('all')
  
  // Statistiques des projets
  const stats = {
    total: projects.length,
    secured: projects.filter(p => p.security && p.security.length > 0).length,
    technologies: [...new Set(projects.flatMap(p => p.stack || []))].length
  }

  const filters = [
    { id: 'all', label: 'Tous', icon: FolderGit2 },
    { id: 'security', label: 'Cybersécurité', icon: ShieldCheck },
    { id: 'fullstack', label: 'Fullstack', icon: Code2 },
  ]

  const filteredProjects = filter === 'all' 
    ? projects 
    : filter === 'security'
      ? projects.filter(p => p.security && p.security.length > 0)
      : projects

  return (
    <section id="projects" style={{
      padding: '7rem 0',
      background: darkMode ? '#0A0F1A' : '#F0F4F8',
      position: 'relative',
      overflow: 'hidden',
    }}>
      
      {/* Effets de fond sophistiqués */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(0,212,255,0.3), transparent)',
      }} />
      
      <div style={{
        position: 'absolute',
        top: '20%',
        right: '-5%',
        width: '30%',
        height: '40%',
        background: `radial-gradient(ellipse, ${darkMode ? 'rgba(0,212,255,0.06)' : 'rgba(0,212,255,0.08)'}, transparent 70%)`,
        borderRadius: '50%',
        filter: 'blur(80px)',
      }} />
      
      <div style={{
        position: 'absolute',
        bottom: '10%',
        left: '-5%',
        width: '25%',
        height: '35%',
        background: `radial-gradient(ellipse, ${darkMode ? 'rgba(139,92,246,0.05)' : 'rgba(139,92,246,0.07)'}, transparent 70%)`,
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
        
        {/* En-tête de section - Style amélioré */}
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
            <FolderGit2 size={16} color="var(--accent)" />
            <span style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '0.7rem',
              letterSpacing: '0.15em',
              color: 'var(--accent)',
              textTransform: 'uppercase',
            }}>Réalisations</span>
            <div style={{
              width: '4px',
              height: '4px',
              background: 'var(--accent)',
              borderRadius: '50%',
              opacity: 0.5,
            }} />
            <span style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '0.65rem',
              color: 'var(--accent)',
            }}>{stats.total} projets</span>
          </div>

          <h2 className="section-title" style={{ marginBottom: '1rem' }}>
            Mes derniers{' '}
            <span style={{
              background: 'linear-gradient(135deg, var(--accent) 0%, #C9A84C 50%, #8B5CF6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              projets
            </span>
          </h2>
          
          <p style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '1rem',
            color: darkMode ? '#8BA0B8' : '#475569',
            maxWidth: '580px',
            margin: '0 auto',
            lineHeight: 1.6,
          }}>
            Des solutions concrètes alliant développement robuste et sécurité intégrée
          </p>

          {/* Séparateur décoratif */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '0.5rem',
            marginTop: '2rem',
          }}>
            <div style={{ width: '40px', height: '2px', background: 'linear-gradient(90deg, transparent, var(--accent))' }} />
            <div style={{ width: '8px', height: '8px', background: 'var(--accent)', borderRadius: '50%', opacity: 0.6 }} />
            <div style={{ width: '40px', height: '2px', background: 'linear-gradient(90deg, var(--accent), transparent)' }} />
          </div>
        </motion.div>

        {/* Mini stats avant les projets */}
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
            { icon: ShieldCheck, label: 'Projets sécurisés', value: `${stats.secured}/${stats.total}`, color: 'var(--accent)', desc: 'OWASP compliant' },
            { icon: Code2, label: 'Technologies', value: `${stats.technologies}+`, color: '#C9A84C', desc: 'stack moderne' },
            { icon: Award, label: 'Bonnes pratiques', value: '100%', color: '#8B5CF6', desc: 'sécurité by design' },
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
                background: `rgba(${stat.color === 'var(--accent)' ? '0,212,255' : stat.color === '#C9A84C' ? '201,168,76' : '139,92,246'}, 0.1)`,
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
                <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.55rem', color: darkMode ? '#4A6080' : '#64748B' }}>{stat.desc}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Filtres */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            marginBottom: '3rem',
            flexWrap: 'wrap',
          }}
        >
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.6rem 1.3rem',
                background: filter === f.id 
                  ? (darkMode ? 'rgba(0,212,255,0.15)' : 'rgba(0,212,255,0.2)')
                  : 'transparent',
                border: `1px solid ${filter === f.id ? 'var(--accent)' : (darkMode ? 'rgba(0,212,255,0.2)' : 'rgba(0,212,255,0.3)')}`,
                borderRadius: '40px',
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '0.8rem',
                fontWeight: filter === f.id ? 600 : 400,
                color: filter === f.id ? 'var(--accent)' : (darkMode ? '#8BA0B8' : '#475569'),
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
            >
              <f.icon size={14} />
              <span>{f.label}</span>
            </button>
          ))}
        </motion.div>

        {/* Grille des projets */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))',
          gap: '2rem',
          marginBottom: '4rem',
        }}>
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard project={project} index={index} />
            </motion.div>
          ))}
        </div>

        {/* Call to action amélioré */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          style={{ textAlign: 'center' }}
        >
          <div style={{
            background: darkMode ? 'rgba(17, 24, 39, 0.6)' : 'rgba(255, 255, 255, 0.7)',
            backdropFilter: 'blur(12px)',
            borderRadius: '28px',
            padding: '2.5rem',
            border: `1px solid ${darkMode ? 'rgba(0,212,255,0.15)' : 'rgba(0,212,255,0.2)'}`,
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <Sparkles size={20} color="var(--accent)" />
              <span style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.7rem',
                letterSpacing: '0.1em',
                color: 'var(--accent)',
              }}>PRÊT À COLLABORER ?</span>
            </div>
            <p style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '1rem',
              color: darkMode ? '#8BA0B8' : '#475569',
              marginBottom: '1.5rem',
            }}>
              Vous avez un projet en tête ? Discutons de vos besoins en toute sécurité.
            </p>
            <Link to="contact" smooth duration={600} offset={-70}>
              <button style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                background: 'linear-gradient(135deg, var(--accent), #0099cc)',
                border: 'none',
                padding: '0.9rem 2.2rem',
                borderRadius: '50px',
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '0.85rem',
                fontWeight: 600,
                color: '#080C14',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-3px)'
                e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(0,212,255,0.4)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}>
                Discutons de votre projet
                <ArrowRight size={16} />
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
