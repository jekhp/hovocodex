import { useState } from 'react'

import CustomCursor   from './components/CustomCursor'
import Loader         from './components/Loader'
import Navbar         from './components/Navbar'
import Hero           from './components/Hero'
import Ticker         from './components/Ticker'
import Services       from './components/Services'
import Process        from './components/Process'
import Solutions      from './components/Solutions'
import Impact         from './components/Impact'
import CTABanner      from './components/CTABanner'
import FAQ            from './components/FAQ'
import Footer         from './components/Footer'
import ContactModal   from './components/ContactModal'

export default function App() {
  const [loaded,       setLoaded]       = useState(false)
  const [contactOpen,  setContactOpen]  = useState(false)

  const openContact  = () => setContactOpen(true)
  const closeContact = () => setContactOpen(false)

  return (
    <>
      {/* Global cursor overlay */}
      <CustomCursor />

      {/* Boot loader — shows until loaded === true */}
      {!loaded && <Loader onComplete={() => setLoaded(true)} />}

      {/* Main site — fades in after loader */}
      <div
        style={{
          opacity:    loaded ? 1 : 0,
          transition: 'opacity 0.8s ease 0.2s',
        }}
      >
        <Navbar     onContact={openContact} />
        <Hero       onContact={openContact} />
        <Ticker />
        <Services />
        <Process />
        <Solutions />
        <Impact />
        <CTABanner  onContact={openContact} />
        <FAQ />
        <Footer     onContact={openContact} />

        {/* Contact modal (portal-style overlay) */}
        <ContactModal open={contactOpen} onClose={closeContact} />
      </div>
    </>
  )
}
