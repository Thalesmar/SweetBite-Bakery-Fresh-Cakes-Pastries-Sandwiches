import React, { useState } from "react";

const ProductCategories = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const categories = [
    { img: "/src/assets/cake.webp", fallback: "/src/assets/cake.png", name: "Cake", desc: "Custom cakes for every occasion" },
    { img: "/src/assets/sandwich.webp", fallback: "/src/assets/sandwich.png", name: "Sandwich", desc: "Fresh sandwiches daily" },
    { img: "/src/assets/cookie.webp", fallback: "/src/assets/cookie.png", name: "Cookies", desc: "Homemade cookie varieties" },
    { img: "/src/assets/bread.webp", fallback: "/src/assets/bread.png", name: "Bread", desc: "Artisan breads baked fresh" },
  ];

  return (
    <section className="about-section" aria-labelledby="store-heading">
      <div className="about-text">
        <h2 id="store-heading">Welcome To Our Store</h2>
        <p>
          Explore our carefully curated selection of baked goods, each crafted with passion and the finest ingredients to bring joy to your table.
        </p>
      </div>

      <div className="about-category">
        {categories.map((item, index) => (
          <article
            key={index}
            className={`category-item ${activeCategory === index ? "active" : ""}`}
            onClick={() => setActiveCategory(index)}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => e.key === 'Enter' && setActiveCategory(index)}
            aria-label={`View ${item.name} products`}
          >
            <picture>
              <source srcSet={item.img} type="image/webp" />
              <img 
                src={item.fallback} 
                alt={`${item.name} icon`} 
                loading="lazy"
                width="90"
                height="90"
              />
            </picture>
            <p>{item.name}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ProductCategories;
