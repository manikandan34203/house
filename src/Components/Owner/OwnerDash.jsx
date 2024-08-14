import React, { useState, useEffect } from 'react';
import { IoPricetags } from "react-icons/io5";
import { LuBuilding2 } from "react-icons/lu";
import { useNavigate } from 'react-router-dom';
import { FaUserGroup } from "react-icons/fa6";
import { LuSofa } from "react-icons/lu";
import { LandPlot } from 'lucide-react';

import { Link } from 'react-router-dom';

// Add other house imports as needed

// Sample properties for OwnerDashboard
const properties = [
    {
        id: 1,
        price: 9000,
        bhk: 1,
        villageName: 'Saravanampatti',
        district: 'Coimbatore',
        squareFeet: 1300,
        furnish: 'Furnished',
        availableFor: 'Family',
        image: "",
        link: '/prod1'
    },
    // Add more properties if needed
];

const OwnerDashboard = () => {
  const navigate = useNavigate();
    const [filteredProperties, setFilteredProperties] = useState([]);

    useEffect(() => {
        // Initially set all properties as filtered
        setFilteredProperties(properties);
        window.scrollTo(0, 0); // Scroll to the top of the page 
    }, []);

    return (
        <div className="owner-dashboard"><br></br>
            <header className='dashboard-header'>
                <h1>Welcome to the Owner Dashboard</h1>
            </header>
            <button className="add-property-button" onClick={() => navigate('/add-property')}>
                Add Property
            </button>
            <div className='property-grid'>
                {filteredProperties.length === 0 ? (
                    <h1>No Properties Found</h1>
                ) : (
                    filteredProperties.map(property => (
                        <div key={property.id} className='property-card'>
                            <div className='property-image'>
                                <img src={property.image} alt="House" />
                            </div>
                            <div className='property-details'>
                                <p className='price'>
                                    <IoPricetags className='price-icon' />
                                    <span className='price-text'>Price: ₹{property.price}</span>
                                </p>
                                <p className='bhk'>
                                    <LuBuilding2 className='price-icon' />
                                    <span className='detail-text'>{property.bhk} BHK Independent House in {property.villageName}, {property.district}</span>
                                </p>
                                <p className='square-feet'>
                                    <LandPlot className='price-icon' />
                                    <span className='detail-text'>Square feet: {property.squareFeet} ft</span>
                                </p>
                                <p className='square-feet'>
                                    <LuSofa className='price-icon' />
                                    <span className='detail-text'>Furnished Type: {property.furnish}</span>
                                </p>
                                <p className='available-for'>
                                    <FaUserGroup className='price-icon' />
                                    <span className='detail-text'>Available for: {property.availableFor}</span>
                                </p>
                                <div className='grid-button'>
                                    <Link to={`/property/${property.id}`}>View Details</Link>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default OwnerDashboard;
