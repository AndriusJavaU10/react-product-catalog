import React from "react";
import { Navigate } from "react-router-dom";
import AuthService from "./auth.service";


const PrivateRoute = ({ element: Component, allowedRoles = []  }) => {
  const currentCustomer = AuthService.getCurrentCustomer(); // Check if the user is logged in
  const roles = currentCustomer ? currentCustomer.roles : [];
  
  if (!currentCustomer) {
    // If the user is not logged in, redirect to the login page
    return <Navigate to="/login" />;
  }

  if (allowedRoles.length > 0) {
  // Checks if the user has at least one of the allowed roles
  const hasPermission = allowedRoles.some(role => roles.includes(role));
  //console.log("Current user roles:", roles);
  //console.log("Allowed roles for this route:", allowedRoles);


  if (!hasPermission) {
    // If the user does not have a valid role, redirect them to a profile or return an error message
    return <Navigate to="/unauthorized" />;
  }
  }

  // If the user has the correct role, the desired element is returned
  return <Component />;
};

export default PrivateRoute;
