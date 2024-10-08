import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Program from './Components/Program/Program'
import Tittle from './Components/Tittle/Tittle'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <>
     <Navbar/>
     <Hero/>
     <div className="container">
      <Tittle subTitle = 'Our Program' Title= 'What We Offer'/>
     <Program/>
      <About/>
      <Tittle subTitle = 'Gallery' Title= ' Campus Photos'/>
      <Campus/>
      <Tittle subTitle = 'TESTIMONIALS' Title= ' What Student Says'/>
      <Testimonials/>
      <Tittle subTitle = 'CONTACT' Title= ' Get in Touch'/>
      <Contact/>
      <Footer/>
     </div>
     
    </>
  )
}

export default App