import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { CssBaseline, Experimental_CssVarsProvider } from '@mui/material'
import theme from './theme'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Experimental_CssVarsProvider theme={theme}>
      <CssBaseline />
      <App  />
    </Experimental_CssVarsProvider>
  </React.StrictMode>
)
