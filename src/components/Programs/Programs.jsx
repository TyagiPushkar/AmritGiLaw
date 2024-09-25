import React, { useState } from 'react';
import { Box, Tabs, Tab, Grid,Select, MenuItem,useMediaQuery } from '@mui/material';
import CardFlip from './CardFlip'; // Import the CardFlip component
import image from "../../assets/law.png";
import bballb from "../../assets/bballb.png";
import llb from "../../assets/llb.png";
import llm from "../../assets/llm.png";
import bed from "../../assets/bed.png";
import bscagri from "../../assets/B.ScAgriculture.png";
import bsccs from "../../assets/BScComputerScience.png";
import bschs from "../../assets/bschs.png";
import blibsc from "../../assets/BLibSc.jpeg";
import mlibsc from "../../assets/MLibSc.jpeg";
import ciy from "../../assets/ciy.jpeg";
import pgdy from "../../assets/pgdy.jpeg";
import may from "../../assets/may.jpeg";

const Programs = () => {
     const [activeTab, setActiveTab] = useState('college1');
    const isMobile = useMediaQuery('(max-width: 600px)'); // Detect mobile screen size

    const handleTabChange = (event, newValue) => {
        setActiveTab(newValue);
    };

    const handleSelectChange = (event) => {
        setActiveTab(event.target.value);
    };

    const collegeCourses = {
        college1: [
            { degree: 'BBA. LL.B', duration: '10 Sem.', nature: 'Regu.', modeOfAdmission: 'Direct/ Univ. Norms', seats: 120, image: bballb },
            { degree: 'LL.B', duration: '6 Sem.', nature: 'Regu.', modeOfAdmission: 'Direct/ Univ. Norms', seats: 120, image: llb },
            { degree: 'LL.M', duration: '2 Sem.', nature: 'Regu.', modeOfAdmission: 'Direct/ Univ. Norms', seats: 60, image: llm }
        ],
        college2: [
            { degree: 'B.Ed.', duration: '2 Years', nature: 'Regu.', modeOfAdmission: 'Direct/ Univ. Norms', seats: 100, image: bed }
        ],
        college3: [
            { degree: "B.Sc. (Agriculture)", duration: "8 Sem.", nature: "Regu.", modeOfAdmission: "Direct/ Univ. Norms", seats: 60, image: bscagri },
            { degree: "B.Sc. (CS)", duration: "6 Sem.", nature: "Regu.", modeOfAdmission: "Direct/ Univ. Norms", seats: 60, image: bsccs },
            { degree: "B.Sc. (HS)", duration: "2 Sem.", nature: "Regu.", modeOfAdmission: "Direct/ Univ. Norms", seats: 60, image: bschs },
           { degree: "Certificate in Yoga", duration: "2 Sem.", nature: "Regu.", modeOfAdmission: "Direct/ Univ. Norms", seats: 30, image: ciy },
            { degree: "P.G. Diploma in Yoga", duration: "2 Sem.", nature: "Regu.", modeOfAdmission: "Direct/ Univ. Norms", seats: 30, image: pgdy },
            { degree: "M.A. In Yoga", duration: "4 Sem.", nature: "Regu.", modeOfAdmission: "Direct/ Univ. Norms", seats: 30, image: may },
          { degree: "B. Lib. Sc. (Library Science)", duration: "2 Sem.", nature: "Regu.", modeOfAdmission: "Direct/ Univ. Norms", seats: 60, image: blibsc },
            { degree: "M. Lib. Sc. (Library Science)", duration: "2 Sem.", nature: "Regu.", modeOfAdmission: "Direct/ Univ. Norms", seats: 60, image: mlibsc },
            
        ]
    };
const collegeLabels = {
        college1: 'Amrit Law College',
        college2: 'Roorkee Degree College',
        college3: 'Amrit College of Education'
    };
    return (
      <Box sx={{ width: '100%', padding: 2 }}>
            {/* Render Tabs or Dropdown based on screen size */}
            {isMobile ? (
                // Dropdown for mobile screens
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
                // Tabs for larger screens
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
                    {Object.keys(collegeLabels).map((college) => (
                        <Tab
                            key={college}
                            label={collegeLabels[college]}
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
                               margin: '0 70px', // Add margin here

                            }}
                        />
                    ))}
                </Tabs>
            )}

            {/* Courses cards */}
            <Grid container spacing={2} justifyContent="center">
                {collegeCourses[activeTab].map((course, index) => (
                    <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
                        <CardFlip course={course} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Programs;
