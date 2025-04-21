import React from 'react';
import './TheoreticalTest.css';
//import NavBarGuide from './NavBarGuide'; // Assuming NavBarGuide.jsx is in the same directory

function TheoreticalTest() {
  return (
    <div className="theoretical-test-container">
      {/*<NavBarGuide />*/}
      <div className="main-content">
        <h3 className="page-title">THEORETICAL TEST: DRIVING THEORY EXAM</h3>

        <div className="test-overview">
          <p>The theoretical test (or code exam) is an important examination used to assess the future driver’s knowledge of the highway code, road safety, first aid, energy efficiency, automotive mechanics and electricity, as well as the transport of hazardous materials.</p>

          <h3 className="section-title">Topics Covered in the Theory Test</h3>
          <ul>
            <li>Road signs and signals</li>
            <li>The driver and the vehicle</li>
            <li>Stopping and parking</li>
            <li>Passing and overtaking</li>
            <li>Right-of-way rules</li>
            <li>Traffic regulations</li>
            <li>Traffic violations</li>
            <li>First aid</li>
            <li>Preventive maintenance and energy management</li>
            <li>Road transport of hazardous materials</li>
          </ul>

       
          <h3 className="section-title">How the Exam Works</h3>
          <p>The candidate takes the test at an exam center. It consists of a set of questions based on the category of the driver’s license being applied for. The candidate can choose to take the test in Arabic or French. The exam lasts about half an hour.</p>
          <p>The test is conducted using a multimedia computer. During the test, the candidate will see pictures illustrating various traffic situations on the road. In most cases, the candidate is considered a fully licensed driver behind the wheel, following traffic rules and road signs.</p>
          <p>Each photo is accompanied by a question. The candidate must select the correct answer from 2 or 3 possible options. To answer, the candidate presses one of three buttons:</p>
          <ul>
            <li>The red button corresponds to option A</li>
            <li>The orange button corresponds to option B</li>
            <li>The green button corresponds to option C</li>
          </ul>
       

       
          <h3 className="section-title">Eligibility</h3>
          <div className="table-container">
          <table>
      <thead>
        <tr>
          <th>CATEGORIES</th>
          <th>NUMBER OF QUESTIONS</th>
          <th>NUMBER OF CORRECT ANSWERS TO PASS THE EXAM</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>A1</td>
          <td>25</td>
          <td>20/25</td>
        </tr>
        <tr>
          <td>A</td>
          <td>30</td>
          <td>Pass category A1 + 4/5 specific category A questions</td>
        </tr>
        <tr>
          <td>B</td>
          <td>30</td>
          <td>24/30</td>
        </tr>
        <tr>
          <td>C</td>
          <td>30</td>
          <td>24/30 + 4/5 specific category C questions</td>
        </tr>
        <tr>
          <td>C+E</td>
          <td>35</td>
          <td>Pass category C + 4/5 specific category C+E questions</td>
        </tr>
        <tr>
          <td>D1</td>
          <td>30</td>
          <td>24/30 + 4/5 specific category D1 questions</td>
        </tr>
        <tr>
          <td>D</td>
          <td>35</td>
          <td>Pass category D1 + 4/5 specific category D questions</td>
        </tr>
        <tr>
          <td>H</td>
          <td>30</td>
          <td>24/30</td>
        </tr>
      </tbody>
    </table>
          </div>
     

          <h3 className="section-title">Validity</h3>
          <p>If the candidate passes the theory test, they retain the benefit of their admission for one year, but may not take more than six practical driving tests during that period.</p>
        
          <h3 className="section-title">Registration for the Theory Test – Requirements</h3>
          <ol>
            <li>Fill out the "Driver’s License Application" form provided by the ATTT</li>
            <li>A photocopy of the national ID card (for foreigners: a photocopy of the residence permit or any equivalent document)</li>
            <li>Two recent passport-size photos</li>
            <li>A medical certificate in accordance with the official format, issued no more than three months prior</li>
            <li>A receipt of payment for the applicable fees</li>
            <li>For a License Category Extension, include:
              <ul>
                <li>A copy of the previous driver’s license</li>
              </ul>
            </li>
          </ol>
        

          <h3 className="section-title">Fees</h3>
          <ul>
            <li>35 TND (18 TND for license issuance + 17 TND for registration)</li>
            <li>Fees must be paid before the exam. In case of absence, they are non-refundable.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TheoreticalTest;