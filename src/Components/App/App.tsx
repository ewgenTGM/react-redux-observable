import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Router } from '../../Router/Router';
import { Nav } from '../Nav/Nav';

export function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Router />
    </BrowserRouter>
  );
}
