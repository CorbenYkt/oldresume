import React, { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "./routes/home";
import Gallery from "./routes/gallery";
import Currency from "./routes/currency";
import Contacts from './routes/contacts';
import Navbar from './navbar';
import { Container, Grid } from '@mui/material';
import Box from '@mui/material/Box';

function App() {

  return (
    <>
      <div>
        <Grid container spacing={0}>
          <Grid item xs={1}>
          </Grid>
          <Grid item xs={10}>
            <Box component={'footer'} display={'flex'} flexDirection={'column'} alignItems={'center'}
              py={'0rem'}>
              <Navbar>
              </Navbar>
            </Box>
            <Container>
              <Routes>
                <Route index path="/" element={<Home />} />
                <Route exact path="/gallery" element={<Gallery />} />
                {/* <Route exact path="/currency" element={<Currency />} /> */}
                <Route exact path="/contacts" element={<Contacts />} />
              </Routes>
              <Box component={'footer'} display={'flex'} flexDirection={'column'} alignItems={'center'}
                py={'0rem'}><br></br>
                <a href={'https://github.com/corbenykt'} style={{ fontWeight: 'normal', textDecorationLine: '' }} >
                  By Dmitrii Artemev
                </a>
                <p style={{ fontSize: '0.75rem' }}>&copy; {(new Date().getFullYear())}</p>
              </Box>
            </Container>
          </Grid>
          <Grid item xs={1}>
          </Grid>
        </Grid>

      </div>
    </>
  );
}

export default App;