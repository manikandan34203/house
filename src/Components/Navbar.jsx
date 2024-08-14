import React from 'react';
import '../Assets/Navbar.css';
import { Link, useLocation } from 'react-router-dom';
import logoh from '../Assets/bg/logoh.png';

const Navbar = () => {
    const location = useLocation(); // Get the current location
    return (
        <nav className='navbar'>
            <div className='navbar-left'>
                <h1 className='navbar-heading'>
                    <Link to="/Home">
                        <img src={logoh} className="nav-logo" alt='logo'/>
                    </Link>
                </h1>
            </div>
            <div className='navbar-center'>
                <Link to='/' className='navbar-link'>Home</Link>
                <Link to='/About' className='navbar-link'>About</Link>
                <Link to='/Pricing' className='navbar-link'>Pricing</Link>
                <Link to='/Contact' className='navbar-link'>Contact Us</Link>
            </div>
            <div className='navbar-right'>
                <Link to='/Login' id="nav-login" className='navbar-link'><p>Login</p></Link>
                {/* <Link to='/SignUpPage' className='navbar-link'>Sign Up</Link> Updated Link */}
            </div>
        </nav>
    );
}

export default Navbar;
