
import React from 'react';
import { Routes, Route } from "react-router-dom";
// import AppHome from './AppHome';
// import AppProduct from './AppProduct';
// import AppLog from './AppLog';
import AppMain from './AppMain';
import AppLog from './AppLog';

import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Profile from "./components/Profile";
import BoardCustomer from "./components/BoardCustomer";
import BoardModerator from "./components/BoardModerator";
import BoardAdmin from "./components/BoardAdmin";
import PrivateRoute from "./Services/privateRoute";

function App() {
  return (
    <>
    <AppLog /> {/* Pagrindinis navigacijos komponentas */}
    <Routes>
      <Route path="/" element={<AppMain />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profile" element={<PrivateRoute element={<Profile />} />} />
      {/* Protected links */}
      <Route path="/user" element={<PrivateRoute element={<BoardCustomer />} />} />
      <Route path="/mod" element={<PrivateRoute element={<BoardModerator />} />} />
      <Route path="/admin" element={<PrivateRoute element={<BoardAdmin />} />} />
    </Routes>
  </>
   
  );
}

export default App;