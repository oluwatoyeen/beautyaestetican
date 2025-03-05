import React from 'react'
import './All.css'

const About = () => {
  return (
    <section className="about-section">
      <div className="about-content">
        <h2>Meet Your Aesthetician</h2>
        <p>
          Welcome! I am a certified aesthetician dedicated to helping individuals achieve 
          healthy, radiant skin. With years of expertise in skincare and beauty treatments, 
          my goal is to enhance your natural glow through personalized care.
        </p>
        <p>
          I specialize in various treatments, from deep-cleansing facials to advanced skin 
          therapies, all tailored to your unique needs. My approach is holistic, combining 
          modern techniques with a touch of relaxation to leave you feeling refreshed and 
          confident.
        </p>
        <p>
          Your skin deserves the best care. Whether you are dealing with acne, dryness, 
          or simply want to maintain a youthful look, I am here to guide you on your journey 
          to flawless skin.
        </p>
        <a href="http://localhost:5173/appointment">
        <button className="about-btn">Book a Consultation</button>
        </a>
        
      </div>
    </section>
  );
}

export default About