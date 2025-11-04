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

  //sidebar logic

    const showSideBar = (e) => {
        e.preventDefault();
        const sideBar = document.querySelector('.side-bar')
        sideBar.classList.toggle('active');
    };
  const handleLinkClick = (e) => {
    e.stopPropagation();
    const sideBar = document.querySelector('.side-bar')
    sideBar.classList.remove('active');
  }

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <nav className="nav-container" aria-label="Main navigation">
        <div className="nav-logo">
          <a href="#home" className="logo" aria-label="SweetBite Bakery home">
            SweetBite<span> Bakery</span>
          </a>
        </div>
        <ul className="side-bar" role="list">
            <li onClick={handleLinkClick}>
              <svg className='sidebar-closeBtn'  xmlns="http://www.w3.org/2000/svg" height="26px" viewBox="0 -960 960 960" width="26px"  style={{cursor: 'pointer'}}>
                <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
              </svg>
            </li>
            <li><a href="#home">Home</a></li>
            <li><a href="#product">Products</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>

        <ul className="nav-menu" role="list">
          <li className='hideOnMobile'><a href="#home">Home</a></li>
          <li className='hideOnMobile'><a href="#product">Products</a></li>
          <li className='hideOnMobile'><a href="#about">About</a></li>
          <li className='hideOnMobile'><a href="#contact">Contact</a></li>
          <li onClick={showSideBar} className='sidebar-openBtn'>
            <svg xmlns="http://www.w3.org/2000/svg" height="26px" viewBox="0 -960 960 960" width="26px" style={{cursor: 'pointer'}}>
              <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>
            </svg>
          </li>
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
