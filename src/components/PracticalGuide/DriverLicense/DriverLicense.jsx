// DriverLicense.jsx
import React from 'react';
import './DriverLicense.css';
//import NavBarGuide from '../components/PracticalGuide/NavBarGuide';


const DriverLicense = () => {
  return (
    <div className="driver-license-container">
      {/*<NavBarGuide />*/}
      
      <div className="content">
        <h1>DRIVER'S LICENSE</h1>

        <div className="cards-grid">
          <div className="card">
            <h3>Online Registration</h3>
            <p>
              Without having to go to the relevant regional office, the online service allows you to remotely pay for your registration for one of the exam sessions...
            </p>
            <button className="read-more-btn">Read more</button>
          </div>

          <div className="card">
            <h3>Preparing Your Application File</h3>
            <p>
              The applicant must be free from any physical disability and any illness that is incompatible with obtaining the requested driver's license. Applicants who present...
            </p>
            <button className="read-more-btn">Read more</button>
          </div>

          <div className="card">
            <h3>Theoretical Test: Driving Theory Exam</h3>
            <p>
              The theoretical test (also known as the code) is an important exam that assesses the future driver's knowledge of the highway code and road safety...
            </p>
            <button className="read-more-btn">Read more</button>
          </div>

          <div className="card">
            <h3>Practical Test: Driving Exam</h3>
            <p>
              The driving test, or practical test, is the final stage of the driver's license examination. Only candidates who have passed the theoretical test are allowed to take the practical test...
            </p>
            <button className="read-more-btn">Read more</button>
          </div>

          <div className="card">
            <h3>Disability and Driving</h3>
            <p>
              If you have a physical disability or a medical condition that requires special modifications to the vehicle and/or the use of assistive devices or prosthetics, or if you are...
            </p>
            <button className="read-more-btn">Read more</button>
          </div>

          <div className="card">
            <h3>Road Safety</h3>
            <p>
              Road insecurity is the leading cause of mortality among young drivers. Every beginner driver is subject to a speed limit restriction.
            </p>
            <button className="read-more-btn">Read more</button>
          </div>

          <div className="card">
            <h3>Tips</h3>
            <p>
              Do you want to obtain a driver's license? Follow these few tips and remember that a good driver is one who has learned to drive well. The main goal should not...
            </p>
            <button className="read-more-btn">Read more</button>
          </div>

          <div className="card">
            <h3>Categories of Licenses</h3>
            <p>
              Motorcycles, passenger cars, heavy trucks, buses, taxis and rental cars, agricultural vehicles...
            </p>
            <button className="read-more-btn">Read more</button>
          </div>

          <div className="card">
            <h3>Formalities</h3>
            <p>
              First license or category extension, renewal of a driver's license, duplicate, conversion of a foreign driver's license to a Tunisian license...
            </p>
            <button className="read-more-btn">Read more</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DriverLicense;