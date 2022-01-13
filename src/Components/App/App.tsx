import {BrowserRouter} from 'react-router-dom';
import {Nav} from '../Nav/Nav';
import {Router} from '../../Router/Router';
import React from 'react';

export function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Router />
    </BrowserRouter>
  );
}
