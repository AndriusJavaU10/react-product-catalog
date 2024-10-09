
import React, { useState } from 'react';
import './App.css';
// import './style.css';
// import './troweld-html/css/bootstrap.css';
// import './troweld-html/css/font-awesome.min.css';
// import './troweld-html/css/responsive.css';
// import './troweld-html/css/style.css';
// import './troweld-html/css/style.css.map';
// import './troweld-html/css/style.scss';


import ProductList from './ProductList';
import AddProduct from './AddProduct';
import UpdateProduct from './UpadateProduct';
import DeleteProduct from './DeleteProduct';

function App() {
// State to keep track of selected productId for editing/deleting
const [productId, setProductId] = useState(null);

const handleSetProduct = (productId) => {
  setProductId(productId); 
};

return (
  <div>
     
      
        <h1>Welcome to the Online Product Catalog</h1>
        

    <AddProduct /> {/* Component to add a new product */}
    <ProductList onSelectProduct={handleSetProduct} /> {/* ProductList component to display products */}
    
    {/* Conditionally render UpdateProduct and DeleteProduct only when a productId is selected */}
    {productId && (
        <>
          <UpdateProduct productId={productId} />
          <DeleteProduct productId={productId} />
        </>
      )}
       
    
  </div>
);
}

export default App;
