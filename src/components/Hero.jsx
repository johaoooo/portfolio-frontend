/**
 * Hero.jsx
 * Dark  : fond #0A0A0A, accent bleu pur  #722F37
 * Light : fond #FFFFFF, accent bleu nuit #5C1F28
 */

import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { ArrowUpRight, Mail } from 'lucide-react'
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

export default function Hero({ darkMode }) {
  const typingTexts = useMemo(() => [
    'Expert Cybersécurité', 'Développeur Fullstack', 'Pentest & Audit', 'Sécurité Applicative',
  ], [])

  const socialLinks = useMemo(() => [
    { href: 'https://github.com/johaoooo',               icon: <GithubIcon />,                        label: 'GitHub' },
    { href: 'https://linkedin.com/in/dehazounde-joseph', icon: <LinkedinIcon />,                      label: 'LinkedIn' },
    { href: 'mailto:josephdehazounde@gmail.com',         icon: <Mail size={15} aria-hidden="true" />, label: 'Email' },
  ], [])

  return (
    <section id="hero" className={`h-section ${darkMode ? 'h-dark' : 'h-light'}`}>
      <div className="h-bg" aria-hidden="true" />
      <div className="h-glow h-glow--tl" aria-hidden="true" />
      <div className="h-glow h-glow--br" aria-hidden="true" />

      <div className="h-container">
        {/* Texte */}
        <motion.div
          className="h-content"
          initial={{ opacity: 0, x: -28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}>
            <h2 className="h-firstname">Joseph</h2>
          </motion.div>

          <motion.div
            className="h-name-row"
            initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.33 }}
          >
            <h1 className="h-name">Dehazounde</h1>
          </motion.div>

          <motion.p className="h-desc"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.44 }}
          >
            Passionné de sécurité offensive &amp; défensive.{' '}
            <span className="h-tw"><Typewriter texts={typingTexts} /></span>
          </motion.p>

          <motion.div className="h-ctas"
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.56 }}
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
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.68 }}
          >
            <span className="h-social-lbl">Réseaux</span>
            <div className="h-social-div" aria-hidden="true" />
            {socialLinks.map((s) => <SocialLink key={s.label} {...s} />)}
          </motion.div>
        </motion.div>

        {/* Photo */}
        <div className="h-photo">
          <PhotoCard darkMode={darkMode} />
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

        /* ══════════════════════════════
           DARK — Noir + Bleu pur
        ══════════════════════════════ */
        .h-dark {
          --bg:      #0A0A0A;
          --bg2:     #0D0D1A;
          --ink:     #F5F5F5;
          --ink2:    #E0E0E0;
          --muted:   #A0A0A0;
          --muted2:  #666666;
          --accent:  #722F37;
          --accent2: #8B3A45;
          --acc-bg:  rgba(114, 47, 55, 0.10);
          --acc-bg2: rgba(114, 47, 55, 0.06);
          --border:  rgba(114, 47, 55, 0.22);
          --border2: rgba(255, 255, 255, 0.06);
          --surf:    rgba(114, 47, 55, 0.04);
          --glow1:   rgba(114, 47, 55, 0.07);
          --glow2:   rgba(114, 47, 55, 0.04);
          --shadow:  rgba(114, 47, 55, 0.25);
        }

        /* ══════════════════════════════
           LIGHT — Blanc + Bleu nuit
        ══════════════════════════════ */
        .h-light {
          --bg:      #FFFFFF;
          --bg2:     #F0F0FA;
          --ink:     #1A1A1A;
          --ink2:    #2D2D2D;
          --muted:   #555555;
          --muted2:  #888888;
          --accent:  #5C1F28;
          --accent2: #4A1520;
          --acc-bg:  rgba(92, 31, 40, 0.07);
          --acc-bg2: rgba(92, 31, 40, 0.04);
          --border:  rgba(92, 31, 40, 0.20);
          --border2: rgba(0, 0, 0, 0.08);
          --surf:    rgba(92, 31, 40, 0.03);
          --glow1:   rgba(92, 31, 40, 0.06);
          --glow2:   rgba(92, 31, 40, 0.03);
          --shadow:  rgba(92, 31, 40, 0.15);
        }

        .h-section {
          min-height: 100vh;
          display: flex; align-items: center;
          position: relative; overflow: hidden;
          background: var(--bg);
          transition: background 0.35s ease;
        }

        .h-bg {
          position: absolute; inset: 0;
          background:
            radial-gradient(ellipse 80% 60% at 10% 20%, var(--glow1) 0%, transparent 55%),
            radial-gradient(ellipse 50% 40% at 90% 85%, var(--glow2) 0%, transparent 50%),
            var(--bg);
          transition: background 0.35s ease;
        }

        .h-glow {
          position: absolute; border-radius: 50%;
          pointer-events: none; filter: blur(90px);
          transition: background 0.35s ease;
        }
        .h-glow--tl { width: 500px; height: 500px; top: -150px; left: -100px; background: var(--glow1); }
        .h-glow--br { width: 400px; height: 400px; bottom: -120px; right: -80px; background: var(--glow2); }

        .h-container {
          max-width: 1160px; margin: 0 auto;
          padding: 7rem 2rem;
          display: grid; grid-template-columns: 1fr 0.9fr;
          gap: 4rem; align-items: center;
          position: relative; z-index: 2; width: 100%;
        }
        .h-photo { display: flex; justify-content: center; align-items: flex-start; }

        .h-firstname {
          font-family: "DM Sans", sans-serif; font-weight: 600;
          font-size: clamp(1.3rem, 2.5vw, 1.7rem);
          color: var(--accent);
          letter-spacing: .02em; margin: 0 0 .2rem;
          transition: color 0.35s;
        }

        .h-name-row {
          display: flex; align-items: center; gap: .7rem;
          margin-bottom: 1.6rem; flex-wrap: wrap;
        }
        .h-name {
          font-family: "Syne", "Montserrat", sans-serif; font-weight: 800;
          font-size: clamp(2.8rem, 4.5vw, 3.5rem);
          line-height: 1.0; letter-spacing: -.02em;
          text-transform: uppercase;
          color: var(--ink); margin: 0;
          transition: color 0.35s;
        }

        .h-desc {
          font-family: "DM Sans", sans-serif;
          font-size: clamp(.92rem, 1.8vw, 1.05rem); font-weight: 400;
          color: var(--muted); line-height: 1.75;
          max-width: 450px; margin: 0 0 2rem;
          transition: color 0.35s;
        }
        .h-tw     { color: var(--accent); font-weight: 600; transition: color 0.35s; }
        .h-cursor {
          display: inline-block; width: 2px; height: 1em;
          background: var(--accent); margin-left: 2px; vertical-align: middle;
          animation: hBlink 1s step-end infinite;
        }

        .h-ctas {
          display: flex; gap: .75rem; flex-wrap: wrap;
          margin-bottom: 2rem; align-items: center;
        }
        .h-btn {
          display: inline-flex; align-items: center; gap: .45rem;
          padding: .75rem 1.7rem;
          font-family: "DM Sans", sans-serif; font-size: .84rem; font-weight: 600;
          border-radius: 50px; cursor: pointer; text-decoration: none;
          transition: all .2s ease; border: none; outline: none; letter-spacing: .01em;
        }
        .h-btn--primary {
          background: var(--accent);
          color: #FFFFFF;
          box-shadow: 0 4px 20px var(--shadow);
        }
        .h-btn--primary:hover, .h-btn--primary:focus-visible {
          background: var(--accent2);
          transform: translateY(-2px);
          box-shadow: 0 8px 28px var(--shadow);
        }
        .h-btn--ghost {
          background: transparent;
          color: var(--ink2);
          border: 1.5px solid var(--border);
        }
        .h-btn--ghost:hover, .h-btn--ghost:focus-visible {
          border-color: var(--accent);
          color: var(--accent);
          background: var(--acc-bg);
        }

        .h-social { display: flex; align-items: center; gap: .85rem; }
        .h-social-lbl {
          font-family: "JetBrains Mono", monospace; font-size: .52rem;
          color: var(--muted); letter-spacing: .2em; text-transform: uppercase;
          transition: color 0.35s;
        }
        .h-social-div {
          width: 26px; height: 1px;
          background: var(--border);
          transition: background 0.35s;
        }
        .h-social-link {
          display: flex; align-items: center; justify-content: center;
          width: 34px; height: 34px; border-radius: 9px;
          color: var(--muted);
          border: 1px solid var(--border2);
          background: var(--surf);
          text-decoration: none;
          transition: all .2s ease;
        }
        .h-social-link:hover, .h-social-link:focus-visible {
          color: var(--accent);
          border-color: var(--border);
          background: var(--acc-bg);
          transform: translateY(-2px);
          outline: none;
        }

        .h-scroll {
          position: absolute; bottom: 2rem; left: 50%;
          transform: translateX(-50%); z-index: 2;
        }
        .h-scroll-inner {
          display: flex; flex-direction: column;
          align-items: center; gap: .35rem; cursor: pointer;
        }
        .h-scroll-txt {
          font-family: "JetBrains Mono", monospace; font-size: .46rem;
          color: var(--muted2); letter-spacing: .28em;
          transition: color 0.35s;
        }
        .h-scroll-line {
          width: 1px; height: 28px;
          background: linear-gradient(180deg, var(--accent), transparent);
          animation: hScroll 2s ease-in-out infinite;
        }

        @keyframes hBlink  { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes hScroll { 0%,100%{opacity:.25;transform:scaleY(1)} 50%{opacity:1;transform:scaleY(1.5)} }

        @media (max-width: 860px) {
          .h-container {
            grid-template-columns: 1fr;
            text-align: center; gap: 2.5rem; padding: 5rem 1.5rem;
          }
          .h-content { order: 2; }
          .h-photo   { order: 1; }
          .h-name-row, .h-ctas, .h-social { justify-content: center; }
          .h-desc { margin-left: auto; margin-right: auto; }
        }
      `}</style>
    </section>
  )
}

Hero.propTypes = { darkMode: PropTypes.bool }
Hero.defaultProps = { darkMode: true }
