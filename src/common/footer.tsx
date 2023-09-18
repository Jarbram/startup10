import React from 'react';
import { Typography, Container, Grid, Box, Link, Divider } from '@mui/material';
import UDEP from "../assets/UDEP.png";
import PI from "../assets/proinnovate.png";
import HubEx from "../assets/Logo Hub colores - extendido.png";


const footerStyles = {
  backgroundColor: 'white',
  color: '#333',
  marginTop: 'auto',
  padding: '40px 0',
};

const Footer: React.FC = () => {
  return (
    <Box sx={footerStyles}>
      <Container>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={6} sx={{ textAlign: 'center' }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#2B81B5', mb: 2 }}>
              Un programa de:
            </Typography>
            <Link href="https://hub.udep.pe/" target="_blank" rel="noopener noreferrer"> {/* Vinculamos la web al logo */}
            <img src={HubEx} alt="Logo del Centro HUB" style={{
             maxWidth: '100%', 
             height: 'auto',
             maxHeight: '220px',
          }} />
            </Link>
          </Grid>
          <Grid item xs={12} md={6} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#2B81B5', mb: 2 }}>
              Con el respaldo de:
            </Typography>
            <img src={UDEP} alt="Logo de la Universidad de Piura" style={{ maxWidth: '180px', marginRight: '20px', height:'auto',maxHeight: '220px' }} />
            <img src={PI} alt="Logo de Proinnovate" style={{ maxWidth: '180px',height:'auto',maxHeight: '220px', }} />
          </Grid>
          <Grid item xs={12} sx={{ textAlign: 'center' }}>
          <Divider sx={{ mt: 2, mb: 2 }} />
            <Typography>
              Av. Ramón Mugica 131, Urb. San Eduardo, Piura
            </Typography>
            <Typography>
              <Link href="tel:+51951551236" color="inherit">+51 951551236</Link>
            </Typography>
            <Typography>
              <Link href="mailto:alex.zapata@hub.udep.pe" color="inherit">alex.zapata@hub.udep.pe</Link>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
