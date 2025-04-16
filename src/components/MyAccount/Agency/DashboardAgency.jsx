import React, { useState } from 'react';
import './DashboardAgency.css';

function DashboardAgency() {
  // State for navigation
  const [activePage, setActivePage] = useState('dashboard');

  // Function to handle navigation
  const navigateTo = (page) => {
    setActivePage(page);
    console.log(`Navigating to: ${page}`);
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="logo-container">
          <div className="logo-image">
            <img src="../../assets/images/login-bg.jpg" alt="Logo" />
          </div>
        </div>
        
        {/* Moved sidebar-menu to be directly below logo */}
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
      
      {/* Main Content */}
      <div className="main-content">
        {/* Agency Management Section */}
        <div className="dashboard-section section-agency">
          <h3 className="section-title">Agency Management</h3>
          <div className="section-content">
            <div className="grid-card" onClick={() => navigateTo('agency-information')}>
              <h3>Agency Information</h3>
            </div>
            
            <div className="grid-card" onClick={() => navigateTo('car-information')}>
              <h3>Car Information</h3>
            </div>
            
            <div className="grid-card" onClick={() => navigateTo('manger-stocke')}>
              <h3>Manger Stocke</h3>
            </div>
          </div>
        </div>
        
        {/* Analytics Section */}
        <div className="dashboard-section section-analytics">
          <h3 className="section-title">Analytics</h3>
          <div className="section-content">
            <div className="grid-card" onClick={() => navigateTo('secure-profile')}>
              <h3>Secure My Profile</h3>
            </div>
          </div>
        </div>
        
        {/* Security Section */}
        <div className="dashboard-section section-security">
          <h3 className="section-title">Security</h3>
          <div className="section-content">
            <div className="grid-card" onClick={() => navigateTo('view-statistics')}>
              <h3>View Statistics</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardAgency;