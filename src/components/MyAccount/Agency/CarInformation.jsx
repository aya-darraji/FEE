import React, { useState } from 'react';
import './CarInformation.css';
import NavBarAgency from './NavBarAgency';

function CarInformation() {
  // Sample car data
  const [cars, setCars] = useState([
    {
      id: 1,
      name: "Toyota Corolla",
      model: "Sedan",
      year: 2022,
      price: "25,000 $",
      color: "Red",
      body: "Sedan",
      engineType: "1.8L 4-Cylinder",
      horsepower: "139 hp",
      torque: "126 lb-ft",
      topSpeed: "180 km/h",
      acceleration: "9.8s (0-100 km/h)",
      transmission: "CVT",
      drivetrain: "FWD",
      fuelCapacity: "50L",
      fuelEconomyCity: "7.1L/100km",
      fuelEconomyHighway: "5.3L/100km",
      fuelEconomyCombined: "6.3L/100km",
      emissionsRating: "EURO6",
      airbags: "8",
      abs: "Yes",
      tractionControl: "Yes",
      laneAssist: "Yes",
      adaptiveCruiseControl: "Yes",
      blindSpotMonitor: "Yes",
      rearViewCamera: "Yes",
      parkingSensors: "Front & Rear",
      autonomousDrivingLevel: "Level 2",
      seats: "5",
      seatMaterial: "Fabric",
      heatedSeats: "Front Only",
      ventilatedSeats: "No",
      sunroof: "No",
      climateControl: "Dual-zone",
      infotainmentSystem: "Toyota Entune",
      touchscreenSize: "8-inch",
      wirelessCharging: "Yes",
      appleCarPlay: "Yes",
      androidAuto: "Yes",
      wheels: "Alloy",
      wheelSize: "16-inch",
      ledHeadlights: "Yes",
      fogLights: "Yes",
      tintedWindows: "No",
      cargoCapacity: "371L",
      towingCapacity: "N/A",
      roofRack: "No",
      trailerHitch: "No",
      bluetooth: "Yes",
      wifiHotspot: "Yes",
      usbPorts: "4",
      speakerSystem: "6-speaker",
      agency: "Toyota Agency",
      listedDate: "2023-01-15",
      images: "corolla_images.jpg",
      videoURL: "https://example.com/video",
      qrCode: "qr_code1.png"
    },
    {
      id: 2,
      name: "Honda Civic",
      model: "Hatchback",
      year: 2021,
      price: "23,500 $",
      color: "Blue",
      body: "Hatchback",
      engineType: "1.5L Turbo 4-Cylinder",
      horsepower: "180 hp",
      torque: "177 lb-ft",
      topSpeed: "200 km/h",
      acceleration: "7.9s (0-100 km/h)",
      transmission: "6-speed Manual",
      drivetrain: "FWD",
      fuelCapacity: "46.9L",
      fuelEconomyCity: "7.7L/100km",
      fuelEconomyHighway: "6.0L/100km",
      fuelEconomyCombined: "6.9L/100km",
      emissionsRating: "EURO6",
      airbags: "10",
      abs: "Yes",
      tractionControl: "Yes",
      laneAssist: "Yes",
      adaptiveCruiseControl: "Yes",
      blindSpotMonitor: "Yes",
      rearViewCamera: "Yes",
      parkingSensors: "Rear Only",
      autonomousDrivingLevel: "Level 1",
      seats: "5",
      seatMaterial: "Leather",
      heatedSeats: "Front & Rear",
      ventilatedSeats: "Front Only",
      sunroof: "Yes",
      climateControl: "Tri-zone",
      infotainmentSystem: "Honda Connect",
      touchscreenSize: "9-inch",
      wirelessCharging: "Yes",
      appleCarPlay: "Yes",
      androidAuto: "Yes",
      wheels: "Alloy",
      wheelSize: "17-inch",
      ledHeadlights: "Yes",
      fogLights: "Yes",
      tintedWindows: "Yes",
      cargoCapacity: "428L",
      towingCapacity: "N/A",
      roofRack: "Optional",
      trailerHitch: "No",
      bluetooth: "Yes",
      wifiHotspot: "Yes",
      usbPorts: "6",
      speakerSystem: "8-speaker Premium",
      agency: "Honda Services",
      listedDate: "2023-02-20",
      images: "civic_images.jpg",
      videoURL: "https://example.com/video2",
      qrCode: "qr_code2.png"
    }
  ]);

  // Function to handle edit action
  const handleEdit = (id) => {
    console.log(`Edit car with ID: ${id}`);
    // Add navigation or edit modal logic here
  };

  // Function to handle delete action
  const handleDelete = (id) => {
    console.log(`Delete car with ID: ${id}`);
    setCars(cars.filter(car => car.id !== id));
  };

  return (
    <div className="car-information-container">
      <NavBarAgency />
      
      <div className="main-content">
        <div className="car-table-container">
          <table className="car-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Model</th>
                <th>Year</th>
                <th>Price</th>
                <th>Color</th>
                <th>Body</th>
                <th>Engine Type</th>
                <th>Horsepower</th>
                <th>Torque</th>
                <th>Top Speed</th>
                <th>Acceleration</th>
                <th>Transmission</th>
                <th>Drivetrain</th>
                <th>Fuel Capacity</th>
                <th>Fuel Economy City</th>
                <th>Fuel Economy Highway</th>
                <th>Fuel Economy Combined</th>
                <th>Emissions Rating</th>
                <th>Airbags</th>
                <th>ABS</th>
                <th>Traction Control</th>
                <th>Lane Assist</th>
                <th>Adaptive Cruise Control</th>
                <th>Blind Spot Monitor</th>
                <th>Rear View Camera</th>
                <th>Parking Sensors</th>
                <th>Autonomous Driving Level</th>
                <th>Seats</th>
                <th>Seat Material</th>
                <th>Heated Seats</th>
                <th>Ventilated Seats</th>
                <th>Sunroof</th>
                <th>Climate Control</th>
                <th>Infotainment System</th>
                <th>Touchscreen Size</th>
                <th>Wireless Charging</th>
                <th>Apple Car Play</th>
                <th>Android Auto</th>
                <th>Wheels</th>
                <th>Wheel Size</th>
                <th>LED Headlights</th>
                <th>Fog Lights</th>
                <th>Tinted Windows</th>
                <th>Cargo Capacity</th>
                <th>Towing Capacity</th>
                <th>Roof Rack</th>
                <th>Trailer Hitch</th>
                <th>Bluetooth</th>
                <th>Wifi Hotspot</th>
                <th>USB Ports</th>
                <th>Speaker System</th>
                <th>Agency</th>
                <th>Listed Date</th>
                <th>Images</th>
                <th>Video URL</th>
                <th>QR Code</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cars.map(car => (
                <tr key={car.id}>
                  <td>{car.name}</td>
                  <td>{car.model}</td>
                  <td>{car.year}</td>
                  <td>{car.price}</td>
                  <td>{car.color}</td>
                  <td>{car.body}</td>
                  <td>{car.engineType}</td>
                  <td>{car.horsepower}</td>
                  <td>{car.torque}</td>
                  <td>{car.topSpeed}</td>
                  <td>{car.acceleration}</td>
                  <td>{car.transmission}</td>
                  <td>{car.drivetrain}</td>
                  <td>{car.fuelCapacity}</td>
                  <td>{car.fuelEconomyCity}</td>
                  <td>{car.fuelEconomyHighway}</td>
                  <td>{car.fuelEconomyCombined}</td>
                  <td>{car.emissionsRating}</td>
                  <td>{car.airbags}</td>
                  <td>{car.abs}</td>
                  <td>{car.tractionControl}</td>
                  <td>{car.laneAssist}</td>
                  <td>{car.adaptiveCruiseControl}</td>
                  <td>{car.blindSpotMonitor}</td>
                  <td>{car.rearViewCamera}</td>
                  <td>{car.parkingSensors}</td>
                  <td>{car.autonomousDrivingLevel}</td>
                  <td>{car.seats}</td>
                  <td>{car.seatMaterial}</td>
                  <td>{car.heatedSeats}</td>
                  <td>{car.ventilatedSeats}</td>
                  <td>{car.sunroof}</td>
                  <td>{car.climateControl}</td>
                  <td>{car.infotainmentSystem}</td>
                  <td>{car.touchscreenSize}</td>
                  <td>{car.wirelessCharging}</td>
                  <td>{car.appleCarPlay}</td>
                  <td>{car.androidAuto}</td>
                  <td>{car.wheels}</td>
                  <td>{car.wheelSize}</td>
                  <td>{car.ledHeadlights}</td>
                  <td>{car.fogLights}</td>
                  <td>{car.tintedWindows}</td>
                  <td>{car.cargoCapacity}</td>
                  <td>{car.towingCapacity}</td>
                  <td>{car.roofRack}</td>
                  <td>{car.trailerHitch}</td>
                  <td>{car.bluetooth}</td>
                  <td>{car.wifiHotspot}</td>
                  <td>{car.usbPorts}</td>
                  <td>{car.speakerSystem}</td>
                  <td>{car.agency}</td>
                  <td>{car.listedDate}</td>
                  <td>{car.images}</td>
                  <td>{car.videoURL}</td>
                  <td>{car.qrCode}</td>
                  <td>
                    <div className="action-buttons">
                      <button className="edit-btn" onClick={() => handleEdit(car.id)}>
                        Edit
                      </button>
                      <button className="delete-btn" onClick={() => handleDelete(car.id)}>
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default CarInformation;