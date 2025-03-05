import React, {useState} from 'react'

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./All.css";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for reaching out!");
  };

  // Set your exact location (latitude, longitude)
  const position = [6.5244, 3.3792]; // Example: Lagos, Nigeria

  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
      <p>Feel free to reach out. I’d love to connect!</p>

      <div className="contact-content">
        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="contact-form">
          <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
          <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required />
          <button type="submit" className="contact-button">Send Message</button>
        </form>

        {/* Social Media Links */}
        <div className="social-icons">
          {/* <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithub /></a> */}
        </div>
      </div>

      {/* Map Section */}
      <div className="map-container">
        <MapContainer center={position} zoom={13} scrollWheelZoom={false} className="map">
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              I am here! 📍 <br /> Lagos, Nigeria
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default Contact