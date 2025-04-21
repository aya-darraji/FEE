// NavBarGuide.jsx
import React, { useState } from 'react';
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
        <div 
          className={`navbar-item ${activeItem === 'practical-guide' ? 'active' : ''}`}
          onClick={() => handleItemClick('practical-guide')}
        >
          Customs Duties
        </div>
        
        <div 
          className={`navbar-item ${activeItem === 'fcr' ? 'active' : ''}`}
          onClick={() => handleItemClick('fcr')}
        >
          FCR
        </div>
        
        <div 
          className={`navbar-item ${activeItem === 'drivers-license' ? 'active' : ''}`}
          onClick={toggleLicenseItems}
        >
          Driver's License
        </div>
        
        {expandedLicense && (
          <div className="navbar-subitems">
            <div 
              className={`navbar-subitem ${activeItem === 'online-registration' ? 'active' : ''}`}
              onClick={() => handleItemClick('online-registration')}
            >
              Online Registration
            </div>
            
            <div 
              className={`navbar-subitem ${activeItem === 'preparing-application' ? 'active' : ''}`}
              onClick={() => handleItemClick('preparing-application')}
            >
              Preparing Your Application File
            </div>
            
            <div 
              className={`navbar-subitem ${activeItem === 'theoretical-test' ? 'active' : ''}`}
              onClick={() => handleItemClick('theoretical-test')}
            >
              Theoretical Test: Driving Theory Exam
            </div>
            
            <div 
              className={`navbar-subitem ${activeItem === 'practical-test' ? 'active' : ''}`}
              onClick={() => handleItemClick('practical-test')}
            >
              Practical Test: Driving Exam
            </div>
            
            <div 
              className={`navbar-subitem ${activeItem === 'disability-driving' ? 'active' : ''}`}
              onClick={() => handleItemClick('disability-driving')}
            >
              Disability and Driving
            </div>
            
            <div 
              className={`navbar-subitem ${activeItem === 'road-safety' ? 'active' : ''}`}
              onClick={() => handleItemClick('road-safety')}
            >
              Road Safety
            </div>
            
            <div 
              className={`navbar-subitem ${activeItem === 'tips' ? 'active' : ''}`}
              onClick={() => handleItemClick('tips')}
            >
              Tips
            </div>
            
            <div 
              className={`navbar-subitem ${activeItem === 'formalities' ? 'active' : ''}`}
              onClick={() => handleItemClick('formalities')}
            >
              Formalities
            </div>
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
            <div 
              className={`navbar-category-item ${activeItem === 'two-wheeled' ? 'active' : ''}`}
              onClick={() => handleItemClick('two-wheeled')}
            >
              Two-Wheeled Vehicles
            </div>
            
            <div 
              className={`navbar-category-item ${activeItem === 'private-cars' ? 'active' : ''}`}
              onClick={() => handleItemClick('private-cars')}
            >
              Private Cars
            </div>
            
            <div 
              className={`navbar-category-item ${activeItem === 'heavy-vehicles' ? 'active' : ''}`}
              onClick={() => handleItemClick('heavy-vehicles')}
            >
              Heavy Vehicles
            </div>
            
            <div 
              className={`navbar-category-item ${activeItem === 'buses' ? 'active' : ''}`}
              onClick={() => handleItemClick('buses')}
            >
              Buses
            </div>
            
            <div 
              className={`navbar-category-item ${activeItem === 'taxis' ? 'active' : ''}`}
              onClick={() => handleItemClick('taxis')}
            >
              Taxis and Rental Cars
            </div>
            
            <div 
              className={`navbar-category-item ${activeItem === 'agricultural' ? 'active' : ''}`}
              onClick={() => handleItemClick('agricultural')}
            >
              Agricultural Vehicles
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default NavBarGuide;