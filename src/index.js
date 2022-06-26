import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react'
import './index.css';
import { App } from './App';
import { BrowserRouter } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>  
    <Auth0Provider 
      domain="summerexcites.us.auth0.com" 
      clientId="bp3nHIvgP8wPzv9VBDxq3xVawHKBanCv" 
      redirectUri={window.location.origin}
    >
      
      <BrowserRouter>
      <App />
      </BrowserRouter>
    </Auth0Provider>
</React.StrictMode>
);

