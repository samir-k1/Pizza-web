import React, { useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';

const Navbar = ({ openSignup }) => {
  const [Menu, setMenu] = useState("home");

  return (
    <div className="Navbar">
      <Link to="/">
        <img src={assets.logo} alt="logo" />
      </Link>

      <ul className="ul-list">
        <Link to="/" onClick={() => setMenu('home')} className={Menu === 'home' ? 'active' : ''}>
          Home
        </Link>
        <a href='#explore-menu' onClick={() => setMenu('menu')} className={Menu === "menu" ? "active" : ""}>
          Menu
        </a>
        <a href='#download-content' onClick={() => setMenu('mobileapp')} className={Menu === "mobileapp" ? "active" : ""}>
          Mobile App
        </a>
        <a href='#footer' onClick={() => setMenu('contact')} className={Menu === "contact" ? "active" : ""}>
          Contact
        </a>
      </ul>

      <div className="navbar-right">
        <img src={assets.search_icon} alt="Search" />
        <div className="searchicon">
          <img src={assets.basket_icon} alt="Basket"  /> {/* Corrected onClick here */}
          <div className="dot"></div>
        </div>
        <button className="Navbar-btn" onClick={openSignup}>Sign Up</button>
      </div>
    </div>
  );
};

export default Navbar;
