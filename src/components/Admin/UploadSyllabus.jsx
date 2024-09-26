import React, { useState } from 'react';
import { Container, Typography, Button, Box, FormControl, InputLabel, Select, MenuItem, Snackbar, TextField } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Alert = React.forwardRef((props, ref) => (
  <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
));

const collegeCourses = {
  college1: [
    { degree: 'BBA. LL.B', duration: '10 Sem.' },
    { degree: 'LL.B', duration: '6 Sem.' },
    { degree: 'LL.M', duration: '2 Sem.' }
  ],
  college2: [
    { degree: 'B.Ed.', duration: '2 Years' }
  ],
  college3: [
    { degree: "B.Sc. (Agriculture)", duration: "8 Sem." },
    { degree: "B.Sc. (CS)", duration: "6 Sem." },
    { degree: "B.Sc. (HS)", duration: "2 Sem." }
  ]
};

const collegeLabels = {
  college1: 'Amrit Law College',
  college2: 'Roorkee Degree College',
  college3: 'Amrit College of Education'
};

const UploadSyllabus = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [collegeName, setCollegeName] = useState('');
  const [courseName, setCourseName] = useState('');
  const [semester, setSemester] = useState(''); // Store semester
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const navigate = useNavigate();

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!collegeName || !courseName || !semester || !selectedFile) {
      setSnackbarMessage('Please fill out all fields and select a file.');
      setSnackbarOpen(true);
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);
    formData.append('college_name', collegeLabels[collegeName]);
    formData.append('course_name', courseName);
    formData.append('semester', semester); // Add semester to formData

    try {
      const response = await axios.post(
        'https://namami-infotech.com/AmritGi/upload_syllabus.php', // Your API endpoint
        formData,
        {
          headers: { 'Content-Type': 'multipart/form-data' },
        }
      );

      if (response.data.success) {
        setSnackbarMessage('Syllabus uploaded successfully!');
        navigate('/admin-dashboard'); // Redirect to the admin dashboard
      } else {
        setSnackbarMessage(response.data.error || 'Error uploading syllabus');
      }
    } catch (error) {
      setSnackbarMessage('Error uploading syllabus');
    }

    setSnackbarOpen(true);
    setSelectedFile(null);
    setCollegeName('');
    setCourseName('');
    setSemester(''); // Clear semester
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <Container style={{ marginTop: '50px' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Upload Syllabus
      </Typography>

      <Box display="flex" flexDirection="column" alignItems="center">
        {/* Dropdown for College Name */}
        <FormControl fullWidth style={{ marginBottom: '20px' }}>
          <InputLabel>Select College</InputLabel>
          <Select
            value={collegeName}
            onChange={(e) => setCollegeName(e.target.value)}
          >
            {Object.entries(collegeLabels).map(([key, label]) => (
              <MenuItem key={key} value={key}>
                {label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* Dropdown for Course Name */}
        {collegeName && (
          <FormControl fullWidth style={{ marginBottom: '20px' }}>
            <InputLabel>Select Course</InputLabel>
            <Select
              value={courseName}
              onChange={(e) => setCourseName(e.target.value)}
            >
              {collegeCourses[collegeName].map((course, index) => (
                <MenuItem key={index} value={course.degree}>
                  {course.degree}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        )}

        {/* Input for Semester */}
        <TextField
          label="Enter Semester"
          variant="outlined"
          fullWidth
          margin="normal"
          value={semester}
          onChange={(e) => setSemester(e.target.value)} // Update semester
        />

        {/* File Input */}
        <input
          type="file"
          accept=".pdf, image/*"
          onChange={handleFileChange}
          style={{ marginBottom: '20px' }}
        />
        <Button variant="contained" style={{ backgroundColor: "#a65320" }} onClick={handleUpload}>
          Upload Syllabus
        </Button>
      </Box>

      <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleSnackbarClose}>
        <Alert onClose={handleSnackbarClose} severity="success">
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default UploadSyllabus;
