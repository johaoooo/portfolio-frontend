import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { ArrowUpRight } from 'lucide-react'
import PhotoCard from './PhotoCard'

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-container">
        <div className="hero-grid">
          
          <div className="hero-content">
            <h2 className="hero-greeting">Bonjour, je suis</h2>
            <h1 className="hero-name">Joseph Dehazounde</h1>
            <p className="hero-description">
              Passionné de sécurité offensive &amp; défensive.
            </p>
            <div className="hero-buttons">
              <Link to="projects" smooth duration={500} className="hero-btn-primary">
                Voir les projets <ArrowUpRight size={14} />
              </Link>
              <Link to="contact" smooth duration={500} className="hero-btn-secondary">
                Me contacter
              </Link>
            </div>
          </div>
          
          <div className="hero-right">
            <div className="hero-photo-wrapper">
              <PhotoCard />
            </div>
            <div className="hero-skills">
              <span className="hero-skill">Cybersécurité</span>
              <span className="hero-skill-sep">•</span>
              <span className="hero-skill">DevOps</span>
              <span className="hero-skill-sep">•</span>
              <span className="hero-skill">IA</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          background: #05080F;
          padding-top: 80px;
        }

        .hero-container {
          max-width: 1160px;
          margin: 0 auto;
          padding: 2rem 2rem 4rem;
          width: 100%;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: center;
        }

        .hero-greeting {
          color: #7CB9E8;
          font-size: 0.9rem;
          margin-bottom: 0.5rem;
        }

        .hero-name {
          color: #E2E8F0;
          font-size: clamp(2rem, 6vw, 3.5rem);
          font-weight: 800;
          margin-bottom: 1rem;
        }

        .hero-description {
          color: #94A3B8;
          font-size: clamp(0.9rem, 3vw, 1.05rem);
          margin-bottom: 2rem;
          max-width: 450px;
        }

        .hero-buttons {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .hero-btn-primary, .hero-btn-secondary {
          padding: 0.75rem 1.6rem;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.85rem;
          cursor: pointer;
        }

        .hero-btn-primary {
          background: #7CB9E8;
          color: #05080F;
        }

        .hero-btn-secondary {
          background: transparent;
          color: #CBD5E1;
          border: 1.5px solid rgba(99, 130, 180, 0.3);
        }

        .hero-right {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
          padding-top: 30px;
        }

        .hero-photo-wrapper {
          width: 100%;
          max-width: 280px;
        }

        .hero-skills {
          display: flex;
          justify-content: center;
          gap: 0.5rem;
          flex-wrap: wrap;
          align-items: center;
        }

        .hero-skill {
          background: rgba(124, 185, 232, 0.15);
          color: #7CB9E8;
          padding: 0.4rem 1rem;
          border-radius: 30px;
          font-size: 0.75rem;
          font-weight: 600;
          border: 1px solid rgba(124, 185, 232, 0.3);
        }

        .hero-skill-sep {
          color: #475569;
          font-size: 0.7rem;
        }

        @media (max-width: 768px) {
          .hero-section {
            padding-top: 70px;
          }
          
          .hero-container {
            padding: 1rem 1rem 3rem;
          }
          
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
            text-align: center;
          }
          
          .hero-content {
            order: 2;
          }
          
          .hero-right {
            order: 1;
            padding-top: 0;
          }
          
          .hero-description {
            max-width: 100%;
            margin-left: auto;
            margin-right: auto;
          }
          
          .hero-buttons {
            justify-content: center;
          }
          
          .hero-photo-wrapper {
            max-width: 200px;
          }
        }

        @media (max-width: 480px) {
          .hero-photo-wrapper {
            max-width: 160px;
          }
          
          .hero-skill {
            font-size: 0.65rem;
            padding: 0.25rem 0.7rem;
          }
        }
      `}</style>
    </section>
  )
}
