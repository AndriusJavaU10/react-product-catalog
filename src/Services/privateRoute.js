import React from "react";
import { Route, Navigate } from "react-router-dom";
import AuthService from "./auth.service";

const PrivateRoute = ({ element: Component, ...rest }) => {
  const currentCustomer = AuthService.getCurrentCustomer();

  return currentCustomer ? (
    <Route {...rest} element={Component} />
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoute;