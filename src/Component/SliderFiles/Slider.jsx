import React, {useState, useEffect} from 'react'
import { motion, AnimatePresence } from "framer-motion";
import "./Slider.css"
import image1 from "./../../assets/1.jpg"
import image2 from "./../../assets/2.jpg"
import image3 from "./../../assets/3.jpg"
import image4 from "./../../assets/4.jpg"
import image5 from "./../../assets/5.jpg"
import image6 from "./../../assets/6.jpeg"
import image7 from "./../../assets/7.jpg"
import image8 from "./../../assets/8.jpg"



const Slider = () => {
  return (
   <div className='pictutre'>
    <div class="row">
            <div className="col-12 col-md-4 ">
                <img src={image1} alt="" />
                <p className="fw-bold text-center">Lorem, ipsum dolor. </p>
                <p className="text-center mt-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, non.</p>
               
                
            </div>

            <div className="col-12 col-md-4">
                <img src={image2} alt="" />
                <p className="fw-bold text-center">Lorem, ipsum dolor. </p>
                <p className="text-center mt-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, non.</p>
               
                
            </div>

            <div className="col-12 col-md-4">
            <img src={image3} alt="" />
                <p className="fw-bold text-center">Lorem, ipsum dolor. </p>
                <p className="text-center mt-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, repellat!</p>
                
            </div>

            <div className="col-12 col-md-4">
            <img src={image4} alt="" />
                <p className="fw-bold text-center">Lorem, ipsum dolor. </p>
                <p className="text-center mt-0">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint, fuga.</p>
               
            </div>

            <div className="col-12 col-md-4">
            <img src={image5} alt="" />
                <p className="fw-bold text-center">Lorem, ipsum dolor. </p>
                <p className="text-center mt-0">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint, fuga.</p>
              
            </div>

            <div className="col-12 col-md-4">
            <img src={image7} alt="" />
                <p className="fw-bold text-center">Lorem, ipsum dolor. </p>
                <p className="text-center mt-0">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint, fuga.</p>
               
            </div>
         
         

            
        </div>
   </div>
   
  )
};
export default Slider