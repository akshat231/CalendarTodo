import ReactDOM from 'react-dom/client';
import React from 'react';
import App from './App.js'
import './index.css'
import { Provider } from 'react-redux';
import Store from './Store.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Provider store={Store}>
    <App />
    </Provider>
  // </React.StrictMode>
);