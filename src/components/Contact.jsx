import { useState } from 'react'
import { motion } from 'framer-motion'
import { usePersistedState } from '../hooks/usePersistedState'
import Icon from './Icon'
import Reveal from './Reveal'

const emptyForm = { name: '', email: '', message: '' }

export default function Contact() {
  const [form, setForm] = usePersistedState('humanly-contact-draft', emptyForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('')

  function updateField(event) {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
    setErrors((current) => ({ ...current, [name]: '' }))
    setStatus('')
  }

  function handleSubmit(event) {
    event.preventDefault()
    const nextErrors = {}
    if (form.name.trim().length < 2) nextErrors.name = 'Informe seu nome.'
    if (!/^\S+@\S+\.\S+$/.test(form.email)) nextErrors.email = 'Informe um e-mail válido.'
    if (form.message.trim().length < 10) nextErrors.message = 'Escreva uma mensagem com pelo menos 10 caracteres.'
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length === 0) {
      setStatus('Mensagem validada. Esta demonstração front-end não envia dados para um servidor.')
      setForm(emptyForm)
    }
  }

  return (
    <section className="contact section" id="contato" aria-labelledby="contact-title">
      <div className="container contact-layout">
        <Reveal className="contact-copy">
          <span className="eyebrow">Contato</span>
          <h2 className="section-title" id="contact-title">Vamos conversar?</h2>
          <p className="section-copy">Toda boa experiência começa ouvindo. Conte o que você gostaria de registrar sem interromper o momento.</p>
          <div className="contact-stamp mono"><span>H</span>HUMANLY × JOVI<br />CHALLENGE FIAP 2026</div>
        </Reveal>

        <Reveal as="form" className="contact-form" delay={0.12} direction="left" onSubmit={handleSubmit} noValidate>
          <div className="field">
            <label htmlFor="name">Nome</label>
            <input id="name" name="name" type="text" autoComplete="name" value={form.name} onChange={updateField} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? 'name-error' : undefined} />
            {errors.name && <small id="name-error" role="alert">{errors.name}</small>}
          </div>
          <div className="field">
            <label htmlFor="email">E-mail</label>
            <input id="email" name="email" type="email" autoComplete="email" value={form.email} onChange={updateField} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? 'email-error' : undefined} />
            {errors.email && <small id="email-error" role="alert">{errors.email}</small>}
          </div>
          <div className="field">
            <label htmlFor="message">Mensagem</label>
            <textarea id="message" name="message" rows="4" value={form.message} onChange={updateField} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? 'message-error' : undefined} />
            <span className="character-count mono">{form.message.length} / 500</span>
            {errors.message && <small id="message-error" role="alert">{errors.message}</small>}
          </div>
          <motion.button className="button button-send" type="submit" whileHover={{ y: -3 }} whileTap={{ scale: 0.98 }}>
            Enviar mensagem <Icon name="send" size={18} />
          </motion.button>
          <p className="form-status" aria-live="polite">{status}</p>
        </Reveal>
      </div>
    </section>
  )
}
