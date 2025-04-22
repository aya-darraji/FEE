import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBarGuide.css';

function NavBarGuide() {
  const [activeItem, setActiveItem] = useState('practical-guide');
  const [expandedLicense, setExpandedLicense] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState(false);

  const handleItemClick = (itemId) => {
    setActiveItem(itemId);
  };

  const toggleLicenseItems = () => {
    setExpandedLicense(!expandedLicense);
  };

  const toggleCategories = () => {
    setExpandedCategories(!expandedCategories);
  };

  return (
    <div className="navbar-guide">
      <div className="navbar-header">
        <h3>Practical Guide</h3>
      </div>
      
      <div className="navbar-menu">
        <Link 
          to="/PracticalGuide/CustomsDuties"
          className={`navbar-item ${activeItem === 'practical-guide' ? 'active' : ''}`}
          onClick={() => handleItemClick('practical-guide')}
        >
          Customs Duties
        </Link>
        
        <Link 
          to="/PracticalGuide/Fcr"
          className={`navbar-item ${activeItem === 'fcr' ? 'active' : ''}`}
          onClick={() => handleItemClick('fcr')}
        >
          FCR
        </Link>
        
        <div 
          className={`navbar-item ${activeItem === 'drivers-license' ? 'active' : ''}`}
          onClick={toggleLicenseItems}
        >
          Driver's License
        </div>
        
        {expandedLicense && (
          <div className="navbar-subitems">
            <Link 
              to="/PracticalGuide/DriverLicense/OnlineRegistration"
              className={`navbar-subitem ${activeItem === 'online-registration' ? 'active' : ''}`}
              onClick={() => handleItemClick('online-registration')}
            >
              Online Registration
            </Link>
            
            <Link 
              to="/PracticalGuide/DriverLicense/PreparingYourApplicationFile"
              className={`navbar-subitem ${activeItem === 'preparing-application' ? 'active' : ''}`}
              onClick={() => handleItemClick('preparing-application')}
            >
              Preparing Your Application File
            </Link>
            
            <Link 
              to="/PracticalGuide/DriverLicense/TheoreticalTest"
              className={`navbar-subitem ${activeItem === 'theoretical-test' ? 'active' : ''}`}
              onClick={() => handleItemClick('theoretical-test')}
            >
              Theoretical Test: Driving Theory Exam
            </Link>
            
            <Link 
              to="/PracticalGuide/DriverLicense/PracticalTest"
              className={`navbar-subitem ${activeItem === 'practical-test' ? 'active' : ''}`}
              onClick={() => handleItemClick('practical-test')}
            >
              Practical Test: Driving Exam
            </Link>
            
            <Link 
              to="/PracticalGuide/DriverLicense/DisabilityandDriving"
              className={`navbar-subitem ${activeItem === 'disability-driving' ? 'active' : ''}`}
              onClick={() => handleItemClick('disability-driving')}
            >
              Disability and Driving
            </Link>
            
            <Link 
              to="/PracticalGuide/DriverLicense/RoadSafety"
              className={`navbar-subitem ${activeItem === 'road-safety' ? 'active' : ''}`}
              onClick={() => handleItemClick('road-safety')}
            >
              Road Safety
            </Link>
            
            <Link 
              to="/PracticalGuide/DriverLicense/Tips"
              className={`navbar-subitem ${activeItem === 'tips' ? 'active' : ''}`}
              onClick={() => handleItemClick('tips')}
            >
              Tips
            </Link>
            
            <Link 
              to="/PracticalGuide/DriverLicense/Formalities"
              className={`navbar-subitem ${activeItem === 'formalities' ? 'active' : ''}`}
              onClick={() => handleItemClick('formalities')}
            >
              Formalities
            </Link>
          </div>
        )}
        
        <div 
          className="navbar-category-header"
          onClick={toggleCategories}
        >
          Categories of Licenses
        </div>
        
        {expandedCategories && (
          <div className="license-categories">
            <Link 
              to="/PracticalGuide/DriverLicense/CategoriesofLicenses/TwoWheeledVehicles"
              className={`navbar-category-item ${activeItem === 'two-wheeled' ? 'active' : ''}`}
              onClick={() => handleItemClick('two-wheeled')}
            >
              Two-Wheeled Vehicles
            </Link>
            
            <Link 
              to="/PracticalGuide/DriverLicense/CategoriesofLicenses/PrivateCars"
              className={`navbar-category-item ${activeItem === 'private-cars' ? 'active' : ''}`}
              onClick={() => handleItemClick('private-cars')}
            >
              Private Cars
            </Link>
            
            <Link 
              to="/PracticalGuide/DriverLicense/CategoriesofLicenses/HeavyVehicles"
              className={`navbar-category-item ${activeItem === 'heavy-vehicles' ? 'active' : ''}`}
              onClick={() => handleItemClick('heavy-vehicles')}
            >
              Heavy Vehicles
            </Link>
            
            <Link 
              to="/PracticalGuide/DriverLicense/CategoriesofLicenses/Buses"
              className={`navbar-category-item ${activeItem === 'buses' ? 'active' : ''}`}
              onClick={() => handleItemClick('buses')}
            >
              Buses
            </Link>
            
            <Link 
              to="/PracticalGuide/DriverLicense/CategoriesofLicenses/TaxisandRentalCars"
              className={`navbar-category-item ${activeItem === 'taxis' ? 'active' : ''}`}
              onClick={() => handleItemClick('taxis')}
            >
              Taxis and Rental Cars
            </Link>
            
            <Link 
              to="/PracticalGuide/DriverLicense/CategoriesofLicenses/AgriculturalVehicles"
              className={`navbar-category-item ${activeItem === 'agricultural' ? 'active' : ''}`}
              onClick={() => handleItemClick('agricultural')}
            >
              Agricultural Vehicles
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default NavBarGuide;