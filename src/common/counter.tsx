import React, { useState, useEffect } from 'react';
import { Typography, Container, Grid } from '@mui/material';

export const IncrementalCounter: React.FC = () => {
  const [startupsCount, setStartupsCount] = useState<number>(0);
  const [trainingsCount, setTrainingsCount] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Increment startups count up to 35
      if (startupsCount < 35) {
        setStartupsCount((prevCount) => prevCount + 1);
      }


      // Increment trainings count up to 100
      if (trainingsCount < 100) {
        setTrainingsCount((prevCount) => prevCount + 1);
      }
    }, 20);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(interval);
  }, [startupsCount, trainingsCount]);

  return (
    <Container maxWidth="xl" sx={{ margin: '80px 0' }}>
      <Grid container spacing={3} mb={6}>
        <Grid item xs={12} sm={4}>
          <Typography variant="h3" align="center" color='#FBBB21'
          sx={{ fontWeight: 'bold' }}>
            +{startupsCount}
          </Typography>
          <Typography variant="body1" align="center" color='#ffffff'>
            Startups ganadoras
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h3" align="center" color='#FBBB21' 
          sx={{ fontWeight: 'bold' }}>
            + S/. 4.5M
          </Typography>
          <Typography variant="body1" align="center" color='#ffffff'>
            en capital semilla
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h3" align="center" color='#FBBB21'
          sx={{ fontWeight: 'bold' }}>
            +{trainingsCount}
          </Typography>
          <Typography variant="body1" align="center" color='#ffffff'>
            Startups capacitados
          </Typography>
        </Grid>
      </Grid>
      <Typography
        variant='h5'
        align="center"
        color='#ffffff'
        sx={{ marginTop: '20px', fontSize: '1.2rem', fontWeight: 'bold' }}
      >
        Con presencia en Piura, Lima y todo el Perú
      </Typography>
    </Container>
  );
};


