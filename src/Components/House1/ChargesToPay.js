import React, { useState } from 'react';
import './ChargesToPay.css';
import Navbar from '../Navbar';
import { useNavigate } from 'react-router-dom';

const ChargesToPay = () => {
    const [showModal, setShowModal] = useState(false);
    const [hovered, setHovered] = useState(null);
    const [selectedMethod, setSelectedMethod] = useState(null);
    const [showPaymentForm, setShowPaymentForm] = useState(false);
    const [showConfirmationPopup, setShowConfirmationPopup] = useState(false);
    
    const navigate = useNavigate();

    const handleModalOpen = () => {
        setShowModal(true);
    };

    const handleModalClose = () => {
        setShowModal(false);
    };

    const handlePaymentMethodSelect = (index) => {
        setSelectedMethod(index);
        setShowConfirmationPopup(true);
    };

    const handleConfirmationCancel = () => {
        setShowConfirmationPopup(false);
    };

    const handleProceedToPayment = () => {
        setShowConfirmationPopup(false);
        setShowPaymentForm(true);
    };

    const handlePaymentFormClose = () => {
        setShowPaymentForm(false);
    };

    const handleProceedToPaymentPage = () => {
        navigate('/payment', { state: { plan: selectedMethod } });
    };

    const houseFindingFee = 45000;
    const sgst = 4050;
    const cgst = 4050;
    const total = houseFindingFee + sgst + cgst;
    const methods = [
        'CREDIT CARD',
        'DEBIT CARD',
        'NET BANKING',
        'EMI',
        'WALLET',
        'UPI',
    ];

    return (
        <div className="charges-container">
            <Navbar />
            <h2>Charges to pay now</h2>
            <div className="charges-item">
                <div className="charges-description">
                    <h3>House Finding Fee</h3>
                    <div className='charges-paracharges'>
                        <p>
                            Nestaway charges a one-time accommodation convenience fee of Rs. {houseFindingFee}.
                            Additional Taxes Applicable: SGST of Rs. {sgst}, CGST of Rs. {cgst}
                        </p>
                    </div>
                </div>
                <div className="charges-amount">
                    ₹ {houseFindingFee.toLocaleString()}
                </div>
            </div>
            <div className="charges-item">
                <div className="charges-description">
                    <h3>SGST</h3>
                    <div className='charges-paracharges'>
                        <p>9.0% applicable on {houseFindingFee}/-</p>
                    </div>
                </div>
                <div className="charges-amount">
                    ₹ {sgst.toLocaleString()}
                </div>
            </div>
            <div className="charges-item">
                <div className="charges-description">
                    <h3>CGST</h3>
                    <div className='charges-paracharges'>
                        <p>9.0% applicable on {houseFindingFee}/-</p>
                    </div>
                </div>
                <div className="charges-amount">
                    ₹ {cgst.toLocaleString()}
                </div>
            </div>
            <div className="charges-details-link">
                <button onClick={handleModalOpen}>Charges Details</button>
            </div>

            {showModal && (
                <div className="charges-modal-overlay">
                    <div className="charges-modal">
                        <h2>Charges Details</h2>
                        <ul>
                            <li>House Finding Fee: ₹ {houseFindingFee.toLocaleString()}</li>
                            <li>SGST: ₹ {sgst.toLocaleString()}</li>
                            <li>CGST: ₹ {cgst.toLocaleString()}</li>
                            <li><strong>Total: ₹ {total.toLocaleString()}</strong></li>
                        </ul>
                        <button onClick={handleModalClose}>Close</button>
                    </div>
                </div>
            )}

            <div className="charges-payment-link">
                <button onClick={handleProceedToPaymentPage} className="payment-link">
                    Proceed to Payment
                </button>
            </div>
        </div>
    );
}

export default ChargesToPay;
