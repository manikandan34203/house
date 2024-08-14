import React, { useState } from 'react';
import './Payment.css';
import im from './cbe/login.png';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Payment = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { plan } = location.state || {};  // Get the plan from the state

  // State for user information
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    aadhaarNumber: '',
    phoneNumber: ''
  });

  // Function to load the Razorpay script dynamically
  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = src;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Function to handle payment process
  const handlePayment = async () => {
    const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js');

    if (!res) {
      alert('Razorpay SDK failed to load. Are you online?');
      return;
    }

    const options = {
      key: 'rzp_test_GcZZFDPP0jHtC4',
      amount: plan === 'essential' ? 29900 : plan === 'extra' ? 49900 : 79900,
      currency: 'INR',
      name: 'Play+',
      description: `${plan} Plan Payment`,
      image: im,  // Use the imported image variable directly
      handler: function (response) {
        alert(`Payment ID: ${response.razorpay_payment_id}`);
        alert(`Order ID: ${response.razorpay_order_id}`);
        alert(`Signature: ${response.razorpay_signature}`);
        navigate("/last");
      },
      prefill: {
        name: formData.name,
        email: 'tonystark@example.com', // This could also be updated based on user input
        contact: formData.phoneNumber
      },
      notes: {
        address: formData.address
      },
      theme: {
        color: '#F37254'
      }
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('http://localhost:9001/submit', {
        ...formData,
        plan: plan,  // Add the plan to the data being sent
      });
      
      console.log(response.data);
      handlePayment(); // Proceed with the payment process after saving data
    } catch (error) {
      console.error('There was an error saving the payment details!', error);
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(${im})`,  // Correctly use template literals for URL
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '120vh',
      }}
    >
      <div className="container-ii">
        <h2>Fill Your Personal Details {plan}</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input 
              type="text" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              required 
            />
          </label>
          <label>
            Address:
            <input 
              type="text" 
              name="address" 
              value={formData.address} 
              onChange={handleChange} 
              required 
            />
          </label>
          <label>
            Aadhaar Number:
            <input 
              type="text" 
              name="aadhaarNumber" 
              value={formData.aadhaarNumber} 
              onChange={handleChange} 
              required 
            />
          </label>
          <label>
            Phone Number:
            <input 
              type="tel" 
              name="phoneNumber" 
              value={formData.phoneNumber} 
              onChange={handleChange} 
              required 
            />
          </label>
          <button type="submit">Pay Now</button>
        </form>
      </div>
    </div>
  );
};

export default Payment;
