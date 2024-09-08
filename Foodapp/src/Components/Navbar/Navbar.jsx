import React from 'react'
import { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
const Navbar = () => {

    const [Menu, setMenu] = useState("home");
  return (
    <div className="Navbar">
       <img src={assets.logo} alt="logo" /> 

       <ul className="ul-list">
        <li onClick={()=>setMenu('home')} className={Menu==="home"? "active": ""}>home</li>
        <li onClick={()=>setMenu('menu')} className={Menu==="menu"? "active": ""}>menu</li>
        <li onClick={()=>setMenu('mobileapp')} className={Menu==="mobileapp"? "active": ""}>mobileapp</li>
        <li onClick={()=>setMenu('contact')} className={Menu==="contact"? "active": ""}>contact </li>
     </ul>

     <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
     <div className="searchicon">
        <img src={assets.basket_icon} alt="" />
        <div className="dot"></div>
     </div>
     <button className='Navbar-btn'> sign in</button>
     </div>
    </div>
  )
}

export default Navbar
