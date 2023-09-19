import React from 'react';
import { Typography, Container, Grid, CardContent, Avatar, Paper, Chip } from '@mui/material';
import Img1 from '../assets/1.png';
import Img2 from '../assets/2.png';
import Img3 from '../assets/3.png';
import Img4 from '../assets/4.png';
import Img5 from '../assets/5.png';
import Img6 from '../assets/6.png';

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
    }
  ];

  const champions = [
    {
      name: 'Ivonne Salazar',
      role: 'CEO de Tachyon Perú',
      description: 'Ganadora SUP 8G+',
      imageSrc:Img4,
      linkedin: 'https://www.linkedin.com/in/ivonne-edith-salazar-salinas-6182a766/',
    },
    {
      name: 'Gianfranco Arévalo',
      role: 'CEO de Simpplex ',
      description: 'Ganador SUP 9G',
      imageSrc:Img5,
      linkedin: 'https://www.linkedin.com/in/gianfrancoarevalo/',
    },
    {
      name: 'Fredy Ballón',
      role: 'CEO de Portero Seguro',
      description: 'Ganador SUP 8G+',
      imageSrc: Img6,
      linkedin: 'https://www.linkedin.com/in/fredy-ball%C3%B3n-medina-829443b/',
    },
  ]

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
                  <Typography gutterBottom variant="h6" sx={{ fontWeight: 'bold', }}>
                    {member.name}
                  </Typography>
                  <Typography variant="body2"  sx={{mb:'10px'}}>
                    {member.role}
                  </Typography>
                </div>
                <Chip label={member.description} sx={{ backgroundColor: '#2B81B5', color:'#ffffff', fontWeight:'bold'}} />
              </CardContent>
            </Paper>
          </Grid>
        ))}
      </Grid>
      <Typography variant="h5" align="center" mt={8} sx={{
        fontWeight: 'bold',
        color: '#ffffff',
        marginBottom: '20px',
      }}>
        STARTUPS INVITADAS
      </Typography>
      <Grid container spacing={3} justifyContent="center" mt={4}>
        {champions.map((member, index) => (
          <Grid item key={index}>
            <Paper elevation={3} 
              sx={{ 
                padding: '16px', 
                textAlign: 'center', 
                borderRadius: '16px', 
                width: '340px', 
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
                  <Typography gutterBottom variant="h6" sx={{ fontWeight: 'bold' }}>
                    {member.name}
                  </Typography>
                  <Typography variant="body2"  sx={{mb:'10px'}}>
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
