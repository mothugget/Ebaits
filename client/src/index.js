import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthProvider } from './authProvider';
import { ContentProvider } from './contentProvider'
import { OverlayProvider } from './overlayProvider'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <ContentProvider>
        <OverlayProvider>
          <App />
        </OverlayProvider>
      </ContentProvider>
  </AuthProvider>
  </React.StrictMode >
);


