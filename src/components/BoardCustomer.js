import React, { useState, useEffect } from "react";
import CustomerService from "../Services/customer.service";

const BoardCustomer = () => {
  const [content, setContent] = useState([]);  

  useEffect(() => {
    CustomerService.getCustomerBoard().then(
      (response) => {
        console.log("Server response data:", response.data); // Check what the server returns
        setContent(response.data); // Assuming the data is an array
      },
      (error) => {
        const _content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setContent([_content ]); // Store error as array for consistent rendering
      }
    );
  }, []);

  

 
  return (
    <div className="container">
      <header className="jumbotron">
        <h3>Product Details</h3>
        </header>
        <ul>
          {content.length > 0 ? (
            content.map((item, index) => (
              <li key={index}>
                <strong>Name:</strong> {item.name} <br />
                <strong>Description:</strong> {item.description} <br />
                <strong>Price:</strong> €{item.price} <br />
                <strong>Category:</strong> {item.category}
              </li>
            ))
          ) : (
            <li>No products found.</li>
          )}
        </ul>
      </div>
    );
  };

export default BoardCustomer;
