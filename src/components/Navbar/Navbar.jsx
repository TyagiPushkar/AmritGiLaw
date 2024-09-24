import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/AmGLogo.png';
import menu_icon from '../../assets/menu-icon.png';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [sticky, setSticky] = useState(false);
    const location = useLocation();
    const [mobileMenu, setMobileMenu] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (location.pathname === '/') {
                setSticky(window.scrollY > 50);
            } else {
                setSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [location.pathname]);

    const toggleMenu = () => {
        setMobileMenu(!mobileMenu);
    };

    const isHomePage = location.pathname === '/';

    return (
        <nav className={`container ${isHomePage ? (sticky ? 'dark-nav' : '') : 'sticky'}`}>
            <Link to="/" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "5px" }}>
                <img src={logo} alt="AmGLogo" className='logo' />
                <div>
                    <h4>Amrit Group of Institutions</h4>
                    <h5>Village & Post Office: Dhanauri,<br />Roorkee, Haridwar (U.K)</h5>
                </div>
            </Link>
            <img src={menu_icon} alt="Menu Icon" className='menu-icon' onClick={toggleMenu} />
            <ul className={`mobile-menu ${mobileMenu ? 'active' : ''}`}>
                <li><Link to='/about'>About us</Link></li>
                <li>
                    <Link to='/'>Academic</Link>
                    <ul className='dropdown'>
                        <li><Link to='/courses'>Courses</Link></li>
                        <li><Link to='/examination'>Examination</Link></li>
                        <li><Link to='/affiliation'>Affiliation</Link></li>
                    </ul>
                </li>
                <li>
                    <Link to='/departments'>Departments</Link>
                    <ul className='dropdown'>
                        <li><Link to='/education-department'>Department of Education</Link></li>
                        <li><Link to='/law-department'>Department of Law</Link></li>
                        <li><Link to='/ayurveda-department'>Department of Ayurveda</Link></li>
                        <li><Link to='/agriculture-department'>Department of Agriculture</Link></li>
                        <li><Link to='/yoga-department'>Department of Yoga</Link></li>
                        <li><Link to='/computer-science-department'>Department of Computer Science</Link></li>
                        <li><Link to='/library-department'>Department of Library</Link></li>
                        <li><Link to='/home-science-department'>Department of Home Science</Link></li>
                    </ul>
                </li>
                <li>
                    <Link to='/'>Student's Corner</Link>
                    <ul className='dropdown'>
                        <li><Link to='/syllabus'>Syllabus</Link></li>
                        <li><Link to='/result'>Result</Link></li>
                        <li><Link to='/resources'>Central Library</Link></li>
                    </ul>
                </li>
                <li><Link to='/events'>Events</Link></li>
                <li><Link to='/contact' className='contact-button'>Contact us</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
