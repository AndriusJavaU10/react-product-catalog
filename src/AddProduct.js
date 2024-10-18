import React, { useState } from 'react';
import CATEGORIES from './Categories';
import authHeader from './Services/auth-header';

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
        ...authHeader(), // Adds the Authorization header
      },
      body: JSON.stringify(newProduct),
    })
      .then((response) => {
        if (response.ok) {
          alert('Product added successfully');
          setNewProduct({ name: '', description: '', price: 0, category: CATEGORIES[0].value });
          onProductAdded(); // Inform the parent component about the added product
          onClose(); // Close the modal
        } else {
          throw new Error('Failed to add product');
        }
      })
      .catch((error) => {
        console.error('Error creating product:', error);
      });
  };

  return (
    <div className="modal-overlay"> {/* modal with background overlay*/}
      <div className="modal-content-large"> {/* Wide modal */}
        <h2>Add New Product</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Product Name:</label>
            <input
              type="text"
              name="name"
              value={newProduct.name}
              onChange={handleChange}
              placeholder="Enter product name"
              required
            />
          </div>

          <div className="form-group">
            <label>Description:</label>
            <textarea
              name="description"
              value={newProduct.description}
              onChange={handleChange}
              placeholder="Enter detailed product description"
              required
              rows="6" // Large box for description
            />
          </div>

          <div className="form-group">
            <label>Price:</label>
            <input
              type="number"
              name="price"
              value={newProduct.price}
              onChange={handleChange}
              placeholder="Enter product price"
              required
            />
          </div>

          <div className="form-group">
            <label>Category:</label>
            <select
              name="category"
              value={newProduct.category}
              onChange={handleChange}
              required
            >
              {CATEGORIES.map((category) => (
                <option key={category.value} value={category.value}>
                  {category.label}
                </option>
              ))}
            </select>
          </div>

          <div className="modal-actions">
            <button type="submit" className="btn-submit">
              Add Product
            </button>
            <button type="button" onClick={onClose} className="btn-cancel">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddProduct;
