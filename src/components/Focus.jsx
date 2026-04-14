import './Focus.css'

const items = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
    ),
    color: 'blue',
    heading: 'Python for Data Science',
    body: 'Continuously refining skills in Python — working with NumPy, Pandas, Matplotlib, and Seaborn to analyze complex datasets and build visualizations.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
    ),
    color: 'green',
    heading: 'Freelance Work',
    body: 'Actively working as a freelancer in Data Analysis and Web Design — delivering client projects on platforms and building a strong professional portfolio.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
    ),
    color: 'orange',
    heading: 'Seeking Opportunities',
    body: 'Actively seeking internships and entry-level roles (Remote/Hybrid) as a Data Analyst or Web Developer to apply skills in real-world, impactful projects.',
  },
]

export default function Focus() {
  return (
    <section id="focus" className="section focus">
      <div className="container">
        <div className="focus__header">
          <span className="section-label">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg>
            Current Focus
          </span>
          <h2 className="section-title">What I'm Working On</h2>
          <p className="section-desc">My current priorities and what I'm actively pursuing right now.</p>
        </div>

        <div className="focus__list">
          {items.map((item, i) => (
            <div key={i} className={`focus-item focus-item--${item.color}`}>
              <div className="focus-item__icon">{item.icon}</div>
              <div className="focus-item__body">
                <h3 className="focus-item__heading">{item.heading}</h3>
                <p className="focus-item__text">{item.body}</p>
              </div>
              <div className="focus-item__num">0{i + 1}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
