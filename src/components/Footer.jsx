import { IconPhone, IconMail, IconPin } from './icons'
import logoIcon from '../assets/logo-icon.png'
import WaveDivider from './WaveDivider'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="site-footer">
      <WaveDivider className="footer-wave" fill="var(--blue-900)" />
      <div className="container footer-top">
        <div className="footer-brand">
          <a href="#top" className="logo">
            <img src={logoIcon} alt="" className="logo-icon" />
            <span className="logo-word">BTech <span className="accent-dot">RO Solutions</span></span>
          </a>
          <p>Certified RO installation, repair and maintenance &mdash; keeping the water safe in Mansarovar, Jaipur for 5+ years.</p>
          <div className="footer-social">
            <a href="#" aria-label="Facebook">f</a>
            <a href="#" aria-label="Instagram">ig</a>
            <a href="#" aria-label="X / Twitter">x</a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            <li><a href="#services">New Installation</a></li>
            <li><a href="#services">Repair &amp; Troubleshooting</a></li>
            <li><a href="#services">Filter Replacement</a></li>
            <li><a href="#services">Emergency Service</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li><a href="#process">How It Works</a></li>
            <li><a href="#coverage">Service Area</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <ul>
            <li><span><IconPhone width={16} height={16} /> 7976574641</span></li>
            <li><span><IconMail width={16} height={16} /> btechrosolutions@gmail.com</span></li>
            <li><span><IconPin width={16} height={16} /> Mansarovar, Jaipur</span></li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>&copy; {year} BTech RO Solutions. All rights reserved.</span>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  )
}
