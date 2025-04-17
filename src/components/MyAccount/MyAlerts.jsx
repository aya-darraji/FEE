import React, { useState } from 'react';
import './MyAlerts.css';
import NavBar from './NavBar';

function MyAlerts() {
  const [selectedMark, setSelectedMark] = useState('Mark');
  const [selectedModel, setSelectedModel] = useState('Model');

  return (
    <div className="alerts-container">
     <NavBar activeItem="My Alerts" /> 
      
      <div className="main-content">
        <div className="content-wrapper">
          <div className="dropdown-form">
            <div className="dropdown-fields">
              <div className="dropdown-field">
                <div className="custom-dropdown">
                  <button className="dropdown-toggle">
                    <span>{selectedMark}</span>
                    <svg className="dropdown-arrow" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="dropdown-field">
                <div className="custom-dropdown">
                  <button className="dropdown-toggle model-toggle">
                    <span>{selectedModel}</span>
                    <svg className="dropdown-arrow" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            
            <div className="form-actions">
              <button className="cancel-button">Cancel</button>
              <button className="send-button">Send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyAlerts;