import React from 'react';
import { Container, Typography, Box, Grid, Paper, Button, Divider, useTheme, Stack, Chip } from '@mui/material';
import { ArrowForward as ArrowForwardIcon, Coffee as CoffeeIcon, Restaurant as RestaurantIcon, Info as InfoIcon } from '@mui/icons-material';

const BlogPost = () => {
  const theme = useTheme();
  
  return (
    <Box id="blog-content" sx={{ py: 6 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          component="h2"
          sx={{
            fontWeight: 700,
            mb: 5,
            textAlign: 'center',
            color: theme.palette.text.primary,
          }}
        >
          The Perfect Morning Start: Corned Beef Hash and Coffee
        </Typography>
        
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Paper
              elevation={2}
              sx={{
                p: { xs: 3, md: 5 },
                borderRadius: 3,
                overflow: 'hidden',
              }}
            >
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                mb: 3,
                gap: 2,
              }}>
                <CoffeeIcon color="primary" sx={{ fontSize: 28 }} />
                <Typography variant="h4" sx={{ fontWeight: 600 }}>
                  Introduction
                </Typography>
              </Box>
              
              <Typography paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 4 }}>
                There's something magical about the combination of corned beef hash and a steaming cup of coffee in the morning. This classic breakfast pairing has been a staple in many households for generations, yet it often gets overlooked in favor of more modern breakfast options.
              </Typography>
              
              <Divider sx={{ my: 4 }} />
              
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                mb: 3,
                gap: 2,
              }}>
                <RestaurantIcon color="primary" sx={{ fontSize: 28 }} />
                <Typography variant="h4" sx={{ fontWeight: 600 }}>
                  The History
                </Typography>
              </Box>
              
              <Typography paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 4 }}>
                Corned beef hash has its roots in Irish-American cuisine, where it was traditionally made with leftover corned beef from St. Patrick's Day celebrations. The dish gained popularity during the Great Depression as a way to stretch expensive meat into multiple meals.
              </Typography>
              
              <Typography paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 4 }}>
                The combination with coffee became popular in diners across America in the mid-20th century. The rich, bitter notes of coffee perfectly complement the savory, salty flavors of corned beef hash, creating a balanced breakfast experience.
              </Typography>
              
              <Divider sx={{ my: 4 }} />
              
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                mb: 3,
                gap: 2,
              }}>
                <CoffeeIcon color="primary" sx={{ fontSize: 28 }} />
                <Typography variant="h4" sx={{ fontWeight: 600 }}>
                  The Perfect Pairing
                </Typography>
              </Box>
              
              <Typography paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 4 }}>
                The rich, savory flavors of corned beef hash complement the bitterness of coffee perfectly. The combination creates a balanced breakfast that energizes you for the day ahead. The fat content in the hash helps to smooth out any acidity in the coffee, while the coffee cuts through the richness of the hash.
              </Typography>
              
              <Typography paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 4 }}>
                For the best experience, pair a medium-dark roast coffee with a traditional corned beef hash that includes potatoes, onions, and bell peppers. The slight caramelization on the hash adds a sweetness that works wonderfully with the coffee's natural bitterness.
              </Typography>
              
              <Box sx={{ mt: 6, textAlign: 'center' }}>
                <Button
                  variant="contained"
                  size="large"
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontSize: '1rem',
                  }}
                >
                  Try the Recipe
                </Button>
              </Box>
            </Paper>
          </Grid>
          
          <Grid item xs={12}>
            <Paper
              elevation={2}
              sx={{
                p: { xs: 3, md: 4 },
                borderRadius: 3,
                mt: 4,
              }}
            >
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                mb: 3,
                gap: 2,
              }}>
                <InfoIcon color="primary" sx={{ fontSize: 28 }} />
                <Typography variant="h5" sx={{ fontWeight: 600, color: theme.palette.primary.main }}>
                  Quick Facts
                </Typography>
              </Box>
              
              <Stack 
                direction={{ xs: 'column', sm: 'row' }} 
                spacing={3} 
                sx={{ 
                  mb: 4,
                  flexWrap: 'wrap',
                  justifyContent: 'space-around',
                  '& > div': { 
                    flex: { sm: '1 1 auto' },
                    minWidth: { sm: '200px' },
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 1
                  }
                }}
              >
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                    Nutritional Benefits
                  </Typography>
                  <Chip label="Rich in protein and iron" sx={{ mb: 1 }} />
                  <Chip label="Perfect for meal prep" />
                </Box>
                
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                    Cooking Benefits
                  </Typography>
                  <Chip label="Great for using leftovers" sx={{ mb: 1 }} />
                  <Chip label="Customizable with different vegetables" />
                </Box>
                
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                    Best Coffee Pairings
                  </Typography>
                  <Chip label="Medium-dark roast" sx={{ mb: 1 }} />
                  <Chip label="French press method" sx={{ mb: 1 }} />
                  <Chip label="Served black or with minimal cream" />
                </Box>
              </Stack>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default BlogPost;
