
import React, { useState } from 'react';
import './App.css';
import UpdateProduct from './UpadateProduct';
import ProductPage from './ProductPage';
import { Link } from 'react-router-dom'; // This import is required to create SPA references


function AppProduct() {
  const [isHomePage, setIsHomePage] = useState(true); // Page switching state
  const [productId, setProductId] = useState(null); // Selected product

  const handleSetProduct = (productId) => { // Page switching state
    console.log('Selected product ID:', productId); // Checking if the product is selectable
    setProductId(productId); // Set selected product
  };

  const handlePageTransition = () => {
    console.log('Navigating to the product catalog page'); // Checking if the navigation works
    setIsHomePage(false); // Go to product page
  };

  return (
    <div className={`app-container ${isHomePage ? 'home-page' : 'catalog-page'}`}>
      {isHomePage ? (
        <div className="home-content" onClick={handlePageTransition}>
          <h1 className="app-title">Welcome to the Online Product Catalog</h1>
          
          <div className="auth-links">
            <Link to="/login" className="btn btn-primary mr-2">Login</Link>
            <Link to="/register" className="btn btn-secondary">Sign Up</Link>
          </div>
          
        </div>
      ) : (
        <div className="catalog-content">
          {/* Product list and category navigation */}
          <ProductPage onSelectProduct={handleSetProduct} />
          {/* Update component */}
          {productId && (
            <UpdateProduct productId={productId} />
          )}
        {/* "Back to Home" button */}
        <button 
            onClick={() => setIsHomePage(true)} 
            className="btn btn-secondary"
            style={{ marginTop: '20px' }}
          >
            Back to Home
          </button>

        </div>
      )}
    </div>


  );
}

export default AppProduct;
