import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme.js'
import GlobalStyles from './styles/global.js'

import { Routes } from './routes'

import { ProvedorDeAutenticacao } from './hooks/aut.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <ThemeProvider theme={theme}>
    <GlobalStyles />
      <ProvedorDeAutenticacao>
        <Routes />
      </ProvedorDeAutenticacao>
  </ThemeProvider>
</StrictMode>
)
