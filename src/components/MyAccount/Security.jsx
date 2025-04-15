import React, { useState } from 'react';
import './Security.css'; // Assurez-vous de créer ce fichier CSS
import '../../assets/images/login-bg.jpg';

function Security() {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  return (
    <div className="security-container">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="logo-container">
          <div className="logo-image">
            <img src="../../assets/images/login-bg.jpg" alt="Logo" />
          </div>
        </div>
        
        <div className="menu-items">
          <button className="menu-item">Dashboard</button>
          <button className="menu-item">My Favorites</button>
          <button className="menu-item">My Alerts</button>
          <button className="menu-item">My Profile</button>
          <button className="menu-item active">Security</button>
          <button className="menu-item">Code QR</button>
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
      
      {/* Main Content */}
      <div className="main-content">
        <div className="top-navbar">
          <div className="navbar-icons">
            
            <button className="navbar-icon">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>
            <div className="user-profile">
              <div className="avatar">U</div>
              <span className="username">Username</span>
            </div>
          </div>
        </div>

        {/* Password change form */}
        <div className="password-form">
          <div className="form-fields">
            <div className="form-field">
              <input
                type="password"
                placeholder="Old Password"
                className="old-password"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
              />
            </div>
            <div className="form-field">
              <input
                type="password"
                placeholder="New Password"
                className="new-password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>
            <div className="form-field">
              <input
                type="password"
                placeholder="Repeat"
                className="repeat-password"
                value={repeatPassword}
                onChange={(e) => setRepeatPassword(e.target.value)}
              />
            </div>
          </div>
          
          <div className="form-actions">
            <button className="cancel-button">Cancel</button>
            <button className="send-button">Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Security;