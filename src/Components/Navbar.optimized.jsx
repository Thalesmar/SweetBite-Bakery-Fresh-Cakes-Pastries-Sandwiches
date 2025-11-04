import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [dark, setDark] = useState(() => {
        const saved = localStorage.getItem('darkMode');
        return saved === 'true';
    });
    const [scrolled, setScrolled] = useState(false);

    const handleUserTheme = () => {
        const newDark = !dark;
        setDark(newDark);
        document.body.classList.toggle('dark', newDark);
        localStorage.setItem('darkMode', newDark);
    };

    useEffect(() => {
        document.body.classList.toggle('dark', dark);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <nav className='nav-container' aria-label="Main navigation">
        <div className='nav-logo'>
          <a href="#home" className='logo' aria-label="SweetBite Bakery home">
            SweetBite<span> Bakery</span>
          </a>
        </div>
        <ul role="menubar">
          <li role="none"><a href="#home" role="menuitem">Home</a></li>
          <li role="none"><a href="#product" role="menuitem">Products</a></li>
          <li role="none"><a href="#about" role="menuitem">About</a></li>
          <li role="none"><a href="#contact" role="menuitem">Contact</a></li>
        </ul>
        <button 
          onClick={handleUserTheme} 
          className="material-symbols-outlined"
          aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
          aria-pressed={dark}
        >
          moon_stars
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
