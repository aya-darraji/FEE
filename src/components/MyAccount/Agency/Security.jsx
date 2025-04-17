import React, { useState } from 'react';
import './SecurityAgency.css';
import NavBarAgency from './NavBarAgency';

function SecurityAgency() {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  return (
    <div className="security-container">
      {/* Use the NavBarAgency component instead of the inline sidebar */}
      <NavBarAgency />
      
      {/* Main Content */}
      <div className="main-content">
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