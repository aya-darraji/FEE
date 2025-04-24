import React, { useState } from 'react';
import './Register.css';
import Navbar from '../modules/Navbar';
import Footer from '../modules/Footer';

const Register = () => {
  const [registerType, setRegisterType] = useState('user');

  return (
    <div className="register-page">
      <Navbar />
      
      <div className="register-container">
        <div className="register-form">
          <div className="user-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
          </div>
          
          <h2>CREATE ACCOUNT</h2>
          <input
            type='text'
            placeholder='Full Name'
            className='p-2 w-100 rounded-lg shadow-md mb-2 mt-3 input-field'
          />

          <input
            type='email'
            placeholder='Email Address'
            className='p-2 w-100 rounded-lg shadow-md mb-2 input-field'
          />
           <input
            type='email'
            placeholder='Email Address'
            className='p-2 w-100 rounded-lg shadow-md mb-2 input-field'
          />
           <input
            type='password'
            placeholder='Password'
            className='p-2 w-100 rounded-lg shadow-md mb-2 input-field'
          />
           <input
            type='password'
            placeholder='Confirm Password'
            className='p-2 w-100 rounded-lg shadow-md mb-2 input-field'
          />  
            <input
          type='tel'
          placeholder='Phone Number'
          className='p-2 w-100 rounded-lg shadow-md mb-2 input-field'
        />
          <input
          type='text'
          placeholder='Address'
          className='p-2 w-100 rounded-lg shadow-md mb-2 input-field'
        />

        
          <div className="register-type">
            <p>Register as:</p>
            <div className="register-options">
              <div className="option">
                <input 
                  type="radio" 
                  id="user" 
                  name="registerType" 
                  value="user"
                  checked={registerType === 'user'}
                  onChange={() => setRegisterType('user')}
                />
                <label htmlFor="user">User</label>
              </div>
              <div className="option">
                <input 
                  type="radio" 
                  id="agent" 
                  name="registerType" 
                  value="agent"
                  checked={registerType === 'agent'}
                  onChange={() => setRegisterType('agent')}
                />
                <label htmlFor="agent">Agent</label>
              </div>
            </div>
          </div>
          
          <button className="register-button">REGISTER</button>
          
          <div className="login-link">
            Already have an account? <a href="/login">Login now</a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Register;