import React, { useState, useEffect } from 'react';
import {
    FaSearch, FaUser, FaShoppingCart, FaSprayCan,
    FaLayerGroup, FaVenus, FaMars, FaMusic, FaGift,
    FaStar, FaPercent, FaChevronLeft, FaChevronRight,
    FaTwitter, FaFacebook, FaLinkedin, FaInstagram,
    FaCheck, FaShoppingBag, FaFilter, FaSortAmountDown
} from 'react-icons/fa';

// Array of real perfume/bottle images from Unsplash
const perfumeImages = [
    'https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=400&fit=crop', // Perfume bottle 1
    'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400&h=400&fit=crop', // Perfume bottle 2
    'https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?w=400&h=400&fit=crop', // Perfume bottle 3
    'https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=400&h=400&fit=crop', // Perfume bottle 4
    'https://images.unsplash.com/photo-1557170334-a9632e77c6e4?w=400&h=400&fit=crop', // Perfume bottle 5
    'https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?w=400&h=400&fit=crop', // Perfume bottle 6
    'https://images.unsplash.com/photo-1594035910387-fea47794261f?w=400&h=400&fit=crop', // Perfume bottle 7
    'https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=400&h=400&fit=crop', // Perfume bottle 8
    'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=400&h=400&fit=crop', // Perfume bottle 9
    'https://images.unsplash.com/photo-1547887537-6158d64c35b3?w=400&h=400&fit=crop', // Perfume bottle 10
    'https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=400&h=400&fit=crop', // Perfume bottle 11
    'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop', // Perfume bottle 12
    'https://images.unsplash.com/photo-1548438294-1ad5d5f4f063?w=400&h=400&fit=crop', // Perfume bottle 13
    'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400&h=400&fit=crop', // Perfume bottle 14
    'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=400&h=400&fit=crop', // Perfume bottle 15
    'https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?w=400&h=400&fit=crop', // Perfume bottle 16
    'https://images.unsplash.com/photo-1547887537-6158d64c35b3?w=400&h=400&fit=crop', // Perfume bottle 17
    'https://images.unsplash.com/photo-1557170334-a9632e77c6e4?w=400&h=400&fit=crop', // Perfume bottle 18
    'https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=400&h=400&fit=crop', // Perfume bottle 19
    'https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?w=400&h=400&fit=crop', // Perfume bottle 20
];

// Perfume brands and fragrance notes
const perfumeBrands = ['Dior', 'Chanel', 'Versace', 'Gucci', 'Tommy Hilfiger', 'Calvin Klein', 'Armani', 'Yves Saint Laurent', 'Givenchy', 'Hermès', 'Bvlgari', 'Prada', 'Dolce & Gabbana', 'Burberry', 'Valentino', 'Lancôme', 'Estée Lauder', 'Jo Malone', 'Creed', 'Byredo'];
const fragranceNotes = ['Midnight Rose', 'Ocean Breeze', 'Golden Sunset', 'Royal Jasmine', 'Wild Forest', 'Lavender Dreams', 'Cherry Blossom', 'Black Leather', 'Citrus Splash', 'Rose Gold', 'Noir Intense', 'Velvet Musk', 'Amber Night', 'Sandalwood Spice', 'Vanilla Bloom', 'Oud Royal', 'Iris Silver', 'Neroli Portofino', 'Patchouli Noir', 'Bergamot Sunrise'];

