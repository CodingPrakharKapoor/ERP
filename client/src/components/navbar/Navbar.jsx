/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [campusOpen, setCampusOpen] = useState(false);
  const [quickNavOpen, setQuickNavOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const menuRef = useRef();
  const campusRef = useRef();
  const quickNavRef = useRef();
  const notificationsRef = useRef();
  const profileRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current && !menuRef.current.contains(event.target) &&
        campusRef.current && !campusRef.current.contains(event.target) &&
        quickNavRef.current && !quickNavRef.current.contains(event.target) &&
        notificationsRef.current && !notificationsRef.current.contains(event.target) &&
        profileRef.current && !profileRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
        setCampusOpen(false);
        setQuickNavOpen(false);
        setNotificationsOpen(false);
        setProfileOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="navbar">
      <div className="nav-item relative" ref={menuRef}>
        <button onClick={() => setMenuOpen(!menuOpen)} className="nav-button">
          Mega Menu ▼
        </button>
        {menuOpen && (
          <div className="dropdown-menu">
            <ul>
              <li className="dropdown-item">My Account</li>
              <li className="dropdown-item">My Profile</li>
              <li className="dropdown-item">Syllabus</li>
              <li className="dropdown-item">Notice Corner</li>
            </ul>
          </div>
        )}
      </div>

      <div className="nav-item relative" ref={campusRef}>
        <button onClick={() => setCampusOpen(!campusOpen)} className="nav-button">
          Mathura Campus | B.Tech. - CS : V Sem. ▼
        </button>
        {campusOpen && (
          <div className="dropdown-menu">
            <ul>
              <li className="dropdown-item">Campus Details</li>
              <li className="dropdown-item">Course Info</li>
            </ul>
          </div>
        )}
      </div>

      <div className="nav-item relative" ref={quickNavRef}>
        <button onClick={() => setQuickNavOpen(!quickNavOpen)} className="nav-button">
          Quick Navigation ▼
        </button>
        {quickNavOpen && (
          <div className="dropdown-menu">
            <ul>
              <li className="dropdown-item">Easy navigation inside dropdowns</li>
              <li className="dropdown-item">Hostel</li>
              <li className="dropdown-item">Mobile App</li>
              <li className="dropdown-item">Library</li>
              <li className="dropdown-item">PREP</li>
            </ul>
          </div>
        )}
      </div>

      <div className="nav-item relative" ref={notificationsRef}>
        <button onClick={() => setNotificationsOpen(!notificationsOpen)} className="nav-button">
          <span className="bell-icon">🔔</span>
        </button>
        {notificationsOpen && (
          <div className="dropdown-menu">
            <ul>
              <li className="dropdown-item">New Assignment Posted</li>
              <li className="dropdown-item">Upcoming Exam Schedule</li>
              <li className="dropdown-item">Library Book Due</li>
            </ul>
          </div>
        )}
      </div>

      <div className="nav-item relative" ref={profileRef}>
        <button onClick={() => setProfileOpen(!profileOpen)} className="nav-button flex items-center">
          <img src="./user.jpg" alt="User" className="user-photo" />
        </button>
        {profileOpen && (
          <div className="dropdown-menu dropdown-menu-right">
            <ul>
              <li className="dropdown-item">Atharva Jaiswal (2215000408)</li>
              <li className="dropdown-item">B.Tech. - CS : V Sem.</li>
              <li className="dropdown-item">Mathura Campus</li>
              <li className="dropdown-item logout-button">Logout</li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
