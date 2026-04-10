import { motion } from 'framer-motion'
import { ExternalLink, Shield, Lock, Zap, Bug, Server } from 'lucide-react'
import { useState } from 'react'
import { useTheme } from '../context/ThemeContext'

// Icône GitHub personnalisée
const GithubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
  </svg>
)

export default function ProjectCard({ project, index }) {
  const { darkMode } = useTheme()
  const [isHovered, setIsHovered] = useState(false)
  const [showDetails, setShowDetails] = useState(false)

  // Fonction pour obtenir la liste de sécurité (peut être string ou array)
  const getSecurityList = () => {
    if (!project.security) return []
    if (Array.isArray(project.security)) return project.security
    return [project.security] // Si c'est une string, on la met dans un tableau
  }

  const getSecurityIcon = () => {
    const securityList = getSecurityList()
    const secStr = securityList.join(' ').toLowerCase()
    if (secStr.includes('owasp')) return <Shield size={14} color="var(--accent)" />
    if (secStr.includes('injection')) return <Bug size={14} color="#F87171" />
    if (secStr.includes('auth') || secStr.includes('jwt')) return <Lock size={14} color="#C9A84C" />
    return <Zap size={14} color="#8B5CF6" />
  }

  const getSeverityColor = () => {
    if (project.result && project.result.includes('100%')) return '#4ADE80'
    const securityList = getSecurityList()
    if (securityList.length > 3) return '#F87171'
    return '#FCD34D'
  }

  // Récupération des tags (peut être tags ou stack)
  const tags = project.tags || project.stack || []

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: 'relative',
        background: darkMode 
          ? 'linear-gradient(135deg, rgba(17, 24, 39, 0.95), rgba(13, 20, 33, 0.98))'
          : '#FFFFFF',
        borderRadius: '20px',
        overflow: 'hidden',
        border: `1px solid ${isHovered ? 'var(--accent)' : (darkMode ? 'rgba(0, 212, 255, 0.1)' : '#E2E8F0')}`,
        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
        boxShadow: isHovered 
          ? (darkMode 
              ? '0 25px 40px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(0, 212, 255, 0.2)'
              : '0 25px 40px -12px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(0, 212, 255, 0.3)')
          : (darkMode 
              ? '0 4px 20px rgba(0, 0, 0, 0.3)'
              : '0 4px 20px rgba(0, 0, 0, 0.05)'),
      }}
    >
      <div style={{
        position: 'relative',
        padding: '1.5rem 1.5rem 0.75rem 1.5rem',
        borderBottom: `1px solid ${darkMode ? 'rgba(0, 212, 255, 0.1)' : '#E2E8F0'}`,
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
          <div style={{
            width: '48px',
            height: '48px',
            background: darkMode 
              ? 'linear-gradient(135deg, rgba(0,212,255,0.15), rgba(139,92,246,0.1))'
              : 'linear-gradient(135deg, rgba(0,212,255,0.1), rgba(139,92,246,0.05))',
            borderRadius: '14px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: `1px solid ${darkMode ? 'rgba(0,212,255,0.2)' : 'rgba(0,212,255,0.3)'}`,
          }}>
            {project.title?.includes('API') ? <Server size={24} color="var(--accent)" /> :
             project.title?.includes('Vuln') ? <Bug size={24} color="#F87171" /> :
             <Shield size={24} color="var(--accent)" />}
          </div>
          
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer"
                style={{ color: darkMode ? '#8BA0B8' : '#64748B', transition: 'all 0.2s', display: 'flex', padding: '0.25rem' }}
                onMouseEnter={e => { e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
                onMouseLeave={e => { e.currentTarget.style.color = darkMode ? '#8BA0B8' : '#64748B'; e.currentTarget.style.transform = 'translateY(0)' }}>
                <GithubIcon />
              </a>
            )}
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noopener noreferrer"
                style={{ color: darkMode ? '#8BA0B8' : '#64748B', transition: 'all 0.2s', display: 'flex', padding: '0.25rem' }}
                onMouseEnter={e => { e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
                onMouseLeave={e => { e.currentTarget.style.color = darkMode ? '#8BA0B8' : '#64748B'; e.currentTarget.style.transform = 'translateY(0)' }}>
                <ExternalLink size={18} />
              </a>
            )}
          </div>
        </div>
        
        <h3 style={{
          fontFamily: 'Syne, sans-serif',
          fontWeight: 600,
          fontSize: '1.3rem',
          color: darkMode ? '#F1F5F9' : '#0F172A',
          letterSpacing: '-0.01em',
          marginTop: '0.75rem',
          marginBottom: '0.5rem',
        }}>{project.title}</h3>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '0.5rem' }}>
          {tags.slice(0, 3).map((tag, i) => (
            <span key={i} style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '0.55rem',
              padding: '0.2rem 0.6rem',
              background: darkMode ? 'rgba(0, 212, 255, 0.08)' : 'rgba(0, 212, 255, 0.1)',
              border: `1px solid ${darkMode ? 'rgba(0, 212, 255, 0.15)' : 'rgba(0, 212, 255, 0.2)'}`,
              borderRadius: '12px',
              color: 'var(--accent)',
            }}>{tag}</span>
          ))}
        </div>
      </div>

      <div style={{ padding: '1.25rem 1.5rem' }}>
        {/* Problème */}
        {project.problem && (
          <div style={{ marginBottom: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
              <div style={{ width: '4px', height: '4px', background: '#F87171', borderRadius: '50%' }} />
              <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.6rem', color: '#F87171', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Problème</span>
            </div>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.8rem', color: darkMode ? '#8BA0B8' : '#475569', lineHeight: 1.5 }}>
              {project.problem}
            </p>
          </div>
        )}

        {/* Solution */}
        {project.solution && (
          <div style={{ marginBottom: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
              <div style={{ width: '4px', height: '4px', background: '#4ADE80', borderRadius: '50%' }} />
              <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.6rem', color: '#4ADE80', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Solution</span>
            </div>
            <p style={{ 
              fontFamily: 'DM Sans, sans-serif', 
              fontSize: '0.8rem', 
              color: darkMode ? '#8BA0B8' : '#475569', 
              lineHeight: 1.5,
              display: '-webkit-box',
              WebkitLineClamp: showDetails ? 'none' : 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}>
              {project.solution}
            </p>
            <button
              onClick={() => setShowDetails(!showDetails)}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--accent)',
                fontSize: '0.65rem',
                fontFamily: 'JetBrains Mono, monospace',
                cursor: 'pointer',
                marginTop: '0.3rem',
                padding: 0,
              }}
            >
              {showDetails ? 'Voir moins' : 'Voir plus'}
            </button>
          </div>
        )}

        {/* Stack technique */}
        {project.stack && project.stack.length > 0 && (
          <div style={{ marginBottom: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <Server size={12} color={darkMode ? '#8BA0B8' : '#64748B'} />
              <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.6rem', color: darkMode ? '#4A6080' : '#64748B', textTransform: 'uppercase' }}>Stack technique</span>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
              {project.stack.map((tech, i) => (
                <span key={i} style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '0.6rem',
                  padding: '0.2rem 0.6rem',
                  background: darkMode ? 'rgba(139, 148, 184, 0.08)' : 'rgba(0, 0, 0, 0.05)',
                  borderRadius: '4px',
                  color: darkMode ? '#8BA0B8' : '#475569',
                }}>{tech}</span>
              ))}
            </div>
          </div>
        )}

        {/* Sécurité & Résultat */}
        {(getSecurityList().length > 0 || project.result) && (
          <div style={{
            background: darkMode ? 'rgba(0, 212, 255, 0.03)' : 'rgba(0, 212, 255, 0.05)',
            borderRadius: '12px',
            padding: '0.75rem',
            border: `1px solid ${darkMode ? 'rgba(0, 212, 255, 0.1)' : 'rgba(0, 212, 255, 0.15)'}`,
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
              {getSecurityIcon()}
              <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.6rem', color: 'var(--accent)', textTransform: 'uppercase' }}>Sécurité & Résultat</span>
            </div>
            {getSecurityList().length > 0 && (
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem', marginBottom: '0.5rem' }}>
                {getSecurityList().slice(0, 3).map((sec, i) => (
                  <span key={i} style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '0.55rem',
                    padding: '0.15rem 0.5rem',
                    background: darkMode ? 'rgba(0, 212, 255, 0.08)' : 'rgba(0, 212, 255, 0.1)',
                    borderRadius: '10px',
                    color: 'var(--accent)',
                  }}>{sec}</span>
                ))}
              </div>
            )}
            {project.result && (
              <p style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '0.75rem',
                color: getSeverityColor(),
                lineHeight: 1.4,
              }}>{project.result}</p>
            )}
          </div>
        )}
      </div>

      {isHovered && (
        <div style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(circle at 50% 0%, ${darkMode ? 'rgba(0,212,255,0.08)' : 'rgba(0,212,255,0.04)'}, transparent 70%)`,
          pointerEvents: 'none',
          borderRadius: '20px',
        }} />
      )}
    </motion.div>
  )
}