// Generate random product data with DIFFERENT images
const generateProducts = () => {
    const products = [];

    for (let i = 1; i <= 24; i++) {
        const brand = perfumeBrands[Math.floor(Math.random() * perfumeBrands.length)];
        const fragrance = fragranceNotes[Math.floor(Math.random() * fragranceNotes.length)];
        const categories = ['womens', 'mens', 'unisex'];
        const category = categories[Math.floor(Math.random() * categories.length)];
        const badges = ['new', 'sale', null, null, null];
        const badge = badges[Math.floor(Math.random() * badges.length)];

        // Use DIFFERENT image for each product
        const imageIndex = (i - 1) % perfumeImages.length; // Cycle through images
        const imageUrl = `${perfumeImages[imageIndex]}&crop=faces&fit=crop&w=400&h=400&q=80`;

        // Create unique descriptions
        const descriptions = [
            `A captivating ${fragrance.toLowerCase()} fragrance by ${brand}. Features top notes of citrus and bergamot.`,
            `Luxurious ${fragrance.toLowerCase()} scent from ${brand}. Perfect for special occasions.`,
            `Premium ${fragrance.toLowerCase()} perfume by ${brand}. Long-lasting and elegant.`,
            `Signature ${fragrance.toLowerCase()} fragrance from ${brand}. Sophisticated and timeless.`,
            `Exclusive ${fragrance.toLowerCase()} scent by ${brand}. Created by master perfumers.`,
            `Artisanal ${fragrance.toLowerCase()} perfume from ${brand}. Handcrafted with care.`
        ];
        const description = descriptions[Math.floor(Math.random() * descriptions.length)];

        products.push({
            id: i,
            name: fragrance,
            brand: brand,
            category: category,
            price: Math.floor(Math.random() * 200) + 30,
            description: description,
            image: imageUrl,
            badge: badge,
            rating: (Math.random() * 0.5 + 4.5).toFixed(1), // 4.5 to 5.0
            reviewCount: Math.floor(Math.random() * 5000) + 100
        });
    }

    return products;
};

