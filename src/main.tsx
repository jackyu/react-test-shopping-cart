import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const container = document.getElementById('app') as HTMLElement;
const app = createRoot(container);

app.render(
  <StrictMode>
    <App />
  </StrictMode>,
)
