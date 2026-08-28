import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { cameraModes } from '../data/content'
import { modeAlts, modeImages } from '../data/modeImages'
import { usePersistedState } from '../hooks/usePersistedState'
import Icon from './Icon'
import Reveal from './Reveal'

export default function CameraDemo() {
  const [activeId, setActiveId] = usePersistedState('humanly-camera-mode', 'aula')
  const [capture, setCapture] = useState(null)
  const active = cameraModes[activeId] ?? cameraModes.aula

  function simulateCapture() {
    const captureNumber = Math.floor(1000 + Math.random() * 9000)
    setCapture(`Momento ${captureNumber} registrado na demonstração`)
    window.setTimeout(() => setCapture(null), 2200)
  }

  return (
    <section className="camera-demo section" id="experiencia" aria-labelledby="demo-title">
      <div className="container demo-layout">
        <Reveal className="demo-copy">
          <span className="eyebrow">Experiência</span>
          <h2 className="section-title" id="demo-title">O momento muda. A interface acompanha.</h2>
          <p className="section-copy">
            Explore quatro contextos da rotina. Esta demonstração conceitual reorganiza informações — sem prometer recursos de hardware.
          </p>
          <div className="mode-tabs" role="tablist" aria-label="Contextos da câmera">
            {Object.entries(cameraModes).map(([id, mode]) => (
              <button
                className={id === activeId ? 'is-active' : ''}
                key={id}
                type="button"
                role="tab"
                aria-selected={id === activeId}
                aria-controls="camera-preview"
                onClick={() => setActiveId(id)}
              >
                <span className="mono">{mode.time}</span>{mode.label}
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal className="demo-device-column" delay={0.15} direction="left">
          <div className="demo-device" id="camera-preview" role="tabpanel" aria-live="polite">
            <AnimatePresence initial={false} mode="popLayout">
              <motion.img
                key={activeId}
                src={modeImages[activeId]}
                alt={modeAlts[activeId]}
                loading="lazy"
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.45 }}
              />
            </AnimatePresence>
            <div className="demo-shade" />
            <AnimatePresence mode="wait">
              <motion.div
                className="demo-ui"
                key={activeId}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.28 }}
              >
                <div className="demo-status mono"><span>{active.time}</span><span>EV {active.exposure}</span></div>
                <div className="demo-focus" style={{ color: active.tone }}><Icon name="focus" size={68} /></div>
                <div className="context-chip" style={{ '--mode-color': active.tone }}>
                  <Icon name="sparkle" size={17} />
                  <span className="mono">{active.hint}</span>
                </div>
                <div className="demo-description">
                  <span className="mono">MODO CONTEXTUAL</span>
                  <strong>{active.label}</strong>
                  <p>{active.description}</p>
                </div>
              </motion.div>
            </AnimatePresence>
            <button className="capture-button" type="button" onClick={simulateCapture} aria-label={`Simular captura no modo ${active.label}`}>
              <span />
            </button>
            <AnimatePresence>
              {capture && (
                <motion.div className="capture-toast" role="status" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
                  {capture}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <p className="demo-note mono">DEMONSTRAÇÃO FRONT-END · PREFERÊNCIA SALVA LOCALMENTE</p>
        </Reveal>
      </div>
    </section>
  )
}
