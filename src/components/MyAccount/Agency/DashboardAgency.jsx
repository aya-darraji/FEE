import React from 'react';
import './DashboardAgency.css';
import NavBarAgency from './NavBarAgency';

function DashboardAgency() {
  // Function to handle navigation from grid cards
  const handleNavigation = (page) => {
    console.log(`Navigating to: ${page}`);
    // Add your navigation logic here
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <NavBarAgency />
      
      {/* Main Content */}
      <div className="main-content">
        {/* Agency Management Section */}
        <div className="dashboard-section section-agency">
          <div className="section-content">
            <div className="grid-card" onClick={() => handleNavigation('agency-information')}>
              <h3>Agency Information</h3>
            </div>
            <div className="grid-card" onClick={() => handleNavigation('car-information')}>
              <h3>Car Information</h3>
            </div>
            <div className="grid-card" onClick={() => handleNavigation('manger-stocke')}>
              <h3>Manger Stocke</h3>
            </div>
          </div>
        </div>

        {/* Analytics Section */}
        <div className="dashboard-section section-analytics">
          <div className="section-content">
            <div className="grid-card" onClick={() => handleNavigation('secure-profile')}>
              <h3>Secure My Profile</h3>
            </div>
            <div className="grid-card" onClick={() => handleNavigation('view-statistics')}>
              <h3>View Statistics</h3>
            </div>
          </div>
        </div>

       
      </div>
    </div>
  );
}

export default DashboardAgency;