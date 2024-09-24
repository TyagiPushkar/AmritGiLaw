import React, { useState } from 'react';
import { Box, Tabs, Tab, Grid } from '@mui/material';
import CardFlip from './CardFlip'; // Import the CardFlip component
import image from "../../assets/law.png";
import bballb from "../../assets/bballb.png";
import llb from "../../assets/llb.png";
import llm from "../../assets/llm.png";
import bed from "../../assets/bed.png";
import bscagri from "../../assets/B.ScAgriculture.png";
import bsccs from "../../assets/BScComputerScience.png";
import bschs from "../../assets/bschs.png";

const Programs = () => {
    const [activeTab, setActiveTab] = useState('college1');

    const handleTabChange = (event, newValue) => {
        setActiveTab(newValue);
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
            { degree: "B. Lib. Sc. (Library Science)", duration: "2 Sem.", nature: "Regu.", modeOfAdmission: "Direct/ Univ. Norms", seats: 60, image: bballb },
            { degree: "M. Lib. Sc. (Library Science)", duration: "2 Sem.", nature: "Regu.", modeOfAdmission: "Direct/ Univ. Norms", seats: 60, image: bballb },
            { degree: "Certificate in Yoga", duration: "2 Sem.", nature: "Regu.", modeOfAdmission: "Direct/ Univ. Norms", seats: 30, image: bballb },
            { degree: "P.G. Diploma in Yoga", duration: "2 Sem.", nature: "Regu.", modeOfAdmission: "Direct/ Univ. Norms", seats: 30, image: bballb },
            { degree: "M.A. In Yoga", duration: "4 Sem.", nature: "Regu.", modeOfAdmission: "Direct/ Univ. Norms", seats: 30, image: bballb }
        ]
    };

    return (
        <Box sx={{ width: '100%', padding: 2 }}>
            {/* Tabs for college selection */}
            <Tabs
                value={activeTab}
                onChange={handleTabChange}
                indicatorColor="transparent"
                textColor="inherit"
                centered
                scrollButtons="auto" // Allow scrolling on small screens
                variant="scrollable" // Makes the tabs scrollable on small screens
                sx={{
                    width: '100%',
                    background: 'linear-gradient(to right, #1976d2, #42a5f5)', // Gradient background
                    borderRadius: '10px',
                    padding: '8px 0', // Adjust the vertical padding
                    marginBottom: '16px',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                }}
            >
                {['college1', 'college2', 'college3'].map((college) => (
                    <Tab
                        key={college}
                        label={
                            college === 'college1' ? 'Amrit Law College' :
                            college === 'college2' ? 'Roorkee Degree College' :
                            'Amrit College of Education'
                        }
                        value={college}
                        sx={{
                            color: 'white',
                            fontWeight: 'bold',
                            textTransform: 'none',
                            borderRadius: '10px',
                            padding: '10px 24px', // Adjust padding for a better visual appearance
                            margin: '0 16px', // Decrease space between each tab
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
                        }}
                    />
                ))}
            </Tabs>

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
