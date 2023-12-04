import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import ErrorBoundary from './ErrorBoundary';
import './index.css';
import  { reportWebVitals } from './reportWebVitals';

const root = document.getElementById('root');
const rootElement = root || document.createElement('div');
const rootContainer = createRoot(rootElement);
rootContainer.render(
  <ErrorBoundary>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ErrorBoundary>
);

reportWebVitals();