/**
 * Hero.jsx — sombre & pro
 *
 * Palette sombre :
 *   - Fond :     #05080F  →  #0A1020
 *   - Surface :  rgba(255,255,255,0.03)
 *   - Texte :    #E2E8F0 (principal), #94A3B8 (secondaire)
 *   - Accent :   #7CB9E8  (bleu acier clair, lisible sur sombre)
 *   - Bordures : rgba(99,130,180,0.15)
 *
 * Nom : 3–3.5rem, Syne 800, pas de gradient — blanc cassé propre
 * Fond : pas de grille, dégradé radial profond + légère texture bruit SVG
 */

import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { ArrowUpRight, Shield, Mail, Code, Lock } from 'lucide-react'
import { useState, useEffect, useRef, useMemo } from 'react'
import PropTypes from 'prop-types'
import PhotoCard from './PhotoCard'

// ─── Icônes ───────────────────────────────────────────────────────────────────

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

// ─── AnimatedCounter ──────────────────────────────────────────────────────────

const AnimatedCounter = ({ target, suffix = '' }) => {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const obs = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || hasAnimated.current) return
      hasAnimated.current = true
      const t0 = performance.now()
      const tick = (now) => {
        const p = Math.min((now - t0) / 1800, 1)
        setCount(Math.round((1 - Math.pow(1 - p, 3)) * target))
        if (p < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
      obs.disconnect()
    }, { threshold: 0.3 })
    obs.observe(node)
    return () => obs.disconnect()
  }, [target])

  return <span ref={ref}>{count}{suffix}</span>
}
AnimatedCounter.propTypes = { target: PropTypes.number.isRequired, suffix: PropTypes.string }

// ─── Typewriter ───────────────────────────────────────────────────────────────

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

// ─── SocialLink ───────────────────────────────────────────────────────────────

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

// ─── Hero ─────────────────────────────────────────────────────────────────────

