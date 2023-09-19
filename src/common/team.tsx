import React from 'react';
import { Typography, Container, Grid, CardContent, Avatar, Paper, Chip } from '@mui/material';
import Img1 from '../assets/1.png';
import Img2 from '../assets/2.png';
import Img3 from '../assets/3.png';

const Team: React.FC = () => {
  const teamMembers = [
    {
      name: 'Eddie Valdiviezo',
      role: 'Director de la incubadora del Hub UDEP',
      description: 'Pitch de Impacto',
      imageSrc:Img1,
      linkedin: 'https://www.linkedin.com/in/eddievaldiviezo/',
    },
    {
      name: 'Alex Zapata',
      role: 'Coordinador general de la incubadora del Hub UDEP',
      description: 'Talleres y Asesorías',
      imageSrc: Img2,
      linkedin: 'https://www.linkedin.com/in/alex-zapata/',
    },
    {
      name: 'Alan Espinoza',
      role: 'CEO Inca Valley',
      description: 'Presupuesto y Documentación',
      imageSrc: Img3,
      linkedin: 'https://www.linkedin.com/in/alaninnovat/',
    },
  ];

  return (
    <Container sx={{ mt: 8, mb: 5 }}>
      <Typography variant="h5" align="center" sx={{
        fontWeight: 'bold',
        color: '#ffffff',
        marginBottom: '20px',
      }}>
        CONOCE A NUESTROS ESPECIALISTAS
      </Typography>
      <Grid container spacing={3} justifyContent="center" mt={4}>
        {teamMembers.map((member, index) => (
          <Grid item key={index}>
            <Paper elevation={3} 
              sx={{ 
                padding: '16px', 
                textAlign: 'center', 
                borderRadius: '16px', 
                width: '340px', 
                background:'transparent',
                boxShadow: '0px 0px 0px rgba(0, 0, 0, 0.1)',
                height: '100%',
                border: '1px solid #ffffff',
                display: 'flex',
                flexDirection: 'column', 
              }}
            >
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                <Avatar
                  alt={member.name}
                  src={member.imageSrc}
                  sx={{ width: 250, height: 250, margin: '0 auto'}}
                />
              </a>
              <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <Typography gutterBottom variant="h6" sx={{ fontWeight: 'bold', color:'#ffffff' }}>
                    {member.name}
                  </Typography>
                  <Typography variant="body2" color="#ffffff" sx={{mb:'10px'}}>
                    {member.role}
                  </Typography>
                </div>
                <Chip label={member.description} sx={{ backgroundColor: '#FBBB21', color: '#fff', fontWeight:'bold'}} />
              </CardContent>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Team;
