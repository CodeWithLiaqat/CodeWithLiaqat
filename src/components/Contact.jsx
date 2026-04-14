import './Contact.css'

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="contact__inner">
          <div className="contact__left">
            <span className="section-label">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
              Contact
            </span>
            <h2 className="section-title">Let's Work Together</h2>
            <p className="contact__desc">
              I'm actively seeking internships and remote/hybrid opportunities in Data Analysis and Web Design. If you have a project or role that fits, I'd love to connect.
            </p>

            <div className="contact__links">
              <a
                href="https://www.linkedin.com/in/liaqat-ali-khan-7a6ab4348"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <div className="contact-link__icon contact-link__icon--blue">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                </div>
                <div className="contact-link__body">
                  <span className="contact-link__platform">LinkedIn</span>
                  <span className="contact-link__handle">liaqat-ali-khan-7a6ab4348</span>
                </div>
                <svg className="contact-link__arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
              </a>

              <a
                href="https://web.facebook.com/61580692606602/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <div className="contact-link__icon contact-link__icon--fb">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </div>
                <div className="contact-link__body">
                  <span className="contact-link__platform">Facebook</span>
                  <span className="contact-link__handle">Professional Page</span>
                </div>
                <svg className="contact-link__arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
              </a>
            </div>
          </div>

          <div className="contact__right">
            <div className="contact__availability">
              <div className="availability__dot" />
              <div>
                <p className="availability__title">Open to Opportunities</p>
                <p className="availability__sub">Internships · Remote · Hybrid</p>
              </div>
            </div>

            <div className="contact__highlights">
              <div className="highlight">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                Data Analyst positions
              </div>
              <div className="highlight">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                Web Design & Development
              </div>
              <div className="highlight">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                Freelance projects
              </div>
              <div className="highlight">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                Python & Data projects
              </div>
            </div>

            <p className="contact__note">
              Based in Pakistan · Available for remote collaboration worldwide
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
