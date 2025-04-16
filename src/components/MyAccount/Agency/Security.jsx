import React, { useState } from 'react';
import './SecurityAgency.css';

function SecurityAgency() {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [activePage, setActivePage] = useState('security');

  const navigateTo = (page) => {
    setActivePage(page);
    // Ajoutez ici votre logique de navigation si nécessaire
    console.log(`Navigating to: ${page}`);
  };

  return (
    <div className="security-container">
      {/* Sidebar modifiée */}
      <div className="sidebar">
        <div className="logo-container">
          <div className="logo-image">
            <img src="../../assets/images/login-bg.jpg" alt="Logo" />
          </div>
        </div>
        
        {/* Menu avec navigation active */}
        <div className="sidebar-menu">
          <button 
            className={`menu-item ${activePage === 'dashboard' ? 'active' : ''}`}
            onClick={() => navigateTo('dashboard')}
          >
            Dashboard
          </button>
          <button 
            className={`menu-item ${activePage === 'agency-information' ? 'active' : ''}`}
            onClick={() => navigateTo('agency-information')}
          >
            Agency Information
          </button>
          <button 
            className={`menu-item ${activePage === 'car-information' ? 'active' : ''}`}
            onClick={() => navigateTo('car-information')}
          >
            Car Information
          </button>
          <button 
            className={`menu-item ${activePage === 'manger-stocke' ? 'active' : ''}`}
            onClick={() => navigateTo('manger-stocke')}
          >
            Manger Stocke
          </button>
          <button 
            className={`menu-item ${activePage === 'view-statistics' ? 'active' : ''}`}
            onClick={() => navigateTo('view-statistics')}
          >
            View Statistics
          </button>
          <button 
            className={`menu-item ${activePage === 'security' ? 'active' : ''}`}
            onClick={() => navigateTo('security')}
          >
            Security
          </button>
        </div>
        
        <div className="sidebar-footer">
          <div className="user-info">
            <div className="avatar">
              <img src="/api/placeholder/30/30" alt="User" />
            </div>
            <span className="username">Username</span>
          </div>
          
          <div className="bottom-menu-item" onClick={() => navigateTo('logout')}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
              <polyline points="16 17 21 12 16 7"></polyline>
              <line x1="21" y1="12" x2="9" y2="12"></line>
            </svg>
            <span>Log out</span>
          </div>
        </div>
      </div>
      
      {/* Main Content (inchangé) */}
      <div className="main-content">
        

        {/* Password change form (inchangé) */}
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
                placeholder="Repeat Password"
                className="repeat-password"
                value={repeatPassword}
                onChange={(e) => setRepeatPassword(e.target.value)}
              />
            </div>
          </div>
          
          <div className="form-actions">
            <button type="button" className="cancel-button">Cancel</button>
            <button type="submit" className="send-button">Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecurityAgency;