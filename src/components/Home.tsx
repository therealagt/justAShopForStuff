import React from 'react';
import { Box, Card, CardContent, TextField, Button, Typography, Link } from '@mui/material';

const Home: React.FC = () => {
  return (
    <Box sx={{ height: 'calc(100vh - 64px)', position: 'relative' }}>
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: 'url(https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1752)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundColor: '#f0f0f0'
        }}
      />
      
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          zIndex: 1
        }}
      />
      
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          right: '5%',
          transform: 'translateY(-50%)',
          zIndex: 2,
          minWidth: '400px'
        }}
      >
        <Card sx={{ 
          maxWidth: 400, 
          width: '100%', 
          p: 2,
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
        }}>
          <CardContent>
            <Typography variant="h4" component="h1" gutterBottom align="center">
              Welcome Back!
            </Typography>
            <Typography variant="body2" color="text.secondary" align="center" sx={{ mb: 3 }}>
              Sign in to Just A Shop
            </Typography>
            <Box component="form" sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Box sx={{ textAlign: 'center' }}>
                <Link href="#" variant="body2">
                  Don't have an account? Sign Up
                </Link>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default Home;
