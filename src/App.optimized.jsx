import React, { lazy, Suspense } from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import './App.css';

const ProductCategories = lazy(() => import('./Components/ProductCategories'));
const About = lazy(() => import('./Components/About'));
const Card = lazy(() => import('./Components/Card'));
const Contact = lazy(() => import('./Components/Contact'));
const Footer = lazy(() => import('./Components/Footer'));

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Suspense fallback={<div style={{ minHeight: '200px' }} />}>
        <ProductCategories />
        <About />
        <Card />
        <Contact />
        <Footer />
      </Suspense>
    </div>
  );
};

export default App;
