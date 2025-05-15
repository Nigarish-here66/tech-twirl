import React, { useState } from 'react';
import axios from 'axios';

/**
 * AuthModal Component
 * Props:
 *  - onLogin (function): callback invoked after successful login
 */

const AuthModal = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Handle login form submission
  const handleLogin = async (e) => {
    e.preventDefault();
    if (!username || !password) return;

    try {
      const response = await axios.post('http://localhost:5000/api/admin/login', {
        username,
        password
      });

      // On successful login
      if (response.data.success) {
        // Store login status and credentials in localStorage (used in request interceptors)
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('adminUser', username);
        localStorage.setItem('adminPass', password);

        onLogin(); 
      } else {
        setError('Login failed. Invalid credentials.');
      }
    } catch (error) {
      console.error('Login error:', error);
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <div style={styles.modalBackdrop}>
      <form onSubmit={handleLogin} style={styles.formContainer}>
        <h2 style={styles.title}>Admin Login</h2>

        {/* Show error if exists */}
        {error && <p style={styles.errorText}>{error}</p>}

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          style={styles.input}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={styles.input}
        />

        <button type="submit" style={styles.button}>
          Login
        </button>
      </form>
    </div>
  );
};

// Inline styles for modal and form
const styles = {
  modalBackdrop: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
  },
  formContainer: {
    backgroundColor: '#fff',
    borderRadius: '12px',
    padding: '30px 40px',
    width: '90%',
    maxWidth: '400px',
    boxShadow: '0 5px 15px rgba(0,0,0,0.3)',
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    textAlign: 'center',
  },
  title: {
    marginBottom: '10px',
    fontSize: '24px',
    fontWeight: '600',
    color: '#333',
  },
  input: {
    padding: '12px 15px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    fontSize: '16px',
  },
  button: {
    padding: '12px',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: '#002366',
    color: '#fff',
    fontSize: '16px',
    cursor: 'pointer',
  },
  errorText: {
    color: '#e53e3e',
    fontSize: '14px',
    margin: '0',
  },
};

export default AuthModal;
