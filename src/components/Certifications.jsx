import './Certifications.css'

const certs = [
  {
    title: 'Data Analytics & Business Intelligence',
    issuer: 'DigiSkills.pk',
    icon: '📊',
    color: 'blue',
    desc: 'Comprehensive training in data analytics techniques, business intelligence tools, and reporting.',
  },
  {
    title: 'WordPress Development',
    issuer: 'DigiSkills.pk',
    icon: '🌐',
    color: 'green',
    desc: 'Professional WordPress development including Elementor Pro, themes, and WooCommerce stores.',
  },
  {
    title: 'Freelancing',
    issuer: 'DigiSkills.pk',
    icon: '💼',
    color: 'orange',
    desc: 'Strategies and best practices for building a successful freelance career in the digital space.',
  },
  {
    title: 'Digital Literacy & Basic IT',
    issuer: 'DigiSkills.pk',
    icon: '💻',
    color: 'teal',
    desc: 'Foundational IT skills covering digital literacy, essential software, and internet tools.',
  },
]

export default function Certifications() {
  return (
    <section id="certifications" className="section certs">
      <div className="container">
        <div className="certs__header">
          <span className="section-label">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            Certifications
          </span>
          <h2 className="section-title">Professional Training</h2>
          <p className="section-desc">Certified through DigiSkills.pk — Pakistan's premier government-backed digital skills training platform.</p>
        </div>

        <div className="certs__grid">
          {certs.map(c => (
            <div key={c.title} className={`cert-card cert-card--${c.color}`}>
              <div className="cert-card__icon">{c.icon}</div>
              <div className="cert-card__body">
                <span className="cert-card__issuer">{c.issuer}</span>
                <h3 className="cert-card__title">{c.title}</h3>
                <p className="cert-card__desc">{c.desc}</p>
              </div>
              <div className="cert-card__badge">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                Certified
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
