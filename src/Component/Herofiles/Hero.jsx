import React from 'react'
import IMG from "../../assets/Dr.jpg"
import "./Hero.css"
import Facial from './../Facialfiles/Facial'
import Man from '../ManFiles/Man'
import Slider from '../SliderFiles/Slider'
import Review from '../ReviewFiles/Review'
const Hero = () => {
    
  return (
    <div className="container-fluid">
      <div className="row align-items-center image-text-container">
        {/* Image on the extreme left */}
        <div className=" col-12 col-md-6  ">
          <img src={IMG} alt="Extreme Left Image" className=" extreme-left-image" />
        </div>

        {/* Text on the extreme right */}
        <div className="col-md-6 col-12  text-container">
          <h2 className="heading">Welcome to <br />Beauty Aesthetician</h2>
          <p className="description">
            Doctor
          </p>
        </div>
      </div>
      <marquee behavior="" direction="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui suscipit eum quaerat quibusdam tempore eius dolor eaque ea placeat consectetur!</marquee>

      <Facial/>
      
      <Slider/>
      <Man/>
      <Review/>
    </div>

    
  )
}

export default Hero