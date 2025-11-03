import React from 'react'
import { IoLocationSharp } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  return (
        <footer id="contact" className="footer-section">
            <div className="footer-container">
                <div className="footer-center">
                <h1 className='footer-logo'>SweetBite<span> Bakery</span></h1>

                <ul className="footer-columns">
                    <li>
                    <h4>Resources</h4>
                    <ul>
                        <li><a href="#">Contact us</a></li>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Email support</a></li>
                    </ul>
                    </li>

                    <li>
                    <h4>Menu</h4>
                    <ul>
                        <li><a href="#">Cup Cake</a></li>
                        <li><a href="#">Sandwich</a></li>
                        <li><a href="#">Cookies</a></li>
                        <li><a href="#">Bread</a></li>
                        <li><a href="#">Biscuits</a></li>
                    </ul>
                    </li>

                    <li>
                    <h4>Services</h4>
                    <ul>
                        <li><a href="#">Home Delivery</a></li>
                        <li><a href="#">Office Delivery</a></li>
                        <li><a href="#">Event</a></li>
                        <li><a href="#">Birthday</a></li>
                    </ul>
                    </li>

                    <li>
                    <h4>Contact</h4>
                    <ul>
                        <li className="contact-item"><IoLocationSharp /><a href="#">123 Baker Street, Paris</a></li>
                        <li className="contact-item"><BsFillTelephoneFill /><a href="tel:+33123456789">+33 1 23 45 67 89</a></li>
                        <li className="contact-item"><IoMdMail /><a href="mailto:hello@sweetbite.com">hello@sweetbite.com</a></li>
                    </ul>
                    </li>
                </ul>
                </div>

                <hr></hr>

                <div className="footer-bottom">© 2025 SweetBite Bakery. All rights reserved.</div>
            </div>
        </footer>
  )
}

export default Footer
