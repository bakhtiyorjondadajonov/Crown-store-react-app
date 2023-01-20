import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import UserContextProvider from './contexts/userContext';
import ProductProvider from './contexts/productsContext';
import { CartProvider } from './contexts/cartContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <UserContextProvider>
      <ProductProvider>
        <CartProvider>
    <App/>
        </CartProvider>
      </ProductProvider>
    </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);


