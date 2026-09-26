import { useEffect, useState } from 'react'
import { IconPhone, IconSun, IconMoon, IconMenu, IconX } from './icons'
import logoIcon from '../assets/logo-icon.png'

const NAV_LINKS = [
  { href: '#services', label: 'Services' },
  { href: '#process', label: 'How It Works' },
  { href: '#coverage', label: 'Service Areas' },
  { href: '#contact', label: 'Contact' },
]

export default function Header({ theme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-inner">
        <a href="#top" className="logo">
          <img src={logoIcon} alt="" className="logo-icon" />
          <span className="logo-word">BTech <span className="accent-dot">RO Solutions</span></span>
        </a>

        <nav className="main-nav" aria-label="Primary">
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.href}><a href={link.href}>{link.label}</a></li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          <a className="call-cta" href="tel:7976574641">
            <IconPhone /> <span className="call-cta-text">7976574641</span>
          </a>
          <button
            className="theme-toggle"
            onClick={onToggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <IconSun /> : <IconMoon />}
          </button>
          <button
            className="nav-toggle"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <IconX /> : <IconMenu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="container mobile-nav">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</a>
          ))}
        </div>
      )}
    </header>
  )
}
