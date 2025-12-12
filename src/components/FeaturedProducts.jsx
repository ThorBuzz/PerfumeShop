import React, { useState } from 'react';
import { productsData } from '../data/products';

const FeaturedProducts = ({ onProductSelect }) => {
    const [activeIndex, setActiveIndex] = useState(1);

    const handleCardClick = (index) => {
        setActiveIndex(index);
    };

    const handleInfoClick = (index) => {
        setActiveIndex(index);
        onProductSelect(index);
    };

    return (
        <section className="featured">
            <h2>Featured Fragrances</h2>

            <div className="perfume-grid">
                {productsData.map((product, index) => (
                    <div
                        key={product.id}
                        className={`perfume-card ${index === activeIndex ? 'active' : 'side'}`}
                        onClick={() => handleCardClick(index)}
                    >
                        <img src={product.image} alt={product.name} />
                    </div>
                ))}
            </div>

            <div className="perfume-info">
                {productsData.map((product, index) => (
                    <div
                        key={product.id}
                        className={`info-card ${index === activeIndex ? 'active' : ''}`}
                        onClick={() => handleInfoClick(index)}
                    >
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <span className="price">{product.price}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FeaturedProducts;