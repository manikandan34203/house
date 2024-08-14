// src/Pricing.js
import React from 'react';
import '../Assets/Pricing .css';
import Navbar from './Navbar';
// import pricingg from '../Assets/bg/pricingg.jpg';
import Banner from '../Assets/bg/Banner.jpg';

const Pricing = () => {
  return (
    <div className="pricing-container">
      <Navbar />
      <div className="content">
        {/* <div className="house-image1">
          <img src={pricingg} alt="House" className="house-image-img1" />
          <div className="house-image-texte">
            <p>30days Money Return Guarantee</p>
            <h2>No Extra Fees. Friendly Support</h2>
          </div>
        </div> */}
        <div className="header-img">
        <img src={Banner} alt="Banner-img" className="banner-image-abt" id="prising-page-image"/>
        <div className="overlay-text">
          <h2 id="about-head">No Extra Fee,Frinedly Support</h2>
        </div>
      </div>
        
        <div className="pricing-section">
          <div className="pricing-card">
            <h2>Basic</h2>
            <p className="price">1BHK</p>
            <ul>
              <li>99.5% Uptime Guarantee</li>
              <li>120GB CDN Bandwidth</li>
              <li>5GB Cloud Storage</li>
            </ul>
            <button className="pricing-button">Select</button>
          </div>
          <div className="pricing-card">
            <h2>Standard</h2>
            <p className="price">2BHK</p>
            <ul>
              <li>
              99.5% Uptime Guarantee</li>
              <li>150GB CDN Bandwidth</li>
              <li>
              10GB Cloud Storage</li>
              
            </ul>
            <button className="pricing-button">Select</button>
          </div>
          <div className="pricing-card">
            <h2>Premium</h2>
            <p className="price">3BHK</p>
            <ul>
              <li>100% Uptime Guarantee</li>
              <li>F200GB CDN Bandwidth</li>
              <li>20GB Cloud Storage</li>
              
            </ul>
            <button className="pricing-button">Select</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
