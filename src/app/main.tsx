import { App } from 'app/providers/app'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import '../app/theme/reset.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
