import React, { useState, useEffect } from 'react';
import './App.css';
 import { Link } from "react-router-dom";   //``Link'' is required for navigation
import "bootstrap/dist/css/bootstrap.min.css";   

import AuthService from './Services/auth.service';




const AppLog = () => {
  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [currentCustomer, setCurrentCustomer] = useState(undefined);

  useEffect(() => {
    const customer = AuthService.getCurrentCustomer();

    if (customer) {
      setCurrentCustomer(customer);
      setShowModeratorBoard(customer.roles.includes("ROLE_MODERATOR"));
      setShowAdminBoard(customer.roles.includes("ROLE_ADMIN"));
    }
  }, []);

  const logOut = () => {
    AuthService.logout();
    setCurrentCustomer(undefined);
    setShowModeratorBoard(false);
    setShowAdminBoard(false);
  };

  return (
    
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <Link to={"/"} className="navbar-brand">
        JAVA U10
      </Link>
    
      <div className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link to={"/home"} className="nav-link">
            Home
          </Link>
        </li>
        {/* User management and login links */}
        {showModeratorBoard && (
          <li className="nav-item">
            <Link to={"/mod"} className="nav-link">
              Moderator Board
            </Link>
          </li>
        )}

        {showAdminBoard && (
          <li className="nav-item">
            <Link to={"/admin"} className="nav-link">
              Admin Board
            </Link>
          </li>
        )}

        {currentCustomer && (
          <li className="nav-item">
            <Link to={"/user"} className="nav-link">
              User
            </Link>
          </li>
        )}
      </div>

      <div className="navbar-nav ml-auto">
        {currentCustomer ? (
          <>
            <li className="nav-item">
              <Link to={"/profile"} className="nav-link">
                {currentCustomer.username}
              </Link>
            </li>
            <li className="nav-item">
              <a href="/login" className="nav-link" onClick={logOut}>
                LogOut
              </a>
            </li>
          </>
        ) : (
          <>
            <li className="nav-item">
              <Link to={"/login"} className="nav-link">
                Login
              </Link>
            </li>

            <li className="nav-item">
              <Link to={"/register"} className="nav-link">
                Sign Up
              </Link>
            </li>
          </>
        )}
      </div>
    </nav>  
);
};

export default AppLog;
