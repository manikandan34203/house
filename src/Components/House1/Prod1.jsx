// App.js
import React from 'react';
import './Prod1.css';
import houseImage from '../../Assets/Houseimg1/houseImage.jpg';

const Prod1 = () => {
  return (
    <div className="house1-container">
      <h1>Semi furnished 2 BHK in Hosakerehalli, Banashankari Stage 3</h1>
      <button className="house1-mapButton">Explore on Map</button>
      <div className="house1-tags">
        <span className="house1-tag">Managed By Owner</span>
        <span className="house1-tag">2 BHK</span>
        <span className="house1-tag">Available For Family</span>
      </div>
      <div className="house1-imageGrid">
        <img src={houseImage} alt="House" className="house1-mainImage"/>
        <div className="house1-sideImages">
          <img src={houseImage} alt="House part" />
          <img src={houseImage} alt="House part" />
          <img src={houseImage} alt="House part" />
          <img src={houseImage} alt="House part" />
        </div>
      </div>
    </div>
  );
};

export default Prod1;
