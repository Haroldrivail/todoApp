import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ThemeProvider } from './components/ThemeProvider.tsx'
import Navbar1 from './components/Navbar1.tsx'
import Navbar2 from './components/Navbar2.tsx'
import Navbar3 from './components/Navbar3.tsx'
import Navbar4 from './components/Navbar4.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
        <Navbar1/>
        <Navbar2/>
        <Navbar3/>
        <Navbar4/>
        <App />
    </ThemeProvider>
  </StrictMode>,
)
