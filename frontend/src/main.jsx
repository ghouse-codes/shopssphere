import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import './App.css';
import App from './App.jsx';
import { CartProvider } from './context/CartContext.jsx';
import ToastProvider from './components/ToastProvider.jsx';
import { Toaster } from 'react-hot-toast';
import { HelmetProvider } from 'react-helmet-async'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>   
    <BrowserRouter>
      <CartProvider>
        <ToastProvider />
        <App />
        <Toaster position="top-right" />
      </CartProvider>
    </BrowserRouter>
   </HelmetProvider> 
  </StrictMode>

);
