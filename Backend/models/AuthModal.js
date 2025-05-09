import React, { useState } from 'react';
import axios from 'axios';

const AuthModal = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('/api/admin/login', { username, password });
      if (data.success) {
        localStorage.setItem('isLoggedIn', 'true');
        onLogin();
      }
    } catch (err) {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="auth-modal">
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        {error && <p className="error">{error}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default AuthModal;