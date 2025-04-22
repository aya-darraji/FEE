import React from 'react';
import { Link } from "react-router-dom";
import Navbar from '../modules/Navbar';
import Footer from '../modules/Footer';
import NavBarGuide from './NavBarGuide';
import './PracticalGuide.css';


function PracticalGuide() {
  return (
    <div className="practical-guide-page">
      <Navbar />
      
      <div className="practical-guide-container">
        <NavBarGuide />
        
        <div className="main-content">
          <header className="content-header">
            <h1>Practical Guide</h1>
          </header>
          
          <div className="card-grid">
            <div className="card">
              <Link to={'/PracticalGuide/PracticalGuide'}>
                <div className="card-content">
                  <h3>Practical Guide</h3>
                </div>
              </Link>
            </div>
            
            <div className="card">
              <Link to={'/PracticalGuide/DriverLicense/DriverLicense'}>
                <div className="card-content">
                  <h3>Driver's License</h3>
                </div>
              </Link>
            </div>
            
            <div className="card">
              <Link to={'/PracticalGuide/Fcr'}>
                <div className="card-content">
                  <h3>FCR</h3>
                </div>
              </Link>
            </div>
            
            <div className="card">
              <Link to={'/PracticalGuide/CustomsDuties'}>
                <div className="card-content">
                  <h3>Customs Duties</h3>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

export default PracticalGuide;