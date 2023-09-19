
import { AppBar,  Box, Container, Grid, Toolbar } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import UDEP from "../assets/UDEP.png"
import HUB from "../assets/HUB.png"


export const Navbar: React.FC<{}> = () => {
  const navigate = useNavigate();



  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{backgroundColor:'#ffffff'}} >
        <Toolbar>
          <Container maxWidth="xl">
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              padding={'10px 0px'}
            >
              <Grid
                item
                sx={{ cursor: 'pointer' }}
                onClick={() => navigate('/')}
              >
                <img src={UDEP} alt="logo" width="auto" height="50px" style={{
             maxWidth: '100%', 
             maxHeight: '300px',
          }} />
              </Grid>
              <Grid item >
                <img src={HUB} alt="logo" width="auto" height="40px" style={{
             maxWidth: '100%', 
             maxHeight: '280px',
          }} />
              </Grid>
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
