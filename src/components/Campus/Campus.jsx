import React, { useState, useEffect } from "react";
import "./Campus.css";
import axios from "axios";

const Campus = () => {
  const [galleryImages, setGalleryImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageIndex, setModalImageIndex] = useState(null);

  // Fetch images from API
  useEffect(() => {
    axios
      .get("https://namami-infotech.com/AmritGi/get_campus_image.php")
      .then((response) => {
        const imageUrls = response.data.map((photo) => photo.photo_url);
        setGalleryImages(imageUrls.slice(0, 10)); // Limit to first 10 images
      })
      .catch((error) => console.error("Error fetching photos:", error));
  }, []);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      if (galleryImages.length > 0) {
        setCurrentIndex((prevIndex) => (prevIndex + 3) % galleryImages.length);
      }
    }, 500000); // Change image every 5 minutes

    return () => clearInterval(interval);
  }, [galleryImages]);

  const openModal = (index) => {
    setModalImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImageIndex(null);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 3) % galleryImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? galleryImages.length - 3
        : (prevIndex - 3) % galleryImages.length
    );
  };

  const getImagesForCurrentSlide = () => {
    return Array.from(
      { length: 3 },
      (_, i) => galleryImages[(currentIndex + i) % galleryImages.length]
    );
  };

  if (galleryImages.length === 0) {
    return <div>No images available...</div>;
  }

  return (
    <div className="campus">
      <div className="carousel">
        <button className="prev-button" onClick={prevSlide}>
          &#10094;
        </button>
        <div className="carousel-images">
          {getImagesForCurrentSlide().map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Gallery ${currentIndex + index + 1}`}
              className="carousel-item"
              onClick={() => openModal(currentIndex + index)}
            />
          ))}
        </div>
        <button className="next-button" onClick={nextSlide}>
          &#10095;
        </button>
      </div>

      {/* Full-screen Image Modal */}
      {isModalOpen && modalImageIndex !== null && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <img
              src={galleryImages[modalImageIndex]}
              alt={`Gallery ${modalImageIndex + 1}`}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Campus;
