  import React, { useState } from 'react';
  import './DashboardRegistration.css';
  // Import your logo directly if it exists in that path
  // If not, you might need to adjust this path
  import '../../assets/images/login-bg.jpg';

  function DashboardRegistration() {
    // States for navigation (you can implement navigation logic later)
    const [activePage, setActivePage] = useState('dashboard');

    // Function to handle navigation
    const navigateTo = (page) => {
      setActivePage(page);
      // You would add any navigation logic here
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
          
          <div className="sidebar-menu">
            <button 
              className={`menu-item ${activePage === 'dashboard' ? 'active' : ''}`} 
              onClick={() => navigateTo('dashboard')}
            >
              Dashboard
            </button>
            <button 
              className={`menu-item ${activePage === 'my-favorites' ? 'active' : ''}`} 
              onClick={() => navigateTo('my-favorites')}
            >
              My Favorites
            </button>
            <button 
              className={`menu-item ${activePage === 'my-alerts' ? 'active' : ''}`} 
              onClick={() => navigateTo('my-alerts')}
            >
              My Alerts
            </button>
            <button 
              className={`menu-item ${activePage === 'my-profile' ? 'active' : ''}`} 
              onClick={() => navigateTo('my-profile')}
            >
              My Profile
            </button>
            <button 
              className={`menu-item ${activePage === 'security' ? 'active' : ''}`} 
              onClick={() => navigateTo('security')}
            >
              Security
            </button>
            <button 
              className={`menu-item ${activePage === 'code-qr' ? 'active' : ''}`} 
              onClick={() => navigateTo('code-qr')}
            >
              Code QR
            </button>
          </div>
          
          <div className="sidebar-footer">
            <div className="bottom-menu-item" onClick={() => navigateTo('logout')}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff5ec4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
          {/* Top bar at right of page */}
          <div className="top-bar">
            <div className="notification-area">
              
              <button className="icon-button">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                  <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                </svg>
              </button>
              <div className="user-profile">
                <div className="avatar">
                  <img src="/api/placeholder/40/40" alt="User avatar" />
                </div>
                <span className="username">Username</span>
              </div>
            </div>
          </div>
          
          <div className="dashboard-grid">
            {/* Buy Section */}
            <div className="section-row">
              <div className="section-title">
                <h2>buy</h2>
              </div>
              <div className="section-content">
                <div className="grid-card find-car" onClick={() => navigateTo('find-car')}>
                  <h3>Find a Car</h3>
                </div>
                
                <div className="grid-card view-favorites" onClick={() => navigateTo('my-favorites')}>
                  <h3>View Favorites</h3>
                </div>
                
                <div className="grid-card view-alerts" onClick={() => navigateTo('my-alerts')}>
                  <h3>View My Alerts</h3>
                </div>
              </div>
            </div>
            
            {/* Account Section - Edit and Secure Profile in line with Manage My Account */}
            <div className="section-row">
              <div className="section-title">
                <h2>Manage My Account</h2>
              </div>
              <div className="section-content">
                <div className="grid-card edit-profile" onClick={() => navigateTo('my-profile')}>
                  <h3>Edit My Profile</h3>
                </div>
                
                <div className="grid-card secure-profile" onClick={() => navigateTo('security')}>
                  <h3>Secure My Profile</h3>
                </div>
              </div>
            </div>
            
            {/* QR Section - Car Details in line with code QR */}
            <div className="section-row">
              <div className="section-title">
                <h2>code QR</h2>
              </div>
              <div className="section-content single-card">
                <div className="grid-card car-details" onClick={() => navigateTo('code-qr')}>
                  <h3>CAR DETAILS</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  export default DashboardRegistration;