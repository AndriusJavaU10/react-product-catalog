// src/components/ProductList.js
import React, { useEffect, useState } from 'react';
import CATEGORIES from './Categories';


function ProductList(onSelectProduct ) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/products")  // Pakeiskite su savo API URL
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const handleDelete = (id) => {
    // Function to handle deletion
    fetch(`http://localhost:8080/api/products/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        setProducts(products.filter((product) => product.id !== id)); // Remove deleted product from list
      })
      .catch((error) => console.error("Error deleting product:", error));
  };

  const handleUpdate = (product) => {
    // Call onSelectProduct to trigger update logic from parent component
    onSelectProduct(product);
  };

  return (
    <div>
    <h2>Product List</h2>
    <ul>
      {products.map(product => (
        <li key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>Price: €{product.price}</p>
          <p>Category: {CATEGORIES.find(cat => cat.value === product.category)?.label || product.category}</p>

            {/* Add action buttons next to each product */}
            <button onClick={() => handleUpdate(product)}>Update</button>
            <button onClick={() => handleDelete(product.id)}>Delete</button>
        </li>
      ))}
    </ul>
  </div>
  );
}

export default ProductList;
