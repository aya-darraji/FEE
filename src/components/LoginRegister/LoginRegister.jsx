import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LoginRegister.css';
import loginImage from '../../assets/images/login-bg.jpg';

const LoginRegister = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }
    
    setLoading(true);
    setError('');
    
    try {
      // Replace with your actual API call
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }
      
      // Handle successful login
      localStorage.setItem('token', data.token);
      if (rememberMe) {
        localStorage.setItem('email', email);
      }
      
      // Redirect to dashboard or home page
      window.location.href = '/dashboard';
      
    } catch (err) {
      setError(err.message || 'Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };
  
  return (
<div className="login-container" style={{ backgroundImage: `url(${loginImage})` }}>
  <div className="login-form-wrapper">
        <div className="login-icon">
          <div className="user-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="8" r="5" />
              <path d="M20 21a8 8 0 10-16 0" />
            </svg>
          </div>
        </div>
        
        <h1 className="login-title">CUSTOMER LOGIN</h1>
        
        <form onSubmit={handleSubmit} className="login-form">
          {error && <div className="error-message">{error}</div>}
          
          <div className="input-group">
            <span className="input-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 3H2v18h20V3zm-2 16H4V5h16v14zm-3-8v-4H7v4h10z" />
              </svg>
            </span>
            <input
              type="email"
              placeholder="Email ID"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          <div className="input-group">
            <span className="input-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0110 0v4" />
              </svg>
            </span>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          
          <div className="form-options">
            <div className="remember-me">
              <input
                type="checkbox"
                id="remember"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <label htmlFor="remember">Remember me</label>
            </div>
            
            <Link to="/forgot-password" className="forgot-password">
              Forgot Password?
            </Link>
          </div>
          
          <button type="submit" className="login-button" disabled={loading}>
            {loading ? 'LOGGING IN...' : 'LOGIN'}
          </button>
          
          <div className="register-link">
            Don't have an account? <Link to="/register">Register now</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginRegister;