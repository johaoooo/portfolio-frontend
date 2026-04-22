import { useState } from 'react'
import { motion } from 'framer-motion'
import axios from 'axios'
import { Send, GitBranch, Mail, CircleCheck } from 'lucide-react'
import LinkedinIcon from './LinkedinIcon'
import { useTheme } from '../context/ThemeContext'

const API = import.meta.env.VITE_API_URL || 'http://localhost:8000/api'
const initial = { name: '', email: '', subject: '', message: '', website: '' }

function Field({ label, name, type = 'text', rows, value, onChange, error, darkMode, accent, accentRgb }) {
  const base = {
    width: '100%',
    background: darkMode ? '#080C14' : '#FFFFFF',
    border: `1px solid ${darkMode ? '#1E2A3A' : '#E2E8F0'}`,
    borderRadius: '8px',
    padding: '0.875rem 1rem',
    color: darkMode ? '#F1F5F9' : '#0F172A',
    fontFamily: 'DM Sans, sans-serif',
    fontSize: '0.9rem',
    outline: 'none',
    transition: 'border-color 0.2s',
    resize: 'vertical',
  }
  return (
    <div>
      <label style={{
        display: 'block', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem',
        color: darkMode ? '#4A6080' : '#64748B', letterSpacing: '0.15em',
        textTransform: 'uppercase', marginBottom: '0.5rem',
      }}>
        {label}
      </label>
      {rows ? (
        <textarea name={name} rows={rows} value={value} onChange={onChange} required style={base}
          onFocus={e => e.target.style.borderColor = accent}
          onBlur={e => e.target.style.borderColor = darkMode ? '#1E2A3A' : '#E2E8F0'} />
      ) : (
        <input name={name} type={type} value={value} onChange={onChange} required style={base}
          onFocus={e => e.target.style.borderColor = accent}
          onBlur={e => e.target.style.borderColor = darkMode ? '#1E2A3A' : '#E2E8F0'} />
      )}
      {error && <p style={{ color: '#F87171', fontSize: '0.75rem', marginTop: '0.25rem' }}>{error}</p>}
    </div>
  )
}

