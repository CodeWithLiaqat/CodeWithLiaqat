import './styles/components.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Certifications from './components/Certifications'
import Focus from './components/Focus'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Certifications />
        <Focus />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
