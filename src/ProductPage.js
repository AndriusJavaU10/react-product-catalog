import React, { useState } from 'react';
import ProductList from './ProductList';  
import CATEGORIES from './Categories';  
import './App.css'; 

function ProductPage({ onSelectProduct, onCategorySelect }) {
  const [selectedCategory, setSelectedCategory] = useState("");  // Manage the selected category

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);  // Sets the selected category
    if (onCategorySelect) {
      onCategorySelect(category);  // Checking that onCategorySelect exists before calling it
    }
  };

  const handleProductSelect = (product) => {
    onSelectProduct(product);  // Set the product to be updated
  };

  return (
    <div>
      {/* Category buttons */}
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

      {/* List of all products displayed at once */}
      <ProductList selectedCategory={selectedCategory} onSelectProduct={handleProductSelect} />
    </div>
  );
}

export default ProductPage;
