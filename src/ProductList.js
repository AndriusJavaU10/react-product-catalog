import React, { useEffect, useState, useCallback } from 'react';
import CATEGORIES from './Categories';
import UpdateProduct from './UpadateProduct';
import AddProduct from './AddProduct';
import DeleteProduct from './DeleteProduct';
import { getUserRole } from './Services/auth-header'; // Imported functions of user roles

function ProductList({ selectedCategory }) {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]); // State for filtered products
  const [productToUpdate, setProductToUpdate] = useState(null);
  const [showAddProduct, setShowAddProduct] = useState(false);
  const userRoles = getUserRole();  // Gauname vartotojo roles

  // Fetch products based on selected category
  const fetchProducts = useCallback(() => {
    fetch('http://localhost:8080/api/products/all')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  // Fetch products on component mount
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  // Filter products based on the selected category
  useEffect(() => {
    if (selectedCategory) {
      setFilteredProducts(
        products.filter(product => product.category === selectedCategory)
        .sort((a,b) => a.name.localeCompare(b.name))   // Sort by name
      );
    } else {
      setFilteredProducts(products.sort((a,b) => a.name.localeCompare(b.name))); // If no category is selected, show all products and  Sort all by name
    }
  }, [selectedCategory, products]);

  const handleUpdate = (product) => {
    setProductToUpdate(product); // Set the selected product for update
  };

  const handleAddProduct = () => {
    setShowAddProduct(true); // Show the modal for adding a new product
    console.log(showAddProduct); // True should be after the button is clicked
  };

  const handleProductAdded = () => {
    setShowAddProduct(false); // Close the add product modal
    fetchProducts(); // Re-fetch the products after adding a new one
  };

  return (
    <div className="product-list-container">
      <div className="product-list-header">
        {/* Tik vartotojams su ADMIN role rodome "Add New Product" mygtuką */}
        {(userRoles.includes('ROLE_ADMIN') || userRoles.includes('ROLE_MODERATOR')) && (
          <button onClick={handleAddProduct} className="add-product-btn" tabIndex="0">
            Add New Product
          </button>
        )}
      </div>

      <ul className="product-list">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <li key={product.id} className="product-item">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>Price: €{product.price}</p>
              <p>Category: {CATEGORIES.find((cat) => cat.value === product.category)?.label || product.category}</p>

              <div className="product-actions">
                {/* Tik vartotojams su ADMIN role rodome "Update" mygtuką */}
                {(userRoles.includes('ROLE_ADMIN') || userRoles.includes('ROLE_MODERATOR'))  && (
                  <button onClick={() => handleUpdate(product)}>Update</button>
                )}
                
                {/* Tik vartotojams su ADMIN role rodome "Delete" mygtuką */}
                {userRoles.includes('ROLE_ADMIN') && (
                  <DeleteProduct productId={product.id} onDeleteSuccess={() => fetchProducts()} />
                )}
              </div>
            </li>
          ))
        ) : (
          <p>No products found for this category.</p>
        )}
      </ul>

      {/* Show UpdateProduct modal if a product is selected for updating */}
      {productToUpdate && (
        <UpdateProduct productId={productToUpdate.id} onClose={() => setProductToUpdate(null)} />
      )}

      {/* Show AddProduct modal if adding a new product */}
      {showAddProduct && (
        <AddProduct 
          onProductAdded={handleProductAdded} 
          onClose={() => setShowAddProduct(false)} // Close the modal manually
        />
      )}
    </div>
  );
}

export default ProductList;
