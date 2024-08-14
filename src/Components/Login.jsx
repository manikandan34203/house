import React, { useState } from 'react';
import axios from 'axios';
import '../Assets/Login.css';
import Navbar from './Navbar';  
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  // State hooks for form fields and errors
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate(); // For navigation after successful login

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  // Validate the form inputs
  const validateForm = () => {
    const newErrors = {};
    if (!email) {
      newErrors.email = 'Email is required';
    }
    if (!password) {
      newErrors.password = 'Password is required';
    }
    return newErrors;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await axios.post('http://localhost:9001/login', {email, password},{headers:{
          'Content-Type':'application/json',
        },
      });
        if (response.data) {
            navigate('/');
        } else {
            alert('invalid credentials');
        }
    } catch (error) {
        console.error('There was an error registering the user!', error);
        if (error.response && error.response.data) {
            alert(`Error: ${error.response.data.message || 'An error occurred'}`);
        } else {
            alert('Error registering user');
        }
    }
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <main>
      <Navbar />
      <div id="form">
        <div className="form-left">
          <form className="form flexbox" onSubmit={handleSubmit}>
            <div className="form-inner">
              <h2 className="form-title">Login</h2>
              <div className="fii-wrapper">
                <div className="form-input-wrapper">
                  <input
                    className="form-input"
                    id="email"
                    type="text"
                    name="email"
                    value={email}
                    placeholder="Email"
                    autoComplete="off"
                    aria-label=""
                    onChange={handleChange}
                    required
                  />
                  {errors.email && <p className="error-text">{errors.email}</p>}
                </div>
                <div className="form-input-wrapper">
                  <input
                    className="form-input"
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    placeholder="Password"
                    aria-label=""
                    onChange={handleChange}
                    required
                  />
                  {errors.password && <p className="error-text">{errors.password}</p>}
                </div>
                <div className="btn-wrapper">
                  <button type="submit" className="button btn-primary">
                    Sign In
                    <div className="btn-secondary"></div>
                  </button>
                </div>
                <div className="loginform-newaccount">
                  <p className="login-para">Not have an Account? <Link className="login-link" to="/Signup">New Account.</Link></p>
                  <p className="login-para">If You Are a Owner-<Link className="login-link" to="/Ownerlogin">Login here</Link></p>
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
              <Link to='/Adminlogin'>
                <button type="button" className="button2 btn-primary2">
                  Admin Login
                  <div className="btn-secondary2"></div>
                </button>
              </Link>
            </div>
          </div>
          <div className="fbb-right-overlay"></div>
        </div>
      </div>
    </main>
  );
}

export default Login;
