import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box, Container } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar position="fixed" sx={{ backgroundColor: 'white', color: 'text.primary' }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Typography 
            variant="h6" 
            component={Link} 
            to="/" 
            sx={{ 
              flexGrow: 1,
              textDecoration: 'none',
              color: 'inherit',
              fontWeight: 600,
              letterSpacing: '-0.5px'
            }}
          >
            Breakfast Blog
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button 
              color="primary" 
              component={Link} 
              to="/"
              sx={{ fontWeight: 500 }}
            >
              Home
            </Button>
            <Button 
              color="primary" 
              component={Link} 
              to="/recipes"
              sx={{ fontWeight: 500 }}
            >
              Recipes
            </Button>
            <Button 
              color="primary" 
              component={Link} 
              to="/about"
              sx={{ fontWeight: 500 }}
            >
              About
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
