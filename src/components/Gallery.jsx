import { motion } from 'framer-motion'
import { moments } from '../data/content'
import { modeAlts, modeImages } from '../data/modeImages'
import Reveal from './Reveal'

export default function Gallery() {
  return (
    <section className="gallery section" id="galeria" aria-labelledby="gallery-title">
      <div className="container gallery-heading">
        <Reveal>
          <span className="eyebrow">Galeria</span>
          <h2 className="section-title" id="gallery-title">Um dia. Quatro momentos.</h2>
        </Reveal>
        <p className="gallery-caption mono">ARRASTE O OLHAR / PASSE O CURSOR</p>
      </div>

      <div className="container gallery-grid">
        {moments.map((moment, index) => (
          <motion.figure
            className={`gallery-item gallery-item-${index + 1}`}
            key={moment.id}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ delay: index * 0.08, duration: 0.7 }}
            whileHover={{ y: -6 }}
          >
            <img src={modeImages[moment.id]} alt={modeAlts[moment.id]} loading="lazy" />
            <div className="gallery-overlay" />
            <figcaption>
              <span className="mono">{moment.index} — {moment.time}</span>
              <strong>{moment.title}</strong>
              <p>{moment.copy}</p>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  )
}
