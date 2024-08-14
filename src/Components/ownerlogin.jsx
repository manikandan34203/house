import React, { useState } from 'react';
import Navbar from './Navbar';  
import { useNavigate } from 'react-router-dom';
import '../Assets/Login.css';

function Ownerlogin() {
  const navigate = useNavigate();

  // State hooks for email and password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Perform login logic here, e.g., validate credentials
    console.log('Email:', email);
    console.log('Password:', password);
    // If successful, navigate to Owner Dashboard
    if(email === "owner@gmail.com" && password === "owner@11")
      navigate('/owner-dashboard');
    else{
      alert("Invalid admin login");
    }
  };

  return (
    <main>
      <Navbar />
      <div id="form">
        <div className="form-left">
          <form className="form flexbox" onSubmit={handleLogin}>
            <div className="form-inner">
              <h2 className="form-title">Owner Login</h2>
              <div className="fii-wrapper">
                <div className="form-input-wrapper">
                  <input
                    className="form-input"
                    id="name"
                    type="text"
                    name="navn"
                    placeholder="Email"
                    autoComplete="off"
                    aria-label=""
                    required
                    value={email} // Bind state to input
                    onChange={(e) => setEmail(e.target.value)} // Update state on change
                  />
                </div>
                <div className="form-input-wrapper">
                  <input
                    className="form-input"
                    type="password"
                    id="password"
                    name="passord"
                    placeholder="Password"
                    aria-label=""
                    required
                    value={password} // Bind state to input
                    onChange={(e) => setPassword(e.target.value)} // Update state on change
                  />
                </div>
                <div className="btn-wrapper">
                  <button type="submit" value="submit" className="button btn-primary">
                    Sign In
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="form-right">
          <div className="right-top">
            <h1>If You Are An Owner</h1>
            <p>Login In Using This!</p>
          </div>
          <div className="right-bottom">
            <div className="btn-wrapper2">
              <button 
                type="button" 
                className="button2 btn-primary2"
                onClick={() => navigate('/adminlogin')} // Navigate to Admin Login
              >
                Admin Login
              </button>
            </div>
          </div>
          <div className="fbb-right-overlay"></div>
        </div>
      </div>
    </main>
  );
}

export default Ownerlogin;
