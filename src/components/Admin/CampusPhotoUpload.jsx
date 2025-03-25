import axios from 'axios';
import React, { useState } from 'react';
import { Container, Typography, Button, Box, Grid, Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import CampusPhotoView from './CampusPhotoView';
import Campus from '../Campus/Campus';
import { useNavigate } from 'react-router-dom';

const Alert = React.forwardRef((props, ref) => (
  <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
));

const CampusPhotoUpload = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    setSelectedFiles(files);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    selectedFiles.forEach((file) => {
      formData.append('photos[]', file); // Add multiple files to the FormData object
    });

    try {
      const response = await axios.post(
        'https://namami-infotech.com/AmritGi/upload_campus_image.php',
        formData,
        {
          headers: { 'Content-Type': 'multipart/form-data' },
        }
      );

      if (response.data.success) {
        setSnackbarMessage('Photos uploaded successfully!');
        navigate('/admin-dashboard');
      } else {
        setSnackbarMessage(response.data.error || 'Error uploading photos');
      }
    } catch (error) {
      setSnackbarMessage('Error uploading photos');
    }

    setSnackbarOpen(true);
    setSelectedFiles([]); // Clear selected files after upload
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <Container style={{ marginTop: "50px" }}>
      <Typography variant="h4" align="center" gutterBottom>
        Upload Campus Photos
      </Typography>

      <Box display="flex" flexDirection="column" alignItems="center">
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleFileChange}
          style={{ marginBottom: "20px" }}
        />
        <Button
          variant="contained"
          style={{ backgroundColor: "#f30202" }}
          onClick={handleUpload}
        >
          Upload Photo
        </Button>

        <Grid
          container
          spacing={2}
          justifyContent="center"
          style={{ marginTop: "20px" }}
        >
          {selectedFiles.map((file, index) => (
            <Grid item key={index} xs={6} sm={4} md={3}>
              <img
                src={URL.createObjectURL(file)}
                alt={`preview-${index}`}
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "10px",
                  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Box>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
      >
        <Alert onClose={handleSnackbarClose} severity="success">
          {snackbarMessage}
        </Alert>
      </Snackbar>
      <CampusPhotoView />
    </Container>
  );
};

export default CampusPhotoUpload;
