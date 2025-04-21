import React from 'react';
import './DisabilityandDriving.css';
//import NavBarGuide from './NavBarGuide'; // Assuming NavBarGuide.jsx is in the same directory

function DisabilityandDriving() {
  return (
    <div className="disability-driving-container">
    {/* <NavBarGuide />*/}
      <div className="main-content">
        <h2 className="page-title">DISABILITY AND DRIVING</h2>

        <div className="disability-info">
          <p>If you have a physical disability or a medical condition that requires special adaptation of the vehicle and/or the use of assistive devices or prosthetics, or if you have another disability and plan to take your driving test, here are the conditions to meet and the steps to take.</p>
       

          <h3 className="section-title">Conditions for Obtaining a License</h3>
          <ol className="conditions-list">
            <li>
              <span className="list-item-title">Undergo a Medical Examination:</span> The first step is to obtain a favorable opinion from your doctor regarding your ability to drive after a clinical examination. Some physical disabilities or medical conditions may require a medical certificate from a specialist. The doctor must provide you with a medical certificate in accordance with the official regulations.
            </li>
            <li>
              <span className="list-item-title">Establish an Expert Report:</span> The expert report outlines the specific adaptations required for the vehicle for driving practice and/or the devices and prosthetics that need to be used. In some special cases, the opinion of the specialized commission at the central level of the ATTT is necessary. A copy of the report will be provided to you.
            </li>
            <li>
              <span className="list-item-title">Provide an Adapted Vehicle for the Driving Test:</span> If you are declared free from any physical disabilities or conditions incompatible with obtaining a driving license, and after receiving the expert report, you will be invited to pay the examination fees and then take the theoretical test. After passing the theoretical exam, you must provide a vehicle specially adapted to your disability. Additionally, the vehicle must be equipped with a double brake and acceleration control system. Your driving training and the driving test will be conducted using this adapted vehicle.
            </li>
          </ol>
      

          <h3 className="section-title">Application File: Prepare Your Temporary Authorization Request</h3>
          <p>After starting the registration process for the theoretical exam and to be able to take the practical test, you must first obtain temporary authorization from the ATTT for driving practice and the practical driving test.</p>

          <h3 className="section-title">Have Your Vehicle Inspected:</h3>
          <p>You must have a vehicle with the required adaptations listed in the expert report, and it must be equipped with a double brake and acceleration control system. Once the required adaptations are made, the vehicle must undergo an inspection by the regional ATTT services. If the inspection result is satisfactory, the regional ATTT services will issue you a temporary authorization valid for 2 months, which is renewable. Once the authorization is issued, you can submit your application file for the driving test.</p>

          <h3 className="section-title">Required Documents</h3>
          <ul className="required-documents-list">
            <li>Request for temporary authorization on free-form paper</li>
            <li>Copy of the expert report</li>
            <li>Inspection report for the vehicle adaptation</li>
          </ul>
      </div>
      </div>
    </div>
  );
}

export default DisabilityandDriving;