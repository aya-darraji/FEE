import React from 'react';
import './Tips.css';
//import NavBarGuide from './NavBarGuide'; // Assuming NavBarGuide.jsx is in the same directory

function Tips() {
  return (
    <div className="tips-container">
     {/* <NavBarGuide />*/}
      <div className="main-content">
        <h2 className="page-title">TIPS</h2>

        <div className="tip-section">
          <h3 className="section-title">Do you want to obtain a driving license?</h3>
          <p>Follow these few tips and remember that a good driver is one who has learned how to drive well. The main goal should not be to pass the exam as quickly as possible but to have the knowledge, skills, and behavior necessary for safe and responsible driving.</p>
       

          <h3 className="section-title">A Good Training</h3>
          <p>Place great importance on your theoretical and practical training. The risks for new drivers are particularly high, which is why it's important to prepare well. Good training can induce new behaviors in learner drivers to significantly reduce the number and severity of road accidents.</p>

          <h3 className="section-title">The Code</h3>
          <p>A solid theoretical education is just as important because the rules must not only be memorized but also applied correctly. To prepare well for the theoretical exam (the code), prefer a driving school equipped with audiovisual materials and necessary educational documents for this training. You will be better prepared before taking the exam. Reading material: Road Signs and Signals, Official Printing Edition.</p>

        
          <h3 className="section-title">Driving</h3>
          <p>Don't delay taking the practical driving test. Once you've obtained the code, it is valid for one year. Therefore, start your practical training right away so you don't lose the benefit of passing the code exam.</p>
       
          <h3 className="section-title">The Day of the Exam</h3>
          <p>The best way to protect yourself from fear and nervousness on exam day is to prepare well. Nothing beats good training. Also, don't compare yourself to others who claim to have passed on their first attempt, because driving is not without risks. The goal is to be a good driver, not a speed demon. Examiners are not monsters! Their role is mainly to ensure that you do not pose a danger to yourself and others. Regardless of the evaluation of the candidates' abilities, the examiner only assesses the results of your training level.</p>
       
          <h3 className="section-title">Taking Another Category of License</h3>
          <p>Before requesting a driving license of another category, you must not be under the effect of a license suspension or loss of validity. If not, the tests taken will be considered invalid.</p>
        

        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>License Category</th>
                <th>Age</th>
                <th>Probationary Condition</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>A1</td>
                <td>16 and over</td>
                <td>-</td>
              </tr>
              <tr>
                <td>A / B1</td>
                <td>18 and over</td>
                <td>-</td>
              </tr>
              <tr>
                <td>B / C1 / D1</td>
                <td>20 and over</td>
                <td>Driving license B (Held for at least 2 years)</td>
              </tr>
              <tr>
                <td>C / D</td>
                <td>21 and over</td>
                <td>Driving license B (Held for at least 2 years)</td>
              </tr>
              <tr>
                <td>E + F / G</td>
                <td>25 and over</td>
                <td>Driving license (Category D)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Tips;