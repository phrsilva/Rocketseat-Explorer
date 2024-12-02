import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Details } from './pages/details/index.jsx'
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme.js'
import GlobalStyles from './styles/global.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Details />
    </ThemeProvider>
  </StrictMode>
)
