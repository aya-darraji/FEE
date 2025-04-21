import React from 'react';
import './PracticalTest.css';
//import NavBarGuide from './NavBarGuide'; // Assuming NavBarGuide.jsx is in the same directory

function PracticalTest() {
  return (
    <div className="practical-test-container">
      {/*<NavBarGuide />*/}
      <div className="main-content">
        <h2 className="page-title">PRACTICAL TEST: DRIVING EXAM</h2>

        <div className="test-info">
          <p>Driving, or the practical test, is the final stage of the driver's license examination. Only candidates who have passed the theory test are allowed to take the practical test. The practical test is a real-life driving assessment. This exam evaluates your driving skills, your correct application of traffic rules, and your control of the vehicle.</p>
      <br></br>
          <h3 className="section-title">Test Procedure</h3>
          <p>The exam consists of two mandatory parts: a road driving test and a maneuvering test. You will drive a vehicle designed for driving instruction and equipped with dual brake and acceleration controls. The examiner may reject any vehicle that does not meet the regulatory requirements.</p>
          <h4 className="subsection-title">For Categories B and D1</h4>
          <p>Passing the road driving test allows the candidate to immediately proceed to the maneuvering test.</p>
          <h4 className="subsection-title">For Categories A, C, C+E, and D</h4>
          <p>The maneuvering test is taken before the road driving test. Only candidates who pass the maneuvering test are allowed to take the road driving test.</p>
          <br></br>

          <h3 className="section-title">Validity</h3>
          <p>If the candidate fails either part of the practical test, they must retake the entire exam.</p>
          <br></br>

          <h3 className="section-title">Road Driving Test</h3>
          <p>At the beginning, the examiner gives instructions to the candidate and ensures a calm environment. The candidate is put in the best possible conditions to demonstrate their real driving abilities.</p>
          <h4 className="subsection-title">Route</h4>
          <p>To objectively evaluate the candidate's skills, the examiner chooses routes that include various traffic situations, road signs, and driving conditions. For candidates with physical disabilities or medical conditions requiring special vehicle modifications, maneuvers may be assessed during the road test.</p>
          <h4 className="subsection-title">Evaluation Criteria</h4>
          <ul>
            <li>Vehicle control</li>
            <li>Speed control</li>
            <li>Adjusting speed based on traffic signals, road conditions, weather, traffic density, foreseeable obstacles, and the vehicle’s characteristics and load</li>
            <li>Merging safely into traffic and applying traffic rules</li>
            <li>Identifying and assessing potential dangers</li>
            <li>Ensuring the safety of all road users and showing respectful behavior, especially toward vulnerable users.</li>
          </ul>
          <h4 className="subsection-title">Duration</h4>
          <p>Between 15 and 20 minutes, depending on the license category.</p>
          <h4 className="subsection-title">Result</h4>
          <p>The examiner announces the result based on a scoring system that reflects the errors made. In case of failure, the examiner provides a justification and advice for improvement. At the end of the test, the examiner issues an evaluation sheet for category B or a report.</p>
          <br></br>

          <h3 className="section-title">Maneuvering Test</h3>
          <p>The candidate performs a series of maneuvers alone in control of the vehicle.</p>
          <h4 className="subsection-title">Test Area</h4>
          <p>The maneuvering test is conducted off-road in a specially designated area.</p>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>License Category</th>
                  <th>Maneuvers to Perform</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>A</td>
                  <td>
                    <ul>
                      <li>Slalom</li>
                      <li>Braking preceded by a gear change</li>
                      <li>U-turn</li>
                      <li>Driving at reduced speed maintaining balance (no feet on the ground)</li>
                      <li>Avoiding an obstacle at a speed of 40 km/h with braking</li>
                      <li>Carrying a passenger</li>
                      <li>Driving at 25 km/h minimum on a straight path</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>B</td>
                  <td>
                    <ul>
                      <li>Moving forward in a straight line</li>
                      <li>Reversing in a straight line</li>
                      <li>Parking in a designated space</li>
                      <li>Making a U-turn in a confined space</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>B with trailer (BE)</td>
                  <td>
                    <ul>
                      <li>Forward movement with a curve</li>
                      <li>Reversing with a curve</li>
                      <li>Changing direction by backing up</li>
                      <li>Uncoupling and recoupling the trailer</li>
                      <li>Parking in a designated space</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>C - C1 - D - D1</td>
                  <td>
                    <ul>
                      <li>Forward movement with a curve</li>
                      <li>Reversing with a curve</li>
                      <li>Changing direction by backing up</li>
                      <li>Parking in a designated space</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>C+E</td>
                  <td>
                    <ul>
                      <li>Forward movement with a curve</li>
                      <li>Reversing with a curve</li>
                      <li>Changing direction by backing up</li>
                      <li>Uncoupling and recoupling the vehicle combination</li>
                      <li>Parking in a designated space</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <br></br>

          <h3 className="section-title">Evaluation Criteria</h3>
          <p>The result takes into account the severity of the errors made: eliminatory faults and technical faults.</p>
          <h3 className="section-title">Result</h3>
          <p>The examiner announces the result to the candidate and hands over the evaluation sheet, indicating the errors committed.</p>
          <br></br>

          <h3 className="section-title">Final Result of the Exam</h3>
          <p>The examiner issues a temporary driver’s license to the candidate who passes the practical test, pending the issuance of the permanent license.</p>
          <br></br>

          <h3 className="section-title">Registration for the Practical Test</h3>
          <h4 className="subsection-title">Conditions</h4>
          <ul>
            <li>You must have passed the theory test.</li>
            <li>For candidates who failed the driving test: the theory test result remains valid for up to 6 practical test attempts within a maximum of 1 year.</li>
          </ul>
          <h4 className="subsection-title">Requirements</h4>
          <ul>
            <li>The same registration file used for the theory test</li>
            <li>A payment receipt for the test registration fees</li>
          </ul>
          <h4 className="subsection-title">Fees</h4>
          <ul>
            <li>17 dinars per registration.</li>
            <li>Fees must be paid before the test.</li>
            <li>In case of absence from the exam, fees are non-refundable.</li>
          </ul>
          <h4 className="subsection-title">Schedule</h4>
          <p>The test date is set by the ATTT. The waiting period ranges from one to three weeks maximum.</p>
      </div>
    </div>
       </div>
  );
}

export default PracticalTest;