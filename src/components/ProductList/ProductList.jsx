import React from 'react';
import useFetch from '../../hooks/useFetch';
import './ProductList.css';
const ProductList = () => {
  const { data: products, loading, error } = useFetch('https://api.escuelajs.co/api/v1/products');
  if (loading) return (
    <div className="status-container">
      <div className="spinner"></div>
      <p>Loading premium products...</p>
    </div>
  );
  if (error) return (
    <div className="status-container error">
      <p>Error: {error}</p>
      <button onClick={() => window.location.reload()} className="retry-btn">Retry</button>
    </div>
  );
  return (
    <div className="product-container">
      <header className="hero-section">
        <h1>Premium Essentials</h1>
        <p>Explore our curated collection of high-quality products.</p>
      </header>
      <div className="product-grid">
        {Array.isArray(products) && products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="image-wrapper">
              <img src={product.images[0]} alt={product.title} loading="lazy" />
              <div className="badge">{product.category?.name || 'New'}</div>
            </div>
            <div className="product-info">
              <h3>{product.title}</h3>
              <p className="description">{product.description.substring(0, 100)}...</p>
              <div className="footer">
                <span className="price">${product.price}</span>
                <button className="add-to-cart">Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ProductList;
