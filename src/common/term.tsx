import React, { useState } from 'react';
import { Typography, Container, Accordion, AccordionSummary, AccordionDetails, List, ListItem, ListItemText } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FaqAccordion: React.FC = () => {
  const [expanded, setExpanded] = useState<string | false>('panel1');

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  const termsAndConditions = [
    'Las fechas pueden cambiar según el avance del programa.',
    'El programa es GRATUITO previa inscripción del equipo emprendedor.',
    'No todos los equipos emprendedores dentro de la inscripción reciben necesariamente las asesorías personalizadas. Solo reciben asesoría aquellos equipos que cumplan con los requisitos mínimos en las bases y lleguen a agendar durante la semana de asesorías.',
    'La participación en el programa no incluye el respaldo de la incubadora en el concurso.',
    'La incubadora del Hub UDEP no se responsabiliza en caso el equipo emprendedor quede descalificado del concurso ni de la información puesta en el Sistema Ingenius de ProInnóvate.',
    'Las vacantes son limitadas: una vez se lleguen a 60 inscritos, se cierran las vacantes.',
    'Se dará un certificado a nombre de la startup siempre y cuando se cumpla con la participación en todas las asesorías y en mínimo 2 talleres.',
    'Hub UDEP respaldará entre 10 a 15 startups del programa según los resultados del Demo Day final.',
  ];

  const faq = [
    {
      question: '¿Quiénes pueden postular al concurso Startup Perú 10G?',
      answer: 'Emprendedores o empresas que cumplan los requisitos mínimos según su categoría a postular.',
    },
    {
      question: '¿Qué startups pueden postular con una incubadora?',
      answer: 'Aquellas que cumplan con los requisitos mínimos y que hagan match con los propósitos y valores de la incubadora.',
    },
    {
      question: '¿Aseguro ganar el fondo en caso postule con el respaldo de una incubadora?',
      answer: 'No. ProInnóvate toma la decisión final de los ganadores. Las incubadoras asesoran a las startups para que tengan mayores posibilidades de ganar.',
    },
    {
      question: '¿Cómo puedo ser respaldado por Hub UDEP?',
      answer: 'Hub UDEP lleva a cabo este programa con el objetivo de escoger a las startups de alto rendimiento para ser respaldadas en el concurso.',
    },
    {
      question: '¿Dónde encuentro las bases del concurso?',
      answer: (
        <div>
        <p>
          <a href="https://startup.proinnovate.gob.pe/concursos/emprendimientos-innovadores/" target="_blank" rel="noopener noreferrer">
            Emprendedores tipo startup innovadores
          </a>
        </p>
        <p>
          <a href="https://startup.proinnovate.gob.pe/concursos/emprendimientosdinamicos/" target="_blank" rel="noopener noreferrer">
            Emprendedores tipo startup dinámicos
          </a>
        </p>
        <p>
          <a href="https://startup.proinnovate.gob.pe/concursos/emprendimientos-innovadores/" target="_blank" rel="noopener noreferrer">
            Emprendedores frente al cambio climático - innovadores
          </a>
        </p>
        <p>
          <a href="https://cambioclimatico.proinnovate.gob.pe/concurso/emprendimientos-dinamicos/" target="_blank" rel="noopener noreferrer">
            Emprendedores frente al cambio climático - dinámicos
          </a>
        </p>
      </div>
      ),
    },
  ];

  return (
    <Container sx={{ mt: 5, mb: 8 }}>
      <Accordion expanded={expanded === 'panel0'} onChange={handleChange('panel0')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel0-content" id="panel0-header">
          <Typography variant="body1" sx={{ fontWeight: 'bold', color:'#2B81B5' }}>Términos y Condiciones</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List>
            {termsAndConditions.map((term, index) => (
              <ListItem key={index} disablePadding>
                <ListItemText
                  primary={<span>&#8226; {term}</span>}
                  primaryTypographyProps={{ variant: 'body1', sx: { marginTop: '5px' } }}
                />
              </ListItem>
            ))}
          </List>
        </AccordionDetails>
      </Accordion>
      <Typography variant="h5" align="center" sx={{ fontWeight: 'bold', color: '#ffffff', margin: '40px 0 20px' }}>
        Preguntas Frecuentes
      </Typography>
      {faq.map((item, index) => (
        <Accordion key={index} expanded={expanded === `panel${index + 1}`} onChange={handleChange(`panel${index + 1}`)}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={`panel${index + 1}-content`} id={`panel${index + 1}-header`}>
            <Typography variant="body1" sx={{ fontWeight: 'bold', color: '#2B81B5',}}  >{item.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2">{item.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Container>
  );
};

export default FaqAccordion;
