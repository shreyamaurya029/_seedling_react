import React from 'react'
import './Middle.css'

import sap from '../images/sap.jpeg'

function Middle() {
  return (
    <>
    <div className='why'>
       <div className="question"> Why should we plant trees?? </div>
      <p>
        Lorem ipsum dolor sit amet consectetur<br></br>
        adipisicing elit. Ex, minus amet? Ratione <br></br>
        placeat laboriosam similique debitis tenetur<br></br>
        vero enim, rem deleniti eius dignissimos, beatae<br></br>
        dolores, quod sapiente? Nesciunt, neque delectus?
      </p>
    </div>

    <div className="third">
    <img src={sap} alt="" text="start"/>
    <button>Start Planting</button>
    </div>  
</>
  )
}

export default Middle