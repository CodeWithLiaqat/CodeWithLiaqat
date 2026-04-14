import { useState, useEffect } from 'react'
import './Navbar.css'

const links = [
  { label: 'About', href: '#hero' },
  { label: 'Skills', href: '#skills' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Focus', href: '#focus' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleLink = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <a href="#hero" className="navbar__logo" onClick={e => handleLink(e, '#hero')}>
          <span className="navbar__logo-dot" />
          LAK
        </a>

        <nav className={`navbar__nav${menuOpen ? ' navbar__nav--open' : ''}`}>
          {links.map(l => (
            <a key={l.label} href={l.href} className="navbar__link" onClick={e => handleLink(e, l.href)}>
              {l.label}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary navbar__cta" onClick={e => handleLink(e, '#contact')}>
            Hire Me
          </a>
        </nav>

        <button className="navbar__burger" onClick={() => setMenuOpen(o => !o)} aria-label="Toggle menu">
          <span className={`burger-line${menuOpen ? ' open' : ''}`} />
          <span className={`burger-line${menuOpen ? ' open' : ''}`} />
          <span className={`burger-line${menuOpen ? ' open' : ''}`} />
        </button>
      </div>
    </header>
  )
}
