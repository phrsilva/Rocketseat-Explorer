import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './pages/App/index.jsx'
import { ThemeProvider } from 'styled-components'
import { theme } from './pages/styles/theme'
import GlobalStyles from './pages/styles/global.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles /> 

      <App />


    </ThemeProvider>
  </StrictMode>,
)

