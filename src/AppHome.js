import React from 'react';
import { Link } from 'react-router-dom';

const AppHome = () => {
    return (
      <div className="home-page">
        <h1 className="app-title">Welcome to the Online Product Catalog</h1>
        <p>Explore a wide range of products.</p>
        <div className="auth-links">
          {/* Pagrindinio puslapio perėjimas į produktų puslapį */}
          <Link to="/products" className="btn btn-primary">View Products</Link>
        </div>
      </div>
    );
  };

export default AppHome;