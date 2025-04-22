import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css';
// import registerImage from '../../assets/images/login-bg.jpg'; // Removed image import

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    address: '',
    role: 'user',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (
      !formData.fullName ||
      !formData.email ||
      !formData.password ||
      !formData.phone ||
      !formData.address
    ) {
      setError('Please fill in all required fields');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }

    setLoading(true);
    setError('');

    try {
      // Add timestamps
      const userData = {
        ...formData,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };

      delete userData.confirmPassword; // Remove confirm password as it's not needed in backend

      // Replace with your actual API call
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Registration failed');
      }

      // Handle successful registration
      setSuccess('Registration successful! Redirecting to login...');

      // Redirect to login page after 2 seconds
      setTimeout(() => {
        window.location.href = '/login';
      }, 2000);
    } catch (err) {
      setError(err.message || 'Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-container">
      <div className="register-form-wrapper">
        <div className="register-icon">
          <div className="user-icon">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="8" r="5" />
              <path d="M20 21a8 8 0 10-16 0" />
            </svg>
          </div>
        </div>

        <h1 className="register-title">CREATE ACCOUNT</h1>

        <form onSubmit={handleSubmit} className="register-form">
          {error && <div className="error-message">{error}</div>}
          {success && <div className="success-message">{success}</div>}

          <div className="input-group">
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <input
              type="text"
              id="address"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>

          <div className="role-selector">
            <label>Register as:</label>
            <div className="role-options">
              <div
                className={`role-option ${
                  formData.role === 'user' ? 'active' : ''
                }`}
              >
                <input
                  type="radio"
                  name="role"
                  id="role-user"
                  value="user"
                  checked={formData.role === 'user'}
                  onChange={handleChange}
                />
                <label htmlFor="role-user">User</label>
              </div>

              <div
                className={`role-option ${
                  formData.role === 'agency' ? 'active' : ''
                }`}
              >
                <input
                  type="radio"
                  name="role"
                  id="role-agency"
                  value="agency"
                  checked={formData.role === 'agency'}
                  onChange={handleChange}
                />
                <label htmlFor="role-agency">Agency</label>
              </div>
            </div>
          </div>

          <button type="submit" className="register-button" disabled={loading}>
            {loading ? 'REGISTERING...' : 'REGISTER'}
          </button>

          <div className="login-link">
            Already have an account? <Link to="/login">Login now</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;