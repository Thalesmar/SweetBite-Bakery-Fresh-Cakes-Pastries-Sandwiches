import React, { useState, useEffect, useCallback } from 'react';
import bakery_img_1 from '../assets/heroImages/hero-1.webp';
import bakery_img_2 from '../assets/heroImages/hero-2.avif';
import bakery_img_3 from '../assets/heroImages/hero-3.webp';
import bakery_img_4 from '../assets/heroImages/hero-4.webp';
import bakery_img_5 from '../assets/heroImages/hero.png';

const Hero = () => {
    const images = [bakery_img_1, bakery_img_2, bakery_img_3, bakery_img_4, bakery_img_5];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const goToSlide = useCallback((slideIndex) => {
    setCurrentIndex(slideIndex);
    setIsAutoPlaying(false);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, images.length]);

  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">The Perfect Baked Cake Everyday!</h1>
          <p className="hero-description">
            Discover our handcrafted cakes, pastries, and treats baked fresh daily
            with premium ingredients. Every bite is a celebration of flavor and quality.
          </p>

          <div className="hero-btns">
            <a href="#about" className="btn btn--primary" aria-label="Learn more about our bakery">
              Read More
            </a>
            <a href="#product" className="btn btn--secondary" aria-label="Browse our products">
              Order Now
            </a>
          </div>
        </div>

        <div className="hero-image">
          <img
            src={images[currentIndex]}
            alt="Delicious bakery cake"
            loading="eager"
            fetchpriority="high"
            width="700"
            height="500"
            className="hero-img"
          />

          <div className="hero-slider-dots" role="tablist" aria-label="Image carousel controls">
            {images.map((_, index) => (
              <button
                key={index}
                className={`hero-dot ${currentIndex === index ? 'hero-dot--active' : ''}`}
                onClick={() => goToSlide(index)}
                role="tab"
                aria-selected={currentIndex === index}
                aria-label={`View slide ${index + 1}`}
                type="button"
              >
                <span className="sr-only">Slide {index + 1}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
