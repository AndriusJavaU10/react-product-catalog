
import React from 'react';
import { Routes, Route, useNavigate } from "react-router-dom";

import AppMain from './AppMain';
import AppLog from './AppLog';
import AppHome from './AppHome';

import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";
import BoardCustomer from "./components/BoardCustomer"
import BoardModerator from "./components/BoardModerator";
import BoardAdmin from "./components/BoardAdmin";
import AuthService from './Services/auth.service';


const ProtectedRoute = ({ element: Component }) => {
  const navigate = useNavigate();
  const currentCustomer = AuthService.getCurrentCustomer();

  if (!currentCustomer) {
    console.log("Not authenticated, redirecting to login");
    navigate("/login"); // Peradresavimas, jei neprisijungęs
    return null; // Neleidžia patekti į komponentą, kol vyksta peradresavimas
  }

  return <Component />;
};


function App() {
  
  return (
    <>
      <AppLog /> {/* Pagrindinis navigacijos komponentas */}      
      <Routes>
        
        <Route path="/" element={<AppHome />} />    {/* Home page */}
        <Route path="/catalog" element={<AppMain />} /> {/* Product catalog */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />        
        {/* Protected links */}
        <Route path="/profile" element={<ProtectedRoute element={Profile} />}    />     
        <Route path="/user" element={<ProtectedRoute element={BoardCustomer} />} />
        <Route path="/mod" element={<ProtectedRoute element={BoardModerator} />} />
        <Route path="/admin" element={<ProtectedRoute element={BoardAdmin} />}   />
      </Routes>
    </>
  );
}

export default App;