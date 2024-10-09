import React from 'react';
import { confirmAlert } from 'react-confirm-alert'; // Import confirmAlert
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import CSS

function DeleteProduct({ productId }) {
  // Function to delete the product
  const deleteProduct = () => {
    fetch(`http://localhost:8080/api/products/${productId}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          alert('Product deleted successfully!');
        } else {
          alert('Failed to delete product.');
        }
      })
      .catch((error) => console.error('Error deleting product:', error));
  };

  const handleDeleteClick = () => {
    console.log('Delete button clicked'); // Patikrinimui

    confirmAlert({
      title: 'Confirm to delete',
      message: 'Are you sure you want to delete this product?',
      buttons: [
        {
          label: 'Yes',
          onClick: deleteProduct
        },
        {
          label: 'No',
          onClick: () => console.log('Deletion cancelled')
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
