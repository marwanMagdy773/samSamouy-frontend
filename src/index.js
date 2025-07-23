import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles.css';
import ReactGA from 'react-ga4';

// ✅ حط الـ Measurement ID بتاعك هنا
ReactGA.initialize('G-YDZRCPZWT8');

// ✅ تسجل أول زيارة للموقع (Page View)
ReactGA.send({ hitType: "pageview", page: window.location.pathname });
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
