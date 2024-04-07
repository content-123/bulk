

// Login.js

import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const Login = () => {
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const navigate= useNavigate();

 const navigateToRegister=()=> {
    navigate('/register');
  }



  const handleLogin = async () => {
    try {
      const response = await axios.post('https://bullkallback-2.onrender.com/login', {
        username,
        password
      });
      alert("Logged in successfully")
      localStorage.setItem('token', response.data.token);
      window.location.href = '/send-email';
    } catch (error) {
      setError('Invalid username or password');
    }
  };

  return (
    <div>
      <h2 >Welcome to bulk email</h2>
      <div>{error && <p>{error}</p>}</div>
      <input className="textbox"
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br /><br />
      <input className="textbox"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br /><br />
      <button className="button"  onClick={handleLogin}>Login</button><br/>
       New user click on register
      <button className="button" onClick={navigateToRegister} > Register</button>
      
      
    </div>
  );
};

export default Login;
