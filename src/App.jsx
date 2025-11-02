import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Footer from './Components/Footer'
import ProductCard from './Components/ProductCard'
import ProductCategories from './Components/ProductCategories'
import About from './Components/About'
import './App.css'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <ProductCategories />
      <About />
      <ProductCard />
      <Footer />
    </div>
  )
}

export default App
