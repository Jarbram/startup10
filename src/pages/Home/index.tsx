import React from 'react';
import { Box, Button, Container, Grid, Typography} from '@mui/material';
import SUP10G from '../../assets/SUP10G.png';
import IMG1 from '../../assets/bg.jpg';
import { IncrementalCounter } from '../../common/counter';
import Calendar from '../../common/table';
import Team from '../../common/team';
import FaqAccordion from '../../common/term';

export const HomePage: React.FC = () => {

  return (
    <Container sx={{ mt: 10, mb: 5 }} maxWidth="xl">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          py: 8,
        }}
      >
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          gap={3}
        >
          <Typography
            variant="h6"
            sx={{ textAlign: 'center', color: '#ffffff' }}
            maxWidth="md"
          >
            Participa en el programa de preparación de Hub UDEP y obtén
          </Typography>
          <Typography
            variant="h5"
            color="#fbbb21"
            sx={{ textAlign: 'center', fontWeight: 'bold' }}
            maxWidth="md"
          >
            CAPITAL SEMILLA
          </Typography>
          <img src={SUP10G} alt="logo" width="auto" height="120px" style={{
             maxWidth: '100%', 
             height: 'auto',
             maxHeight: '220px',
          }}  />
          <Grid container justifyContent="center" alignItems="center" gap={3}>
            <Grid item>
              <Typography
                variant="h4"
                color="#fbbb21"
                sx={{ textAlign: 'center', fontWeight: 'bold' }}
              >
                S/. 67,000 
              </Typography>
              <Typography sx={{ textAlign: 'center', color: '#ffffff',fontSize:'1.3rem' }}>
                Para Emprendimientos Innovadores
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="h4"
                color="#fbbb21"
                sx={{ textAlign: 'center', fontWeight: 'bold' }}
              >
                S/. 150,000 
              </Typography>
              <Typography
                maxWidth="sm"
                sx={{ textAlign: 'center', color: '#ffffff',fontSize:'1.3rem' }}
              >
                Para Emprendimientos Dinámicos
              </Typography>
            </Grid>
          </Grid>
          <Button
            variant="contained"
            sx={{
              width: '200px',
              height: '40px',
              marginTop: '15px',
              backgroundColor: '#FBBB21',
              fontWeight: 'bold',
              '&:hover': {
                backgroundColor: '#FBBB21', // Cambio de color al pasar el cursor
                opacity: 0.9, // Cambio de opacidad al pasar el cursor
              },
            }}
            href='https://docs.google.com/forms/d/e/1FAIpQLSc2esSelf4KDGhkvazDAUPzYHdTqlC3RIag8E_R9Hy27iMN-w/viewform?usp=pp_url'
          >
            INSCRÍBETE AQUÍ
          </Button>
        </Grid>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          py: 8,
          px: 5,
          borderRadius: 6,
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${IMG1})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          marginBottom: '20px', // Espacio inferior
        }}
      >
        <Grid container justifyContent="center" alignItems="center" gap={3}>
          <Typography
            variant="h5"
            sx={{
              color: '#ffffff',
              fontWeight: 'bold',
              marginBottom: '30px',
            }}
          >
            Somos HUB UDEP
          </Typography>
        </Grid>
        <Grid item padding={4}>
          <Typography
            sx={{
              color: '#ffffff',
            }}
            maxWidth="md"
          >
            Centro de Innovación y Emprendimiento que impulsa y brinda soporte al ecosistema peruano para aportar a la competitividad y el desarrollo del país.
          </Typography>
        </Grid>
        <Grid item paddingBottom={4}>
          <Typography
            sx={{
              color: '#ffffff',
            }}
            maxWidth="md"
          >
            A través de su incubadora, fomenta la creación y crecimiento de más y mejores startups en Perú y Latinoamérica.
          </Typography>
        </Grid>
        {/* WhatsApp Contact Button */}
        <Button
          variant="contained"
          sx={{
            width: '270px',
            height: '60px',
            marginTop: '15px',
            backgroundColor: '#FBBB21',
            fontWeight: 'bold',
            '&:hover': {
              backgroundColor: '#FBBB21', // Cambio de color al pasar el cursor
              opacity: 0.9, // Cambio de opacidad al pasar el cursor
            },
          }}
          href="https://wa.me/+51951551236"
          target="_blank"
          rel="noopener noreferrer"
        >
          CONTÁCTANOS AL WHATSAPP
        </Button>
      </Box>
      <IncrementalCounter />
      <Calendar />
      <Team />
      <FaqAccordion />
    </Container>
  );
};


