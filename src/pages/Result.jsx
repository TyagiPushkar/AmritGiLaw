import React, { useState, useEffect } from 'react';
import { Box, Tabs, Tab, Grid, Card, CardContent, Typography, Button, useMediaQuery, Select, MenuItem } from '@mui/material';

const Result = () => {
    const [activeTab, setActiveTab] = useState('');
    const [resultData, setResultData] = useState({});
    const [selectedCourse, setSelectedCourse] = useState(null);
    const isMobile = useMediaQuery('(max-width: 600px)'); // Detect mobile screen size

    // Fetch results from API
    useEffect(() => {
        const fetchResults = async () => {
            try {
                const response = await fetch('https://namami-infotech.com/AmritGi/get_result.php');
                const data = await response.json();
                if (data.success) {
                    setResultData(data.data);
                    setActiveTab(Object.keys(data.data)[0]); // Set the first college as the default active tab
                }
            } catch (error) {
                console.error('Error fetching result data:', error);
            }
        };

        fetchResults();
    }, []);

    const handleTabChange = (event, newValue) => {
        setActiveTab(newValue);
        setSelectedCourse(null); // Reset course when a new college is selected
    };

    const handleSelectChange = (event) => {
        setActiveTab(event.target.value);
    };

    const handleSemesterSelect = (pdfUrl) => {
        window.open(pdfUrl, '_blank'); // Open the PDF in a new tab
    };

    return (
      <div
        style={{ marginTop: "100px", minHeight: "500px", textAlign: "center" }}
      >
        <h1>Result Board</h1>
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
              {Object.keys(resultData).map((college) => (
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
              {Object.keys(resultData).map((college) => (
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
                    margin: "0 120px", // Add margin here
                  }}
                />
              ))}
            </Tabs>
          )}

          {/* Course and Semester Cards */}
          {resultData[activeTab] && (
            <Grid container spacing={2} justifyContent="center">
              {Object.keys(resultData[activeTab]).map((course) => (
                <Grid item xs={12} sm={6} md={4} lg={4} key={course}>
                  <Card>
                    <CardContent>
                      <Typography variant="h6">{course}</Typography>
                      {Object.keys(resultData[activeTab][course]).map(
                        (semester) => (
                          <Button
                            key={semester}
                            variant="outlined"
                            onClick={() =>
                              handleSemesterSelect(
                                resultData[activeTab][course][semester]
                              )
                            }
                            style={{
                              margin: "5px",
                              color: "#f30202",
                              border: "1px solid #f30202",
                            }}
                          >
                            {semester}
                          </Button>
                        )
                      )}
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          )}
        </Box>
      </div>
    );
};

export default Result;
