// src/Components/PropertyCard.jsx
import React from 'react';
import { IoPricetags } from "react-icons/io5";
import { LuBuilding2 } from "react-icons/lu";
import { FaUserGroup } from "react-icons/fa6";
import { LuSofa } from "react-icons/lu";                    
import { LandPlot } from 'lucide-react';
import { Link } from 'react-router-dom';

const PropertyCard = ({ property }) => {
    return (
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
                    <span className='detail-text'>{property.bhk} BHK Independent House for rent in {property.villageName}, {property.district}</span>
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
    );
};

export default PropertyCard;
