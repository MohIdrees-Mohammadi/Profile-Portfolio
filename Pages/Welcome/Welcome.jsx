import React from 'react'
import "./welcome.css"



import { Header, HeroSection, About, Services, Portfolio, Banner, Contact, Footer} from "../../Components/index"

const Welcome = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <About />
      <Services />
      <Portfolio />
      <Banner />
      <Contact />
      <Footer />
    </>
  )
}

export default Welcome
