import React, { useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import FeaturedProducts from '../components/FeaturedProducts';
import Categories from '../components/Categories';
import Footer from '../components/Footer';
import ProductModal from '../components/ProductModal';
import { productsData } from '../data/products';

const HomePage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductSelect = (index) => {
    setSelectedProduct(productsData[index]);
    setModalOpen(true);
  };

  const handleAddToCart = (product, quantity) => {
    alert(`Added ${quantity} x ${product.name} to cart!`);
    setModalOpen(false);
  };

  return (
    <>
      <Header />
      <Hero />
      <FeaturedProducts onProductSelect={handleProductSelect} />
      <Categories />
      <Footer />
      <ProductModal
        product={selectedProduct}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onAddToCart={handleAddToCart}
      />
    </>
  );
};

export default HomePage;