import { useRef, useState } from 'react'
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { moments } from '../data/content'
import { modeAlts, modeImages } from '../data/modeImages'
import Reveal from './Reveal'

export default function Audience() {
  const sectionRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end end'] })

  useMotionValueEvent(scrollYProgress, 'change', (progress) => {
    setActiveIndex(Math.min(moments.length - 1, Math.floor(progress * moments.length)))
  })

  const active = moments[activeIndex]

  return (
    <section className="audience section" id="publico" ref={sectionRef} aria-labelledby="audience-title">
      <div className="container audience-intro">
        <Reveal>
          <span className="eyebrow">Público-alvo</span>
          <h2 className="section-title" id="audience-title">Feita para quem não para.</h2>
        </Reveal>
        <Reveal className="persona-summary" delay={0.1}>
          <div><span className="mono">PERSONA 01</span><h3>LIA</h3></div>
          <dl>
            <div><dt>Idade</dt><dd>20 anos</dd></div>
            <div><dt>Rotina</dt><dd>Universitária</dd></div>
            <div><dt>Perfil</dt><dd>Full-time</dd></div>
          </dl>
          <p>Estuda, conversa, cria, compartilha e registra. Valoriza rapidez, simplicidade e espontaneidade.</p>
        </Reveal>
      </div>

      <div className="container timeline-shell">
        <div className="timeline-sticky">
          <figure className="persona-visual">
            <AnimatePresence mode="wait" initial={false}>
              <motion.img
                key={active.id}
                src={modeImages[active.id]}
                alt={modeAlts[active.id]}
                loading="lazy"
                initial={{ opacity: 0, scale: 1.035 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.45 }}
              />
            </AnimatePresence>
            <div className={`persona-tone tone-${active.id}`} />
            <figcaption className="mono">UM DIA COM LIA / {active.time}</figcaption>
          </figure>

          <div className="timeline-content">
            <div className="timeline-progress" aria-hidden="true">
              <motion.i animate={{ scaleY: (activeIndex + 1) / moments.length }} />
            </div>
            <ol>
              {moments.map((moment, index) => (
                <li className={index === activeIndex ? 'is-active' : ''} key={moment.id}>
                  <button type="button" onClick={() => setActiveIndex(index)} aria-current={index === activeIndex ? 'step' : undefined}>
                    <span className="mono">{moment.time}</span>{moment.title}
                  </button>
                </li>
              ))}
            </ol>

            <AnimatePresence mode="wait">
              <motion.article
                className="moment-copy"
                key={active.id}
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
              >
                <span className="mono">{active.index} / 04</span>
                <h3>{active.title}</h3>
                <p>{active.copy}</p>
              </motion.article>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
