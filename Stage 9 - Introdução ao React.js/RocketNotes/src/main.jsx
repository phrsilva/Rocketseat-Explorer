import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Home } from './pages/home/index.jsx'
import { SignIn } from './pages/signin/index.jsx'
import { SignUp } from './pages/signup/index.jsx'
import { Profile } from './pages/profile/index.jsx'
import { New } from './pages/new/index.jsx'

import { ThemeProvider } from 'styled-components'
import theme from './styles/theme.js'
import GlobalStyles from './styles/global.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <New />
    </ThemeProvider>
  </StrictMode>
)
