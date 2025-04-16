import React, { useState } from 'react';
import './Security.css';
import NavBar from './NavBar';

function Security() {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  return (
    <div className="security-container">
      {/* Utilisation du composant NavBar */}
      <NavBar activeItem="Security" />
      
      {/* Main Content */}
      <div className="main-content">
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