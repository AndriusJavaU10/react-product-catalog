import React, { useState } from "react";


function ProductForm( {addProduct} ) {

    const [productName, setProductName] = useState("");

    const handleSubmit =(e) => {
        if(productName)
            addProduct(productName);
            setProductName("");
    }
    return(
    
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={productName}
                onChange={ (e) => setProductName( e.target.value )}
                placeholder="Enter new product"
            />
            <button type = "submit">Add</button>


        </form>
        
    );
    
    }
    
    export default ProductForm ;