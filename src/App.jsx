import Audience from './components/Audience'
import CameraDemo from './components/CameraDemo'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Gallery from './components/Gallery'
import Header from './components/Header'
import Hero from './components/Hero'
import Impact from './components/Impact'
import Problem from './components/Problem'
import Solution from './components/Solution'
import Team from './components/Team'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <Header />
      <main id="conteudo">
        <Hero />
        <Problem />
        <Solution />
        <CameraDemo />
        <Audience />
        <Gallery />
        <Impact />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
