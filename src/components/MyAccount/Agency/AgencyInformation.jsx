import React, { useState } from 'react';
import './AgencyInformation.css';
import NavBarAgency from './NavBarAgency';

const AgencyInformation = () => {
  const [agencies, setAgencies] = useState([
    {
      id: 1,
      fullName: "Toyota Agence",
      avatar: "/placeholder-avatar.png",
      phoneNumber: "+33 1 23 45 67 89",
      address: "123 Rue de Paris, 75001 Paris",
      taxNumber: "FR123456789",
      companyType: "Concessionnaire"
    },
    {
      id: 2,
      fullName: "Honda Services",
      avatar: "/placeholder-avatar.png",
      phoneNumber: "+33 1 98 76 54 32",
      address: "456 Avenue Victor Hugo, 75016 Paris",
      taxNumber: "FR987654321",
      companyType: "Garage indépendant"
    }
  ]);

  const handleSend = (id) => {
    console.log("Envoyer à l'agence ID:", id);
  };

  const handleDelete = (id) => {
    console.log("Supprimer l'agence ID:", id);
    setAgencies(agencies.filter(agency => agency.id !== id));
  };

  const handleCreateAgency = () => {
    console.log("Créer une nouvelle agence");
    // Logique pour créer une nouvelle agence
  };

  return (
    <div className="app-container">
      <NavBarAgency />

      <div className="main-content">
        <div className="table-header">
          <button className="create-agency-btn" onClick={handleCreateAgency}>
            Create Agency
          </button>
        </div>
        
        <div className="agency-table-container">
          <table className="agency-table">
            <thead>
              <tr>
                <th>Agency Full Name</th>
                <th>Agency Avatar</th>
                <th>Agency Phone Number</th>
                <th>Agency Address</th>
                <th>Agency Tax Number</th>
                <th>Agency Company Type</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {agencies.map(agency => (
                <tr key={agency.id}>
                  <td>{agency.fullName}</td>
                  <td>
                    <div className="avatar-cell">
                      <img src={agency.avatar} alt="Agency Avatar" />
                    </div>
                  </td>
                  <td>{agency.phoneNumber}</td>
                  <td>{agency.address}</td>
                  <td>{agency.taxNumber}</td>
                  <td>{agency.companyType}</td>
                  <td>
                    <div className="action-buttons">
                      <button className="send-btn" onClick={() => handleSend(agency.id)}>
                        Send
                      </button>
                      <button className="delete-btn" onClick={() => handleDelete(agency.id)}>
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              <tr className="empty-row">
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AgencyInformation;