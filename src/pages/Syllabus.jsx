import React, { useState, useEffect } from 'react';
import { Box, Tabs, Tab, Grid, Card, CardContent, Typography, Button, useMediaQuery, Select, MenuItem } from '@mui/material';
import axios from 'axios'; // Import axios for API calls

const Syllabus = () => {
    const [activeTab, setActiveTab] = useState('Amrit Law College');
    const [syllabusData, setSyllabusData] = useState({}); // State for syllabus data
    const isMobile = useMediaQuery('(max-width: 600px)'); // Detect mobile screen size

    useEffect(() => {
        const fetchSyllabus = async () => {
            try {
                const response = await axios.get('https://namami-infotech.com/AmritGi/get_syllabus.php');
                if (response.data.success) {
                    // Transform the fetched data to match your previous structure if needed
                    const fetchedData = response.data.data;
                    setSyllabusData(fetchedData);
                }
            } catch (error) {
                console.error('Error fetching syllabus data:', error);
            }
        };

        fetchSyllabus(); // Call the function to fetch syllabus data
    }, []); // Empty dependency array to run only on mount

    const handleTabChange = (event, newValue) => {
        setActiveTab(newValue);
    };

    const handleSelectChange = (event) => {
        setActiveTab(event.target.value);
    };

    const handleSemesterSelect = (pdfUrl) => {
        window.open(pdfUrl, '_blank'); // Open the PDF in a new tab
    };

    // Function to group syllabus data by course name for the active college
    const groupSyllabusByCourse = (data, college) => {
        const grouped = {};
        if (data[college]) {
            data[college].forEach(item => {
                const { course_name, semester, file_url } = item;
                if (!grouped[course_name]) {
                    grouped[course_name] = [];
                }
                grouped[course_name].push({ semester, file_url });
            });
        }
        return grouped;
    };

    // Group syllabus for the currently active tab
    const groupedSyllabus = groupSyllabusByCourse(syllabusData, activeTab);

    return (
      <div
        style={{ marginTop: "100px", minHeight: "500px", textAlign: "center" }}
      >
        <h1>Course's Syllabus</h1>
        <Box sx={{ width: "100%", padding: 2 }}>
          {/* Tabs for college selection */}
          {isMobile ? (
            // Dropdown for mobile screens
            <Select
              value={activeTab}
              onChange={handleSelectChange}
              variant="outlined"
              fullWidth
              sx={{
                marginBottom: "16px",
                background: "#f30202",
                color: "white",
                borderRadius: "10px",
              }}
            >
              {Object.keys(syllabusData).map((college) => (
                <MenuItem key={college} value={college}>
                  {college}
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
                width: "100%",
                background: "#f30202",
                borderRadius: "10px",
                padding: "8px 0",
                marginBottom: "16px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
              }}
            >
              {Object.keys(syllabusData).map((college) => (
                <Tab
                  key={college}
                  label={college}
                  value={college}
                  sx={{
                    color: "#f30202",
                    fontWeight: "bold",
                    textTransform: "none",
                    borderRadius: "10px",
                    padding: "10px 24px",
                    margin: "0 16px",
                    backgroundColor: "rgba(255, 255, 255, 0.7)",
                    transition: "background-color 0.3s, transform 0.3s",
                    "&:hover": {
                      backgroundColor: "rgba(255, 255, 255, 0.3)",
                      transform: "scale(1.05)",
                    },
                    "&.Mui-selected": {
                      backgroundColor: "#ffffff",
                      color: "#f30202",
                      fontWeight: "bold",
                      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                      transform: "scale(1.1)",
                    },
                    margin: "0 120px",
                  }}
                />
              ))}
            </Tabs>
          )}
          {/* Course Cards */}
          {Object.keys(groupedSyllabus).length > 0 && (
            <Grid container spacing={2} justifyContent="center">
              {Object.entries(groupedSyllabus).map(
                ([courseName, semesters]) => (
                  <Grid item xs={12} sm={6} md={4} lg={4} key={courseName}>
                    <Card>
                      <CardContent>
                        <Typography variant="h6">{courseName}</Typography>
                        {semesters.map((semester) => (
                          <Button
                            key={semester.file_url}
                            variant="outlined"
                            onClick={() =>
                              handleSemesterSelect(semester.file_url)
                            }
                            style={{
                              margin: "5px",
                              color: "#f30202",
                              border: "1px solid #f30202",
                            }}
                          >
                            {semester.semester}
                          </Button>
                        ))}
                      </CardContent>
                    </Card>
                  </Grid>
                )
              )}
            </Grid>
          )}
        </Box>
      </div>
    );
};

export default Syllabus;
