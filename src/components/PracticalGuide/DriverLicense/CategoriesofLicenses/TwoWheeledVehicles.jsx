import React from 'react';
import './TwoWheeledVehicles.css';
//import NavBarGuide from './NavBarGuide'; // Assuming NavBarGuide.jsx is in the same directory

function TwoWheeledVehicles() {
  return (
    <div className="two-wheeled-vehicles-container">
      {/*<NavBarGuide />*/}
      <div className="main-content">
        <h2 className="page-title">TWO-WHEELED VEHICLES</h2>

        <div className="license-category">
          <h3 className="category-title">CATEGORY A1 LICENSE</h3>
          <p className="vehicles-concerned">
            <span className="label">VEHICLES CONCERNED:</span>
            MOPEDS, MOTORCYCLES, SMALL CARS, TRICYCLES, OR QUADRICYCLES WITH AN ENGINE.
          </p>
          <p className="minimum-age">
            <span className="label">MINIMUM AGE:</span>
            <span className="value">16 YEARS.</span>
          </p>
          <h4 className="validity-duration">LICENSE VALIDITY DURATION</h4>
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
                  <td>18 - 60 years</td>
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

          <h3 className="category-title">CATEGORY A LICENSE</h3>
          <p className="vehicles-concerned">
            <span className="label">VEHICLES CONCERNED:</span>
            MOTORCYCLES (WITH AN ENGINE DISPLACEMENT GREATER THAN 125 CM³).
          </p>
          <p className="minimum-age">
            <span className="label">MINIMUM AGE:</span>
            <span className="value">18 YEARS.</span>
          </p>
          <h4 className="validity-duration">LICENSE VALIDITY DURATION</h4>
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
                  <td>18 - 60 years</td>
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
          <b></b>
          <h2 className="equivalent-title">EQUIVALENT LICENSE CATEGORY</h2>
          <p className="equivalent-value">A1</p>
        </div>
      </div>
    </div>
  );
}

export default TwoWheeledVehicles;