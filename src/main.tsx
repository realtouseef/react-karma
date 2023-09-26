import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { Karma } from './index.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Karma color='pink'>
      <App />
    </Karma>
  </React.StrictMode>
);
