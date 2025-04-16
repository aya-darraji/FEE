import React from 'react';
import './NavBar.css';

function NavBar({ activeItem = 'Security' }) {
  return (
    <div className="sidebar">
      <div className="logo-container">
        <div className="logo-image">
          <img src="../../assets/images/login-bg.jpg" alt="Logo" />
        </div>
      </div>
      
      <div className="menu-items">
        <button className={`menu-item ${activeItem === 'Dashboard' ? 'active' : ''}`}>Dashboard</button>
        <button className={`menu-item ${activeItem === 'My Favorites' ? 'active' : ''}`}>My Favorites</button>
        <button className={`menu-item ${activeItem === 'My Alerts' ? 'active' : ''}`}>My Alerts</button>
        <button className={`menu-item ${activeItem === 'My Profile' ? 'active' : ''}`}>My Profile</button>
        <button className={`menu-item ${activeItem === 'Security' ? 'active' : ''}`}>Security</button>
        <button className={`menu-item ${activeItem === 'Code QR' ? 'active' : ''}`}>Code QR</button>
      </div>
      
      <div className="bottom-menu">
        <div className="bottom-menu-item">
          <svg className="bottom-icon" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V3zm2 1v10h10V4H5z" clipRule="evenodd" />
            <path fillRule="evenodd" d="M10 9a1 1 0 01.7.3l3 3a1 1 0 01-1.4 1.4L11 12.4V15a1 1 0 01-2 0v-2.6l-1.3 1.3a1 1 0 01-1.4-1.4l3-3A1 1 0 0110 9z" clipRule="evenodd" />
          </svg>
          <span>Log out</span>
        </div>
      </div>
    </div>
  );
}

export default NavBar;