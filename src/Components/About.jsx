import React from 'react';
import chocolate_cake from '../assets/about-img.jpg'

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-image">
          <img
            src={chocolate_cake}
            alt="Fresh baked goods display at SweetBite Bakery"
            loading="lazy"
            width="500"
            height="400"
            className="about-img"
          />
        </div>

        <div className="about-content">
          <h2 className="section-title">About SweetBite Bakery</h2>
          <p className="about-text">
            At SweetBite Bakery, we believe every occasion deserves something special.
            For over a decade, we've been crafting artisanal baked goods that blend
            traditional recipes with contemporary flavors.
          </p>
          <p className="about-text">
            Our master bakers start early each morning, using only the finest locally-sourced
            ingredients to ensure every bite delivers exceptional quality and taste. From
            celebration cakes to daily bread, we bake with love and dedication.
          </p>
          <a href="#contact" className="btn btn--primary">
            Read More
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
