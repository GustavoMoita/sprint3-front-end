import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import Icon from './Icon'
import liaPhoto from '../assets/lia-campus.webp'

const headline = ['A VIDA NÃO', 'ESPERA O', 'MODO CERTO.']

export default function Hero() {
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const phoneY = useTransform(scrollYProgress, [0, 0.22], [0, reduceMotion ? 0 : 110])
  const lensY = useTransform(scrollYProgress, [0, 0.22], [0, reduceMotion ? 0 : -80])

  return (
    <section className="hero" id="inicio" aria-labelledby="hero-title">
      <div className="hero-grid" aria-hidden="true" />
      <motion.div className="hero-orbit orbit-one" style={{ y: lensY }} aria-hidden="true" />
      <div className="container hero-layout">
        <div className="hero-copy">
          <motion.p
            className="hero-kicker mono"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7 }}
          >
            HUMANLY × JOVI <span>CONCEITO 01</span>
          </motion.p>
          <h1 id="hero-title">
            <span className="sr-only">A vida não espera o modo certo.</span>
            {headline.map((line, index) => (
              <span className={index === 2 ? 'outline-word' : ''} aria-hidden="true" key={line}>
                <motion.i
                  initial={{ y: '110%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.85, delay: 0.2 + index * 0.12, ease: [0.22, 1, 0.36, 1] }}
                >
                  {line}
                </motion.i>
              </span>
            ))}
          </h1>
          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.72, duration: 0.7 }}
          >
            Uma câmera que acompanha o seu ritmo — e não o contrário.
          </motion.p>
          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.86, duration: 0.7 }}
          >
            <motion.a className="button button-primary" href="#experiencia" whileHover={{ y: -3 }} whileTap={{ scale: 0.98 }}>
              Conheça a experiência <Icon name="arrow" size={18} />
            </motion.a>
            <a className="text-link" href="#solucao">Ver solução <span aria-hidden="true">↓</span></a>
          </motion.div>
        </div>

        <motion.figure
          className="hero-device-wrap"
          style={{ y: phoneY }}
          initial={{ opacity: 0, y: 80, rotate: 3 }}
          animate={{ opacity: 1, y: 0, rotate: -2 }}
          transition={{ delay: 0.4, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="hero-device-glow" aria-hidden="true" />
          <div className="phone-frame">
            <div className="phone-screen">
              <img src={liaPhoto} alt="Estudante universitária no campus segurando um smartphone" fetchPriority="high" />
              <div className="camera-top mono"><span>22:01</span><span>HDR · AUTO</span></div>
              <div className="focus-bracket" aria-hidden="true"><Icon name="focus" size={54} /></div>
              <div className="camera-bottom">
                <span className="mono">MOMENTO</span>
                <span className="shutter" aria-hidden="true" />
                <span className="camera-thumb" aria-hidden="true" />
              </div>
            </div>
          </div>
          <figcaption className="hero-device-caption mono">INTERFACE CONTEXTUAL / 001</figcaption>
        </motion.figure>
      </div>
      <div className="hero-rail mono" aria-hidden="true"><span>01</span><i /><span>SCROLL PARA SENTIR</span></div>
    </section>
  )
}
