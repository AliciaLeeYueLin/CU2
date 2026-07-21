import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ShowBasketballTeam from './ShowBasketballTeam.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ShowBasketballTeam />
  </StrictMode>,
)
