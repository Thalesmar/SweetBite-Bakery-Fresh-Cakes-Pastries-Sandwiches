import React, { useState, useEffect } from 'react'
import '../App.css'

const Navbar = () => {
    const [dark, setDark] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const handleUserTheme = () => {
        setDark(!dark);
        document.body.classList.toggle('dark');
    }

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <nav className='nav-container'>
        <div className='nav-logo'>
          <p className='logo'>SweetBite<span> Bakery</span></p>
        </div>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#product">Products</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <span onClick={handleUserTheme} className="material-symbols-outlined">moon_stars</span>
      </nav>

    </header>
  )
}

export default Navbar
