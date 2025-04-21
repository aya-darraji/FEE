import React from 'react';
import './Buses.css';
//import NavBarGuide from './NavBarGuide'; // Assuming NavBarGuide.jsx is in the same directory

function Buses() {
  return (
    <div className="buses-container">
      {/*<NavBarGuide />*/}
      <div className="main-content">
        <h2 className="page-title">BUSES</h2>

        <div className="license-category">
          <h3 className="category-title">CATEGORY D LICENSE</h3>
          <p className="vehicles-concerned">
            <span className="label">VEHICLES CONCERNED:</span>
            BUSES AND COACHES INTENDED FOR THE COLLECTIVE TRANSPORT OF PEOPLE.
          </p>
          <ul className="characteristics">
            <li><span className="sub-label">CHARACTERISTICS:</span></li>
            <li>NUMBER OF SEATS (INCLUDING THE DRIVER'S SEAT): MORE THAN 9</li>
            <li>GVWR (GROSS VEHICLE WEIGHT RATING) OVER 3500 KG</li>
            <li>MAXIMUM GVWR OF THE TRAILER: 750 KG</li>
          </ul>
          <p className="minimum-age">
            <span className="label">MINIMUM AGE:</span>
            <span className="value">21 YEARS OLD.</span>
          </p>
          <p className="prerequisites">
            <span className="label">PREREQUISITES:</span>
            MUST HAVE HELD A CATEGORY B LICENSE FOR AT LEAST 2 YEARS.
          </p>
          <h4 className="validity-duration">LICENSE VALIDITY DURATION:</h4>
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
                  <td>60 - 75 years</td>
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
          <h3 className="equivalent-title">EQUIVALENT LICENSE CATEGORY</h3>
          <ul className="equivalent-list">
            <li>CATEGORY D1 LICENSE</li>
          </ul>
 

          <h3 className="category-title">CATEGORY D+E LICENSE</h3>
          <p className="vehicles-concerned">
            <span className="label">VEHICLES CONCERNED:</span>
            BUSES AND COACHES INTENDED FOR THE COLLECTIVE TRANSPORT OF PEOPLE.
            VEHICLE COMBINATIONS CONSISTING OF A TOWING VEHICLE FALLING UNDER
            CATEGORY D AND A TRAILER WITH A GVWR (GROSS VEHICLE WEIGHT RATING)
            EXCEEDING 750 KG.
          </p>
          <ul className="characteristics">
            <li><span className="sub-label">CHARACTERISTICS:</span></li>
            <li>NUMBER OF SEATS (INCLUDING THE DRIVER'S SEAT): MORE THAN 9</li>
            <li>GVWR OVER 3500 KG</li>
            <li>TRAILER GVWR EXCEEDS 750 KG</li>
          </ul>
          <p className="minimum-age">
            <span className="label">MINIMUM AGE:</span>
            <span className="value">21 YEARS OLD.</span>
          </p>
          <p className="prerequisites">
            <span className="label">PREREQUISITES:</span>
            MUST HOLD A CATEGORY D LICENSE.
          </p>
          <h4 className="validity-duration">LICENSE VALIDITY DURATION:</h4>
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
                  <td>60 - 75 years</td>
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

          <h3 className="equivalent-title">EQUIVALENT LICENSE CATEGORY</h3>
          <ul className="equivalent-list">
            <li>CATEGORY D LICENSE</li>
            <li>CATEGORY D1 LICENSE</li>
          </ul>
        </div>
      </div>
      </div>
  );
}

export default Buses;