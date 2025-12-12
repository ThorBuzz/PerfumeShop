import React from 'react';
import { Link } from 'react-router-dom';
import { categoriesData } from '../data/products';

const Categories = () => {
    return (
        <section className="categories">
            <h2>Shop by Category</h2>
            <div className="category-grid">
                {categoriesData.map((category) => (
                    <div key={category.id} className="category-card">
                        <img src={category.image} alt={category.title} />
                        <div className="category-overlay">
                            <h3>{category.title}</h3>
                            <p>{category.description}</p>
                            <Link to="/shop" className="shop-btn">Shop Now</Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Categories;