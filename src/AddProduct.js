// src/components/AddProduct.js
import React, { useState } from 'react';
import CATEGORIES from './Categories';

function AddProduct({ onProductAdded, onClose }) {
  const [newProduct, setNewProduct] = useState({
    name: '',
    description: '',
    price: 0,
    category: CATEGORIES[0].value,
  });

  const handleChange = (e) => {
    setNewProduct({
      ...newProduct,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // POST request to add a new product
    fetch('http://localhost:8080/api/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newProduct),
    })
      .then(() => {
        alert('Product added successfully');
        setNewProduct({ name: '', description: '', price: 0 , category: CATEGORIES[0].value }); // Reset form
        onProductAdded(); // Inform the parent component about the added product
        onClose(); // Close the modal
      })
      .catch((error) => console.error('Error creating product:', error));
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Add New Product</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={newProduct.name}
            onChange={handleChange}
            placeholder="Product Name"
            required
          />
          <input
            type="text"
            name="description"
            value={newProduct.description}
            onChange={handleChange}
            placeholder="Description"
            required
          />
          <input
            type="number"
            name="price"
            value={newProduct.price}
            onChange={handleChange}
            placeholder="Price"
            required
          />
          <select name="category" value={newProduct.category} onChange={handleChange}>
            {CATEGORIES.map((category) => (
              <option key={category.value} value={category.value}>
                {category.label}
              </option>
            ))}
          </select>
          <button type="submit">Add Product</button>
        </form>
        {/* Close modal button to hide the modal when clicked */}
        <button className="close-modal" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

export default AddProduct;
