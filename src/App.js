
import React, { useState } from 'react';
import './App.css';
import UpdateProduct from './UpadateProduct';
import ProductPage from './ProductPage';



function App() {
  const [isHomePage, setIsHomePage] = useState(true); // Puslapio perjungimo būsena
  const [productId, setProductId] = useState(null); // Pasirinktas produktas

  const handleSetProduct = (productId) => {
    setProductId(productId); // Nustatome produktą
  };

  const handlePageTransition = () => {
    setIsHomePage(false); // Perėjimas į antrą puslapį
  };

  return (
    <div className={`app-container ${isHomePage ? 'home-page' : 'catalog-page'}`}>
      {isHomePage ? (
        <div className="home-content" onClick={handlePageTransition}>
          <h1 className="app-title">Welcome to the Online Product Catalog</h1>
        </div>
      ) : (
        <div className="catalog-content">
          {/* Produktų sąrašas ir kategorijų navigacija */}
          <ProductPage onSelectProduct={handleSetProduct} />
          {/* Atnaujinimo komponentas */}
          {productId && (
            <UpdateProduct productId={productId} />
          )}
        </div>
      )}
    </div>
  );
}

export default App;
