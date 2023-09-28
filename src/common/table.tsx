import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';

const Calendar: React.FC = () => {
  return (
    <TableContainer component={Paper} sx={{marginBottom:'40px'}} >
      <Typography
          padding={2}
          color="#2B81B5"
          sx={{ textAlign: 'center', fontSize: '1rem', fontWeight: 'bold'}}
          >
            PROGRAMA GRATUITO DE PREPARACIÓN STARTUP PERÚ 10G
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
          <TableCell sx={{ 
            fontWeight: 'bold', 
            backgroundColor: '#f0f0f0',
            color:'#2B81B5'
             }}>Descripción</TableCell>
            <TableCell sx={{ 
              fontWeight: 'bold', 
              backgroundColor: '#f0f0f0',
              color:'#2B81B5'
               }}>Fechas</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {calendarData.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.description}</TableCell>
              <TableCell>{item.dates}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Typography
        variant="body1"
        padding={3}
        color="#000000"
        sx={{ textAlign: 'center', fontSize: '0.8rem', fontWeight: 'bold'}}
      >
      Los respaldados pasarán por un programa de mentorías personalizadas en pitch previo a sus entrevistas.
      </Typography>
    </TableContainer>

  );
};

const calendarData = [
  {
    description: 'Taller 1: Conceptos y guía de postulación',
    dates: 'jueves 05/10',
  },
  {
    description: 'Asesoría 1: Diagnóstico de la startup',
    dates: 'Lunes 9/10 a viernes 13/10',
  },
  {
    description: 'Taller 2: Presupuesto y documentación a presentar',
    dates: 'Martes 17/10',
  },
  {
    description: 'Taller 3: Pitch de impacto',
    dates: 'Viernes 20/10',
  },
  {
    description: 'Asesoría 2: Revisión de formulario y absolución de dudas',
    dates: 'Lunes 23/10 a viernes 27/10',
  },
  {
    description: 'Preselección: Finalistas del programa con posibilidad de respaldo',
    dates: 'Lunes 30/10',
  },
  {
    description: 'Demo Day: Presentación de startups',
    dates: 'Viernes 03/11',
  },
  {
    description: 'Selección: Respaldo de 20 startups para respaldar en el concurso',
    dates: 'Lunes 06/11',
  }
];

export default Calendar;
