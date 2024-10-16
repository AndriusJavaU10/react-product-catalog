import React, { useState } from 'react';
import './App.css';
import UpdateProduct from './UpadateProduct';
import ProductPage from './ProductPage';


function AppMain() {
    const [isHomePage, setIsHomePage] = useState(true); // Page switching state
    const [productId, setProductId] = useState(null); // Selected product
  
    const handleSetProduct = (productId) => {
      console.log('Selected product ID:', productId); // Checking if the product is selectable
      setProductId(productId); // Set selected product
    };
  
    const handlePageTransition = () => {
      console.log('Navigating to the product catalog page'); // Checking if the navigation works
      setIsHomePage(false); // Go to product page
      setProductId(null); // Ensure we're viewing the product list
    };

    const handleBackToProducts = () => {
        console.log('Navigating back to the product list'); // Checking if the navigation works
        setProductId(null); // Reset to show the product list view
    };

    return (
        <div className={`app-container ${isHomePage ? 'home-page' : 'catalog-page'}`}>
            {isHomePage ? (
                <div className="home-content">
                   {/* The H1 element acts as a button */}
                   <h1 
                    className="app-title"
                    onClick={handlePageTransition}
                    style={{ cursor: 'pointer' }} // Makes the label look like a link/button
                  >
                    Welcome to the Online Product Catalog
                  </h1>
                </div>
            ) : (
                <div className="catalog-content">
                    {/* Product list and category navigation */}
                    {!productId ? (
                        <>
                            <ProductPage onSelectProduct={handleSetProduct} />
                        </>
                    ) : (
                        <>
                            <UpdateProduct productId={productId} />
                            {/* "Back to Products" button */}
                            <button 
                                onClick={handleBackToProducts} 
                                className="btn btn-secondary back-to-products-btn"
                                style={{ marginTop: '20px' }}
                            >
                                Back to Products
                            </button>
                        </>
                    )}
                </div>
            )}
        </div>
    );
}

export default AppMain;
