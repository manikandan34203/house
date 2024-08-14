import React, { useState, useEffect } from 'react';
import { IoPricetags } from "react-icons/io5";
import { LuBuilding2 } from "react-icons/lu";
import { FaUserGroup } from "react-icons/fa6";
import { LuSofa } from "react-icons/lu";                    
import { LandPlot } from 'lucide-react';
import { FaFilter } from "react-icons/fa";
import house1 from '../Assets/CBEImages/house1.jpg';
import house2 from '../Assets/CBEImages/house2.jpg';
import house3 from '../Assets/CBEImages/house3.avif';
import house4 from '../Assets/CBEImages/house4.avif';
import house5 from '../Assets/CBEImages/house5.webp';
import house6 from '../Assets/CBEImages/house6.jpeg';
import house7 from '../Assets/CBEImages/house7.jpeg';
import '../Assets/Coimbatore.css'; // Import the CSS file
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const properties = [
    {
    id: 1,
    price: 9000,
    bhk: 1,
    villageName: 'Guindy',
    district: 'Chennai',
    squareFeet: 1300,
    furnish: 'Furnished',
    availableFor: 'Family',
    image: house1
},
{
    id: 2,
    price: 12000,
    bhk: 2,
    villageName: 'Perur',
    district: 'Chennai',
    squareFeet: 1800,
    furnish: 'Unfurnished',
    availableFor: 'Family & Bachelor',
    image: house2
},
{
    id: 3,
    price: 25000,
    bhk: 3,
    villageName: 'Vellachery',
    district: 'Chennai',
    squareFeet: 2750,
    furnish: 'Furnished',
    availableFor: 'Family',
    image: house3
},
{
    id: 4,
    price: 22000,
    bhk: 3,
    villageName: 'Ganapathy',
    district: 'Chennai',
    squareFeet: 2000,
    furnish: 'Furnished',
    availableFor: 'Family',
    image: house4
},
{
    id: 5,
    price: 5750,
    bhk: 1,
    villageName: 'Anna nagar',
    district: 'Chennai',
    squareFeet: 700,
    furnish: 'Unfurnished',
    availableFor: 'Family',
    image: house5
},
{
    id: 6,
    price: 13000,
    bhk: 2,
    villageName: 'Kodambakkam',
    district: 'Chennai',
    squareFeet: 1000,
    furnish: 'Furnished',
    availableFor: 'Family',
    image: house6
},
{
    id: 7,
    price: 14000,
    bhk: 2,
    villageName: 'Ramanandha Nagar',
    district: 'Chennai',
    squareFeet: 1930,
    furnish: 'Furnished',
    availableFor: 'Family',
    image: house7
}
// Add m
    // your property data
];  

