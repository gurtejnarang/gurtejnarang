import Cursor from './components/Cursor'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Work from './components/Work'
import Resume from './components/Resume'
import Portfolio from './components/Portfolio'
import About from './components/About'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Work />
        <Resume />
        <Portfolio />
        <About />
      </main>
      <Footer />
    </>
  )
}