export default function Hero() {
  const typingTexts = useMemo(() => [
    'Expert Cybersécurité', 'Développeur Fullstack', 'Pentest & Audit', 'Sécurité Applicative',
  ], [])

  const stats = useMemo(() => [
    { target: 5,   suffix: '+', label: 'Projets réalisés', icon: Code },
    { target: 20,  suffix: '+', label: 'Vulnérabilités',   icon: Shield },
    { target: 100, suffix: '%', label: 'Sécurisé',         icon: Lock },
  ], [])

  const socialLinks = useMemo(() => [
    { href: 'https://github.com/johaoooo',                   icon: <GithubIcon />,           label: 'GitHub' },
    { href: 'https://linkedin.com/in/dehazounde-joseph',     icon: <LinkedinIcon />,         label: 'LinkedIn' },
    { href: 'mailto:josephdehazounde@gmail.com',             icon: <Mail size={15} aria-hidden="true" />, label: 'Email' },
  ], [])

  return (
    <section id="hero" className="h-section">
      {/* Fond sombre + dégradé radial */}
      <div className="h-bg" aria-hidden="true" />
      <div className="h-glow h-glow--tl" aria-hidden="true" />
      <div className="h-glow h-glow--br" aria-hidden="true" />

      <div className="h-container">

        {/* ── Texte ── */}
        <motion.div
          className="h-content"
          initial={{ opacity: 0, x: -28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* Accroche */}
          <motion.div className="h-greeting-wrap"
            initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}
          >
            <div className="h-vert-line" aria-hidden="true" />
            <p className="h-greeting">Bonjour, je suis</p>
          </motion.div>

          {/* Prénom */}
          <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.33 }}>
            <h2 className="h-firstname">Joseph</h2>
          </motion.div>

          {/* Nom — 3–3.5rem, sobre */}
          <motion.div
            className="h-name-row"
            initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.41 }}
          >
            <h1 className="h-name">Dehazounde</h1>
            <span className="h-badge">Junior</span>
          </motion.div>

          {/* Description */}
          <motion.p className="h-desc"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.52 }}
          >
            Passionné de sécurité offensive &amp; défensive.{' '}
            <span className="h-tw"><Typewriter texts={typingTexts} /></span>
          </motion.p>

          {/* Stats */}
          <motion.div className="h-stats" role="list"
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.58 }}
          >
            {stats.map((s, i) => (
              <div key={s.label} className={`h-stat${i < stats.length - 1 ? ' h-stat--sep' : ''}`} role="listitem">
                <div className="h-stat-val"><AnimatedCounter target={s.target} suffix={s.suffix} /></div>
                <div className="h-stat-lbl">{s.label}</div>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
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

          {/* Réseaux */}
          <motion.div className="h-social"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.78 }}
          >
            <span className="h-social-lbl">Réseaux</span>
            <div className="h-social-div" aria-hidden="true" />
            {socialLinks.map((s) => <SocialLink key={s.label} {...s} />)}
          </motion.div>
        </motion.div>

        {/* ── Photo ── */}
        <div className="h-photo">
          <PhotoCard darkMode={true} />
        </div>
      </div>

      {/* Scroll indicator */}
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
        /* ── Tokens ── */
        .h-section {
          --ink:    #E2E8F0;
          --ink2:   #CBD5E1;
          --muted:  #94A3B8;
          --muted2: #475569;
          --accent: #7CB9E8;
          --acc-bg: rgba(124,185,232,0.08);
          --border: rgba(99,130,180,0.15);
          --bg:     #05080F;
          --surf:   rgba(255,255,255,0.03);
        }

        /* ── Layout section ── */
        .h-section {
          min-height: 100vh;
          display: flex; align-items: center;
          position: relative; overflow: hidden;
          background: var(--bg);
        }

        /* Fond sombre + bruit très discret */
        .h-bg {
          position: absolute; inset: 0;
          background:
            radial-gradient(ellipse 90% 70% at 10% 30%, rgba(124,185,232,0.045) 0%, transparent 55%),
            radial-gradient(ellipse 60% 50% at 85% 80%, rgba(99,130,180,0.03) 0%, transparent 50%),
            #05080F;
        }

        /* Lueurs très subtiles */
        .h-glow {
          position: absolute; border-radius: 50%;
          pointer-events: none; filter: blur(80px);
        }
        .h-glow--tl {
          width: 500px; height: 500px;
          top: -120px; left: -80px;
          background: rgba(124,185,232,0.04);
        }
        .h-glow--br {
          width: 380px; height: 380px;
          bottom: -100px; right: -60px;
          background: rgba(99,130,180,0.03);
        }

        /* ── Grid ── */
        .h-container {
          max-width: 1160px; margin: 0 auto;
          padding: 7rem 2rem;
          display: grid; grid-template-columns: 1fr 0.9fr;
          gap: 4rem; align-items: center;
          position: relative; z-index: 2; width: 100%;
        }
        .h-photo { display: flex; justify-content: center; align-items: flex-start; }

        /* ── Accroche ── */
        .h-greeting-wrap {
          display: flex; align-items: center; gap: .65rem; margin-bottom: .5rem;
        }
        .h-vert-line {
          width: 3px; height: 18px;
          background: var(--accent); border-radius: 2px; flex-shrink: 0;
        }
        .h-greeting {
          font-family: "DM Sans", sans-serif; font-weight: 500;
          font-size: clamp(.85rem, 1.6vw, 1rem);
          color: var(--muted); letter-spacing: .03em; margin: 0;
        }

        /* ── Prénom ── */
        .h-firstname {
          font-family: "DM Sans", sans-serif; font-weight: 700;
          font-size: clamp(1.4rem, 2.8vw, 1.9rem);
          color: var(--ink); letter-spacing: -.01em; margin: 0 0 .15rem;
        }

        /* ── Nom + badge ── */
        .h-name-row {
          display: flex; align-items: center; gap: .7rem; margin-bottom: 1.6rem; flex-wrap: wrap;
        }
        .h-name {
          font-family: "Syne", "Montserrat", sans-serif; font-weight: 800;
          /* 3–3.5rem comme demandé */
          font-size: clamp(2.8rem, 4.5vw, 3.5rem);
          line-height: 1.0; letter-spacing: -.02em;
          text-transform: uppercase; color: var(--ink); margin: 0;
        }
        .h-badge {
          font-family: "JetBrains Mono", monospace; font-size: .6rem; font-weight: 600;
          color: var(--accent); background: var(--acc-bg);
          border: 1px solid rgba(124,185,232,0.2);
          padding: .2rem .65rem; border-radius: 20px; letter-spacing: .06em;
        }

        /* ── Description ── */
        .h-desc {
          font-family: "DM Sans", sans-serif;
          font-size: clamp(.92rem, 1.8vw, 1.05rem); font-weight: 400;
          color: var(--muted); line-height: 1.7; max-width: 450px; margin: 0 0 2rem;
        }
        .h-tw { color: var(--accent); font-weight: 600; }
        .h-cursor {
          display: inline-block; width: 2px; height: 1em;
          background: var(--accent); margin-left: 2px; vertical-align: middle;
          animation: hBlink 1s step-end infinite;
        }

        /* ── Stats ── */
        .h-stats {
          display: flex; margin-bottom: 2rem;
          background: var(--surf);
          border: 1px solid var(--border);
          border-radius: 12px; overflow: hidden; max-width: 380px;
        }
        .h-stat { flex: 1; padding: .85rem .4rem; text-align: center; }
        .h-stat--sep { border-right: 1px solid var(--border); }
        .h-stat-val {
          font-family: "Syne", sans-serif; font-size: 1.45rem; font-weight: 800;
          color: var(--ink); line-height: 1; margin-bottom: .25rem;
        }
        .h-stat-lbl {
          font-family: "JetBrains Mono", monospace; font-size: .48rem;
          color: var(--muted2); letter-spacing: .07em; text-transform: uppercase;
        }

        /* ── Boutons ── */
        .h-ctas { display: flex; gap: .75rem; flex-wrap: wrap; margin-bottom: 2rem; align-items: center; }
        .h-btn {
          display: inline-flex; align-items: center; gap: .4rem;
          padding: .75rem 1.6rem;
          font-family: "DM Sans", sans-serif; font-size: .82rem; font-weight: 600;
          border-radius: 50px; cursor: pointer; text-decoration: none;
          transition: all .18s ease; border: none; outline: none; letter-spacing: .01em;
        }
        .h-btn--primary {
          background: var(--accent); color: #05080F;
          box-shadow: 0 4px 18px rgba(124,185,232,0.2);
        }
        .h-btn--primary:hover, .h-btn--primary:focus-visible {
          background: #A8D4F0; transform: translateY(-1px);
          box-shadow: 0 6px 22px rgba(124,185,232,0.3);
        }
        .h-btn--ghost {
          background: transparent; color: var(--ink2);
          border: 1.5px solid var(--border);
        }
        .h-btn--ghost:hover, .h-btn--ghost:focus-visible {
          border-color: var(--accent); color: var(--accent); background: var(--acc-bg);
        }

        /* ── Réseaux ── */
        .h-social { display: flex; align-items: center; gap: .85rem; }
        .h-social-lbl {
          font-family: "JetBrains Mono", monospace; font-size: .52rem;
          color: var(--muted2); letter-spacing: .2em; text-transform: uppercase;
        }
        .h-social-div { width: 26px; height: 1px; background: var(--border); }
        .h-social-link {
          display: flex; align-items: center; justify-content: center;
          width: 33px; height: 33px; border-radius: 9px;
          color: var(--muted); border: 1px solid var(--border);
          background: var(--surf); text-decoration: none;
          transition: all .18s ease;
        }
        .h-social-link:hover, .h-social-link:focus-visible {
          color: var(--accent); border-color: rgba(124,185,232,0.35);
          background: var(--acc-bg); transform: translateY(-2px); outline: none;
        }

        /* ── Scroll ── */
        .h-scroll {
          position: absolute; bottom: 2rem; left: 50%;
          transform: translateX(-50%); z-index: 2;
        }
        .h-scroll-inner { display: flex; flex-direction: column; align-items: center; gap: .35rem; cursor: pointer; }
        .h-scroll-txt {
          font-family: "JetBrains Mono", monospace; font-size: .46rem;
          color: var(--muted2); letter-spacing: .28em;
        }
        .h-scroll-line {
          width: 1px; height: 28px;
          background: linear-gradient(180deg, var(--accent), transparent);
          animation: hScroll 2s ease-in-out infinite;
        }

        /* ── Keyframes ── */
        @keyframes hBlink  { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes hScroll { 0%,100%{opacity:.25;transform:scaleY(1)} 50%{opacity:1;transform:scaleY(1.5)} }

        /* ── Responsive ── */
        @media (max-width: 860px) {
          .h-container { grid-template-columns:1fr; text-align:center; gap:2.5rem; padding:5rem 1.5rem; }
          .h-content { order:2; }
          .h-photo   { order:1; }
          .h-greeting-wrap, .h-name-row, .h-ctas, .h-social { justify-content:center; }
          .h-desc, .h-stats { max-width:100%; margin-left:auto; margin-right:auto; }
        }
      `}</style>
    </section>
  )
}
