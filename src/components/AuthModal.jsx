import React, { useState } from 'react';

const AuthModal = ({ onLogin }) => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleAuth = (e) => {
    e.preventDefault();
    if (!username || !password) return;

    const storedUser = JSON.parse(localStorage.getItem('authUser'));

    if (isRegistering) {
      if (storedUser) {
        alert('Admin account already exists. Please log in.');
        setIsRegistering(false);
        return;
      }

      localStorage.setItem('authUser', JSON.stringify({ username, password }));
      alert('Admin account created successfully!');
      setIsRegistering(false);
    } else {
      if (storedUser?.username === username && storedUser?.password === password) {
        localStorage.setItem('isLoggedIn', 'true');
        onLogin();
      } else {
        alert('Invalid credentials');
      }
    }
  };

  return (
    <div style={styles.modalBackdrop}>
      <form onSubmit={handleAuth} style={styles.formContainer}>
        <h2 style={styles.title}>{isRegistering ? 'Create Admin Account' : 'Login'}</h2>
        <input
          type="text"
          placeholder="User Name"
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
          {isRegistering ? 'Register' : 'Login'}
        </button>
        <p
          style={styles.toggleText}
          onClick={() => setIsRegistering(!isRegistering)}
        >
          {isRegistering
            ? 'Already have an account? Login'
            : 'Create a new admin account'}
        </p>
      </form>
    </div>
  );
};

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
  toggleText: {
    marginTop: '10px',
    color: '#0066cc',
    fontSize: '14px',
    cursor: 'pointer',
    textDecoration: 'underline',
  },
};

export default AuthModal;
