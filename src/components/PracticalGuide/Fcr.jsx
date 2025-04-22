import React from 'react';
import './Fcr.css';
import NavBarGuide from './NavBarGuide'; // Assuming NavBarGuide.jsx is in the same directory
import { Link } from "react-router-dom";

function Fcr() {
  

  return (
    <div className="fcr-container">
      <NavBarGuide />
      <div className="main-content">
        <h2 className="page-title">FCR</h2>

        <div className="decree-info">
          <p>Decree No. 370 of June 19, 2024, established the tax benefits granted to Tunisians residing abroad, as well as the conditions and modalities for their allocation. This scheme allows Tunisians living abroad to import or locally purchase, upon their last entry into Tunisia, a passenger vehicle, a commercial vehicle, or a motorcycle.</p>
     

    
          <h3>Tunisians residing abroad are entitled to either a full or partial exemption from the payment of duties and taxes once every ten years when importing or acquiring a motorcycle, a passenger car, or a professional-use vehicle on the local market, including all-terrain vehicles with a total weight not exceeding three and a half tons (3.5 tons), by choosing one of the following tax regimes:</h3>
          <ol>
            <li><strong>Full exemption from duties and taxes, with an indefinite transfer restriction</strong>
              <p>In this case, the vehicle or motorcycle is registered under the "RS" series, with a mandatory mention on the registration certificate stating: "A vehicle or motorcycle that cannot be transferred except with the authorization of the customs authorities."</p>
            </li>
            <li><strong>Partial exemption from duties and taxes, with the possibility of transfer</strong>
              <p>If the partial exemption regime is chosen, the vehicle is registered under the standard "Tunisia" series.</p>
            </li>
          </ol>
   

          <h3>The table below summarizes the percentage of taxes to be paid in relation to the total duties and taxes normally applicable to passenger vehicles:</h3>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>CHARACTERISTICS</th>
                  <th>RATE</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Vehicles equipped with spark-ignition piston engines and hybrids with a displacement not exceeding 2000 cm³.</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Vehicles equipped with compression-ignition piston engines and hybrids with a displacement not exceeding 2500 cm³.</td>
                  <td>25%</td>
                </tr>
                <tr>
                  <td>Professional-use vehicles and vehicles solely equipped with electric motors for propulsion.</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Vehicles equipped with spark-ignition piston engines and hybrids with an engine capacity exceeding 2000 cm³, OR compression-ignition piston engines and hybrids with an engine capacity exceeding 2500 cm³.</td>
                  <td>30%</td>
                </tr>
              </tbody>
            </table>
          </div>
 

       
          <h3>Required Conditions</h3>
          <ul>
            <li>Must be of Tunisian nationality and at least 18 years old at the date of their last return to Tunisia.</li>
            <li>Must have resided abroad for at least two years before their last entry into Tunisia, without exceeding 183 days in Tunisia for each 365-day period.</li>
            <li>The vehicle eligible for exemption must be the personal property of the beneficiary.</li>
          </ul>
       

      
          <h3>Importation or Local Acquisition Deadline</h3>
          <ul>
            <li>The vehicle must be imported or locally acquired within a maximum period of two years from the date of the last entry into Tunisia.</li>
            <li>The age of the passenger car, professional-use vehicle, or motorcycle imported under full or partial exemption must not exceed five years upon entry into Tunisia, starting from the date of first registration.</li>
            <li>It is possible to acquire the means of transport in Tunisia from authorized dealers, provided that the order, payment, and delivery take place within a maximum period of two years from the date of the last entry into Tunisia.</li>
          </ul>
          <p><strong>Note:</strong> The amount of duties and taxes paid on the car or motorcycle under the partial exemption scheme must come from foreign currency exchange operations conducted by the beneficiary or withdrawals from a convertible currency account, in accordance with applicable regulations, within the year immediately preceding or at a later date from the vehicle importation process.</p>
       

       
          <h3>Procedure:</h3>
          <p>Interested individuals must first verify their eligibility with customs services in accordance with the above-mentioned conditions. For more information on calculating duties related to permanent return and customs taxation, you can visit the link: <a href="https://www.douane.gov.tn/retour-definitif/" target="_blank" rel="noopener noreferrer">www.douane.gov.tn/retour-definitif/</a></p>
      

       
          <h3>Driving a Car or Motorcycle Under Full Tax Exemption</h3>
          <p>The following individuals are authorized to drive vehicles registered under the "RS" series without prior authorization:</p>
          <ul>
            <li>The beneficiary of the tax exemption.</li>
            <li>The spouse of the beneficiary (husband or wife), provided they can present a document proving their marital status during a check.</li>
            <li>Any other person in the presence of the beneficiary or their spouse (inside the vehicle).</li>
          </ul>

          <p>The following individuals may drive vehicles registered under the "RS" series with special authorization from customs services:</p>
          <ul>
            <li>The beneficiary’s parents (father, mother).</li>
            <li>The spouse of the beneficiary, upon request.</li>
            <li>The beneficiary’s children.</li>
            <li>The beneficiary’s brothers and sisters.</li>
          </ul>

          <p>This authorization must be requested (<a href="https://www.douane.gov.tn/wp-content/uploads/2020/09/BTE-003-AR-0920_autor_conduire_RS_v2.pdf" target="_blank" rel="noopener noreferrer">
            <span class="download-link">download form here</span></a>) and submitted to the relevant regional customs office, along with the following documents:</p>
          <ol>
            <li>A copy of the beneficiary’s national identity card (vehicle owner).</li>
            <li>A copy of the vehicle’s registration certificate.</li>
            <li>A copy of the authorized driver's national identity card.</li>
            <li>A copy of the authorized driver’s license.</li>
            <li>A birth certificate of the beneficiary (vehicle owner), issued within the last three months.</li>
            <li>A birth certificate of the authorized driver, issued within the last three months.</li>
          </ol>

          <p>A permit to drive an "RS" vehicle is granted for one, two, or three years, depending on the owner's choice. The same documents must be submitted for each renewal process.</p>
          <p><strong>Important:</strong> Except for individuals holding a permit, no one is allowed to drive the vehicle unless the owner or their spouse is present as a passenger.</p>
       
      </div>
    </div>
    </div>
  );
}
export default Fcr;