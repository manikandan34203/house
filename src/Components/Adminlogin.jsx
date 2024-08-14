import React, { useState } from 'react';
import Navbar from './Navbar';  
import { useNavigate } from 'react-router-dom';
import '../Assets/Login.css';

function Adminlogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Perform login logic here (validate credentials, etc.)
    // If successful, navigate to Admin Dashboard
    console.log('Email:', email);
    console.log('Password:', password);
    if(email === "admin@gmail.com" && password === "admin@11")
      navigate('/admin-dashboard');
    else
      alert("Invalid login");
  };

  return (
    <main>
      <Navbar />
      <div id="form">
        <div className="form-left">
          <form className="form flexbox" onSubmit={handleLogin}>
            <div className="form-inner">
              <h2 className="form-title">Admin Login</h2>
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="btn-wrapper">
                  <button type="submit" value="submit" className="button btn-primary">
                    Sign In
                    <div className="btn-secondary"></div>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="form-right">
          <div className="right-top">
            <h1>If You Are A Owner</h1>
            <p>Login In Using This!</p>
          </div>
          <div className="right-bottom">
            <div className="btn-wrapper2">
              <button 
                type="button" 
                className="button2 btn-primary2"
                onClick={() => navigate('/ownerlogin')} // Navigate to Owner Login
              >
                Owner Login
                <div className="btn-secondary2"></div>
              </button>
            </div>
          </div>
          <div className="fbb-right-overlay"></div>
        </div>
      </div>
    </main>
  );
}

export default Adminlogin;
