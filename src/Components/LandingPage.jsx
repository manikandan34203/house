// LandingPage.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Assets/LandingPage.css'; // Ensure this path is correct
import Navbar from './Navbar';
import Chennai from '../Assets/loc/Chennai.jpg';
import Kovai from '../Assets/bg/mumbay.jpg';
import KK from '../Assets/bg/delhi.jpg';
import Hyd from '../Assets/loc/Hyd.jpg';
import Pondy from '../Assets/loc/Pondy.jpg';
import Banglore from '../Assets/loc/Banglore.jpg';
import homevd2 from '../Assets/bg/homevd2.mp4'; // Ensure this path is correct
import CityCard from '../Components/CityCard';

const cities = [
    { id: 1, name: 'Mumbai', image: Kovai, latitude: 19.0760, longitude: 72.8777, description: 'A bustling metropolis known for its vibrant culture and economic opportunities.', link: '/CoimbatorePage' },
    { id: 2, name: 'Chennai', image: Chennai, latitude: 13.0827, longitude: 80.2707, description: 'The capital of Tamil Nadu, famous for its rich heritage and coastal beauty.', link: '/Chennai' },
    { id: 3, name: 'Delhi', image: KK, latitude: 28.6139, longitude: 77.2090, description: 'The national capital, known for its historical monuments and diverse culture.', link: '/KanyaKumari' },
    { id: 4, name: 'Hyderabad', image: Hyd, latitude: 17.3850, longitude: 78.4867, description: 'A city known for its historical landmarks and IT industry.', link: '/Hyderabad' },
    { id: 5, name: 'Pondicherry', image: Pondy, latitude: 11.9130, longitude: 79.8144, description: 'A coastal town with a unique blend of French and Indian cultures.', link: '/Pondicherry' },
    { id: 6, name: 'Bangalore', image: Banglore, latitude: 12.9716, longitude: 77.5946, description: 'The Silicon Valley of India, known for its IT industry and pleasant weather.', link: '/Bangalore' }
];

const LandingPage = () => {
    const [searchInput, setSearchInput] = useState('');

    const handleSearchChange = (e) => {
        setSearchInput(e.target.value);
    };

    const handleSearchClick = () => {
        console.log(`Searching for: ${searchInput}`);
    };

    const filteredCities = cities.filter(city =>
        city.name.toLowerCase().includes(searchInput.toLowerCase())
    );

    return (
        <div className='landing-page'>
            <Navbar />
            <div className='content'>
                <div className='house-image'>
                    <video autoPlay loop muted className='house-image-video'>
                        <source src={homevd2} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div className='house-image-text'>
                        <h1>Find A Home You Will Love!!</h1>
                        <p>Find new & featured property located in your city</p>
                    </div>
                </div>
                <div className='main-content'>
                    <h1 className='heading'>Choose Your Location</h1>
                    <div className='search-container'>
                        <input
                            type="text"
                            placeholder="Search for a city..."
                            value={searchInput}
                            onChange={handleSearchChange}
                            className='search-bar'
                        />
                        <button onClick={handleSearchClick} className='search-button'>Search</button>
                    </div>
                    <div className='city-grid'>
                        {filteredCities.map((city) => (
                            <CityCard key={city.id} city={city} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
