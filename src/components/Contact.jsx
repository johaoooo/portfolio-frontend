import { useState } from 'react'
import { motion } from 'framer-motion'
import axios from 'axios'
import { Send, GitBranch, Mail, CircleCheck } from 'lucide-react'
import LinkedinIcon from './LinkedinIcon'
import { useTheme } from '../context/ThemeContext'

const API = import.meta.env.VITE_API_URL || 'http://localhost:8000/api'
const initial = { name: '', email: '', subject: '', message: '', website: '' }

function Field({ label, name, type = 'text', rows, value, onChange, error, darkMode }) {
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
      <label style={{ display: 'block', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem', color: darkMode ? '#4A6080' : '#64748B', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
        {label}
      </label>
      {rows ? (
        <textarea name={name} rows={rows} value={value} onChange={onChange} required style={base}
          onFocus={e => e.target.style.borderColor = 'var(--accent)'}
          onBlur={e => e.target.style.borderColor = darkMode ? '#1E2A3A' : '#E2E8F0'} />
      ) : (
        <input name={name} type={type} value={value} onChange={onChange} required style={base}
          onFocus={e => e.target.style.borderColor = 'var(--accent)'}
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
      background: darkMode ? '#0D1421' : '#FFFFFF'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <div className="section-label">05 — Contact</div>
          <h2 className="section-title">Travaillons ensemble.</h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: '4rem', marginTop: '3.5rem', alignItems: 'start' }}>

          <div>
            <p style={{ color: darkMode ? '#8BA0B8' : '#475569', lineHeight: 1.8, marginBottom: '2.5rem', fontWeight: 300 }}>
              Un projet web à sécuriser, une alternance à proposer, un audit à réaliser — contactez-moi. Je réponds sous 24h.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { icon: Mail, label: 'Email', href: 'mailto:josephdehazounde@gmail.com', text: 'josephdehazounde@gmail.com' },
                { icon: GitBranch, label: 'GitHub', href: 'https://github.com/johaoooo', text: 'github.com/johaoooo' },
                { icon: LinkedinIcon, label: 'LinkedIn', href: 'https://linkedin.com/in/dehazounde-joseph', text: 'linkedin.com/in/dehazounde-joseph' },
              ].map(({ icon: Icon, label, href, text }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                   style={{ 
                     display: 'flex', alignItems: 'center', gap: '0.875rem', textDecoration: 'none', 
                     padding: '1rem', background: darkMode ? '#111827' : '#F8FAFC', 
                     border: `1px solid ${darkMode ? '#1E2A3A' : '#E2E8F0'}`, borderRadius: '8px', 
                     transition: 'border-color 0.2s' 
                   }}
                   onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--accent)'}
                   onMouseLeave={e => e.currentTarget.style.borderColor = darkMode ? '#1E2A3A' : '#E2E8F0'}>
                  <div style={{ 
                    width: 32, height: 32, 
                    background: darkMode ? 'rgba(0,212,255,0.06)' : 'rgba(0,212,255,0.1)', 
                    border: `1px solid ${darkMode ? 'rgba(0,212,255,0.15)' : 'rgba(0,212,255,0.3)'}`, 
                    borderRadius: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 
                  }}>
                    <Icon size={14} color="var(--accent)" />
                  </div>
                  <div>
                    <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.6rem', color: darkMode ? '#4A6080' : '#64748B', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{label}</div>
                    <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.85rem', color: darkMode ? '#8BA0B8' : '#475569' }}>{text}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div>
            {status === 'ok' ? (
              <div style={{ 
                background: darkMode ? '#111827' : '#F8FAFC', 
                border: `1px solid ${darkMode ? 'rgba(74,222,128,0.2)' : 'rgba(5,150,105,0.2)'}`, 
                borderRadius: '4px', padding: '4rem 2rem', textAlign: 'center' 
              }}>
                <CircleCheck size={48} style={{ color: '#4ADE80', margin: '0 auto 1rem' }} />
                <p style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1.25rem', color: darkMode ? '#F1F5F9' : '#0F172A', marginBottom: '0.5rem' }}>Message envoyé !</p>
                <p style={{ color: darkMode ? '#4A6080' : '#64748B', fontSize: '0.9rem', marginBottom: '2rem' }}>Je vous répondrai dans les 24h.</p>
                <button onClick={() => setStatus(null)} className="btn-ghost">Nouveau message</button>
              </div>
            ) : (
              <form onSubmit={onSubmit} style={{ 
                background: darkMode ? '#111827' : '#F8FAFC', 
                border: `1px solid ${darkMode ? '#1E2A3A' : '#E2E8F0'}`, 
                borderRadius: '4px', padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' 
              }} noValidate>
                <input type="text" name="website" value={form.website} onChange={onChange} tabIndex={-1} autoComplete="off"
                  style={{ position: 'absolute', opacity: 0, height: 0, width: 0, pointerEvents: 'none' }} aria-hidden="true" />
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <Field label="Nom complet" name="name" value={form.name} onChange={onChange} error={errors.name} darkMode={darkMode} />
                  <Field label="Email" name="email" type="email" value={form.email} onChange={onChange} error={errors.email} darkMode={darkMode} />
                </div>
                <Field label="Sujet" name="subject" value={form.subject} onChange={onChange} error={errors.subject} darkMode={darkMode} />
                <Field label="Message (20 car. min.)" name="message" rows={5} value={form.message} onChange={onChange} error={errors.message} darkMode={darkMode} />
                {status === 'error' && !Object.keys(errors).length && (
                  <p style={{ color: '#F87171', fontSize: '0.8rem' }}>Erreur serveur. Réessayez dans quelques instants.</p>
                )}
                <button type="submit" disabled={status === 'loading'} className="btn-primary"
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', opacity: status === 'loading' ? 0.6 : 1 }}>
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
