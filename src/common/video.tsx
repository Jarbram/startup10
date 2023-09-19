import React from 'react';
import { Typography, Container } from '@mui/material';

const VideoEmbed: React.FC = () => {
  return (
    <Container sx={{ mt: 5, mb: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography variant="h5" align="center" sx={{ fontWeight: 'bold', color: '#ffffff', mb: 2 }}>
        Conoce más de la Experiencia HubUDEP
      </Typography>
      <iframe
        width="950"
        height="600"
        style={{
            maxWidth: '100%',
        }}
        src="https://www.youtube.com/embed/ASjJ4ki-w1Y?si=yBMlPIer1oxkqtWk"
        title="YouTube video player"
      ></iframe>
    </Container>
  );
};

export default VideoEmbed;
