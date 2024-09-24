import React, { useState, useEffect } from 'react';
import './Campus.css';
import gallery_1 from '../../assets/op.jpg';
import gallery_2 from '../../assets/aaa.jpg';
import gallery_3 from '../../assets/yy.jpg';
import gallery_4 from '../../assets/pdaaaa.jpeg';

const Campus = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const galleryImages = [gallery_1, gallery_2, gallery_3, gallery_4];

    // Auto-slide effect
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 3) % galleryImages.length); // Increment by 3 to slide next set
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, [galleryImages.length]);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    // Next button handler
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 3) % galleryImages.length);
    };

    // Previous button handler
    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? galleryImages.length - 3 : (prevIndex - 3) % galleryImages.length
        );
    };

    // Helper to get the images for the current slide
    const getImagesForCurrentSlide = () => {
        const images = [];
        for (let i = 0; i < 3; i++) {
            images.push(galleryImages[(currentIndex + i) % galleryImages.length]); // Loop through the gallery
        }
        return images;
    };

    return (
        <div className='campus'>
            <div className="carousel">
                <button className="prev-button" onClick={prevSlide}>&#10094;</button>
                <div className="carousel-images" onClick={openModal}>
                    {getImagesForCurrentSlide().map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Gallery ${currentIndex + index + 1}`}
                            className="carousel-item"
                        />
                    ))}
                </div>
                <button className="next-button" onClick={nextSlide}>&#10095;</button>
            </div>

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
