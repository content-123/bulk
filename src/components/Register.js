// Register.js

import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async () => {
    try {
      const response = await axios.post('https://capstone-3-jcg9.onrender.com/register', {
        email,
        password,
      });
      alert("User registered successfully")
      localStorage.setItem('token', response.data.token);
      window.location.href = '/';
    } catch (error) {
      setError('Registration failed');
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <div>{error && <p>{error}</p>}</div>
      <input
        type="text"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br /><br />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br /><br />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Register;
