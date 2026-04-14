import { useEffect, useRef } from 'react'
import './Skills.css'

const dataSkills = [
  { name: 'Python', level: 78 },
  { name: 'Pandas & NumPy', level: 75 },
  { name: 'Matplotlib & Seaborn', level: 70 },
  { name: 'Microsoft Excel', level: 85 },
  { name: 'Data Visualization', level: 72 },
  { name: 'Microsoft Word', level: 90 },
]

const webSkills = [
  { name: 'WordPress & Elementor Pro', level: 88 },
  { name: 'HTML & CSS', level: 80 },
  { name: 'JavaScript', level: 65 },
  { name: 'WooCommerce', level: 75 },
  { name: 'Responsive Design', level: 82 },
  { name: 'UI/UX Design', level: 70 },
]

function SkillBar({ name, level, delay }) {
  const barRef = useRef(null)

  useEffect(() => {
    const el = barRef.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          el.style.width = level + '%'
        }, delay)
        observer.disconnect()
      }
    }, { threshold: 0.2 })
    observer.observe(el.parentElement)
    return () => observer.disconnect()
  }, [level, delay])

  return (
    <div className="skill-item">
      <div className="skill-item__header">
        <span className="skill-item__name">{name}</span>
        <span className="skill-item__pct">{level}%</span>
      </div>
      <div className="skill-item__track">
        <div className="skill-item__bar" ref={barRef} />
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <div className="skills__header">
          <span className="section-label">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
            Technical Skills
          </span>
          <h2 className="section-title">What I Work With</h2>
          <p className="section-desc">A blend of data analytics and web development skills acquired through hands-on practice and professional training.</p>
        </div>

        <div className="skills__grid">
          <div className="card skills__card">
            <div className="skills__card-head">
              <div className="skills__card-icon skills__card-icon--blue">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
              </div>
              <div>
                <h3 className="skills__card-title">Data Science & Analytics</h3>
                <p className="skills__card-sub">Python ecosystem & analysis tools</p>
              </div>
            </div>
            <div className="skills__bars">
              {dataSkills.map((s, i) => <SkillBar key={s.name} {...s} delay={i * 80} />)}
            </div>
          </div>

          <div className="card skills__card">
            <div className="skills__card-head">
              <div className="skills__card-icon skills__card-icon--green">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>
              </div>
              <div>
                <h3 className="skills__card-title">Web Design & Development</h3>
                <p className="skills__card-sub">WordPress, HTML, CSS & more</p>
              </div>
            </div>
            <div className="skills__bars">
              {webSkills.map((s, i) => <SkillBar key={s.name} {...s} delay={i * 80} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
