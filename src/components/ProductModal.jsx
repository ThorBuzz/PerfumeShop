import React, { useState } from 'react';

const ProductModal = ({ product, isOpen, onClose, onAddToCart }) => {
    const [quantity, setQuantity] = useState(1);

    if (!isOpen || !product) return null;

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    const handleAddToCart = () => {
        onAddToCart(product, quantity);
    };

    return (
        <div className={`modal-overlay ${isOpen ? 'active' : ''}`}>
            <div className="modal-content">
                <button className="modal-close" onClick={onClose}>&times;</button>

                <div className="modal-body">
                    <div className="modal-image">
                        <img src={product.image} alt={product.name} />
                    </div>

                    <div className="modal-details">
                        <h2>{product.name}</h2>
                        <p className="modal-description">{product.description}</p>
                        <div className="modal-price">{product.price}</div>

                        <div className="quantity-selector">
                            <label>Quantity:</label>
                            <div className="quantity-controls">
                                <button className="qty-btn" onClick={decreaseQuantity}>-</button>
                                <input
                                    type="number"
                                    className="quantity-input"
                                    value={quantity}
                                    min="1"
                                    readOnly
                                />
                                <button className="qty-btn" onClick={increaseQuantity}>+</button>
                            </div>
                        </div>

                        <button className="add-to-cart-btn" onClick={handleAddToCart}>
                            <i className="fa-solid fa-cart-shopping"></i> Add to Cart
                        </button>

                        <div className="product-features">
                            <p><i className="fa-solid fa-check"></i> 100% Authentic</p>
                            <p><i className="fa-solid fa-check"></i> Free Shipping on orders over $50</p>
                            <p><i className="fa-solid fa-check"></i> 30-Day Returns</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductModal;