import React, { useState, useEffect } from 'react';
import './Campus.css';
import axios from 'axios';

const Campus = () => {
    const [galleryImages, setGalleryImages] = useState([]);  // Store images from API
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalImageIndex, setModalImageIndex] = useState(null);  // Track the index of the image opened in modal

    // Fetch images from API
    useEffect(() => {
        axios
            .get('https://namami-infotech.com/AmritGi/get_campus_image.php')
            .then((response) => {
                const imageUrls = response.data.map(photo => photo.photo_url); // Extract URLs from the response
                setGalleryImages(imageUrls.slice(0, 10)); // Limit to first 10 images
            })
            .catch((error) => {
                console.error('Error fetching photos:', error);
            });
    }, []);

    // Auto-slide effect
    useEffect(() => {
        const interval = setInterval(() => {
            if (galleryImages.length > 0) {
                setCurrentIndex((prevIndex) => (prevIndex + 3) % galleryImages.length); // Increment by 3 to slide next set
            }
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, [galleryImages]);

    const openModal = (index) => {
        setModalImageIndex(index);  // Set the index of the clicked image
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setModalImageIndex(null);  // Reset modal image index when closing
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

    if (galleryImages.length === 0) {
        return <div>No images...</div>;
    }

    return (
        <div className='campus'>
            <div className="carousel">
                <button className="prev-button" onClick={prevSlide}>&#10094;</button>
                <div className="carousel-images">
                    {getImagesForCurrentSlide().map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Gallery ${currentIndex + index + 1}`}
                            className="carousel-item"
                            onClick={() => openModal(currentIndex + index)}  // Pass the correct index for the clicked image
                        />
                    ))}
                </div>
                <button className="next-button" onClick={nextSlide}>&#10095;</button>
            </div>

            {/* Modal for large image */}
            {isModalOpen && modalImageIndex !== null && (
                <div className="modal" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <span className="close" onClick={closeModal}>&times;</span>
                        <img src={galleryImages[modalImageIndex]} alt={`Gallery ${modalImageIndex + 1}`} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Campus;
