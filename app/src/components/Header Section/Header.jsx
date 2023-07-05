import React from 'react'
import './Header.css'
import Navbar from '../Navbar Section/Navbar';

import forest from '../images/forest.jpeg';

function Header() {
  return (
    <div>
      <Navbar></Navbar>
        <img src={forest} alt=""/>

     <div className="heading">He who plants a tree plants a hope</div>
    </div>
  )
}

export default Header