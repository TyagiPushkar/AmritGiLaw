import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/AmGLogo.png";
import menu_icon from "../../assets/menu-icon.png";
import { Link, useLocation } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const location = useLocation();
  const [mobileMenu, setMobileMenu] = useState(false);

  const [academicDropdown, setAcademicDropdown] = useState(false);
  const [studentCornerDropdown, setStudentCornerDropdown] = useState(false);
  const [departmentDropdown, setDepartmentDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (location.pathname === "/") {
        setSticky(window.scrollY > 50);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  const closeMenu = () => {
    setMobileMenu(false);
    setAcademicDropdown(false);
    setDepartmentDropdown(false);
    setStudentCornerDropdown(false);
  };

  const handleDropdownToggle = (setter, current) => {
    if (window.innerWidth <= 840) {
      setter(!current);
    }
  };

  const isHomePage = location.pathname === "/";

  return (
    <nav
      className={`container ${
        isHomePage ? (sticky ? "dark-nav" : "") : "sticky"
      }`}
    >
      <Link
        to="/"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "5px",
        }}
        onClick={closeMenu}
      >
        <img src={logo} alt="AmGLogo" className="logo" />
        <div>
          <h4>Amrit Group of Institutions</h4>
          <h5>
            Village & Post Office: Dhanauri,
            <br />
            Roorkee, Haridwar (U.K)
          </h5>
        </div>
      </Link>

      <img
        src={menu_icon}
        alt="Menu Icon"
        className="menu-icon"
        onClick={toggleMenu}
      />

      <ul className={`mobile-menu ${mobileMenu ? "active" : ""}`}>
        <li>
          <Link to="/" onClick={closeMenu} style={{ fontSize: "30px" }}>
            <FaHome />
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={closeMenu}>
            About us
          </Link>
        </li>

        {/* Academic Dropdown */}
        <li
          className="has-dropdown"
          onClick={() =>
            handleDropdownToggle(setAcademicDropdown, academicDropdown)
          }
        >
          <button className="dropdown-toggle">Academic</button>
          <ul className={`dropdown-menu ${academicDropdown ? "active" : ""}`}>
            <li>
              <Link to="/courses" onClick={closeMenu}>
                Courses
              </Link>
            </li>
            <li>
              <Link to="/examination" onClick={closeMenu}>
                Examination
              </Link>
            </li>
            <li>
              <Link to="/affiliation" onClick={closeMenu}>
                Affiliation
              </Link>
            </li>
          </ul>
        </li>

        {/* Departments Dropdown */}
        <li
          className="has-dropdown"
          onClick={() =>
            handleDropdownToggle(setDepartmentDropdown, departmentDropdown)
          }
        >
          <button className="dropdown-toggle">Departments</button>
          <ul className={`dropdown-menu ${departmentDropdown ? "active" : ""}`}>
            <li>
              <Link to="/departments" onClick={closeMenu}>
                Departments
              </Link>
            </li>
            <li>
              <Link to="/education-department" onClick={closeMenu}>
                Education
              </Link>
            </li>
            <li>
              <Link to="/law-department" onClick={closeMenu}>
                Law
              </Link>
            </li>
            <li>
              <Link to="/agriculture-department" onClick={closeMenu}>
                Agriculture
              </Link>
            </li>
            <li>
              <Link to="/yoga-department" onClick={closeMenu}>
                Yoga
              </Link>
            </li>
            <li>
              <Link to="/computer-science-department" onClick={closeMenu}>
                Computer Science
              </Link>
            </li>
            <li>
              <Link to="/library-department" onClick={closeMenu}>
                Library
              </Link>
            </li>
            <li>
              <Link to="/home-science-department" onClick={closeMenu}>
                Home Science
              </Link>
            </li>
          </ul>
        </li>

        {/* Student's Corner Dropdown */}
        <li
          className="has-dropdown"
          onClick={() =>
            handleDropdownToggle(
              setStudentCornerDropdown,
              studentCornerDropdown
            )
          }
        >
          <button className="dropdown-toggle">Student's Corner</button>
          <ul
            className={`dropdown-menu ${studentCornerDropdown ? "active" : ""}`}
          >
            <li>
              <Link to="/syllabus" onClick={closeMenu}>
                Syllabus
              </Link>
            </li>
            <li>
              <Link to="/result" onClick={closeMenu}>
                Result
              </Link>
            </li>
            <li>
              <Link to="/resources" onClick={closeMenu}>
                Central Library
              </Link>
            </li>
            <li>
              <Link to="/isac" onClick={closeMenu}>
                ISAC
              </Link>
            </li>
          </ul>
        </li>

        <li>
          <Link to="/events" onClick={closeMenu}>
            Events
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={closeMenu} className="contact-button">
            Contact us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
