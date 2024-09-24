import React, { useState } from 'react';
import { Box, Tabs, Tab, Grid, Card, CardContent, Typography, Button } from '@mui/material';

// Mock data for colleges, courses, and semesters with their respective PDF links.
const syllabusData = {
    "Amrit Law College": {
        courses: {
            "BBA LL.B": {
                semesters: {
                    "BBA LL.B": "https://www.amritgi.in/Upload/file/2023/SYLLABUS/BBALLB-2023.pdf",
                    "LL.B":"https://www.amritgi.in/Upload/file/2023/SYLLABUS/LLB-2023.pdf",
                     "Semester 4": "https://www.amritgi.in/Upload/file/BBALLB-IV-SEMESTER.pdf",
                    "Semester 5": "https://www.amritgi.in/Upload/file/BBALLB-V-SEMESTER.pdf",
                    "Semester 6": "https://www.amritgi.in/Upload/file/BBALLB-VI-SEMESTER.pdf",
                      "Semester 7": "https://www.amritgi.in/Upload/file/BBALLB-VIII-SEMESTER.pdf",
                    "Semester 8": "https://www.amritgi.in/Upload/file/BBALLB-VIII-SEMESTER.pdf",
                    "Semester 9": "https://www.amritgi.in/Upload/file/BBALLB-IX-SEMESTER.pdf",
                    "Semester 10": "https://www.amritgi.in/Upload/file/BBALLB-X-SEMESTER.pdf",
                    
                },
            },
            "LL.B": {
                semesters: {
                    "Semester 1": "https://www.amritgi.in/Upload/file/LLB-I-SEM.pdf",
                    "Semester 2": "https://www.amritgi.in/Upload/file/LLB-II-SEMESTER.pdf",
                    "Semester 3": "https://www.amritgi.in/Upload/file/Law_LLB__Semester_3__Syllabus_2018.pdf",
                    "Semester 4": "https://www.amritgi.in/Upload/file/LLB-IV-SEMESTER.pdf",
                    "Semester 5": "https://www.amritgi.in/Upload/file/Law_LLB__Semester_5_______Syllabus_2018.pdf",
                    "Semester 6": "https://www.amritgi.in/Upload/file/LLB-VI-SEMESTER-1.pdf",
                  
                },
            },
            "LL.M (I YEAR COURSE)": {
                semesters: {
                    "LL.M- 1 YEAR ORDINANACE AND SYALLBUS": "https://www.amritgi.in/Upload/file/LLM_%20One%20year%20Ordinance%20and%20syallbus.pdf",
                    "LL.M- I Semester":"https://www.amritgi.in/Upload/file/New_llm_one_year.pdf",
                    "LL.M- II Semester CONSTITUTIONAL GROUP":"https://www.amritgi.in/Upload/file/Final%20LL_M-%20II%20Semester(Constitutional%20and%20administrative%20lawGroup)%20Syllabus.pdf",
                    "LL.M- II Semester CRIMINAL GROUP":"https://www.amritgi.in/Upload/file/Final%20LL_M-%20II%20Semester%20(Criminal%20Law%20Group)%20Syllabus.pdf",
                    "LL.M- II Semester CORPORATE GROUP":"https://www.amritgi.in/Upload/file/Final%20LL_M-%20II%20Semester%20(Corpoprate%20&%20Commercial%20Law%20Group)%20Syllabus.pdf"
                    
                },
            },
        },
        head:{
            "heading":"Amrit Law College (Syllabus- BBALL.B, LL.B & LL.M) "
        }
    },
    "Roorkee Degree College": {
        courses: {
            "Syllabus of B.Ed ": {
                semesters: {
                    "B. Ed": "https://www.amritgi.in/Upload/file/Curriculum_for_B_Ed_2_Years_HnBGU_2.pdf",
                   
                },
            },
        },
    },
    "Amrit College Of Education": {
        courses: {
            "B.Sc. agriculture": {
                semesters: {
                    "Syllabus": "https://www.amritgi.in/Upload/file/B.Sc.%20(Agriculture)%20syllabus(1).pdf",
                },
                
            },
             "B.Sc. COMPUTER SCIENCE": {
                semesters: {
                    "Syllabus": "",
                },
                
            },
             "P.G DIPLOMA in YOGA": {
                semesters: {
                    "Syllabus": "https://www.amritgi.in/Upload/file/PGD%20Yog.pdf",
                },
                
            },
             "L B. LIB.sc (IBRARY SCIENCE)": {
                semesters: {
                    "Syllabus": "https://www.amritgi.in/Upload/file/PGD%20Yog.pdf",
                },
                
            },
             "MASTER in YOGA MA": {
                semesters: {
                    "Syllabus": "https://www.amritgi.in/Upload/file/PGD%20Yog.pdf",
                },
                
            },
            
        },
    },
};

const Syllabus = () => {
    const [activeTab, setActiveTab] = useState('Amrit Law College');
    const [selectedCourse, setSelectedCourse] = useState(null);

    const handleTabChange = (event, newValue) => {
        setActiveTab(newValue);
        setSelectedCourse(null); // Reset course when a new college is selected
    };

    const handleCourseSelect = (course) => {
        setSelectedCourse(course);
    };

    const handleSemesterSelect = (pdfUrl) => {
        window.open(pdfUrl, '_blank'); // Open the PDF in a new tab
    };

    return (
        <div style={{ marginTop: "100px", minHeight: "500px", textAlign: "center" }}>
            <h1>Course's Syllabus</h1>
            <Box sx={{ width: '100%', padding: 2 }}>
                {/* Tabs for college selection */}
                <Tabs
                    value={activeTab}
                    onChange={handleTabChange}
                    indicatorColor="transparent"
                    textColor="inherit"
                    centered
                    sx={{
                        width: '100%',
                        background: 'linear-gradient(to right, #1976d2, #42a5f5)', // Gradient background
                        borderRadius: '10px',
                        padding: '8px',
                        marginBottom: '16px',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                    }}
                >
                    {Object.keys(syllabusData).map((college) => (
                        <Tab
                            key={college}
                            label={college}
                            value={college}
                            sx={{
                                color: 'white',
                                fontWeight: 'bold',
                                textTransform: 'none',
                                borderRadius: '10px',
                                padding: '10px 20px',
                                margin: '0 56px', // Space between each tab

                                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                transition: 'background-color 0.3s, transform 0.3s',
                                '&:hover': {
                                    backgroundColor: 'rgba(255, 255, 255, 0.3)',
                                    transform: 'scale(1.05)',
                                },
                                '&.Mui-selected': {
                                    backgroundColor: '#ffffff',
                                    color: '#1976d2',
                                    fontWeight: 'bold',
                                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
                                    transform: 'scale(1.1)',
                                },
                            }}
                        />
                    ))}
                </Tabs>

                {/* Course Cards */}
                {syllabusData[activeTab] && (
                    <Grid container spacing={2} justifyContent="center">
                        {Object.keys(syllabusData[activeTab].courses).map((course) => (
                            <Grid item xs={12} sm={6} md={4} lg={4} key={course}>
                                <Card>
                                    <CardContent>
                                        <Typography variant="h6">{course}</Typography>
                                        {Object.keys(syllabusData[activeTab].courses[course].semesters).map((semester) => (
                                            <Button
                                                key={semester}
                                                variant="outlined"
                                                onClick={() =>
                                                    handleSemesterSelect(syllabusData[activeTab].courses[course].semesters[semester])
                                                }
                                                style={{ margin: '5px' }}
                                            >
                                                {semester}
                                            </Button>
                                        ))}
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

export default Syllabus;