export default function Contact() {
  const { darkMode } = useTheme()
  const [form, setForm] = useState(initial)
  const [status, setStatus] = useState(null)
  const [errors, setErrors] = useState({})

  // dark: rouge au vin | light: bordeaux profond
  const accent    = darkMode ? '#722F37' : '#5C1F28'
  const accentRgb = darkMode ? '114,47,55' : '92,31,40'

  const onChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const onSubmit = async e => {
    e.preventDefault()
    setStatus('loading'); setErrors({})
    try {
      await axios.post(`${API}/contact/`, form)
      setStatus('ok'); setForm(initial)
    } catch (err) {
      if (err.response?.data) setErrors(err.response.data)
      setStatus('error')
    }
  }

  return (
    <section id="contact" style={{
      padding: '8rem 0',
      background: darkMode ? '#0D0D0D' : '#FAF8F8',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
            background: `rgba(${accentRgb},0.08)`,
            border: `1px solid rgba(${accentRgb},0.20)`,
            padding: '0.4rem 1.2rem', borderRadius: '50px', marginBottom: '1rem',
          }}>
            <span style={{
              fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem',
              letterSpacing: '0.15em', color: accent, textTransform: 'uppercase',
            }}>05 — Contact</span>
          </div>
          <h2 style={{
            fontFamily: 'Syne, sans-serif', fontWeight: 800,
            fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
            color: darkMode ? '#F1F5F9' : '#0F172A',
            marginBottom: '0.5rem',
          }}>
            Travaillons <span style={{ color: accent }}>ensemble.</span>
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: '4rem', marginTop: '3.5rem', alignItems: 'start' }}>

          {/* Infos contact */}
          <div>
            <p style={{ color: darkMode ? '#8BA0B8' : '#475569', lineHeight: 1.8, marginBottom: '2.5rem', fontWeight: 300 }}>
              Un projet web à sécuriser, une alternance à proposer, un audit à réaliser — contactez-moi. Je réponds sous 24h.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { icon: Mail,       label: 'Email',    href: 'mailto:josephdehazounde@gmail.com',       text: 'josephdehazounde@gmail.com' },
                { icon: GitBranch,  label: 'GitHub',   href: 'https://github.com/johaoooo',             text: 'github.com/johaoooo' },
                { icon: LinkedinIcon, label: 'LinkedIn', href: 'https://linkedin.com/in/dehazounde-joseph', text: 'linkedin.com/in/dehazounde-joseph' },
              ].map(({ icon: Icon, label, href, text }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  style={{
                    display: 'flex', alignItems: 'center', gap: '0.875rem', textDecoration: 'none',
                    padding: '1rem',
                    background: darkMode ? 'rgba(255,255,255,0.03)' : '#FFFFFF',
                    border: `1px solid ${darkMode ? `rgba(${accentRgb},0.15)` : '#E2E8F0'}`,
                    borderRadius: '12px', transition: 'border-color 0.2s, background 0.2s',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = accent
                    e.currentTarget.style.background = `rgba(${accentRgb},0.05)`
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = darkMode ? `rgba(${accentRgb},0.15)` : '#E2E8F0'
                    e.currentTarget.style.background = darkMode ? 'rgba(255,255,255,0.03)' : '#FFFFFF'
                  }}>
                  <div style={{
                    width: 36, height: 36,
                    background: `rgba(${accentRgb},0.08)`,
                    border: `1px solid rgba(${accentRgb},0.20)`,
                    borderRadius: '10px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  }}>
                    <Icon size={15} color={accent} />
                  </div>
                  <div>
                    <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.6rem', color: accent, letterSpacing: '0.1em', textTransform: 'uppercase' }}>{label}</div>
                    <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.85rem', color: darkMode ? '#8BA0B8' : '#475569' }}>{text}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Formulaire */}
          <div>
            {status === 'ok' ? (
              <div style={{
                background: darkMode ? 'rgba(255,255,255,0.03)' : '#FFFFFF',
                border: `1px solid rgba(74,222,128,0.25)`,
                borderRadius: '16px', padding: '4rem 2rem', textAlign: 'center',
              }}>
                <CircleCheck size={48} style={{ color: '#4ADE80', margin: '0 auto 1rem' }} />
                <p style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1.25rem', color: darkMode ? '#F1F5F9' : '#0F172A', marginBottom: '0.5rem' }}>Message envoyé !</p>
                <p style={{ color: darkMode ? '#4A6080' : '#64748B', fontSize: '0.9rem', marginBottom: '2rem' }}>Je vous répondrai dans les 24h.</p>
                <button
                  onClick={() => setStatus(null)}
                  style={{
                    background: 'transparent', border: `1px solid rgba(${accentRgb},0.35)`,
                    borderRadius: '50px', padding: '0.6rem 1.6rem',
                    color: accent, fontFamily: 'DM Sans, sans-serif',
                    fontSize: '0.85rem', fontWeight: 600, cursor: 'pointer',
                    transition: 'all 0.2s',
                  }}
                >
                  Nouveau message
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} style={{
                background: darkMode ? 'rgba(255,255,255,0.03)' : '#FFFFFF',
                border: `1px solid ${darkMode ? `rgba(${accentRgb},0.15)` : '#E2E8F0'}`,
                borderRadius: '16px', padding: '2.5rem',
                display: 'flex', flexDirection: 'column', gap: '1.25rem',
              }} noValidate>
                <input type="text" name="website" value={form.website} onChange={onChange}
                  tabIndex={-1} autoComplete="off"
                  style={{ position: 'absolute', opacity: 0, height: 0, width: 0, pointerEvents: 'none' }}
                  aria-hidden="true" />
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <Field label="Nom complet" name="name" value={form.name} onChange={onChange} error={errors.name} darkMode={darkMode} accent={accent} accentRgb={accentRgb} />
                  <Field label="Email" name="email" type="email" value={form.email} onChange={onChange} error={errors.email} darkMode={darkMode} accent={accent} accentRgb={accentRgb} />
                </div>
                <Field label="Sujet" name="subject" value={form.subject} onChange={onChange} error={errors.subject} darkMode={darkMode} accent={accent} accentRgb={accentRgb} />
                <Field label="Message (20 car. min.)" name="message" rows={5} value={form.message} onChange={onChange} error={errors.message} darkMode={darkMode} accent={accent} accentRgb={accentRgb} />
                {status === 'error' && !Object.keys(errors).length && (
                  <p style={{ color: '#F87171', fontSize: '0.8rem' }}>Erreur serveur. Réessayez dans quelques instants.</p>
                )}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                    background: accent, color: '#FFFFFF',
                    border: 'none', borderRadius: '50px',
                    padding: '0.85rem 2rem',
                    fontFamily: 'DM Sans, sans-serif', fontSize: '0.9rem', fontWeight: 600,
                    cursor: status === 'loading' ? 'not-allowed' : 'pointer',
                    opacity: status === 'loading' ? 0.6 : 1,
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => { if (status !== 'loading') { e.currentTarget.style.opacity = '.88'; e.currentTarget.style.transform = 'translateY(-2px)' } }}
                  onMouseLeave={e => { e.currentTarget.style.opacity = status === 'loading' ? '0.6' : '1'; e.currentTarget.style.transform = 'translateY(0)' }}
                >
                  {status === 'loading' ? 'Envoi…' : <><Send size={15} /> Envoyer le message</>}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
