import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";
import { ContentProvider } from './contentProvider'
import { OverlayProvider } from './overlayProvider'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-5j24yhbq6o0lc31u.us.auth0.com"
      clientId="Su0FSHlzUjIKriPcZABz06mZBwnMhRJ1"
      redirectUri={window.location.origin}
      audience="https://dev-5j24yhbq6o0lc31u.us.auth0.com/api/v2/"
      scope="read:current_user update:current_user_metadata"
    >
      <ContentProvider>
        <OverlayProvider>
          <App />
        </OverlayProvider>
      </ContentProvider>
  </Auth0Provider>
  </React.StrictMode >
);


