import React from 'react';
import { confirmAlert } from 'react-confirm-alert'; // Import confirmAlert
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import CSS
import authHeader from './Services/auth-header';  

function DeleteProduct({ productId, onDeleteSuccess }) {
  // Function to delete the product
  const deleteProduct = () => {
    fetch(`http://localhost:8080/api/products/${productId}`, {
      method: 'DELETE',
      headers: {
        ...authHeader(), // Adds the Authorization header
        'Content-Type': 'application/json'
      }

    })
      .then((response) => {
        if (response.ok) {
          alert('Product deleted successfully!');
          if (onDeleteSuccess) {
            onDeleteSuccess(productId); // Inform parent about successful deletion
          }
        } else {
          alert('Failed to delete product.');
        }
      })
      .catch((error) => console.error('Error deleting product:', error));
  };

  // Function to handle delete click and open the confirmation modal
  const handleDeleteClick = () => {
    confirmAlert({
      title: 'Confirm to delete',
      message: 'Are you sure you want to delete this product?',
      buttons: [
        {
          label: 'Yes',
          onClick: deleteProduct, // Call the delete function on confirmation
        },
        {
          label: 'No',
          onClick: () => console.log('Deletion cancelled'), // Log when cancelled
        }
      ]
    });
  };

  return (
    <div>
      <button onClick={handleDeleteClick}>Delete Product</button>
    </div>
  );
}
export default DeleteProduct;
