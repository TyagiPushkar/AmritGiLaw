import React, { useState } from 'react';
import './Campus.css';
import next_icon from '../../assets/next-icon.png';
import back_icon from '../../assets/back-icon.png';
import gallery_1 from '../../assets/op.jpg';
import gallery_2 from '../../assets/aaa.jpg';
import gallery_3 from '../../assets/yy.jpg';
import gallery_4 from '../../assets/pdaaaa.jpeg';

const Campus = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const galleryImages = [gallery_1, gallery_2, gallery_3, gallery_4];

    const slideForward = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
    };

    const slideBackward = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
        );
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className='campus'>
            <img src={back_icon} alt="Back" className='back-btn' onClick={slideBackward} />
            <div className="carousel">
                <div className="carousel-images" onClick={openModal}>
                    <img src={galleryImages[currentIndex]} alt={`Gallery ${currentIndex + 1}`} />
                </div>
            </div>
            <img src={next_icon} alt="Next" className='next-btn' onClick={slideForward} />

            {/* Modal for large image */}
            {isModalOpen && (
                <div className="modal" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <span className="close" onClick={closeModal}>&times;</span>
                        <img src={galleryImages[currentIndex]} alt={`Gallery ${currentIndex + 1}`} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Campus;
