import React from 'react';
import { Typography, Box } from '@mui/material';

const Home = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
        alignItems: 'flex-start',
        height: '100vh',
        background: 'linear-gradient(to left, #5b79f0, #80d0f2)', 
        textAlign: 'center',
        padding: '2rem',
      }}
    >
      <Typography
        variant="h4"
        color="white"
        sx={{
          marginBottom: '1rem',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
        }}
      >
        Análise e Desenvolvimento de Sistemas
      </Typography>
      <Typography
        variant="h6"
        color="white"
        sx={{
          fontWeight: '300',
          textShadow: '1px 1px 3px rgba(0, 0, 0, 0.3)',
        }}
      >
        Aula: Material-UI - Atividade Prática Módulo 10
      </Typography>
      <Typography
        variant="subtitle1"
        color="white"
        sx={{
          marginTop: '1rem',
          fontStyle: 'italic',
          textShadow: '1px 1px 3px rgba(0, 0, 0, 0.3)',
        }}
      >
        Por: Guilherme Fideles Vitalino
      </Typography>
    </Box>
  );
};

export default Home;
