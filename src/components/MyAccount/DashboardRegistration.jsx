import React, { useState } from 'react';
import './DashboardRegistration.css';
import NavBar from './NavBar';

function DashboardRegistration() {
  const [activePage, setActivePage] = useState('dashboard');

  const navigateTo = (page) => {
    setActivePage(page);
    console.log(`Navigating to: ${page}`);
  };

  return (
    <div className="dashboard-container">
      <NavBar activeItem={activePage} navigateTo={navigateTo} />
      
      <div className="main-content">
        <div className="top-bar">
          {/* Top bar content can be added here */}
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
          
          {/* Account Section */}
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
          
          {/* QR Section */}
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