import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '~app/App.tsx'
import '~global_styles/index.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
