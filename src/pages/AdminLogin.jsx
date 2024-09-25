// src/pages/AdminLogin.jsx

import React, { useState } from 'react';
import { TextField, Button, Typography, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../components/AuthContext'; // Adjust path as necessary

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth(); // Get login function from context

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    const response = await fetch('https://namami-infotech.com/AmritGi/login.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();

    if (response.ok) {
      setSuccessMessage(data.message);
      localStorage.setItem('admin_id', data.admin_id);
      login(data.admin_id); // Set authentication state
      navigate('/admin-dashboard');
    } else {
      setErrorMessage(data.error);
    }
  };

  return (
    <Container maxWidth="xs" style={{ marginTop: '150px', minHeight: "360px" }}>
      <Typography variant="h4" align="center">Admin Login</Typography>
      <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', marginTop: '20px' }}>
        <TextField
          label="Username"
          variant="outlined"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          style={{ marginBottom: '16px' }}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ marginBottom: '16px' }}
        />
        <Button variant="contained" style={{ backgroundColor: "#a65320" }} type="submit">Login</Button>
      </form>
      {errorMessage && <Typography color="error" align="center">{errorMessage}</Typography>}
      {successMessage && <Typography color="primary" align="center">{successMessage}</Typography>}
    </Container>
  );
};

export default AdminLogin;
