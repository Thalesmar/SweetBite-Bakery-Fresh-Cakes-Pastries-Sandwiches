import React, { useState } from "react";
import cake from "../assets/cake.png";
import sandwich from "../assets/sandwich.png";
import cookies from "../assets/cookie.png";
import bread from "../assets/bread.png";

const ProductCategories = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const categories = [
    { img: cake, name: "Cake" },
    { img: sandwich, name: "Sandwich" },
    { img: cookies, name: "Cookies" },
    { img: bread, name: "Bread" },
  ];

  return (
    <div className="about-section">
      <div className="about-text">
        <h1>Welcome To Our Store</h1>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum.
        </p>
      </div>

      <div className="about-category">
        {categories.map((item, index) => (
          <div
            key={index}
            className={`category-item ${
              activeCategory === index ? "active" : ""
            }`}
            onClick={() => setActiveCategory(index)}
          >
            <img src={item.img} alt={item.name} />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCategories;
