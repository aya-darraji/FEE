import React, { useState } from 'react';
import './MyFavorites.css';
import NavBar from './NavBar';

function MyFavorites() {
  const [favorites, setFavorites] = useState([
    { id: 2, name: 'BMW i8', rating: 5, image: '../../assets/images/car2.jpg' },
    { id: 3, name: 'Mercedes AMG GT', rating: 3, image: '../../assets/images/car3.jpg' }
  ]);

  const handleRatingChange = (id, newRating) => {
    setFavorites(favorites.map(car => 
      car.id === id ? { ...car, rating: newRating } : car
    ));
  };

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
    <div className="favorites-container">
     <NavBar activeItem="My Favorites" />
      
      <div className="main-content">
        <div className="content-wrapper">
          <h1 className="page-title">My Favorites</h1>
          
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