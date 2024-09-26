import React, { useState } from 'react';
import { Container, Typography, Button, Box, Grid, MenuItem, Select, InputLabel, FormControl, Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ResultBoard from './ResultBoard';

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

const UploadResult = () => {
  const [selectedFile, setSelectedFile] = useState(null); // Store selected file
  const [collegeName, setCollegeName] = useState(''); // Store selected college name
  const [courseName, setCourseName] = useState(''); // Store selected course name
  const [semester, setSemester] = useState(''); // Store selected semester
  const [snackbarOpen, setSnackbarOpen] = useState(false); // Snackbar open state
  const [snackbarMessage, setSnackbarMessage] = useState(''); // Snackbar message
  const navigate = useNavigate(); // Initialize navigation hook

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]); // Update selected file
  };

  const handleUpload = async () => {
    if (!collegeName || !courseName || !semester || !selectedFile) {
      setSnackbarMessage('Please fill out all fields and select a file.');
      setSnackbarOpen(true);
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile); // Add the file to formData
    formData.append('college_name', collegeLabels[collegeName]); // Add the college name
    formData.append('course_name', courseName); // Add the course name
    formData.append('semester', semester); // Add the semester

    try {
      const response = await axios.post(
        'https://namami-infotech.com/AmritGi/upload_result.php', // Your API endpoint
        formData,
        {
          headers: { 'Content-Type': 'multipart/form-data' },
        }
      );

      if (response.data.success) {
        setSnackbarMessage('Result uploaded successfully!');
        navigate('/admin-dashboard'); // Redirect to the admin dashboard
      } else {
        setSnackbarMessage(response.data.error || 'Error uploading result');
      }
    } catch (error) {
      setSnackbarMessage('Error uploading result');
    }

    setSnackbarOpen(true);
    setSelectedFile(null); // Clear the selected file
    setCollegeName(''); // Clear college selection
    setCourseName(''); // Clear course selection
    setSemester(''); // Clear semester
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false); // Close snackbar
  };

  return (
    <Container style={{ marginTop: '50px' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Upload Result
      </Typography>

      <Box display="flex" flexDirection="column" alignItems="center">
        {/* Dropdown for College Name */}
        <FormControl fullWidth style={{ marginBottom: '20px' }}>
          <InputLabel>Select College</InputLabel>
          <Select
            value={collegeName}
            onChange={(e) => setCollegeName(e.target.value)} // Update selected college
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
              onChange={(e) => setCourseName(e.target.value)} // Update selected course
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
        <input
          type="text"
          placeholder="Enter Semester"
          value={semester}
          onChange={(e) => setSemester(e.target.value)} // Update semester
          style={{ marginBottom: '20px', padding: '10px', width: '100%' }}
        />

        {/* File Input */}
        <input
          type="file"
          accept=".pdf, image/*"
          onChange={handleFileChange} // Handle file selection
          style={{ marginBottom: '20px' }}
        />
        <Button variant="contained" style={{ backgroundColor: "#a65320" }} onClick={handleUpload}>
          Upload Result
        </Button>
      </Box>

      <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleSnackbarClose}>
        <Alert onClose={handleSnackbarClose} severity="success">
          {snackbarMessage}
        </Alert>
      </Snackbar>
      <ResultBoard/>
    </Container>
  );
};

export default UploadResult;
