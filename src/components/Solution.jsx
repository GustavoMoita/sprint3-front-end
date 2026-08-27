import Reveal from './Reveal'

const pillars = [
  { number: '01', title: 'Contexto', copy: 'A experiência se adapta ao momento e apresenta escolhas relevantes sem exigir uma busca.' },
  { number: '02', title: 'Rapidez', copy: 'As principais funções ficam acessíveis quando realmente importam, no ritmo de quem registra.' },
  { number: '03', title: 'Simplicidade', copy: 'Menos configurações desnecessárias entre o usuário e aquilo que ele quer guardar.' },
]

export default function Solution() {
  return (
    <section className="solution section" id="solucao" aria-labelledby="solution-title">
      <div className="container solution-layout">
        <Reveal className="solution-heading">
          <span className="eyebrow">A solução</span>
          <h2 className="section-title" id="solution-title">A câmera entende o momento.</h2>
          <p className="section-copy">
            Nossa proposta reduz a procura manual por modos e devolve clareza à interface. O contexto organiza a experiência — o usuário continua vivendo.
          </p>
        </Reveal>

        <div className="solution-orbit" aria-hidden="true">
          <span className="solution-core">AGORA</span>
          <i /><i /><i />
        </div>

        <div className="pillar-grid">
          {pillars.map((pillar, index) => (
            <Reveal as="article" className={`pillar pillar-${index + 1}`} delay={index * 0.1} key={pillar.title}>
              <span className="pillar-number mono">{pillar.number}</span>
              <div>
                <h3>{pillar.title}</h3>
                <p>{pillar.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
