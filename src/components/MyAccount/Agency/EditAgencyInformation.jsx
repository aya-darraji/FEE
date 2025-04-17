import React, { useState } from 'react';
import './EditAgencyInformation.css';
import NavBarAgency from './NavBarAgency';

function EditAgencyInformation() {
  const [agencyData, setAgencyData] = useState({
    fullName: '',
    avatar: null,
    phoneNumber: '',
    address: '',
    taxNumber: '',
    companyType: ''
  });

  const [avatarPreview, setAvatarPreview] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAgencyData({
      ...agencyData,
      [name]: value
    });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAgencyData({
        ...agencyData,
        avatar: file
      });
      
      // Create preview URL
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', agencyData);
    // Add your API call or form submission logic here
  };

  const handleCancel = () => {
    // Add navigation or cancel logic here
    console.log('Form canceled');
  };

  return (
    <div className="edit-agency-container">
      <NavBarAgency />
      
      <div className="content-area">
        
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <h2>Agency Full Name</h2>
            <input
              type="text"
              name="fullName"
              value={agencyData.fullName}
              onChange={handleInputChange}
            />
            
            <h2>Agency Avatar</h2>
            <div className="avatar-upload">
              <div className="avatar-preview">
                {avatarPreview ? (
                  <img src={avatarPreview} alt="Avatar Preview" />
                ) : (
                  <div className="placeholder-image">
                    <div className="plus-icon">+</div>
                  </div>
                )}
              </div>
              <label htmlFor="avatar-input" className="upload-button">
                Upload Image
              </label>
              <input
                id="avatar-input"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                style={{ display: 'none' }}
              />
            </div>
            
            <h2>Agency Phone Number</h2>
            <input
              type="text"
              name="phoneNumber"
              value={agencyData.phoneNumber}
              onChange={handleInputChange}
            />
            
            <h2>Agency Address</h2>
            <input
              type="text"
              name="address"
              value={agencyData.address}
              onChange={handleInputChange}
            />
            
            <h2>Agency Tax Number</h2>
            <input
              type="text"
              name="taxNumber"
              value={agencyData.taxNumber}
              onChange={handleInputChange}
            />
            
            <h2>Agency Company Type</h2>
            <input
              type="text"
              name="companyType"
              value={agencyData.companyType}
              onChange={handleInputChange}
            />
            
            <div className="form-buttons">
              <button type="button" className="cancel-button" onClick={handleCancel}>
                Cancel
              </button>
              <button type="submit" className="send-button">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditAgencyInformation;