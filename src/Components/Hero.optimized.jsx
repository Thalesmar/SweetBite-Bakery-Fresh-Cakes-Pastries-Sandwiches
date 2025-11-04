import React, { useState } from 'react';

const Hero = () => {
    const images = [
      { webp: '/src/assets/cake-img.webp', fallback: '/src/assets/cake-img.png', alt: 'Delicious vanilla cake with frosting' },
      { webp: '/src/assets/cake-img-2.webp', fallback: '/src/assets/cake-img-2.jpg', alt: 'Chocolate layer cake' },
      { webp: '/src/assets/chocolate-cake.webp', fallback: '/src/assets/chocolate-cake.png', alt: 'Rich chocolate cake slice' },
      { webp: '/src/assets/cake-img-3.webp', fallback: '/src/assets/cake-img-3.jpg', alt: 'Strawberry decorated cake' },
      { webp: '/src/assets/cake-img-4.webp', fallback: '/src/assets/cake-img-4.jpg', alt: 'Birthday celebration cake' }
    ];
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

  return (
    <section id="home" className="hero-container">
      <div className="left-hero-content">
        <h1>The Perfect Baked Cake Everyday!</h1>
        <p>Discover our handcrafted cakes, pastries, and treats baked fresh daily with premium ingredients. Every bite is a celebration of flavor and quality.</p>

        <div className='hero-btns'>
          <button className="cta-button" aria-label="Learn more about our bakery">Read More</button>
          <button className='order-button' aria-label="Place an order">Order Now</button>
        </div>
      </div>

      <div className='right-hero-content'>
        <picture>
          <source srcSet={images[currentIndex].webp} type="image/webp" />
          <img 
            src={images[currentIndex].fallback} 
            alt={images[currentIndex].alt}
            loading="eager"
            fetchpriority="high"
            width="600"
            height="400"
          />
        </picture>
        <div className='dot-container' role="tablist" aria-label="Cake image slider">
            {images.map((image, slideIndex) => (
                <button 
                  key={slideIndex} 
                  className='dot-style' 
                  onClick={() => goToSlide(slideIndex)}
                  role="tab"
                  aria-selected={currentIndex === slideIndex}
                  aria-label={`View ${image.alt}`}
                >◉</button>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
