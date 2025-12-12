import React from 'react';
import { FaSearch, FaUser, FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <div className="logo">
                <Link to="/">BRAND NAME</Link>
            </div>

            <nav>
                <ul>
                    <li><Link to="/shop">Shop</Link></li>
                    <li><Link to="/new">New Arrivals</Link></li>
                    <li><Link to="/category">Category</Link></li>
                </ul>
            </nav>

            <div className="icons">
                <FaSearch className="icon-btn" />
                <FaUser className="icon-btn" />
                <FaShoppingCart className="icon-btn" />
            </div>
        </header>
    );
};

export default Header;