// AddPropertyForm.js
import React, { useState } from 'react';
import axios from 'axios';

const AddPropertyForm = () => {
    const [propertyDetails, setPropertyDetails] = useState({
        amount: '',
        bhk: '',
        squareFeet: '',
        furnishing: '',
        bathrooms: '',
        floor: '',
        propertyType: '',
        family: '',            // Updated field for Family/Bachelor
        location: '',          // New field for Location
        area: '',              // New field for Area
        maintenance: '',       // New field for Maintenance
        leaseType: '',         // New field for Lease Type
        balcony: '',           // New field for Balcony
        image: null            // New field for Image
    });

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        if (type === 'file') {
            setPropertyDetails({
                ...propertyDetails,
                [name]: files[0],
            });
        } else {
            setPropertyDetails({
                ...propertyDetails,
                [name]: value,
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Handle form submission, e.g., send the details to the server
        console.log('Property Details:', propertyDetails);
        // alert('Property added successfully!');
    const formData = new FormData();
    for (const key in propertyDetails) {
        formData.append(key, propertyDetails[key]);
    }

    try {
        const response = await axios.post('http://localhost:9001/properties/insert', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        
        console.log('Property added:', response.data);
        setPropertyDetails({
            amount: '',
            bhk: '',
            squareFeet: '',
            furnishing: '',
            bathrooms: '',
            floor: '',
            propertyType: '',
            family: '',
            location: '',
            area: '',
            maintenance: '',
            leaseType: '',
            balcony: '',
            image: null,
        });
        alert('Property added successfully!');
    } catch (error) {
        console.error('Error adding property:', error);
        alert('Failed to add property.');
    }
};

    return (
        <form onSubmit={handleSubmit} style={formStyle}>
            <h2 className="bhu">Add Property Details</h2>
            
            <label style={labelStyle}>
                Property Amount:
                <input 
                    type="number" 
                    name="amount" 
                    value={propertyDetails.amount} 
                    onChange={handleChange} 
                    style={inputStyle} 
                    required 
                />
            </label>

            <label style={labelStyle}>
                BHK:
                <select 
                    name="bhk" 
                    value={propertyDetails.bhk} 
                    onChange={handleChange} 
                    style={inputStyle} 
                    required
                >
                    <option value="" disabled>Select BHK</option>
                    <option value="1">1 BHK</option>
                    <option value="2">2 BHK</option>
                    <option value="3">3 BHK</option>
                    <option value="4">4 BHK</option>
                </select>
            </label>

            <label style={labelStyle}>
                Square Feet:
                <input 
                    type="number" 
                    name="squareFeet" 
                    value={propertyDetails.squareFeet} 
                    onChange={handleChange} 
                    style={inputStyle} 
                    required 
                />
            </label>

            <label style={labelStyle}>
                Furnishing Details:
                <select 
                    name="furnishing" 
                    value={propertyDetails.furnishing} 
                    onChange={handleChange} 
                    style={inputStyle} 
                    required
                >
                    <option value="" disabled>Select Furnishing</option>
                    <option value="Fully Furnished">Fully Furnished</option>
                    <option value="Semi-Furnished">Semi-Furnished</option>
                    <option value="Unfurnished">Unfurnished</option>
                </select>
            </label>

            <label style={labelStyle}>
                Bathrooms Available:
                <input 
                    type="number" 
                    name="bathrooms" 
                    value={propertyDetails.bathrooms} 
                    onChange={handleChange} 
                    style={inputStyle} 
                    required 
                />
            </label>

            <label style={labelStyle}>
                Floor Available:
                <input 
                    type="number" 
                    name="floor" 
                    value={propertyDetails.floor} 
                    onChange={handleChange} 
                    style={inputStyle} 
                    required 
                />
            </label>

            <label style={labelStyle}>
                About the Property:
                <input 
                    type="text" 
                    name="propertyType" 
                    value={propertyDetails.propertyType} 
                    onChange={handleChange} 
                    style={inputStyle} 
                    required 
                />
            </label>

            <label style={labelStyle}>
                Available For :
                <select 
                    name="family" 
                    value={propertyDetails.family} 
                    onChange={handleChange} 
                    style={inputStyle} 
                    required
                >
                    <option value="" disabled>Select Option</option>
                    <option value="Family">Family</option>
                    <option value="Bachelor">Bachelor</option>
                    <option value="Both">Family & Bachelor</option>
                </select>
            </label>

            <label style={labelStyle}>
                Location:
                <select 
                name="location" 
                value={propertyDetails.location} 
                onChange={handleChange} 
                style={inputStyle} 
                required
            >
                <option value="" disabled>Select Location</option>
                <option value="Family">Mumbai</option>
                <option value="Bachelor">Delhi</option>
                <option value="Both">Hyderabad</option>
                <option value="Family">Chennai</option>
                <option value="Bachelor">Bangalore</option>
                <option value="Both">Pondicherry</option>
            </select>
            </label>

            <label style={labelStyle}>
                Area Location:
                <input 
                type="text" 
                name="area" 
                value={propertyDetails.area} 
                onChange={handleChange} 
                style={inputStyle} 
                required 
            />
            </label>

            <label style={labelStyle}>
                Maintenance (in USD):
                <input 
                    type="number" 
                    name="maintenance" 
                    value={propertyDetails.maintenance} 
                    onChange={handleChange} 
                    style={inputStyle} 
                    required 
                />
            </label>

            <label style={labelStyle}>
                Lease Type:
                <select 
                    name="leaseType" 
                    value={propertyDetails.leaseType} 
                    onChange={handleChange} 
                    style={inputStyle} 
                    required
                >
                    <option value="" disabled>Select Lease Type</option>
                    <option value="Monthly">Monthly</option>
                    <option value="Yearly">Yearly</option>
                </select>
            </label>

            <label style={labelStyle}>
                Balcony:
                <select 
                    name="balcony" 
                    value={propertyDetails.balcony} 
                    onChange={handleChange} 
                    style={inputStyle} 
                    required
                >
                    <option value="" disabled>Select Option</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
            </label>

            <label style={labelStyle}>
                Upload Image:
                <input 
                    type="file" 
                    name="image" 
                    onChange={handleChange} 
                    style={inputStyle} 
                    required 
                />
            </label>

            <button type="submit" style={buttonStyle}>Add Property</button>
        </form>
    );
};

// Styles
const formStyle = {
    maxWidth: '500px',  // Adjusted width for additional fields
    margin: '20px auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    backgroundColor: '#f9f9f9',
};

const labelStyle = {
    display: 'block',
    marginBottom: '10px',
    fontWeight: 'bold',
};

const inputStyle = {
    width: '100%',
    padding: '8px',
    margin: '5px 0 15px 0',
    borderRadius: '4px',
    border: '1px solid #ccc',
    boxSizing: 'border-box',
};

const buttonStyle = {
    width: '100%',
    padding: '10px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontWeight: 'bold',
};

export default AddPropertyForm;
