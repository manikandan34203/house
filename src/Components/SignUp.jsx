import React, { useState } from 'react';
import axios from 'axios';
import '../Assets/Signup.css';
import Navbar from './Navbar';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();
    // Function to validate email
    const validateEmail = (email) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email) && email.endsWith('.com');
    };

    // Function to handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'email':
                setEmail(value);
                break;
            case 'password':
                setPassword(value);
                break;
            case 'confirmPassword':
                setConfirmPassword(value);
                break;
            default:
                break;
        }
    };

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate inputs
        if (name.trim() === '') {
            alert('Name must be filled');
            return;
        }

        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        if (!validateEmail(email)) {
            alert('Please enter a valid email address ending with .com');
            return;
        }

        // Prepare data for submission
        const userData = {
            name,
            email,
            password
        };

        try {
            const response = await axios.post('http://localhost:9001/create', userData);
            if (response.data) {
                navigate('/');
            }
            else {
                alert('email already in use');
            }
        } catch (error) {
            console.error('There was an error registering the user!', error);
            if (error.response && error.response.data) {
                alert(`Error: ${error.response.data.message || 'An error occurred'}`);
            } else {
                alert('Error registering user');
            }
        }
    };

    return (
        <main>
            <Navbar />
            <div id="form">
                <div className="form-left">
                    <form className="form flexbox" onSubmit={handleSubmit}>
                        <div className="form-inner">
                            <h2 className="form-title">Signup</h2>
                            <div className="fii-wrapper">
                                <div className="form-input-wrapper">
                                    <input
                                        className="form-input"
                                        id="name"
                                        type="text"
                                        name="name"
                                        placeholder="Username"
                                        autoComplete="off"
                                        value={name}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div className="form-input-wrapper">
                                    <input
                                        className="form-input"
                                        id="email"
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        autoComplete="off"
                                        value={email}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div className="form-input-wrapper">
                                    <input
                                        className="form-input"
                                        id="password"
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                        value={password}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div className="form-input-wrapper">
                                    <input
                                        className="form-input"
                                        id="confirmPassword"
                                        type="password"
                                        name="confirmPassword"
                                        placeholder="Confirm Password"
                                        autoComplete="off"
                                        value={confirmPassword}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div className="btn-wrapper">
                                    <button type="submit" className="button btn-primary">
                                        Sign Up
                                        <div className="btn-secondary"></div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="form-right">
                    <div className="right-top">
                        <h1>Don't have an account?</h1>
                        <p>Already have an account!</p>
                    </div>
                    <div className="right-bottom">
                        <div className="btn-wrapper2">
                            <Link to='/Login'>
                                <button type="button" className="button2 btn-primary2">
                                    Sign In
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

export default Signup;
