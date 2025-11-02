import React from 'react'
import cake_img from '../assets/cake-img.png'

const Hero = () => {
  return (
    <section id="home" className="hero-container">
      <div className="left-hero-content">
        <h1>The Perfect Backed Cake Everyday!</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum id perferendis, sapiente amet repudiandae eaque natus pariatur est alias dolor dolores quas sequi suscipit? Ullam quis assumenda consequatur accusantium perspiciatis!</p>
        <div className='hero-btns'>
            <button className="cta-button">Read More</button>
            <button className='order-button'>Order Now</button>
        </div>

    </div>
        <div className='right-hero-content'>
            <img src={cake_img} alt="cake-img" />
        </div>
    </section>
  )
}

export default Hero
