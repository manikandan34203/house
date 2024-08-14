// CityCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import '../Assets/CityCard.css'; // Adjust path as needed

// Fix for missing default icons in leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const CityCard = ({ city }) => {
    const { name, image, latitude, longitude, description, link } = city;

    return (
        <Link to={link} className='city-card'>
            <div className='city-card-image'>
                <img src={image} alt={name} className='city-image' />
            </div>
            <div className='city-card-content'>
                <h2 className='city-name'>{name}</h2>
                <p className='city-description'>{description}</p>
            </div>
            <div className='map-container'>
                <MapContainer center={[latitude, longitude]} zoom={13} style={{ height: '200px', width: '100%' }}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution="&copy; <a href='https://osm.org/copyright'>OpenStreetMap</a> contributors"
                    />
                    <Marker position={[latitude, longitude]}>
                        <Popup>{name}</Popup>
                    </Marker>
                </MapContainer>
            </div>
        </Link>
    );
};

export default CityCard;
