// src/App.jsx

import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FaLinkedin, FaFacebook, FaTwitter, FaWhatsapp } from "react-icons/fa";

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Courses from './pages/Courses';
import Gallery from './pages/Gallery';
import Departments from './pages/Departments';
import ContactUs from './pages/ContactUs';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';
import Examination from './pages/Examination';
import Syllabus from './pages/Syllabus';
import Result from './pages/Result';
import Education from './components/Department/Education';
import Affiliation from './pages/Affiliation';
import ScrollToTop from './components/ScrollToTop';
import AdminLogin from './pages/AdminLogin';
import ProtectedRoute from './components/ProtectedRoute'; // Import Protected Route
import AdminDashboard from './components/Admin/AdminDashboard';
import { AuthProvider } from './components/AuthContext'; // Import AuthProvider
import ISAC from './pages/ISAC';
import CentralLib from './pages/CentralLib';
import Law from './components/Department/Law';
import EventGallery from './components/EventCard/EventGallery';

const App = () => {
  const [playState, setPlayState] = useState(false);

  return (
    <AuthProvider>
      <BrowserRouter>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
          }}
        >
          <ScrollToTop />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/about"
              element={<AboutUs setPlayState={setPlayState} />}
            />
            <Route path="/courses" element={<Courses />} />
            <Route path="/events" element={<Gallery />} />
            <Route path="/departments" element={<Departments />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/examination" element={<Examination />} />
            <Route path="/syllabus" element={<Syllabus />} />
            <Route path="/result" element={<Result />} />
            <Route path="/education-department" element={<Education />} />
            <Route path="/law-department" element={<Law />} />

            <Route path="/affiliation" element={<Affiliation />} />
            <Route path="/isac" element={<ISAC />} />
            <Route path="/resources" element={<CentralLib />} />
            <Route path="/login" element={<AdminLogin />} />
            <Route path="/event/:eventName" element={<EventGallery />} />
            {/* Protected Routes */}
            <Route
              path="/admin-dashboard"
              element={
                <ProtectedRoute>
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />
            {/* Add other protected routes here */}
          </Routes>
          <Footer />
          <VideoPlayer playState={playState} setPlayState={setPlayState} />
          <div className="floating-icons">
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
            <a
              href="https://www.facebook.com/amritgroupofinstitution"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
              <FaTwitter />
            </a>
            <a href="https://wa.me/+919910070444" target="_blank" rel="noreferrer">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
