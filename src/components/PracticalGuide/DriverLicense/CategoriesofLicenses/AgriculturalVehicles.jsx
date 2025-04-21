import React from 'react';
import './AgriculturalVehicles.css';
//import NavBarGuide from './NavBarGuide'; // Assuming NavBarGuide.jsx is in the same directory

function AgriculturalVehicles() {
  return (
    <div className="agricultural-vehicles-container">
      {/*<NavBarGuide />*/}
      <div className="main-content">
        <h2 className="page-title">AGRICULTURAL VEHICLES</h2>

        <div className="license-category">
          <h3 className="category-title">CATEGORY F LICENSE</h3>
          <p className="vehicles-concerned">
            <span className="label">VEHICLES CONCERNED:</span>
            AGRICULTURAL VEHICLES AND MACHINERY.
          </p>
          <p className="minimum-age">
            <span className="label">MINIMUM AGE:</span>
            <span className="value">18 YEARS OLD.</span>
          </p>
          <p className="prerequisites">
            <span className="label">PREREQUISITES:</span>
            MUST HOLD A CATEGORY B LICENSE FOR AT LEAST 2 YEARS.
          </p>
          <h4 className="validity-duration">VALIDITY DURATION OF THE LICENSE:</h4>
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
                  <td>16 - 60 years</td>
                  <td>10 years</td>
                </tr>
                <tr>
                  <td>60 - 75 years</td>
                  <td>5 years</td>
                </tr>
                <tr>
                  <td>76+ years</td>
                  <td>3 years</td>
                </tr>
              </tbody>
            </table>
          </div>
          <br></br>
          <br></br>
          <h3 className="equivalent-title">EQUIVALENT LICENSE CATEGORY:</h3>
          <h5>NONE</h5>
        </div>
      </div>
    </div>
  );
}

export default AgriculturalVehicles;