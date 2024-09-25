import React, { useState } from 'react';
import { Box, Tabs, Tab, Grid, useMediaQuery } from '@mui/material';
import lawaff1 from "../assets/lawaff1.png"
import lawaff2 from "../assets/lawaff2.png"
import lawaff3 from "../assets/lawaff3.png"
import lawaff4 from "../assets/lawaff4.png"
import lawaff5 from "../assets/lawaff5.png"
import lawaff6 from "../assets/lawaff6.png"
import lawaff7 from "../assets/lawaff7.png"
import lawaff8 from "../assets/lawaff8.png"
import lawaff9 from "../assets/lawaff9.png"

// Mock data for affiliation images
const affiliationData = {
    "Law Course Approval Certificate": {
        affiliationImage: lawaff1,
        affiliationImage: lawaff2,
        affiliationImage: lawaff3,
        affiliationImage: lawaff4,
        affiliationImage: lawaff5,
        affiliationImage: lawaff6,
        affiliationImage: lawaff7,
        affiliationImage: lawaff8,
        affiliationImage: lawaff9,
    },
    "B.Ed. Course Approval Letter": {
         affiliationImage: lawaff1,
    },
    
};

const Affiliation = () => {
    const [activeTab, setActiveTab] = useState('Law Course Approval Certificate');
    const isMobile = useMediaQuery('(max-width: 600px)');

    const handleTabChange = (event, newValue) => {
        setActiveTab(newValue);
    };

    const handleSelectChange = (event) => {
        setActiveTab(event.target.value);
    };

    const collegeLabels = {
        college1: 'Law Course Approval Certificate',
        college2: 'B.Ed. Course Approval Letter',
    };

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
                                }}
                            />
                        ))}
                    </Tabs>
                )}
                {/* Image Sections */}
                {affiliationData[activeTab] && (
                    <Grid container spacing={2} justifyContent="center">
                        <Grid item xs={12} sm={8} md={6}>
                            <img
                                src={affiliationData[activeTab].affiliationImage}
                                alt={`${activeTab} Affiliation`}
                                style={{
                                    width: '100%',
                                    borderRadius: '10px',
                                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                                }}
                            />
                        </Grid>
                    </Grid>
                )}
            </Box>
        </div>
    );
};

export default Affiliation;
