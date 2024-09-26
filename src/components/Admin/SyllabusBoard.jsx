import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Typography, Table, TableBody, TableCell, TableHead, TableRow, Paper, Button, Snackbar, Box } from '@mui/material';
import MuiAlert from '@mui/material/Alert';

// Alert component for Snackbar
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const SyllabusBoard = () => {
  const [syllabus, setSyllabus] = useState({});
  const [error, setError] = useState(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  useEffect(() => {
    fetchSyllabus(); 
  }, []);

  const fetchSyllabus = async () => {
    try {
      const response = await axios.get('https://namami-infotech.com/AmritGi/get_syllabus.php');
      if (response.data.success) {
        setSyllabus(response.data.data);
      } else {
        setSyllabus({}); 
      }
    } catch (err) {
      setError('Failed to fetch syllabus.');
    }
  };

  const handleDelete = async (college_name, course_name, semester) => {
    console.log('Deleting:', { college_name, course_name, semester }); // Log the inputs
    try {
      const response = await axios.post(
        'https://namami-infotech.com/AmritGi/delete_syllabus.php',
        {
          college_name: college_name,
          course_name: course_name,
          semester: semester,
        }
      );
      if (response.data.success) {
        setSnackbarMessage('Syllabus deleted successfully.');
        setSnackbarOpen(true);
        // Re-fetch syllabus
        fetchSyllabus();
      } else {
        setSnackbarMessage(response.data.message || 'Failed to delete syllabus.');
        setSnackbarOpen(true);
      }
    } catch (error) {
      console.error('Error during deletion:', error);
      setSnackbarMessage('An error occurred during deletion.');
      setSnackbarOpen(true);
    }
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  if (error) {
    return <Typography variant="h6" color="error">{error}</Typography>;
  }

  return (
    <Container style={{ marginTop: '50px' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Syllabus Board
      </Typography>

      {Object.keys(syllabus).length > 0 ? (
        Object.entries(syllabus).map(([collegeName, items], index) => (
          <div key={index}>
            <Typography variant="h5" style={{ margin: '20px 0' }}>
              {collegeName}
            </Typography>
            <Box overflow="auto">
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Course Name</TableCell>
                    <TableCell>Semester</TableCell>
                    <TableCell>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {items.map((item, idx) => (
                    <TableRow key={idx}>
                      <TableCell>{item.course_name}</TableCell>
                      <TableCell>{item.semester}</TableCell>
                      <TableCell>
                        <Button
                          variant="contained"
                          style={{ backgroundColor: "#a65320" }}
                          onClick={() => handleDelete(item.college_name, item.course_name, item.semester)}
                        >
                          Delete
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </div>
        ))
      ) : (
        <Typography variant="h6" align="center">No syllabus found.</Typography>
      )}

      <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleSnackbarClose}>
        <Alert onClose={handleSnackbarClose} severity="success">
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default SyllabusBoard;