const ShopPage = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [sortOption, setSortOption] = useState('featured');
    const [activeTab, setActiveTab] = useState('all');
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');

    // Initialize products on component mount
    useEffect(() => {
        // Simulate API loading delay
        setTimeout(() => {
            const generatedProducts = generateProducts();
            setProducts(generatedProducts);
            setFilteredProducts(generatedProducts);
            setLoading(false);
        }, 500);
    }, []);

    // Filter and sort products
    useEffect(() => {
        let filtered = [...products];

        // Search filter
        if (searchQuery.trim()) {
            const query = searchQuery.toLowerCase();
            filtered = filtered.filter(product =>
                product.name.toLowerCase().includes(query) ||
                product.brand.toLowerCase().includes(query) ||
                product.description.toLowerCase().includes(query)
            );
        }

        // Category filter
        if (selectedCategories.length > 0) {
            filtered = filtered.filter(product =>
                selectedCategories.includes(product.category)
            );
        }

        // Tab filter
        if (activeTab !== 'all') {
            if (activeTab === 'women') {
                filtered = filtered.filter(p => p.category === 'womens');
            } else if (activeTab === 'men') {
                filtered = filtered.filter(p => p.category === 'mens');
            } else if (activeTab === 'unisex') {
                filtered = filtered.filter(p => p.category === 'unisex');
            }
        }

        // Sort products
        if (sortOption === 'price-low') {
            filtered.sort((a, b) => a.price - b.price);
        } else if (sortOption === 'price-high') {
            filtered.sort((a, b) => b.price - a.price);
        } else if (sortOption === 'name') {
            filtered.sort((a, b) => a.name.localeCompare(b.name));
        } else if (sortOption === 'rating') {
            filtered.sort((a, b) => b.rating - a.rating);
        }

        setFilteredProducts(filtered);
    }, [selectedCategories, activeTab, sortOption, products, searchQuery]);

    // Handle category selection
    const handleCategoryChange = (category) => {
        if (selectedCategories.includes(category)) {
            setSelectedCategories(selectedCategories.filter(c => c !== category));
        } else {
            setSelectedCategories([...selectedCategories, category]);
        }
    };

    // Handle tab click
    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    // Handle search
    const handleSearch = (e) => {
        e.preventDefault();
        // Search is already handled by useEffect
    };

    // Open product modal
    const openModal = (product) => {
        setSelectedProduct(product);
        setModalOpen(true);
        setQuantity(1);
    };

    // Close modal
    const closeModal = () => {
        setModalOpen(false);
        setSelectedProduct(null);
    };

    // Add to cart
    const handleAddToCart = () => {
        if (selectedProduct) {
            alert(`Added ${quantity} x ${selectedProduct.name} to cart!`);
            closeModal();
        }
    };

    // Clear all filters
    const clearFilters = () => {
        setSelectedCategories([]);
        setActiveTab('all');
        setSortOption('featured');
        setSearchQuery('');
    };

    return (
        <div className="shop-page">
            {/* Header */}
            <header className="shop-header">
                <div className="logo">
                    <FaSprayCan />
                    <span>PERFUMERY</span>
                </div>
                <nav>
                    <ul>
                        <li><a href="/brands">Brands</a></li>
                        <li><a href="/shop">Shop</a></li>
                        <li><a href="/blog">Blog</a></li>
                    </ul>
                </nav>
                <div className="header-icons">
                    <FaSearch />
                    <FaShoppingCart />
                    <FaUser />
                </div>
            </header>

            {/* Hero Section with Image */}
            <section
                className="shop-hero"
                style={{
                    backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.unsplash.com/photo-1548438294-1ad5d5f4f063?w=1600&h=600&fit=crop)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <div className="hero-content">
                    <h1>Discover Your Signature Scent</h1>
                    <p>Explore our curated collection of premium fragrances from around the world</p>
                    <form className="search-bar" onSubmit={handleSearch}>
                        <input
                            type="text"
                            placeholder="Search for perfumes, brands, or notes..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <button type="submit">
                            <FaSearch /> Search
                        </button>
                    </form>
                </div>
            </section>

            {/* Main Container */}
            <div className="shop-container">
                <div className="shop-layout">
                    {/* Sidebar */}
                    <aside className="sidebar">
                        <div className="sidebar-header">
                            <h3><FaFilter /> Filters</h3>
                            <button className="clear-filters" onClick={clearFilters}>
                                Clear All
                            </button>
                        </div>

                        <div className="filter-group">
                            <h4><FaLayerGroup /> Categories</h4>
                            <label>
                                <input
                                    type="checkbox"
                                    value="womens"
                                    checked={selectedCategories.includes('womens')}
                                    onChange={() => handleCategoryChange('womens')}
                                />
                                <FaVenus /> Women's Fragrances
                                <span className="filter-count">
                                    ({products.filter(p => p.category === 'womens').length})
                                </span>
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    value="mens"
                                    checked={selectedCategories.includes('mens')}
                                    onChange={() => handleCategoryChange('mens')}
                                />
                                <FaMars /> Men's Fragrances
                                <span className="filter-count">
                                    ({products.filter(p => p.category === 'mens').length})
                                </span>
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    value="unisex"
                                    checked={selectedCategories.includes('unisex')}
                                    onChange={() => handleCategoryChange('unisex')}
                                />
                                <FaMusic /> Unisex Scents
                                <span className="filter-count">
                                    ({products.filter(p => p.category === 'unisex').length})
                                </span>
                            </label>
                        </div>

                        <div className="filter-group">
                            <h4><FaGift /> Special Offers</h4>
                            <label>
                                <input type="checkbox" />
                                New Arrivals
                            </label>
                            <label>
                                <input type="checkbox" />
                                <FaStar /> Best Sellers
                            </label>
                            <label>
                                <input type="checkbox" />
                                <FaPercent /> On Sale
                            </label>
                        </div>

                        <div className="filter-group">
                            <h4>Price Range</h4>
                            <div className="price-range">
                                <input type="range" min="30" max="230" defaultValue="230" />
                                <div className="price-labels">
                                    <span>$30</span>
                                    <span>$230</span>
                                </div>
                            </div>
                        </div>
                    </aside>

                    {/* Products Section */}
                    <main className="products-section">
                        <div className="shop-header">
                            <div className="results-info">
                                <span className="results-count">
                                    {loading ? 'Loading...' : `Showing ${filteredProducts.length} of ${products.length} products`}
                                </span>
                                {selectedCategories.length > 0 || activeTab !== 'all' || searchQuery ? (
                                    <button className="clear-filters-btn" onClick={clearFilters}>
                                        Clear Filters
                                    </button>
                                ) : null}
                            </div>
                            <div className="sort-container">
                                <FaSortAmountDown />
                                <select
                                    className="sort-select"
                                    value={sortOption}
                                    onChange={(e) => setSortOption(e.target.value)}
                                >
                                    <option value="featured">Featured</option>
                                    <option value="name">Name: A-Z</option>
                                    <option value="price-low">Price: Low to High</option>
                                    <option value="price-high">Price: High to Low</option>
                                    <option value="rating">Rating: High to Low</option>
                                </select>
                            </div>
                        </div>

                        {/* Category Tabs */}
                        <div className="category-tabs">
                            <div
                                className={`category-tab ${activeTab === 'all' ? 'active' : ''}`}
                                onClick={() => handleTabClick('all')}
                            >
                                All Products
                            </div>
                            <div
                                className={`category-tab ${activeTab === 'women' ? 'active' : ''}`}
                                onClick={() => handleTabClick('women')}
                            >
                                <FaVenus /> Women
                            </div>
                            <div
                                className={`category-tab ${activeTab === 'men' ? 'active' : ''}`}
                                onClick={() => handleTabClick('men')}
                            >
                                <FaMars /> Men
                            </div>
                            <div
                                className={`category-tab ${activeTab === 'unisex' ? 'active' : ''}`}
                                onClick={() => handleTabClick('unisex')}
                            >
                                <FaMusic /> Unisex
                            </div>
                        </div>

                        {/* Products Grid */}
                        {loading ? (
                            <div className="loading-container">
                                <div className="spinner"></div>
                                <p>Loading fragrances...</p>
                            </div>
                        ) : filteredProducts.length === 0 ? (
                            <div className="no-results">
                                <FaSearch size={48} />
                                <h3>No products found</h3>
                                <p>Try adjusting your filters or search terms</p>
                                <button className="clear-filters-btn" onClick={clearFilters}>
                                    Clear All Filters
                                </button>
                            </div>
                        ) : (
                            <>
                                <div className="products-grid">
                                    {filteredProducts.map((product) => (
                                        <div key={product.id} className="product-card">
                                            <div className="product-image">
                                                {product.badge && (
                                                    <div className={`product-badge badge-${product.badge}`}>
                                                        {product.badge === 'new' ? 'New' : 'Sale'}
                                                    </div>
                                                )}
                                                <img
                                                    src={product.image}
                                                    alt={product.name}
                                                    loading="lazy"
                                                />
                                                <button
                                                    className="quick-view-btn"
                                                    onClick={() => openModal(product)}
                                                >
                                                    <FaSearch /> Quick View
                                                </button>
                                            </div>
                                            <div className="product-info">
                                                <div className="product-name">{product.name}</div>
                                                <div className="product-brand">{product.brand}</div>
                                                <div className="product-rating">
                                                    <span className="stars">{"★".repeat(5)}</span>
                                                    <span className="rating-value">{product.rating}</span>
                                                    <span className="review-count">({product.reviewCount})</span>
                                                </div>
                                                <div className="product-footer">
                                                    <div className="product-price">${product.price.toFixed(2)}</div>
                                                    <div className="product-buttons">
                                                        <button
                                                            className="btn btn-cart"
                                                            onClick={() => openModal(product)}
                                                        >
                                                            <FaShoppingCart /> Add to Cart
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Pagination */}
                                <div className="pagination">
                                    <button disabled><FaChevronLeft /> Previous</button>
                                    <button className="active">1</button>
                                    <button>2</button>
                                    <button>3</button>
                                    <button>...</button>
                                    <button>6</button>
                                    <button>Next <FaChevronRight /></button>
                                </div>
                            </>
                        )}
                    </main>
                </div>

                {/* Newsletter */}
                <section className="newsletter">
                    <h3>Ready to Get Our New Stuff?</h3>
                    <p>Subscribe to get exclusive offers and fragrance tips</p>
                    <div className="newsletter-form">
                        <input type="email" placeholder="Your Email" />
                        <button>Subscribe</button>
                    </div>
                </section>
            </div>

            {/* Footer */}
            <footer className="shop-footer">
                <div className="footer-content">
                    <div className="footer-section">
                        <h4>About</h4>
                        <ul>
                            <li><a href="/blog">Blog</a></li>
                            <li><a href="/team">Meet The Team</a></li>
                            <li><a href="/contact">Contact Us</a></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h4>Support</h4>
                        <ul>
                            <li><a href="/contact">Contact Us</a></li>
                            <li><a href="/shipping">Shipping</a></li>
                            <li><a href="/return">Return</a></li>
                            <li><a href="/faq">FAQ</a></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h4>Follow Us</h4>
                        <div className="social-icons">
                            <a href="#"><FaTwitter /></a>
                            <a href="#"><FaFacebook /></a>
                            <a href="#"><FaLinkedin /></a>
                            <a href="#"><FaInstagram /></a>
                        </div>
                    </div>
                    <div className="footer-section">
                        <h4>Newsletter</h4>
                        <p>Stay updated with our latest offers</p>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div>Copyright © 2023 Perfumery. All Rights Reserved</div>
                    <div className="footer-links">
                        <a href="/terms">Terms of Service</a>
                        <a href="/privacy">Privacy Policy</a>
                    </div>
                </div>
            </footer>

            {/* Product Modal */}
            {modalOpen && selectedProduct && (
                <div className="modal-overlay active" onClick={closeModal}>
                    <div className="modal-content-box" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={closeModal}>&times;</button>
                        <div className="modal-body">
                            <div className="modal-image-section">
                                <img src={selectedProduct.image} alt={selectedProduct.name} />
                            </div>
                            <div className="modal-details">
                                <h2>{selectedProduct.name}</h2>
                                <p className="modal-brand">{selectedProduct.brand}</p>
                                <p className="modal-description">{selectedProduct.description}</p>

                                <div className="modal-rating">
                                    <span className="stars">{"★".repeat(5)}</span>
                                    <span className="rating-value">{selectedProduct.rating}</span>
                                    <span className="review-count">({selectedProduct.reviewCount} reviews)</span>
                                </div>

                                <div className="modal-price">${selectedProduct.price.toFixed(2)}</div>

                                <div className="quantity-selector">
                                    <label>Quantity:</label>
                                    <div className="quantity-controls">
                                        <button
                                            className="qty-btn"
                                            onClick={() => setQuantity(q => q > 1 ? q - 1 : 1)}
                                        >
                                            -
                                        </button>
                                        <input
                                            type="number"
                                            id="quantity"
                                            value={quantity}
                                            min="1"
                                            readOnly
                                        />
                                        <button
                                            className="qty-btn"
                                            onClick={() => setQuantity(q => q + 1)}
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>

                                <button className="modal-add-cart" onClick={handleAddToCart}>
                                    <FaShoppingCart /> Add to Cart - ${(selectedProduct.price * quantity).toFixed(2)}
                                </button>

                                <div className="product-features">
                                    <p><FaCheck /> 100% Authentic Fragrance</p>
                                    <p><FaCheck /> Free Shipping on orders over $50</p>
                                    <p><FaCheck /> 30-Day Returns Guarantee</p>
                                    <p><FaCheck /> Expert Customer Support</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ShopPage;