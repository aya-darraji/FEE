import React from 'react';
import './OnlineRegistration.css';
//import NavBarGuide from './NavBarGuide'; // Assuming NavBarGuide.jsx is in the same directory

function OnlineRegistration() {
  return (
    <div className="online-registration-container">
    {/*<NavBarGuide />*/ }  
      <div className="main-content">
        <h2 className="page-title">ONLINE REGISTRATION</h2>
        <br></br> 
        <div className="first-registration">
          <h3>First Registration for the Driver’s License Exam or License Category Extension</h3>
          <p>Without the need to visit the relevant regional office, with the online service, you can remotely pay for your registration for one of the exams for obtaining the driver’s license (theory or driving test) and choose the exam center closest to your home.</p>
          <p>This service is available every working day, from 8:00 AM to midnight.</p>
     
<br></br>
          <h3>Fees</h3>
          <p>Exam fee: 35 TND (registration for the theory test and issuance of the license). Driving test registration: 17 TND. Re-registration for a test: 17 TND.</p>
          <br></br>

          <h3>Before you begin, you must have chosen:</h3>
          <ul>
            <li>The category of the license you are going to take. <a href="/categories-of-licenses">Review the license categories</a>?</li>
            <li>The test you are going to take: theory or driving.</li>
          </ul>
       
          <br></br>
          <h3>Have the following information at hand</h3>
          <ul>
            <li>Your national identity card number</li>
            <li>If you are a foreigner, your residence permit or passport number</li>
            <li>An e-dinar card (the only accepted payment method)</li>
          </ul>
          </div>
      </div>
    </div>
  );
}

export default OnlineRegistration;