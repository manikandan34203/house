import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Importing components
import Login from "./Components/Login";
import Signup from "./Components/SignUp";
import Adminlogin from './Components/Adminlogin';
import Ownerlogin from './Components/ownerlogin';
import CBEPage from "./Components/LandingPage";
import Pricing from "./Components/Pricing";
import AboutUs from "./Components/AboutUs";
import CoimbatorePage from "./Components/CoimbatorePage";
import ContactForm from "./Components/ContactUs";
import LandingPage from './Components/LandingPage';
import Chennai from './Components/Chennai';
import Hyderabad from './Components/Hyderabad';
import Pondicherry from './Components/Pondicherry';
import Bangalore from './Components/Bangalore';
import Footer from './Components/Footer';
import ChargesToPay from './Components/House1/ChargesToPay';
import PropertyDetails from './Components/House1/PropertyDetails';
import Propertydetailsche from './Components/Chennai/Propertydetailsche';
import AuthProvider from './Components/AuthContext';
import Navbar from './Components/Navbar';
import KanyaKumari from './Components/Kanyakumari';
import Propertydetailsbgr from './Components/Bangalore/Propertydetailsbgr';
import Propertydetailspdy from './Components/hyd/Propertydetailshyd';
import Propertydetailshyd from './Components/hyd/Propertieshyd';
import Payment from './Components/House1/Payment';
// import AdminDashboard from './Components/AdminDashboard';
import AdminDashboard from './Components/AdminDashboard';
import MainOwner from './Components/Owner/OwnerDash';
import AddPropertyForm from './Components/OwnerAddpro'; // Import the AddPropertyForm

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<CBEPage />} />
            <Route path="/Home" element={<LandingPage />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/SignUp" element={<Signup />} />
            <Route path="/Pricing" element={<Pricing />} />
            <Route path="/About" element={<AboutUs />} />
            <Route path="/contact" element={<ContactForm />} />
            <Route path="/CoimbatorePage" element={<CoimbatorePage />} />
            <Route path="/Kanyakumari" element={<KanyaKumari />} />
            <Route path="/Chennai" element={<Chennai />} />
            <Route path="/Hyderabad" element={<Hyderabad />} />
            <Route path="/Pondicherry" element={<Pondicherry />} />
            <Route path="/Bangalore" element={<Bangalore />} />

            {/* Property Detail Routes */}
            <Route path="/property/:id" element={<PropertyDetails />} />
            <Route path="/propertyche/:id" element={<Propertydetailsche />} />
            <Route path="/propertybgr/:id" element={<Propertydetailsbgr />} />
            <Route path="/propertypdy/:id" element={<Propertydetailspdy />} />
            <Route path="/propertyhyd/:id" element={<Propertydetailshyd />} />

            {/* Owner Routes */}
            <Route path="/Ownerlogin" element={<Ownerlogin />} />
            <Route path="/owner-dashboard" element={<MainOwner />} />
            <Route path="/add-property" element={<AddPropertyForm />} />

            {/* Admin Routes */}
            <Route path="/Adminlogin" element={<Adminlogin />} />
            <Route path="/admin-dashboard" element={<AdminDashboard />} />

            {/* Additional Routes */}
            <Route path="/charges-to-pay" element={<ChargesToPay />} />
            <Route path="/payment" element={<Payment />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
