import React from 'react'
import Navbar from './scenes/navbar/navbar'
import Social from './scenes/social/social'
import Hero from './scenes/Hero/Hero'
import About from './scenes/about/about'
import Projects from './scenes/projects/projects'
import Contact from './scenes/contact/contact'
import Footer from './scenes/footer/footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Social />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
