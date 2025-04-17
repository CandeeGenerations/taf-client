import React from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import {ConvexProvider, ConvexReactClient} from 'convex/react'
import {getEnvVar} from './config/env'

const convex = new ConvexReactClient(getEnvVar('convexUrl'))

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ConvexProvider client={convex}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ConvexProvider>
  </React.StrictMode>,
)
