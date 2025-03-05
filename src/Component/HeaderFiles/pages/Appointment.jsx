import { useState } from "react";
import './All.css'
export default function Appointment() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    service: "",
    notes: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Appointment Submitted:", formData);
    alert("Your appointment has been scheduled!");
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Book an Appointment</h2>
      <form onSubmit={handleSubmit} className="form-content">
        <input type="text" name="name" placeholder="Full Name" required onChange={handleChange} className="form-input" />
        <input type="email" name="email" placeholder="Email" required onChange={handleChange} className="form-input" />
        <input type="tel" name="phone" placeholder="Phone Number" required onChange={handleChange} className="form-input" />
        <input type="date" name="date" required onChange={handleChange} className="form-input" />
        <input type="time" name="time" required onChange={handleChange} className="form-input" />
        <select name="service" required onChange={handleChange} className="form-input">
          <option value="">Select Service</option>
          <option value="Facial">Facial</option>
          <option value="Massage">Massage</option>
          <option value="Waxing">Waxing</option>
          <option value="Manicure & Pedicure">Manicure & Pedicure</option>
        </select>
        <textarea name="notes" placeholder="Additional Notes" rows="3" onChange={handleChange} className="form-input"></textarea>
        <button type="submit" className="form-button">Submit</button>
      </form>
    </div>
  );
}
