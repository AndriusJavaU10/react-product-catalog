import React from "react";
import { Navigate } from "react-router-dom";
import AuthService from "./auth.service";

const PrivateRoute = ({ element, ...rest }) => {
  const currentCustomer = AuthService.getCurrentCustomer();

  return currentCustomer ? element : <Navigate to="/login" />;
};

export default PrivateRoute;
