import React from 'react';
import ReactDOM  from 'react-dom/client';
import LoginScreen from './components/login';
import "./index.css"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LoginScreen />
  </React.StrictMode>,
)