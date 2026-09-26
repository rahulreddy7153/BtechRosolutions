import { useEffect, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Process from './components/Process'
import Stats from './components/Stats'
import Testimonials from './components/Testimonials'
import Coverage from './components/Coverage'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import WhatsappButton from './components/WhatsappButton'

function getInitialTheme() {
  if (typeof window === 'undefined') return 'light'
  const stored = window.localStorage.getItem('btech-ro-theme')
  if (stored === 'light' || stored === 'dark') return stored
  return 'light'
}

export default function App() {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    window.localStorage.setItem('btech-ro-theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))

  return (
    <>
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Services />
        <Process />
        <Stats />
        <Testimonials />
        <Coverage />
        <ContactForm />
      </main>
      <Footer />
      <WhatsappButton />
    </>
  )
}
