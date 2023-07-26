import React from 'react'
import './Header.css'
import Navbar from '../Navbar Section/Navbar';

import forest from '../images/forest1.jpeg';

function Header() {

  return (
    
    <>
    <Navbar/>
     <div className='header'>
        <img src={forest} alt="" className="responsive"/>

     <div className="heading">He who plants a tree plants a hope</div>
    </div>
    </>
  )
}

export default Header