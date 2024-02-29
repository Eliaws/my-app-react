import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from './Footer';
import Header from './Header';
import ComposantHome from './ComposantHome';
import ComposantTechnology from './ComposantTechnology';

const sections = [
  { title: 'Home', url: '/' },
  { title: 'Technology', url: '/technology' }
];

const theme = createTheme();

export default function Blog() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Blog" sections={sections} />
        
        <BrowserRouter>
          <Routes>

            <Route exact path="/" element={<ComposantHome/>}/>
            <Route exact path="/technology" element={<ComposantTechnology/>}/>

          </Routes>
        </BrowserRouter>


      </Container>
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </ThemeProvider>
  );
}