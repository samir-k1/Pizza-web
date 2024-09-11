import React from 'react'
import { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
 import { Link } from 'react-router-dom'
const Navbar = ({openSignup}) => {

    const [Menu, setMenu] = useState("home");
  return (
    <div className="Navbar">
       <img src={assets.logo} alt="logo" /> 

       <ul className="ul-list">
       <Link to="/" onClick={() => setMenu('home')} className={Menu === 'home' ? 'active' : ''}>
            Home
          </Link>        <a href ='#explore-menu'onClick={()=>setMenu('menu')} className={Menu==="menu"? "active": ""}>menu</a>
        <a href ='#download-content' onClick={()=>setMenu('mobileapp')} className={Menu==="mobileapp"? "active": ""}>mobileapp</a>
        <a href ='#footer' onClick={()=>setMenu('contact')} className={Menu==="contact"? "active": ""}>contact </a>
     </ul>

     <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
     <div className="searchicon">
        <img src={assets.basket_icon} alt="" />
        <div className="dot"></div>
     </div>
     <button className="Navbar-btn" onClick={openSignup}>Sign Up</button>
     </div>
    </div>
  )
}

export default Navbar
