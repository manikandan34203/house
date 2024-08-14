import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Assets/MainOwner.css';

const OwnerDashboard = () => {
  const navigate = useNavigate();

  const handleAddProperty = () => {
    navigate('/add-property');
  };

  return (
    <div className="star-dashboard">
      <h1>Welcome to the Owner Dashboard</h1>
      
      <button className="add-property-button" onClick={handleAddProperty}>
        Add Property
      </button>
    </div>
  );
};

export default OwnerDashboard;
