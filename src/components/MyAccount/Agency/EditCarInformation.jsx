import React, { useState } from 'react';
import './EditCarInformation.css';
import NavBarAgency from './NavBarAgency';

const EditCarInformation = () => {
  const [formData, setFormData] = useState({
    name: '',
    model: '',
    year: '',
    price: '',
    color: '',
    body: '',
    engineType: '',
    horsepower: '',
    torque: '',
    topSpeed: '',
    acceleration: '',
    transmission: '',
    drivetrain: '',
    fuelCapacity: '',
    fuelEconomyCity: '',
    fuelEconomyHighway: '',
    fuelEconomyCombined: '',
    emissionsRating: '',
    airbags: '',
    abs: false,
    tractionControl: false,
    laneAssist: false,
    adaptiveCruiseControl: false,
    blindSpotMonitor: false,
    rearViewCamera: false,
    parkingSensors: false,
    autonomousDrivingLevel: '',
    seats: '',
    seatMaterial: '',
    heatedSeats: false,
    ventilatedSeats: false,
    sunroof: false,
    climateControl: '',
    infotainmentSystem: '',
    touchscreenSize: '',
    wirelessCharging: false,
    appleCarPlay: false,
    androidAuto: false,
    wheels: '',
    wheelSize: '',
    ledHeadlights: false,
    fogLights: false,
    tintedWindows: false,
    cargoCapacity: '',
    towingCapacity: '',
    roofRack: false,
    trailerHitch: false,
    bluetooth: false,
    wifiHotspot: false,
    usbPorts: '',
    speakerSystem: '',
    agency: '',
    listedDate: '',
    images: [],
    videoURL: '',
    qrCode: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add API call to save the data
  };

  const handleImageUpload = (e) => {
    console.log('Image uploaded');
    // Handle image upload logic
  };

  const handleCancel = () => {
    console.log('Form cancelled');
    // Add navigation or reset logic
  };

  return (
    <div className="edit-car-container">
      <NavBarAgency />
      
      <div className="form-container">
        <h2>Edit Car Information</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="form-grid">
            <div className="form-group">
              <label>Name</label>
              <input 
                type="text" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
              />
            </div>
            
            <div className="form-group">
              <label>Model</label>
              <input 
                type="text" 
                name="model" 
                value={formData.model} 
                onChange={handleChange} 
              />
            </div>
            
            <div className="form-group">
              <label>Year</label>
              <input 
                type="number" 
                name="year" 
                value={formData.year} 
                onChange={handleChange} 
              />
            </div>
            
            <div className="form-group">
              <label>Price</label>
              <input 
                type="number" 
                name="price" 
                value={formData.price} 
                onChange={handleChange} 
              />
            </div>
            
            <div className="form-group">
              <label>Color</label>
              <input 
                type="text" 
                name="color" 
                value={formData.color} 
                onChange={handleChange} 
              />
            </div>
            
            <div className="form-group">
              <label>Body</label>
              <input 
                type="text" 
                name="body" 
                value={formData.body} 
                onChange={handleChange} 
              />
            </div>
            
            <div className="form-group">
              <label>Engine Type</label>
              <input 
                type="text" 
                name="engineType" 
                value={formData.engineType} 
                onChange={handleChange} 
              />
            </div>
            
            <div className="form-group">
              <label>Horsepower</label>
              <input 
                type="number" 
                name="horsepower" 
                value={formData.horsepower} 
                onChange={handleChange} 
              />
            </div>
            
            <div className="form-group">
              <label>Torque</label>
              <input 
                type="text" 
                name="torque" 
                value={formData.torque} 
                onChange={handleChange} 
              />
            </div>
            
            <div className="form-group">
              <label>Top Speed</label>
              <input 
                type="text" 
                name="topSpeed" 
                value={formData.topSpeed} 
                onChange={handleChange} 
              />
            </div>
            
            <div className="form-group">
              <label>Acceleration (0-60)</label>
              <input 
                type="text" 
                name="acceleration" 
                value={formData.acceleration} 
                onChange={handleChange} 
              />
            </div>
            
            <div className="form-group">
              <label>Transmission</label>
              <input 
                type="text" 
                name="transmission" 
                value={formData.transmission} 
                onChange={handleChange} 
              />
            </div>
            
            <div className="form-group">
              <label>Drivetrain</label>
              <input 
                type="text" 
                name="drivetrain" 
                value={formData.drivetrain} 
                onChange={handleChange} 
              />
            </div>
            
            <div className="form-group">
              <label>Fuel Capacity</label>
              <input 
                type="text" 
                name="fuelCapacity" 
                value={formData.fuelCapacity} 
                onChange={handleChange} 
              />
            </div>
            
            <div className="form-group">
              <label>Fuel Economy City</label>
              <input 
                type="text" 
                name="fuelEconomyCity" 
                value={formData.fuelEconomyCity} 
                onChange={handleChange} 
              />
            </div>
            
            <div className="form-group">
              <label>Fuel Economy Highway</label>
              <input 
                type="text" 
                name="fuelEconomyHighway" 
                value={formData.fuelEconomyHighway} 
                onChange={handleChange} 
              />
            </div>
            
            <div className="form-group">
              <label>Fuel Economy Combined</label>
              <input 
                type="text" 
                name="fuelEconomyCombined" 
                value={formData.fuelEconomyCombined} 
                onChange={handleChange} 
              />
            </div>
            
            <div className="form-group">
              <label>Emissions Rating</label>
              <input 
                type="text" 
                name="emissionsRating" 
                value={formData.emissionsRating} 
                onChange={handleChange} 
              />
            </div>
            
            <div className="form-group">
              <label>Airbags</label>
              <input 
                type="text" 
                name="airbags" 
                value={formData.airbags} 
                onChange={handleChange} 
              />
            </div>

            {/* Safety Features - Checkboxes */}
            <div className="form-group checkbox-group">
              <label>ABS</label>
              <input 
                type="checkbox" 
                name="abs" 
                checked={formData.abs} 
                onChange={handleChange} 
              />
            </div>
            
            <div className="form-group checkbox-group">
              <label>Traction Control</label>
              <input 
                type="checkbox" 
                name="tractionControl" 
                checked={formData.tractionControl} 
                onChange={handleChange} 
              />
            </div>
            
            <div className="form-group checkbox-group">
              <label>Lane Assist</label>
              <input 
                type="checkbox" 
                name="laneAssist" 
                checked={formData.laneAssist} 
                onChange={handleChange} 
              />
            </div>
            
            <div className="form-group checkbox-group">
              <label>Adaptive Cruise Control</label>
              <input 
                type="checkbox" 
                name="adaptiveCruiseControl" 
                checked={formData.adaptiveCruiseControl} 
                onChange={handleChange} 
              />
            </div>
            
            <div className="form-group checkbox-group">
              <label>Blind Spot Monitor</label>
              <input 
                type="checkbox" 
                name="blindSpotMonitor" 
                checked={formData.blindSpotMonitor} 
                onChange={handleChange} 
              />
            </div>
            
            <div className="form-group checkbox-group">
              <label>Rear View Camera</label>
              <input 
                type="checkbox" 
                name="rearViewCamera" 
                checked={formData.rearViewCamera} 
                onChange={handleChange} 
              />
            </div>
            
            <div className="form-group checkbox-group">
              <label>Parking Sensors</label>
              <input 
                type="checkbox" 
                name="parkingSensors" 
                checked={formData.parkingSensors} 
                onChange={handleChange} 
              />
            </div>
            
            <div className="form-group">
              <label>Autonomous Driving Level</label>
              <input 
                type="text" 
                name="autonomousDrivingLevel" 
                value={formData.autonomousDrivingLevel} 
                onChange={handleChange} 
              />
            </div>
            
            <div className="form-group">
              <label>Seats</label>
              <input 
                type="number" 
                name="seats" 
                value={formData.seats} 
                onChange={handleChange} 
              />
            </div>
            
            <div className="form-group">
              <label>Seat Material</label>
              <input 
                type="text" 
                name="seatMaterial" 
                value={formData.seatMaterial} 
                onChange={handleChange} 
              />
            </div>
            
            <div className="form-group checkbox-group">
              <label>Heated Seats</label>
              <input 
                type="checkbox" 
                name="heatedSeats" 
                checked={formData.heatedSeats} 
                onChange={handleChange} 
              />
            </div>
            
            <div className="form-group checkbox-group">
              <label>Ventilated Seats</label>
              <input 
                type="checkbox" 
                name="ventilatedSeats" 
                checked={formData.ventilatedSeats} 
                onChange={handleChange} 
              />
            </div>
            
            <div className="form-group checkbox-group">
              <label>Sunroof</label>
              <input 
                type="checkbox" 
                name="sunroof" 
                checked={formData.sunroof} 
                onChange={handleChange} 
              />
            </div>
            
            <div className="form-group">
              <label>Climate Control</label>
              <input 
                type="text" 
                name="climateControl" 
                value={formData.climateControl} 
                onChange={handleChange} 
              />
            </div>
            
            <div className="form-group">
              <label>Infotainment System</label>
              <input 
                type="text" 
                name="infotainmentSystem" 
                value={formData.infotainmentSystem} 
                onChange={handleChange} 
              />
            </div>
            
            <div className="form-group">
              <label>Touchscreen Size</label>
              <input 
                type="text" 
                name="touchscreenSize" 
                value={formData.touchscreenSize} 
                onChange={handleChange} 
              />
            </div>
            
            <div className="form-group checkbox-group">
              <label>Wireless Charging</label>
              <input 
                type="checkbox" 
                name="wirelessCharging" 
                checked={formData.wirelessCharging} 
                onChange={handleChange} 
              />
            </div>
            
            <div className="form-group checkbox-group">
              <label>Apple Car Play</label>
              <input 
                type="checkbox" 
                name="appleCarPlay" 
                checked={formData.appleCarPlay} 
                onChange={handleChange} 
              />
            </div>
            
            <div className="form-group checkbox-group">
              <label>Android Auto</label>
              <input 
                type="checkbox" 
                name="androidAuto" 
                checked={formData.androidAuto} 
                onChange={handleChange} 
              />
            </div>
            
            <div className="form-group">
              <label>Wheels</label>
              <input 
                type="text" 
                name="wheels" 
                value={formData.wheels} 
                onChange={handleChange} 
              />
            </div>
            
            <div className="form-group">
              <label>Wheel Size</label>
              <input 
                type="text" 
                name="wheelSize" 
                value={formData.wheelSize} 
                onChange={handleChange} 
              />
            </div>
            
            <div className="form-group checkbox-group">
              <label>LED Headlights</label>
              <input 
                type="checkbox" 
                name="ledHeadlights" 
                checked={formData.ledHeadlights} 
                onChange={handleChange} 
              />
            </div>
            
            <div className="form-group checkbox-group">
              <label>Fog Lights</label>
              <input 
                type="checkbox" 
                name="fogLights" 
                checked={formData.fogLights} 
                onChange={handleChange} 
              />
            </div>
            
            <div className="form-group checkbox-group">
              <label>Tinted Windows</label>
              <input 
                type="checkbox" 
                name="tintedWindows" 
                checked={formData.tintedWindows} 
                onChange={handleChange} 
              />
            </div>
            
            <div className="form-group">
              <label>Cargo Capacity</label>
              <input 
                type="text" 
                name="cargoCapacity" 
                value={formData.cargoCapacity} 
                onChange={handleChange} 
              />
            </div>
            
            <div className="form-group">
              <label>Towing Capacity</label>
              <input 
                type="text" 
                name="towingCapacity" 
                value={formData.towingCapacity} 
                onChange={handleChange} 
              />
            </div>
            
            <div className="form-group checkbox-group">
              <label>Roof Rack</label>
              <input 
                type="checkbox" 
                name="roofRack" 
                checked={formData.roofRack} 
                onChange={handleChange} 
              />
            </div>
            
            <div className="form-group checkbox-group">
              <label>Trailer Hitch</label>
              <input 
                type="checkbox" 
                name="trailerHitch" 
                checked={formData.trailerHitch} 
                onChange={handleChange} 
              />
            </div>
            
            <div className="form-group checkbox-group">
              <label>Bluetooth</label>
              <input 
                type="checkbox" 
                name="bluetooth" 
                checked={formData.bluetooth} 
                onChange={handleChange} 
              />
            </div>
            
            <div className="form-group checkbox-group">
              <label>WiFi Hotspot</label>
              <input 
                type="checkbox" 
                name="wifiHotspot" 
                checked={formData.wifiHotspot} 
                onChange={handleChange} 
              />
            </div>
            
            <div className="form-group">
              <label>USB Ports</label>
              <input 
                type="number" 
                name="usbPorts" 
                value={formData.usbPorts} 
                onChange={handleChange} 
              />
            </div>
            
            <div className="form-group">
              <label>Speaker System</label>
              <input 
                type="text" 
                name="speakerSystem" 
                value={formData.speakerSystem} 
                onChange={handleChange} 
              />
            </div>
            
            <div className="form-group">
              <label>Agency</label>
              <input 
                type="text" 
                name="agency" 
                value={formData.agency} 
                onChange={handleChange} 
              />
            </div>
            
            <div className="form-group">
              <label>Listed Date</label>
              <input 
                type="date" 
                name="listedDate" 
                value={formData.listedDate} 
                onChange={handleChange} 
              />
            </div>
          </div>
          
          <div className="form-group full-width">
            <label>Images</label>
            <div className="image-upload-area">
              <input 
                type="file" 
                multiple 
                onChange={handleImageUpload} 
                className="image-upload-input"
              />
              <div className="upload-icon">+</div>
              <span>Upload Images</span>
            </div>
          </div>
          
          <div className="form-group full-width">
            <label>Video URL</label>
            <input 
              type="text" 
              name="videoURL" 
              value={formData.videoURL} 
              onChange={handleChange} 
            />
          </div>
          
          <div className="form-group full-width">
            <label>QR Code</label>
            <input 
              type="text" 
              name="qrCode" 
              value={formData.qrCode} 
              onChange={handleChange} 
            />
          </div>
          
          <div className="form-buttons">
            <button type="button" className="cancel-button" onClick={handleCancel}>
              Cancel
            </button>
            <button type="submit" className="submit-button">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditCarInformation;