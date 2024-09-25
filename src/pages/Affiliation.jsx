import React, { useState } from 'react';
import { Box, Tabs, Tab, useMediaQuery, Select, MenuItem, IconButton, Dialog, Grid } from '@mui/material';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import lawaff1 from "../assets/lawaff1.png";
import lawaff2 from "../assets/lawaff2.png";
import lawaff3 from "../assets/lawaff3.png";
import lawaff4 from "../assets/lawaff4.png";
import lawaff5 from "../assets/lawaff5.png";
import lawaff6 from "../assets/lawaff6.png";
import lawaff7 from "../assets/lawaff7.png";
import lawaff8 from "../assets/lawaff8.png";
import lawaff9 from "../assets/lawaff9.png";
import bedaff1 from "../assets/bedaff1.png";

const affiliationData = {
    "Law Course Approval Certificate": {
        affiliationImages: [lawaff1, lawaff2, lawaff3, lawaff4, lawaff5, lawaff6, lawaff7, lawaff8, lawaff9],
    },
    "B.Ed. Course Approval Letter": {
        affiliationImages: [bedaff1],
    },
};

const Affiliation = () => {
    const [activeTab, setActiveTab] = useState('Law Course Approval Certificate');
    const [activeIndex, setActiveIndex] = useState(0); // Track the index of the first visible image
    const [selectedImage, setSelectedImage] = useState(null); // Track the selected image for modal view
    const [isModalOpen, setModalOpen] = useState(false); // Control modal visibility
    const isMobile = useMediaQuery('(max-width: 600px)');
    const imagesPerSlide = 4; // Number of images to show in the carousel

    const handleTabChange = (event, newValue) => {
        setActiveTab(newValue);
        setActiveIndex(0); // Reset index when switching tabs
    };

    const handleSelectChange = (event) => {
        setActiveTab(event.target.value);
        setActiveIndex(0); // Reset index when switching tabs
    };

    const handleImageClick = (image) => {
        setSelectedImage(image); // Set clicked image as selected
        setModalOpen(true); // Open modal
    };

    const handleCloseModal = () => {
        setModalOpen(false); // Close modal
        setSelectedImage(null); // Reset selected image
    };

    const handleNext = () => {
        const images = affiliationData[activeTab].affiliationImages;
        setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrev = () => {
        const images = affiliationData[activeTab].affiliationImages;
        setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const collegeLabels = {
    "Law Course Approval Certificate": 'Law Course Approval Certificate',
    "B.Ed. Course Approval Letter": 'B.Ed. Course Approval Letter',
};


    const visibleImages = affiliationData[activeTab].affiliationImages.slice(activeIndex, activeIndex + imagesPerSlide);

    return (
        <div style={{ marginTop: "100px", minHeight: "500px", textAlign: "center" }}>
            <h1>Affiliated Colleges</h1>
            <Box sx={{ width: '100%', padding: 2 }}>
                {/* Tabs for college selection */}
                {isMobile ? (
                    <Select
                        value={activeTab}
                        onChange={handleSelectChange}
                        variant="outlined"
                        fullWidth
                        sx={{
                            marginBottom: '16px',
                            background: '#a65320',
                            color: 'white',
                            borderRadius: '10px',
                        }}
                    >
                        {Object.keys(collegeLabels).map((college) => (
                            <MenuItem key={college} value={college}>
                                {collegeLabels[college]}
                            </MenuItem>
                        ))}
                    </Select>
                ) : (
                    <Tabs
                        value={activeTab}
                        onChange={handleTabChange}
                        indicatorColor="transparent"
                        textColor="inherit"
                        centered
                        sx={{
                            width: '100%',
                            background: '#a65320',
                            borderRadius: '10px',
                            padding: '8px 0',
                            marginBottom: '16px',
                            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                        }}
                    >
                        {Object.keys(affiliationData).map((college) => (
                            <Tab
                                key={college}
                                label={college}
                                value={college}
                                sx={{
                                    color: '#a65320',
                                    fontWeight: 'bold',
                                    textTransform: 'none',
                                    borderRadius: '10px',
                                    padding: '10px 24px',
                                    margin: '0 16px',
                                    backgroundColor: 'rgba(255, 255, 255, 0.7)',
                                    transition: 'background-color 0.3s, transform 0.3s',
                                    '&:hover': {
                                        backgroundColor: 'rgba(255, 255, 255, 0.3)',
                                        transform: 'scale(1.05)',
                                    },
                                    '&.Mui-selected': {
                                        backgroundColor: '#ffffff',
                                        color: '#a65320',
                                        fontWeight: 'bold',
                                        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
                                        transform: 'scale(1.1)',
                                    },
                                    margin: '0 150px', // Add margin here
                                }}
                            />
                        ))}
                    </Tabs>
                )}

                {/* Image Carousel Section */}
                <Box sx={{ position: 'relative', width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
                    <Grid container spacing={2} justifyContent="center" alignItems="center">
                        {visibleImages.map((image, index) => (
                            <Grid item xs={6} sm={3} key={index}>
                                <img
                                    src={image}
                                    alt={`${activeTab} Affiliation ${activeIndex + index + 1}`}
                                    style={{
                                        width: '100%',
                                        borderRadius: '10px',
                                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                                        cursor: 'pointer',
                                        transition: 'transform 0.3s ease-in-out',
                                    }}
                                    onClick={() => handleImageClick(image)}
                                />
                            </Grid>
                        ))}
                    </Grid>

                    {/* Previous Button */}
                    <IconButton
                        onClick={handlePrev}
                        sx={{
                            position: 'absolute',
                            top: '50%',
                            left: 0,
                            transform: 'translateY(-50%)',
                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                            color: 'white',
                            '&:hover': {
                                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                            },
                        }}
                    >
                        <FaArrowLeft />
                    </IconButton>

                    {/* Next Button */}
                    <IconButton
                        onClick={handleNext}
                        sx={{
                            position: 'absolute',
                            top: '50%',
                            right: 0,
                            transform: 'translateY(-50%)',
                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                            color: 'white',
                            '&:hover': {
                                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                            },
                        }}
                    >
                        <FaArrowRight />
                    </IconButton>
                </Box>

                {/* Modal for large image view */}
                <Dialog
                    open={isModalOpen}
                    onClose={handleCloseModal}
                    maxWidth="md"
                    fullWidth
                >
                    <img
                        src={selectedImage}
                        alt="Selected Affiliation"
                        style={{ width: '100%', height: 'auto' }}
                    />
                </Dialog>
            </Box>
        </div>
    );
};

export default Affiliation;
