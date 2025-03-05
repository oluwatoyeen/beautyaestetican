import React from 'react'
import './Footer.css'
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
      <footer className="footer">
        <div className="footer-container">
          {/* Left Section */}
          <div className="footer-brand">
            <h2>BEAUTY</h2>
            <p> Giving you that perfect look.</p>
          </div>
  
          {/* Middle Section - Quick Links */}
          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/appointment">Appointment</a></li>
            </ul>
          </div>
  
          {/* Right Section - Social Media */}
          <div className="footer-social">
            <h3>Follow Me</h3>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            </div>
          </div>
        </div>
  
        {/* Copyright Section */}
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} BeautybyM All Rights Reserved.</p>
        </div>
      </footer>
    );
  };

export default Footer