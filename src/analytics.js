// src/analytics.js
import ReactGA from 'react-ga4';

export const initGA = () => {
  ReactGA.initialize("G-YDZRCPZWT8"); // استبدل بـ Measurement ID بتاعك
  ReactGA.send({ hitType: 'pageview', page: window.location.pathname });
};

export const trackEvent = (category, action, label) => {
  ReactGA.event({ category, action, label });
};
