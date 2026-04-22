import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { ArrowUpRight, Shield, Mail, Code, Lock } from 'lucide-react'
import { useState, useEffect, useRef, useMemo } from 'react'
import PropTypes from 'prop-types'
import PhotoCard from './PhotoCard'

const GithubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
)

const LinkedinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

const Typewriter = ({ texts }) => {
  const [display, setDisplay] = useState('')
  const st = useRef({ idx: 0, del: false })

  useEffect(() => {
    let tid
    const tick = () => {
      const { idx, del } = st.current
      const full = texts[idx]
      let delay = 80
      if (!del) {
        setDisplay(full.slice(0, display.length + 1))
        if (display.length >= full.length - 1) { st.current.del = true; delay = 2200 }
      } else {
        setDisplay(display.slice(0, -1))
        delay = 38
        if (display.length <= 1) { st.current.del = false; st.current.idx = (idx + 1) % texts.length; delay = 280 }
      }
      tid = setTimeout(tick, delay)
    }
    tid = setTimeout(tick, 80)
    return () => clearTimeout(tid)
  }, [display, texts])

  return (
    <span aria-live="polite" aria-atomic="true">
      {display}<span className="h-cursor" aria-hidden="true" />
    </span>
  )
}
Typewriter.propTypes = { texts: PropTypes.arrayOf(PropTypes.string).isRequired }

const SocialLink = ({ href, icon, label }) => (
  <a href={href}
    target={href.startsWith('http') ? '_blank' : undefined}
    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
    aria-label={label} className="h-social-link"
  >
    {icon}
  </a>
)
SocialLink.propTypes = {
  href: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
}

