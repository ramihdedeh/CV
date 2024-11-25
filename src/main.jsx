import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import CV from './CV.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h1>CV Application</h1>
    <CV />
  </StrictMode>,
)
