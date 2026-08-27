import { motion } from 'framer-motion'
import { team } from '../data/content'
import Reveal from './Reveal'

export default function Team() {
  return (
    <section className="team section" id="equipe" aria-labelledby="team-title">
      <div className="container">
        <Reveal className="team-heading">
          <div>
            <span className="eyebrow">Nossa equipe</span>
            <h2 className="section-title" id="team-title">Humanly</h2>
          </div>
          <p>Tecnologia pensada para pessoas reais.</p>
        </Reveal>

        <div className="team-grid">
          {team.map((member, index) => (
            <motion.article
              className="team-member"
              key={member.rm}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: index * 0.1, duration: 0.65 }}
              whileHover={{ y: -5 }}
            >
              <div className="member-portrait" aria-hidden="true">
                <span>{member.initials}</span>
                <i /><i />
              </div>
              <div className="member-info">
                <span className="mono">0{index + 1} / HUMANLY</span>
                <h3>{member.name}</h3>
                <p>Desenvolvimento do Projeto</p>
                <strong className="mono">{member.rm}</strong>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
