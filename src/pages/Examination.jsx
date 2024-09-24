import React, { useState } from 'react';
import { Modal, Box } from '@mui/material';
import exam1 from "../assets/exam1.png";
import exam2 from "../assets/exam2.png";

const Examination = () => {
    const [open, setOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const handleOpen = (image) => {
        setSelectedImage(image);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedImage(null);
    };

    return (
        <>
            <div style={{ marginTop: "100px", minHeight: "500px", textAlign: "center" }}>
                {/* Heading in the center */}
                <h1 style={{ marginBottom: "10px" }}>Examination</h1>
                <h2 style={{ marginBottom: "20px" }}>TENTATIVE SCHEDULE FOR EVEN SEMESTER EXAM:- 2021-22 (JUNE 2022)</h2>

                {/* Images */}
                <div style={{ display: "flex", justifyContent: "center", gap: "30px" }}>
                    <img
                        src={exam1}
                        alt="Exam 1"
                        style={{ width: "300px", height: "auto", cursor: "pointer" }}
                        onClick={() => handleOpen(exam1)}
                    />
                    <img
                        src={exam2}
                        alt="Exam 2"
                        style={{ width: "300px", height: "auto", cursor: "pointer" }}
                        onClick={() => handleOpen(exam2)}
                    />
                </div>
            </div>

            {/* Modal for enlarging images */}
            <Modal open={open} onClose={handleClose}>
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        bgcolor: 'background.paper',
                        boxShadow: 24,
                        p: 4,
                    }}
                >
                    {selectedImage && (
                        <img
                            src={selectedImage}
                            alt="Enlarged Exam"
                            style={{ width: '400px', height: 'auto' }}
                        />
                    )}
                </Box>
            </Modal>
        </>
    );
};

export default Examination;
