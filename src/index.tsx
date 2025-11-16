import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { Toaster } from 'react-hot-toast';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
    {/* Global Toaster mounted at root to avoid unmounting during route/provider changes */}
    <Toaster position="bottom-center" toastOptions={{ duration: 5000 }} />
  </React.StrictMode>
);
