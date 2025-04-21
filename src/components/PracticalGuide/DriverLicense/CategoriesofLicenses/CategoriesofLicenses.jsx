import React from 'react';
import './CategoriesofLicenses.css';
//import NavBarGuide from './NavBarGuide'; // Assuming NavBarGuide.jsx is in the same directory

function CategoriesofLicenses() {
  return (
    <div className="categories-of-licenses-container">
      {/*<NavBarGuide />*/}
      <div className="main-content">
        <h2 className="categories-title">CATEGORIES OF LICENSES</h2>
        <div className="different-types">
          <h3>Different Types of Driving Licenses</h3>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>CATEGORIES</th>
                  <th>VÉHICULES</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Permit A1</td>
                  <td>Light motorcycle</td>
                </tr>
                <tr>
                  <td>Permit A</td>
                  <td>All motorcycles</td>
                </tr>
                <tr>
                  <td>Permit B</td>
                  <td>Private vehicles</td>
                </tr>
                <tr>
                  <td>Permit B+E</td>
                  <td>Private vehicles with a trailer &gt; 750 kg</td>
                </tr>
                <tr>
                  <td>Permit C</td>
                  <td>Heavy goods vehicles over 3.5 tonnes</td>
                </tr>
                <tr>
                  <td>Permit C+E</td>
                  <td>Heavy goods vehicles over 3.5 tonnes with a trailer &gt; 750 kg</td>
                </tr>
                <tr>
                  <td>Permit D</td>
                  <td>Bus</td>
                </tr>
                <tr>
                  <td>Permit D+E</td>
                  <td>Articulated bus</td>
                </tr>
                <tr>
                  <td>Permit D1</td>
                  <td>Taxis and rental vehicles</td>
                </tr>
                <tr>
                  <td>Permit H</td>
                  <td>Agricultural vehicles and machinery</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="restriction-validity">
          <h3>Restriction on the Validity of the Driving License</h3>
          <p>
         
          If, during the issuance or renewal of the driving license, 
          it is found that the applicant has a medical condition that is compatible with obtaining the license but could potentially worsen, 
          the validity of the license may be limited in duration by the ATTT, 
          following the advice of a specialized commission.
          </p>
        </div>

        <div className="vehicle-types-buttons">
          <button className="two-wheeled">Two-Wheeled Vehicles</button>
          <button className="private-cars">Private Cars</button>
          <button className="heavy-vehicles">Heavy Vehicles</button>
          <button className="buses">Buses</button>
          <button className="taxis">Taxis and Rental Cars</button>
          <button className="agricultural">Agricultural Vehicles</button>
        </div>
      </div>
    </div>
  );
}

export default CategoriesofLicenses;