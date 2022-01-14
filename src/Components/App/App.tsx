import {BrowserRouter} from 'react-router-dom';
import {Nav} from '../Nav/Nav';
import {Router} from '../../Router/Router';
import React from 'react';
import {Container} from '@mui/material';

export function App() {
  return (
    <BrowserRouter>
      <Container maxWidth={'xl'} className={'app'}>
        <Nav />
        <Router />
      </Container>
    </BrowserRouter>
  );
}
