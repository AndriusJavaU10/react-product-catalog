import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import CATEGORIES from './Categories'; // Import categories list

const UpdateProductModal = ({ isOpen, onClose, product }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState(CATEGORIES[0].value); // Set default category

  useEffect(() => {
    if (product) {
      setName(product.name);
      setDescription(product.description);
      setPrice(product.price);
      setCategory(product.category); // Set category from the existing product
    }
  }, [product]);

  const handleUpdate = () => {
    const updatedProduct = { ...product, name, description, price, category };
    // You can make an API call to update the product here
    console.log('Updating product:', updatedProduct);
    onClose(); // Close modal after updating
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} contentLabel="Update Product">
      <h2>Update Product</h2>
      <form>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
        <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />

        {/* Category Dropdown */}
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          {CATEGORIES.map((cat) => (
            <option key={cat.value} value={cat.value}>
              {cat.label}
            </option>
          ))}
        </select>
      </form>
      <button onClick={handleUpdate}>Update Product</button>
      <button onClick={onClose}>Close</button>
    </Modal>
  );
};

export default UpdateProductModal;
