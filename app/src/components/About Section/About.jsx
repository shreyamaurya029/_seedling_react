import React from 'react'
import './About.css'
import { Link } from 'react-router-dom';
import Navbar from '../Navbar Section/Navbar';

//-----images-----
import image2 from '../images/image2.jpeg';
import image3 from '../images/image3.jpeg';
import image44 from '../images/image44.jpeg';
import image5 from '../images/image5.jpeg';
import image6 from '../images/image6.jpeg';
import image7 from '../images/image7.jpeg';
import image9 from '../images/image9.jpeg';



function About() {
  return (
<>
<Navbar></Navbar>

<div className="about">

    <div className="aim">
        <b>Aim</b>
    </div>

    <div className="header">
        <div id="gallery">


            <img src={image2} alt="" width="300px"/>
            <img src={image3} alt="" width="300px"/>
            <img src={image44} alt="" width="300px"/>
            <img src={image5} alt="" width="300px"/>
            <img src={image6} alt="" width="300px"/>
            <img src={image7} alt="" width="300px"/>

            <img src={image9} alt="" width="300px"/>          
        </div>
    </div>

    <div className="content">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga commodi cupiditate saepe 
        eos quod aut voluptatem, eius voluptatibus corrupti, odit quaerat aperiam quia sequi sapiente ratione
        consequatur nostrum tenetur eaque!
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga commodi cupiditate saepe 
        eos quod aut voluptatem, eius voluptatibus corrupti, odit quaerat aperiam quia sequi sapiente ratione
        consequatur nostrum tenetur eaque!
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga commodi cupiditate saepe 
        eos quod aut voluptatem, eius voluptatibus corrupti, odit quaerat aperiam quia sequi sapiente ratione
        consequatur nostrum tenetur eaque!
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga commodi cupiditate saepe 
        eos quod aut voluptatem, eius voluptatibus corrupti, odit quaerat aperiam quia sequi sapiente ratione
        consequatur nostrum tenetur eaque!
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga commodi cupiditate saepe 
        eos quod aut voluptatem, eius voluptatibus corrupti, odit quaerat aperiam quia sequi sapiente ratione
        consequatur nostrum tenetur eaque!
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga commodi cupiditate saepe 
        eos quod aut voluptatem, eius voluptatibus corrupti, odit quaerat aperiam quia sequi sapiente ratione
        consequatur nostrum tenetur eaque!
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga commodi cupiditate saepe 
        eos quod aut voluptatem, eius voluptatibus corrupti, odit quaerat aperiam quia sequi sapiente ratione
        consequatur nostrum tenetur eaque!
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga commodi cupiditate saepe 
        eos quod aut voluptatem, eius voluptatibus corrupti, odit quaerat aperiam quia sequi sapiente ratione
        consequatur nostrum tenetur eaque!
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga commodi cupiditate saepe 
        eos quod aut voluptatem, eius voluptatibus corrupti, odit quaerat aperiam quia sequi sapiente ratione
        consequatur nostrum tenetur eaque!
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga commodi cupiditate saepe 
        eos quod aut voluptatem, eius voluptatibus corrupti, odit quaerat aperiam quia sequi sapiente ratione
        consequatur nostrum tenetur eaque!

    </div>
</div>
</>

  )
}

export default About