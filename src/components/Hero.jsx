import React from 'react';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-text">
                <h1>Discover Your<br />Signature Scent</h1>
                <p>Luxury fragrances for every moment</p>
            </div>

            <img
                className="main-image"
                src="/Images/main_img.jpg"
                alt="Luxury perfume display"
            />
        </section>
    );
};

export default Hero;