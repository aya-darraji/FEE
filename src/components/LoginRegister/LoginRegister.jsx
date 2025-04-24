import React, { useState } from 'react';
import './LoginRegister.css';
import Navbar from '../modules/Navbar';
import Footer from '../modules/Footer';

const LoginRegister = () => {
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <div className="login-page">
      <Navbar />
      
      <div className="login-container">
        <div className="login-form">
          <div className="user-icon-container">
            <div className="user-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </div>
          </div>
          
          <h2>LOGIN</h2>
          
          <input
            type='text'
            placeholder='Username'
            className='p-2 w-100 rounded-lg shadow-md mb-2 mt-3 input-field'
          />

          <input
            type='password'
            placeholder='Password'
            className='p-2 w-100 rounded-lg shadow-md mb-4 input-field'
          />
          
          <div className="form-check">
            <input 
              type="checkbox" 
              className="form-check-input" 
              id="rememberMe" 
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)} 
            />
            <label className="form-check-label" htmlFor="rememberMe">
              Remember me
            </label>
            <span className="forgot-password">Forgot password?</span>
          </div>
          
          <button className="login-button">LOGIN</button>
          
          <div className="register-link">
            Don't have an account? <a href="/register">Register now</a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LoginRegister;