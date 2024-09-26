// src/pages/AdminDashboard.jsx

import React, { useState } from 'react';
import { Container, Typography, Box, Tabs, Tab, useMediaQuery, Select, MenuItem, Grid, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import CampusPhotoUpload from './CampusPhotoUpload';
import UploadEvents from './UploadEvents';
import UploadResult from './UploadResult';
import UploadSyllabus from './UploadSyllabus';
import SyllabusBoard from './SyllabusBoard';
import { useAuth } from '../AuthContext'; // Import useAuth

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('campusImages');
  const isMobile = useMediaQuery('(max-width: 600px)');
  const navigate = useNavigate(); // Initialize useNavigate
  const { logout } = useAuth(); // Get logout function from context

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleSelectChange = (event) => {
    setActiveTab(event.target.value);
  };

  const handleLogout = () => {
    logout(); // Call logout from context
    localStorage.removeItem('admin_id'); // Clear admin_id from localStorage
    navigate('/'); // Redirect to home page
  };

  const tabLabels = {
    campusImages: 'Campus Images',
    eventImages: 'Events Images',
    result: 'Results',
    syllabus: 'Syllabus',
    dateSheet: 'Date Sheet',
  };

  return (
    <Container style={{ marginTop: isMobile ? "130px" : "100px" }}>
      <Typography variant="h4" align="center" gutterBottom>
        Admin Dashboard
      </Typography>
      
      {/* Logout Button */}
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '16px' }}>
        <Button variant="contained" style={{backgroundColor:"#a65320"}} onClick={handleLogout}>
          Logout
        </Button>
      </Box>

      <Box sx={{ width: '100%', padding: 2 }}>
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
            {Object.keys(tabLabels).map((tab) => (
              <MenuItem key={tab} value={tab}>
                {tabLabels[tab]}
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

        <Grid container spacing={2} justifyContent="center">
          {activeTab === 'campusImages' && (
            <Grid item xs={12}>
              <CampusPhotoUpload />
            </Grid>
          )}
          {activeTab === 'eventImages' && (
            <Grid item xs={12}>
              <UploadEvents />
            </Grid>
          )}
          {activeTab === 'result' && (
            <Grid item xs={12}>
              <UploadResult />
            </Grid>
          )}
          {activeTab === 'syllabus' && (
            <Grid item xs={12}>
              <UploadSyllabus />
              <SyllabusBoard />
            </Grid>
          )}
          {activeTab === 'dateSheet' && (
            <Grid item xs={12}>
              <Typography align="center">Date Sheet Content</Typography>
            </Grid>
          )}
        </Grid>
      </Box>
    </Container>
  );
};

export default AdminDashboard;
