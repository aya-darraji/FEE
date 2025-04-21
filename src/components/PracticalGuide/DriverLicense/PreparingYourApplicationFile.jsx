import React from 'react';
import './PreparingYourApplicationFile.css';
//import NavBarGuide from './NavBarGuide'; // Assuming NavBarGuide.jsx is in the same directory

function PreparingYourApplicationFile() {
  return (
    <div className="preparing-application-container">
      {/*<NavBarGuide />*/}
      <div className="main-content">
        <h2 className="page-title">PREPARING YOUR APPLICATION FILE</h2>

        <div className="know-categories">
          <h3>Do You Know the Different Categories of Driver’s Licenses?</h3>
          <p>Before preparing your application, start by choosing the type of vehicle you wish to drive. This will determine the category of license you need to apply for.</p>

          <h3>Conditions for Obtaining a Driver’s License</h3>
          <p>Driving requires that you meet the minimum age requirement and that you are physically fit to drive.</p>
          <h4>Do You Meet the Age Requirement?</h4>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>AGE</th>
                  <th>LICENSE CATEGORY</th>
                  <th>PREREQUISITE CONDITION</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>16 years</td>
                  <td>A1</td>
                  <td></td>
                </tr>
                <tr>
                  <td>18 years</td>
                  <td>A / B / H</td>
                  <td></td>
                </tr>
                <tr>
                  <td>20 years</td>
                  <td>B+E / C / D1</td>
                  <td>Category B license (Held for at least 2 years)</td>
                </tr>
                <tr>
                  <td>21 years</td>
                  <td>C+E / D</td>
                  <td>Category B license (Held for at least 2 years)</td>
                </tr>
                <tr>
                  <td>22 years</td>
                  <td>D+E</td>
                  <td>Category D license</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>Process Overview</h3>
          <p>Depending on the chosen license category, the candidate must pass two tests: the theory test (code) and then the practical driving test.</p>

          <h3>Are You Fit to Drive?</h3>
          <p>The candidate must be free from any physical disability or illness that is incompatible with obtaining the requested driver’s license. Candidates with physical disabilities or medical conditions may drive specially adapted vehicles, after their application has been approved.</p>
          <ol>
            <li><strong>Registration for the Theory Test</strong>
              <ul>
                <li>Submission of the application file and payment of exam fees.</li>
                <li>Notification of the exam date at a testing center.</li>
              </ul>
            </li>
            <li><strong>Taking the Theory Test</strong>
              <ul>
                <li>If you pass, you proceed to the next step.</li>
                <li>If you fail, you must retake the theory test.</li>
              </ul>
            </li>
            <li><strong>Registration for the Practical Test</strong>
              <ul>
                <li>Payment of exam fees.</li>
                <li>Notification of the exam date at a testing center.</li>
              </ul>
            </li>
            <li><strong>Taking the Practical Test</strong>
              <ul>
                <li>If you pass, you proceed to the next step.</li>
                <li>If you fail, you must retake the driving test.</li>
              </ul>
            </li>
            <li><strong>Obtaining the Driver’s License</strong></li>
          </ol>

          <h3>How to Register</h3>
          <p>Without having to travel, you can submit your application file directly online. Payment is made via e-dinars. Of course, you can also complete this procedure at one of the ATTT’s regional offices. <br /><strong>Important:</strong> You may only register at one exam center.</p>

          <h3>Validity of Registration</h3>
          <p>The date your file is submitted is important. You have one year from the date of submission to register for both tests. After that, your file will be canceled, and you will have to start a new registration process.</p>
       

          <h3>How Much Does It Cost?</h3>
          <p>When registering for a new license or an extension of license categories, you pay the registration and license issuance fees all at once.</p>
          <ul>
            <li>Exam fee: 35 TND (17 TND for registration and 18 TND for the license)</li>
            <li>Theory test: 17 TND</li>
            <li>Practical test: 17 TND</li>
            <li>License issuance: 18 TND</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PreparingYourApplicationFile;