import React from 'react';
import './HeavyVehicles.css';
//import NavBarGuide from './NavBarGuide'; // Assuming NavBarGuide.jsx is in the same directory

function HeavyVehicles() {
  return (
    <div className="heavy-vehicles-container">
      {/*<NavBarGuide />*/}
      <div className="main-content">
        <h2 className="page-title">HEAVY VEHICLES</h2>

        <div className="license-category">
          <h3 className="category-title">CATEGORY C LICENSE</h3>
          <p className="vehicles-concerned">
            <span className="label">VEHICLES CONCERNED:</span>
            TRUCKS INTENDED FOR THE TRANSPORT OF GOODS.
          </p>
          <ul className="specifications">
            <li><span className="sub-label">SPECIFICATIONS:</span></li>
            <li>GROSS VEHICLE WEIGHT RATING (GVWR) OVER 3500 KG</li>
            <li>VEHICLE WITH TRAILER: MAXIMUM GVWR OF THE TRAILER: 750 KG</li>
          </ul>
          <p className="minimum-age">
            <span className="label">MINIMUM AGE:</span>
            <span className="value">20 YEARS OLD</span>
          </p>
          <p className="prerequisites">
            <span className="label">PREREQUISITES:</span>
            APPLICANTS MUST HAVE HELD A CATEGORY B LICENSE FOR AT LEAST 2 YEARS.
          </p>
          <h4 className="validity-period">LICENSE VALIDITY PERIOD:</h4>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Age</th>
                  <th>Duration</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>20 - 60 years</td>
                  <td>3 years</td>
                </tr>
                <tr>
                  <td>60 - 76 years</td>
                  <td>2 years</td>
                </tr>
                <tr>
                  <td>76+ years</td>
                  <td>1 year</td>
                </tr>
              </tbody>
            </table>
          </div>
       <br></br>
       <br></br>

          <h3 className="category-title">CATEGORY C+E LICENSE</h3>
          <p className="vehicles-concerned">
            <span className="label">VEHICLES CONCERNED:</span>
            DOUBLE TRAINS, ARTICULATED VEHICLES, AND COMBINATIONS CONSISTING OF A TOWING
            VEHICLE FALLING UNDER CATEGORY C AND A TRAILER WITH A GVWR EXCEEDING 750 KG.
          </p>
          <ul className="specifications">
            <li><span className="sub-label">SPECIFICATIONS:</span></li>
            <li>GVWR OVER 3500 KG</li>
            <li>TRAILER GVWR OVER 750 KG</li>
          </ul>
          <p className="minimum-age">
            <span className="label">MINIMUM AGE:</span>
            <span className="value">21 YEARS OLD</span>
          </p>
          <p className="prerequisites">
            <span className="label">PREREQUISITES:</span>
            Must have held a category B license for at least 2 years.          </p>
          <h4 className="validity-period">LICENSE VALIDITY PERIOD:</h4>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Age</th>
                  <th>Duration</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>21 - 60 years</td>
                  <td>3 years</td>
                </tr>
                <tr>
                  <td>60 - 76 years</td>
                  <td>2 years</td>
                </tr>
                <tr>
                  <td>76+ years</td>
                  <td>1 year</td>
                </tr>
              </tbody>
            </table>
          </div>
          <br></br  >
          <br></br>

          <h3 className="equivalent-title">EQUIVALENT LICENSE CATEGORY</h3>
          <h5>CATEGORY C LICENSE</h5>
        </div>
      </div>
    </div>
  );
}

export default HeavyVehicles;