import React, { useState } from 'react';
import './App.css';
import UpdateProduct from './UpadateProduct';
import ProductPage from './ProductPage';


function AppMain() {
    
    const [productId, setProductId] = useState(null); // Selected product
  
    const handleSetProduct = (productId) => {
      console.log('Selected product ID:', productId); // Checking if the product is selectable
      setProductId(productId); // Set selected product
    };
  
    
    const handleBackToProducts = () => {
        console.log('Navigating back to the product list'); // Checking if the navigation works
        setProductId(null); // Reset to show the product list view
    };

    return (
        <div className="app-container catalog-page">
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
        </div>
    );
}

export default AppMain;
