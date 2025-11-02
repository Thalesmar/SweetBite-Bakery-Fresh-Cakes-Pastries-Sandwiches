import React from 'react'
import chocolate_cake from '../assets/chocolate-cake.png'
const about = () => {
  return (
    <section className='Product-Categories'>
        <div className='left-Product-Categories'>
            <img src={chocolate_cake} alt="Product Categories img" loading="lazy" />
        </div>
        <div className='right-Product-Categories'>
            <h2>About Sara.co</h2>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that.</p>
            <p>It has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here.</p>
            <button className="category-button">Read More</button>
        </div>
    </section>
  )
}

export default about
