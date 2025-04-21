import React from 'react';
import './RoadSafety.css';
//import NavBarGuide from './NavBarGuide'; // Assuming NavBarGuide.jsx is in the same directory

function RoadSafety() {
  return (
    <div className="road-safety-container">
      {/*<NavBarGuide />*/}
      <div className="main-content">
        <h2 className="page-title">ROAD SAFETY</h2>
        <br></br>
        <div className="safety-info">
          <p>Road insecurity is the leading cause of death among young drivers. Every beginner driver is subject to a speed limit restriction.</p>
          <br></br>


          <h3 className="section-title">Speed Limits</h3>
          <ul>
            <li>Within urban areas: regulated speed limit</li>
            <li>Outside urban areas: 80 km/h instead of 90 km/h</li>
            <li>Highways: 80 km/h instead of 110 km/h</li>
          </ul>
          <br></br>

          <h3 className="section-title">Duration</h3>
          <p>2 years</p>
          <br></br>

          <h3 className="section-title">Signage</h3>
          <p>Every beginner driver must place a "80" sticker indicating their speed limit on the front right and rear left windshields.</p>
          <br></br>

          <h3 className="section-title">Some Advice:</h3>
          <ul>
            <li> To drive, you must be in good health. Therefore, never drive when sick, overworked, or emotionally shaken.</li>
            <li>For maximum safety, the seatbelt must be properly adjusted.</li>
            <li>Follow the speed limits.</li>
            <li>At night, be extra cautious.</li>
            <li>Before entering a roundabout, you must slow down to yield to vehicles already engaged coming from your left.</li>
            <li>Always drive in a way that doesn’t obstruct or endanger other road users. Special caution should be taken for children, the disabled, and elderly people.</li>
            <li>On roads passing through residential areas, drive with extra caution and show consideration for others. And when you're a pedestrian, if there is no sidewalk, don't forget to walk on the left, facing the traffic. You'll be able to see approaching vehicles.</li>
          </ul>
        </div>
      </div>
      </div>
    
  );
}

export default RoadSafety;