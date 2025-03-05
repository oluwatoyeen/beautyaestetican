import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from './Component/HeaderFiles/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import Hero from './Component/Herofiles/Hero'
import Appointment from './Component/HeaderFiles/pages/Appointment'
import About from './Component/HeaderFiles/pages/About';
import Contact from './Component/HeaderFiles/pages/Contact';
import Footer from './Component/FooterFiles/Footer';


// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


function App() {
  return (
    
    <Router>
      {/* Navbar is placed here, so it appears on all pages */}
      <Navbar />
      
      
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/appointment" element={<Appointment/>} />
        
      </Routes>
      <Footer/>
    </Router>
    
  );

  
}


export default App
