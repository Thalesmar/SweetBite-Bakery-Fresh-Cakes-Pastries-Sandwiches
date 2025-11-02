import React, { useState } from 'react';
import bakery_img_1 from '../assets/cake-img.png';
import bakery_img_2 from '../assets/cake-img-2.jpg';
import bakery_img_3 from '../assets/chocolate-cake.png';
import bakery_img_4 from '../assets/cake-img-3.jpg';
import bakery_img_5 from '../assets/cake-img-4.jpg';


const Hero = () => {
    const images = [bakery_img_1, bakery_img_2, bakery_img_3, bakery_img_4, bakery_img_5];
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToSlide = (slideIndex) =>{
        setCurrentIndex(slideIndex);
    };
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
        <img src={images[currentIndex]} alt="cake slider" />
        <div className='dot-container'>
            {images.map((image, slideIndex) => (
                <div key={slideIndex} className='dot-style' onClick={() => goToSlide(slideIndex)}>◉</div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
