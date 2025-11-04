import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [dark, setDark] = useState(() => {
    const saved = window.localStorage.getItem('darkMode');
    return saved === 'true';
  });
  const [scrolled, setScrolled] = useState(false);

  const handleUserTheme = () => {
    const newDark = !dark;
    setDark(newDark);
    document.body.classList.toggle('dark', newDark);
    window.localStorage.setItem('darkMode', newDark);
  };

  useEffect(() => {
    document.body.classList.toggle('dark', dark);
  }, [dark]);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <nav className="nav-container" aria-label="Main navigation">
        <div className="nav-logo">
          <a href="#home" className="logo" aria-label="SweetBite Bakery home">
            SweetBite<span> Bakery</span>
          </a>
        </div>
        <ul className="nav-menu" role="list">
          <li><a href="#home">Home</a></li>
          <li><a href="#product">Products</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <button 
          onClick={handleUserTheme} 
          className="theme-toggle" 
          aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {dark ? '☀️' : '🌙'}
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