export default function Hero() {
  const typingTexts = useMemo(() => [
    'Expert Cybersécurité', 'Développeur Fullstack', 'Pentest & Audit', 'Sécurité Applicative',
  ], [])

  const socialLinks = useMemo(() => [
    { href: 'https://github.com/johaoooo',                   icon: <GithubIcon />,           label: 'GitHub' },
    { href: 'https://linkedin.com/in/dehazounde-joseph',     icon: <LinkedinIcon />,         label: 'LinkedIn' },
    { href: 'mailto:josephdehazounde@gmail.com',             icon: <Mail size={15} aria-hidden="true" />, label: 'Email' },
  ], [])

  return (
    <section id="hero" className="h-section">
      <div className="h-bg" aria-hidden="true" />
      <div className="h-glow h-glow--tl" aria-hidden="true" />
      <div className="h-glow h-glow--br" aria-hidden="true" />

      <div className="h-container">
        <motion.div
          className="h-content"
          initial={{ opacity: 0, x: -28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <motion.div className="h-greeting-wrap"
            initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}
          >
            <div className="h-vert-line" aria-hidden="true" />
            <p className="h-greeting">Bonjour, je suis</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.33 }}>
            <h2 className="h-firstname">Joseph</h2>
          </motion.div>

          <motion.div
            className="h-name-row"
            initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.41 }}
          >
            <h1 className="h-name">Dehazounde</h1>
            <span className="h-badge">Junior</span>
          </motion.div>

          <motion.p className="h-desc"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.52 }}
          >
            Passionné de sécurité offensive &amp; défensive.{' '}
            <span className="h-tw"><Typewriter texts={typingTexts} /></span>
          </motion.p>

          <motion.div className="h-ctas"
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.66 }}
          >
            <Link to="projects" smooth duration={600} offset={-70}
              className="h-btn h-btn--primary" role="button" tabIndex={0}
            >
              Voir les projets <ArrowUpRight size={14} aria-hidden="true" />
            </Link>
            <Link to="contact" smooth duration={600} offset={-70}
              className="h-btn h-btn--ghost" role="button" tabIndex={0}
            >
              Me contacter
            </Link>
          </motion.div>

          <motion.div className="h-social"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.78 }}
          >
            <span className="h-social-lbl">Réseaux</span>
            <div className="h-social-div" aria-hidden="true" />
            {socialLinks.map((s) => <SocialLink key={s.label} {...s} />)}
          </motion.div>
        </motion.div>

        <div className="h-photo">
          <PhotoCard />
        </div>
      </div>

      <motion.div className="h-scroll"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
        aria-hidden="true"
      >
        <Link to="about" smooth duration={600} offset={-70}>
          <div className="h-scroll-inner">
            <span className="h-scroll-txt">SCROLL</span>
            <div className="h-scroll-line" />
          </div>
        </Link>
      </motion.div>

      <style>{`
        .h-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
          background: #05080F;
        }

        .h-bg {
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse 90% 70% at 10% 30%, rgba(124,185,232,0.045) 0%, transparent 55%),
                      radial-gradient(ellipse 60% 50% at 85% 80%, rgba(99,130,180,0.03) 0%, transparent 50%),
                      #05080F;
        }

        .h-glow {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          filter: blur(80px);
        }

        .h-glow--tl {
          width: 500px;
          height: 500px;
          top: -120px;
          left: -80px;
          background: rgba(124,185,232,0.04);
        }

        .h-glow--br {
          width: 380px;
          height: 380px;
          bottom: -100px;
          right: -60px;
          background: rgba(99,130,180,0.03);
        }

        .h-container {
          max-width: 1160px;
          margin: 0 auto;
          padding: 7rem 2rem;
          display: grid;
          grid-template-columns: 1fr 0.9fr;
          gap: 4rem;
          align-items: center;
          position: relative;
          z-index: 2;
          width: 100%;
        }

        .h-photo {
          display: flex;
          justify-content: center;
          align-items: flex-start;
        }

        .h-content {
          order: 1;
        }

        .h-greeting-wrap {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          margin-bottom: 0.5rem;
        }

        .h-vert-line {
          width: 3px;
          height: 18px;
          background: #7CB9E8;
          border-radius: 2px;
        }

        .h-greeting {
          font-family: "DM Sans", sans-serif;
          font-weight: 500;
          font-size: clamp(0.85rem, 1.6vw, 1rem);
          color: #94A3B8;
          letter-spacing: 0.03em;
          margin: 0;
        }

        .h-firstname {
          font-family: "DM Sans", sans-serif;
          font-weight: 700;
          font-size: clamp(1.4rem, 2.8vw, 1.9rem);
          color: #E2E8F0;
          margin: 0 0 0.15rem;
        }

        .h-name-row {
          display: flex;
          align-items: center;
          gap: 0.7rem;
          margin-bottom: 1.6rem;
          flex-wrap: wrap;
        }

        .h-name {
          font-family: "Syne", "Montserrat", sans-serif;
          font-weight: 800;
          font-size: clamp(2.8rem, 4.5vw, 3.5rem);
          line-height: 1;
          letter-spacing: -0.02em;
          text-transform: uppercase;
          color: #E2E8F0;
          margin: 0;
        }

        .h-badge {
          font-family: "JetBrains Mono", monospace;
          font-size: 0.6rem;
          font-weight: 600;
          color: #7CB9E8;
          background: rgba(124,185,232,0.08);
          border: 1px solid rgba(124,185,232,0.2);
          padding: 0.2rem 0.65rem;
          border-radius: 20px;
          letter-spacing: 0.06em;
        }

        .h-desc {
          font-family: "DM Sans", sans-serif;
          font-size: clamp(0.92rem, 1.8vw, 1.05rem);
          color: #94A3B8;
          line-height: 1.7;
          max-width: 450px;
          margin: 0 0 2rem;
        }

        .h-tw {
          color: #7CB9E8;
          font-weight: 600;
        }

        .h-cursor {
          display: inline-block;
          width: 2px;
          height: 1em;
          background: #7CB9E8;
          margin-left: 2px;
          vertical-align: middle;
          animation: hBlink 1s step-end infinite;
        }

        .h-ctas {
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
          margin-bottom: 2rem;
          align-items: center;
        }

        .h-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.75rem 1.6rem;
          font-family: "DM Sans", sans-serif;
          font-size: 0.82rem;
          font-weight: 600;
          border-radius: 50px;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.18s ease;
          border: none;
        }

        .h-btn--primary {
          background: #7CB9E8;
          color: #05080F;
          box-shadow: 0 4px 18px rgba(124,185,232,0.2);
        }

        .h-btn--primary:hover {
          background: #A8D4F0;
          transform: translateY(-1px);
          box-shadow: 0 6px 22px rgba(124,185,232,0.3);
        }

        .h-btn--ghost {
          background: transparent;
          color: #CBD5E1;
          border: 1.5px solid rgba(99,130,180,0.15);
        }

        .h-btn--ghost:hover {
          border-color: #7CB9E8;
          color: #7CB9E8;
          background: rgba(124,185,232,0.08);
        }

        .h-social {
          display: flex;
          align-items: center;
          gap: 0.85rem;
        }

        .h-social-lbl {
          font-family: "JetBrains Mono", monospace;
          font-size: 0.52rem;
          color: #475569;
          letter-spacing: 0.2em;
          text-transform: uppercase;
        }

        .h-social-div {
          width: 26px;
          height: 1px;
          background: rgba(99,130,180,0.15);
        }

        .h-social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 33px;
          height: 33px;
          border-radius: 9px;
          color: #94A3B8;
          border: 1px solid rgba(99,130,180,0.15);
          background: rgba(255,255,255,0.03);
          text-decoration: none;
          transition: all 0.18s ease;
        }

        .h-social-link:hover {
          color: #7CB9E8;
          border-color: rgba(124,185,232,0.35);
          background: rgba(124,185,232,0.08);
          transform: translateY(-2px);
        }

        .h-scroll {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          z-index: 2;
        }

        .h-scroll-inner {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.35rem;
          cursor: pointer;
        }

        .h-scroll-txt {
          font-family: "JetBrains Mono", monospace;
          font-size: 0.46rem;
          color: #475569;
          letter-spacing: 0.28em;
        }

        .h-scroll-line {
          width: 1px;
          height: 28px;
          background: linear-gradient(180deg, #7CB9E8, transparent);
          animation: hScroll 2s ease-in-out infinite;
        }

        @keyframes hBlink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        @keyframes hScroll {
          0%, 100% { opacity: 0.25; transform: scaleY(1); }
          50% { opacity: 1; transform: scaleY(1.5); }
        }

        @media (max-width: 860px) {
          .h-container {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 2.5rem;
            padding: 5rem 1.5rem;
          }
          .h-content { order: 2; }
          .h-photo { order: 1; }
          .h-greeting-wrap, .h-name-row, .h-ctas, .h-social {
            justify-content: center;
          }
          .h-desc {
            max-width: 100%;
            margin-left: auto;
            margin-right: auto;
          }
        }
      `}</style>
    </section>
  )
}
