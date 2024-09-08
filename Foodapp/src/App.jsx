import {   Route, Routes } from 'react-router-dom';
import React, { useState } from 'react';
import './App.css'
import Navbar from './Components/Navbar/Navbar';

import Home from'./Pages/Home/Home'

import Cart from './Pages/Cart/Cart';
import PlaceOrder from './Pages/PlaceOrder/Placeorder';

function App() {
  return (
    <>
      <div className="app">
      <Navbar /> 
      </div>
      <Routes>
        <Route path="/" element={<Home/>} /> Define Home route
        <Route path="/cart" element={<Cart/>} /> Define Home route
        <Route path="/order" element={<PlaceOrder/>} /> Define Home route


      </Routes>
    </>
  );
}

export default App;