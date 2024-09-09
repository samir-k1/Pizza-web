
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import App from './App.jsx';
import './index.css';
import StoreContextProvider from './Pages/Context/StoreContext.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <StoreContextProvider>
    <App />

    </StoreContextProvider>
    </BrowserRouter>
  </StrictMode>
);
