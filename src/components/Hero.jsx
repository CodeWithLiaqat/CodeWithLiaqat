import { useEffect, useRef } from 'react'
import './Hero.css'

export default function Hero() {
  const heroRef = useRef(null)

  useEffect(() => {
    const el = heroRef.current
    if (!el) return
    el.classList.add('hero--visible')
  }, [])

  return (
    <section id="hero" className="hero" ref={heroRef}>
      <div className="hero__bg-grid" aria-hidden="true" />
      <div className="hero__bg-blob hero__bg-blob--1" aria-hidden="true" />
      <div className="hero__bg-blob hero__bg-blob--2" aria-hidden="true" />

      <div className="container hero__inner">
        <div className="hero__content">
          <div className="hero__badge">
            <span className="hero__badge-dot" />
            Available for internships & remote work
          </div>

          <h1 className="hero__title">
            Hi, I'm <span className="hero__name">Liaqat Ali Khan</span>
          </h1>

          <p className="hero__role">
            Data Science Student & Aspiring Data Analyst
          </p>

          <p className="hero__bio">
            BS Data Science student at Virtual University of Pakistan, passionate about uncovering insights from data and building engaging digital experiences. Bridging the gap between data analysis and web design.
          </p>

          <div className="hero__tags">
            <span className="tag">Python</span>
            <span className="tag">Data Analysis</span>
            <span className="tag tag-green">WordPress</span>
            <span className="tag tag-orange">Freelancer</span>
          </div>

          <div className="hero__actions">
            <a href="#contact" className="btn btn-primary" onClick={e => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}>
              Get In Touch
            </a>
            <a href="#skills" className="btn btn-outline" onClick={e => { e.preventDefault(); document.querySelector('#skills')?.scrollIntoView({ behavior: 'smooth' }) }}>
              View Skills
            </a>
          </div>

          <div className="hero__social">
            <a href="https://www.linkedin.com/in/liaqat-ali-khan-7a6ab4348" target="_blank" rel="noopener noreferrer" className="hero__social-link">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              LinkedIn
            </a>
            <a href="https://web.facebook.com/61580692606602/" target="_blank" rel="noopener noreferrer" className="hero__social-link">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              Facebook
            </a>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__avatar-wrap">
            <img
              src="https://images.pexels.com/photos/5965592/pexels-photo-5965592.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Data Science professional"
              className="hero__avatar"
            />
            <div className="hero__avatar-ring" aria-hidden="true" />
          </div>

          <div className="hero__stat hero__stat--1">
            <span className="hero__stat-num">2+</span>
            <span className="hero__stat-label">Years Learning</span>
          </div>
          <div className="hero__stat hero__stat--2">
            <span className="hero__stat-num">4</span>
            <span className="hero__stat-label">Certifications</span>
          </div>
        </div>
      </div>

      <div className="hero__scroll-hint" aria-hidden="true">
        <span />
      </div>
    </section>
  )
}
