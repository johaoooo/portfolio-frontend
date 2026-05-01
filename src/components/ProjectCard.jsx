import { motion } from 'framer-motion'
import { ExternalLink, Shield, Lock, Zap, Bug, Server } from 'lucide-react'
import { useState } from 'react'
import { useTheme } from '../context/ThemeContext'

const GithubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
  </svg>
)

export default function ProjectCard({ project, index }) {
  const { darkMode } = useTheme()
  const [isHovered, setIsHovered] = useState(false)
  const [showDetails, setShowDetails] = useState(false)

  const accent = darkMode ? '#722F37' : '#5C1F28'
  const accentRgb = darkMode ? '114,47,55' : '92,31,40'

  const getSecurityList = () => {
    if (!project.security) return []
    if (Array.isArray(project.security)) return project.security
    return [project.security]
  }

  const getSecurityIcon = () => {
    const secStr = getSecurityList().join(' ').toLowerCase()
    if (secStr.includes('owasp')) return <Shield size={14} color={accent} />
    if (secStr.includes('injection')) return <Bug size={14} color="#F87171" />
    if (secStr.includes('cryptographie')) return <Lock size={14} color="#34D399" />
    return <Shield size={14} color={accent} />
  }

  return (
    <motion.div
      className="project-card"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="project-image">
        {project.image || '🔒'}
      </div>
      
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        
        <div className="project-tech">
          {project.tech && project.tech.map((tech, i) => (
            <span key={i}>{tech}</span>
          ))}
        </div>
        
        <div className="project-buttons">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-btn-github">
              <GithubIcon /> Code
            </a>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-btn-demo">
              <ExternalLink size={14} /> Demo
            </a>
          )}
        </div>
      </div>

      <style>{`
        .project-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(99, 130, 180, 0.15);
          border-radius: 16px;
          overflow: hidden;
          transition: all 0.3s ease;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .project-card:hover {
          transform: translateY(-5px);
          border-color: rgba(124, 185, 232, 0.3);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        .project-image {
          width: 100%;
          height: 200px;
          background: linear-gradient(135deg, #1a1a2e, #16213e);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 3rem;
        }

        .project-content {
          padding: 1.5rem;
          flex: 1;
        }

        .project-title {
          color: #E2E8F0;
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .project-description {
          color: #94A3B8;
          font-size: 0.9rem;
          line-height: 1.5;
          margin-bottom: 1rem;
        }

        .project-tech {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
          margin-bottom: 1rem;
        }

        .project-tech span {
          background: rgba(124, 185, 232, 0.1);
          color: #7CB9E8;
          padding: 0.2rem 0.8rem;
          border-radius: 20px;
          font-size: 0.7rem;
          font-weight: 500;
        }

        .project-buttons {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
        }

        .project-buttons a {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.5rem 1rem;
          border-radius: 8px;
          text-decoration: none;
          font-size: 0.8rem;
          font-weight: 500;
          transition: all 0.2s ease;
        }

        .project-btn-github {
          background: rgba(255, 255, 255, 0.05);
          color: #CBD5E1;
          border: 1px solid rgba(99, 130, 180, 0.2);
        }

        .project-btn-demo {
          background: #7CB9E8;
          color: #05080F;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .project-content {
            padding: 1rem;
          }
          
          .project-title {
            font-size: 1.1rem;
          }
          
          .project-description {
            font-size: 0.85rem;
          }
          
          .project-tech span {
            font-size: 0.65rem;
            padding: 0.15rem 0.6rem;
          }
          
          .project-buttons {
            flex-direction: column;
            gap: 0.5rem;
          }
          
          .project-buttons a {
            justify-content: center;
          }
        }

        @media (max-width: 480px) {
          .project-image {
            height: 150px;
            font-size: 2.5rem;
          }
          
          .project-content {
            padding: 0.8rem;
          }
        }
      `}</style>
    </motion.div>
  )
}
