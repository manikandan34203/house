import React from 'react';
import Navbar from './Navbar';
import '../Assets/AboutUs.css';
import abtus2 from '../Assets/bg/abtus2.png';
import renta from '../Assets/bg/renta.jpg';
import abtg from '../Assets/bg/abtg (Custom).jpeg';
import Abtus from '../Assets/bg/Abtus.png';
import Banner from '../Assets/bg/Banner.jpg'; // Import your banner image here

const AboutUsPage = () => {
  return (
    <div>
      <Navbar />
      <div className="header-img">
        <img src={Banner} alt="Banner-img" className="banner-image-abt" />
        <div className="overlay-text">
          <h2 id="about-head">About Us-Who We Are?</h2>
        </div>
      </div>
      <div className="container">
        <div className="about">
          <div className="left">
            <h1>About us</h1>
            <hr />
            <p>
              The most common problem – finding a home in the big city. Young people faced different kinds of discrimination.
              Single women and bachelors are considered unreliable. Migrants from other places are viewed with suspicion as they appear as ‘foreigners’ in a new city.
              Further, many newcomers did not have the knowhow to get around, lacking access to local insights in a new city.
              We concluded that people leaving homes to relocate to another city needed more than just a house. They needed a place they could call home, a community where they would be accepted and a platform which allows connections to various other access points.
            </p>
            <p>
              We soon realized that it was necessary to go beyond basics and create a platform that could do much more than just solve the immediate problems of space and peripherals.
              With globalization and communication taking a forefront, we are aware that society is becoming more disparate.
            </p>
          </div>
          <div className="right">
            <img className="about-page-image" src={abtg} alt="About Us" />
          </div>
          <div className="clear"></div>
        </div>
        <div className="mission">
          <div className="left">
            <img className="about-page-image" src={renta} alt="About Us" />
          </div>
          <div className="right">
            <h1>Mission Statement</h1>
            <hr />
            <p>
              Our mission is to provide exceptional rental homes that offer comfort, quality, and a sense of community.
              We are dedicated to creating inviting spaces where our tenants can thrive and feel truly at home. Through personalized service, attention to detail, and a commitment to excellence, we strive to enhance the rental experience and build lasting relationships with our residents.
              Our goal is to deliver a seamless, enjoyable living experience that meets the diverse needs and aspirations of our tenants.
            </p>
            <p>
              We want to address the issues of young migrants who are discriminated against for various reasons.
              We want to bridge the gap between youth and the older generation, finding common ground and making the relationships mutually beneficial.
            </p>
          </div>
          <div className="clear"></div>
        </div>
        <div className="team">
          <h1>
            Leading Owners<hr />
          </h1>
          <div className="card">
            <div className="circle-container">
              <h1 style={{ color: '#fff' }}>M</h1>
            </div>
            <h2>Lingesh</h2>
            <h4>Coimbatore</h4>
            <p>
              Leading owner in the town with highest rating.
            </p>
          </div>
          <div className="card">
            <div className="circle-container">
              <h1 style={{ color: '#fff' }}>M</h1>
            </div>
            <h2>jyo </h2>
            <h4>Madurai</h4>
            <p>
              Leading owner in the town with highest rating.
            </p>
          </div>
          <div className="card">
            <div className="circle-container">
              <h1 style={{ color: '#fff' }}>R</h1>
            </div>
            <h2>Hari</h2>
            <h4>Kanyakumari</h4>
            <p>
              Leading owner in the town with highest rating.
            </p>
          </div>
          <div className="card">
            <div className="circle-container">
              <h1 style={{ color: '#fff' }}>B</h1>
            </div>
            <h2>Sri</h2>
            <h4>Pondichery</h4>
            <p>
              Leading owner in the town with highest rating.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
