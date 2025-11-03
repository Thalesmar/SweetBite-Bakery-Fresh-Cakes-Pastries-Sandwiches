import React from 'react';
import product_1 from '../assets/productsImage/product_1.jpg';
import product_2 from '../assets/productsImage/product_2.jpg';
import product_3 from '../assets/productsImage/product_3.jpg';
import product_4 from '../assets/productsImage/product_4.jpg';
import './ProductCard.css';

const ProductCard = () => {
  const items = [
    { id: 1, title: 'Chocolate Delight Cake', price: '$35.00', rating: 4.9, img: product_1 },
    { id: 2, title: 'Strawberry Dream Cake', price: '$42.00', rating: 4.8, img: product_2 },
    { id: 3, title: 'Vanilla Classic Cake', price: '$38.00', rating: 4.7, img: product_3 },
    { id: 4, title: 'Red Velvet Special', price: '$45.00', rating: 4.9, img: product_4 },
  ];

  return (
    // title and texts
    <section className="product-section" id="product">
      <div className="product-container">
        <header className="product-header">
          <h2>Featured Products</h2>
          <p>Showing {items.length} items</p>
        </header>

        <div className="product-grid">
          {items.map((product) => (
            <article key={product.id} className="product-card">
              <div className="product-img">
                <img src={product.img} alt={product.title} />
              </div>

              <div className="product-info">
                <div className="product-top">
                  <div>
                    <h3>{product.title}</h3>
                    <p className="price">{product.price}</p>
                  </div>
                  <div className="rating">★ {product.rating}</div>
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
