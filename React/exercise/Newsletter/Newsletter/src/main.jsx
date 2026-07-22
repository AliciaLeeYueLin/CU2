import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import NewsletterSubscribe from '../component/newsletter-subscribe.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NewsletterSubscribe />
  </StrictMode>,
)
