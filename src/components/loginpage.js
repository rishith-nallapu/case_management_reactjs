// Login.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './loginpage.css';
import image from './auction.png';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (data.success) {
        // Redirect or perform actions upon successful login
        window.location.href = '/navbar'; // Replace with your actual route
      } else {
        setError(data.message);
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <div>
      <img src={image} alt="#" className="img" />

      <h2>Login page</h2>
      <br />
      <form>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <br />
      <Link to="/signup">Don't have an account? Sign Up</Link>
    </div>
  );
}

export default Login;
