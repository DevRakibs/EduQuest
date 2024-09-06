import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { theme } from './theme.js'
import { BrowserRouter } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop.jsx'
import UserProvider from './context/UserProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ScrollToTop />
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </UserProvider>
  </StrictMode>,
)
