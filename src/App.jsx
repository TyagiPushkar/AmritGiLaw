import React,{useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FaLinkedin, FaFacebook, FaTwitter,FaEnvelope } from 'react-icons/fa';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import './index.css';
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

const App = () => {
      const [playState, setPlayState] = useState(false);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs setPlayState={setPlayState} />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/events" element={<Gallery />} />
        <Route path="/departments" element={<Departments />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/examination" element={<Examination/>} />
        <Route path="/syllabus" element={<Syllabus/>} />
                <Route path="/result" element={<Result/>} />
                 <Route path="/education-department" element={<Education/>} />
<Route path="/affiliation" element={<Affiliation/>} />
      </Routes>
      <Footer />
            <VideoPlayer playState={playState} setPlayState={setPlayState} />

      {/* Floating Icons */}
      <div className="floating-icons">
        <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
          <FaFacebook />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
          <FaTwitter />
        </a>
      </div>
     
    </BrowserRouter>
  );
}

export default App;
