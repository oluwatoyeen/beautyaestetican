import React, {useState} from 'react'
import "./Navbar.css"
import { Link } from "react-router-dom";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">B&E</div>
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
      <li onClick={()=>setMenu('home')}><Link to='/' style={{textDecoration:'none'}}>Home  </Link></li>


<li onClick={()=>setMenu('about')}>  <Link to='/about'  style={{textDecoration:'none'}}>About </Link></li>

<li onClick={()=>setMenu('appoitment')}><Link to='/appointment'  style={{textDecoration:'none'}}>Appointment  </Link></li>

<li onClick={()=>setMenu('contact')}><Link to='/contact'  style={{textDecoration:'none'}}>Contact </Link></li>

      </ul>
      <div className="menu-icon" onClick={toggleMenu}>
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
      </div>
    </nav>
  );
};

export default Navbar