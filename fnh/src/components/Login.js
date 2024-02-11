import React, { useState } from 'react';
import { Button, TextField, Typography, Paper, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Check credentials
    if (username === 'admin' && password === 'Suyash@fnh') {
      // If credentials are correct, set isLoggedIn to true
      setIsLoggedIn(true);
    } else {
      // If credentials are incorrect, show an error message
      setError('Invalid username or password');
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 4,
      }}
    >
      <Paper
        sx={{
          padding: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          maxWidth: '300px',
        }}
      >
        <Typography variant="h5">Login</Typography>
        <TextField
          label="Username"
          margin="normal"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          type="password"
          label="Password"
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <Typography color="error">{error}</Typography>}
        <Button variant="contained" onClick={handleLogin}>
          Login
        </Button>
        {isLoggedIn && (
          <Link to="/appointments">
            <Button variant="contained">Go to Appointments</Button>
          </Link>
        )}
      </Paper>
    </Box>
  );
};

export default Login;
