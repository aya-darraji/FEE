import React from 'react';
import './Formalities.css';
//import NavBarGuide from './NavBarGuide'; // Assuming NavBarGuide.jsx is in the same directory

function Formalities() {
  return (
    <div className="formalities-container">
      {/*<NavBarGuide />*/}
      <div className="main-content">
        <h2 className="page-title">FORMALITIES</h2>

        <div className="formalities-section">
          <h3 className="section-title">FIRST LICENSE OR CATEGORY EXTENSION</h3>
          <ul className="formalities-list">
            <li><span className="list-item-title">Formalities:</span></li>
            <li>Issuance of the provisional driving license by the examiner after passing the practical test.</li>
            <li>Presentation of an identity document.</li>
          </ul>
          <p><span className="fee-title">Fees:</span></p>
          <ul className="fees-list">
            <li>18 DT</li>
            <li>The fees for issuing the license are included when registering for the driving test.</li>
          </ul>
          <br></br>
         
        

        
          <h3 className="section-title">RENEWAL OF A DRIVING LICENSE</h3>
          <p><span className="condition-title">Conditions:</span></p>
          <ul className="conditions-list">
            <li>Expiration of the validity period.</li>
            <li>Conversion of a foreign driving license of Tunisian origin.</li>
          </ul>
          <p><span className="formalities-title">Formalities:</span></p>
          <ul className="formalities-list">
            <li>Fill out the "Application for a Driving License" form provided by the ATTT.</li>
            <li>Original driving license to be renewed.</li>
            <li>A medical certificate issued no more than 3 months ago.</li>
            <li>2 recent passport-sized photos.</li>
            <li>A copy of the national ID card or equivalent document for foreigners.</li>
            <li>Proof of payment of the fees.</li>
          </ul>
          <p><span className="fee-title">Fees:</span> 18 DT</p>
      

          <br></br>
        
        
          <h3 className="section-title">DUPLICATE - LOSS OR THEFT OF THE DRIVING LICENSE</h3>
          <p><span className="formalities-title">Formalities:</span></p>
          <ul className="formalities-list">
            <li>Fill out the "Application for a Driving License" form provided by the ATTT.</li>
            <li>A certificate of loss of the license.</li>
            <li>A medical certificate conforming to the official model and issued no more than 3 months ago.</li>
            <li>A copy of the national ID card or an equivalent document for foreigners.</li>
            <li>2 recent passport-sized photos.</li>
            <li>Proof of payment of the fees.</li>
            <li><span className="important-note">If you are a resident in Tunisia:</span> You must attach a certificate of loss, issued by the police or the National Guard responsible for road traffic, stating that your license is not under suspension, has not expired, or is invalid.</li>
            <li><span className="important-note">If you are a non-resident in Tunisia:</span> You must attach a certificate of loss issued by the relevant authorities that issue driving licenses in your country of residence. This certificate must state that your license:
              <ul className="sub-list">
                <li>Has not expired.</li>
                <li>Is not under suspension.</li>
                <li>Has not been converted into a foreign license.</li>
              </ul>
            </li>
          </ul>
          <p><span className="fee-title">Fees:</span> 35 DT</p>
  
          <br></br>
        
       
          <h3 className="section-title">DUPLICATE - PARTIAL OR TOTAL DAMAGE TO THE DRIVING LICENSE</h3>
          <p><span className="formalities-title">Formalities:</span></p>
          <ul className="formalities-list">
            <li>Fill out the "Application for a Duplicate Driving License" form provided by the ATTT.</li>
            <li>The damaged license.</li>
            <li>A medical certificate conforming to the official model and issued no more than 3 months ago.</li>
            <li>A copy of the national ID card or an equivalent document for foreigners.</li>
            <li>2 recent passport-sized photos.</li>
            <li>Proof of payment of the fees.</li>
          </ul>
          <p><span className="fee-title">Fees:</span> 35 DT</p>
     
          <br></br>
          <br></br>
        
          <h3 className="section-title">CONVERSION OF A FOREIGN DRIVING LICENSE INTO A TUNISIAN LICENSE</h3>
          <p><span className="condition-title">Conditions:</span></p>
          <ul className="conditions-list">
            <li>A valid foreign driving license, not subject to restriction, suspension, revocation, or cancellation.</li>
            <li>Meet the required age for obtaining a Tunisian driving license.</li>
            <li>Be free from any physical disability or disease incompatible with obtaining a driving license.</li>
            <li>Reside in Tunisia (for foreigners).</li>
            <li>Verification of the authenticity of the license with the relevant foreign authorities by the specialized services of the ATTT.</li>
          </ul>
          <p><span className="deadline-title">Deadline:</span></p>
          <p>Submit the application within one year of the last entry into Tunisia.</p>
          <p><span className="formalities-title">Formalities:</span></p>
          <p><span className="step-title">Step 1. Application Submission to Verify License Authenticity:</span></p>
          <ul className="formalities-list">
            <li>Fill out the "Application for Conversion of a Foreign Driving License" form provided by the ATTT.</li>
            <li>2 photocopies of the foreign driving license.</li>
            <li>An official translation of the foreign driving license if it is not in Arabic or French.</li>
            <li>A photocopy of the national ID card for Tunisians. For foreigners: a photocopy of the residence permit or any equivalent document proving residence in Tunisia.</li>
            <li>A document confirming the last entry into Tunisia.</li>
          </ul>
          <p><span className="step-title">Step 2. Issuance of the Tunisian Driving License:</span> (After verification of the authenticity of the foreign driving license)</p>
          <ul className="formalities-list">
            <li>The original foreign driving license along with an official Arabic translation, if it is not in Arabic or French.</li>
            <li>A medical certificate conforming to the official model and issued no more than 3 months ago.</li>
            <li>2 recent passport-sized photos.</li>
            <li>Proof of payment of the fees or justification for exemption.</li>
          </ul>
          <p><span className="fee-title">Fees:</span> 18 DT</p>
          <p><span className="notes-title">Notes:</span> If no response is obtained regarding the verification of the authenticity of the driving license within one year from the date of the application, the license holder may obtain a Tunisian driving license after submitting a sworn statement declaring that the license was issued by the competent foreign authorities and after successfully completing a practical test.</p>
       
      </div>
    </div>
    </div>
  );
}

export default Formalities;