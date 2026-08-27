import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Icon from './Icon'

const options = ['HDR', 'Retrato', 'Pro', 'Noite', 'Vídeo', 'Filtros', 'Exposição', 'Macro', 'Ajustes']

export default function Problem() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const noiseOpacity = useTransform(scrollYProgress, [0.15, 0.42, 0.7], [0, 1, 0])
  const cleanOpacity = useTransform(scrollYProgress, [0.52, 0.74], [0, 1])
  const scale = useTransform(scrollYProgress, [0.15, 0.52, 0.8], [0.86, 1, 0.94])

  return (
    <section className="problem section" ref={ref} aria-labelledby="problem-title">
      <div className="container problem-intro">
        <span className="eyebrow">O problema</span>
        <h2 className="section-title" id="problem-title">O momento acontece em segundos.</h2>
        <p className="section-copy">Mas encontrar a configuração certa ainda pode levar tempo demais.</p>
      </div>

      <motion.div className="problem-stage" style={{ scale }}>
        <motion.div className="option-cloud" style={{ opacity: noiseOpacity }} aria-hidden="true">
          {options.map((option, index) => (
            <motion.span
              className={`option-pill option-${index + 1}`}
              key={option}
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.06 }}
            >
              {option}
            </motion.span>
          ))}
        </motion.div>

        <div className="problem-viewfinder" aria-label="Demonstração de uma interface de câmera ficando mais simples">
          <div className="viewfinder-top mono"><span>1/120</span><span>ISO AUTO</span><span>EV +0.3</span></div>
          <div className="viewfinder-grid" aria-hidden="true"><i /><i /><i /><i /></div>
          <div className="focus-point"><Icon name="focus" size={58} /></div>
          <motion.div className="clean-hint" style={{ opacity: cleanOpacity }}>
            <Icon name="sparkle" size={16} />
            <span><strong>Contexto identificado</strong>Acesso direto ao que importa agora.</span>
          </motion.div>
          <div className="viewfinder-shutter" aria-hidden="true" />
        </div>
      </motion.div>

      <motion.p className="problem-resolution" style={{ opacity: cleanOpacity }}>
        Menos procurando. <span>Mais registrando.</span>
      </motion.p>
    </section>
  )
}
