import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";
import { UserProvider } from './userProvider';
import { ContentProvider } from './contentProvider'
import { OverlayProvider } from './overlayProvider'


const root = ReactDOM.createRoot(document.getElementById('root'));

const domain = process.env.REACT_APP_AUTH0_DOMAIN
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID

root.render(
  <React.StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
    >
        <ContentProvider>
          <OverlayProvider>
            <App />
          </OverlayProvider>
        </ContentProvider>
    </Auth0Provider>
  </React.StrictMode >
);


