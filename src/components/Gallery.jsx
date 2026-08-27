import { motion } from 'framer-motion'
import { moments } from '../data/content'
import liaPhoto from '../assets/lia-campus.webp'
import Icon from './Icon'
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
            {index === 1 || index === 3 ? (
              <div className={`gallery-ui gallery-ui-${moment.id}`} aria-label={`Interface conceitual no momento ${moment.title}`}>
                <div className="gallery-ui-top mono"><span>{moment.time}</span><span>AUTO</span></div>
                <Icon name="focus" size={62} />
                <div className="gallery-ui-bottom"><span className="mono">{moment.title}</span><i /></div>
              </div>
            ) : (
              <img
                src={liaPhoto}
                alt={index === 0 ? 'Estudante no campus durante a rotina de aula' : 'Registro noturno da rotina universitária'}
                loading="lazy"
              />
            )}
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
