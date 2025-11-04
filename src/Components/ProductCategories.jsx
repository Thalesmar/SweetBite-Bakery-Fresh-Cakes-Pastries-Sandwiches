import React, { useState } from "react";
import cake from "../assets/icons/cake.png";
import sandwich from "../assets/icons/sandwich.png";
import cookies from "../assets/icons/cookie.png";
import bread from "../assets/icons/bread.png";


const ProductCategories = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const categories = [
        { img: cake, name: "Cake" },
    { img: sandwich, name: "Sandwich" },
    { img: cookies, name: "Cookies" },
    { img: bread, name: "Bread" },
  ];

  const handleCategoryClick = (index) => {
    setActiveCategory(activeCategory === index ? null : index);
  };

  const handleKeyPress = (e, index) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleCategoryClick(index);
    }
  };

  return (
    <section className="categories-section" aria-labelledby="categories-heading">
      <div className="categories-container">
        <div className="categories-header">
          <h2 id="categories-heading" className="section-title">Welcome To Our Store</h2>
          <p className="section-description">
            Explore our carefully curated selection of baked goods, each crafted with
            passion and the finest ingredients to bring joy to your table.
          </p>
        </div>

        <div className="categories-grid">
          {categories.map((item, index) => (
            <article
              key={index}
              className={`category-card ${activeCategory === index ? 'category-card--active' : ''}`}
              onClick={() => handleCategoryClick(index)}
              onKeyPress={(e) => handleKeyPress(e, index)}
              role="button"
              tabIndex={0}
              aria-label={item.name}
              aria-pressed={activeCategory === index}
            >
              <div className="category-card__icon">
                <img
                  src={item.img}
                  alt=""
                  role="presentation"
                  loading="lazy"
                  width="90"
                  height="90"
                />
              </div>
              <h3 className="category-card__name">{item.name}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
