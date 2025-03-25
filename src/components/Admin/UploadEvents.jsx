import axios from 'axios';
import React, { useState } from 'react';
import { Container, Typography, Button, Box, Grid, Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import { useNavigate } from 'react-router-dom';
import ViewEvent from './ViewEvent';

const Alert = React.forwardRef((props, ref) => (
  <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
));

const UploadEvents = () => {
  const [selectedFiles, setSelectedFiles] = useState([]); // Store selected files
  const [eventName, setEventName] = useState(''); // Store event name
  const [snackbarOpen, setSnackbarOpen] = useState(false); // Snackbar open state
  const [snackbarMessage, setSnackbarMessage] = useState(''); // Snackbar message
  const navigate = useNavigate(); // Initialize useNavigate

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files); // Convert FileList to array
    setSelectedFiles(files); // Update selected files state
  };

  const handleUpload = async () => {
    if (!eventName) {
      setSnackbarMessage('Please enter an event name.'); // Check for event name
      setSnackbarOpen(true);
      return;
    }

    const formData = new FormData();
    selectedFiles.forEach((file) => {
      formData.append('photos[]', file); // Add multiple files to FormData
    });
    formData.append('event_name', eventName); // Add the event name

    try {
      const response = await axios.post(
        'https://namami-infotech.com/AmritGi/upload_events.php', // Your upload endpoint
        formData,
        {
          headers: { 'Content-Type': 'multipart/form-data' },
        }
      );

      if (response.data.success) {
        setSnackbarMessage('Event photos uploaded successfully!');
        navigate('/admin-dashboard'); // Redirect to the admin dashboard
      } else {
        setSnackbarMessage(response.data.error || 'Error uploading event photos');
      }
    } catch (error) {
      setSnackbarMessage('Error uploading event photos');
    }

    setSnackbarOpen(true);
    setSelectedFiles([]); // Clear selected files after upload
    setEventName(''); // Clear the event name
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false); // Close snackbar
  };

  return (
    <Container style={{ marginTop: "50px" }}>
      <Typography variant="h4" align="center" gutterBottom>
        Upload Event Photos
      </Typography>

      <Box display="flex" flexDirection="column" alignItems="center">
        <input
          type="text"
          placeholder="Event Name"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)} // Update event name
          style={{ marginBottom: "20px", padding: "10px", width: "100%" }}
        />
        <input
          type="file"
          accept="image/*"
          multiple // Allow multiple file selection
          onChange={handleFileChange} // Handle file selection
          style={{ marginBottom: "20px" }}
        />
        <Button
          variant="contained"
          style={{ backgroundColor: "#f30202" }}
          onClick={handleUpload}
        >
          Upload Photos
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
                src={URL.createObjectURL(file)} // Create image preview
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
      <ViewEvent />
    </Container>
  );
};

export default UploadEvents;