const Bangalore = () => {
    const [filteredProperties, setFilteredProperties] = useState([]);
    const [showMoreFilters, setShowMoreFilters] = useState(false);
    const [showBhkOptions, setShowBhkOptions] = useState(false);
    const [showFurnishedOptions, setShowFurnishedOptions] = useState(false);
    const [selectedBhk, setSelectedBhk] = useState(null);
    const [selectedFurnish, setSelectedFurnish] = useState(null);
    const [sortOrder, setSortOrder] = useState('asc'); // 'asc' for ascending, 'desc' for descending

    useEffect(() => {
        // Initially set all properties as filtered
        setFilteredProperties(properties);
        window.scrollTo(0, 0); // Scroll to the top of the page 
    }, []);

    const handleFilter = (minPrice, maxPrice, bhk, furnish) => {
        let filtered = properties;
        
        // Apply price filter if minPrice and maxPrice are provided
        if (minPrice !== null && maxPrice !== null) {
            filtered = filtered.filter(property => property.price >= minPrice && property.price <= maxPrice);
        }
        
        // Apply BHK filter if provided
        if (bhk !== null) {
            filtered = filtered.filter(property => property.bhk === bhk);
        }
        
        // Apply furnishing type filter if provided
        if (furnish !== null) {
            filtered = filtered.filter(property => property.furnish === furnish);
        }
        
        // Apply sorting
        filtered.sort((a, b) => sortOrder === 'asc' ? a.price - b.price : b.price - a.price);
        
        setFilteredProperties(filtered);
    };

    const handlePriceRangeClick = (minPrice, maxPrice) => {
        handleFilter(minPrice, maxPrice, selectedBhk, selectedFurnish);
    };

    const handleAllCategories = () => {
        // Reset all filters to show all properties
        setSelectedBhk(null);
        setSelectedFurnish(null);
        handleFilter(null, null, null, null);
    };

    const handleSortByPrice = () => {
        const newSortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
        setSortOrder(newSortOrder);
        handleFilter(null, null, selectedBhk, selectedFurnish);
    };

    const handleMouseOverMoreFilters = () => {
        setShowMoreFilters(true);
    };

    const handleMouseLeaveMoreFilters = () => {
        setShowMoreFilters(false);
    };

    const handleMouseOverBhk = () => {
        setShowBhkOptions(true);
    };

    const handleMouseLeaveBhk = () => {
        setShowBhkOptions(false);
    };

    const handleMouseOverFurnished = () => {
        setShowFurnishedOptions(true);
    };

    const handleMouseLeaveFurnished = () => {
        setShowFurnishedOptions(false);
    };

    return (
        <div>
            <Navbar />
            <div className='cbe-body'>
                <div className='coimbatore-page'>
                    <header className='header1'>
                        <h1>Independent Houses for Rent in Bangalore</h1>
                    </header>
                    <div className='filter-container'>
                        <div className='filter-buttons'>
                            <button onClick={handleSortByPrice} className='filter-button'>
                                Sort By Price {sortOrder === 'asc' ? '↑' : '↓'}
                            </button>
                            <button onClick={handleAllCategories} className='filter-button'>All Categories</button>
                            <button onClick={() => handlePriceRangeClick(0, 10000)} className='filter-button'>₹0 - ₹10000</button>
                            <button onClick={() => handlePriceRangeClick(10001, 20000)} className='filter-button'>₹10001-₹20000</button>
                            <button onClick={() => handlePriceRangeClick(20001, 30000)} className='filter-button'>₹20001-₹30000</button>

                            <div
                                className='more-filters'
                                onMouseOver={handleMouseOverMoreFilters}
                                onMouseLeave={handleMouseLeaveMoreFilters}
                            >
                                <button className='filter-button'>More Filters <FaFilter /></button>
                                {showMoreFilters && (
                                    <div className='dropdown'>
                                        <div
                                            className='dropdown-item'
                                            onMouseOver={handleMouseOverBhk}
                                            onMouseLeave={handleMouseLeaveBhk}
                                        >
                                            Filter by BHK
                                            {showBhkOptions && (
                                                <div className='sub-dropdown'>
                                                    <div onClick={() => { setSelectedBhk(1); handleFilter(null, null, 1, selectedFurnish); }}>1 BHK</div>
                                                    <div onClick={() => { setSelectedBhk(2); handleFilter(null, null, 2, selectedFurnish); }}>2 BHK</div>
                                                    <div onClick={() => { setSelectedBhk(3); handleFilter(null, null, 3, selectedFurnish); }}>3 BHK</div>
                                                </div>
                                            )}
                                        </div>
                                        <div
                                            className='dropdown-item'
                                            onMouseOver={handleMouseOverFurnished}
                                            onMouseLeave={handleMouseLeaveFurnished}
                                        >
                                            Filter by Furnished Type
                                            {showFurnishedOptions && (
                                                <div className='sub-dropdown'>
                                                    <div onClick={() => { setSelectedFurnish('Furnished'); handleFilter(null, null, selectedBhk, 'Furnished'); }}>Furnished</div>
                                                    <div onClick={() => { setSelectedFurnish('Unfurnished'); handleFilter(null, null, selectedBhk, 'Unfurnished'); }}>Unfurnished</div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className='property-grid'>
                        {filteredProperties.length === 0 ? (
                            <h1>No Results Found</h1>
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
                                        <Link to={`/propertybgr/${property.id}`}>View Details</Link>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
           
        </div>
    );
};

export default Bangalore;