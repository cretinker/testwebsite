import React from 'react';
import { Container, Box, Typography, Grid, Link, Divider, useTheme } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { Facebook, Twitter, Instagram } from '@mui/icons-material';

const Footer = () => {
  const theme = useTheme();
  const currentYear = new Date().getFullYear();
  
  return (
    <Box
      component="footer"
      sx={{
        mt: 'auto',
        py: 6,
        bgcolor: theme.palette.background.paper,
        borderTop: 1,
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              Breakfast Blog
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Your go-to source for classic breakfast recipes and morning inspiration.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, mt: 3 }}>
              <Facebook color="primary" />
              <Twitter color="primary" />
              <Instagram color="primary" />
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              Quick Links
            </Typography>
            <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
              <Box component="li" sx={{ mb: 1.5 }}>
                <Link component={RouterLink} to="/" color="inherit" underline="hover" sx={{ fontSize: '1rem' }}>
                  Home
                </Link>
              </Box>
              <Box component="li" sx={{ mb: 1.5 }}>
                <Link component={RouterLink} to="/recipes" color="inherit" underline="hover" sx={{ fontSize: '1rem' }}>
                  Recipes
                </Link>
              </Box>
              <Box component="li" sx={{ mb: 1.5 }}>
                <Link component={RouterLink} to="/about" color="inherit" underline="hover" sx={{ fontSize: '1rem' }}>
                  About
                </Link>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              Contact
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
              Email: contact@breakfastblog.com
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
              Phone: (555) 123-4567
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Address: 123 Breakfast Lane, Foodie City
            </Typography>
          </Grid>
        </Grid>
        
        <Divider sx={{ my: 4 }} />
        
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="body2" color="text.secondary">
            © {currentYear} Breakfast Blog. All rights reserved.
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            Designed with <span style={{ color: theme.palette.primary.main }}>♥</span> for breakfast lovers
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
