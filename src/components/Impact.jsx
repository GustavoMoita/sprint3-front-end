import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Impact() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const firstOpacity = useTransform(scrollYProgress, [0.05, 0.28, 0.52], [0, 1, 0.12])
  const secondOpacity = useTransform(scrollYProgress, [0.38, 0.58, 0.86], [0, 1, 1])
  const lineScale = useTransform(scrollYProgress, [0.25, 0.75], [0, 1])

  return (
    <section className="impact" ref={ref} aria-label="Mensagem principal do projeto">
      <div className="impact-sticky">
        <motion.p className="impact-line impact-line-first" style={{ opacity: firstOpacity }}>Não é sobre a câmera.</motion.p>
        <motion.p className="impact-line impact-line-second" style={{ opacity: secondOpacity }}>É sobre o <em>momento.</em></motion.p>
        <motion.i className="impact-divider" style={{ scaleX: lineScale }} />
        <motion.p className="impact-copy" style={{ opacity: secondOpacity }}>
          A tecnologia desaparece.<br />O que fica é aquilo que você viveu.
        </motion.p>
      </div>
    </section>
  )
}
