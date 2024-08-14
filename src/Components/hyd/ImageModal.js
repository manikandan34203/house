// ImageModal.js
import React from 'react';
import Modal from 'react-modal';
import { FaArrowLeft, FaArrowRight, FaTimes } from 'react-icons/fa';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
};

Modal.setAppElement('#root');

const ImageModal = ({ isOpen, onRequestClose, imageUrl, onNext, onPrev }) => (
    <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        style={customStyles}
        contentLabel="Image Modal"
    >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
            <button onClick={onPrev} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                <FaArrowLeft size={24} />
            </button>
            <button onClick={onRequestClose} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                <FaTimes size={24} />
            </button>
            <button onClick={onNext} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                <FaArrowRight size={24} />
            </button>
        </div>
        <img src={imageUrl} alt="House" style={{ width: '100%', height: '550px', marginTop: 10 }} />
    </Modal>
);

export default ImageModal;
