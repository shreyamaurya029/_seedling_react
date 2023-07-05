import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';

//----images-----
import icon from '../images/icon.png';
//---------------


function Navbar() {
  return (
    <div className='navbar'>
        <div className="border">
        <div className="brand"><img src={icon} alt="" width="50px"/>
        <div className="brandname">Seedling</div>
        </div>
      <div className="links">
        <span><Link to="/">Home</Link></span>
        <span><Link to="/about">About</Link></span>
        <span><Link to="/tree">Trees</Link></span>
        <span>SignIn</span>

      </div>
    </div>
  </div>

    
  )
}

export default Navbar