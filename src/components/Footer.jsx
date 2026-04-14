import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="footer__logo-dot" />
          <span className="footer__logo-text">LAK</span>
        </div>
        <p className="footer__copy">
          &copy; {year} Liaqat Ali Khan &mdash; Data Analyst &amp; Web Designer
        </p>
        <div className="footer__links">
          <a href="https://www.linkedin.com/in/liaqat-ali-khan-7a6ab4348" target="_blank" rel="noopener noreferrer" className="footer__link">LinkedIn</a>
          <a href="https://web.facebook.com/61580692606602/" target="_blank" rel="noopener noreferrer" className="footer__link">Facebook</a>
        </div>
      </div>
    </footer>
  )
}
