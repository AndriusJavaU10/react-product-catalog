// AppHome.js
import React from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';

const AppHome = () => {
    const navigate = useNavigate();

    const handlePageTransition = () => {
        console.log('Navigating to the product catalog page'); 
        navigate('/catalog'); // Go to the catalog page
    };

    return (
        <div className="home-page">
            <h1 
                className="app-title"
                onClick={handlePageTransition} // Assignment to a new function
                style={{ cursor: 'pointer' }} // Makes a note as a link/button
            >
                Welcome to the Online Product Catalog
            </h1>            
            
        </div>
    );
};

export default AppHome;
