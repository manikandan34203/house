import React, { useState } from 'react';
import '../Assets/ContactUs.css'; // Import the CSS file
import Navbar from './Navbar';
import Banner from '../Assets/bg/Banner.jpg';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    topic: '',
    name: '',
    email: '',
    mobile: '',
    location: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:9001/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({
          topic: '',
          name: '',
          email: '',
          mobile: '',
          location: '',
          message: ''
        });
      } else {
        alert('Failed to send message.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="header-img">
        <img src={Banner} alt="Banner-img" className="banner-image-abt" />
        <div className="overlay-text">
          <h2>Contact Us - Get Help & Friendly Support</h2>
        </div>
      </div>
      <div className="contact-container">
        <div className="contact-form-box">
          <h1 className="contact-form-heading">Contact Us</h1>
          <form onSubmit={handleSubmit}>
            <div className="contact-form-field">
              <label htmlFor="topic">Choose Topic</label>
              <select id="topic" name="topic" value={formData.topic} onChange={handleChange} required>
                <option value="">Choose Topic</option>
                <option value="general">General Enquiry</option>
                <option value="business">Already Booked</option>
              </select>
            </div>
            <div className="contact-form-field">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="contact-form-field">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="contact-form-field">
              <label htmlFor="mobile">Mobile (Optional)</label>
              <input type="tel" id="mobile" name="mobile" value={formData.mobile} onChange={handleChange} />
            </div>
            <div className="contact-form-field">
              <label htmlFor="location">Location</label>
              <select id="location" name="location" value={formData.location} onChange={handleChange}>
                <option value="">Select Location</option>
                <option value="chennai">Chennai</option>
                <option value="mumbai">Mumbai</option>
                <option value="delhi">Delhi</option>
                <option value="hyderabad">Hyderabad</option>
                <option value="puducherry">Puducherry</option>
              </select>
            </div>
            <div className="contact-form-field">
              <label htmlFor="message">Your Message</label>
              <textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Write your message" required></textarea>
            </div>
            <button type="submit" className="contact-form-button">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
