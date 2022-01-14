import { BrowserRouter } from 'react-router-dom';
import { Nav } from '../Nav/Nav';
import { Router } from '../../Router/Router';
import React from 'react';
import { Container } from '@mui/material';
export function App() {
    return (React.createElement(BrowserRouter, null,
        React.createElement(Container, { maxWidth: 'xl', className: 'app' },
            React.createElement(Nav, null),
            React.createElement(Router, null))));
}
//# sourceMappingURL=App.js.map