import React from 'react'
import './Facial.css'
import FACE from "./../../assets/facials.jpg"
const Facial = () => {
  return (
    <div className='facial'>
         <div className="row align-items-center image-text-container">
        {/* Image on the extreme left */}

        <div className="col-12 col-md-6 text-container">
          <p className="description">
          Dr.BE is an accomplished general practitioner with over 30 years of experience in the medical field. She has advanced knowledge of facial anatomy related to facial aesthetics, skin physiology, and injecting techniques. <br />Dr. BE enjoys treating her patients in the most naturally attractive way. 
          </p>
        </div>
        

        {/* Text on the extreme right */}
        <div className=" col-12 col-md-6  ">
          <img src={FACE} alt="Extreme right Image" className="img-fluid extreme-right-image" />
        </div>
      </div>

    </div>
  )
}

export default Facial