import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { CssBaseline, Experimental_CssVarsProvider } from '@mui/material'
import theme from './theme'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Provider } from 'react-redux'

import {BrowserRouter} from 'react-router-dom';
ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter basename={'/'}>
    <Experimental_CssVarsProvider theme={theme}>
      <CssBaseline />
      <App />
      <ToastContainer position="bottom-right" theme={'colored'}/>
    </Experimental_CssVarsProvider>
  </BrowserRouter>
)
