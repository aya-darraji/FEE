import React from 'react';
import './PrivateCars.css';
//import NavBarGuide from './NavBarGuide'; // Assuming NavBarGuide.jsx is in the same directory

function PrivateCars() {
  return (
    <div className="private-cars-container">
      {/*<NavBarGuide />*/}
      <div className="main-content">
        <h2 className="page-title">PRIVATE CARS</h2>

        <div className="license-category">
          <h3 className="category-title">CATEGORY B LICENSE</h3>
          <p className="vehicles-concerned">
            <span className="label">VEHICLES CONCERNED:</span>
            VEHICLES INTENDED FOR THE TRANSPORT OF PEOPLE OR GOODS
          </p>
          <ul className="characteristics">
            <li><span className="sub-label">CHARACTERISTICS:</span></li>
            <li>NUMBER OF SEATS: 9 (DRIVER + UP TO 8 ADDITIONAL SEATS)</li>
            <li>MAXIMUM AUTHORIZED VEHICLE WEIGHT (GVW): 3500 KG</li>
            <li>VEHICLE WITH TRAILER:</li>
            <ul className="trailer-conditions">
              <li>MAXIMUM TRAILER GVW = 750 KG</li>
              <li>IF THE TRAILER GVW &gt; 750 KG, ON THE CONDITION THAT:</li>
              <ul>
                <li>MAXIMUM PERMISSIBLE COMBINATION WEIGHT (GVW + TRAILER) = 3500 KG</li>
                <li>TRAILER GVW DOES NOT EXCEED THE UNLADEN WEIGHT OF THE TOWING VEHICLE</li>
              </ul>
            </ul>
          </ul>
          <p className="minimum-age">
            <span className="label">MINIMUM AGE:</span>
            <span className="value">18 YEARS OLD</span>
          </p>
          <p className="age-restriction">
            <span className="label">AGE RESTRICTION:</span>
            FROM 18 TO 20 YEARS OLD, HOLDERS OF A B LICENSE CAN ONLY DRIVE PRIVATE CARS WITH A
            <span className="value">MAXIMUM OF 6 SEATS.</span>
            FROM THE AGE OF 20, CAN DRIVE OTHER VEHICLES IN THIS CATEGORY FROM THE AGE OF 20 WITHOUT ANY
            ADDITIONAL PROCEDURES.
          </p>
          <h4 className="validity-duration">VALIDITY DURATION OF THE LICENSE</h4>
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
       
          <h3 className="equivalent-title">EQUIVALENT LICENSE CATEGORIES</h3>
          <ul className="equivalent-list">
            <li>CATEGORY A LICENSE</li>
            <li>CATEGORY H LICENSE</li>
          </ul>
    
        <div className="license-category with-trailer">
          <h3 className="category-title">PRIVATE CARS WITH TRAILER</h3>
          <h4 className="sub-category-title">CATEGORY B+E LICENSE</h4>
          <p className="vehicles-concerned">
            <span className="label">VEHICLES CONCERNED:</span>
            A COMBINATION OF VEHICLES FROM CATEGORY B WITH A TRAILER.
          </p>
          <ul className="characteristics">
            <li><span className="sub-label">CHARACTERISTICS:</span></li>
            <li>NUMBER OF SEATS: 9</li>
            <li>MAXIMUM AUTHORIZED GVW: 3500 KG</li>
            <li>VEHICLE WITH TRAILER:</li>
            <ul className="trailer-conditions">
              <li>TRAILER'S GVW EXCEEDS 750 KG WHEN:</li>
              <ul>
                <li>THE COMBINED GVWR (MASSES EN SERVICE) WEIGHT (CARTES GRISES) EXCEEDS 3500 KG</li>
                <li>THE TRAILER'S GVW EXCEEDS THE UNLADEN WEIGHT OF THE TOWING VEHICLE</li>
              </ul>
            </ul>
          </ul>
          <p className="minimum-age">
            <span className="label">MINIMUM AGE:</span>
            <span className="value">20 YEARS OLD</span>
          </p>
          <p className="prerequisite">
            <span className="label">PREREQUISITE:</span>
            MUST HAVE HELD A CATEGORY B LICENSE FOR AT LEAST 2 YEARS.
          </p>
          <h4 className="validity-duration">VALIDITY DURATION OF THE LICENSE</h4>
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
        </div>

          <h2 className="equivalent-title">EQUIVALENT LICENSE CATEGORIES</h2>
          <h5>B, A1, H</h5>
        </div>
      </div>
    </div>
  );
}

export default PrivateCars;