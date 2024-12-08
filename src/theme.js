// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4e8df2', // Azul (cor principal)
    },
    secondary: {
      main: '#5446f2', // Azul Saturado (cor secundária)
    },
    background: {
      default: '#65bdf7', // Ciano (fundo)
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h1: {
      fontWeight: 800,
      color: '#4e8df2', // Azul no título principal
    },
    h2: {
      fontWeight: 600,
      color: '#5446f2', // Azul Saturado no subtítulo
    },
  },
});

export default theme;
