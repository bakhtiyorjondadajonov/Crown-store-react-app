import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import UserContextProvider from './contexts/userContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <UserContextProvider>
    <App/>
    </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);


