import React, { useState } from 'react';
import { Box, Tabs, Tab, Typography, Button } from '@mui/material';

// Mock data for colleges, courses, and result sheets with their respective PDF links and images.
const resultData = {
    "College A": {
        courses: {
            "Course 1": {
                semesters: {
                    "Semester 1": {
                        pdf: "path/to/collegeA_course1_sem1_result.pdf",
                        image: "path/to/collegeA_course1_sem1_image.png"
                    },
                    "Semester 2": {
                        pdf: "path/to/collegeA_course1_sem2_result.pdf",
                        image: "path/to/collegeA_course1_sem2_image.png"
                    },
                },
            },
            "Course 2": {
                semesters: {
                    "Semester 1": {
                        pdf: "path/to/collegeA_course2_sem1_result.pdf",
                        image: "path/to/collegeA_course2_sem1_image.png"
                    },
                    "Semester 2": {
                        pdf: "path/to/collegeA_course2_sem2_result.pdf",
                        image: "path/to/collegeA_course2_sem2_image.png"
                    },
                },
            },
        },
    },
    "College B": {
        courses: {
            "Course 3": {
                semesters: {
                    "Semester 1": {
                        pdf: "path/to/collegeB_course3_sem1_result.pdf",
                        image: "path/to/collegeB_course3_sem1_image.png"
                    },
                    "Semester 2": {
                        pdf: "path/to/collegeB_course3_sem2_result.pdf",
                        image: "path/to/collegeB_course3_sem2_image.png"
                    },
                },
            },
        },
    },
    "College C": {
        courses: {
            "Course 4": {
                semesters: {
                    "Semester 1": {
                        pdf: "path/to/collegeC_course4_sem1_result.pdf",
                        image: "path/to/collegeC_course4_sem1_image.png"
                    },
                },
            },
        },
    },
};

const Result = () => {
    const [activeTab, setActiveTab] = useState('College A');
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [selectedSemester, setSelectedSemester] = useState(null);

    const handleTabChange = (event, newValue) => {
        setActiveTab(newValue);
        setSelectedCourse(null); // Reset course and semester when a new college is selected
        setSelectedSemester(null);
    };

    const handleCourseSelect = (course) => {
        setSelectedCourse(course);
        setSelectedSemester(null); // Reset semester when a new course is selected
    };

    const handleSemesterSelect = (semester, { pdf, image }) => {
        setSelectedSemester(semester);
        window.open(pdf, '_blank'); // Open the PDF in a new tab
    };

    return (
         <div style={{marginTop:"100px",minHeight:"500px"}}>
        <Box sx={{ width: '100%', padding: 2 }}>
            {/* Tabs for college selection */}
            <Tabs
                value={activeTab}
                    onChange={handleTabChange}
                    indicatorColor="transparent"
                    textColor="inherit"
                    centered
                    sx={{
                        width: '100%',
                        background: 'linear-gradient(to right, #1976d2, #42a5f5)', // Gradient background
                        borderRadius: '10px',
                        padding: '8px',
                        marginBottom: '16px',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                    }}
            >
                {Object.keys(resultData).map(college => (
                    <Tab key={college} label={college} value={college} 
                   
                            sx={{
                                color: 'white',
                                fontWeight: 'bold',
                                textTransform: 'none',
                                borderRadius: '10px',
                                padding: '10px 20px',
                                margin: '0 56px', // Space between each tab

                                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                transition: 'background-color 0.3s, transform 0.3s',
                                '&:hover': {
                                    backgroundColor: 'rgba(255, 255, 255, 0.3)',
                                    transform: 'scale(1.05)',
                                },
                                '&.Mui-selected': {
                                    backgroundColor: '#ffffff',
                                    color: '#1976d2',
                                    fontWeight: 'bold',
                                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
                                    transform: 'scale(1.1)',
                                },
                            }}/>
                ))}
            </Tabs>

            {/* Course and Semester Selection */}
            {selectedCourse === null ? (
                <Box sx={{ textAlign: 'center', marginBottom: '20px' }}>
                    <Typography variant="h6">Select Course for {activeTab}</Typography>
                    {Object.keys(resultData[activeTab].courses).map(course => (
                        <Button
                            key={course}
                            onClick={() => handleCourseSelect(course)}
                            sx={{
                                margin: "10px",
                                padding: "10px 20px",
                                backgroundColor: selectedCourse === course ? "#ccc" : "#007bff",
                                color: "white",
                                border: "none",
                                cursor: "pointer",
                                '&:hover': {
                                    backgroundColor: '#0056b3',
                                }
                            }}
                        >
                            {course}
                        </Button>
                    ))}
                </Box>
            ) : (
                <>
                 <Box sx={{ textAlign: 'center', marginBottom: '20px' }}>
                    <Typography variant="h6">Select Semester for {selectedCourse}</Typography>
                    {Object.keys(resultData[activeTab].courses[selectedCourse].semesters).map(semester => (
                        <Button
                            key={semester}
                            onClick={() => handleSemesterSelect(
                                semester,
                                resultData[activeTab].courses[selectedCourse].semesters[semester]
                            )}
                            sx={{
                                margin: "10px",
                                padding: "10px 20px",
                                backgroundColor: selectedSemester === semester ? "#ccc" : "#007bff",
                                color: "white",
                                border: "none",
                                cursor: "pointer",
                                '&:hover': {
                                    backgroundColor: '#0056b3',
                                }
                            }}
                        >
                            {semester}
                        </Button>
                    ))}
</Box>
                    {/* Display the image for the selected semester */}
                    {selectedSemester && (
                        <Box sx={{ textAlign: 'center', marginTop: '20px' }}>
                            <Typography variant="h6">Result Sheet Image for {selectedSemester}</Typography>
                            <img
                                src={resultData[activeTab].courses[selectedCourse].semesters[selectedSemester].image}
                                alt={`Result Sheet for ${selectedSemester}`}
                                style={{ maxWidth: '100%', height: 'auto', marginTop: '10px' }}
                            />
                        </Box>
                    )}
                </>
            )}
        </Box>
        </div>
    );
};

export default Result;
