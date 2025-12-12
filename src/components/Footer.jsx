import React from 'react';
import {
    FaFacebook, FaInstagram, FaTwitter, FaPinterest,
    FaEnvelope, FaPhone, FaCcVisa, FaCcMastercard,
    FaCcPaypal, FaCcAmex
} from 'react-icons/fa';

const Footer = () => {
    return (
        <footer>
            <div className="footer-content">
                {/* Column 1: Brand */}
                <div className="footer-column">
                    <h3 className="footer-logo">BRAND NAME</h3>
                    <p>Discover luxury fragrances that define your signature scent.</p>
                    <div className="social-icons">
                        <a href="#"><FaFacebook /></a>
                        <a href="#"><FaInstagram /></a>
                        <a href="#"><FaTwitter /></a>
                        <a href="#"><FaPinterest /></a>
                    </div>
                </div>

                {/* Column 2: Quick Links */}
                <div className="footer-column">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/shop">Shop All</a></li>
                        <li><a href="/new">New Arrivals</a></li>
                        <li><a href="/best">Best Sellers</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>

                {/* Column 3: Customer Service */}
                <div className="footer-column">
                    <h4>Customer Service</h4>
                    <ul>
                        <li><a href="/track">Track Order</a></li>
                        <li><a href="/shipping">Shipping Info</a></li>
                        <li><a href="/returns">Returns & Exchanges</a></li>
                        <li><a href="/faq">FAQ</a></li>
                        <li><a href="/privacy">Privacy Policy</a></li>
                    </ul>
                </div>

                {/* Column 4: Newsletter */}
                <div className="footer-column">
                    <h4>Stay Connected</h4>
                    <p>Subscribe for exclusive offers and updates</p>
                    <form className="newsletter-form">
                        <input type="email" placeholder="Enter your email" required />
                        <button type="submit">Subscribe</button>
                    </form>
                    <div className="contact-info">
                        <p><FaEnvelope /> info@brandname.com</p>
                        <p><FaPhone /> +1 (555) 123-4567</p>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="footer-bottom">
                <p>&copy; 2024 Brand Name. All rights reserved.</p>
                <div className="payment-methods">
                    <FaCcVisa />
                    <FaCcMastercard />
                    <FaCcPaypal />
                    <FaCcAmex />
                </div>
            </div>
        </footer>
    );
};

export default Footer;