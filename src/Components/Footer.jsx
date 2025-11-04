import React from 'react';
import { IoLocationSharp } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section" role="contentinfo">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <h2 className="footer-logo">
              <a href="#home" aria-label="SweetBite Bakery home">
                SweetBite<span> Bakery</span>
              </a>
            </h2>
            <p className="footer-tagline">
              Baking happiness since 2010
            </p>
          </div>

          <nav className="footer-nav" aria-label="Footer navigation">
            <div className="footer-column">
              <h3 className="footer-column__title">Resources</h3>
              <ul className="footer-column__list">
                <li><a href="#contact">Contact us</a></li>
                <li><a href="#faq">FAQ</a></li>
                <li><a href="mailto:hello@sweetbite.com">Email support</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h3 className="footer-column__title">Menu</h3>
              <ul className="footer-column__list">
                <li><a href="#product">Cup Cake</a></li>
                <li><a href="#product">Sandwich</a></li>
                <li><a href="#product">Cookies</a></li>
                <li><a href="#product">Bread</a></li>
                <li><a href="#product">Biscuits</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h3 className="footer-column__title">Services</h3>
              <ul className="footer-column__list">
                <li><a href="#contact">Home Delivery</a></li>
                <li><a href="#contact">Office Delivery</a></li>
                <li><a href="#contact">Event Catering</a></li>
                <li><a href="#contact">Birthday Cakes</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h3 className="footer-column__title">Contact</h3>
              <ul className="footer-column__list footer-column__list--contact">
                <li className="footer-contact-item">
                  <IoLocationSharp aria-hidden="true" />
                  <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
                    123 Baker Street, Paris
                  </a>
                </li>
                <li className="footer-contact-item">
                  <BsFillTelephoneFill aria-hidden="true" />
                  <a href="tel:+33123456789">+33 1 23 45 67 89</a>
                </li>
                <li className="footer-contact-item">
                  <IoMdMail aria-hidden="true" />
                  <a href="mailto:hello@sweetbite.com">hello@sweetbite.com</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <div className="footer-divider" role="presentation"></div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} SweetBite Bakery. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
