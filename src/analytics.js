// src/analytics.js
import ReactGA from 'react-ga4';

export const initGA = () => {
  ReactGA.initialize("G-YWP4NGKHE1");
  ReactGA.send({ hitType: 'pageview', page: window.location.pathname });
};

export const trackEvent = (category, action, label) => {
  ReactGA.event({ category, action, label });
};
