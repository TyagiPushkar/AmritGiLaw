// src/pages/AdminDashboard.jsx

import React, { useState } from 'react';
import { Container, Typography, Box, Tabs, Tab, useMediaQuery, Select, MenuItem, Grid } from '@mui/material';
import CampusPhotoUpload from './CampusPhotoUpload';
import UploadEvents from './UploadEvents';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('campusImages');
  const isMobile = useMediaQuery('(max-width: 600px)'); // Detect mobile screen size

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleSelectChange = (event) => {
    setActiveTab(event.target.value);
  };

  const tabLabels = {
    campusImages: 'Campus Images',
    eventImages: 'Events Images',
    result: 'Results',
    syllabus: 'Syllabus',
    dateSheet: 'Date Sheet',
  };

  return (
    <Container style={{ marginTop: isMobile?"130px":"100px" }}>
      <Typography variant="h4" align="center" gutterBottom>
        Admin Dashboard
      </Typography>
      
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
            {Object.keys(tabLabels).map((tab) => (
              <MenuItem key={tab} value={tab}>
                {tabLabels[tab]}
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
            {Object.keys(tabLabels).map((tab) => (
              <Tab
                key={tab}
                label={tabLabels[tab]}
                value={tab}
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

        {/* Content based on active tab */}
        <Grid container spacing={2} justifyContent="center">
          {/* Render different content based on the selected tab */}
          {activeTab === 'campusImages' && (
            <Grid item xs={12}>
              <CampusPhotoUpload/>
              {/* Add your campus images here */}
            </Grid>
          )}
          {activeTab === 'eventImages' && (
            <Grid item xs={12}>
              <UploadEvents/>
              {/* Add your event images here */}
            </Grid>
          )}
          {activeTab === 'result' && (
            <Grid item xs={12}>
              <Typography align="center">Results Content</Typography>
              {/* Add your results content here */}
            </Grid>
          )}
          {activeTab === 'syllabus' && (
            <Grid item xs={12}>
              <Typography align="center">Syllabus Content</Typography>
              {/* Add your syllabus content here */}
            </Grid>
          )}
          {activeTab === 'dateSheet' && (
            <Grid item xs={12}>
              <Typography align="center">Date Sheet Content</Typography>
              {/* Add your date sheet content here */}
            </Grid>
          )}
        </Grid>
      </Box>
    </Container>
  );
};

export default AdminDashboard;
