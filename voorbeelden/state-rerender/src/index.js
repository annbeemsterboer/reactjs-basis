import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Sandbox from "./sandbox";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Sandbox />
  </React.StrictMode>
);
