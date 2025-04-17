import React from 'react';
import NavBarAgency from './NavBarAgency';
import './MangerStocke.css';

function MangerStocke() {
  // Données de démonstration
  const stockData = [
    {
      id: 1,
      name: 'Toyota Corolla',
      model: 'Corolla',
      year: 2022,
      price: '$25,000',
      color: 'Red',
      status: 'Available',
      listedDate: '2023-01-15',
      quantity: 5
    },
    {
      id: 2,
      name: 'Honda Civic',
      model: 'Civic',
      year: 2021,
      price: '$23,500',
      color: 'Blue',
      status: 'Available',
      listedDate: '2023-02-20',
      quantity: 3
    }
  ];

  return (
    <div className="app-container">
      <NavBarAgency activeItem="Dashboard" />
      
      <main className="main-content">
        


        <div className="table-section">
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Model</th>
                  <th>Year</th>
                  <th>Price</th>
                  <th>Color</th>
                  <th>Status</th>
                  <th>Listed Date</th>
                  <th>Quantity</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {stockData.map((item) => (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.model}</td>
                    <td>{item.year}</td>
                    <td>{item.price}</td>
                    <td>
                      <span className="color-badge" style={{ backgroundColor: item.color.toLowerCase() }}></span>
                      {item.color}
                    </td>
                    <td>
                      <span className={`status-badge ${item.status === 'Available' ? 'available' : 'sold-out'}`}>
                        {item.status}
                      </span>
                    </td>
                    <td>{item.listedDate}</td>
                    <td>{item.quantity}</td>
                    <td>
                      <button className="edit-btn">Edit</button>
                      <button className="delete-btn">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      
      </main>
    </div>
  );
}

export default MangerStocke;