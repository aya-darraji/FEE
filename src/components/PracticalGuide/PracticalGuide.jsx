// PracticalGuide.jsx
import React from 'react';
import NavBarGuide from './NavBarGuide';
import './PracticalGuide.css';

function PracticalGuide() {
  return (
    <div className="practical-guide-container">
      <NavBarGuide />
      
      <div className="main-content">
        <header className="content-header">
          <h1>Practical Guide</h1>
        </header>
        
        <div className="card-grid">
          <div className="card">
            <div className="card-content">
              <h3>Practical Guide</h3>
            </div>
          </div>
          
          <div className="card">
            <div className="card-content">
              <h3>Driver's License</h3>
            </div>
          </div>
          
          <div className="card">
            <div className="card-content">
              <h3>FCR</h3>
            </div>
          </div>
          
          <div className="card">
            <div className="card-content">
              <h3>Customs Duties</h3>
            </div>
          </div>
          
      
          
        </div>
      </div>
    </div>
  );
}

export default PracticalGuide;