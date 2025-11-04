import React, { useState } from 'react';
import product_1 from '../assets/productsImage/product_1.webp';
import product_2 from '../assets/productsImage/product_2.jpg';
import product_3 from '../assets/productsImage/product_3.webp';
import product_4 from '../assets/productsImage/product_4.webp';
import './ProductCard.css';

const ProductCard = () => {
  const products = [
    { id: 1, title: 'Chocolate Delight Cake', price: 35.00, rating: 4.9, img: product_1, alt: 'Chocolate Delight Cake' },
    { id: 2, title: 'Strawberry Dream Cake', price: 42.00, rating: 4.8, img: product_2, alt: 'Strawberry Dream Cake' },
    { id: 3, title: 'Vanilla Classic Cake', price: 38.00, rating: 4.7, img: product_3, alt: 'Vanilla Classic Cake' },
    { id: 4, title: 'Red Velvet Special', price: 45.00, rating: 4.9, img: product_4, alt: 'Red Velvet Special' },
  ];

  const [imageLoaded, setImageLoaded] = useState({});

  const handleImageLoad = (id) => {
    setImageLoaded(prev => ({ ...prev, [id]: true }));
  };

  return (
    <section className="product-section" id="product">
      <div className="product-container">
        <header className="product-header">
          <h2 className="section-title">Featured Products</h2>
          <p className="product-count" aria-live="polite">
            Showing {products.length} items
          </p>
        </header>

        <div className="product-grid">
          {products.map((product) => (
            <article
              key={product.id}
              className="product-card"
              itemScope
              itemType="https://schema.org/Product"
            >
              <div className="product-card__image">
                <img
                  src={product.img}
                  alt={product.alt}
                  loading="lazy"
                  width="300"
                  height="200"
                  onLoad={() => handleImageLoad(product.id)}
                  className={imageLoaded[product.id] ? 'loaded' : ''}
                  itemProp="image"
                />
              </div>

              <div className="product-card__content">
                <div className="product-card__header">
                  <div className="product-card__info">
                    <h3 className="product-card__title" itemProp="name">
                      {product.title}
                    </h3>
                    <p className="product-card__price" itemProp="offers" itemScope itemType="https://schema.org/Offer">
                      <span itemProp="priceCurrency" content="USD">$</span>
                      <span itemProp="price" content={product.price}>
                        {product.price.toFixed(2)}
                      </span>
                    </p>
                  </div>
                  <div
                    className="product-card__rating"
                    role="img"
                    aria-label={`Rated ${product.rating} out of 5 stars`}
                    itemProp="aggregateRating"
                    itemScope
                    itemType="https://schema.org/AggregateRating"
                  >
                    <span aria-hidden="true">★</span>
                    <span itemProp="ratingValue">{product.rating}</span>
                    <meta itemProp="bestRating" content="5" />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <footer className="product-footer">
          <p>You're always welcome to visit our store anytime!</p>
        </footer>
      </div>
    </section>
  );
};

export default ProductCard;
