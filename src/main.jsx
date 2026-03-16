import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

console.log('Main.jsx: Initializing React root...');
const rootElement = document.getElementById('root');
if (!rootElement) {
  console.error('Main.jsx: Root element not found!');
} else {
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
  console.log('Main.jsx: Render command sent.');
}
