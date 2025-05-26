import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Box, Container } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BlogPost from './components/BlogPost';
import Footer from './components/Footer';

// Create a custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#007AFF',
      light: '#4DABF7',
      dark: '#0056b3',
    },
    secondary: {
      main: '#5856D6',
      light: '#7D7CE6',
      dark: '#3A389A',
    },
    background: {
      default: '#F2F2F7',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#1D1D1F',
      secondary: '#666666',
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      'Oxygen',
      'Ubuntu',
      'Cantarell',
      'sans-serif',
    ].join(','),
    h1: {
      fontWeight: 600,
    },
    h2: {
      fontWeight: 600,
    },
    h3: {
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          textTransform: 'none',
          fontWeight: 500,
          padding: '8px 24px',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 16,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: '0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08)',
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Navbar />
          
          <Box component="main" sx={{ flexGrow: 1, pt: 8 }}>
            <Routes>
              <Route path="/" element={
                <Box>
                  <Hero />
                  <BlogPost />
                </Box>
              } />
              <Route path="/recipes" element={
                <Container maxWidth="lg" sx={{ py: 8 }}>
                  <h1>Recipes Page</h1>
                  <p>Coming soon...</p>
                </Container>
              } />
              <Route path="/about" element={
                <Container maxWidth="lg" sx={{ py: 8 }}>
                  <h1>About Page</h1>
                  <p>Coming soon...</p>
                </Container>
              } />
            </Routes>
          </Box>
          
          <Footer />
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
