import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Typography, Table, TableBody, TableCell, TableHead, TableRow, Button, Snackbar, Box } from '@mui/material';
import MuiAlert from '@mui/material/Alert';

// Alert component for Snackbar
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const ResultBoard = () => {
  const [results, setResults] = useState([]); // Initialize as an empty array
  const [error, setError] = useState(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await axios.get('https://namami-infotech.com/AmritGi/get_result.php');
        if (response.data.success && response.data.data) {
          const formattedResults = formatResults(response.data.data);
          setResults(formattedResults);
        } else {
          setResults([]); // Set an empty array if data is not in expected format
        }
      } catch (err) {
        setError('Failed to fetch results.');
      }
    };

    fetchResults(); // Fetch results when component mounts
  }, []);

  // Flatten the nested result structure
  const formatResults = (data) => {
    const formatted = [];
    for (const collegeName in data) {
      for (const courseName in data[collegeName]) {
        for (const semester in data[collegeName][courseName]) {
          formatted.push({
            college_name: collegeName,
            course_name: courseName,
            semester: semester,
            file: data[collegeName][courseName][semester],
          });
        }
      }
    }
    return formatted;
  };

  const handleDelete = async (college_name, course_name, semester) => {
    try {
      const response = await axios.post(
        'https://namami-infotech.com/AmritGi/delete_result.php',
        {
          college_name: college_name,
          course_name: course_name,
          semester: semester,
        },
        {
          headers: {
            'Content-Type': 'application/json', // Set content type to JSON
          },
        }
      );
      if (response.data.success) {
        setSnackbarMessage('Deleted successfully');
        setSnackbarOpen(true);
        // Optionally, refresh results here
        const updatedResults = results.filter(
          (result) => !(result.college_name === college_name && result.course_name === course_name && result.semester === semester)
        );
        setResults(updatedResults);
      } else {
        setSnackbarMessage(`Failed to delete: ${response.data.message}`);
        setSnackbarOpen(true);
      }
    } catch (error) {
      console.error('Error during deletion:', error);
      setSnackbarMessage('Error during deletion');
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
        Results Board
      </Typography>

      <Box overflow="auto"> {/* Responsive container */}
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>College Name</TableCell>
              <TableCell>Course Name</TableCell>
              <TableCell>Semester</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {results.length > 0 ? (
              results.map((result, index) => (
                <TableRow key={index}>
                  <TableCell>{result.college_name}</TableCell>
                  <TableCell>{result.course_name}</TableCell>
                  <TableCell>{result.semester}</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      style={{ backgroundColor: "#a65320" }}
                      onClick={() => handleDelete(result.college_name, result.course_name, result.semester)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={4} align="center"> {/* Adjust colspan to match the number of columns */}
                  No results found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </Box>

      <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleSnackbarClose}>
        <Alert onClose={handleSnackbarClose} severity="success">
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default ResultBoard;
