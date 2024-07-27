import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DarkModeContextProvider } from './components/darkModeContext';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
  

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <BrowserRouter>
    <App />      
    </BrowserRouter>
);

reportWebVitals();
