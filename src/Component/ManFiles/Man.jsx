import React from 'react'
import "./Man.css"
import Men from './../../assets/men.jpg'
const Man = () => {
  return (
    <div className='men '>
    <div className="row  ">
   <div className=" col-12 col-md-6 ">
     <img src={Men} alt="" className="" />
   </div>


  
   <div className="col-12 col-md-6 text-container">
    <hr />
     <p className="descriptions">
     Offering a procedure that works for you
Not only does <br />Dr. JD have an artistic technique when it comes to aesthetic medicine, <br />
but she also practices and treats with such a <br />personal approach that she often becomes a trusted friend to her patients.
<br />Each individual has a unique body type, skin sensitivity, <br />and pH level. Not everyone is suitable for every procedure. 
</p>
     <hr />
   </div>
 </div>
</div>
  )
}

export default Man