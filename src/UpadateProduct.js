import React, { useState, useEffect } from 'react';
import CATEGORIES from './Categories';
import authHeader from './Services/auth-header';  

function UpdateProduct({ productId, onClose }) {
  // State for product details
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    category: CATEGORIES[0].value, // Default category selected
  });

  // Fetch product details when the component mounts
  useEffect(() => {
    // Fetch the existing product details with authorization
    fetch(`http://localhost:8080/api/products/${productId}`, {
      method: 'GET',
      headers: {
        ...authHeader(), // Adds the Authorization header for GET request
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Unauthorized or product not found');
        }
        return response.json();
      })
      .then((data) => setProduct(data))
      .catch((error) => console.error('Error fetching product:', error));
  }, [productId]);

   // Handle form changes
   const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submit
  const handleUpdate = (e) => {
    e.preventDefault();

    // PUT request to update the product
    fetch(`http://localhost:8080/api/products/${productId}`, {
      method: 'PUT',
      headers: {
        ...authHeader(), // Adds the Authorization heade
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product),
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Unauthorized or failed to update product');
      }
      return response.json();
    })
    .then(() => {
      alert('Product updated successfully');
      onClose(); // Close the update form when successful
    })
    .catch((error) => console.error('Error updating product:', error));
};

  return (
    <div className="update-product-modal"> 
      <h2>Update Product</h2>
      <form onSubmit={handleUpdate}>
        <input
          type="text"
          name="name"
          value={product.name}
          onChange={handleChange}
          placeholder="Product Name"
          required
        />
        <input
          type="text"
          name="description"
          value={product.description}
          onChange={handleChange}
          placeholder="Description"
          required
        />
        <input
          type="number"
          name="price"
          value={product.price}
          onChange={handleChange}
          placeholder="Price"
          required
        />
        <select
          name="category"
          value={product.category}
          onChange={handleChange}
        >
          {CATEGORIES.map((category) => (
            <option key={category.value} value={category.value}>
              {category.label}
            </option>
          ))}
        </select>
        <button type="submit">Update Product</button>
        <button type="button" onClick={onClose}>Cancel</button> {/* Cancel button to close the form */}
      </form>
    </div>
  );
}

export default UpdateProduct;
