import React, { useState } from 'react';
import '../../assets/images/login-bg.jpg';
import './MyFavorites.css';

function MyFavorites() {
  // Sample favorite cars data - Tesla Model S removed
  const [favorites, setFavorites] = useState([
    { id: 2, name: 'BMW i8', rating: 5, image: '../../assets/images/car2.jpg' },
    { id: 3, name: 'Mercedes AMG GT', rating: 3, image: '../../assets/images/car3.jpg' }
  ]);

  const handleRatingChange = (id, newRating) => {
    setFavorites(favorites.map(car => 
      car.id === id ? { ...car, rating: newRating } : car
    ));
  };

  // Star rating component
  const StarRating = ({ rating, maxRating = 5, onRatingChange }) => {
    return (
      <div className="star-rating">
        {[...Array(maxRating)].map((_, index) => (
          <span 
            key={index} 
            className={`star ${index < rating ? 'active' : ''}`}
            onClick={() => onRatingChange(index + 1)}
          >
            <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </span>
        ))}
      </div>
    );
  };

  return (
    <div className="security-container">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="logo-container">
          <div className="logo-image">
            <img src="../../assets/images/login-bg.jpg" alt="Logo" />
          </div>
        </div>
        
        <div className="menu-items">
          <button className="menu-item">Dashboard</button>
          <button className="menu-item">My Favorites</button>
          <button className="menu-item">My Alerts</button>
          <button className="menu-item">My Profile</button>
          <button className="menu-item active">Security</button>
          <button className="menu-item">Code QR</button>
        </div>
        
        <div className="bottom-menu">
          <div className="bottom-menu-item">
            <svg className="bottom-icon" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V3zm2 1v10h10V4H5z" clipRule="evenodd" />
              <path fillRule="evenodd" d="M10 9a1 1 0 01.7.3l3 3a1 1 0 01-1.4 1.4L11 12.4V15a1 1 0 01-2 0v-2.6l-1.3 1.3a1 1 0 01-1.4-1.4l3-3A1 1 0 0110 9z" clipRule="evenodd" />
            </svg>
            <span>Log out</span>
          </div>
         
        </div>
      </div>
      
      {/* Main Content */}
      <div className="main-content">
        <div className="top-navbar">
          <div className="navbar-icons">
           
            <button className="navbar-icon">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>
            <div className="user-profile">
              <div className="avatar">U</div>
              <span className="username">Username</span>
            </div>
          </div>
        </div>

        {/* Content wrapper for centering */}
        <div className="content-wrapper">
          <h1 className="page-title">My Favorites</h1>
          
          {/* Centered Favorites Grid */}
          <div className="favorites-center-container">
            <div className="favorites-grid">
              {favorites.map(car => (
                <div key={car.id} className="favorite-card">
                  <div className="car-details">
                    <h2 className="car-name">{car.name}</h2>
                    <button className="view-details-btn">View Details</button>
                  </div>
                  
                  <div className="car-image">
                    <img src={car.image} alt={car.name} />
                  </div>
                  
                  <div className="favorite-info">
                    <StarRating 
                      rating={car.rating} 
                      onRatingChange={(newRating) => handleRatingChange(car.id, newRating)}
                    />
                    <span className="favorite-label">Rate this car</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyFavorites;