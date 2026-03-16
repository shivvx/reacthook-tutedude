import React from 'react';
import useFetch from '../../hooks/useFetch';
import './ProductList.css';

const ProductList = () => {
    const { data: products, loading, error } = useFetch('https://api.escuelajs.co/api/v1/products');

    if (loading) return <div className="status-container">Loading...</div>;
    if (error) return <div className="status-container">Error: {error}</div>;

    return (
        <div className="product-container">
            <header className="hero-section">
                <h1>My Product Store</h1>
            </header>
            <div className="product-grid">
                {products && products.map(item => (
                    <div key={item.id} className="product-card">
                        <div className="image-wrapper">
                            <img src={item.images[0]} alt={item.title} />
                        </div>
                        <div className="product-info">
                            <h3>{item.title}</h3>
                            <p>${item.price}</p>
                            <button className="add-to-cart">Buy Now</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
