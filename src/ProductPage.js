import React, { useState } from 'react';
import ProductList from './ProductList';  
import CATEGORIES from './Categories';  
import './App.css'; 

function ProductPage({ onSelectProduct, onCategorySelect }) {
    const [selectedCategory, setSelectedCategory] = useState("");  // Valdome pasirinktą kategoriją
  
    const handleCategorySelect = (category) => {
      setSelectedCategory(category);  // Nustatome pasirinktą kategoriją
      if (onCategorySelect) {
        onCategorySelect(category);  // Patikriname, ar onCategorySelect egzistuoja prieš kviesdami
      }
    };
  
    const handleProductSelect = (product) => {
      onSelectProduct(product);  // Set the product to be updated
    };
  
    return (
      <div>
        {/* Kategorijų mygtukai */}
        <div className="category-buttons">
          {CATEGORIES.map((category) => (
            <button
              key={category.value}
              onClick={() => handleCategorySelect(category.value)}
              className={`category-btn ${selectedCategory === category.value ? 'active' : ''}`}
            >
              {category.label}
            </button>
          ))}
        </div>
  
        {/* Visų produktų sąrašas rodomas iš karto */}
      <ProductList selectedCategory={selectedCategory} onSelectProduct={handleProductSelect} />
    </div>
  );
}
  
  export default ProductPage;
