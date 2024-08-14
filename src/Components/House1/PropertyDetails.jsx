import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import properties from './Properties'; // Import properties array
import './PropertyDetails.css'; // Import CSS for styling
import Navbar from '../Navbar';
import ImageModal from './ImageModal'; // Import the ImageModal component

const PropertyDetails = () => {
    const { id } = useParams();
    const property = properties.find(p => p.id === parseInt(id));
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState('');

    if (!property) {
        return <div>Property not found</div>;
    }

    const handleNavClick = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const openModal = (imageUrl) => {
        setCurrentImage(imageUrl);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
        setCurrentImage('');
    };

    return (
        <div className="property-detailspd">
           <Navbar/>
            <h1>{property.title}</h1>
           
            <div className="house1pd-tags">
                <span className="house1pd-tag">Managed By Owner</span>
                <span className="house1pd-tag">{property.bhk} BHK</span>
                <span className="house1pd-tag">Available For {property.availableFor}</span>
            </div>
            <div className="house1pd-imageGrid">
                <img
                    src={property.image}
                    alt="House"
                    className="house1pd-mainImage"
                    onClick={() => openModal(property.image)}
                />
                <div className="house1pd-sideImages">
                    <img src={property.image1} alt="House part" onClick={() => openModal(property.image1)} />
                    <img src={property.image2} alt="House part" onClick={() => openModal(property.image2)} />
                    <img src={property.image3} alt="House part" onClick={() => openModal(property.image3)} />
                    <img src={property.image4} alt="House part" onClick={() => openModal(property.image4)} />
                </div>
            </div>
            <div className="property-navpd">
                <button className="nav-itempd active" onClick={() => handleNavClick('about')}>Overview</button>
                <button className="nav-itempd" onClick={() => handleNavClick('amenities')}>Amenities</button>
                <button className="nav-itempd" onClick={() => handleNavClick('nearby')}>Explore nearby</button>
                <button className="nav-itempd" onClick={() => handleNavClick('rent')}>Rent details</button>
                <button className="nav-itempd" onClick={() => handleNavClick('terms')}>Terms of stay</button>
            </div>
            <div id="about" className="property-aboutpd">
                <h2>About</h2>
                <p>{property.description}</p>
            </div>
            <div id="overview" className="property-overviewpd">
                <div className="overview-itempd">
                    <span>{property.bhk} bedroom</span>
                </div>
                <div className="overview-itempd">
                    <span>{property.bathroom} bathroom</span>
                </div>
                <div className="overview-itempd">
                    <span>{property.squareFeet} (sq.ft)</span>
                </div>
                <div className="overview-itempd">
                    <span>Year of construction: {property.yearOfConstruction}</span>
                </div>
                <div className="overview-itempd">
                    <span>{property.facing} Facing</span>
                </div>
                <div className="overview-itempd">
                    <span>{property.furnish}</span>
                </div>
            </div>
            <div id="rent" className="rent-depositpd">
                <div className="detailspd">
                    <div className="headerpd">
                        <h2>Rent & Deposit</h2>
                        <Link to='/charges-to-pay'>
                            <button className="button-86">BOOK NOW</button>
                        </Link>
                    </div>
                    <div className="bookingpd">
                        <span>Book entire house</span>
                    </div>
                    <div className="house-infopd">
                        <div className="house-imagepd-container">
                            <img src={property.image} alt="House" className="house-imagepd" onClick={() => openModal(property.image)} />
                            <span className="house-statuspd">Available</span>
                        </div>
                        <div className="house-detailspd">
                            <div className="house-availabilitypd">
                                <h3>House</h3>
                                <p>Available From {property.availableFrom}</p>
                            </div>
                            <div className="house-costpd">
                                <p>Rent: ₹ {property.price}</p>
                                <p>Deposit: ₹ {property.deposit}</p>
                            </div>
                        </div>
                    </div>
                    <div className="house-policiespd">
                        <h3>Policies</h3>
                        <ul>
                            <li>Check-in time: {property.checkIn}</li>
                            <li>Check-out time: {property.checkOut}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div id="terms" className="property-terms">
                <h2>Terms of Stay</h2>
                <p>{property.terms}</p>
            </div>
            <div id="nearby" className="property-nearby">
                <h2>Explore Nearby</h2>
                <p>{property.nearby}</p>
            </div>
            {modalIsOpen && (
                <ImageModal
                    imageUrl={currentImage}
                    onClose={closeModal}
                />
            )}
        </div>
    );
};

export default PropertyDetails;
