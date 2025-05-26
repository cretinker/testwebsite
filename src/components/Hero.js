import React from 'react';
import { Box, Typography, Button, Container, useTheme } from '@mui/material';
import { ArrowForward as ArrowForwardIcon } from '@mui/icons-material';

const Hero = () => {
  const theme = useTheme();
  
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        mt: { xs: 0, md: 2 },
        mb: { xs: 4, md: 8 },
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            gap: { xs: 6, md: 8 },
            background: 'linear-gradient(135deg, #FFFFFF 0%, #F2F2F7 100%)',
            borderRadius: 4,
            boxShadow: theme.shadows[2],
            overflow: 'hidden',
            p: { xs: 4, md: 0 },
          }}
        >
          <Box sx={{ flex: 1, p: { xs: 0, md: 6 } }}>
            <Typography
              variant="h2"
              component="h1"
              sx={{
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                fontWeight: 700,
                mb: 3,
                color: 'text.primary',
                lineHeight: 1.2,
              }}
            >
              The Perfect Morning Start
            </Typography>
            <Typography
              variant="h5"
              sx={{
                mb: 4,
                color: 'text.secondary',
                lineHeight: 1.6,
                fontSize: { xs: '1.1rem', md: '1.25rem' },
              }}
            >
              Discover the incredible combination of corned beef hash and coffee - a breakfast tradition that deserves a revival.
            </Typography>
            <Button
              variant="contained"
              size="large"
              endIcon={<ArrowForwardIcon />}
              sx={{
                px: 4,
                py: 1.5,
                fontSize: '1rem',
              }}
              onClick={() => document.getElementById('blog-content').scrollIntoView({ behavior: 'smooth' })}
            >
              Read the Full Story
            </Button>
          </Box>
          <Box
            sx={{
              flex: 1,
              alignSelf: 'stretch',
              height: { xs: 300, md: 500 },
              position: 'relative',
              display: { xs: 'block', md: 'flex' },
              ml: { xs: 0, md: 'auto' },
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1525351484163-7529414344d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80"
              alt="Corned Beef Hash with Coffee"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
