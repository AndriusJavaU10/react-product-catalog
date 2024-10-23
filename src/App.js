
import React from 'react';
import { Routes, Route } from "react-router-dom";

import AppMain from './AppMain';
import AppLog from './AppLog';
import AppHome from './AppHome';

import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";
import BoardCustomer from "./components/BoardCustomer"
// import BoardModerator from "./components/BoardModerator";
import BoardAdmin from "./components/BoardAdmin";
import PrivateRoute from './Services/privateRoute';



function App() {
  
  return (
    <>
      <AppLog /> {/* Pagrindinis navigacijos komponentas */}      
      <Routes>
        
        <Route path="/" element={<AppHome />} />    {/* Home page */}
        <Route path="/catalog" element={<AppMain />} /> {/* Product catalog */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />        
        {/* Protected links with roles */}
        <Route path="/profile" element={<PrivateRoute element={Profile} allowedRoles={["ROLE_USER", "ROLE_ADMIN", "ROLE_MODERATOR"]} />} />     
        <Route path="/user" element={<PrivateRoute element={BoardCustomer} allowedRoles={["ROLE_USER"]} />} />
        {/* <Route path="/mod" element={<PrivateRoute element={BoardModerator} allowedRoles={["ROLE_MODERATOR", "ROLE_ADMIN"]} />} /> */}
        <Route path="/admin" element={<PrivateRoute element={BoardAdmin} allowedRoles={["ROLE_ADMIN"]} />} />
      </Routes>
    </>
  );
}

export default App;