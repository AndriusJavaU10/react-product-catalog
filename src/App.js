
import React from 'react';
import { Routes, Route } from "react-router-dom";

import AppMain from './AppMain';
import AppLog from './AppLog';
import AppHome from './AppHome';

import Login from "./components/Login";
import Register from "./components/Register";
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
        <Route path="/" element={<AppHome />} />    {/* Home page */}
        <Route path="/catalog" element={<AppMain />} /> {/* Product catalog */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />        
        {/* Protected links */}
        <Route path="/profile" element={ <PrivateRoute> <Profile />  </PrivateRoute> } />      
        <Route path="/user" element={ <PrivateRoute> <BoardCustomer />  </PrivateRoute> } />
        <Route path="/mod" element={<PrivateRoute> <BoardModerator /> </PrivateRoute>  } />
        <Route path="/admin" element={  <PrivateRoute>  <BoardAdmin /> </PrivateRoute> } />
      </Routes>
    </>
  );
}

export default App;