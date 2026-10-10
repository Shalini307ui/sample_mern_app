import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import 'bootstrap/dist/css/botstrap.min.css'
import {browserrouter} from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <browserrouter>
    <App />
    </browserrouter>
  </StrictMode>,
)
