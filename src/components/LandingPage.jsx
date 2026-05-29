import { useState } from 'react'

import CustomCursor   from './CustomCursor'
import Loader         from './Loader'
import Navbar         from './Navbar'
import Hero           from './Hero'
import Ticker         from './Ticker'
import Services       from './Services'
import Process        from './Process'
import Solutions      from './Solutions'
import Impact         from './Impact'
import CTABanner      from './CTABanner'
import FAQ            from './FAQ'
import Footer         from './Footer'
import ContactModal   from './ContactModal'

export default function LandingPage() {
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
