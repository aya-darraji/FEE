import React, { useState } from 'react';
import './NavBarAgency.css';

const NavBarAgency = () => {
  const [activePage, setActivePage] = useState('security');

  const navigateTo = (page) => {
    setActivePage(page);
    // Add your navigation logic here if needed
    console.log(`Navigating to: ${page}`);
  };

  return (
    <div className="sidebar">
      <div className="logo-container">
        <div className="logo-image">
          <img src="../../assets/images/login-bg.jpg" alt="Logo" />
        </div>
      </div>
      
      {/* Menu with active navigation */}
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
  );
};

export default NavBarAgency;