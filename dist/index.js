import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { App } from './Components/App/App';
import { configureEpic, setupStore } from './Store/Store';
const store = setupStore();
configureEpic();
ReactDOM.render(React.createElement(React.StrictMode, null,
    React.createElement(Provider, { store: store },
        React.createElement(App, null))), document.getElementById('root'));
//# sourceMappingURL=index.js.map