import React, { useState } from 'react';
import NavBarAgency from './NavBarAgency';
import './EditMangerStocke.css';

function EditMangerStocke() {
  const [formData, setFormData] = useState({
    name: '',
    model: '',
    year: '',
    price: '',
    color: '',
    status: '',
    quantity: '',
    listedDate: '',
    listedTime: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your API call or data processing logic here
  };

  const handleCancel = () => {
    // Reset form or navigate back
    console.log('Form canceled');
  };

  return (
    <div className="dashboard-container">
      <NavBarAgency />
      <div className="content-area">
        <div className="dashboard-header">
        </div>
        <div className="form-container">
          <div className="stock-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="model">Model</label>
              <div className="select-wrapper">
                <select
                  id="model"
                  name="model"
                  value={formData.model}
                  onChange={handleChange}
                >
                  <option value="">Select Model</option>
                  <option value="sedan">Sedan</option>
                  <option value="suv">SUV</option>
                  <option value="truck">Truck</option>
                  <option value="coupe">Coupe</option>
                </select>
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="year">Year</label>
              <input
                type="text"
                id="year"
                name="year"
                value={formData.year}
                onChange={handleChange}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="price">Price</label>
              <input
                type="text"
                id="price"
                name="price"
                value={formData.price}
                onChange={handleChange}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="color">Color</label>
              <div className="select-wrapper">
                <select
                  id="color"
                  name="color"
                  value={formData.color}
                  onChange={handleChange}
                >
                  <option value="">Select Color</option>
                  <option value="black">Black</option>
                  <option value="white">White</option>
                  <option value="red">Red</option>
                  <option value="blue">Blue</option>
                  <option value="silver">Silver</option>
                </select>
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="status">Status</label>
              <div className="select-wrapper">
                <select
                  id="status"
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                >
                  <option value="">Select Status</option>
                  <option value="available">Available</option>
                  <option value="sold">Sold</option>
                  <option value="reserved">Reserved</option>
                  <option value="maintenance">Maintenance</option>
                </select>
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="quantity">Quantity</label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
              />
            </div>
            
            <div className="form-group date-time-group">
              <label htmlFor="listedDate">Listed Date</label>
              <div className="date-time-inputs">
                <input
                  type="text"
                  id="listedDate"
                  name="listedDate"
                  placeholder="dd/mm/yyyy"
                  value={formData.listedDate}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  id="listedTime"
                  name="listedTime"
                  placeholder="00:00"
                  value={formData.listedTime}
                  onChange={handleChange}
                />
              </div>
            </div>
            
            <div className="form-actions">
              <button type="button" className="cancel-btn" onClick={handleCancel}>
                Cancel
              </button>
              <button type="submit" className="submit-btn" onClick={handleSubmit}>
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditMangerStocke;