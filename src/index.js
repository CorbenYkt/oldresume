import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter as Router } from "react-router-dom";
import { GoogleOAuthProvider } from '@react-oauth/google';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GoogleOAuthProvider clientId="643247336193-75l4u46a4ua5skek5lh5fb25cooi241s.apps.googleusercontent.com">
    <Router>
      <App />
    </Router>
  </GoogleOAuthProvider>
);

reportWebVitals();
