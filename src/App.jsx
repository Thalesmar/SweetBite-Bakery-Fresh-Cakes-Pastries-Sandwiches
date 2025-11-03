import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Card from './Components/Card'
import ProductCategories from './Components/ProductCategories'
import About from './Components/About'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import './App.css'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <ProductCategories />
      <About />
      <Card />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
