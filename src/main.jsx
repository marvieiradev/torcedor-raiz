import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Router } from './pages'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='flex flex-col h-full items-center'>
      <Router />
    </div>
  </StrictMode>,
)
