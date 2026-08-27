import { navigation } from '../data/content'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-top">
        <a className="footer-brand" href="#inicio" aria-label="Voltar ao início">
          <span>HUMANLY</span><i>×</i><span>JOVI</span>
        </a>
        <nav aria-label="Links do rodapé">
          {navigation.slice(1).map((item) => <a href={item.href} key={item.href}>{item.label.replace('-Alvo', '')}</a>)}
        </nav>
      </div>
      <div className="container footer-bottom mono">
        <span>CHALLENGE FIAP 2026</span>
        <span>DESIGN PARA MOMENTOS REAIS</span>
        <a href="#inicio">VOLTAR AO TOPO ↑</a>
      </div>
    </footer>
  )
}
