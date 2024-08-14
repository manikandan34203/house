import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import '../Assets/Layout.css';

const Layout = ({ children }) => {
  const location = useLocation();
  const showNavbarAndFooter = location.pathname !== '/login'; // Exclude Navbar and Footer on /login

  return (
    <div>
      {showNavbarAndFooter && <Navbar />}
      <main>{children}</main>
      {showNavbarAndFooter && <Footer />}
    </div>
  );
};

export default Layout;
