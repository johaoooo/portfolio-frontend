import { motion } from 'framer-motion'
import { useState } from 'react'

const skillsData = [
  { name: 'Pentesting', level: 85, icon: '🔒' },
  { name: 'DevOps', level: 80, icon: '⚙️' },
  { name: 'IA / Machine Learning', level: 75, icon: '🧠' },
  { name: 'Sécurité Offensive', level: 90, icon: '🎯' },
  { name: 'Développement Web', level: 85, icon: '💻' },
  { name: 'Cloud Security', level: 78, icon: '☁️' },
]

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState(null)

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <motion.h2 
          className="skills-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Mes Compétences
        </motion.h2>
        
        <div className="skills-grid">
          {skillsData.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="skill-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true, margin: "-50px" }}
              onMouseEnter={() => setHoveredSkill(index)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div className="skill-icon">{skill.icon}</div>
              <h3 className="skill-name">{skill.name}</h3>
              <div className="skill-bar-container">
                <div 
                  className="skill-bar" 
                  style={{ width: `${hoveredSkill === index ? skill.level : 0}%` }}
                >
                  <span className="skill-percent">{skill.level}%</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .skills-section {
          padding: 5rem 1.5rem;
          background: linear-gradient(180deg, #0A1020 0%, #05080F 100%);
        }

        .skills-container {
          max-width: 1160px;
          margin: 0 auto;
        }

        .skills-title {
          text-align: center;
          font-size: clamp(1.8rem, 5vw, 2.5rem);
          font-weight: 700;
          color: #E2E8F0;
          margin-bottom: 3rem;
          position: relative;
        }

        .skills-title::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 3px;
          background: #7CB9E8;
          border-radius: 2px;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.8rem;
        }

        .skill-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(99, 130, 180, 0.15);
          border-radius: 16px;
          padding: 1.8rem;
          text-align: center;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .skill-card:hover {
          transform: translateY(-5px);
          border-color: rgba(124, 185, 232, 0.3);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        .skill-icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        .skill-name {
          color: #E2E8F0;
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 1.2rem;
        }

        .skill-bar-container {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
          height: 8px;
          overflow: hidden;
        }

        .skill-bar {
          background: linear-gradient(90deg, #7CB9E8, #2563EB);
          border-radius: 10px;
          height: 100%;
          position: relative;
          transition: width 1s ease-out;
          display: flex;
          align-items: center;
          justify-content: flex-end;
        }

        .skill-percent {
          position: absolute;
          right: 5px;
          top: -20px;
          font-size: 0.7rem;
          color: #7CB9E8;
          font-weight: 600;
        }

        /* Mobile */
        @media (max-width: 768px) {
          .skills-section {
            padding: 3rem 1rem;
          }

          .skills-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .skill-card {
            padding: 1.2rem;
          }

          .skill-name {
            font-size: 1.1rem;
          }

          .skill-icon {
            font-size: 2rem;
          }
        }

        @media (max-width: 480px) {
          .skills-section {
            padding: 2rem 0.8rem;
          }

          .skill-card {
            padding: 1rem;
          }
        }
      `}</style>
    </section>
  )
}
